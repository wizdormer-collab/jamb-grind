/* Hash router — renders home, subject, chapter, mock and progress views. */

window.JAMB = window.JAMB || {};

(function () {
  var view = null;

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------------- countdown helpers ---------------- */

  function daysBetween(fromISO, toISO) {
    var a = new Date(fromISO + 'T00:00:00');
    var b = new Date(toISO + 'T00:00:00');
    return Math.ceil((b - a) / 86400000);
  }

  function daysUntil(iso) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var target = new Date(iso + 'T00:00:00');
    return Math.ceil((target - today) / 86400000);
  }

  function fmtDate(iso, est) {
    var d = new Date(iso + 'T00:00:00');
    var opts = { day: 'numeric', month: 'short', year: 'numeric' };
    return d.toLocaleDateString('en-GB', opts) + (est ? ' (est.)' : '');
  }

  /* ---------------- chrome ---------------- */

  function renderNav(activeSubject) {
    var nav = document.getElementById('mainnav');
    if (!nav) return;
    nav.innerHTML = '';
    JAMB.subjects.forEach(function (s) {
      var a = document.createElement('a');
      a.href = '#/s/' + s.id;
      a.innerHTML = '<span>' + s.icon + '</span> ' + esc(s.short);
      if (s.id === activeSubject) a.classList.add('on');
      nav.appendChild(a);
    });
  }

  function renderFooterSubjects() {
    var ul = document.getElementById('foot-subjects');
    if (!ul) return;
    ul.innerHTML = '';
    JAMB.subjects.forEach(function (s) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="#/s/' + s.id + '">' + esc(s.name) + '</a>';
      ul.appendChild(li);
    });
  }

  function setAccent(id) {
    var s = id ? JAMB.subject(id) : null;
    document.documentElement.style.setProperty('--accent', s ? s.accent : '#2b50c8');
  }

  /* ---------------- home ---------------- */

  function viewHome() {
    setAccent(null);
    renderNav(null);

    var today = new Date().toISOString().slice(0, 10);
    var d = JAMB.exam.dates;
    var toProfile = daysUntil(d.profile);
    var toExam = daysUntil(d.examEstStart);
    var ov = JAMB.progress.overall();
    var streak = JAMB.progress.streak();

    var html = '';

    html += '<section class="hero"><div class="bar">';
    html += '<h1>Everything you need to pass UTME 2027.</h1>';
    html += '<p class="lede">Five full textbooks taught from scratch, a practice quiz at the end of every chapter, ' +
            'and timed mock exams in the real JAMB format. Study offline, track your progress, and walk into the CBT centre ready.</p>';

    html += '<div class="hero-badges">';
    html += '<span class="badge">Exam format <b>4 subjects · 180 questions · 2 hours</b></span>';
    html += '<span class="badge">Use of English <b>60 questions</b></span>';
    html += '<span class="badge">Each other subject <b>40 questions</b></span>';
    if (streak > 0) html += '<span class="badge">🔥 Study streak <b>' + streak + ' day' + (streak > 1 ? 's' : '') + '</b></span>';
    html += '</div>';

    html += '<div class="countdown">';
    html += cdCard('Profile creation (confirmed)', toProfile, d.profile, 'Get your NIN ready — required for your profile code.', toProfile <= 30);
    html += cdCard('UTME registration', daysUntil(d.registerEst), d.registerEst, 'Not yet announced — estimate from JAMB’s historical schedule.', false);
    html += cdCard('Main exam window', toExam, d.examEstStart, 'Estimated ' + fmtDate(d.examEstStart, true) + ' – ' + fmtDate(d.examEstEnd, true), false);
    html += '</div>';

    if (ov.quizTotal > 0) {
      html += '<div class="countdown" style="grid-template-columns:repeat(auto-fit,minmax(190px,1fr))">';
      html += '<div class="cd-card"><div class="k">Your progress</div><div class="v">' + ov.quizPct + '%</div>' +
              '<div class="s">' + ov.quizBest + ' of ' + ov.quizTotal + ' questions correct (best scores)</div>' +
              '<div class="bar-meter" style="--c:#2b50c8"><i style="width:' + ov.quizPct + '%"></i></div></div>';
      html += '<div class="cd-card"><div class="k">Chapters completed</div><div class="v">' + ov.chaptersDone + ' / ' + ov.chaptersTotal + '</div>' +
              '<div class="s">' + ov.subjectsLive + ' of ' + ov.subjectsTotal + ' subjects available</div>' +
              '<div class="bar-meter" style="--c:#1c7a3e"><i style="width:' + ov.chapterPct + '%"></i></div></div>';
      html += '</div>';
    }

    html += '</div></section>';

    /* subjects */
    html += '<div class="page">';
    html += '<div class="section-head"><h2>Your textbooks</h2><span class="hint">Pick a subject to start studying</span></div>';
    html += '<div class="grid">';

    JAMB.subjects.forEach(function (s) {
      var st = JAMB.progress.subjectStats(s.id);
      var live = st.hasContent;
      html += '<a class="card" href="#/s/' + s.id + '" style="--c:' + s.accent + '">';
      html += '<div class="card-top"><span class="card-icon">' + s.icon + '</span>' +
              '<div><h3>' + esc(s.name) + '</h3><div class="tag">' + esc(s.tagline) + '</div></div></div>';
      html += '<p class="desc">' + esc(s.blurb) + '</p>';
      html += '<div class="card-foot">';
      if (!live) {
        html += '<span class="tag-soon">In progress</span><span class="go">Preview →</span>';
      } else {
        html += '<span>' + st.chaptersDone + '/' + st.chaptersTotal + ' chapters</span>' +
                '<span class="go">' + (st.quizPct ? st.quizPct + '% best' : 'Start →') + '</span>';
      }
      html += '</div>';
      if (live && st.chaptersTotal) {
        html += '<div class="bar-meter"><i style="width:' + st.chapterPct + '%"></i></div>';
      }
      html += '</a>';
    });

    html += '</div>';

    /* quick facts */
    html += '<div class="section-head"><h2>Know before you go</h2></div>';
    html += '<div class="spec-grid">';
    html += spec('Exam length', '2 hours');
    html += spec('Total questions', '180');
    html += spec('Subjects', '4 (English compulsory)');
    html += spec('Mode', 'CBT at accredited centre');
    html += spec('Pass mark (Univ.)', '150 minimum');
    html += spec('Min. age', '16 years');
    html += '</div>';

    html += '<div class="note note-tip" style="margin-top:30px"><span class="ico">💡</span><div>' +
            '<b>You can only sit 4 subjects</b>' +
            '<p>Use of English is compulsory for everyone, leaving three elective slots. Medicine needs English, Physics, ' +
            'Chemistry, Biology. Engineering needs English, Physics, Chemistry, Mathematics. This site builds all five — ' +
            'pick your four once you know your course.</p></div></div>';

    html += '</div>';

    view.innerHTML = html;
  }

  function cdCard(label, days, iso, sub, hot) {
    var n = days < 0 ? Math.abs(days) : days;
    var v = days < 0 ? 'Live now' : n;
    var unit = days < 0 ? '' : (n === 1 ? ' day' : ' days');
    return '<div class="cd-card' + (hot ? ' hot' : '') + '">' +
           '<div class="k">' + esc(label) + '</div>' +
           '<div class="v">' + v + (days < 0 ? '' : unit) + '</div>' +
           '<div class="s">' + esc(sub) + '<br><b>' + fmtDate(iso, label.indexOf('confirmed') === -1) + '</b></div>' +
           '</div>';
  }

  function spec(k, v) {
    return '<div class="spec"><div class="k">' + esc(k) + '</div><div class="v">' + esc(v) + '</div></div>';
  }

  /* ---------------- subject landing ---------------- */

  function viewSubject(id) {
    var s = JAMB.subject(id);
    if (!s) return viewHome();
    setAccent(id);
    renderNav(id);

    var chapters = JAMB.chapters(id);
    var mockQ = JAMB.mockOf(id);
    var st = JAMB.progress.subjectStats(id);

    var html = '<div class="page">';

    html += '<div class="crumbs"><a href="#/">Home</a><span>/</span>' + esc(s.name) + '</div>';

    html += '<div class="subj-hero" data-ico="' + s.icon + '" style="--accent:' + s.accent + '">';
    html += '<div class="k">UTME 2027 · Subject textbook</div>';
    html += '<h1>' + esc(s.name) + '</h1>';
    html += '<p>' + esc(s.blurb) + '</p>';
    html += '<div class="hero-row">';
    html += '<span class="chip">' + s.examQ + ' exam questions</span>';
    html += '<span class="chip">' + (chapters.length ? chapters.length + ' chapters' : 'Chapters coming soon') + '</span>';
    html += '<span class="chip">' + st.quizTotal + ' practice questions</span>';
    if (mockQ.length) html += '<span class="chip">✓ Full mock available</span>';
    html += '</div>';
    html += '</div>';

    if (!chapters.length) {
      html += '<div class="empty-state" style="margin-top:26px">' +
              '<div class="big">' + s.icon + '</div>' +
              '<h3>' + esc(s.name) + ' is being written</h3>' +
              '<p>Physics is first in the build queue and is complete. ' + esc(s.name) +
              ' chapters and its full mock exam land next — check back soon.</p>' +
              '<a class="btn btn-primary" href="#/s/physics">Go to Physics instead</a></div>';
      html += '</div>';
      view.innerHTML = html;
      return;
    }

    /* mock card */
    if (mockQ.length) {
      var best = JAMB.progress.bestMock(id);
      html += '<div class="card" style="--c:' + s.accent + ';margin-top:24px;cursor:default">';
      html += '<div class="card-top"><span class="card-icon">📋</span>' +
              '<div><h3>Full mock exam</h3><div class="tag">' + mockQ.length + ' questions · ' +
              JAMB.exam.durationMin + ' minutes · real UTME format</div></div></div>';
      html += '<p class="desc">Timed end-to-end with automatic submission, question navigator and a full review of every answer.</p>';
      if (best) {
        html += '<p class="desc" style="color:var(--ok);font-weight:700">Best score: ' + best.pct + '% (' + best.correct + '/' + best.total + ')</p>';
      }
      html += '<div class="card-foot"><span class="tag-live">Ready</span>' +
              '<a class="btn btn-primary" href="#/s/' + id + '/mock" style="padding:9px 20px">Start mock →</a></div>';
      html += '</div>';
    }

    html += '<div class="split" style="margin-top:26px">';
    html += '<div>';

    html += '<div class="section-head" style="margin-top:0"><h2>Chapters</h2>' +
            '<span class="hint">' + st.chaptersDone + ' of ' + st.chaptersTotal + ' completed</span></div>';

    html += '<div class="chap-list">';
    chapters.forEach(function (ch, i) {
      var rec = JAMB.progress.chapterResult(id, ch.id);
      var done = !!rec;
      html += '<a class="chap-item" href="#/s/' + id + '/' + ch.id + '">';
      html += '<span class="n' + (done ? ' done' : '') + '">' + (done ? '✓' : (i + 1)) + '</span>';
      html += '<span class="body"><span class="t">' + esc(ch.title) + '</span>' +
              '<span class="d">' + esc(ch.blurb || '') + '</span></span>';
      html += '<span class="right">';
      if (rec) html += '<span class="score">' + rec.best + '/' + rec.total + '</span><br>best score';
      else html += (ch.quiz ? ch.quiz.length + ' questions' : '—');
      html += '</span></a>';
    });
    html += '</div>';
    html += '</div>';

    /* rail */
    html += '<aside class="rail">';
    html += '<div class="rail-box"><h4>Your progress</h4>';
    html += '<div class="bar-meter" style="--c:' + s.accent + '"><i style="width:' + st.chapterPct + '%"></i></div>' +
            '<p class="small muted" style="margin:9px 0 0">' + st.chapterPct + '% of chapters touched · ' +
            st.quizBest + '/' + st.quizTotal + ' best quiz score</p></div>';

    if (st.mockCount) {
      html += '<div class="rail-box"><h4>Mock attempts</h4>';
      var mocks = JAMB.progress.mocksFor(id).slice(-5).reverse();
      mocks.forEach(function (m) {
        var dt = new Date(m.at);
        html += '<div class="row" style="justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line)">' +
                '<span class="small">' + dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + '</span>' +
                '<b class="small" style="color:' + (m.pct >= 50 ? 'var(--ok)' : 'var(--bad)') + '">' + m.pct + '%</b></div>';
      });
      html += '</div>';
    }

    html += '<div class="rail-box"><h4>Syllabus sections</h4><ul class="rail-nav">';
    chapters.forEach(function (ch, i) {
      var rec = JAMB.progress.chapterResult(id, ch.id);
      html += '<li><a href="#/s/' + id + '/' + ch.id + '">' +
              '<span class="n' + (rec ? ' done' : '') + '">' + (i + 1) + '</span>' +
              '<span>' + esc(ch.title) + '</span></a></li>';
    });
    html += '</ul></div>';
    html += '</aside>';

    html += '</div>'; /* split */
    html += '</div>'; /* page */

    view.innerHTML = html;
  }

  /* ---------------- chapter ---------------- */

  function viewChapter(subjectId, chapterId) {
    var s = JAMB.subject(subjectId);
    if (!s) return viewHome();
    var chapters = JAMB.chapters(subjectId);
    var i = chapters.findIndex(function (c) { return c.id === chapterId; });
    if (i < 0) return viewSubject(subjectId);

    setAccent(subjectId);
    renderNav(subjectId);

    var ch = chapters[i];
    var prev = chapters[i - 1];
    var next = chapters[i + 1];
    JAMB.progress.markSeen(subjectId, ch.id);

    var html = '<div class="page"><div class="split">';

    /* main */
    html += '<div>';
    html += '<div class="crumbs"><a href="#/">Home</a><span>/</span>' +
            '<a href="#/s/' + subjectId + '">' + esc(s.name) + '</a><span>/</span>Chapter ' + (i + 1) + '</div>';

    html += '<div class="chap-head">';
    html += '<div class="chap-kicker">Chapter ' + (i + 1) + ' of ' + chapters.length + '</div>';
    html += '<h1>' + esc(ch.title) + '</h1>';
    if (ch.blurb) html += '<p class="lede" style="color:var(--ink-soft);margin:0">' + esc(ch.blurb) + '</p>';

    html += '<div class="chap-meta">';
    if (ch.time) html += '<span class="meta-chip">⏱ ' + esc(ch.time) + '</span>';
    if (ch.quiz) html += '<span class="meta-chip">📝 ' + ch.quiz.length + ' practice questions</span>';
    var rec = JAMB.progress.chapterResult(subjectId, ch.id);
    if (rec) html += '<span class="meta-chip" style="background:var(--ok-soft);border-color:#bde3cb;color:var(--ok)">✔ Best score ' + rec.best + '/' + rec.total + '</span>';
    html += '</div>';

    if (ch.objectives && ch.objectives.length) {
      html += '<div class="obj-box"><h4>What you’ll learn</h4><ul>';
      ch.objectives.forEach(function (o) { html += '<li>' + esc(o) + '</li>'; });
      html += '</ul></div>';
    }

    html += '<div class="row chap-tools">';
    html += '<button class="btn btn-ghost" id="print-chapter" type="button">🖨 Print chapter / Save as PDF</button>';
    html += '</div>';
    html += '</div>'; /* chap-head */

    html += '<article class="prose">' + ch.body + '</article>';

    /* quiz mount point */
    html += '<div id="quiz-mount"></div>';

    /* prev/next */
    html += '<div class="chap-nav">';
    if (prev) {
      html += '<a class="btn" href="#/s/' + subjectId + '/' + prev.id + '">' +
              '<span class="stack"><span class="lbl">← Previous</span><span class="ttl">' + esc(prev.title) + '</span></span></a>';
    } else {
      html += '<span></span>';
    }
    if (next) {
      html += '<a class="btn next" href="#/s/' + subjectId + '/' + next.id + '">' +
              '<span class="stack"><span class="lbl">Next →</span><span class="ttl">' + esc(next.title) + '</span></span></a>';
    } else {
      html += '<a class="btn next" href="#/s/' + subjectId + '/mock">' +
              '<span class="stack"><span class="lbl">You’ve finished the book →</span><span class="ttl">Take the full mock exam</span></span></a>';
    }
    html += '</div>';

    html += '</div>';

    /* rail */
    html += '<aside class="rail"><div class="rail-box"><h4>' + esc(s.name) + ' chapters</h4><ul class="rail-nav">';
    chapters.forEach(function (c, ci) {
      var r = JAMB.progress.chapterResult(subjectId, c.id);
      html += '<li><a href="#/s/' + subjectId + '/' + c.id + '"' + (ci === i ? ' class="on"' : '') + '>' +
              '<span class="n' + (r ? ' done' : '') + '">' + (ci + 1) + '</span>' +
              '<span>' + esc(c.title) + '</span></a></li>';
    });
    html += '</ul></div>';
    html += '<div class="rail-box"><h4>Practice</h4>' +
            '<a class="btn btn-primary btn-w" href="#/s/' + subjectId + '/mock" style="justify-content:center">Full mock exam</a>' +
            '<p class="small muted" style="margin:10px 0 0">' + JAMB.mockOf(subjectId).length + ' questions · ' +
            JAMB.exam.durationMin + ' minutes</p></div>';
    html += '</aside>';

    html += '</div></div>';

    view.innerHTML = html;
    window.scrollTo(0, 0);

    var printBtn = document.getElementById('print-chapter');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
    var mount = document.getElementById('quiz-mount');
    if (mount && ch.quiz && ch.quiz.length) {
      JAMB.mountQuiz(mount, {
        subjectId: subjectId,
        chapterId: ch.id,
        questions: ch.quiz,
        title: 'Chapter quiz — ' + ch.title,
        onExit: function () { location.hash = '#/s/' + subjectId + '/' + ch.id; }
      });
    }
  }

  /* ---------------- mock setup ---------------- */

  function viewMock(subjectId) {
    var s = JAMB.subject(subjectId);
    if (!s) return viewHome();
    setAccent(subjectId);
    renderNav(subjectId);

    var qs = JAMB.mockOf(subjectId);
    var best = JAMB.progress.bestMock(subjectId);

    var html = '<div class="page">';
    html += '<div class="crumbs"><a href="#/">Home</a><span>/</span>' +
            '<a href="#/s/' + subjectId + '">' + esc(s.name) + '</a><span>/</span>Mock exam</div>';

    html += '<div class="chap-head" style="border-left-color:' + s.accent + '">';
    html += '<div class="chap-kicker">' + esc(s.name) + ' · Mock examination</div>';
    html += '<h1>Full timed mock</h1>';
    html += '<p style="color:var(--ink-soft);margin:0">A complete practice run in the real UTME format. ' +
            'The clock starts the moment you begin — questions are shuffled, and you get a full review at the end.</p>';
    html += '</div>';

    if (!qs.length) {
      html += '<div class="empty-state" style="margin-top:24px"><div class="big">📋</div>' +
              '<h3>Not written yet</h3><p>This mock is still in progress. ' +
              'Work through the chapter quizzes meanwhile — they build the same knowledge.</p>' +
              '<a class="btn btn-primary" href="#/s/' + subjectId + '">Back to chapters</a></div>';
      html += '</div>';
      view.innerHTML = html;
      return;
    }

    html += '<div class="mock-setup" style="margin-top:24px">';
    html += '<div class="spec-grid">';
    html += spec('Questions', String(qs.length));
    html += spec('Time limit', JAMB.exam.durationMin + ' min');
    html += spec('Pass target', '50%+');
    html += spec('Mode', 'Shuffled · timed');
    html += '</div>';

    if (best) {
      html += '<div class="note note-fact"><span class="ico">🏆</span><div><b>Your best so far: ' + best.pct + '%</b>' +
              '<p>' + best.correct + ' of ' + best.total + ' correct. Attempts: ' + JAMB.progress.mocksFor(subjectId).length + '.</p></div></div>';
    }

    html += '<div class="row" style="gap:12px">';
    html += '<button class="btn btn-primary btn-lg" id="start-mock">Begin exam →</button>';
    html += '<a class="btn btn-lg" href="#/s/' + subjectId + '">Back to chapters</a>';
    html += '</div>';

    html += '<div class="note note-exam"><span class="ico">⚠</span><div><b>One attempt at a time</b>' +
            '<p>Once started, the timer cannot be paused. If you navigate away, the attempt is abandoned. ' +
            'Make sure you have a full ' + JAMB.exam.durationMin + ' minutes before you begin.</p></div></div>';

    html += '</div></div>';

    view.innerHTML = html;
    window.scrollTo(0, 0);

    var btn = document.getElementById('start-mock');
    if (btn) btn.addEventListener('click', function () { runMock(subjectId); });
  }

  function runMock(subjectId) {
    var s = JAMB.subject(subjectId);
    var qs = JAMB.mockOf(subjectId);
    if (!qs.length) return;

    setAccent(subjectId);

    var html = '<div class="page">';
    html += '<div class="crumbs"><a href="#/s/' + subjectId + '">' + esc(s.name) + '</a><span>/</span>Mock exam in progress</div>';
    html += '<div id="mock-mount"></div>';
    html += '</div>';

    view.innerHTML = html;
    window.scrollTo(0, 0);

    JAMB.mountMock(document.getElementById('mock-mount'), {
      subjectId: subjectId,
      questions: qs,
      title: s.name + ' mock',
      durationMin: JAMB.exam.durationMin,
      onExit: function () { location.hash = '#/s/' + subjectId; }
    });
  }

  /* ---------------- progress ---------------- */

  function viewProgress() {
    setAccent(null);
    renderNav(null);

    var ov = JAMB.progress.overall();
    var streak = JAMB.progress.streak();

    var html = '<div class="page">';
    html += '<div class="crumbs"><a href="#/">Home</a><span>/</span>Progress</div>';
    html += '<div class="chap-head"><div class="chap-kicker">Dashboard</div><h1>Your progress</h1>' +
            '<p style="margin:0;color:var(--ink-soft)">Everything is stored locally in this browser — nothing is uploaded anywhere.</p></div>';

    html += '<div class="stat-grid" style="margin-top:22px">';
    html += '<div class="stat"><div class="v">' + ov.quizPct + '%</div><div class="k">Overall accuracy</div>' +
            '<div class="s">' + ov.quizBest + ' correct of ' + ov.quizTotal + ' answered (best scores)</div></div>';
    html += '<div class="stat"><div class="v">' + ov.chaptersDone + '</div><div class="k">Chapters completed</div>' +
            '<div class="s">of ' + ov.chaptersTotal + ' available</div></div>';
    html += '<div class="stat"><div class="v">' + streak + '</div><div class="k">Day streak</div>' +
            '<div class="s">' + (streak > 0 ? 'Keep it going 🔥' : 'Study today to start one') + '</div></div>';
    html += '<div class="stat"><div class="v">' + ov.subjectsLive + '/' + ov.subjectsTotal + '</div><div class="k">Subjects ready</div>' +
            '<div class="s">Physics complete — others landing next</div></div>';
    html += '</div>';

    /* per subject */
    html += '<div class="section-head"><h2>By subject</h2></div>';
    html += '<table class="ledger"><thead><tr>' +
            '<th>Subject</th><th>Chapters</th><th>Quiz accuracy</th><th>Best mock</th><th>Attempts</th>' +
            '</tr></thead><tbody>';

    JAMB.subjects.forEach(function (s) {
      var st = JAMB.progress.subjectStats(s.id);
      html += '<tr>';
      html += '<td><a href="#/s/' + s.id + '" style="text-decoration:none;font-weight:700;color:' + s.accent + '">' +
              s.icon + ' ' + esc(s.name) + '</a></td>';
      if (!st.hasContent) {
        html += '<td colspan="4" class="muted">Not yet published</td>';
        html += '</tr>';
        return;
      }
      html += '<td class="num">' + st.chaptersDone + '/' + st.chaptersTotal + '</td>';
      html += '<td class="num" style="color:' + (st.quizPct >= 60 ? 'var(--ok)' : st.quizPct ? 'var(--warn)' : 'var(--ink-mute)') + '">' +
              (st.quizAnswered ? st.quizPct + '%' : '—') + '</td>';
      html += '<td class="num">' + (st.mockBestPct !== null ? st.mockBestPct + '%' : '—') + '</td>';
      html += '<td class="num">' + (st.mockCount || '—') + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table>';

    /* actions */
    html += '<div class="row" style="margin-top:26px;gap:12px">';
    html += '<button class="btn" id="export-progress">⬇ Export progress (JSON)</button>';
    html += '<button class="btn" id="reset-progress" style="color:var(--bad);border-color:#f0c8c4">Reset all progress</button>';
    html += '</div>';

    html += '</div>';
    view.innerHTML = html;

    var ex = document.getElementById('export-progress');
    if (ex) ex.addEventListener('click', function () {
      var data = JAMB.progress.exportJSON();
      var blob = new Blob([data], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'jamb-progress.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    });

    var rs = document.getElementById('reset-progress');
    if (rs) rs.addEventListener('click', function () {
      if (confirm('Reset all saved progress? This cannot be undone.')) {
        JAMB.progress.reset();
        route();
      }
    });
  }

  /* ---------------- router ---------------- */

  function route() {
    if (!view) view = document.getElementById('view');
    var hash = location.hash.replace(/^#\/?/, '');
    var parts = hash.split('/').filter(Boolean);

    if (parts.length === 0) return viewHome();
    if (parts[0] === 'progress') return viewProgress();
    if (parts[0] === 'schedule') { setAccent(null); renderNav(null); return (JAMB.renderSchedule || function () {})(); }
    if (parts[0] === 'drill') { setAccent(null); renderNav(null); return (JAMB.renderDrill || function () {})(); }

    if (parts[0] === 's') {
      if (parts.length === 1) return viewHome();
      if (parts.length === 2) return viewSubject(parts[1]);
      if (parts[2] === 'mock') return viewMock(parts[1]);
      return viewChapter(parts[1], parts[2]);
    }

    return viewHome();
  }

  function init() {
    view = document.getElementById('view');
    renderFooterSubjects();
    window.addEventListener('hashchange', function () {
      route();
      var m = document.getElementById('main');
      if (m) m.focus({ preventScroll: true });
    });
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
