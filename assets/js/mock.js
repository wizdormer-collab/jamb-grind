/* Mock exam engine — timed, one question at a time, palette navigation, full review. */

window.JAMB = window.JAMB || {};

(function () {
  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function fmtTime(sec) {
    if (sec < 0) sec = 0;
    var h = Math.floor(sec / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = sec % 60;
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    return (h > 0 ? pad(h) + ':' : '') + pad(m) + ':' + pad(s);
  }

  /**
   * mountMock(root, opts)
   * opts: { subjectId, questions, title, durationMin,
   *          onExit(), onDone(result) }
   */
  function mountMock(root, opts) {
    var qs = opts.questions || [];
    if (!qs.length) {
      root.innerHTML = '<div class="empty-state"><div class="big">📋</div><h3>Mock not available yet</h3>' +
        '<p>This subject’s mock exam hasn’t been written yet. Chapter quizzes are available in the meantime.</p></div>';
      return;
    }

    /* shuffle questions, then shuffle options and keep answers in sync */
    var pool = shuffle(qs);
    var prepared = pool.map(function (q) {
      var order = shuffle(q.opts.map(function (_, i) { return i; }));
      return {
        text: q.q,
        opts: order.map(function (i) { return q.opts[i]; }),
        answer: order.indexOf(q.a),
        why: q.why || ''
      };
    });

    var total = prepared.length;
    var duration = (opts.durationMin || 60) * 60; /* seconds */
    var remaining = duration;
    var answers = new Array(total).fill(null);
    var visited = new Array(total).fill(false);
    var idx = 0;
    var finished = false;
    var timerId = null;

    root.innerHTML = '';

    /* ---------- exam chrome ---------- */
    var top = el('div', 'exam-top');
    top.innerHTML =
      '<div><div class="lbl">Time remaining</div><div class="timer" id="mk-timer">' + fmtTime(remaining) + '</div></div>' +
      '<div class="spacer"></div>' +
      '<div class="qcount" id="mk-count"></div>' +
      '<div class="spacer"></div>' +
      '<div class="row" id="mk-actions"></div>';
    root.appendChild(top);

    var grid = el('div', 'exam-grid');
    root.appendChild(grid);

    var main = el('div');
    var side = el('div');
    grid.appendChild(main);
    grid.appendChild(side);

    /* timer */
    function tick() {
      if (finished) return;
      remaining--;
      var t = document.getElementById('mk-timer');
      if (t) {
        t.textContent = fmtTime(remaining);
        if (remaining <= 60) t.classList.add('low');
      }
      if (remaining <= 0) { finish(true); }
    }
    timerId = setInterval(tick, 1000);

    /* ---------- question view ---------- */
    function renderQ() {
      var q = prepared[idx];
      visited[idx] = true;

      document.getElementById('mk-count').textContent = 'Question ' + (idx + 1) + ' of ' + total;

      main.innerHTML = '';
      var card = el('div', 'quiz-shell');
      card.style.marginTop = '0';
      var body = el('div', 'quiz-body');

      body.appendChild(el('div', 'q-num', 'Question ' + (idx + 1) + ' · ' + (opts.title || 'Mock exam')));
      body.appendChild(el('div', 'q-text', q.text));

      var list = el('div', 'opts');
      q.opts.forEach(function (text, i) {
        var b = el('button', 'opt');
        b.type = 'button';
        if (answers[idx] === i) b.classList.add('selected');
        b.innerHTML = '<span class="k">' + LETTERS[i] + '</span><span class="txt">' + text + '</span>';
        b.addEventListener('click', function () {
          answers[idx] = i;
          renderQ();
        });
        list.appendChild(b);
      });
      body.appendChild(list);

      var foot = el('div', 'quiz-foot');
      var prev = el('button', 'btn', '← Previous');
      prev.type = 'button';
      prev.disabled = idx === 0;
      prev.addEventListener('click', function () { if (idx > 0) { idx--; renderQ(); } });
      foot.appendChild(prev);

      /* clear answer */
      if (answers[idx] !== null) {
        var clr = el('button', 'btn btn-ghost', 'Clear');
        clr.type = 'button';
        clr.addEventListener('click', function () { answers[idx] = null; renderQ(); });
        foot.appendChild(clr);
      }

      foot.appendChild(el('div', 'spacer'));

      if (idx === total - 1) {
        var fin = el('button', 'btn btn-primary', 'Finish exam →');
        fin.type = 'button';
        fin.addEventListener('click', function () { finish(false); });
        foot.appendChild(fin);
      } else {
        var next = el('button', 'btn btn-primary', 'Next →');
        next.type = 'button';
        next.addEventListener('click', function () { idx++; renderQ(); });
        foot.appendChild(next);
      }
      body.appendChild(foot);

      card.appendChild(body);
      main.appendChild(card);
      renderPalette();
      renderActions();
    }

    /* ---------- palette + submit ---------- */
    function renderPalette() {
      side.innerHTML = '';

      var box = el('div', 'rail-box');
      box.appendChild(el('h4', null, 'Question navigator'));

      var pal = el('div', 'qpalette');
      for (var i = 0; i < total; i++) {
        (function (i) {
          var b = el('button', null, String(i + 1));
          b.type = 'button';
          if (i === idx) b.classList.add('cur');
          else if (answers[i] !== null) b.classList.add('answered');
          else if (visited[i]) b.classList.add('seen');
          b.setAttribute('aria-label', 'Go to question ' + (i + 1));
          b.addEventListener('click', function () { idx = i; renderQ(); });
          pal.appendChild(b);
        })(i);
      }
      box.appendChild(pal);

      var legend = el('div', 'small muted');
      legend.style.marginTop = '12px';
      legend.style.lineHeight = '1.9';
      legend.innerHTML =
        '<span style="display:inline-block;width:11px;height:11px;border-radius:3px;background:var(--ok-soft);border:1px solid #bde3cb;vertical-align:middle"></span> Answered &nbsp;' +
        '<span style="display:inline-block;width:11px;height:11px;border-radius:3px;background:#eef1f7;border:1px solid var(--line-strong);vertical-align:middle"></span> Seen<br>' +
        '<span style="display:inline-block;width:11px;height:11px;border-radius:3px;background:var(--brand);vertical-align:middle"></span> Current';
      box.appendChild(legend);

      var meta = el('div', 'small muted');
      meta.style.marginTop = '12px';
      meta.style.paddingTop = '12px';
      meta.style.borderTop = '1px solid var(--line)';
      var answeredCount = answers.filter(function (a) { return a !== null; }).length;
      meta.innerHTML = '<b style="color:var(--ink)">' + answeredCount + '</b> of <b>' + total + '</b> answered';
      box.appendChild(meta);

      side.appendChild(box);
    }

    function renderActions() {
      var a = document.getElementById('mk-actions');
      if (!a) return;
      a.innerHTML = '';
      var sub = el('button', 'btn btn-primary', 'Submit exam');
      sub.type = 'button';
      sub.addEventListener('click', function () { finish(false); });
      a.appendChild(sub);
    }

    /* ---------- results ---------- */
    function finish(auto) {
      if (finished) return;
      finished = true;
      clearInterval(timerId);

      var correct = 0;
      prepared.forEach(function (q, i) {
        if (answers[i] !== null && answers[i] === q.answer) correct++;
      });
      var pct = Math.round((correct / total) * 100);
      var usedSec = duration - Math.max(remaining, 0);

      var result = {
        correct: correct,
        total: total,
        pct: pct,
        auto: !!auto,
        secondsUsed: usedSec,
        durationSec: duration
      };

      if (opts.subjectId) JAMB.progress.saveMock(opts.subjectId, result);
      if (opts.onDone) opts.onDone(result);

      renderResult(result, prepared, answers, auto);
    }

    function renderResult(res, preparedQs, ans, auto) {
      root.innerHTML = '';

      var colour = res.pct >= 75 ? '#1c7a3e' : res.pct >= 50 ? '#b3541e' : '#b3261e';
      var band = res.pct >= 80 ? 'Strong pass — keep this level' :
                 res.pct >= 60 ? 'Passing, with clear gaps to close' :
                 res.pct >= 40 ? 'Below target — focus on weak chapters' :
                                 'Needs significant revision';

      var head = el('div', 'quiz-shell');
      head.style.marginTop = '0';
      var r = el('div', 'result');
      r.innerHTML =
        (auto ? '<div class="note note-warn" style="text-align:left;margin-bottom:18px"><span class="ico">⏱</span><div><b>Time expired</b><p>The exam submitted automatically at 00:00.</p></div></div>' : '') +
        '<div class="ring" style="--pct:' + res.pct + ';--rc:' + colour + '">' +
          '<div class="in"><div class="big">' + res.pct + '%</div><div class="sm">SCORE</div></div>' +
        '</div>' +
        '<h3>' + band + '</h3>' +
        '<div class="rsub">' + (auto ? 'Auto-submitted' : 'Submitted') + ' · Time used ' +
          Math.floor(res.secondsUsed / 60) + 'm ' + (res.secondsUsed % 60) + 's of ' +
          Math.round(res.durationSec / 60) + 'm</div>' +
        '<div class="result-stats">' +
          '<div class="rs"><div class="v" style="color:var(--ok)">' + res.correct + '</div><div class="k">Correct</div></div>' +
          '<div class="rs"><div class="v" style="color:var(--bad)">' + (res.total - res.correct) + '</div><div class="k">Wrong</div></div>' +
          '<div class="rs"><div class="v">' + res.total + '</div><div class="k">Total</div></div>' +
        '</div>';
      head.appendChild(r);
      root.appendChild(head);

      /* review list */
      var revHead = el('div', 'section-head');
      revHead.innerHTML = '<h2>Review every question</h2><span class="hint">Scroll for full explanations</span>';
      root.appendChild(revHead);

      preparedQs.forEach(function (q, i) {
        var chosen = ans[i];
        var ok = chosen !== null && chosen === q.answer;
        var item = el('div', 'review-item ' + (ok ? 'ok' : 'no'));

        var chosenTxt = chosen === null ? 'No answer selected' : LETTERS[chosen] + '. ' + q.opts[chosen];
        var rightTxt = LETTERS[q.answer] + '. ' + q.opts[q.answer];

        var h = '<div class="rv-head"><span>Question ' + (i + 1) + '</span>' +
                '<span class="' + (ok ? 'mark-ok' : 'mark-no') + '">' + (ok ? '✔ Correct' : '✘ Incorrect') + '</span></div>' +
                '<div class="rv-q">' + q.text + '</div>' +
                '<div class="rv-a wrong">You chose: ' + chosenTxt + '</div>';
        if (!ok) h += '<div class="rv-a correct">Correct answer: ' + rightTxt + '</div>';
        if (q.why) h += '<div class="rv-why">' + q.why + '</div>';

        item.innerHTML = h;
        root.appendChild(item);
      });

      /* actions */
      var foot = el('div', 'quiz-foot');
      foot.style.marginTop = '24px';
      var again = el('button', 'btn', '↻ Take another attempt');
      again.type = 'button';
      again.addEventListener('click', function () { mountMock(root, opts); });
      foot.appendChild(again);

      if (opts.onExit) {
        var back = el('button', 'btn btn-primary', 'Back to subject');
        back.type = 'button';
        back.addEventListener('click', opts.onExit);
        foot.appendChild(back);
      }
      root.appendChild(foot);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderQ();
  }

  JAMB.mountMock = mountMock;
  JAMB.fmtTime = fmtTime;
})();
