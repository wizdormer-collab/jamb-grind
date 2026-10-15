/* JAMB 2027 Prep — Mathematics, Chapters 11–15 */

JAMB.addChapter('mathematics', {
  id: 'trig-ratios',
  title: 'Trigonometric Ratios and Identities',
  blurb: 'The three ratios, special angles, the fundamental identity, and angles beyond 90°.',
  time: '60 min',
  objectives: [
    'Define sine, cosine and tangent in a right triangle',
    'Know the exact values at 30°, 45° and 60°',
    'Use sin²θ + cos²θ = 1 and related identities',
    'Find ratios of angles in each quadrant of the unit circle'
  ],
  body: `
<p class="lead">Trigonometry begins as the geometry of right triangles and becomes, by way of the unit circle, a complete theory of angle. JAMB tests both halves: exact values you should know instantly, and identities that let you rewrite an expression so it can be evaluated.</p>

<h2>The three ratios</h2>
<div class="formula-box">
  <div class="fb-head">For an acute angle θ in a right triangle</div>
  <div class="formula-row"><div class="fname">sin θ</div>
    <div class="fexpr">opposite ⁄ hypotenuse</div></div>
  <div class="formula-row"><div class="fname">cos θ</div>
    <div class="fexpr">adjacent ⁄ hypotenuse</div></div>
  <div class="formula-row"><div class="fname">tan θ</div>
    <div class="fexpr">opposite ⁄ adjacent = sin θ ⁄ cos θ</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>SOH-CAH-TOA</b>
<p>Sine = Opposite/Hypotenuse · Cosine = Adjacent/Hypotenuse · Tangent = Opposite/Adjacent. Mark the angle in the diagram first — which side counts as "opposite" depends entirely on where the angle sits.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> In a right triangle the side opposite θ is 3 and the hypotenuse is 5. Find sin θ, cos θ and tan θ
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    sin θ = 3 ⁄ 5</div>
    <div class="step"><div class="step-l">Step 2</div>
    The adjacent side = √(5² − 3²) = √16 = 4, so cos θ = 4 ⁄ 5</div>
    <div class="step"><div class="step-l">Step 3</div>
    tan θ = 3 ⁄ 4</div>
    <div class="ans">sin θ = 0.6 · cos θ = 0.8 · tan θ = 0.75</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The 3-4-5 family</b>
<p>Memorise the Pythagorean triples: <strong>3-4-5</strong>, <strong>5-12-13</strong>, <strong>8-15-17</strong>, <strong>7-24-25</strong>. Most right-triangle questions use one of them, and recognising one saves the whole square-root step.</p></div></div>

<h2>Exact values</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>θ</th><th>sin θ</th><th>cos θ</th><th>tan θ</th></tr></thead>
  <tbody>
    <tr><td>0°</td><td>0</td><td>1</td><td>0</td></tr>
    <tr><td>30°</td><td>1⁄2</td><td>√3⁄2</td><td>1⁄√3</td></tr>
    <tr><td>45°</td><td>√2⁄2</td><td>√2⁄2</td><td>1</td></tr>
    <tr><td>60°</td><td>√3⁄2</td><td>1⁄2</td><td>√3</td></tr>
    <tr><td>90°</td><td>1</td><td>0</td><td>no value (division by zero)</td></tr>
  </tbody>
</table>

<div class="note note-fact"><span class="ico">📌</span><div><b>Symmetry in the table</b>
<p>Reading sin upward and cos downward gives the same numbers, because sin θ = cos(90° − θ). The tan column is whatever sin ⁄ cos gives. Cover two columns and test yourself — it locks the table in.</p></div></div>

<h2>Fundamental identities</h2>
<div class="formula-box">
  <div class="fb-head">The identities</div>
  <div class="formula-row"><div class="fname">Pythagorean</div>
    <div class="fexpr">sin²θ + cos²θ = 1</div></div>
  <div class="formula-row"><div class="fname">Divide by cos²θ</div>
    <div class="fexpr">1 + tan²θ = sec²θ</div></div>
  <div class="formula-row"><div class="fname">Divide by sin²θ</div>
    <div class="fexpr">1 + cot²θ = cosec²θ</div></div>
  <div class="formula-row"><div class="fname">Reciprocals</div>
    <div class="fexpr">sec θ = 1 ⁄ cos θ · cosec θ = 1 ⁄ sin θ · cot θ = 1 ⁄ tan θ</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> If sin θ = 3⁄5 and θ is acute, find cos θ and tan θ
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Method 1 (identity)</div>
    cos²θ = 1 − (3⁄5)² = 1 − 9⁄25 = 16⁄25 → cos θ = 4⁄5 (positive, since θ is acute)</div>
    <div class="step"><div class="step-l">Step 2</div>
    tan θ = sin θ ⁄ cos θ = (3⁄5) ⁄ (4⁄5)</div>
    <div class="ans">cos θ = 4⁄5, tan θ = 3⁄4</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The square root has two signs</b>
<p>From sin²θ + cos²θ = 1 you get cos θ = ±4⁄5. The sign is settled by the <strong>quadrant</strong>: acute angle → positive; second quadrant → only sin positive; third → only tan; fourth → only cos.</p></div></div>

<h2>Complementary and related angles</h2>
<div class="formula-box">
  <div class="fb-head">Rewriting an angle</div>
  <div class="formula-row"><div class="fname">Complementary (90° − θ)</div>
    <div class="fexpr">sin(90° − θ) = cos θ · cos(90° − θ) = sin θ · tan(90° − θ) = cot θ</div></div>
  <div class="formula-row"><div class="fname">Supplementary (180° − θ)</div>
    <div class="fexpr">sin(180° − θ) = sin θ · cos(180° − θ) = −cos θ · tan(180° − θ) = −tan θ</div></div>
  <div class="formula-row"><div class="fname">Negative angle (−θ)</div>
    <div class="fexpr">sin(−θ) = −sin θ · cos(−θ) = cos θ · tan(−θ) = −tan θ</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Evaluate cos 120°
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    120° = 180° − 60°</div>
    <div class="step"><div class="step-l">Step 2</div>
    cos(180° − θ) = −cos θ</div>
    <div class="ans">cos 120° = −cos 60° = −½</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Evaluate sin 150°
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    150° = 180° − 30°</div>
    <div class="step"><div class="step-l">Step 2</div>
    sin(180° − θ) = sin θ</div>
    <div class="ans">sin 150° = sin 30° = ½</div>
  </div>
</div>

<h2>The quadrants (CAST)</h2>
<div class="formula-box">
  <div class="fb-head">Which ratio is positive</div>
  <div class="formula-row"><div class="fname">Quadrant I (0°–90°)</div>
    <div class="fexpr">All three positive</div></div>
  <div class="formula-row"><div class="fname">Quadrant II (90°–180°)</div>
    <div class="fexpr">Only <b>sin</b> positive</div></div>
  <div class="formula-row"><div class="fname">Quadrant III (180°–270°)</div>
    <div class="fexpr">Only <b>tan</b> positive</div></div>
  <div class="formula-row"><div class="fname">Quadrant IV (270°–360°)</div>
    <div class="fexpr">Only <b>cos</b> positive</div>
    <div class="fnote">Read anticlockwise as "All, Sin, Tan, Cos".</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find all θ between 0° and 360° with sin θ = ½
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Reference angle: sin⁻¹(½) = 30°</div>
    <div class="step"><div class="step-l">Step 2</div>
    Sine is positive in quadrants I and II</div>
    <div class="step"><div class="step-l">Step 3</div>
    Quadrant I: 30°. Quadrant II: 180° − 30° = 150°</div>
    <div class="ans">θ = 30° or 150°</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The reference angle method</b>
<p>Find the acute angle whose ratio is the given number, then place it in whichever quadrants the sign allows. Three steps, every time — it works for sin, cos and tan alike.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.</li>
<li>Exact values at 0°, 30°, 45°, 60°, 90° should be instant.</li>
<li>sin²θ + cos²θ = 1 is the identity you will use most.</li>
<li>sin(90° − θ) = cos θ; sin(180° − θ) = sin θ; cos(180° − θ) = −cos θ.</li>
<li>All, Sin, Tan, Cos — one positive ratio per quadrant.</li>
</ul>
`,
  quiz: [
    { q: 'sin 30° equals', opts: ['1⁄2', '√3⁄2', '√2⁄2', '1'], a: 0, why: 'From the standard table of exact values.' },
    { q: 'cos 60° equals', opts: ['√3⁄2', '1⁄2', '√2⁄2', '0'], a: 1, why: 'cos 60° = sin 30° = 1⁄2.' },
    { q: 'tan 45° equals', opts: ['0', '1', '√3', '1⁄√3'], a: 1, why: 'Opposite and adjacent are equal in a 45-45-90 triangle.' },
    { q: 'sin 45° equals', opts: ['1⁄2', '√2⁄2', '√3⁄2', '1'], a: 1, why: 'In a 45-45-90 triangle the ratio is 1 ⁄ √2, written √2⁄2.' },
    { q: 'tan 60° equals', opts: ['√3', '1⁄√3', '1', '√2'], a: 0, why: 'It is the reciprocal of tan 30°.' },
    { q: 'In a right triangle, sin θ = 3⁄5. Then cos θ =', opts: ['4⁄5', '5⁄4', '3⁄4', '5⁄3'], a: 0, why: 'The missing side is √(25 − 9) = 4.' },
    { q: 'If the opposite side is 3 and the hypotenuse 5, tan θ is', opts: ['3⁄4', '4⁄3', '3⁄5', '5⁄4'], a: 0, why: 'Adjacent = 4, so tan θ = 3 ⁄ 4.' },
    { q: 'sin²θ + cos²θ equals', opts: ['0', '1', 'tan θ', '2'], a: 1, why: 'The fundamental Pythagorean identity.' },
    { q: '1 + tan²θ equals', opts: ['cosec²θ', 'sec²θ', 'cot²θ', '1'], a: 1, why: 'Divide sin²θ + cos²θ = 1 by cos²θ.' },
    { q: 'If sin θ = 5⁄13 and θ is acute, cos θ is', opts: ['12⁄13', '8⁄13', '5⁄12', '13⁄12'], a: 0, why: 'This is the 5-12-13 triple.' },
    { q: 'cos θ = 4⁄5 for acute θ, so tan θ is', opts: ['4⁄3', '3⁄4', '5⁄4', '4⁄5'], a: 1, why: 'Opposite = 3, so tan θ = 3 ⁄ 4.' },
    { q: 'sin(90° − θ) equals', opts: ['cos θ', '−cos θ', 'sin θ', 'tan θ'], a: 0, why: 'Sine and cosine are cofunctions.' },
    { q: 'cos(180° − θ) equals', opts: ['cos θ', '−cos θ', 'sin θ', '−sin θ'], a: 1, why: 'In the second quadrant cosine is negative.' },
    { q: 'sin(180° − θ) equals', opts: ['−sin θ', 'sin θ', 'cos θ', '−cos θ'], a: 1, why: 'In the second quadrant sine stays positive and equals its supplement\'s value.' },
    { q: 'cos 120° equals', opts: ['−½', '½', '−√3⁄2', '√3⁄2'], a: 0, why: '120° = 180° − 60°, and cos(180° − θ) = −cos θ.' },
    { q: 'sin 150° equals', opts: ['½', '−½', '√3⁄2', '−√3⁄2'], a: 0, why: '150° = 180° − 30°, and sin(180° − θ) = sin θ.' },
    { q: 'cos 0° equals', opts: ['0', '1', '−1', 'undefined'], a: 1, why: 'On the unit circle at 0° the x-coordinate is 1.' },
    { q: 'sin 90° equals', opts: ['0', '1', '−1', 'undefined'], a: 1, why: 'At 90° the y-coordinate on the unit circle is 1.' },
    { q: 'cot θ is defined as', opts: ['cos θ ⁄ sin θ', 'sin θ ⁄ cos θ', '1 ⁄ sin θ', '1 ⁄ cos θ'], a: 0, why: 'It is the reciprocal of tan θ = sin ⁄ cos.' },
    { q: 'sec θ equals', opts: ['1 ⁄ sin θ', '1 ⁄ cos θ', 'cos θ ⁄ sin θ', 'sin θ'], a: 1, why: 'Secant is the reciprocal of cosine.' },
    { q: 'If tan θ = 1 and θ is acute, θ equals', opts: ['30°', '45°', '60°', '90°'], a: 1, why: 'sin θ = cos θ only at 45°.' },
    { q: 'In which quadrant is cosine positive and sine negative?', opts: ['I', 'II', 'III', 'IV'], a: 3, why: 'The "C" quadrant: 270°–360°.' },
    { q: 'In quadrant III, which ratio is positive?', opts: ['sin', 'cos', 'tan', 'All'], a: 2, why: 'Only tangent is positive there (the "T" quadrant).' },
    { q: 'All solutions of sin θ = ½ between 0° and 360° are', opts: ['30° and 150°', '30° and 330°', '150° and 210°', '30° only'], a: 0, why: 'Sine is positive in quadrants I and II.' },
    { q: 'All solutions of cos θ = ½ between 0° and 360° are', opts: ['60° and 300°', '60° and 120°', '300° only', '60° and 240°'], a: 0, why: 'Cosine is positive in quadrants I and IV.' },
    { q: 'If sin θ = 0.6, then cos²θ equals', opts: ['0.64', '0.8', '1.36', '0.36'], a: 0, why: 'cos²θ = 1 − 0.36 = 0.64.' },
    { q: 'Given cos θ = 3⁄5, the value of tan θ for an acute θ is', opts: ['4⁄3', '3⁄4', '5⁄4', '4⁄5'], a: 0, why: 'Opposite = 4, so tan θ = 4 ⁄ 3.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'trig-applications',
  title: 'Trigonometric Equations, Graphs and Solutions of Triangles',
  blurb: 'Sine and cosine rules, area of a triangle, bearings, heights and distances, and the wave graphs.',
  time: '65 min',
  objectives: [
    'Solve basic trigonometric equations in a given range',
    'Apply the sine rule and cosine rule to any triangle',
    'Calculate the area of a triangle as ½ab sin C',
    'Solve problems on bearings, elevation and depression'
  ],
  body: `
<p class="lead">This is where trigonometry earns its marks. The sine and cosine rules extend the ratios beyond right triangles; bearings and heights-and-distances supply the word problems that appear in almost every paper.</p>

<h2>Graphs of the ratios</h2>
<div class="formula-box">
  <div class="fb-head">The wave</div>
  <div class="formula-row"><div class="fname">sin x</div>
    <div class="fexpr">Period 360°, ranges from −1 to 1, passes through the origin</div></div>
  <div class="formula-row"><div class="fname">cos x</div>
    <div class="fexpr">Period 360°, ranges from −1 to 1, starts at its maximum of 1</div></div>
  <div class="formula-row"><div class="fname">tan x</div>
    <div class="fexpr">Period 180°, unbounded, with asymptotes at 90°, 270°, …</div></div>
  <div class="formula-row"><div class="fname">amplitude</div>
    <div class="fexpr">For y = a sin bx: amplitude a, period 360° ⁄ b</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Solve 2 sin x − 1 = 0 for 0° ≤ x ≤ 360°
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    sin x = ½</div>
    <div class="step"><div class="step-l">Step 2</div>
    Reference angle 30°, positive in quadrants I and II</div>
    <div class="step"><div class="step-l">Step 3</div>
    x = 30° or 150°</div>
    <div class="ans">x = 30°, 150°</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Solve 2 cos x + 1 = 0 for 0° ≤ x ≤ 360°
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    cos x = −½</div>
    <div class="step"><div class="step-l">Step 2</div>
    Reference angle 60°; cosine is negative in quadrants II and III</div>
    <div class="step"><div class="step-l">Step 3</div>
    x = 180° − 60° = 120° and x = 180° + 60° = 240°</div>
    <div class="ans">x = 120°, 240°</div>
  </div>
</div>

<h2>The sine rule</h2>
<div class="formula-box">
  <div class="fb-head">For any triangle ABC with sides a, b, c opposite those angles</div>
  <div class="formula-row"><div class="fname">Sides and angles</div>
    <div class="fexpr">a ⁄ sin A = b ⁄ sin B = c ⁄ sin C</div></div>
  <div class="formula-row"><div class="fname">Rearranged</div>
    <div class="fexpr">a = k sin A,  sin A = a sin B ⁄ b</div></div>
  <div class="formula-row"><div class="fname">When to use it</div>
    <div class="fexpr">A <b>matching pair</b> — one side with its opposite angle — is known</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> In triangle ABC, A = 40°, B = 75°, b = 10 cm. Find a
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The matching pair is B = 75° with b = 10</div>
    <div class="step"><div class="step-l">Step 2</div>
    a ⁄ sin 40° = 10 ⁄ sin 75°</div>
    <div class="step"><div class="step-l">Step 3</div>
    a = 10 × sin 40° ⁄ sin 75° = 10 × 0.6428 ⁄ 0.9659</div>
    <div class="ans">a ≈ 6.65 cm</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The ambiguous case</b>
<p>Given a side, its opposite angle and another side, there may be <strong>two possible triangles</strong> when the known angle is acute and the opposite side is shorter than the other given side but longer than the perpendicular height. If a question asks for "the possible values", there are two.</p></div></div>

<h2>The cosine rule</h2>
<div class="formula-box">
  <div class="fb-head">When no angle–side pair matches</div>
  <div class="formula-row"><div class="fname">Finding a side</div>
    <div class="fexpr">a² = b² + c² − 2bc cos A</div></div>
  <div class="formula-row"><div class="fname">Finding an angle</div>
    <div class="fexpr">cos A = (b² + c² − a²) ⁄ 2bc</div></div>
  <div class="formula-row"><div class="fname">Remember</div>
    <div class="fexpr">Two sides and the angle <b>between</b> them → cosine rule</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Triangle PQR: PQ = 7, PR = 9, angle P = 60°. Find QR
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The angle is between the two known sides → cosine rule</div>
    <div class="step"><div class="step-l">Step 2</div>
    QR² = 7² + 9² − 2(7)(9) cos 60°</div>
    <div class="step"><div class="step-l">Step 3</div>
    = 49 + 81 − 126(0.5) = 130 − 63 = 67</div>
    <div class="ans">QR = √67 ≈ 8.19</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find the largest angle of a triangle with sides 5, 6, 7
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The largest angle faces the longest side (7)</div>
    <div class="step"><div class="step-l">Step 2</div>
    cos C = (5² + 6² − 7²) ⁄ (2 × 5 × 6) = (25 + 36 − 49) ⁄ 60</div>
    <div class="step"><div class="step-l">Step 3</div>
    cos C = 12 ⁄ 60 = 0.2</div>
    <div class="ans">C ≈ 78.5°</div>
  </div>
</div>

<h2>Area of a triangle</h2>
<div class="formula-box">
  <div class="fb-head">Two area formulas</div>
  <div class="formula-row"><div class="fname">Right triangle</div>
    <div class="fexpr">½ × base × height</div></div>
  <div class="formula-row"><div class="fname">Any triangle</div>
    <div class="fexpr">½ a b sin C (the angle must be the one <b>between</b> the two sides)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Find the area of a triangle with sides 8 and 12 enclosing an angle of 30°
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Area = ½ × 8 × 12 × sin 30°</div>
    <div class="step"><div class="step-l">Step 2</div>
    = 48 × ½</div>
    <div class="ans">24 square units</div>
  </div>
</div>

<h2>Angles of elevation and depression</h2>
<div class="formula-box">
  <div class="fb-head">The vocabulary</div>
  <div class="formula-row"><div class="fname">Angle of elevation</div>
    <div class="fexpr">Looking <b>up</b> from the horizontal to an object</div></div>
  <div class="formula-row"><div class="fname">Angle of depression</div>
    <div class="fexpr">Looking <b>down</b> from the horizontal to an object</div>
    <div class="fnote">It equals the angle of elevation seen from the other end (alternate angles).</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> The top of a 20 m tower is observed from a point 30 m away on level ground. Find the angle of elevation
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    tan θ = opposite ⁄ adjacent = 20 ⁄ 30 = 0.6667</div>
    <div class="step"><div class="step-l">Step 2</div>
    θ = tan⁻¹(0.6667)</div>
    <div class="ans">θ ≈ 33.7°</div>
  </div>
</div>

<h2>Bearings</h2>
<div class="formula-box">
  <div class="fb-head">Two conventions</div>
  <div class="formula-row"><div class="fname">True (three-figure) bearing</div>
    <div class="fexpr">Measured <b>clockwise from north</b>, 000° to 360°, always three digits</div></div>
  <div class="formula-row"><div class="fname">Compass bearing</div>
    <div class="fexpr">Give the acute angle from north or south, then the direction: N 40° E</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">8</span> A ship sails on a bearing of 065°. State its direction in compass terms
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    065° is 65° clockwise from north</div>
    <div class="step"><div class="step-l">Step 2</div>
    That is 65° towards the east of north</div>
    <div class="ans">N 65° E (north 65° east)</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Draw the diagram before the triangle</b>
<p>Every bearings or heights problem can be reduced to a triangle you can label. Sketch the north lines, mark the given angle, then choose sine or cosine rule by asking: <em>do I have a matching side–angle pair?</em></p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Solve trig equations by finding the reference angle, then choosing the correct quadrants.</li>
<li>Matching side–angle pair → sine rule; two sides and the included angle → cosine rule.</li>
<li>Area = ½ ab sin C with C between a and b.</li>
<li>Angle of depression equals the angle of elevation of the observer seen from below.</li>
<li>True bearings: three digits, clockwise from north.</li>
</ul>
`,
  quiz: [
    { q: 'The solutions of 2 sin x − 1 = 0 for 0° ≤ x ≤ 360° are', opts: ['30° and 150°', '30° and 330°', '150° and 210°', '45° and 135°'], a: 0, why: 'sin x = ½ is positive in quadrants I and II.' },
    { q: 'The solutions of 2 cos x + 1 = 0 for 0° ≤ x ≤ 360° are', opts: ['120° and 240°', '60° and 300°', '120° and 300°', '240° and 300°'], a: 0, why: 'cos x = −½; negative in quadrants II and III.' },
    { q: 'The period of y = sin x is', opts: ['90°', '180°', '360°', '720°'], a: 2, why: 'The sine wave repeats every full turn.' },
    { q: 'The period of y = tan x is', opts: ['90°', '180°', '360°', '45°'], a: 1, why: 'Tangent repeats every 180°.' },
    { q: 'The amplitude of y = 3 sin 2x is', opts: ['2', '3', '6', '180'], a: 1, why: 'Amplitude is the coefficient of sine; the period is 180°.' },
    { q: 'The maximum value of y = 4 cos x is', opts: ['1', '4', '2', '0'], a: 1, why: 'Cosine never exceeds 1, so the maximum is 4.' },
    { q: 'Which rule applies when a side and its opposite angle are known?', opts: ['Cosine rule', 'Sine rule', 'Pythagoras', 'Tangent rule'], a: 1, why: 'The sine rule links each side with its opposite angle.' },
    { q: 'In triangle ABC, a ⁄ sin A = 30. If A = 50°, then a is', opts: ['30 sin 50°', '30 ⁄ sin 50°', '30 cos 50°', '50 sin 30°'], a: 0, why: 'a = 30 sin 50° ≈ 23.' },
    { q: 'A triangle has b = 10, B = 45°, A = 60°. Then a equals', opts: ['10 sin 60° ⁄ sin 45°', '10 sin 45° ⁄ sin 60°', '10 cos 60°', '10 × 45 ⁄ 60'], a: 0, why: 'Cross-multiplying the sine rule: a = b sin A ⁄ sin B.' },
    { q: 'The cosine rule states that a² =', opts: ['b² + c² + 2bc cos A', 'b² + c² − 2bc cos A', 'b² − c² − 2bc cos A', 'b² + c² − bc sin A'], a: 1, why: 'The minus sign distinguishes it from the expansion of (b + c)².' },
    { q: 'Given sides 7 and 9 with an included angle of 60°, the third side squared is', opts: ['67', '130', '145', '64'], a: 0, why: '49 + 81 − 2(7)(9)(0.5) = 130 − 63 = 67.' },
    { q: 'In a triangle with sides 5, 6, 7, cos C (opposite 7) equals', opts: ['0.2', '0.8', '0.5', '−0.2'], a: 0, why: '(25 + 36 − 49) ⁄ 60 = 12 ⁄ 60.' },
    { q: 'To find an angle when all three sides are known you use the', opts: ['Sine rule', 'Cosine rule', 'Tangent ratio', 'Half-angle formula'], a: 1, why: 'cos A = (b² + c² − a²) ⁄ 2bc.' },
    { q: 'The area of a triangle with sides 8 and 12 enclosing 30° is', opts: ['24', '48', '48√3', '12'], a: 0, why: '½ × 8 × 12 × ½ = 24.' },
    { q: '½ ab sin C requires angle C to be', opts: ['The largest angle', 'The angle between a and b', 'An acute angle', 'The angle opposite c'], a: 1, why: 'The angle must be the one enclosed by the two sides.' },
    { q: 'A 20 m tower is viewed from 30 m away on level ground. The angle of elevation is about', opts: ['33.7°', '56.3°', '30°', '45°'], a: 0, why: 'tan⁻¹(20⁄30) = tan⁻¹(0.667) ≈ 33.7°.' },
    { q: 'The angle of depression from A to B is equal to', opts: ['The angle of elevation from B to A', 'The complement of it', 'The supplement of it', 'Zero'], a: 0, why: 'Alternate angles between parallel horizontals.' },
    { q: 'A true bearing of 065° means', opts: ['65° west of north', '65° clockwise from north', '65° anticlockwise from north', '65° south of east'], a: 1, why: 'True bearings are measured clockwise from north.' },
    { q: 'The compass bearing N 40° E corresponds to the true bearing', opts: ['040°', '050°', '140°', '320°'], a: 0, why: '40° clockwise from north.' },
    { q: 'The three-figure bearing of due south is', opts: ['090°', '180°', '270°', '000°'], a: 1, why: 'South is 180° clockwise from north.' },
    { q: 'A ship sails due east then turns due north. The bearing of its final position from the start is', opts: ['045°', '090°', '135°', '315°'], a: 0, why: 'It lies 45° clockwise from north, exactly north-east.' },
    { q: 'If sin A ⁄ a = sin B ⁄ b, the triangle is being solved by the', opts: ['Cosine rule', 'Sine rule', 'Tangent rule', 'Heron\'s formula'], a: 1, why: 'That proportion is the sine rule rearranged.' },
    { q: 'The number of solutions of sin x = 0.5 in 0° ≤ x ≤ 720° is', opts: ['1', '2', '3', '4'], a: 3, why: 'Two per cycle (30° and 150°), and 720° covers two cycles.' },
    { q: 'Given a triangle with two sides and the angle opposite one of them, there may be', opts: ['Always exactly one triangle', 'Two possible triangles', 'No triangle', 'Always three triangles'], a: 1, why: 'The ambiguous case of the sine rule can produce two triangles.' },
    { q: 'The value of 10 sin 30° is', opts: ['5', '10', '8.66', '20'], a: 0, why: 'sin 30° = ½.' },
    { q: 'A kite string of 50 m makes an angle of elevation of 30° with the ground. Its height is', opts: ['25 m', '43.3 m', '50 m', '28.9 m'], a: 0, why: '50 sin 30° = 25 m.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'plane-geometry',
  title: 'Angles, Lines and Polygons',
  blurb: 'Angle facts on lines and at a point, parallel-line rules, triangles and polygons.',
  time: '55 min',
  objectives: [
    'Use angle facts on straight lines and around a point',
    'Apply alternate, corresponding and co-interior angle rules',
    'Prove that the angles of a triangle sum to 180°',
    'Find interior and exterior angles of polygons'
  ],
  body: `
<p class="lead">Plane geometry on this paper is a small set of angle rules applied quickly. The difficulty is never the algebra — it is spotting which rule the diagram is offering you. Learn the rules as names, and the diagrams become readable.</p>

<h2>Basic angle facts</h2>
<div class="formula-box">
  <div class="fb-head">The three foundation rules</div>
  <div class="formula-row"><div class="fname">On a straight line</div>
    <div class="fexpr">Angles add to 180°</div></div>
  <div class="formula-row"><div class="fname">Around a point</div>
    <div class="fexpr">Angles add to 360°</div></div>
  <div class="formula-row"><div class="fname">Vertically opposite</div>
    <div class="fexpr">They are equal</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Label every angle you find</b>
<p>Geometry questions are chains: one known angle unlocks the next. Write each value into the diagram as soon as you compute it — candidates who keep the diagram clean and the numbers in their head lose the chain halfway through.</p></div></div>

<h2>Parallel lines cut by a transversal</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Name</th><th>Position</th><th>Rule</th></tr></thead>
  <tbody>
    <tr><td><b>Correspondent</b></td><td>Same side of the transversal, same relative position</td><td>Equal</td></tr>
    <tr><td><b>Alternate</b></td><td>Opposite sides of the transversal, between the lines</td><td>Equal</td></tr>
    <tr><td><b>Co-interior</b></td><td>Same side, between the lines</td><td>Add to 180°</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Z, F and C</b>
<p>Alternate angles form a <strong>Z</strong>, corresponding angles an <strong>F</strong>, co-interior angles a <strong>C</strong>. Finding the letter in the diagram is faster than reasoning from definitions under time pressure.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Two parallel lines are cut by a transversal. One interior angle is 115°. Find the co-interior angle beside it
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Co-interior angles are supplementary</div>
    <div class="step"><div class="step-l">Step 2</div>
    180° − 115°</div>
    <div class="ans">65°</div>
  </div>
</div>

<h2>Triangles</h2>
<div class="formula-box">
  <div class="fb-head">Angle facts</div>
  <div class="formula-row"><div class="fname">Angle sum</div>
    <div class="fexpr">The interior angles total 180°</div></div>
  <div class="formula-row"><div class="fname">Exterior angle</div>
    <div class="fexpr">An exterior angle equals the sum of the two opposite interior angles</div></div>
  <div class="formula-row"><div class="fname">Right triangle</div>
    <div class="fexpr">The two acute angles sum to 90°</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Two angles of a triangle are 48° and 73°. Find the third
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    48 + 73 = 121</div>
    <div class="step"><div class="step-l">Step 2</div>
    180 − 121</div>
    <div class="ans">59°</div>
  </div>
</div>

<h2>Polygons</h2>
<div class="formula-box">
  <div class="fb-head">n-sided polygon</div>
  <div class="formula-row"><div class="fname">Sum of interior angles</div>
    <div class="fexpr">(n − 2) × 180°</div></div>
  <div class="formula-row"><div class="fname">One interior angle (regular)</div>
    <div class="fexpr">(n − 2) × 180° ⁄ n</div></div>
  <div class="formula-row"><div class="fname">Sum of exterior angles</div>
    <div class="fexpr">360° for <b>any</b> convex polygon</div></div>
  <div class="formula-row"><div class="fname">One exterior angle (regular)</div>
    <div class="fexpr">360° ⁄ n, and it equals 180° − (interior angle)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Find the interior angle of a regular octagon
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    n = 8, so the interior sum = 6 × 180° = 1080°</div>
    <div class="step"><div class="step-l">Step 2</div>
    Divide by 8: 1080 ⁄ 8</div>
    <div class="ans">135°</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> How many sides has a polygon whose interior angles sum to 1620°?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    (n − 2) × 180 = 1620</div>
    <div class="step"><div class="step-l">Step 2</div>
    n − 2 = 9</div>
    <div class="ans">n = 11 (a hendecagon)</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Interior sum grows; exterior sum never does</b>
<p>Exterior angles always total 360° — a fact that makes many "find n" questions a one-line calculation: if each exterior angle of a regular polygon is 24°, then n = 360 ⁄ 24 = 15 immediately.</p></div></div>

<h2>Types of angle</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Name</th><th>Size</th></tr></thead>
  <tbody>
    <tr><td>Acute</td><td>Less than 90°</td></tr>
    <tr><td>Right</td><td>Exactly 90°</td></tr>
    <tr><td>Obtuse</td><td>Between 90° and 180°</td></tr>
    <tr><td>Reflex</td><td>Between 180° and 360°</td></tr>
    <tr><td>Full turn</td><td>360°</td></tr>
  </tbody>
</table>

<h2>Symmetry</h2>
<div class="formula-box">
  <div class="fb-head">Rotational and line symmetry</div>
  <div class="formula-row"><div class="fname">Regular n-gon</div>
    <div class="fexpr">n lines of symmetry and rotational order n</div>
    <div class="fnote">Smallest rotation = 360° ⁄ n.</div></div>
  <div class="formula-row"><div class="fname">Parallelogram</div>
    <div class="fexpr">Rotational order 2, but <b>no</b> lines of symmetry (unless it is a rhombus)</div></div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>A parallelogram has no line of symmetry</b>
<p>Candidates routinely claim two. Folding a slanted parallelogram never maps it onto itself — only a rectangle or a rhombus among the parallelograms has lines of symmetry.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Straight line 180°, around a point 360°, vertically opposite equal.</li>
<li>Z = alternate (equal), F = corresponding (equal), C = co-interior (180°).</li>
<li>Triangle angles total 180°; an exterior angle equals the two opposite interiors.</li>
<li>Interior sum (n − 2)180°; exterior sum always 360°.</li>
<li>Regular n-gon: 360° ⁄ n per exterior angle and rotational order n.</li>
</ul>
`,
  quiz: [
    { q: 'Two angles on a straight line are 55° and x. Then x =', opts: ['125°', '135°', '45°', '115°'], a: 0, why: 'Angles on a straight line sum to 180°.' },
    { q: 'Angles around a point total', opts: ['180°', '360°', '90°', '540°'], a: 1, why: 'A full turn.' },
    { q: 'Vertically opposite angles are', opts: ['Supplementary', 'Equal', 'Complementary', 'Always right angles'], a: 1, why: 'They are formed by two intersecting straight lines.' },
    { q: 'If two interior angles on the same side of a transversal cutting parallel lines are in the ratio 2 : 3, the angles are', opts: ['60° and 90°', '72° and 108°', '45° and 135°', '40° and 140°'], a: 1, why: 'Co-interior angles sum to 180°: 5 parts = 180°, so 2 parts = 72°.' },
    { q: 'Corresponding angles between parallel lines are', opts: ['Equal', 'Supplementary', 'Complementary', 'In ratio 1 : 2'], a: 0, why: 'They occupy matching positions relative to the transversal.' },
    { q: 'Alternate interior angles are', opts: ['Supplementary', 'Equal', 'Always 90°', 'Unequal'], a: 1, why: 'That is the Z-pattern rule.' },
    { q: 'Co-interior (allied) angles', opts: ['Are equal', 'Sum to 180°', 'Sum to 360°', 'Sum to 90°'], a: 1, why: 'They lie between the parallels on the same side.' },
    { q: 'The angles of a triangle sum to', opts: ['90°', '180°', '270°', '360°'], a: 1, why: 'The interior angle sum of any triangle.' },
    { q: 'Two angles of a triangle are 48° and 73°. The third is', opts: ['59°', '61°', '121°', '55°'], a: 0, why: '180 − 121 = 59.' },
    { q: 'An exterior angle of a triangle equals', opts: ['The sum of the two opposite interior angles', 'Half the third interior angle', '180° minus the adjacent angle only', 'The sum of all three interior angles'], a: 0, why: 'It is supplementary to its neighbour, and so equals the two non-adjacent ones.' },
    { q: 'In a right triangle the two acute angles', opts: ['Are equal', 'Sum to 90°', 'Sum to 180°', 'Are complementary only if isosceles'], a: 1, why: 'The right angle takes 90° of the total 180°.' },
    { q: 'The sum of the interior angles of a pentagon is', opts: ['540°', '720°', '360°', '900°'], a: 0, why: '(5 − 2) × 180 = 540.' },
    { q: 'The interior angle sum of a hexagon is', opts: ['720°', '540°', '1080°', '360°'], a: 0, why: '4 × 180 = 720.' },
    { q: 'Each interior angle of a regular octagon is', opts: ['135°', '144°', '120°', '140°'], a: 0, why: '1080° ⁄ 8 = 135°.' },
    { q: 'Each exterior angle of a regular pentagon is', opts: ['72°', '108°', '60°', '45°'], a: 0, why: '360° ⁄ 5 = 72°.' },
    { q: 'A polygon has interior angles summing to 1620°. It has', opts: ['9 sides', '11 sides', '12 sides', '10 sides'], a: 1, why: 'n − 2 = 1620 ⁄ 180 = 9, so n = 11.' },
    { q: 'The sum of the exterior angles of any convex polygon is', opts: ['180°', '360°', '(n − 2)180°', 'It depends on n'], a: 1, why: 'Always a full turn, whatever the number of sides.' },
    { q: 'Each exterior angle of a regular polygon is 24°. The polygon has', opts: ['12 sides', '15 sides', '18 sides', '24 sides'], a: 1, why: '360 ⁄ 24 = 15.' },
    { q: 'A regular polygon has 10 sides. Its interior angle is', opts: ['144°', '140°', '148°', '135°'], a: 0, why: 'Each exterior is 36°, so the interior is 180 − 36 = 144°.' },
    { q: 'An angle measuring 210° is called', opts: ['Obtuse', 'Reflex', 'Acute', 'Straight'], a: 1, why: 'Reflex angles lie between 180° and 360°.' },
    { q: 'The rotational symmetry order of a parallelogram is', opts: ['1', '2', '3', '4'], a: 1, why: 'It maps onto itself after 180°.' },
    { q: 'A regular polygon with rotational order 6 has', opts: ['6 sides', '5 sides', '12 sides', '3 sides'], a: 0, why: 'The order equals the number of sides.' },
    { q: 'The smallest angle of rotational symmetry of a regular octagon is', opts: ['45°', '60°', '30°', '40°'], a: 0, why: '360 ⁄ 8 = 45°.' },
    { q: 'In the diagram two parallel lines are cut by a transversal; an alternate angle to 65° is', opts: ['65°', '115°', '65° on the same side', '180°'], a: 0, why: 'Alternate angles are equal.' },
    { q: 'An isosceles triangle has a vertex angle of 40°. Each base angle is', opts: ['70°', '40°', '80°', '140°'], a: 0, why: '(180 − 40) ⁄ 2 = 70.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'circles',
  title: 'Circles',
  blurb: 'Circle theorems, tangents, arcs and sectors, and the equation of a circle.',
  time: '55 min',
  objectives: [
    'Apply the standard circle theorems in a diagram',
    'Use tangent–radius and tangent-length properties',
    'Calculate arc lengths and sector areas',
    'Write and read the equation of a circle'
  ],
  body: `
<p class="lead">Circle geometry is almost entirely a matter of <strong>recognising the configuration</strong>. Five theorems cover nearly everything JAMB asks; learn to spot their shapes in a diagram and the proofs become routine.</p>

<h2>The circle theorems</h2>
<div class="formula-box">
  <div class="fb-head">The five that matter</div>
  <div class="formula-row"><div class="fname">Angle at the centre</div>
    <div class="fexpr">The angle subtended at the centre is <b>twice</b> the angle at the circumference</div>
    <div class="fnote">Both stand on the same arc.</div></div>
  <div class="formula-row"><div class="fname">Angle in a semicircle</div>
    <div class="fexpr">It is always <b>90°</b></div>
    <div class="fnote">A special case of the theorem above.</div></div>
  <div class="formula-row"><div class="fname">Angles in the same segment</div>
    <div class="fexpr">Equal — they stand on the same arc</div></div>
  <div class="formula-row"><div class="fname">Cyclic quadrilateral</div>
    <div class="fexpr">Opposite angles sum to <b>180°</b></div></div>
  <div class="formula-row"><div class="fname">Alternate segment</div>
    <div class="fexpr">The angle between a tangent and a chord equals the angle in the alternate segment</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> An angle at the circumference subtended by an arc is 35°. What is the angle at the centre?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The centre angle is twice the circumference angle</div>
    <div class="step"><div class="step-l">Step 2</div>
    2 × 35°</div>
    <div class="ans">70°</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> ABCD is a cyclic quadrilateral with angle A = 110°. Find angle C
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Opposite angles of a cyclic quadrilateral are supplementary</div>
    <div class="step"><div class="step-l">Step 2</div>
    180° − 110°</div>
    <div class="ans">Angle C = 70°</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Spot the "arrowhead"</b>
<p>The angle-at-centre configuration looks like an arrowhead with its tip at the circumference. Once you see it, the answer is a doubling or halving — no working needed beyond writing it down.</p></div></div>

<h2>Tangents</h2>
<div class="formula-box">
  <div class="fb-head">Three tangent facts</div>
  <div class="formula-row"><div class="fname">Tangent ⊥ radius</div>
    <div class="fexpr">A tangent meets the radius at the point of contact at 90°</div></div>
  <div class="formula-row"><div class="fname">Tangents from a point</div>
    <div class="fexpr">The two tangent segments from an external point are <b>equal in length</b></div></div>
  <div class="formula-row"><div class="fname">Tangent and chord</div>
    <div class="fexpr">The angle between them equals the angle in the alternate segment</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Two tangents from point P touch a circle of radius 5 cm. If the distance from P to the centre is 13 cm, find the tangent length
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The radius meets the tangent at 90°, giving a right triangle</div>
    <div class="step"><div class="step-l">Step 2</div>
    t² = 13² − 5² = 169 − 25 = 144</div>
    <div class="ans">t = 12 cm</div>
  </div>
</div>

<h2>Arcs and sectors</h2>
<div class="formula-box">
  <div class="fb-head">θ measured in degrees</div>
  <div class="formula-row"><div class="fname">Circumference</div>
    <div class="fexpr">C = 2πr</div></div>
  <div class="formula-row"><div class="fname">Arc length</div>
    <div class="fexpr">L = (θ ⁄ 360°) × 2πr</div></div>
  <div class="formula-row"><div class="fname">Area of circle</div>
    <div class="fexpr">A = πr²</div></div>
  <div class="formula-row"><div class="fname">Sector area</div>
    <div class="fexpr">A = (θ ⁄ 360°) × πr² = ½ r² θ (θ in <b>radians</b>)</div></div>
  <div class="formula-row"><div class="fname">Segment area</div>
    <div class="fexpr">Sector area − triangle area</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the length of an arc subtending 72° in a circle of radius 10 cm
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Fraction of the circle = 72 ⁄ 360 = 1⁄5</div>
    <div class="step"><div class="step-l">Step 2</div>
    Circumference = 2π × 10 = 20π</div>
    <div class="step"><div class="step-l">Step 3</div>
    Arc = 20π ⁄ 5</div>
    <div class="ans">4π ≈ 12.57 cm</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find the area of a sector of radius 6 cm and angle 150°
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Fraction = 150 ⁄ 360 = 5⁄12</div>
    <div class="step"><div class="step-l">Step 2</div>
    Area = (5⁄12) × π × 36 = 15π</div>
    <div class="ans">15π ≈ 47.12 cm²</div>
  </div>
</div>

<h2>The equation of a circle</h2>
<div class="formula-box">
  <div class="fb-head">Standard forms</div>
  <div class="formula-row"><div class="fname">Centre (0, 0)</div>
    <div class="fexpr">x² + y² = r²</div></div>
  <div class="formula-row"><div class="fname">Centre (a, b)</div>
    <div class="fexpr">(x − a)² + (y − b)² = r²</div></div>
  <div class="formula-row"><div class="fname">Expanding</div>
    <div class="fexpr">x² + y² + 2gx + 2fy + c = 0 with centre (−g, −f) and r² = g² + f² − c</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Find the centre and radius of x² + y² − 6x + 4y − 12 = 0
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Centre = (−g, −f) = (3, −2)</div>
    <div class="step"><div class="step-l">Step 2</div>
    r² = 3² + (−2)² − (−12) = 9 + 4 + 12 = 25</div>
    <div class="ans">Centre (3, −2), radius 5</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Half the coefficient, change the sign</b>
<p>The same trick as completing the square: for −6x the centre x-coordinate is +3. Read the centre straight from the equation without writing out the full square.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Centre angle = 2 × circumference angle; angle in a semicircle = 90°.</li>
<li>Cyclic quadrilateral: opposite angles sum to 180°.</li>
<li>Tangent ⊥ radius; tangents from an external point are equal.</li>
<li>Arc = (θ⁄360) × 2πr; sector = (θ⁄360) × πr².</li>
<li>(x − a)² + (y − b)² = r² has centre (a, b) and radius r.</li>
</ul>
`,
  quiz: [
    { q: 'The angle at the centre subtended by an arc is twice the angle at the', opts: ['Circumference', 'Tangent', 'Centre', 'Chord midpoint'], a: 0, why: 'The standard angle-at-centre theorem.' },
    { q: 'An angle at the circumference is 35°. The angle at the centre is', opts: ['35°', '70°', '17.5°', '140°'], a: 1, why: 'Twice the angle at the circumference.' },
    { q: 'An angle in a semicircle is', opts: ['45°', '60°', '90°', '120°'], a: 2, why: 'It is half of the 180° angle at the centre.' },
    { q: 'Angles in the same segment are', opts: ['Equal', 'Supplementary', 'In ratio 1 : 2', 'Always right angles'], a: 0, why: 'They stand on the same arc.' },
    { q: 'In a cyclic quadrilateral, opposite angles', opts: ['Are equal', 'Sum to 180°', 'Sum to 90°', 'Sum to 360°'], a: 1, why: 'That is the cyclic quadrilateral theorem.' },
    { q: 'ABCD is cyclic with angle A = 110°. Angle C is', opts: ['70°', '110°', '20°', '90°'], a: 0, why: '180 − 110 = 70.' },
    { q: 'A tangent to a circle meets the radius at the point of contact at', opts: ['45°', '60°', '90°', '180°'], a: 2, why: 'The tangent is perpendicular to the radius there.' },
    { q: 'Two tangents from an external point P to a circle have lengths', opts: ['In ratio 2 : 1', 'Equal', 'Dependent on the radius', 'Proportional to the arc'], a: 1, why: 'Tangent segments from one external point are always equal.' },
    { q: 'The tangent length from a point 13 cm from the centre of a radius-5 cm circle is', opts: ['10 cm', '12 cm', '13 cm', '8 cm'], a: 1, why: '√(169 − 25) = √144 = 12.' },
    { q: 'The circumference of a circle of radius 7 cm is (take π = 22⁄7)', opts: ['44 cm', '22 cm', '154 cm', '49 cm'], a: 0, why: '2 × 22⁄7 × 7 = 44.' },
    { q: 'The area of a circle of radius 7 cm is (π = 22⁄7)', opts: ['154 cm²', '44 cm²', '49 cm²', '88 cm²'], a: 0, why: '22⁄7 × 49 = 154.' },
    { q: 'An arc of 72° in a circle of radius 10 cm has length', opts: ['4π cm', '5π cm', '20π cm', '10π cm'], a: 0, why: '72⁄360 = 1⁄5 of 20π.' },
    { q: 'A sector of radius 6 cm and angle 150° has area', opts: ['15π cm²', '10π cm²', '30π cm²', '18π cm²'], a: 0, why: '(150⁄360) × 36π = 15π.' },
    { q: 'The area of a sector of radius r and angle θ (radians) is', opts: ['½ r²θ', 'r²θ', '½ r θ', 'θ ⁄ 360 πr²'], a: 0, why: 'With θ in radians the sector area is ½ r²θ.' },
    { q: 'The length of an arc of radius r and angle θ (radians) is', opts: ['rθ', '½ rθ', '2πrθ', 'θ ⁄ r'], a: 0, why: 'Arc length = radius × angle in radians.' },
    { q: 'The circle x² + y² = 25 has radius', opts: ['5', '25', '12.5', '10'], a: 0, why: 'Comparing with x² + y² = r² gives r² = 25, so r = 5.' },
    { q: 'The circle (x − 3)² + (y + 2)² = 16 has centre', opts: ['(3, −2)', '(−3, 2)', '(3, 2)', '(−3, −2)'], a: 0, why: 'The centre has the opposite signs to those inside the brackets.' },
    { q: 'The circle (x − 3)² + (y + 2)² = 16 has radius', opts: ['4', '16', '8', '2'], a: 0, why: 'Comparing with (x − a)² + (y − b)² = r² gives r² = 16, so r = 4.' },
    { q: 'x² + y² − 6x + 4y − 12 = 0 has centre', opts: ['(3, −2)', '(−3, 2)', '(6, −4)', '(3, 2)'], a: 0, why: 'Centre is (−g, −f) = (3, −2).' },
    { q: 'The radius of x² + y² − 6x + 4y − 12 = 0 is', opts: ['5', '4', '25', '13'], a: 0, why: 'r² = 9 + 4 + 12 = 25.' },
    { q: 'A chord that passes through the centre of a circle is called', opts: ['A radius', 'A diameter', 'A tangent', 'A segment'], a: 1, why: 'It is the longest chord.' },
    { q: 'The angle between a tangent and a chord through the point of contact equals', opts: ['The angle in the alternate segment', 'Half the central angle', '90° always', 'The reflex angle at the centre'], a: 0, why: 'The alternate segment theorem.' },
    { q: 'A segment of a circle has area', opts: ['Sector area plus triangle area', 'Sector area minus triangle area', 'Twice the sector area', 'The arc length times radius'], a: 1, why: 'The chord cuts off the triangle between the chord and the arc.' },
    { q: 'The centre angle standing on the same arc as a 50° circumference angle is', opts: ['100°', '50°', '25°', '140°'], a: 0, why: 'The angle at the centre is twice the angle at the circumference: 2 × 50° = 100°.' },
    { q: 'From a point P outside a circle, two tangents meet the circle; the angle between them at the centre is 70°. The angle between the two tangents at P is', opts: ['110°', '70°', '140°', '180°'], a: 0, why: 'The radii are perpendicular to the tangents, so the four-sided figure has two right angles: 360° − 90° − 90° − 70° = 110°.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'coordinate-geometry',
  title: 'Coordinate Geometry',
  blurb: 'Distance, midpoint, gradient, straight-line equations and the angle between two lines.',
  time: '55 min',
  objectives: [
    'Find the distance between two points and the midpoint of a segment',
    'Calculate gradients and write equations of lines',
    'Test collinearity using gradients',
    'Find the angle between two intersecting lines'
  ],
  body: `
<p class="lead">Coordinate geometry is where algebra and geometry meet. Four formulas — distance, midpoint, gradient, and the line equation — carry almost the entire topic, so the work lies in choosing correctly rather than in difficult manipulation.</p>

<h2>Distance and midpoint</h2>
<div class="formula-box">
  <div class="fb-head">For points (x₁, y₁) and (x₂, y₂)</div>
  <div class="formula-row"><div class="fname">Distance</div>
    <div class="fexpr">d = √[(x₂ − x₁)² + (y₂ − y₁)²]</div></div>
  <div class="formula-row"><div class="fname">Midpoint</div>
    <div class="fexpr">M = ( (x₁ + x₂)⁄2 , (y₁ + y₂)⁄2 )</div>
    <div class="fnote">Averages of the coordinates — never a square root in sight.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Find the distance between (1, 2) and (4, 6)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Differences: 4 − 1 = 3, 6 − 2 = 4</div>
    <div class="step"><div class="step-l">Step 2</div>
    d = √(3² + 4²) = √(9 + 16)</div>
    <div class="ans">5</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Find the midpoint of (2, 8) and (6, 4)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    x = (2 + 6) ⁄ 2 = 4</div>
    <div class="step"><div class="step-l">Step 2</div>
    y = (8 + 4) ⁄ 2 = 6</div>
    <div class="ans">(4, 6)</div>
  </div>
</div>

<h2>Gradient</h2>
<div class="formula-box">
  <div class="fb-head">m = rise ⁄ run</div>
  <div class="formula-row"><div class="fname">From two points</div>
    <div class="fexpr">m = (y₂ − y₁) ⁄ (x₂ − x₁)</div></div>
  <div class="formula-row"><div class="fname">From a line equation</div>
    <div class="fexpr">Read it from y = mx + c</div></div>
  <div class="formula-row"><div class="fname">Collinear points</div>
    <div class="fexpr">The gradients between consecutive pairs are equal</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Test whether A(1, 2), B(3, 6) and C(5, 10) are collinear
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Gradient AB = (6 − 2) ⁄ (3 − 1) = 4 ⁄ 2 = 2</div>
    <div class="step"><div class="step-l">Step 2</div>
    Gradient BC = (10 − 6) ⁄ (5 − 3) = 4 ⁄ 2 = 2</div>
    <div class="ans">Equal gradients, so A, B and C lie on a straight line</div>
  </div>
</div>

<h2>Equations of straight lines</h2>
<div class="formula-box">
  <div class="fb-head">Three forms</div>
  <div class="formula-row"><div class="fname">Gradient–intercept</div>
    <div class="fexpr">y = mx + c (m = gradient, c = y-intercept)</div></div>
  <div class="formula-row"><div class="fname">Point–gradient</div>
    <div class="fexpr">y − y₁ = m(x − x₁)</div></div>
  <div class="formula-row"><div class="fname">Two-point form</div>
    <div class="fexpr">(y − y₁) ⁄ (y₂ − y₁) = (x − x₁) ⁄ (x₂ − x₁)</div></div>
  <div class="formula-row"><div class="fname">Intercept form</div>
    <div class="fexpr">x⁄a + y⁄b = 1 (a = x-intercept, b = y-intercept)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the equation of the line through (2, 5) with gradient −3
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    y − 5 = −3(x − 2)</div>
    <div class="step"><div class="step-l">Step 2</div>
    y − 5 = −3x + 6</div>
    <div class="ans">y = −3x + 11  (or 3x + y − 11 = 0)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find the equation of the line through (1, 2) and (4, 8)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    m = (8 − 2) ⁄ (4 − 1) = 2</div>
    <div class="step"><div class="step-l">Step 2</div>
    y − 2 = 2(x − 1)</div>
    <div class="ans">y = 2x</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Perpendicular gradients multiply to −1</b>
<p>A line with gradient 2 meets a perpendicular line with gradient −½. If their product is not −1, either the arithmetic or the claim of perpendicularity is wrong — check both.</p></div></div>

<h2>The angle between two lines</h2>
<div class="formula-box">
  <div class="fb-head">For gradients m₁ and m₂</div>
  <div class="formula-row"><div class="fname">Formula</div>
    <div class="fexpr">tan θ = | (m₂ − m₁) ⁄ (1 + m₁m₂) |</div>
    <div class="fnote">Take the positive value for the acute angle between them.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Find the acute angle between the lines y = 2x + 1 and y = x − 3
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    m₁ = 2, m₂ = 1</div>
    <div class="step"><div class="step-l">Step 2</div>
    tan θ = | (1 − 2) ⁄ (1 + 2) | = 1⁄3</div>
    <div class="step"><div class="step-l">Step 3</div>
    θ = tan⁻¹(0.3333)</div>
    <div class="ans">θ ≈ 18.4°</div>
  </div>
</div>

<h2>Section formula</h2>
<div class="formula-box">
  <div class="fb-head">Dividing a segment in the ratio m : n</div>
  <div class="formula-row"><div class="fname">Internal division</div>
    <div class="fexpr">( (mx₂ + nx₁)⁄(m + n) , (my₂ + ny₁)⁄(m + n) )</div></div>
  <div class="formula-row"><div class="fname">Midpoint</div>
    <div class="fexpr">The special case m = n</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> Find the point dividing (2, 4) and (8, 10) internally in the ratio 1 : 2
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    x = (1 × 8 + 2 × 2) ⁄ 3 = 12 ⁄ 3 = 4</div>
    <div class="step"><div class="step-l">Step 2</div>
    y = (1 × 10 + 2 × 4) ⁄ 3 = 18 ⁄ 3 = 6</div>
    <div class="ans">(4, 6)</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Cross-multiply, then weight</b>
<p>The ratio m : n weights the <em>far</em> point more heavily — in a 1 : 2 split the result sits one-third of the way from the first point. If your answer is closer to the second point when m = 1, the terms are swapped.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>d = √[(Δx)² + (Δy)²]; midpoint = averages of the coordinates.</li>
<li>m = Δy ⁄ Δx; equal gradients ⟹ collinear; perpendicular gradients multiply to −1.</li>
<li>Point–gradient form y − y₁ = m(x − x₁) is the most reliable way to build an equation.</li>
<li>tan θ = |(m₂ − m₁) ⁄ (1 + m₁m₂)| for the angle between two lines.</li>
<li>Section formula weights the coordinates by the ratio, cross-multiplying the far point.</li>
</ul>
`,
  quiz: [
    { q: 'The distance between (1, 2) and (4, 6) is', opts: ['5', '7', '4', '√7'], a: 0, why: '√(3² + 4²) = 5, the 3-4-5 triangle.' },
    { q: 'The distance between (0, 0) and (3, 4) is', opts: ['7', '5', '12', '√7'], a: 1, why: '√(9 + 16) = 5.' },
    { q: 'The midpoint of (2, 8) and (6, 4) is', opts: ['(4, 6)', '(8, 12)', '(2, 6)', '(4, 4)'], a: 0, why: 'Averages: (4, 6).' },
    { q: 'The midpoint of (−2, 5) and (6, −1) is', opts: ['(2, 2)', '(4, 4)', '(2, 3)', '(1, 2)'], a: 0, why: '(4⁄2, 4⁄2) = (2, 2).' },
    { q: 'The gradient of the line through (1, 2) and (4, 8) is', opts: ['2', '3', '½', '6'], a: 0, why: '(8 − 2) ⁄ (4 − 1) = 2.' },
    { q: 'The gradient of the line through (0, 0) and (3, −6) is', opts: ['2', '−2', '½', '−½'], a: 1, why: '−6 ⁄ 3 = −2.' },
    { q: 'The gradient of y = 4 − x is', opts: ['4', '−1', '1', '−4'], a: 1, why: 'Rearranged: y = −x + 4.' },
    { q: 'The line y = 3x + 7 crosses the y-axis at', opts: ['(3, 0)', '(0, 7)', '(7, 0)', '(0, 3)'], a: 1, why: 'Set x = 0: the line meets the y-axis where the constant term sits, at (0, 7).' },
    { q: 'The line 2x + 3y = 6 has gradient', opts: ['2', '3', '−2⁄3', '−3⁄2'], a: 2, why: 'Rearrange: y = −(2⁄3)x + 2.' },
    { q: 'The equation of a line through (0, −2) with gradient 4 is', opts: ['y = 4x − 2', 'y = −4x − 2', 'y = 4x + 2', 'y = 2x − 4'], a: 0, why: 'y = mx + c with m = 4, c = −2.' },
    { q: 'A line through (2, 5) with gradient −3 has equation', opts: ['y = −3x + 11', 'y = 3x − 11', 'y = −3x − 1', 'y = −3x + 5'], a: 0, why: 'y − 5 = −3(x − 2).' },
    { q: 'A line through (1, 2) and (4, 8) has equation', opts: ['y = 2x', 'y = x + 1', 'y = 3x − 1', 'y = 2x + 1'], a: 0, why: 'Gradient 2 through the origin.' },
    { q: 'A line with gradient 3 is perpendicular to one with gradient', opts: ['3', '−3', '−1⁄3', '1⁄3'], a: 2, why: 'Product must be −1: 3 × (−1⁄3) = −1.' },
    { q: 'A line parallel to y = 5x − 1 could be', opts: ['y = −5x + 2', 'y = 5x + 9', 'y = x + 9', 'y = 5 − x'], a: 1, why: 'Parallel lines have equal gradients.' },
    { q: 'A, B, C are collinear if', opts: ['Their gradients from A to B and B to C are equal', 'Their coordinates are equal', 'The sum of the gradients is zero', 'The distance AB equals BC'], a: 0, why: 'Equal gradients through a shared point mean the same line.' },
    { q: 'The points (1, 2), (3, 6) and (5, 10) are', opts: ['Collinear', 'Vertices of a right triangle', 'Not collinear', 'Concyclic only'], a: 0, why: 'Both gradients equal 2.' },
    { q: 'The acute angle between lines of gradient 2 and 1 is', opts: ['18.4°', '45°', '26.6°', '63.4°'], a: 0, why: 'tan θ = |(1 − 2) ⁄ (1 + 2)| = 1⁄3.' },
    { q: 'The angle between two perpendicular lines is', opts: ['45°', '90°', '60°', '0°'], a: 1, why: 'By definition.' },
    { q: 'The point dividing (2, 4) and (8, 10) in the ratio 1 : 2 internally is', opts: ['(4, 6)', '(5, 7)', '(6, 8)', '(3, 5)'], a: 0, why: '((8 + 4)⁄3, (10 + 8)⁄3) = (4, 6).' },
    { q: 'The line 3x − 2y = 12 has x-intercept', opts: ['4', '−4', '6', '−6'], a: 0, why: 'Set y = 0: x = 4.' },
    { q: 'The line 3x − 2y = 12 has y-intercept', opts: ['6', '−6', '4', '−4'], a: 1, why: 'Set x = 0: −2y = 12, so y = −6.' },
    { q: 'The intercept form of a line with x-intercept 4 and y-intercept 6 is', opts: ['x⁄4 + y⁄6 = 1', 'x⁄4 − y⁄6 = 1', '4x + 6y = 1', 'x + y = 10'], a: 0, why: 'x⁄a + y⁄b = 1.' },
    { q: 'The gradient of a horizontal line is', opts: ['0', '1', 'Undefined', '∞'], a: 0, why: 'There is no rise.' },
    { q: 'The gradient of a vertical line is', opts: ['0', '1', 'Undefined', '−1'], a: 2, why: 'The run is zero, so the division is undefined.' },
    { q: 'A line makes an angle of 45° with the x-axis. Its gradient is', opts: ['1', '0', '√3', '½'], a: 0, why: 'm = tan 45° = 1.' },
    { q: 'The line y = x passes through', opts: ['The origin only', '(1, 1) and (2, 2)', '(0, 1)', '(1, 0) only'], a: 1, why: 'Every point has equal coordinates.' }
  ]
});
