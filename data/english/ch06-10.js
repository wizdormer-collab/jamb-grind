/* JAMB 2027 Prep — Use of English, Chapters 6–10 (Section B: structure) */

JAMB.addChapter('english', {
  id: 'sentence-interpretation',
  title: 'Sentence Interpretation',
  blurb: 'Reading the real meaning behind a sentence: emphasis, idiom, implication and the bolded expression.',
  time: '45 min',
  objectives: [
    'Identify what a sentence-interpretation question is really asking',
    'Decode emphasis, understatement and implication',
    'Interpret common English expressions in context',
    'Eliminate options that are merely related but not equivalent'
  ],
  body: `
<p class="lead">Sentence interpretation shows you one sentence and asks what it <strong>means or implies</strong>. Unlike comprehension, there is no passage to search — the meaning must be worked out from the sentence itself. The skill is recognising the small number of devices these questions are built from.</p>

<h2>What the question wants</h2>
<div class="formula-box">
  <div class="fb-head">The question types inside interpretation</div>
  <div class="formula-row"><div class="fname">Restatement</div>
    <div class="fexpr">Which option says the same thing in other words?</div></div>
  <div class="formula-row"><div class="fname">Implication</div>
    <div class="fexpr">What follows from the sentence without being stated?</div></div>
  <div class="formula-row"><div class="fname">Bolded expression</div>
    <div class="fexpr">What does this particular phrase mean here?</div></div>
  <div class="formula-row"><div class="fname">Logical conclusion</div>
    <div class="fexpr">If the sentence is true, which option must also be true?</div></div>
</div>

<h2>The devices they are built from</h2>

<h3>1. Emphasis and contrast</h3>
<div class="example">
  <div class="example-h"><span class="num">1</span> “It was John, not his brother, who broke the window.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reading</div>
    The “it was… who” cleft structure puts the emphasis on John and <b>excludes</b> the brother.</div>
    <div class="step"><div class="step-l">Answer shape</div>
    “Only John broke the window; his brother did not.”</div>
    <div class="ans">Emphatic structures name one thing and rule out the alternative</div>
  </div>
</div>

<h3>2. Understatement and litotes</h3>
<div class="example">
  <div class="example-h"><span class="num">2</span> “The journey was not exactly pleasant.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reading</div>
    “Not exactly” is a softener; the real claim is the opposite of pleasant.</div>
    <div class="step"><div class="step-l">Answer shape</div>
    “The journey was unpleasant” — never “the journey was neutral”.</div>
    <div class="ans">Doubled or softened negatives usually mean a firm positive claim</div>
  </div>
</div>

<h3>3. Implication from cause and effect</h3>
<div class="example">
  <div class="example-h"><span class="num">3</span> “Since the roads were flooded, the medicine did not arrive.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reading</div>
    The medicine failed to arrive <b>because of</b> the floods.</div>
    <div class="step"><div class="step-l">Answer shape</div>
    “Floods prevented the delivery of the medicine.”</div>
    <div class="ans">Follow the causal chain; distractors will reverse it or invent new causes</div>
  </div>
</div>

<h3>4. Conditional meaning</h3>
<div class="example">
  <div class="example-h"><span class="num">4</span> “But for her timely warning, the whole plan would have failed.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reading</div>
    “But for” = “if it had not been for”. The warning saved the plan.</div>
    <div class="step"><div class="step-l">Answer shape</div>
    “Her warning prevented the failure.”</div>
    <div class="ans">“But for”, “were it not for”, “had it not been for” all set up the opposite of what happened</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The options are meanings, not topics</b>
<p>Every distractor will be <em>about</em> the sentence — same people, same event — but say something the sentence does not support. The correct option is <strong>equivalent</strong> to the sentence, not merely related to it.</p></div></div>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>Watch the negatives</b>
<p>Not · no · never · neither · hardly · scarcely · seldom · barely. These flip the sentence’s direction, and half of all misreadings in this section happen when a candidate misses one of them. Circle every negative in the sentence before choosing.</p></div></div>

<h2>Common expressions and what they mean</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Expression</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td>to beat about the bush</td><td>to avoid the main point</td></tr>
    <tr><td>to let the cat out of the bag</td><td>to reveal a secret</td></tr>
    <tr><td>to burn the midnight oil</td><td>to work late into the night</td></tr>
    <tr><td>a blessing in disguise</td><td>something good that seemed bad at first</td></tr>
    <tr><td>to be at loggerheads with</td><td>to be in strong disagreement</td></tr>
    <tr><td>to keep one’s fingers crossed</td><td>to hope for a good outcome</td></tr>
    <tr><td>to throw light on</td><td>to explain or clarify</td></tr>
    <tr><td>a wild goose chase</td><td>a hopeless pursuit</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Interpretation questions ask for equivalence or implication — related-but-different options are distractors.</li>
<li>Emphatic structures single out one element and exclude the others.</li>
<li>Softened negatives (“not exactly”, “hardly”) make firm claims.</li>
<li>Circle every negative in the sentence before reading the options.</li>
<li>“But for”, “were it not for” = the opposite of what actually happened.</li>
</ul>
`,
  quiz: [
    { q: '“It was the driver, not the mechanic, who was blamed.” This means', opts: ['Only the driver was blamed', 'Both were blamed', 'The mechanic was blamed more', 'Neither was blamed'], a: 0, why: 'The emphatic “it was… who” names the driver and rules the mechanic out.' },
    { q: '“The journey was not exactly pleasant.” This means the journey was', opts: ['Neutral', 'Unpleasant', 'Short', 'Unavoidable'], a: 1, why: '“Not exactly” softens a firm negative claim — the journey was unpleasant.' },
    { q: '“Since the roads were flooded, the medicine did not arrive.” This tells us that', opts: ['The floods stopped the delivery', 'The medicine was expired', 'The roads were repaired later', 'The driver refused to work'], a: 0, why: 'The sentence states the cause directly.' },
    { q: '“But for her timely warning, the whole plan would have failed.” This means', opts: ['Her warning ruined the plan', 'The plan failed anyway', 'Her warning saved the plan', 'She warned them too late'], a: 2, why: '“But for X” = if X had not happened — so X prevented the failure.' },
    { q: '“Few of the applicants met the requirements.” This means', opts: ['Not many applicants met them', 'None met them', 'Most met them', 'All met them'], a: 0, why: 'Few = a small number, not zero.' },
    { q: '“He is no better than his predecessor.” This implies that', opts: ['He is as bad as his predecessor', 'He is slightly better', 'He is far superior', 'His predecessor was excellent'], a: 0, why: '“No better than” equates the two — neither is good.' },
    { q: '“The committee could hardly contain its excitement.” The committee was', opts: ['Calm', 'Very excited', 'Uninterested', 'Angry'], a: 1, why: 'Hardly contain = barely able to hold back — excitement was strong.' },
    { q: '“She was asked to explain her conduct, but she beat about the bush.” She', opts: ['Spoke directly', 'Avoided the main point', 'Apologised', 'Refused to speak'], a: 1, why: 'To beat about the bush is to avoid the point in question.' },
    { q: '“The manager let the cat out of the bag during the meeting.” The manager', opts: ['Revealed a secret', 'Caused confusion', 'Left abruptly', 'Made a joke'], a: 0, why: 'The idiom means to disclose something meant to stay hidden.' },
    { q: '“Working late to finish the report, he burned the midnight oil.” He', opts: ['Wasted oil', 'Worked into the night', 'Destroyed the report', 'Complained about the work'], a: 1, why: 'The idiom means to work late.' },
    { q: '“Losing that match was a blessing in disguise.” The loss was', opts: ['Actually a hidden benefit', 'A total disaster', 'Never understood', 'Fixed by officials'], a: 0, why: 'A blessing in disguise is something bad that turns out well.' },
    { q: '“The two lecturers have been at loggerheads over the curriculum.” They', opts: ['Cooperate closely', 'Disagree strongly', 'Are related', 'Teach the same course'], a: 1, why: 'At loggerheads = in sharp disagreement.' },
    { q: '“The new evidence throws light on the case.” The evidence', opts: ['Confuses', 'Clarifies', 'Contradicts', 'Conceals'], a: 1, why: 'To throw light on something is to make it clearer.' },
    { q: '“Searching for the missing file proved a wild goose chase.” The search was', opts: ['Hopeless', 'Successful', 'Carefully planned', 'Expensive but worthwhile'], a: 0, why: 'A wild goose chase is a pursuit that cannot succeed.' },
    { q: '“Rarely has the hall been so full.” This means', opts: ['The hall is usually full', 'The hall is seldom this full', 'The hall was empty', 'The hall was closed'], a: 1, why: 'Fronting “rarely” emphasises how unusual the fullness is.' },
    { q: '“He would rather resign than compromise.” He prefers to', opts: ['Compromise first', 'Resign', 'Do neither', 'Postpone the decision'], a: 1, why: 'Would rather X than Y = X is strongly preferred.' },
    { q: '“The instruction was as clear as mud.” The instruction was', opts: ['Very clear', 'Confusing', 'Watery', 'Brief'], a: 1, why: '“As clear as” plus an opposite idea is irony — it means unclear.' },
    { q: '“Not until the results were published did the students protest.” This means', opts: ['The students protested after publication', 'The students never protested', 'The students protested before publication', 'The results were cancelled'], a: 0, why: '“Not until X did Y” places Y after X.' },
    { q: '“She is the last person I would trust with the money.” This means', opts: ['She would be trusted last of all', 'She is nearly trusted', 'She was the final trustee', 'She asked for the money'], a: 0, why: '“The last person I would…” is a strong way of saying “not at all”.' },
    { q: '“What the report says amounts to a confession.” The report is', opts: ['Effectively a confession', 'A denial', 'A summary only', 'A prediction'], a: 0, why: 'Amounts to = is in effect.' }
  ]
});

JAMB.addChapter('english', {
  id: 'verbs-concord',
  title: 'Verbs: Tense, Mood and Agreement',
  blurb: 'Sequence of tenses, the subjunctive, and how subjects and verbs must agree in number and person.',
  time: '60 min',
  objectives: [
    'Choose the correct tense form in simple sentences',
    'Keep the sequence of tenses in complex sentences',
    'Use the subjunctive after “insist, demand, suggest” and “if I were”',
    'Apply concord between subject and verb in tricky sentences'
  ],
  body: `
<p class="lead">Sentence-completion items often hide a single grammar decision inside a long sentence. Three decisions account for most of them: <strong>which tense</strong>, <strong>which mood</strong>, and <strong>whether the verb agrees with the subject</strong>. Learn to spot each one quickly and the long sentences collapse into short questions.</p>

<h2>Tense: the four you must command</h2>
<div class="formula-box">
  <div class="fb-head">Core tenses</div>
  <div class="formula-row"><div class="fname">Present simple</div>
    <div class="fexpr">Facts and habits: <em>soil erodes; he walks</em></div></div>
  <div class="formula-row"><div class="fname">Present perfect</div>
    <div class="fexpr">Past action with present relevance: <em>has been; have seen</em></div></div>
  <div class="formula-row"><div class="fname">Past simple</div>
    <div class="fexpr">Finished past action: <em>was; went; had</em></div></div>
  <div class="formula-row"><div class="fname">Past perfect</div>
    <div class="fexpr">The earlier of two past events: <em>had gone, before the rain started</em></div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> “No sooner had the principal entered the hall ______ the students stood up.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Rule</div>
    “No sooner… than” is the fixed pair. “When”, “that” and “while” are all wrong here.</div>
    <div class="step"><div class="step-l">Note</div>
    “No sooner” at the front forces inversion: <em>had the principal entered</em>, not <em>the principal had entered</em>.</div>
    <div class="ans">than</div>
  </div>
</div>

<div class="formula-box">
  <div class="fb-head">Fixed pairings — memorise these</div>
  <div class="formula-row"><div class="fname">no sooner / hardly / scarcely</div>
    <div class="fexpr">…than (not when)</div></div>
  <div class="formula-row"><div class="fname">either / neither</div>
    <div class="fexpr">…or / …nor</div></div>
  <div class="formula-row"><div class="fname">both</div>
    <div class="fexpr">…and</div></div>
  <div class="formula-row"><div class="fname">if / whether</div>
    <div class="fexpr">…or not</div></div>
</div>

<h2>Mood: the subjunctive</h2>
<p>After verbs of demanding and suggesting, English keeps an old form — the <strong>subjunctive</strong> — in which the verb stays bare and singular:</p>
<div class="formula-box">
  <div class="fb-head">Subjunctive triggers</div>
  <div class="formula-row"><div class="fname">insist, demand, suggest, recommend, require, propose</div>
    <div class="fexpr">…that he <b>go</b> (not goes) · …that the report <b>be</b> submitted (not is)</div></div>
  <div class="formula-row"><div class="fname">It is essential / vital / necessary that</div>
    <div class="fexpr">…that she <b>be</b> informed</div></div>
  <div class="formula-row"><div class="fname">The unreal “if”</div>
    <div class="fexpr">If I <b>were</b> you… (never “was”, however singular the subject)</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>“Insist that” has two faces</b>
<p><em>He insists that he <strong>is</strong> innocent</em> — a statement of fact takes the ordinary indicative. <em>The committee insists that he <strong>be</strong> present</em> — a demand takes the subjunctive. Read what the verb is doing, not just the verb itself.</p></div></div>

<h2>Concord: subject–verb agreement</h2>
<div class="formula-box">
  <div class="fb-head">The rules</div>
  <div class="formula-row"><div class="fname">Simple rule</div>
    <div class="fexpr">A singular subject takes a singular verb; a plural subject a plural verb.</div></div>
  <div class="formula-row"><div class="fname">Ignore the in-between words</div>
    <div class="fexpr">The principal <em>of the three schools</em> <b>is</b> here. (Subject = principal)</div></div>
  <div class="formula-row"><div class="fname">Each, every, either, neither, anyone, nobody</div>
    <div class="fexpr">Always singular: <em>Each of the boys <b>was</b> given a prize.</em></div></div>
  <div class="formula-row"><div class="fname">Subjects joined by and</div>
    <div class="fexpr">Plural, unless they name one thing: <em>Bread and butter <b>is</b> his breakfast.</em></div></div>
  <div class="formula-row"><div class="fname">Either…or, neither…nor</div>
    <div class="fexpr">The verb agrees with the <b>nearer</b> subject: <em>Neither the teacher nor the students <b>were</b> ready.</em></div></div>
  <div class="formula-row"><div class="fname">Amounts, distances, sums of money</div>
    <div class="fexpr">Singular as a single unit: <em>Ten kilometres <b>is</b> a long walk.</em> · <em>Five thousand naira <b>was</b> collected.</em></div></div>
  <div class="formula-row"><div class="fname">Collective nouns</div>
    <div class="fexpr">Singular when acting as one body (<em>the team is</em>), plural when members act (<em>the team are arguing among themselves</em>)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> “Mathematics ______ my favourite subject.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Trap</div>
    Mathematics ends in -s but names one subject, so it is singular.</div>
    <div class="step"><div class="step-l">Answer</div>
    <b>is</b></div>
    <div class="ans">-s endings deceive: economics, physics, statistics (as a subject) are singular</div>
  </div>
</div>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>Inversion after negative adverbs</b>
<p>When a negative or limiting adverb opens the sentence, the subject and auxiliary swap: <em>Rarely <b>is</b> such dedication seen.</em> · <em>Hardly <b>had</b> he left when…</em> · <em>Never <b>does</b> he arrive late.</em> These look like questions but are statements.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>No sooner / hardly / scarcely pair with <em>than</em>; inversion follows.</li>
<li>Demands and suggestions take the bare subjunctive: that he <em>go</em>, that it <em>be</em>.</li>
<li>“If I were you” — always <em>were</em> in the unreal condition.</li>
<li>Ignore words between subject and verb; singular indeclinables take singular verbs.</li>
<li>Either…or / neither…nor agree with the nearer subject; negative openers invert.</li>
</ul>
`,
  quiz: [
    { q: 'No sooner had the principal entered the hall ______ the students stood up.', opts: ['when', 'than', 'that', 'while'], a: 1, why: 'No sooner pairs with than.' },
    { q: 'Hardly ______ he left the house when the rain started.', opts: ['had', 'has', 'did', 'was'], a: 0, why: 'Hardly opens the sentence, so inversion: “Hardly had he left…”.' },
    { q: 'She would rather he ______ the truth immediately.', opts: ['tells', 'told', 'tell', 'telling'], a: 1, why: 'Would rather is followed by the past subjunctive “told” for present or future preference.' },
    { q: 'The lecturer insisted that the report ______ submitted by Friday.', opts: ['is', 'be', 'was', 'has been'], a: 1, why: 'Insist on a demand triggers the subjunctive “be”.' },
    { q: 'If I ______ you, I would refuse the offer.', opts: ['am', 'were', 'was', 'be'], a: 1, why: 'The unreal condition always takes “were”.' },
    { q: 'The committee insisted that every candidate ______ present.', opts: ['is', 'be', 'was', 'are'], a: 1, why: 'Subjunctive after “insisted that”.' },
    { q: 'Each of the boys ______ given a prize.', opts: ['was', 'were', 'are', 'have been'], a: 0, why: 'Each is singular — a singular verb regardless of “of the boys”.' },
    { q: 'Neither the teacher nor the students ______ ready.', opts: ['was', 'were', 'is', 'has been'], a: 1, why: 'With neither…nor the verb agrees with the nearer subject, “students”.' },
    { q: 'Neither the students nor the teacher ______ ready.', opts: ['were', 'was', 'are', 'have been'], a: 1, why: 'Nearer subject is “teacher” — singular verb.' },
    { q: 'Ten kilometres ______ a long distance to walk.', opts: ['is', 'are', 'were', 'be'], a: 0, why: 'A distance treated as one unit takes a singular verb.' },
    { q: 'Mathematics ______ my favourite subject.', opts: ['is', 'are', 'were', 'have'], a: 0, why: 'The -s is deceptive: the subject names one discipline.' },
    { q: 'The news ______ not what we expected.', opts: ['is', 'are', 'were', 'have been'], a: 0, why: 'News is uncountable and singular.' },
    { q: 'Bread and butter ______ his usual breakfast.', opts: ['is', 'are', 'were', 'have'], a: 0, why: 'The pair names a single dish.' },
    { q: 'The principal, together with the teachers, ______ present.', opts: ['was', 'were', 'are', 'have been'], a: 0, why: 'Together with does not make the subject plural — principal governs the verb.' },
    { q: 'Rarely ______ such dedication seen in students.', opts: ['is', 'was', 'are', 'were'], a: 0, why: 'A negative opener forces inversion: “Rarely is such dedication seen”.' },
    { q: 'It is essential that she ______ informed at once.', opts: ['is', 'be', 'was', 'will be'], a: 1, why: '“It is essential that” takes the subjunctive.' },
    { q: 'The news ______ arrived that the school burned down.', opts: ['has', 'have', 'are', 'were'], a: 0, why: 'News is singular: “the news has arrived”.' },
    { q: 'My brother and colleague ______ invited to the ceremony.', opts: ['is', 'are', 'were', 'have'], a: 0, why: 'One person described by two titles — singular subject.' },
    { q: 'The pair of scissors ______ blunt.', opts: ['are', 'is', 'were', 'have been'], a: 1, why: '“Pair” is the head subject and it is singular — the of-phrase does not change the verb.' },
    { q: 'Every man and woman ______ asked to vote.', opts: ['was', 'were', 'are', 'have been'], a: 0, why: 'Every makes even a doubled subject singular.' },
    { q: 'He suggested that the meeting ______ postponed.', opts: ['is', 'be', 'was', 'will be'], a: 1, why: 'Suggestion + that triggers the subjunctive “be”.' },
    { q: 'Either the manager or his assistants ______ responsible.', opts: ['is', 'are', 'was', 'has been'], a: 1, why: 'Either…or agrees with the nearer subject, “assistants”.' },
    { q: 'A number of students ______ absent yesterday.', opts: ['were', 'was', 'is', 'has been'], a: 0, why: '“A number of” means several — plural verb. (“The number of” would be singular.)' },
    { q: 'The number of students in the hall ______ two hundred.', opts: ['is', 'are', 'were', 'have been'], a: 0, why: '“The number” is one figure — singular.' }
  ]
});

JAMB.addChapter('english', {
  id: 'tense-mood-tags',
  title: 'Tense Sequence, Aspect and Question Tags',
  blurb: 'Keeping tenses in step across sentences, and building question tags that match their statements.',
  time: '55 min',
  objectives: [
    'Apply the sequence of tenses in reported and complex sentences',
    'Distinguish simple from continuous and perfect aspects',
    'Build correct question tags for any statement',
    'Handle tags after negative and imperative sentences'
  ],
  body: `
<p class="lead">Two closely related skills share this chapter. <strong>Sequence of tenses</strong> keeps verb forms in step when one clause reports or depends on another. <strong>Question tags</strong> turn a statement into a mini-question — and their rules are mechanical once you see the machinery.</p>

<h2>Sequence of tenses</h2>
<div class="formula-box">
  <div class="fb-head">The governing rule</div>
  <div class="formula-row"><div class="fname">Past main clause</div>
    <div class="fexpr">He said he <b>was</b> tired. · She told me she <b>had finished</b>.</div>
    <div class="fnote">The tense steps back one degree.</div></div>
  <div class="formula-row"><div class="fname">Present / future main clause</div>
    <div class="fexpr">He says he <b>is</b> tired. · She tells me she <b>has finished</b>.</div>
    <div class="fnote">No backshift needed.</div></div>
  <div class="formula-row"><div class="fname">General truths never shift</div>
    <div class="fexpr">He said water <b>boils</b> at 100°C. (not boiled)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> “She said she had already eaten.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reading</div>
    The eating happened before the saying — hence past perfect.</div>
    <div class="step"><div class="step-l">Trap option</div>
    “She said she has already eaten” — present perfect cannot follow a past “said”.</div>
    <div class="ans">Earlier of two past actions → past perfect</div>
  </div>
</div>

<h2>Aspect: simple, continuous, perfect</h2>
<div class="formula-box">
  <div class="fb-head">What each aspect adds</div>
  <div class="formula-row"><div class="fname">Simple</div>
    <div class="fexpr">The whole action: <em>I write</em></div></div>
  <div class="formula-row"><div class="fname">Continuous</div>
    <div class="fexpr">In progress at a moment: <em>I am writing</em> — never for states like <em>know, believe, own</em></div></div>
  <div class="formula-row"><div class="fname">Perfect</div>
    <div class="fexpr">Completed before now or before another point: <em>I have written; I had written</em></div></div>
  <div class="formula-row"><div class="fname">Perfect continuous</div>
    <div class="fexpr">Ongoing up to a point: <em>I have been writing since morning</em></div></div>
</div>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>State verbs do not take the continuous</b>
<p><em>Know, believe, own, belong, contain, seem, understand, love, prefer</em> stay simple: “I know the answer”, never “I am knowing”. Using them continuously is one of the commonest errors the paper tests.</p></div></div>

<h2>Question tags</h2>
<div class="formula-box">
  <div class="fb-head">The four-step machine</div>
  <div class="formula-row"><div class="fname">1. Find the auxiliary</div>
    <div class="fexpr">If the statement has none, use <b>do/does/did</b>.</div></div>
  <div class="formula-row"><div class="fname">2. Repeat it in the tag</div>
    <div class="fexpr"><em>He is coming, <b>is</b> he?</em> · <em>They have finished, <b>have</b> they?</em></div></div>
  <div class="formula-row"><div class="fname">3. Reverse the polarity</div>
    <div class="fexpr">Positive statement → negative tag; negative statement → positive tag.</div></div>
  <div class="formula-row"><div class="fname">4. Match the subject</div>
    <div class="fexpr">The tag always ends with the same pronoun: <em>the students → <b>they</b></em>.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Build the tag for: “You have completed the form.”
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1–2</div>
    Auxiliary: <b>have</b> → tag contains “have”.</div>
    <div class="step"><div class="step-l">Step 3</div>
    Statement is positive → negative tag: <b>haven’t</b>.</div>
    <div class="step"><div class="step-l">Step 4</div>
    Subject “you” stays “you”.</div>
    <div class="ans">…, haven’t you?</div>
  </div>
</div>

<div class="formula-box">
  <div class="fb-head">Special cases</div>
  <div class="formula-row"><div class="fname">Imperatives and suggestions</div>
    <div class="fexpr">Let’s go, <b>shall we?</b> · Open the door, <b>will you?</b></div></div>
  <div class="formula-row"><div class="fname">Let us (us = speaker and listener)</div>
    <div class="fexpr"><b>shall we?</b></div></div>
  <div class="formula-row"><div class="fname">This/that, these/those</div>
    <div class="fexpr">→ <b>it</b> and <b>they</b> in the tag: <em>This is fine, isn’t <b>it</b>?</em></div></div>
  <div class="formula-row"><div class="fname">I am</div>
    <div class="fexpr">→ <b>aren’t I?</b> (not “amn’t I”)</div></div>
  <div class="formula-row"><div class="fname">Nothing, nobody, never, hardly</div>
    <div class="fexpr">Already negative → <b>positive</b> tag: <em>Nothing happened, <b>did</b> it?</em></div></div>
  <div class="formula-row"><div class="fname">Used to / would</div>
    <div class="fexpr"><em>He used to smoke, <b>didn’t</b> he?</em></div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Doubled negatives are the trap, not the answer</b>
<p>“He never came, didn’t he?” is wrong because <em>never</em> already made the statement negative — the tag must be positive: “did he?”. Scan the whole statement for hidden negatives before flipping.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Past reporting verbs shift tenses back one step; general truths do not shift.</li>
<li>Earlier of two past actions → past perfect.</li>
<li>State verbs stay simple — no continuous forms.</li>
<li>Tags: auxiliary + reversed polarity + matching pronoun.</li>
<li>Imperatives take “will you?”; “let’s” takes “shall we?”; hidden negatives flip the tag back.</li>
</ul>
`,
  quiz: [
    { q: 'She said she ______ already eaten.', opts: ['has', 'had', 'have', 'is having'], a: 1, why: 'Past reporting verb shifts the earlier action to past perfect.' },
    { q: 'He told me that water ______ at 100°C.', opts: ['boiled', 'boils', 'has boiled', 'was boiling'], a: 1, why: 'General truths never backshift.' },
    { q: 'He said that he ______ the letter.', opts: ['posted', 'posts', 'post', 'posting'], a: 0, why: 'Simple past fits a finished action reported in the past.' },
    { q: 'No sooner had I sat down ______ the phone rang.', opts: ['when', 'than', 'that', 'as'], a: 1, why: 'No sooner … than.' },
    { q: 'She ______ in Lagos since 2019.', opts: ['lives', 'is living', 'has been living', 'lived'], a: 2, why: 'Since + a point in the past calls for the present perfect continuous.' },
    { q: 'I ______ what you mean.', opts: ['am understanding', 'understand', 'was understanding', 'have been understanding'], a: 1, why: 'Understand is a state verb — simple form only.' },
    { q: 'By the time we arrived, the train ______.', opts: ['left', 'has left', 'had left', 'leaves'], a: 2, why: 'The earlier of two past actions takes the past perfect.' },
    { q: 'Look! The children ______ in the garden.', opts: ['play', 'are playing', 'played', 'have played'], a: 1, why: '“Look!” signals action in progress — continuous tense.' },
    { q: 'He ______ his keys, so he cannot enter.', opts: ['lost', 'has lost', 'loses', 'was losing'], a: 1, why: 'Present result of a past action — present perfect.' },
    { q: 'You are coming with us, ______ you?', opts: ['are', 'aren’t', 'do', 'did'], a: 1, why: 'Positive statement, matching auxiliary, negative tag.' },
    { q: 'They have finished the work, ______ they?', opts: ['haven’t', 'didn’t', 'don’t', 'aren’t'], a: 0, why: 'Auxiliary “have” repeats in the reversed tag.' },
    { q: 'He is a teacher, ______ he?', opts: ['isn’t', 'wasn’t', 'doesn’t', 'don’t'], a: 0, why: 'The tag uses “is” with the pronoun “he”.' },
    { q: 'Nothing was said, ______ it?', opts: ['wasn’t', 'did', 'was', 'didn’t'], a: 2, why: '“Nothing” is already negative, so the tag is positive: “was it?”.' },
    { q: 'You have never been to Abuja, ______ you?', opts: ['haven’t', 'have', 'didn’t', 'did'], a: 1, why: '“Never” makes the statement negative — positive tag follows.' },
    { q: 'Let’s go for a walk, ______ we?', opts: ['will', 'shall', 'do', 'are'], a: 1, why: '“Let’s” includes the listener, so the tag is “shall we?”.' },
    { q: 'Open the window, ______ you?', opts: ['will', 'shall', 'do', 'are'], a: 0, why: 'An imperative takes “will you?”.' },
    { q: 'I am your friend, ______ I?', opts: ['amn’t', 'aren’t', 'isn’t', 'wasn’t'], a: 1, why: 'The established tag for “I am” is “aren’t I?”.' },
    { q: 'This is the book, ______ it?', opts: ['isn’t', 'aren’t', 'wasn’t', 'doesn’t'], a: 0, why: '“This” becomes “it” in the tag.' },
    { q: 'He used to live here, ______ he?', opts: ['didn’t', 'doesn’t', 'wasn’t', 'isn’t'], a: 0, why: 'Used to takes a do-tag in the past: “didn’t he?”.' },
    { q: 'Neither of them ______ ready.', opts: ['are', 'is', 'were', 'have been'], a: 1, why: 'Neither is singular.' },
    { q: 'She prefers tea, ______ she?', opts: ['doesn’t', 'isn’t', 'didn’t', 'wasn’t'], a: 0, why: 'The tag uses the dummy auxiliary for a lexical verb.' },
    { q: 'They were not invited, ______ they?', opts: ['were', 'weren’t', 'did', 'didn’t'], a: 0, why: 'Negative statement → positive tag with the same auxiliary.' },
    { q: 'Hardly had he spoken ______ everyone laughed.', opts: ['when', 'than', 'that', 'while'], a: 0, why: 'Hardly pairs with when (no sooner pairs with than).' },
    { q: 'He asked whether I ______ coming.', opts: ['am', 'was', 'will be', 'have been'], a: 1, why: 'Sequence of tenses: asked → was.' }
  ]
});

JAMB.addChapter('english', {
  id: 'prepositions',
  title: 'Prepositions and Collocations',
  blurb: 'The fixed preposition after each verb and adjective, and the word partnerships the paper tests.',
  time: '50 min',
  objectives: [
    'Recall the preposition governed by common verbs',
    'Recall the preposition governed by common adjectives and nouns',
    'Distinguish at/on/in for time and place',
    'Recognise fixed collocations in sentence-completion items'
  ],
  body: `
<p class="lead">Preposition questions are pure recall dressed as reasoning. The verb chooses its preposition by long habit, and no amount of logic will derive it — <em>depend <strong>on</strong></em> is not <em>depend <strong>of</strong></em> for any reason you can work out in the exam hall. The cure is a list, learned in sentences.</p>

<h2>The governed prepositions</h2>
<div class="formula-box">
  <div class="fb-head">Verb + preposition</div>
  <div class="formula-row"><div class="fname">agree / depend / insist / rely / congratulate</div><div class="fexpr">…<b>on</b></div></div>
  <div class="formula-row"><div class="fname">belong / refer / listen / respond / attend</div><div class="fexpr">…<b>to</b></div></div>
  <div class="formula-row"><div class="fname">prevent / prohibit / differ / suffer / accused</div><div class="fexpr">…<b>from</b></div></div>
  <div class="formula-row"><div class="fname">object / subscribe / conform / adhere / pay</div><div class="fexpr">…<b>to</b> (object, subscribe, conform, adhere) · pay <b>for</b></div></div>
  <div class="formula-row"><div class="fname">complain / consist / dream / consist</div><div class="fexpr">…<b>of</b></div></div>
  <div class="formula-row"><div class="fname">abstain / participate / interfere / succeed</div><div class="fexpr">…<b>in</b> (succeed <b>in</b>, participate <b>in</b>) · abstain <b>from</b></div></div>
  <div class="formula-row"><div class="fname">result / terminate / originate</div><div class="fexpr">…<b>in</b> (result, terminate) · originate <b>in/from</b></div></div>
</div>

<div class="formula-box">
  <div class="fb-head">Adjective / noun + preposition</div>
  <div class="formula-row"><div class="fname">responsible / famous / interested / good / afraid</div><div class="fexpr">…<b>for</b> (responsible, famous) · interested, good, afraid <b>of</b></div></div>
  <div class="formula-row"><div class="fname">capable / fond / proud / full</div><div class="fexpr">…<b>of</b></div></div>
  <div class="formula-row"><div class="fname">anxious / worried / clever / strict</div><div class="fexpr">…<b>about</b> (anxious, worried) · strict <b>with</b></div></div>
  <div class="formula-row"><div class="fname">reason / solution / obstacle / barrier</div><div class="fexpr">…<b>for</b> (reason, obstacle) · solution <b>to</b></div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Learn the whole phrase, not the preposition</b>
<p>Do not memorise “depend — on”. Memorise <strong>depend on something</strong> with an example: “Success depends on effort.” Words learned in partnership survive exam pressure; isolated facts do not.</p></div></div>

<h2>Time: at, on, in</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Preposition</th><th>Used for</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td><b>at</b></td><td>Clock times; points; festivals</td><td>at 7 o’clock · at noon · at Christmas</td></tr>
    <tr><td><b>on</b></td><td>Days and dates</td><td>on Monday · on 12 May · on my birthday</td></tr>
    <tr><td><b>in</b></td><td>Months, years, seasons, parts of the day</td><td>in April · in 2027 · in the morning · in summer</td></tr>
  </tbody>
</table>

<p>For <strong>place</strong>: <em>at</em> a point (<em>at the door</em>), <em>on</em> a surface (<em>on the table</em>), <em>in</em> an enclosed space (<em>in the room</em>). Remember: <em>in bed</em> (lying) but <em>on the bed</em> (sitting); <em>at school</em> (as a student) but <em>in school</em> (inside the building).</p>

<h2>Everyday collocations worth knowing</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Verb</th><th>Its partner</th></tr></thead>
  <tbody>
    <tr><td>make</td><td>a mistake · progress · money · an effort</td></tr>
    <tr><td>do</td><td>work · homework · business · harm</td></tr>
    <tr><td>take</td><td>a decision · responsibility · a bus · an exam</td></tr>
    <tr><td>break</td><td>a promise · the news · the law · a record</td></tr>
    <tr><td>pay</td><td>attention · a price · respect · a visit</td></tr>
    <tr><td>cast</td><td>a vote · a shadow · doubt</td></tr>
    <tr><td>hold</td><td>a meeting · a view · an office</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>“Comprised of” is non-standard</b>
<p>Standard usage: the whole <strong>comprises</strong> the parts, or the whole <strong>is composed of</strong> / <strong>consists of</strong> the parts. “Comprised of” appears among the options to catch candidates who accept it by familiarity.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Verb + preposition pairings are fixed — learn them in sentences.</li>
<li>at (time point) · on (day/date) · in (month/year/season).</li>
<li>at a point · on a surface · in an enclosed space.</li>
<li>make vs do, take vs pay vs break — the collocations the paper reuses endlessly.</li>
<li>Comprises the parts; is composed of the parts.</li>
</ul>
`,
  quiz: [
    { q: 'The project depends ______ available funding.', opts: ['of', 'on', 'from', 'with'], a: 1, why: 'Depend is followed by on.' },
    { q: 'He was prevented ______ leaving the office.', opts: ['to', 'from', 'on', 'with'], a: 1, why: 'Prevent takes from + -ing.' },
    { q: 'She objected ______ being treated unfairly.', opts: ['to', 'for', 'on', 'with'], a: 0, why: 'Object is followed by to.' },
    { q: 'The lecturer digressed ______ the main topic.', opts: ['from', 'to', 'on', 'at'], a: 0, why: 'Digress from — the standard pairing.' },
    { q: 'The police searched ______ the suspect.', opts: ['for', 'after', 'to', 'on'], a: 0, why: 'Search for = look for; search a person/place = examine.' },
    { q: 'We congratulated her ______ her success.', opts: ['for', 'on', 'of', 'with'], a: 1, why: 'Congratulate someone on something.' },
    { q: 'He apologised ______ his rude behaviour.', opts: ['for', 'of', 'to', 'with'], a: 0, why: 'Apologise to somebody, but apologise for something.' },
    { q: 'He is incapable ______ telling a lie.', opts: ['to', 'of', 'for', 'from'], a: 1, why: 'Capable/capable of + -ing.' },
    { q: 'The team is capable ______ winning the cup.', opts: ['of', 'for', 'to', 'with'], a: 0, why: 'Capable of.' },
    { q: 'They accused him ______ theft.', opts: ['for', 'of', 'with', 'about'], a: 1, why: 'Accuse someone of something.' },
    { q: 'She subscribed ______ the new magazine.', opts: ['to', 'for', 'of', 'on'], a: 0, why: 'Subscribe to a publication or idea.' },
    { q: 'The house belongs ______ my uncle.', opts: ['to', 'for', 'of', 'with'], a: 0, why: 'Belong to.' },
    { q: 'He was promoted ______ hard work.', opts: ['for', 'to', 'of', 'with'], a: 0, why: 'Promote for — rewarded because of.' },
    { q: 'The company was promoted ______ a foreign partner.', opts: ['by', 'for', 'of', 'from'], a: 0, why: 'The agent of a passive takes “by”.' },
    { q: 'The meeting will hold ______ Monday.', opts: ['at', 'on', 'in', 'by'], a: 1, why: 'Days take “on”.' },
    { q: 'He arrived ______ 7 o’clock.', opts: ['at', 'on', 'in', 'by'], a: 0, why: 'Clock times take “at”.' },
    { q: 'The ceremony took place ______ April.', opts: ['at', 'on', 'in', 'by'], a: 2, why: 'Months take “in”.' },
    { q: 'I saw him ______ the gate this morning.', opts: ['at', 'on', 'in', 'to'], a: 0, why: 'A point of place takes “at”.' },
    { q: 'The documents are ______ the drawer.', opts: ['at', 'on', 'in', 'by'], a: 2, why: 'An enclosed space takes “in”.' },
    { q: 'She has been ill ______ Tuesday.', opts: ['for', 'since', 'from', 'by'], a: 1, why: 'A starting point in the past takes “since”; a length of time takes “for”.' },
    { q: 'We have waited ______ two hours.', opts: ['since', 'for', 'from', 'by'], a: 1, why: 'A duration takes “for”.' },
    { q: 'He made a ______ when dividing the figures.', opts: ['mistake', 'error only', 'fault', 'wrong'], a: 0, why: 'The fixed collocation is “make a mistake”.' },
    { q: 'They took a collective ______ to finish the work.', opts: ['decision', 'choice only', 'mind', 'purpose'], a: 0, why: '“Take a decision” is the standard partnership.' },
    { q: 'The report is composed ______ six chapters.', opts: ['of', 'from', 'by', 'with'], a: 0, why: 'Be composed of — the standard form.' }
  ]
});

JAMB.addChapter('english', {
  id: 'word-classes',
  title: 'Word Classes and Sentence Patterns',
  blurb: 'The parts of speech and their jobs, phrase and clause types, and the four sentence patterns you must name.',
  time: '55 min',
  objectives: [
    'Name the parts of speech and the job each performs',
    'Distinguish phrase from clause and simple from compound or complex sentences',
    'Identify subjects, predicates and objects in a sentence',
    'Recognise the four sentence types by purpose'
  ],
  body: `
<p class="lead">“Identify the function of the underlined word” and “which sentence is complex?” are pattern-recognition items. You are not asked to define a term abstractly — you are asked to <strong>spot its job in one sentence</strong>. Learn the jobs, and the definitions follow.</p>

<h2>The parts of speech</h2>
<div class="formula-box">
  <div class="fb-head">Eight classes and their jobs</div>
  <div class="formula-row"><div class="fname">Noun</div><div class="fexpr">Names a person, place, thing or idea — <em>student, honesty</em></div></div>
  <div class="formula-row"><div class="fname">Pronoun</div><div class="fexpr">Stands in for a noun — <em>he, they, it, which</em></div></div>
  <div class="formula-row"><div class="fname">Verb</div><div class="fexpr">States the action or being — <em>runs, seems, were</em></div></div>
  <div class="formula-row"><div class="fname">Adjective</div><div class="fexpr">Describes a noun or pronoun — <em>tall, seven, this</em></div></div>
  <div class="formula-row"><div class="fname">Adverb</div><div class="fexpr">Modifies a verb, adjective or other adverb — <em>quickly, very, yesterday</em></div></div>
  <div class="formula-row"><div class="fname">Preposition</div><div class="fexpr">Shows the relation of its object to the rest — <em>on, between, of</em></div></div>
  <div class="formula-row"><div class="fname">Conjunction</div><div class="fexpr">Joins words or clauses — <em>and, but, because, although</em></div></div>
  <div class="formula-row"><div class="fname">Interjection</div><div class="fexpr">Expresses feeling alone — <em>oh! alas! bravo!</em></div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Words change class with their job</b>
<p><em>Run</em> can be a verb (“I run”) or a noun (“a run of luck”). <em>Light</em> can be noun, adjective or verb. The question always underlines the word <em>in a sentence</em> — identify the job there, not the word’s most famous costume.</p></div></div>

<h2>Phrases and clauses</h2>
<div class="formula-box">
  <div class="fb-head">The distinction</div>
  <div class="formula-row"><div class="fname">Phrase</div>
    <div class="fexpr">A group of words without its own subject–verb pair — <em>in the morning · under the table</em></div></div>
  <div class="formula-row"><div class="fname">Clause</div>
    <div class="fexpr">A group with (or capable of having) a subject and a predicate</div></div>
  <div class="formula-row"><div class="fname">Main / independent</div>
    <div class="fexpr">Makes sense alone — <em>The rain stopped.</em></div></div>
  <div class="formula-row"><div class="fname">Subordinate / dependent</div>
    <div class="fexpr">Cannot stand alone — <em>…when the rain stopped.</em></div></div>
  <div class="formula-row"><div class="fname">Relative clause</div>
    <div class="fexpr">Introduced by who, which, that — <em>the man who helped us</em></div></div>
</div>

<h2>Sentence types by structure</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Contains</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Simple</b></td><td>One independent clause</td><td>The students arrived.</td></tr>
    <tr><td><b>Compound</b></td><td>Two or more independent clauses</td><td>The students arrived, and the lesson began.</td></tr>
    <tr><td><b>Complex</b></td><td>One independent + one or more dependent</td><td>When the students arrived, the lesson began.</td></tr>
    <tr><td><b>Compound-complex</b></td><td>Two independent + at least one dependent</td><td>Although it rained, we played, and we enjoyed it.</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>A comma is not what makes a compound sentence</b>
<p>The joiners matter: <em>and, but, or, so, yet, for</em> and a semicolon make a compound sentence; <em>when, because, although, if, since, that</em> open a subordinate clause and make the sentence complex. Look at the joiner, not the punctuation.</p></div></div>

<h2>Sentence types by purpose</h2>
<div class="formula-box">
  <div class="fb-head">Four purposes</div>
  <div class="formula-row"><div class="fname">Declarative</div><div class="fexpr">States a fact — <em>The bell rang.</em></div></div>
  <div class="formula-row"><div class="fname">Interrogative</div><div class="fexpr">Asks — <em>Did the bell ring?</em></div></div>
  <div class="formula-row"><div class="fname">Imperative</div><div class="fexpr">Commands or requests — <em>Ring the bell.</em></div></div>
  <div class="formula-row"><div class="fname">Exclamatory</div><div class="fexpr">Expresses strong feeling — <em>What a ring!</em></div></div>
</div>

<h2>Sentence elements</h2>
<div class="formula-box">
  <div class="fb-head">The parts of a clause</div>
  <div class="formula-row"><div class="fname">Subject</div><div class="fexpr">Who or what the sentence is about — <em>The chief</em> opened the market.</div></div>
  <div class="formula-row"><div class="fname">Predicate</div><div class="fexpr">Everything said about the subject — <em>opened the market</em></div></div>
  <div class="formula-row"><div class="fname">Direct object</div><div class="fexpr">Receives the action — He opened <em>the market</em>.</div></div>
  <div class="formula-row"><div class="fname">Indirect object</div><div class="fexpr">To/for whom — He gave <em>her</em> the prize.</div></div>
  <div class="formula-row"><div class="fname">Complement</div><div class="fexpr">Completes the sense — She is <em>a doctor</em>. · He became <em>tired</em>.</div></div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>Identify the word’s job in the given sentence, not its dictionary class.</li>
<li>Clauses have subjects and verbs; phrases do not.</li>
<li>Compound joins main clauses; complex adds a subordinate clause.</li>
<li>Declarative, interrogative, imperative, exclamative — by purpose.</li>
<li>Subject, predicate, object, complement — the four clause elements.</li>
</ul>
`,
  quiz: [
    { q: 'In “The tall boy quickly solved the puzzle”, the word “quickly” is an', opts: ['Adjective modifying “boy”', 'Adverb modifying “solved”', 'Noun', 'Interjection'], a: 1, why: 'It tells how the action was done — an adverb modifying the verb.' },
    { q: 'In “She showed great courage”, the word “courage” functions as a', opts: ['Verb', 'Direct object', 'Subject', 'Adverb'], a: 1, why: 'It receives the action of “showed”.' },
    { q: '“When the rain stopped, we continued.” This sentence is', opts: ['Simple', 'Compound', 'Complex', 'Exclamatory'], a: 2, why: 'One independent clause plus the dependent clause opened by “when”.' },
    { q: '“The rain stopped, and we continued.” This sentence is', opts: ['Simple', 'Compound', 'Complex', 'Imperative'], a: 1, why: 'Two independent clauses joined by “and”.' },
    { q: 'Which of these is a phrase rather than a clause?', opts: ['In the morning', 'When the sun rose', 'The man who called', 'Because she was late'], a: 0, why: 'It has no subject–verb pair; the others are clauses.' },
    { q: '“What a terrible day!” This sentence is', opts: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'], a: 3, why: 'It expresses strong feeling.' },
    { q: '“Ring the bell.” This sentence is', opts: ['Imperative', 'Interrogative', 'Declarative', 'Exclamatory'], a: 0, why: 'It gives a command or request.' },
    { q: 'A sentence containing one independent clause is called', opts: ['Simple', 'Compound', 'Complex', 'Double'], a: 0, why: 'One clause stands alone.' },
    { q: 'A subordinate clause is one that', opts: ['Cannot stand alone', 'Contains two verbs', 'Begins with and', 'Has no subject'], a: 0, why: 'It depends on the main clause for its full meaning.' },
    { q: 'In “The chief gave the boy a prize”, “the boy” is the', opts: ['Direct object', 'Indirect object', 'Subject', 'Complement'], a: 1, why: 'It answers “to whom?” — the indirect object.' },
    { q: 'In “She is a doctor”, the phrase “a doctor” is a', opts: ['Subject complement', 'Direct object', 'Predicate verb', 'Modifier of the verb'], a: 0, why: 'It renames the subject after a linking verb.' },
    { q: 'Which word is a conjunction in: “He left because he was tired.”?', opts: ['left', 'because', 'was', 'tired'], a: 1, why: 'Because introduces the subordinate clause.' },
    { q: '“Although he studied hard, he failed.” In this sentence, the clause “he studied hard” is', opts: ['Independent', 'Subordinate', 'Relative', 'Principal'], a: 1, why: 'Although marks it as dependent on the main clause.' },
    { q: 'Which sentence is complex?', opts: ['We sang and danced.', 'We sang when the sun set.', 'We sang.', 'We sang, and the sun set.'], a: 1, why: 'The “when” clause makes it complex.' },
    { q: '“They elected him president.” The word “president” is a', opts: ['Direct object', 'Object complement', 'Indirect object', 'Adjective'], a: 1, why: 'It renames the object “him” — an object complement.' },
    { q: 'In “The news is true”, the subject is', opts: ['The', 'news', 'is', 'true'], a: 1, why: 'The noun “news” is what the sentence is about.' },
    { q: 'A word that stands in place of a noun is called a', opts: ['Pronoun', 'Preposition', 'Adverb', 'Conjunction'], a: 0, why: 'Pronouns replace nouns.' },
    { q: '“However, he refused to comment.” The word “however” here is an', opts: ['Adverb', 'Interjection', 'Conjunction', 'Adjective'], a: 0, why: 'Sentence-adverb modifying the whole clause — an adverb.' },
    { q: 'Which of the following is NOT a sentence by purpose?', opts: ['Declarative', 'Interrogative', 'Subordinate', 'Imperative'], a: 2, why: 'Subordinate describes structure, not purpose.' },
    { q: '“He seems tired.” The word “tired” is a', opts: ['Subject complement', 'Direct object', 'Adverb', 'Predicate only'], a: 0, why: 'It follows the linking verb “seems” and describes the subject.' },
    { q: 'The predicate of a sentence is', opts: ['Everything said about the subject', 'The first word', 'The object only', 'The final punctuation'], a: 0, why: 'The predicate is the verb plus its complements and objects.' },
    { q: '“Because she was late, she missed the bus.” This is a', opts: ['Compound sentence', 'Complex sentence', 'Simple sentence', 'Compound-complex sentence'], a: 1, why: 'A dependent clause plus one independent clause.' },
    { q: 'Which joiner would make a sentence COMPOUND rather than complex?', opts: ['because', 'although', 'but', 'when'], a: 2, why: 'But coordinates two main clauses; the others introduce dependents.' },
    { q: '“Alas! The old bridge has collapsed.” “Alas” is an', opts: ['Interjection', 'Adverb', 'Adjective', 'Conjunction'], a: 0, why: 'It expresses feeling on its own.' }
  ]
});
