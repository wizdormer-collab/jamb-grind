/* Planner — study schedule (countdown to exam) and weak-area drill.
   Views are registered on JAMB and invoked by the router (#/schedule, #/drill). */

window.JAMB = window.JAMB || {};

(function () {

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

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function daysUntilISO(iso) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var target = new Date(iso + 'T00:00:00');
    return Math.ceil((target - today) / 86400000);
  }

  function addDays(base, n) {
    var d = new Date(base.getTime());
    d.setDate(d.getDate() + n);
    return d;
  }

  function fmtDay(d) {
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }

  /* ============================================================
     STUDY SCHEDULE  —  #/schedule
     ============================================================ */

  function viewSchedule() {
    var view = document.getElementById('view');
    var dates = JAMB.exam.dates;

    /* plan window: today → estimated exam start; last week reserved for mocks */
    var daysLeft = daysUntilISO(dates.examEstStart);
    var past = daysLeft < 0;
    var effDays = past ? daysUntilISO(dates.examEstEnd) : daysLeft;
    if (effDays < 1) effDays = 1;

    var weeks = Math.max(1, Math.ceil(effDays / 7));
    var chapterWeeks = Math.max(1, weeks - 1); /* final week = revision + mocks */

    var subjects = JAMB.subjects.filter(function (s) { return JAMB.chapters(s.id).length > 0; });

    /* total remaining chapters and a per-subject week assignment */
    var remaining = 0, untouched = 0;
    var plan = {}; /* subjectId -> array of week -> chapters */
    subjects.forEach(function (s) {
      var chs = JAMB.chapters(s.id);
      plan[s.id] = [];
      for (var w = 0; w < chapterWeeks; w++) plan[s.id].push([]);
      chs.forEach(function (ch, ci) {
        var rec = JAMB.progress.chapterResult(s.id, ch.id);
        if (!rec) {
          remaining++;
          var w = chapterWeeks === 1 ? 0 : Math.floor(ci * chapterWeeks / chs.length);
          plan[s.id][w].push(ch);
        } else {
          untouched++; /* counts as done */
        }
      });
    });

    var doneCount = JAMB.progress.overall().chaptersDone;
    var perDay = remaining > 0 && effDays > 0 ? (remaining / effDays) : 0;

    var html = '<div class="page">';
    html += '<div class="crumbs"><a href="#/">Home</a><span>/</span>Study plan</div>';

    html += '<div class="chap-head">';
    html += '<div class="chap-kicker">Generated for today · regenerates every visit</div>';
    html += '<h1>Your study plan to exam day</h1>';
    html += '<p class="lede" style="color:var(--ink-soft);margin:0">' +
            (past
              ? 'The estimated exam window has passed — this plan runs to the end of that window. Check JAMB’s site for the confirmed dates.'
              : 'Chapters are spread evenly across the weeks before the estimated exam start, with the final week reserved for weak-area revision and full mock exams.') +
            '</p>';
    html += '</div>';

    /* summary cards */
    html += '<div class="stat-grid" style="margin-top:22px">';
    html += '<div class="stat"><div class="v">' + effDays + '</div><div class="k">Days remaining</div><div class="s">to ' +
            (past ? 'window end' : 'estimated exam start') + ' (' + fmtDay(addDays(new Date(), effDays)) + ')</div></div>';
    html += '<div class="stat"><div class="v">' + weeks + '</div><div class="k">Weeks</div><div class="s">' +
            chapterWeeks + ' study week' + (chapterWeeks > 1 ? 's' : '') + ' + 1 revision/mock week</div></div>';
    html += '<div class="stat"><div class="v">' + remaining + '</div><div class="k">Chapters left</div><div class="s">' +
            doneCount + ' of ' + JAMB.progress.overall().chaptersTotal + ' already completed</div></div>';
    html += '<div class="stat"><div class="v">' + (perDay > 0 ? (perDay < 1 ? perDay.toFixed(1) : Math.ceil(perDay)) : 0) +
            '</div><div class="k">Chapters per day</div><div class="s">to finish every remaining chapter in time</div></div>';
    html += '</div>';

    if (remaining === 0) {
      html += '<div class="empty-state" style="margin-top:26px"><div class="big">🏆</div>' +
              '<h3>Every chapter completed</h3>' +
              '<p>Nothing left to schedule — spend the remaining weeks on <a href="#/drill">weak-area drills</a> and full mock exams.</p>' +
              '<a class="btn btn-primary" href="#/drill">Go to weak-area drill</a></div>';
      html += '</div>';
      view.innerHTML = html;
      return;
    }

    /* week table */
    var today = new Date(); today.setHours(0, 0, 0, 0);
    html += '<div class="table-scroll" style="margin-top:26px"><table class="ledger sched-table"><thead><tr>' +
            '<th style="min-width:130px">Week</th>';
    subjects.forEach(function (s) {
      html += '<th style="min-width:170px">' + s.icon + ' ' + esc(s.short) + '</th>';
    });
    html += '</tr></thead><tbody>';

    for (var w = 0; w < weeks; w++) {
      var from = addDays(today, w * 7);
      var to = addDays(today, w * 7 + 6);
      var isLast = w >= chapterWeeks;
      html += '<tr' + (isLast ? ' class="sched-rev"' : '') + '>';
      html += '<td><b>Week ' + (w + 1) + '</b><br><span class="small muted">' + fmtDay(from) + ' – ' + fmtDay(to) + '</span>' +
              (isLast ? '<br><span class="tag tag-live" style="margin-top:5px;display:inline-block">Revision + mocks</span>' : '') +
              '</td>';

      subjects.forEach(function (s) {
        html += '<td>';
        if (isLast) {
          html += '<span class="small muted">Revise weak chapters · sit the full ' +
                  esc(s.short) + ' mock</span>';
        } else {
          var cell = plan[s.id][w] || [];
          if (!cell.length) {
            html += '<span class="small muted">—</span>';
          } else {
            html += '<ul class="sched-list">';
            cell.forEach(function (ch) {
              html += '<li><a href="#/s/' + s.id + '/' + ch.id + '">' + esc(ch.title) + '</a></li>';
            });
            html += '</ul>';
          }
        }
        html += '</td>';
      });
      html += '</tr>';
    }

    html += '</tbody></table></div>';

    html += '<div class="note note-tip" style="margin-top:22px"><span class="ico">💡</span><div>' +
            '<b>How to use this plan</b>' +
            '<p>Work the week’s chapters in order, take each chapter quiz the same day, and anything you score under 75% on goes straight to your ' +
            '<a href="#/drill">weak-area drill</a>. The plan only counts chapters you have <em>not yet completed</em> — so it reshuffles sensibly if you fall behind or get ahead.</p></div></div>';

    html += '<div class="note note-fact" style="margin-top:14px"><span class="ico">ℹ</span><div>' +
            '<b>Dates are estimates</b>' +
            '<p>Registration and exam dates for UTME 2027 are not yet officially announced; this plan uses the estimated start of ' +
            esc(fmtDay(new Date(dates.examEstStart + 'T00:00:00'))) + ' 2027 based on JAMB’s historical pattern. The profile-creation deadline of 10 Dec 2026 is confirmed.</p></div></div>';

    html += '<div class="row" style="margin-top:22px;gap:12px">' +
            '<button class="btn btn-primary" id="print-plan">🖨 Print / Save as PDF</button>' +
            '<a class="btn" href="#/drill">Weak-area drill →</a></div>';

    html += '</div>';
    view.innerHTML = html;

    var pb = document.getElementById('print-plan');
    if (pb) pb.addEventListener('click', function () { window.print(); });
    window.scrollTo(0, 0);
  }

  /* ============================================================
     WEAK-AREA DRILL  —  #/drill
     ============================================================ */

  function weakChapters() {
    var out = [];
    JAMB.subjects.forEach(function (s) {
      JAMB.chapters(s.id).forEach(function (ch) {
        var rec = JAMB.progress.chapterResult(s.id, ch.id);
        if (rec && rec.total > 0 && (rec.best / rec.total) < 0.75) {
          out.push({ subject: s, ch: ch, rec: rec, ratio: rec.best / rec.total });
        }
      });
    });
    out.sort(function (a, b) { return a.ratio - b.ratio; });
    return out;
  }

  function untouchedCount() {
    var n = 0;
    JAMB.subjects.forEach(function (s) {
      JAMB.chapters(s.id).forEach(function (ch) {
        if (!JAMB.progress.chapterResult(s.id, ch.id)) n++;
      });
    });
    return n;
  }

  function viewDrill() {
    var view = document.getElementById('view');
    var weak = weakChapters();
    var untouched = untouchedCount();

    var html = '<div class="page">';
    html += '<div class="crumbs"><a href="#/">Home</a><span>/</span>Weak-area drill</div>';

    html += '<div class="chap-head">';
    html += '<div class="chap-kicker">Targeted practice</div>';
    html += '<h1>Weak-area drill</h1>';
    html += '<p class="lede" style="color:var(--ink-soft);margin:0">Every chapter you have scored under 75% on, gathered into one mixed quiz. ' +
            'Questions come shuffled from your weakest chapters first.</p>';
    html += '</div>';

    if (!weak.length) {
      var anyProgress = untouched === 0 || JAMB.progress.overall().chaptersDone > 0;
      html += '<div class="empty-state" style="margin-top:26px"><div class="big">' +
              (anyProgress ? '💪' : '🗺') + '</div>' +
              '<h3>' + (anyProgress ? 'No weak chapters yet' : 'Take your first chapter quiz') + '</h3>' +
              '<p>' + (anyProgress
                ? 'You have no chapter scored below 75%. Keep practicing — anything that dips below 75% will appear here automatically.'
                : 'A drill is built from chapters you have scored poorly on. Work through a few chapter quizzes first, then come back and this page will target exactly what you missed.') +
              '</p>' +
              '<a class="btn btn-primary" href="#/">Go to your textbooks</a></div>';
      html += '</div>';
      view.innerHTML = html;
      window.scrollTo(0, 0);
      return;
    }

    /* weak chapter table */
    html += '<div class="table-scroll" style="margin-top:24px"><table class="ledger"><thead><tr>' +
            '<th>Rank</th><th>Chapter</th><th>Subject</th><th>Best score</th><th>Accuracy</th><th></th>' +
            '</tr></thead><tbody>';
    weak.forEach(function (w, i) {
      var pct = Math.round(w.ratio * 100);
      html += '<tr>';
      html += '<td class="num">' + (i + 1) + '</td>';
      html += '<td><a href="#/s/' + w.subject.id + '/' + w.ch.id + '" style="font-weight:700;color:var(--ink)">' + esc(w.ch.title) + '</a></td>';
      html += '<td>' + w.subject.icon + ' ' + esc(w.subject.short) + '</td>';
      html += '<td class="num">' + w.rec.best + '/' + w.rec.total + '</td>';
      html += '<td class="num" style="color:' + (pct < 50 ? 'var(--bad)' : 'var(--warn)') + '">' + pct + '%</td>';
      html += '<td><a class="btn btn-ghost" style="padding:5px 13px;font-size:.83rem" href="#/s/' + w.subject.id + '/' + w.ch.id + '">Reread</a></td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';

    if (untouched > 0) {
      html += '<div class="note note-fact" style="margin-top:18px"><span class="ico">ℹ</span><div><b>' + untouched +
              ' chapter' + (untouched > 1 ? 's have' : ' has') + ' not been attempted yet</b>' +
              '<p>Untouched chapters are not “weak” — they are unknown. Finish them first so this drill can see the full picture. ' +
              'The <a href="#/schedule">study plan</a> sequences them for you.</p></div></div>';
    }

    html += '<div id="drill-mount" style="margin-top:24px"></div>';

    html += '<div class="row" id="drill-cta" style="margin-top:22px;gap:12px">' +
            '<button class="btn btn-primary btn-lg" id="start-drill">Start drill →</button>' +
            '<a class="btn btn-lg" href="#/schedule">View study plan</a>' +
            '</div>';

    html += '</div>';
    view.innerHTML = html;

    var startBtn = document.getElementById('start-drill');
    if (startBtn) startBtn.addEventListener('click', function () { startDrill(weak); });

    window.scrollTo(0, 0);
  }

  function startDrill(weak) {
    var pool = [];
    weak.forEach(function (w) {
      (w.ch.quiz || []).forEach(function (q) {
        pool.push({ q: q, from: w.ch.title, subject: w.subject.id });
      });
    });
    pool = shuffle(pool);
    if (pool.length > 30) pool = pool.slice(0, 30);

    var cta = document.getElementById('drill-cta');
    if (cta) cta.style.display = 'none';

    var mount = document.getElementById('drill-mount');
    if (!mount) return;

    JAMB.mountQuiz(mount, {
      questions: pool.map(function (p) { return p.q; }),
      title: 'Weak-area drill — ' + pool.length + ' questions from your lowest-scoring chapters',
      onExit: function () { location.hash = '#/drill'; }
    });
    mount.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  JAMB.renderSchedule = viewSchedule;
  JAMB.renderDrill = viewDrill;
})();
