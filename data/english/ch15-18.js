/* JAMB 2027 Prep — Use of English, Chapters 15–18 (Section C remainder + reading text) */

JAMB.addChapter('english', {
  id: 'rhymes-homophones',
  title: 'Oral English III: Rhymes and Homophones',
  blurb: 'What “rhymes” means on the paper, how to compare word endings by sound, and the homophone sets candidates mix up.',
  time: '45 min',
  objectives: [
    'Decide whether two words rhyme by comparing their sounds, not their spellings',
    'Find the word that rhymes with a given word from four written options',
    'Distinguish homophones — same sound, different meaning and spelling',
    'Apply the standard homophone sets in sentence-completion items'
  ],
  body: `
<p class="lead">Two written words <strong>rhyme</strong> when their endings sound identical from the last stressed vowel onward — <em>cat/hat, keep/sleep, through/new</em> (the last one despite appearances). Two written words are <strong>homophones</strong> when they sound identical altogether but differ in spelling and meaning — <em>know/no, mail/male, peace/piece</em>. Both items are decided by the ear alone.</p>

<h2>Rhyme: the real definition</h2>
<div class="formula-box">
  <div class="fb-head">The test for rhyme</div>
  <div class="formula-row"><div class="fname">Compare</div><div class="fexpr">Everything from the last stressed vowel to the end</div></div>
  <div class="formula-row"><div class="fname">Ignore</div><div class="fexpr">The beginnings — <em>light/bite · school/pool · came/home</em></div></div>
  <div class="formula-row"><div class="fname">They must match</div><div class="fexpr">The vowel and every consonant after it — <em>luck/lock</em> do NOT rhyme</div></div>
</div>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>Spelling is a trap in rhyme items</b>
<p><em>Cough</em> and <em>through</em> end alike in print but not in sound (/kɒf/ against /θruː/). Meanwhile <em>through</em> and <em>new</em> rhyme perfectly (/θruː/ · /njuː/) though they share no letters. Read the words aloud in your head and forget the spelling entirely.</p></div></div>

<div class="example">
  <div class="example-h">Which word rhymes with “gone”?</div>
  <div class="example-b">
    <div class="step"><span class="step-l">gone:</span> /ɡɒn/ — vowel ɒ plus final n</div>
    <div class="step"><span class="step-l">Test:</span> gone / dawn / gown / own — dawn endsɔːn, gown ends aʊn, own endsəʊn</div>
    <div class="step"><span class="step-l">Answer:</span> <span class="ans">none of these — “on”, “don” or “wan” would rhyme instead.</span> The method is the same every time: match the tail, ignore the head — and remember spelling lies, so check the sounds.</div>
  </div>
</div>

<h2>Homophones: the standard sets</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Sound /saɪ/</th><th>Sound /siː/, /si:z/</th><th>Other famous pairs</th></tr></thead>
  <tbody>
    <tr><td><b>sight</b> (vision) · <b>site</b> (place) · <b>cite</b> (quote)</td><td><b>sea</b> · <b>see</b> · <b>say/sei</b> (a male seal)</td><td><b>know/no</b> · <b>right/write/rite</b></td></tr>
    <tr><td><b>buy/by/bye</b></td><td><b>peace</b> (calm) · <b>piece</b> (part)</td><td><b>meet/meat</b> · <b>heel/heal</b></td></tr>
    <tr><td><b>flour/flower</b></td><td><b>mail/male</b> · <b>pail/pale</b></td><td><b>tail/tale</b> · <b>grate/great</b></td></tr>
    <tr><td><b>hair/hare</b></td><td><b>son/sun</b> · <b>won/one</b></td><td><b>wood/would</b> · <b>week/weak</b></td></tr>
    <tr><td><b>bare/bear</b> (uncovered / an animal)</td><td><b>left</b> (direction) · <b>left</b> (left behind) — same spelling, two uses</td><td><b>plain/plane</b> · <b>sole/soul</b></td></tr>
    <tr><td><b>principal/principle</b> (head / rule)</td><td><b>stationary/stationery</b> (still / paper)</td><td><b>precede/proceed</b> · <b>desert/dessert</b></td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class=\"ico\">🎯</span><div><b>Two question styles, one skill</b>
<p>The paper may ask you to <em>spot</em> the homophone pair in the options (“choose the pair that sounds the same”), or to <em>fill</em> a gap with the right member (“write your ___” — piece or peace?). In the spotting style, sound decides everything. In the filling style, meaning decides everything — say what the sentence needs, then find its spelling.</p></div></div>

<p>Also watch for <strong>near-homophones</strong>, which sound alike to a careless ear but differ by one sound: <em>passed/past, asked/ask, would/wood, could/kud</em>. And remember that Nigerian English sometimes merges sounds that standard English keeps apart — the paper follows standard British pronunciation, so drill the pairs as standard speakers say them.</p>

<h2>Worked example</h2>
<div class="example">
  <div class="example-h">Fill the gap: “The ___ of the school addressed the visitors.”</div>
  <div class="example-b">
    <div class="step"><span class="step-l">Needed:</span> a person — the head of the school</div>
    <div class="step"><span class="step-l">Options:</span> principle / principal / princable / principals</div>
    <div class="step"><span class="step-l">Answer:</span> <span class="ans">principal — the person; “principle” is the rule, and “principals” would need “were”.</span></div>
  </div>
</div>
`,
  quiz: [
    { q: 'Which word rhymes with “knew”?', opts: ['Now', 'Through', 'No', 'Near'], a: 1, why: 'Knew and through both end /uː/ despite sharing no spelling.' },
    { q: 'Which word rhymes with “luck”?', opts: ['Lock', 'Lake', 'Truck', 'Look'], a: 2, why: 'Luck and truck both end /ʌk/; lock and look have different vowels, lake ends /eɪk/.' },
    { q: 'Which word rhymes with “found”?', opts: ['Font', 'Fond', 'Round', 'Friend'], a: 2, why: 'Found and round both end /aʊnd/.' },
    { q: 'Which pair of words are homophones?', opts: ['Sight / cite', 'Site / cite', 'Sign / sine', 'Sigh / sigh'], a: 1, why: 'Site and cite both sound /saɪt/ and differ in meaning and spelling.' },
    { q: 'Which word rhymes with “cough”?', opts: ['Through', 'Though', 'Owe', 'Tough'], a: 3, why: 'Cough and tough both end /ɒf/; through is /θruː/, though and owe end /əʊ/.' },
    { q: '“After years of war, the ___ was finally signed.” Fill the gap.', opts: ['piece', 'peace', 'pease', 'pays'], a: 1, why: 'A treaty of calm is “peace”; a piece is a part or a written composition.' },
    { q: 'Which word rhymes with “phone”?', opts: ['Photo', 'Gone', 'Bone', 'Done'], a: 2, why: 'Phone and bone both end /əʊn/.' },
    { q: 'Which pair are homophones?', opts: ['Flour / flower', 'Foul / fowl', 'Flea / flee', 'All three'], a: 3, why: 'Flour/flower, foul/fowl and flea/flee each share a sound and differ in meaning.' },
    { q: 'Which word rhymes with “pear”?', opts: ['Pair', 'Peer', 'Purr', 'Pray'], a: 0, why: 'Pear and pair both sound /peə/.' },
    { q: '“The ___ was executed after a long trial.” The correct word is', opts: ['principle', 'principal', 'principled', 'princely'], a: 1, why: 'A person on trial is the principal; a principle is a rule.' },
    { q: 'Which word rhymes with “hair”?', opts: ['Here', 'Hare', 'Higher', 'Hear'], a: 1, why: 'Hair and hare are exact homophones /heə/; here and hear glide from /ɪə/ instead.' },
    { q: 'Which word rhymes with “breathe”?', opts: ['Bread', 'Bred', 'Need', 'Bed'], a: 2, why: 'Breathe ends /iːd/ like need; bread, bred and bed are short e.' },
    { q: '“The dog ___ its teeth at the intruder.” Fill the gap.', opts: ['bared', 'bore', 'bare', 'beer'], a: 0, why: 'Bared = uncovered/exposed — “baring one’s teeth” is the fixed expression; “bore” would need an object it carried.' },
    { q: 'Which word rhymes with “soul”?', opts: ['Sol', 'So', 'Sou', 'Sale'], a: 0, why: 'Soul and sol both sound /səʊl/.' },
    { q: 'Which pair are homophones?', opts: ['Meat / met', 'Meet / meat', 'Mate / meat', 'Meet / mate'], a: 1, why: 'Meet and meat are both /miːt/.' },
    { q: '“Stationery and stationary differ in meaning; which is which?” Choose the correct statement.', opts: ['Stationary is paper; stationery means still', 'Stationery is paper; stationary means not moving', 'Both mean paper', 'Both mean still'], a: 1, why: 'Remember: stationERy has the E for envelopes; stationAry has the A for anchored.' },
    { q: 'Which word rhymes with “light”?', opts: ['Lit', 'Knight', 'Late', 'Lift'], a: 1, why: 'Light and knight are both /laɪt/.' },
    { q: '“The army camped on the ___ below the hill.” Fill the gap.', opts: ['plain', 'plane', 'plaine', 'pale'], a: 0, why: 'A plain is a flat stretch of land; plane is an aircraft or a flat surface in geometry.' },
    { q: 'Which word rhymes with “one”?', opts: ['On', 'Won', 'Only', 'Own'], a: 1, why: 'One and won are both /wʌn/.' },
    { q: 'Which word rhymes with “rough”?', opts: ['Through', 'Dough', 'Enough', 'Though'], a: 2, why: 'Rough and enough both end /ʌf/; through is /θruː/, dough and though end /əʊ/.' },
    { q: 'Which pair are homophones?', opts: ['Weak / week', 'Week / wake', 'Weak / wreak', 'Weed / week'], a: 0, why: 'Weak and week are both /wiːk/ (wreak differs: /riːk/).' },
    { q: '“He could not ___ the difference between the two.” Fill the gap.', opts: ['sea', 'see', 'seek', 'seem'], a: 1, why: 'See the difference is the idiom; sea is the body of water.' },
    { q: 'Which word rhymes with “through”?', opts: ['Though', 'Threw', 'Thorough', 'Thought'], a: 1, why: 'Through and threw are both /θruː/ (and exact homophones).' },
    { q: 'Which word rhymes with “made”?', opts: ['Mad', 'Maid', 'Mood', 'Mind'], a: 1, why: 'Made and maid are both /meɪd/.' }
  ]
});

JAMB.addChapter('english', {
  id: 'word-stress',
  title: 'Oral English IV: Word Stress',
  blurb: 'Which syllable gets the beat, how stress moves with prefixes and suffixes, and the pairs candidates mix up.',
  time: '45 min',
  objectives: [
    'Count syllables in a word and locate the stressed syllable',
    'Apply the stress rules for prefixes, suffixes and two-syllable nouns and verbs',
    'Recognise compound-word stress patterns',
    'Answer stress items by marking the syllable that carries the beat'
  ],
  body: `
<p class="lead">In every multi-syllable English word, one syllable is spoken more loudly, more clearly and at slightly greater length than the rest — that is <strong>stress</strong>. In “<em>PRE-sent</em>” the beat falls on the first syllable; in “pre-<em>SENT</em>” it falls on the second, and the word means something entirely different. Stress items ask you to identify where the beat falls, usually by dividing the word into numbered syllables in the options.</p>

<h2>How to find the stressed syllable</h2>
<div class="formula-box">
  <div class="fb-head">The counting method</div>
  <div class="formula-row"><div class="fname">Step 1</div><div class="fexpr">Break the word into syllables: <em>u·ni·ver·si·ty</em></div></div>
  <div class="formula-row"><div class="fname">Step 2</div><div class="fexpr">Say it aloud slowly — one syllable will jump out</div></div>
  <div class="formula-row"><div class="fname">Step 3</div><div class="fexpr">If options number the syllables, pick the position of the jump: <em>u·NI·ver·si·ty</em></div></div>
</div>

<h2>The rules that hold most of the time</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Pattern</th><th>Stress falls…</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td><b>Two-syllable noun</b></td><td>Usually the first syllable</td><td>TA-ble · PA-per · STU-dent · WIN-dow</td></tr>
    <tr><td><b>Two-syllable verb</b></td><td>Usually the second syllable</td><td>de-LIVE · re-PORT · be-GIN · at-TEND</td></tr>
    <tr><td><b>Un- prefix</b></td><td>Stress stays on the root</td><td>un-HAPPY · un-WILLING · un-CERTAIN</td></tr>
    <tr><td><b>-ion / -ic / -ity suffixes</b></td><td>Stress steps back onto the syllable before</td><td>edu-CAtion · geo-GRAPHic · uniVERsity</td></tr>
    <tr><td><b>-tion especially</b></td><td>Always the syllable just before -tion</td><td>or·ga·ni·ZA·tion · com·mu·ni·CA·tion</td></tr>
    <tr><td><b>Three-syllable word, no special suffix</b></td><td>Usually the first</td><td>EL-e-phant · TAB-let · CAR-pet (verbs still lean back)</td></tr>
    <tr><td><b>Compound noun (two nouns)</b></td><td>On the first element</td><td>BLACK-board · AIR-port · HOME-work · GREEN-house</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class=\"ico\">🎯</span><div><b>The noun/verb shift is the paper’s favourite</b>
<p>A whole family of words changes meaning with stress — the spelling stays identical:</p>
<p><em>PRE-sent</em> (a gift) / <em>pre-SENT</em> (to offer) · <em>OB-ject</em> (a thing) / <em>ob-JECT</em> (to object) · <em>RE-cord</em> (a disc) / <em>re-CORD</em> (to capture) · <em>CON-tract</em> (a document) / <em>con-TRACT</em> (to shrink) · <em>PRO-duce</em> (fruit and veg) / <em>pro-DUCE</em> (to make) · <em>DE-sert</em> (wasteland) / <em>de-SERT</em> (to abandon).</p></div></div>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>Long words: stress the meaningful part</b>
<p>Candidates often stress the final syllable of long words because it sounds “important”. English does the opposite: stress lands on the root, and suffixes like <em>-tion, -ity, -ic, -ive</em> either attract the stress one syllable back or leave it where it was. When guessing a long word cold, bet on the middle, not the end.</p></div></div>

<div class="example">
  <div class="example-h">Where is the stress in “photograph”?</div>
  <div class="example-b">
    <div class="step"><span class="step-l">Syllables:</span> pho·to·graph (three)</div>
    <div class="step"><span class="step-l">Say it:</span> the beat jumps on the first — PHO-to-graph</div>
    <div class="step"><span class="step-l">Compare:</span> pho·TOG·ra·phy — adding -y moves the stress to the second; pho·to·GRAPH·ic — adding -ic moves it to the third. <span class="ans">Suffixes move the beat; the base word keeps its own.</span></div>
  </div>
</div>
`,
  quiz: [
    { q: 'In which syllable does the stress fall in “banana”?', opts: ['The first', 'The second', 'The third', 'The last only'], a: 1, why: 'ba·NA·na — the middle syllable carries the beat.' },
    { q: 'In “photograph”, the stress falls on', opts: ['The first syllable', 'The second syllable', 'The third syllable', 'The final syllable equally'], a: 0, why: 'PHO-to-graph — the base word stresses its first syllable.' },
    { q: 'The stress in “education” falls', opts: ['On the first syllable', 'On the second syllable', 'On the syllable before -tion', 'On the final syllable'], a: 2, why: 'edu·CA·tion — -tion always sits after the stressed syllable.' },
    { q: 'In the verb “begin”, the stress falls on', opts: ['The first syllable', 'The second syllable', 'Both equally', 'The middle of three'], a: 1, why: 'be·GIN — two-syllable verbs usually stress the second.' },
    { q: 'Which word is stressed on the FIRST syllable?', opts: ['Report', 'Present (noun)', 'Return', 'Reject'], a: 1, why: 'PRE-sent is the gift; report, return and reject all stress the second syllable.' },
    { q: 'In “photography”, the stress falls on', opts: ['pho·tog·ra·phy first', 'pho·tog·RA·phy', 'pho·tog·raph·Y', 'Evenly across all four'], a: 1, why: 'The -y ending pulls the stress one syllable back from the end — pho·TOG·ra·phy.' },
    { q: 'The stress in “unhappy” falls on', opts: ['The prefix un-', 'The middle syllable hap', 'The final syllable', 'Both un- and -py'], a: 1, why: 'un·HAP·py — the prefix never carries the stress.' },
    { q: 'Which pair has different stress?', opts: ['Present (gift) / present (to offer)', 'Table / cable', 'Window / mended', 'Paper / tapper'], a: 0, why: 'PRE-sent against pre-SENT — the noun/verb shift changes the meaning.' },
    { q: 'In “development”, the stress falls on', opts: ['de·VELOP·ment second', 'de·vel·OP·ment third', 'The final -ment', 'The first syllable only'], a: 0, why: 'de·VEL·op·ment — the root verb develop carries its stress into the derivative.' },
    { q: 'The stress in “correct” as a verb falls on', opts: ['The first syllable', 'The second syllable', 'Both', 'The final consonant cluster'], a: 1, why: 'cor·RECT — the verb follows the two-syllable verb pattern.' },
    { q: 'In “blackboard”, the stress falls on', opts: ['Black', 'Board', 'Both equally', 'Neither'], a: 0, why: 'A compound noun stresses its first element — BLACK-board.' },
    { q: 'Which word is stressed on the last syllable?', opts: ['Elephant', 'Arrange', 'Open', 'Market'], a: 1, why: 'ar·RANGE — the only verb here, and two-syllable verbs lean back.' },
    { q: 'In “computer”, the stress falls on', opts: ['com·PU·ter second', 'com·put·ER third', 'com first', 'All equal'], a: 0, why: 'com·PU·ter — the middle syllable carries the beat.' },
    { q: 'The stress in “organisation” falls on', opts: ['or·GA·ni·sa·tion second', 'or·ga·ni·SA·tion third', 'or first', 'The final -tion'], a: 1, why: 'Stress lands on the syllable immediately before -tion.' },
    { q: 'In “record” (a disc), the stress is on the', opts: ['First syllable', 'Second syllable', 'Third syllable', 'Final syllable'], a: 0, why: 'RE-cord the noun; re-CORD the verb.' },
    { q: 'Which word has its stress on the second syllable?', opts: ['Window', 'Return', 'Table', 'Kitchen'], a: 1, why: 're·TURN — the other three are plain two-syllable nouns stressed up front.' },
    { q: 'In “understand”, the stress falls on', opts: ['un·DER·stand second', 'un·der·STAND third', 'un first', 'Evenly'], a: 1, why: 'un·der·STAND — the final syllable of this verb carries the beat.' },
    { q: 'The stress in “economic” falls on', opts: ['e·CO·nom·ic second', 'e·co·NOM·ic third', 'The first syllable', 'The final -ic'], a: 1, why: 'The -ic suffix pulls the stress one syllable back — e·co·NOM·ic.' },
    { q: 'In “beautiful”, the stress falls on', opts: ['beau·ti·ful first', 'beau·TI·ful second', 'beau·ti·FUL third', 'Across all three'], a: 0, why: 'BEAU-ti-ful — adjectives of this shape keep first-syllable stress.' },
    { q: 'Which noun/verb pair shows the stress shift?', opts: ['Conduct (noun) / conduct (verb)', 'Content / content', 'Contract (noun) / contract (verb)', 'All three'], a: 3, why: 'CON·duct/con·DUCT, CON·tract/con·TRACT, CON·tent/con·TENT all shift meaning with stress.' },
    { q: 'In “television”, the stress falls on', opts: ['te·le first', 'le·vi second', 'vi third', 'sion last'], a: 0, why: 'TE-le-vi-sion — the base word takes the beat on its first syllable.' },
    { q: 'The stress in “arrive” falls on', opts: ['The first syllable', 'The second syllable', 'Both', 'The final vowel only'], a: 1, why: 'a·RRIVE — two-syllable verbs stress the second.' },
    { q: 'In “dangerous”, the stress is on', opts: ['dan·ger·ous first', 'dan·GE·rous second', 'rou third', 'The final s'], a: 0, why: 'DAN-ger-ous — the root word dangerous keeps first-syllable stress.' },
    { q: 'Which word is NOT stressed on its first syllable?', opts: ['Student', 'Return', 'Table', 'Person'], a: 1, why: 're·TURN stresses the second; student, table and person are front-stressed nouns.' }
  ]
});

JAMB.addChapter('english', {
  id: 'emphatic-stress',
  title: 'Oral English V: Emphatic Stress and Intonation',
  blurb: 'How moving the stress inside a sentence changes its meaning, and how the paper tests it.',
  time: '40 min',
  objectives: [
    'Explain what happens when stress moves to a word that is not normally stressed',
    'Determine which word an emphatically stressed sentence highlights',
    'Answer “the emphasized word shows that…” items by reading the contrast implied',
    'Recognise the role of intonation in statements, questions and irony'
  ],
  body: `
<p class="lead"><strong>Emphatic stress</strong> is normal word-stress lifted into the sentence: one word takes a heavy beat — usually shown on the paper by CAPITALS or italics — and that beat tells the listener <em>which word to contrast with what was already said</em>. “I did NOT say she was late” denies the word that follows; “I said she was LATE” implies someone claimed otherwise. The question then asks what the emphasis reveals.</p>

<h2>The contrast principle</h2>
<div class="formula-box">
  <div class="fb-head">Every emphatic stress implies a contrast</div>
  <div class="formula-row"><div class="fname">Stress on a word</div><div class="fexpr">That word replaces, denies or corrects something — “I sent it by TRAIN, not by post.”</div></div>
  <div class="formula-row"><div class="fname">Stress on NOT</div><div class="fexpr">The whole claim after it is denied — “I did not say HE was going.” (someone else was named)</div></div>
  <div class="formula-row"><div class="fname">Question it answers</div><div class="fexpr">“Who did you mean?” · “Which one?” · “By what route?” · “When?”</div></div>
</div>

<div class="example">
  <div class="example-h">Worked item</div>
  <div class="example-b">
    <p>“<u>WHEN</u> did you say the meeting starts?” — the emphasis shows that</p>
    <div class="step"><span class="step-l">Beat on:</span> WHEN — the question-word itself is highlighted</div>
    <div class="step"><span class="step-l">Implies:</span> the <em>time</em> is what needs confirming, not the place or the fact of the meeting</div>
    <div class="step"><span class="step-l">Answer:</span> <span class="ans">the speaker wants the time confirmed, as if the day had been queried before.</span></div>
    <div class="step"><span class="step-l">Trap:</span> an option about WHERE the meeting holds — the stress was not on “where”.</div>
  </div>
</div>

<div class="note note-exam"><span class=\"ico\">🎯</span><div><b>How to answer any emphatic stress item</b>
<p>Read the sentence. Ask: <em>what other word could this speaker have stressed instead?</em> The answer is the thing being corrected or ruled out. If “BY TRAIN” is stressed, the previous claim was about some other route. If “SHE” is stressed, someone else was credited. The emphasis never adds new information — it <strong>contrasts</strong> with information already in play.</p></div></div>

<p>Common emphatic-stress frames on the paper: “The examination was difficult, but not <em>IMPOSSIBLE</em>” (something weaker was claimed); “It is <em>MY</em> pen” (not yours); “He came <em>YESTERDAY</em>, not today”; “<em>THAT</em> is the man” (not the other one). In each case, name the pair the stressed word splits, and the right option writes itself.</p>

<h2>Intonation: the tune around the stress</h2>
<div class="formula-box">
  <div class="fb-head">The three basic tunes</div>
  <div class="formula-row"><div class="fname">Falling</div><div class="fexpr">Ordinary statements and WH-questions — “The hall is FULL ↘” · “When does it start ↘?”</div></div>
  <div class="formula-row"><div class="fname">Rising</div><div class="fexpr">Yes/no questions and uncertainty — “You are coming ↗?” · incomplete lists ↗</div></div>
  <div class="formula-row"><div class="fname">Fall-rise</div><div class="fexpr">Contrast, doubt or irony — “He is clever ↘↗ (but…)” · “Really ↘↗”</div></div>
</div>

<p>Intonation carries the meanings punctuation can only hint at. A rising tone on “Really?” signals a question; the same word with a fall-rise signals scepticism. The paper’s intonation items usually ask which tone suits a statement, a question or a list — the safe rule: <strong>statements fall, yes/no questions rise, and irony wavers.</strong></p>
`,
  quiz: [
    { q: '“I did <u>NOT</u> say the man was rude.” The emphasis shows that', opts: ['Someone else said it', 'The man was not rude at all', 'The speaker did not say it', 'Another person was described as rude'], a: 3, why: 'Stress on NOT cancels only what follows — someone else was named as rude.' },
    { q: '“I bought <u>THREE</u> books.” The emphasis suggests that', opts: ['Four were expected', 'Three were claimed by someone else', 'No books were bought', 'The books were cheap'], a: 1, why: 'The stressed quantity replaces a different figure already mentioned or assumed.' },
    { q: '“<u>WHEN</u> did you say the match begins?” The emphasis shows that', opts: ['The venue is in doubt', 'The time needs confirming', 'The speaker doubts the match will hold', 'The opponent is disputed'], a: 1, why: 'The beat on the question-word singles out time as the point of doubt.' },
    { q: '“The medicine is <u>BITTER</u>, but not <u>POISONOUS</u>.” This means', opts: ['It is both bitter and poisonous', 'It is bitter and safe', 'It is poisonous but sweet', 'It is neither'], a: 1, why: 'The second stress cancels the stronger claim — bitter, yes; poisonous, no.' },
    { q: '“He gave <u>ME</u> the money.” The emphasis implies', opts: ['He gave it to someone else as well', 'He did not give it at all', 'The money was his own', 'He gave something other than money'], a: 0, why: 'Me replaces another possible recipient — the contrast is between people.' },
    { q: '“<u>SHE</u> wrote the letter.” The emphasis suggests that', opts: ['Nobody wrote it', 'Another person was credited with writing it', 'The letter was never sent', 'She dictated it'], a: 1, why: 'Stressing the subject corrects an attribution to someone else.' },
    { q: '“I live in <u>IBADAN</u>, not Lagos.” The stressed word shows that', opts: ['Lagos was mentioned or implied', 'The speaker once lived in Lagos', 'Ibadan is a village', 'Lagos is larger'], a: 0, why: 'The emphatic word replaces the previously assumed place.' },
    { q: '“You are coming <u>TODAY</u>?” With a rising tone this expresses', opts: ['A command', 'A question seeking confirmation', 'An exclamation of joy', 'A refusal'], a: 1, why: 'Rising intonation on a statement turns it into a yes/no question.' },
    { q: '“The examination was <u>DIFFICULT</u>.” The emphasis implies that', opts: ['Someone claimed it was easy', 'It was impossible', 'It was unfair', 'It was short'], a: 0, why: 'The stress corrects the opposite assumption — difficult, not easy.' },
    { q: '“Is that <u>YOUR</u> car?” The emphasis suggests the speaker', opts: ['Admires the car', 'Thought the car belonged to someone else', 'Wants to buy it', 'Has never seen a car'], a: 1, why: 'The possessive stress contrasts ownership with another candidate.' },
    { q: '“We left <u>BECAUSE</u> it rained.” The emphasis highlights', opts: ['The reason for leaving', 'The place of leaving', 'The time of leaving', 'Who left'], a: 0, why: 'Stressing the conjunction foregrounds the cause itself.' },
    { q: '“He arrived <u>LATE</u> yesterday.” The emphasis suggests that', opts: ['He is always punctual', 'Someone claimed he arrived on time or early', 'He never arrives', 'He arrived yesterday only'], a: 1, why: 'The stressed adverb corrects the expected or claimed punctuality.' },
    { q: '“<u>IBADAN</u> is hot.” The emphasis most likely contrasts it with', opts: ['Another city', 'Another season', 'Another person', 'Another building'], a: 0, why: 'A stressed place-name contrasts that city with a previously named one.' },
    { q: '“Come <u>NOW</u>.” The emphatic stress makes this', opts: ['A polite request', 'An urgent command', 'A question', 'A regret'], a: 1, why: 'The beat on now adds urgency — not later, now.' },
    { q: '“This is <u>THE</u> book I told you about.” The emphasis implies', opts: ['There are several books and this is the exact one', 'The book is new', 'The speaker forgot the title', 'No other book exists'], a: 0, why: 'Stressed THE picks one item out of a set previously discussed.' },
    { q: '“<u>REALLY</u>?” spoken with a fall-rise tone most likely signals', opts: ['Genuine surprise', 'Scepticism or irony', 'Agreement', 'Anger only'], a: 1, why: 'The wavering tone marks doubt — “so-called, I doubt it”.' },
    { q: '“I said the <u>BLUE</u> pen, not the black one.” The stressed word', opts: ['Corrects a wrong colour assumption', 'Describes the pen’s price', 'Shows the pen is missing', 'Emphasises the pen’s owner'], a: 0, why: 'The stress splits blue from black — a colour correction.' },
    { q: '“He is <u>STILL</u> here.” The emphasis suggests', opts: ['He has just arrived', 'His staying longer than expected surprises the speaker', 'He lives here', 'He never left before'], a: 1, why: 'Still stressed carries impatience — longer than expected.' },
    { q: 'A statement ending with a falling intonation expresses', opts: ['Doubt', 'Completion and certainty', 'A question', 'Irony'], a: 1, why: 'The fall marks the sentence as finished and meant seriously.' },
    { q: '“They <u>FINISHED</u> the work.” The emphasis implies that', opts: ['The work was abandoned', 'Someone doubted it would be completed', 'They are still working', 'Another team started it'], a: 1, why: 'The stress on the completed action answers earlier doubt.' },
    { q: '“It costs <u>ONLY</u> five hundred naira.” The emphasis suggests that', opts: ['The price is frighteningly high', 'The price is modest, contrary to expectation', 'The item is worthless', 'The price will rise'], a: 1, why: 'Only stressed minimises the figure against a higher expectation.' },
    { q: '“<u>WHAT</u> a place!” spoken with a falling tone expresses', opts: ['A genuine question about the place', 'Strong admiration or strong disgust, decided by context', 'A request for information', 'A neutral observation'], a: 1, why: 'Exclamations take the falling tone; the emotion swings on context.' },
    { q: '“She passed <u>EVERY</u> paper.” The emphasis implies', opts: ['Some papers were failed', 'None were sat', 'The result surprised those expecting failure or partial failure', 'She passed only one'], a: 2, why: 'The stressed quantifier defeats an expectation of partial success.' },
    { q: '“I will go <u>IF</u> you insist.” The stressed conjunction shows that', opts: ['Going depends entirely on the insistence', 'The speaker longs to go', 'The speaker will never go', 'Insisting is forbidden'], a: 0, why: 'Stressing if foregrounds the condition as the whole hinge of the sentence.' }
  ]
});

/* =========================================================================
   CHAPTER 18 — READING TEXT (prescribed novel)
   --------------------------------------------------------------------------
   SWAP-IN NOTE (2026-10): JAMB has not yet announced the prescribed novel for
   UTME 2027. (2025/26 = "The Life Changer"; 2026 = "Lekki Headmaster".)
   When the 2027 novel is announced:
     1. Rewrite the chapter title/blurb/body below to teach THAT text:
        plot summary, character list, themes, chapter-by-chapter notes.
     2. Replace the quiz below with 20+ questions on the novel itself.
        Keep the schema: { q, opts[4], a, why } — why is mandatory.
     3. The 10 reading-text slots in data/english/mock.js are marked
        "// NOVEL-SLOT" — substitute novel questions there too.
   The current content is a skills chapter on answering passage questions
   drawn from a reading text, which remains valid regardless of the set text.
   ========================================================================= */

JAMB.addChapter('english', {
  id: 'reading-text',
  title: 'Reading Text: Answering Passage Questions',
  blurb: 'How the prescribed-novel section is tested, and the skills that work whatever the set text turns out to be.',
  time: '50 min',
  objectives: [
    'Understand how questions on the prescribed reading text are framed',
    'Locate evidence in an unseen narrative passage quickly',
    'Answer vocabulary-in-passage questions from context, not dictionary memory',
    'Tackle character, motivation and inference questions about a story'
  ],
  body: `
<p class="lead">Section A of the Use of English paper closes with questions on a passage from the <strong>prescribed reading text</strong> — the novel every candidate is expected to have read. Ten of the sixty questions come from it. Until the 2027 set text is announced, the wise strategy is unchanged: <strong>read widely, and master the question skills below</strong>, because they apply to any novel JAMB chooses.</p>

<div class="note note-tip"><span class=\"ico\">💡</span><div><b>Why the skills come first</b>
<p>Even candidates who have read the set novel lose marks by trusting memory over the passage. The passage is printed in front of you — it is a comprehension wearing the novel’s costume. Answer from the printed passage; use your memory of the novel only when the question explicitly asks about events outside the extract.</p></div></div>

<h2>The question menu</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Typical wording</th><th>Where the answer lives</th></tr></thead>
  <tbody>
    <tr><td><b>Detail</b></td><td>“According to the passage…”</td><td>An exact sentence — locate and match</td></tr>
    <tr><td><b>Vocabulary in context</b></td><td>“The word ‘X’ as used here means…”</td><td>The sentence around X, plus the paragraph’s sense</td></tr>
    <tr><td><b>Referent</b></td><td>“The word ‘he’ refers to…”</td><td>Scan backwards to the last matching noun</td></tr>
    <tr><td><b>Inference</b></td><td>“It can be inferred that…”</td><td>One small step beyond a stated fact — never two</td></tr>
    <tr><td><b>Author’s view</b></td><td>“The author suggests that…”</td><td>The evaluative words the author chooses</td></tr>
    <tr><td><b>Character / motivation</b></td><td>“From the extract, Salimu is…”</td><td>What the character says, does and is reacted to</td></tr>
  </tbody>
</table>

<h2>Working an extract in four passes</h2>
<div class="formula-box">
  <div class="fb-head">The extract method</div>
  <div class="formula-row"><div class="fname">Pass 1 — skim</div><div class="fexpr">Read for situation: who, where, what has just happened</div></div>
  <div class="formula-row"><div class="fname">Pass 2 — read the stem</div><div class="fexpr">Know what each question hunts for before hunting</div></div>
  <div class="formula-row"><div class="fname">Pass 3 — hunt</div><div class="fexpr">Return to the passage for each question; the answers sit in order</div></div>
  <div class="formula-row"><div class="fname">Pass 4 — verify</div><div class="fexpr">For every choice, ask: can I point to the line that proves it?</div></div>
</div>

<div class="note note-warn"><span class=\"ico\">⚠</span><div><b>The two-step inference trap</b>
<p>“It can be inferred” options love to jump two steps. If the passage says “Amina sold her jewellery”, an option saying “Amina was poor” is one step too far — she may have needed cash for a specific purpose. Choose the option that stops at the first step beyond the text.</p></div></div>

<div class="note note-fact"><span class=\"ico\">ℹ</span><div><b>Prepare the novel properly — whatever it is</b>
<p>When the 2027 set text is announced, read it twice: once for pleasure and plot, once for notes — character list, setting, chapter summaries, themes, the author’s other works. Candidates who know the novel cold convert memory marks into free marks on every question that steps outside the extract.</p></div></div>

<h2>Worked example</h2>
<div class="example">
  <div class="example-h">Extract skills in action</div>
  <div class="example-b">
    <p>“‘You cannot eat your cake and have it,’ the mother said, folding the last wrapper into the box. ‘This money was for your school fees.’”</p>
    <div class="step"><span class="step-l">Vocabulary item:</span> “eat your cake and have it” means — <span class="ans">you cannot spend a thing and still keep it.</span> The context (money already committed) confirms it.</div>
    <div class="step"><span class="step-l">Inference item:</span> “It can be inferred that the money” — <span class="ans">had already been spent or earmarked.</span> “Had been stolen” jumps two steps; resist it.</div>
    <div class="step"><span class="step-l">Character item:</span> The mother’s words show her as — <span class="ans">firm and practical.</span> Pick the option backed by her speech, not by a guess about her feelings.</div>
  </div>
</div>
`,
  quiz: [
    { q: '“According to the passage” questions demand answers that are', opts: ['Stated or implied by the printed passage', 'Supported by your reading of the novel', 'General knowledge about the topic', 'True in real life'], a: 0, why: 'The phrase signals retrieval from the extract itself.' },
    { q: 'A word “as used in the passage” is best defined by', opts: ['Its dictionary meaning first', 'The sentence and paragraph around it', 'Its origin language', 'The most common meaning candidates know'], a: 1, why: 'Context controls meaning; the dictionary is only a fallback.' },
    { q: '“The word ‘they’ in line six refers to', opts: ['The last plural noun mentioned before it', 'The subject of the passage', 'All the people in the story', 'The author’s friends'], a: 0, why: 'Pronouns point backwards to the nearest matching noun.' },
    { q: '“It can be inferred that Amina sold her jewellery.” The safest inference is that', opts: ['She was poor', 'She needed money for something specific', 'She hated ornaments', 'She was robbed'], a: 1, why: 'One step beyond the fact — needing money; poverty assumes a cause.' },
    { q: 'In “The old man sighed and turned away”, the action suggests he is', opts: ['Angry', 'Disappointed or resigned', 'Amused', 'Expecting a gift'], a: 1, why: 'Sigh plus turning away is the body-language of resignation.' },
    { q: 'Questions about a character’s motivation are answered from', opts: ['The character’s actions, speech and reactions to others', 'Your impression from the novel alone', 'The character’s name and age', 'The first paragraph only'], a: 0, why: 'The extract must supply the evidence for any claim about motive.' },
    { q: 'The phrase “you cannot eat your cake and have it” advises that', opts: ['Cake is expensive', 'A thing spent cannot also be kept', 'Eating before school is wrong', 'Celebrations waste fees'], a: 1, why: 'The idiom states the impossibility of consuming and retaining one thing.' },
    { q: 'An author who writes “the so-called professor strutted in” is showing', opts: ['Admiration', 'Scepticism about the title', 'Confusion', 'Indifference'], a: 1, why: '“So-called” withdraws the very claim it repeats — a mark of doubt.' },
    { q: '“The passage suggests that the community” — the correct answer will be', opts: ['A statement the passage directly proves', 'A generalisation the passage merely hints at', 'A claim about every Nigerian community', 'An opinion of the candidate'], a: 0, why: 'Suggests-type questions still require proof inside the extract.' },
    { q: 'In a narrative extract, the setting is established mainly by', opts: ['Descriptions of place, time and conditions', 'The dialogue alone', 'The characters’ names', 'The final sentence'], a: 0, why: 'Setting lives in the descriptive details around the action.' },
    { q: '“The children filed in silently.” The word “filed” suggests they entered', opts: ['Quickly in disorder', 'One behind another in a line', 'Loudly', 'Reluctantly'], a: 1, why: 'To file = to move in single file; the adverb “silently” fits the same picture.' },
    { q: 'Which question type is most likely to trap candidates who remember the novel?', opts: ['Detail questions about the extract', 'Vocabulary-in-context questions', 'Questions about the author’s identity', 'Questions on the page number'], a: 0, why: 'Memory of the whole plot can contradict the extract; the extract wins.' },
    { q: '“Salimu grabbed the bowl and bolted the door.” Salimu is presented as', opts: ['Careless', 'Cautious or secretive', 'Generous', 'Sleepy'], a: 1, why: 'Bolting after securing the bowl signals guarding against intrusion.' },
    { q: 'An extract ends mid-quarrel with “…but that is another story.” The author’s tone here is', opts: ['Regretful', 'Playfully deflecting', 'Furious', 'Apologetic'], a: 1, why: 'The formula deliberately postpones the tale — a wry, storytelling aside.' },
    { q: 'The best way to handle “NOT true according to the passage” items is to', opts: ['Find the three supported options and reject them', 'Choose the most surprising option', 'Guess on first reading', 'Pick the longest option'], a: 0, why: 'Three options will be provable from lines; the fourth is the target.' },
    { q: '“Madam Kofi, who had never approved of the match, kept mute.” This tells us that', opts: ['She was absent from the wedding', 'She opposed the marriage but stayed silent', 'She was speechless with joy', 'She could not speak English'], a: 1, why: 'The relative clause states her opposition; “kept mute” states her restraint.' },
    { q: 'A question asking what happens NEXT after the extract requires', opts: ['Prediction from the extract’s direction', 'Knowledge of a different novel', 'A moral judgement', 'Nothing — the answer is given'], a: 0, why: 'Infer the continuation from the trajectory the extract establishes.' },
    { q: '“The man was a lion in the boardroom.” The figure means he was', opts: ['Brave and dominant', 'Hairy', 'Noisy', 'Lonely'], a: 0, why: 'A direct metaphor — the qualities of a lion transferred to the man.' },
    { q: 'When two characters’ dialogue is given without tags, identify speakers by', opts: ['Their speech style and the logic of the exchange', 'The order of appearance only', 'Their names alone', 'The paragraph length'], a: 0, why: 'Consistent voice and the question–answer chain settle who speaks.' },
    { q: '“The letter came, and the household went wild with joy.” “Went wild” suggests', opts: ['Controlled pleasure', 'Unrestrained excitement', 'Destruction', 'Fear'], a: 1, why: 'The idiom marks intense, uncontained delight.' },
    { q: 'In a novel-based passage, “the title of the extract is most suitable as” items test', opts: ['The central idea of the extract', 'The title of the whole novel', 'The candidate’s creativity only', 'The longest sentence'], a: 0, why: 'The best title captures the main point the extract develops.' },
    { q: 'A character described as “counting every kobo twice” is characterised as', opts: ['Generous', 'Miserly or careful with money', 'Careless', 'Quick at arithmetic'], a: 1, why: 'The idiom signals excessive carefulness with money.' },
    { q: '“She looked at the ceiling as if consulting the ghosts of her ancestors.” The tone is', opts: ['Solemn only', 'Lightly humorous', 'Terrified', 'Scientific'], a: 1, why: 'The mock-serious simile produces humour, not horror.' },
    { q: 'The safest first move on the reading-text questions is to', opts: ['Read the extract through once for situation', 'Answer from memory of the novel', 'Read the options first and skip the passage', 'Guess and move on'], a: 0, why: 'A situational skim makes every later hunt faster and surer.' }
  ]
});
