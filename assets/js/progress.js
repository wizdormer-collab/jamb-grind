/* Progress — localStorage-backed. Never throws; degrades to in-memory if storage is blocked. */

window.JAMB = window.JAMB || {};

(function () {
  var KEY = 'jamb2027.progress.v1';
  var memory = null;

  function read() {
    if (memory) return memory;
    try {
      var raw = localStorage.getItem(KEY);
      memory = raw ? JSON.parse(raw) : { chapters: {}, mocks: {}, seen: {} };
    } catch (e) {
      memory = { chapters: {}, mocks: {}, seen: {} };
    }
    if (!memory.chapters) memory.chapters = {};
    if (!memory.mocks) memory.mocks = {};
    if (!memory.seen) memory.seen = {};
    return memory;
  }

  function write() {
    try { localStorage.setItem(KEY, JSON.stringify(memory)); } catch (e) { /* private mode */ }
  }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  var P = {

    /* ---------- chapter quiz results ---------- */

    scoreChapter: function (subjectId, chapterId, correct, total) {
      var d = read();
      var key = subjectId + '/' + chapterId;
      var prev = d.chapters[key] || null;
      var rec = {
        best: prev ? Math.max(prev.best, correct) : correct,
        last: correct,
        total: total,
        attempts: (prev ? prev.attempts : 0) + 1,
        updatedAt: Date.now()
      };
      d.chapters[key] = rec;
      write();
      return clone(rec);
    },

    chapterResult: function (subjectId, chapterId) {
      return read().chapters[subjectId + '/' + chapterId] || null;
    },

    /* ---------- mock exam results ---------- */

    saveMock: function (subjectId, entry) {
      var d = read();
      if (!d.mocks[subjectId]) d.mocks[subjectId] = [];
      entry.at = entry.at || Date.now();
      d.mocks[subjectId].push(entry);
      /* keep the last 20 attempts per subject */
      if (d.mocks[subjectId].length > 20) d.mocks[subjectId] = d.mocks[subjectId].slice(-20);
      write();
      return clone(entry);
    },

    mocksFor: function (subjectId) {
      return clone(read().mocks[subjectId] || []);
    },

    bestMock: function (subjectId) {
      var list = read().mocks[subjectId] || [];
      if (!list.length) return null;
      return list.reduce(function (a, b) {
        return (b.pct > a.pct) ? b : a;
      });
    },

    /* ---------- chapters read ---------- */

    markSeen: function (subjectId, chapterId) {
      var d = read();
      var key = subjectId + '/' + chapterId;
      if (!d.seen[key]) { d.seen[key] = Date.now(); write(); }
    },

    seen: function (subjectId, chapterId) {
      return !!read().seen[subjectId + '/' + chapterId];
    },

    /* ---------- aggregates ---------- */

    subjectStats: function (subjectId) {
      var s = JAMB.subject(subjectId);
      var chapters = JAMB.chapters(subjectId);
      var d = read();
      var totalQ = 0, answered = 0, bestQ = 0, done = 0;

      chapters.forEach(function (ch) {
        totalQ += (ch.quiz ? ch.quiz.length : 0);
        var rec = d.chapters[subjectId + '/' + ch.id];
        if (rec) {
          done++;
          answered += rec.total;
          bestQ += rec.best;
        }
      });

      var mockBest = P.bestMock(subjectId);
      return {
        chaptersTotal: chapters.length,
        chaptersDone: done,
        quizTotal: totalQ,
        quizAnswered: answered,
        quizBest: bestQ,
        quizPct: totalQ ? Math.round((bestQ / totalQ) * 100) : 0,
        chapterPct: chapters.length ? Math.round((done / chapters.length) * 100) : 0,
        mockBestPct: mockBest ? mockBest.pct : null,
        mockCount: (d.mocks[subjectId] || []).length,
        hasContent: chapters.length > 0
      };
    },

    overall: function () {
      var subs = JAMB.subjects;
      var chaptersTotal = 0, chaptersDone = 0, quizBest = 0, quizTotal = 0;
      var subjectsLive = 0;

      subs.forEach(function (s) {
        var st = P.subjectStats(s.id);
        if (st.hasContent) subjectsLive++;
        chaptersTotal += st.chaptersTotal;
        chaptersDone += st.chaptersDone;
        quizBest += st.quizBest;
        quizTotal += st.quizTotal;
      });

      return {
        subjectsLive: subjectsLive,
        subjectsTotal: subs.length,
        chaptersTotal: chaptersTotal,
        chaptersDone: chaptersDone,
        quizBest: quizBest,
        quizTotal: quizTotal,
        quizPct: quizTotal ? Math.round((quizBest / quizTotal) * 100) : 0,
        chapterPct: chaptersTotal ? Math.round((chaptersDone / chaptersTotal) * 100) : 0
      };
    },

    streak: function () {
      var d = read();
      var days = {};
      Object.keys(d.chapters).forEach(function (k) {
        var t = d.chapters[k].updatedAt;
        if (t) days[new Date(t).toDateString()] = 1;
      });
      Object.keys(d.mocks).forEach(function (s) {
        (d.mocks[s] || []).forEach(function (m) { if (m.at) days[new Date(m.at).toDateString()] = 1; });
      });

      var count = 0;
      var cursor = new Date();
      /* allow today to be not-yet-studied without breaking the streak */
      if (!days[cursor.toDateString()]) cursor.setDate(cursor.getDate() - 1);
      while (days[cursor.toDateString()]) {
        count++;
        cursor.setDate(cursor.getDate() - 1);
      }
      return count;
    },

    reset: function () {
      memory = { chapters: {}, mocks: {}, seen: {} };
      try { localStorage.removeItem(KEY); } catch (e) {}
      write();
    },

    exportJSON: function () {
      return JSON.stringify(read(), null, 2);
    }
  };

  JAMB.progress = P;
})();
