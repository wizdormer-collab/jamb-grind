/* Chapter quiz engine — one question at a time, instant marking, explanation shown. */

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
    /* Deterministic-ish Fisher-Yates so retries feel fresh but options aren't in a fixed pattern */
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /**
   * mountQuiz(rootEl, opts)
   * opts: { subjectId, chapterId, questions, title, subtitle,
   *         onDone(correct, total), onExit() }
   */
  function mountQuiz(root, opts) {
    var qs = opts.questions || [];
    if (!qs.length) {
      root.innerHTML = '<div class="empty-state"><div class="big">📝</div><h3>No questions yet</h3>' +
        '<p>This chapter’s quiz hasn’t been written yet. The teaching content is above.</p></div>';
      return;
    }

    /* each question gets its options shuffled once, keeping the correct index in sync */
    var prepared = qs.map(function (q) {
      var order = shuffle(q.opts.map(function (_, i) { return i; }));
      return {
        text: q.q,
        opts: order.map(function (i) { return q.opts[i]; }),
        answer: order.indexOf(q.a),
        why: q.why || ''
      };
    });

    var i = 0;
    var correct = 0;
    var answered = false;
    var picked = null;

    root.innerHTML = '';
    var shell = el('div', 'quiz-shell');
    root.appendChild(shell);

    var head = el('div', 'quiz-h');
    head.innerHTML =
      '<div class="t"><span class="ico">📝</span> ' + (opts.title || 'Chapter quiz') + '</div>' +
      '<div class="sub" id="q-sub"></div>';
    shell.appendChild(head);

    var prog = el('div', 'quiz-prog', '<i style="width:0%"></i>');
    shell.appendChild(prog);

    var body = el('div', 'quiz-body');
    shell.appendChild(body);

    function renderQuestion() {
      var q = prepared[i];
      answered = false; picked = null;

      head.querySelector('#q-sub').textContent = 'Question ' + (i + 1) + ' of ' + prepared.length;
      prog.firstChild.style.width = ((i / prepared.length) * 100) + '%';

      body.innerHTML = '';
      body.appendChild(el('div', 'q-num', 'Question ' + (i + 1)));
      body.appendChild(el('div', 'q-text', q.text));

      var list = el('div', 'opts');
      q.opts.forEach(function (text, idx) {
        var b = el('button', 'opt');
        b.type = 'button';
        b.innerHTML = '<span class="k">' + LETTERS[idx] + '</span><span class="txt">' + text + '</span>';
        b.addEventListener('click', function () { choose(idx); });
        list.appendChild(b);
      });
      body.appendChild(list);

      body.appendChild(el('div', 'explain-slot'));

      var foot = el('div', 'quiz-foot');
      if (opts.onExit) {
        var exit = el('button', 'btn btn-ghost', '← Leave quiz');
        exit.type = 'button';
        exit.addEventListener('click', opts.onExit);
        foot.appendChild(exit);
      }
      foot.appendChild(el('div', 'spacer'));
      var next = el('button', 'btn btn-primary', i === prepared.length - 1 ? 'See results →' : 'Next question →');
      next.type = 'button';
      next.id = 'q-next';
      next.disabled = true;
      next.addEventListener('click', advance);
      foot.appendChild(next);
      body.appendChild(foot);
    }

    function choose(idx) {
      if (answered) return;
      answered = true;
      picked = idx;

      var q = prepared[i];
      var buttons = body.querySelectorAll('.opt');
      var isRight = idx === q.answer;

      buttons.forEach(function (b, bi) {
        b.classList.add('locked');
        if (bi === q.answer) b.classList.add('correct');
        else if (bi === idx) b.classList.add('wrong');
      });

      if (isRight) correct++;

      var slot = body.querySelector('.explain-slot');
      var note = el('div', 'explain' + (isRight ? '' : ' bad'));
      var verdict = isRight
        ? '✅ Correct'
        : '❌ Not quite — the answer is ' + LETTERS[q.answer] + '. ' + q.opts[q.answer];
      note.innerHTML = '<b>' + verdict + '</b>' + (q.why ? '<span>' + q.why + '</span>' : '');
      slot.innerHTML = '';
      slot.appendChild(note);

      var next = body.querySelector('#q-next');
      if (next) next.disabled = false;
      prog.firstChild.style.width = (((i + 1) / prepared.length) * 100) + '%';
    }

    function advance() {
      if (i < prepared.length - 1) {
        i++;
        renderQuestion();
        shell.scrollIntoView({ block: 'start', behavior: 'smooth' });
      } else {
        showResult();
      }
    }

    function showResult() {
      var total = prepared.length;
      var pct = Math.round((correct / total) * 100);

      if (opts.subjectId && opts.chapterId) {
        JAMB.progress.scoreChapter(opts.subjectId, opts.chapterId, correct, total);
      }
      if (opts.onDone) opts.onDone(correct, total);

      head.querySelector('#q-sub').textContent = 'Complete';
      prog.firstChild.style.width = '100%';

      var colour = pct >= 75 ? '#1c7a3e' : pct >= 50 ? '#b3541e' : '#b3261e';
      var title = pct >= 80 ? 'Excellent — you’ve got this chapter' :
                  pct >= 60 ? 'Good, but tighten up the gaps' :
                  pct >= 40 ? 'Worth a second pass' :
                              'Read the chapter again, then retry';

      body.innerHTML = '';
      var r = el('div', 'result');
      r.innerHTML =
        '<div class="ring" style="--pct:' + pct + ';--rc:' + colour + '">' +
          '<div class="in"><div class="big">' + pct + '%</div><div class="sm">SCORE</div></div>' +
        '</div>' +
        '<h3>' + title + '</h3>' +
        '<div class="rsub">You answered ' + correct + ' of ' + total + ' correctly.</div>' +
        '<div class="result-stats">' +
          '<div class="rs"><div class="v" style="color:var(--ok)">' + correct + '</div><div class="k">Correct</div></div>' +
          '<div class="rs"><div class="v" style="color:var(--bad)">' + (total - correct) + '</div><div class="k">Missed</div></div>' +
          '<div class="rs"><div class="v">' + total + '</div><div class="k">Total</div></div>' +
        '</div>' +
        '<div class="verdict">' + (pct >= 75 ? '✔ Chapter cleared' : '↻ Retry to clear it (best score is saved)') + '</div>';
      body.appendChild(r);

      var foot = el('div', 'quiz-foot');
      foot.style.justifyContent = 'center';
      var retry = el('button', 'btn', '↻ Retry quiz');
      retry.type = 'button';
      retry.addEventListener('click', function () { mountQuiz(root, opts); });
      foot.appendChild(retry);

      if (opts.onExit) {
        var back = el('button', 'btn btn-primary', 'Back to chapter');
        back.type = 'button';
        back.addEventListener('click', opts.onExit);
        foot.appendChild(back);
      }
      body.appendChild(foot);

      shell.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    renderQuestion();
  }

  JAMB.mountQuiz = mountQuiz;
})();
