/* JAMB 2027 Prep — Mathematics, Chapters 6–10 */

JAMB.addChapter('mathematics', {
  id: 'equations',
  title: 'Quadratic and Simultaneous Equations',
  blurb: 'Four methods for solving quadratics, the discriminant, and solving two equations in two unknowns.',
  time: '60 min',
  objectives: [
    'Solve quadratics by factorisation, completing the square and the formula',
    'Use the discriminant to predict the nature of the roots',
    'Solve simultaneous linear equations by elimination and substitution',
    'Set up and solve word problems as simultaneous equations'
  ],
  body: `
<p class="lead">The quadratic equation is the single most examined algebraic object on the paper. It always has <strong>four solution routes</strong>, and the exam rewards knowing which to pick: factorise when the roots are neat, complete the square when asked for a vertex, use the formula when the numbers are awkward.</p>

<h2>Standard form</h2>
<div class="formula-box">
  <div class="fb-head">ax² + bx + c = 0, with a ≠ 0</div>
  <div class="formula-row"><div class="fname">Sum of roots</div>
    <div class="fexpr">α + β = −b ⁄ a</div></div>
  <div class="formula-row"><div class="fname">Product of roots</div>
    <div class="fexpr">αβ = c ⁄ a</div>
    <div class="fnote">Both follow from factorising as a(x − α)(x − β).</div></div>
  <div class="formula-row"><div class="fname">The equation from its roots</div>
    <div class="fexpr">x² − (sum)x + (product) = 0</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Solve x² − 5x + 6 = 0 by factorisation
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Find two numbers with product +6 and sum −5 → <b>−2 and −3</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    Write (x − 2)(x − 3) = 0</div>
    <div class="step"><div class="step-l">Step 3</div>
    A product is zero only when a factor is zero</div>
    <div class="ans">x = 2 or x = 3</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Check with sum and product</b>
<p>Roots 2 and 3: sum 5 = −b⁄a ✓, product 6 = c⁄a ✓. This check costs seconds and confirms the factorisation even if you guessed the pair.</p></div></div>

<h2>The quadratic formula</h2>
<div class="formula-box">
  <div class="fb-head">For ax² + bx + c = 0</div>
  <div class="formula-row"><div class="fname">Formula</div>
    <div class="fexpr">x = [ −b ± √(b² − 4ac) ] ⁄ 2a</div>
    <div class="fnote">The ± carries both roots.</div></div>
  <div class="formula-row"><div class="fname">Discriminant</div>
    <div class="fexpr">Δ = b² − 4ac</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Δ</th><th>Roots</th><th>Graph</th></tr></thead>
  <tbody>
    <tr><td>Δ &gt; 0</td><td>Two distinct real roots</td><td>Crosses the x-axis twice</td></tr>
    <tr><td>Δ = 0</td><td>One repeated root</td><td>Touches the x-axis</td></tr>
    <tr><td>Δ &lt; 0</td><td>No real roots</td><td>Never meets the x-axis</td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">2</span> Solve 2x² − 7x + 3 = 0
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Δ = (−7)² − 4(2)(3) = 49 − 24 = 25, and √25 = 5</div>
    <div class="step"><div class="step-l">Step 2</div>
    x = [ 7 ± 5 ] ⁄ 4</div>
    <div class="step"><div class="step-l">Step 3</div>
    x = 12⁄4 = 3 or x = 2⁄4 = ½</div>
    <div class="ans">x = 3 or x = 0.5</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> How many real roots does 2x² − 3x + 5 = 0 have?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Δ = (−3)² − 4(2)(5) = 9 − 40</div>
    <div class="step"><div class="step-l">Step 2</div>
    Δ = −31, which is negative</div>
    <div class="ans">No real roots — the graph never meets the x-axis</div>
  </div>
</div>

<h2>Completing the square</h2>
<div class="formula-box">
  <div class="fb-head">Turning ax² + bx + c into a(x − h)² + k</div>
  <div class="formula-row"><div class="fname">Method</div>
    <div class="fexpr">Take out a from the first two terms, then add and subtract (b⁄2a)²</div></div>
  <div class="formula-row"><div class="fname">Result</div>
    <div class="fexpr">Vertex at (−b⁄2a,  c − b²⁄4a) · axis of symmetry x = −b⁄2a</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Write x² + 6x + 5 in the form (x + p)² + q
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Half of 6 is 3, so introduce 3² = 9: x² + 6x + 9 − 9 + 5</div>
    <div class="step"><div class="step-l">Step 2</div>
    Group: (x + 3)² − 4</div>
    <div class="ans">(x + 3)² − 4, so the minimum is −4 at x = −3</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Half the x-coefficient, square it</b>
<p>The recipe never changes: halve the coefficient of x, square it, add and subtract it. Whether a is 1 or not, take a outside the bracket first.</p></div></div>

<h2>Simultaneous equations</h2>
<div class="formula-box">
  <div class="fb-head">Two equations, two unknowns</div>
  <div class="formula-row"><div class="fname">Elimination</div>
    <div class="fexpr">Multiply so a coefficient matches, then add or subtract the equations</div>
    <div class="fnote">Best when both equations are linear with tidy coefficients.</div></div>
  <div class="formula-row"><div class="fname">Substitution</div>
    <div class="fexpr">Express one unknown in terms of the other and replace it in the second equation</div>
    <div class="fnote">Best when one equation is already nearly solved, or one is quadratic.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Solve 2x + y = 7 and x − y = 2
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The coefficients of y are +1 and −1 — <b>add</b> the equations: 3x = 9</div>
    <div class="step"><div class="step-l">Step 2</div>
    x = 3</div>
    <div class="step"><div class="step-l">Step 3</div>
    Substitute: 3 − y = 2 → y = 1</div>
    <div class="ans">x = 3, y = 1 — check in the first equation: 6 + 1 = 7 ✓</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Solve x + y = 5 and xy = 6
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    From the first: y = 5 − x</div>
    <div class="step"><div class="step-l">Step 2</div>
    Substitute: x(5 − x) = 6 → 5x − x² = 6</div>
    <div class="step"><div class="step-l">Step 3</div>
    Rearrange: x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0</div>
    <div class="ans">x = 2, y = 3  or  x = 3, y = 2</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Always write both unknowns</b>
<p>An answer of "x = 2" alone loses the mark when the question asks for the pair. In the example above there are <strong>two solution pairs</strong>, and the question may ask for both or for the set {2, 3}.</p></div></div>

<h2>Word problems</h2>
<div class="example">
  <div class="example-h"><span class="num">7</span> Two ages: A is three times as old as B. In 8 years the sum of their ages will be 64. Find their present ages
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Let B's age be x, so A's is 3x</div>
    <div class="step"><div class="step-l">Step 2</div>
    In 8 years: (3x + 8) + (x + 8) = 64</div>
    <div class="step"><div class="step-l">Step 3</div>
    4x + 16 = 64 → 4x = 48 → x = 12</div>
    <div class="ans">B is 12 and A is 36 (check: 44 + 20 = 64 ✓)</div>
  </div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>Factorise when the roots are integers; otherwise use the formula.</li>
<li>Δ = b² − 4ac decides whether there are two, one or no real roots.</li>
<li>Sum of roots −b⁄a, product c⁄a — a fast check on every answer.</li>
<li>Complete the square by halving the x-coefficient and squaring it.</li>
<li>Simultaneous equations: eliminate when linear, substitute when one equation curves.</li>
</ul>
`,
  quiz: [
    { q: 'The solutions of x² − 5x + 6 = 0 are', opts: ['2 and 3', '−2 and −3', '1 and 6', '−1 and −6'], a: 0, why: 'Two numbers multiplying to 6 and adding to −5 are −2 and −3.' },
    { q: 'The roots of x² − 7x + 12 = 0 are', opts: ['3 and 4', '−3 and −4', '2 and 6', '1 and 12'], a: 0, why: '−3 and −4 multiply to +12 and add to −7.' },
    { q: 'x² + 2x − 15 = 0 has roots', opts: ['5 and 3', '−5 and 3', '5 and −3', '−5 and −3'], a: 1, why: 'Factors of −15 adding to +2 are +5 and −3.' },
    { q: 'Solving x² = 49 gives', opts: ['x = 7 only', 'x = ±7', 'x = 49', 'x = 24.5'], a: 1, why: 'Both 7² and (−7)² equal 49.' },
    { q: 'The discriminant of 2x² − 7x + 3 = 0 is', opts: ['25', '49', '37', '−25'], a: 0, why: '49 − 4(2)(3) = 49 − 24 = 25.' },
    { q: 'The equation 2x² − 3x + 5 = 0 has', opts: ['Two real roots', 'One repeated root', 'No real roots', 'Three roots'], a: 2, why: 'Δ = 9 − 40 = −31 < 0, so the graph never meets the x-axis.' },
    { q: 'If Δ = 0 the quadratic has', opts: ['No real roots', 'Exactly one repeated root', 'Two equal roots only if a = 1', 'Three roots'], a: 1, why: 'The curve just touches the x-axis.' },
    { q: 'The roots of 3x² − 12x = 0 are', opts: ['0 and 4', '0 and −4', '4 and −4', '12 and 3'], a: 0, why: 'Factor 3x: 3x(x − 4) = 0.' },
    { q: 'For 2x² − 7x + 3 = 0 the sum of the roots is', opts: ['3.5', '−3.5', '1.5', '−1.5'], a: 0, why: 'Sum = −b⁄a = 7⁄2 = 3.5; the roots 3 and ½ confirm it.' },
    { q: 'For 4x² − x + 6 = 0 the product of the roots is', opts: ['−1⁄4', '1⁄4', '3⁄2', '6'], a: 2, why: 'Product = c⁄a = 6⁄4 = 1.5.' },
    { q: 'x² + 6x + 5 written as (x + p)² + q has p and q equal to', opts: ['p = 3, q = −4', 'p = 6, q = 5', 'p = 3, q = 14', 'p = −3, q = −4'], a: 0, why: '(x + 3)² = x² + 6x + 9, so subtract 4 to restore the original.' },
    { q: 'The vertex of y = x² − 4x + 1 is at', opts: ['(2, −3)', '(−2, −3)', '(4, 1)', '(2, 3)'], a: 0, why: 'x = −b⁄2a = 2, and y = 4 − 8 + 1 = −3.' },
    { q: 'The axis of symmetry of y = 2x² + 8x − 3 is', opts: ['x = −2', 'x = 2', 'x = 4', 'x = −4'], a: 0, why: 'x = −b⁄2a = −8⁄4 = −2.' },
    { q: 'Solving 2x + y = 7 and x − y = 2 gives', opts: ['x = 3, y = 1', 'x = 1, y = 3', 'x = 2, y = 3', 'x = 3, y = 2'], a: 0, why: 'Adding the equations gives 3x = 9.' },
    { q: 'The solution of x + y = 10 and x − y = 4 is', opts: ['x = 7, y = 3', 'x = 6, y = 4', 'x = 3, y = 7', 'x = 5, y = 5'], a: 0, why: 'Add: 2x = 14; then y = 3.' },
    { q: 'If x + y = 5 and xy = 6, then the possible values of x are', opts: ['2 and 3', '1 and 6', '−2 and −3', '4 and 1'], a: 0, why: 'y = 5 − x gives x(5 − x) = 6 → x² − 5x + 6 = 0.' },
    { q: 'For ax² + bx + c = 0 with a ≠ 0, the quadratic formula uses the denominator', opts: ['2a', 'a', 'b', '√a'], a: 0, why: 'The denominator of [−b ± √(b² − 4ac)] is 2a.' },
    { q: 'The equation x² + 1 = 0 has', opts: ['Two real roots', 'No real roots', 'One root, zero', 'Two positive roots'], a: 1, why: 'x² = −1 has no real solution, since a square cannot be negative.' },
    { q: 'The sum of two numbers is 18 and their difference is 4. The numbers are', opts: ['7 and 11', '9 and 9', '14 and 4', '12 and 6'], a: 0, why: 'Adding: 2x = 22, so x = 11 and the other is 7.' },
    { q: 'A is three times as old as B. In 8 years the sum of their ages is 64. B is now', opts: ['12', '16', '8', '20'], a: 0, why: '4x + 16 = 64 gives x = 12.' },
    { q: '3x² + 10x − 8 = 0 has roots', opts: ['2⁄3 and −4', '−2⁄3 and 4', '3 and −4', '1⁄3 and −8'], a: 0, why: 'Split: (3x − 2)(x + 4) = 0 gives x = 2⁄3 or x = −4.' },
    { q: 'If x = 2 is a root of 2x² + bx + 8 = 0, then b equals', opts: ['−12', '12', '−8', '−4'], a: 2, why: 'Substitute: 2(4) + 2b + 8 = 0 → 16 + 2b = 0 → b = −8.' },
    { q: 'Completing the square for x² − 8x + 3 gives', opts: ['(x − 4)² − 13', '(x + 4)² − 13', '(x − 4)² − 5', '(x − 8)² + 3'], a: 0, why: 'Half of −8 is −4; 16 must be subtracted: 16 + 3 → (x − 4)² − 13.' },
    { q: 'The number of real roots of x² − 6x + 9 = 0 is', opts: ['0', '1', '2', '3'], a: 1, why: 'Δ = 36 − 36 = 0, so there is one repeated root, x = 3.' },
    { q: 'The minimum value of y = x² − 6x + 11 is', opts: ['2', '3', '−2', '11'], a: 0, why: '(x − 3)² + 2, so the least value is 2 at x = 3.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'inequalities',
  title: 'Inequalities and Absolute Value',
  blurb: 'Solving linear and quadratic inequalities and reading the solution on a number line.',
  time: '45 min',
  objectives: [
    'Solve linear inequalities in one variable',
    'Reverse the inequality when multiplying or dividing by a negative number',
    'Solve quadratic inequalities using a sign chart',
    'Solve inequalities involving |x|'
  ],
  body: `
<p class="lead">An inequality is an expression with a <strong>&lt;</strong>, <strong>&gt;</strong>, <strong>≤</strong> or <strong>≥</strong> instead of an equals sign. The algebra is almost identical to solving equations — with one rule that, when broken, ruins the whole solution.</p>

<h2>The rules</h2>
<div class="formula-box">
  <div class="fb-head">What you may and may not do</div>
  <div class="formula-row"><div class="fname">Allowed without change</div>
    <div class="fexpr">Adding or subtracting the same quantity on both sides</div></div>
  <div class="formula-row"><div class="fname">Allowed without change</div>
    <div class="fexpr">Multiplying or dividing by a <b>positive</b> number</div></div>
  <div class="formula-row"><div class="fname">MUST reverse the sign</div>
    <div class="fexpr">Multiplying or dividing by a <b>negative</b> number</div>
    <div class="fnote">−2 &gt; −5, but multiply by −1 and you get 2 &lt; 5.</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The sign flip is the whole question</b>
<p>JAMB sets −3x &gt; 15 or −2x ≤ 8 specifically to catch candidates who divide by the negative and keep the same symbol. Flip the symbol, then shade the correct region.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Solve 3x − 6 &gt; 0
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Add 6: 3x &gt; 6</div>
    <div class="step"><div class="step-l">Step 2</div>
    Divide by +3 — no sign change: x &gt; 2</div>
    <div class="ans">x &gt; 2 (any number strictly greater than 2)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Solve −3x &gt; 15
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Divide both sides by −3</div>
    <div class="step"><div class="step-l">Step 2</div>
    Because the divisor is negative, <b>reverse the inequality</b>: &gt; becomes &lt;</div>
    <div class="ans">x &lt; −5</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Solve 2x + 3 ≤ 7x − 12
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Collect x on the left: 3 + 12 ≤ 7x − 2x</div>
    <div class="step"><div class="step-l">Step 2</div>
    15 ≤ 5x</div>
    <div class="step"><div class="step-l">Step 3</div>
    Divide by +5: 3 ≤ x</div>
    <div class="ans">x ≥ 3</div>
  </div>
</div>

<h2>Quadratic inequalities</h2>
<p>You cannot simply "take square roots". Find the <strong>critical values</strong> (where the expression is zero), then test each region between them.</p>

<div class="example">
  <div class="example-h"><span class="num">4</span> Solve x² − 4 &gt; 0
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Factorise: (x − 2)(x + 2) &gt; 0, so the critical values are x = 2 and x = −2</div>
    <div class="step"><div class="step-l">Step 2</div>
    Test a value in each region. Take x = 0: 0 − 4 = −4, which is <b>not</b> &gt; 0 → the middle region fails</div>
    <div class="step"><div class="step-l">Step 3</div>
    Take x = 3: 9 − 4 = 5 &gt; 0 ✓ and by symmetry x = −3 works ✓</div>
    <div class="ans">x &lt; −2 or x &gt; 2</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Solve x² − 5x + 6 ≤ 0
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    (x − 2)(x − 3) ≤ 0 with critical values 2 and 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    Test x = 4: (2)(2) = 4, positive → fails. Test x = 2.5: (0.5)(−0.5) = −0.25, negative ✓</div>
    <div class="step"><div class="step-l">Step 3</div>
    The inequality holds <b>between</b> the roots, and the ≤ includes the roots themselves</div>
    <div class="ans">2 ≤ x ≤ 3</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Sketch the parabola</b>
<p>A quick sketch of the upward curve with its x-intercepts answers every quadratic inequality at a glance: above the axis where the curve is high, below where it dips.</p></div></div>

<h2>Absolute value</h2>
<div class="formula-box">
  <div class="fb-head">|x| = the distance of x from zero</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">|x| = x when x ≥ 0, and |x| = −x when x &lt; 0</div></div>
  <div class="formula-row"><div class="fname">|x| &lt; a</div>
    <div class="fexpr">−a &lt; x &lt; a (a strip centred on zero)</div></div>
  <div class="formula-row"><div class="fname">|x| &gt; a</div>
    <div class="fexpr">x &lt; −a or x &gt; a (two rays running outwards)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Solve |x| &lt; 3
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The numbers closer to zero than 3 lie between −3 and 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    The inequality is strict, so the endpoints are excluded</div>
    <div class="ans">−3 &lt; x &lt; 3</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> Solve |2x − 1| ≥ 5
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Either 2x − 1 ≥ 5 or 2x − 1 ≤ −5</div>
    <div class="step"><div class="step-l">Step 2</div>
    First: 2x ≥ 6 → x ≥ 3</div>
    <div class="step"><div class="step-l">Step 3</div>
    Second: 2x ≤ −4 → x ≤ −2</div>
    <div class="ans">x ≤ −2 or x ≥ 3</div>
  </div>
</div>

<h2>Reading solutions on a number line</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Inequality</th><th>Endpoint</th><th>Direction</th></tr></thead>
  <tbody>
    <tr><td>x &gt; 2</td><td>Open circle at 2</td><td>Shade right</td></tr>
    <tr><td>x ≥ 2</td><td>Solid circle at 2</td><td>Shade right</td></tr>
    <tr><td>x &lt; −1</td><td>Open circle at −1</td><td>Shade left</td></tr>
    <tr><td>−1 ≤ x ≤ 4</td><td>Solid circles at both</td><td>Shade between</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Open or closed?</b>
<p><strong>&lt;</strong> and <strong>&gt;</strong> exclude the endpoint (open circle); <strong>≤</strong> and <strong>≥</strong> include it (solid circle). Questions that ask you to <em>indicate</em> the solution on a number line are checking this distinction, not the algebra.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Add or subtract freely; multiply or divide by a negative only with a sign flip.</li>
<li>Quadratic inequality: factorise, find critical values, test each region.</li>
<li>|x| &lt; a gives a strip centred on zero; |x| &gt; a gives two outward rays.</li>
<li>Open circle for strict inequalities, solid circle for inclusive ones.</li>
</ul>
`,
  quiz: [
    { q: 'The solution of 3x − 6 &gt; 0 is', opts: ['x &gt; 2', 'x &lt; 2', 'x &gt; −2', 'x &gt; 6'], a: 0, why: '3x &gt; 6, then divide by +3 without changing the sign.' },
    { q: 'Solving −3x &gt; 15 gives', opts: ['x &gt; −5', 'x &lt; −5', 'x &gt; 5', 'x &lt; 5'], a: 1, why: 'Dividing by a negative number reverses the inequality.' },
    { q: '−2x ≤ 8 is equivalent to', opts: ['x ≤ −4', 'x ≥ −4', 'x ≤ 4', 'x ≥ 4'], a: 1, why: 'Divide by −2 and reverse: x ≥ −4.' },
    { q: 'The solution of 5x + 2 &lt; 3x + 12 is', opts: ['x &lt; 5', 'x &gt; 5', 'x &lt; −5', 'x &lt; 7'], a: 0, why: '2x &lt; 10, so x &lt; 5.' },
    { q: 'If x &gt; 3 and x &lt; 7, the compound solution is', opts: ['3 &lt; x &lt; 7', '7 &lt; x &lt; 3', 'x &gt; 7', 'x &lt; 3'], a: 0, why: 'The values lie strictly between the two bounds.' },
    { q: 'x² − 4 &gt; 0 is satisfied when', opts: ['−2 &lt; x &lt; 2', 'x &gt; 2 or x &lt; −2', 'x &gt; 4', 'All real x'], a: 1, why: 'The quadratic is positive outside its roots at ±2.' },
    { q: 'x² − 5x + 6 ≤ 0 has solution', opts: ['x ≤ 2 or x ≥ 3', '2 ≤ x ≤ 3', '−3 ≤ x ≤ −2', 'x &lt; 0'], a: 1, why: 'The parabola dips below the axis between its roots 2 and 3.' },
    { q: 'The critical values of (x − 1)(x + 4) &gt; 0 are', opts: ['1 and −4', '1 and 4', '−1 and 4', '0 and 4'], a: 0, why: 'They are where the expression equals zero.' },
    { q: '|x| &lt; 3 means', opts: ['x &lt; 3 only', '−3 &lt; x &lt; 3', 'x &gt; 3 or x &lt; −3', 'x ≠ 3'], a: 1, why: 'A distance less than 3 from zero lies strictly between −3 and 3.' },
    { q: '|x| ≥ 4 means', opts: ['−4 ≤ x ≤ 4', 'x ≥ 4 only', 'x ≥ 4 or x ≤ −4', 'x ≤ −4 only'], a: 2, why: 'The numbers at least 4 away from zero run outwards in both directions.' },
    { q: 'Solve |2x − 1| ≥ 5', opts: ['−2 ≤ x ≤ 3', 'x ≥ 3 or x ≤ −2', 'x ≥ 2', 'x ≤ −3'], a: 1, why: 'Either 2x − 1 ≥ 5 or 2x − 1 ≤ −5.' },
    { q: '|x − 3| &lt; 2 is equivalent to', opts: ['1 &lt; x &lt; 5', 'x &lt; 1 or x &gt; 5', '−5 &lt; x &lt; −1', 'x &lt; 5'], a: 0, why: '−2 &lt; x − 3 &lt; 2 gives 1 &lt; x &lt; 5.' },
    { q: 'Which step is NOT permitted when solving an inequality?', opts: ['Adding 4 to both sides', 'Dividing both sides by −2 and keeping the sign', 'Subtracting x from both sides', 'Dividing both sides by 5'], a: 1, why: 'Dividing by a negative number requires the inequality to be reversed.' },
    { q: 'The inequality −5 &lt; 2x − 1 &lt; 3 has solution', opts: ['−2 &lt; x &lt; 2', '−4 &lt; x &lt; 4', '−1 &lt; x &lt; 2', '−2 &lt; x &lt; 1'], a: 0, why: 'Add 1: −4 &lt; 2x &lt; 4; divide by 2: −2 &lt; x &lt; 2.' },
    { q: 'On a number line, x ≥ 2 is drawn with', opts: ['An open circle, shading right', 'A solid circle, shading right', 'A solid circle, shading left', 'An open circle, shading left'], a: 1, why: '≥ includes the endpoint, so the circle is filled, and larger values lie to the right.' },
    { q: 'The set of x for which 7 − 2x &gt; 1 is', opts: ['x &lt; 3', 'x &gt; 3', 'x &lt; −3', 'x &gt; −3'], a: 0, why: '−2x &gt; −6, then divide by −2 and reverse: x &lt; 3.' },
    { q: 'Which of these is TRUE for all real x?', opts: ['|x| = −x', 'x² ≥ 0', '|x| &gt; 0 always', '−x ≥ 0'], a: 1, why: 'A square is never negative; it is zero only when x = 0.' },
    { q: 'Solve x² − 9 &lt; 0', opts: ['x &lt; −3 or x &gt; 3', '−3 &lt; x &lt; 3', 'x &gt; 3', 'x &lt; −3'], a: 1, why: 'The parabola dips below the axis between −3 and 3.' },
    { q: 'If 2 &lt; x &lt; 5, which is always true?', opts: ['x² &lt; 10', 'x² − 7x + 10 &lt; 0', '3x &gt; 20', 'x² &gt; 25'], a: 1, why: '(x − 2)(x − 5) is negative strictly between its roots.' },
    { q: 'The solution of 4 − x ≥ 10 is', opts: ['x ≤ −6', 'x ≥ −6', 'x ≤ 6', 'x ≥ 6'], a: 0, why: '−x ≥ 6, then multiply by −1 and reverse: x ≤ −6.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'functions-graphs',
  title: 'Functions, Relations and Their Graphs',
  blurb: 'Domain and range, composition and inverses, gradients, and how graphs transform.',
  time: '60 min',
  objectives: [
    'Identify domain, range and type of a function',
    'Find composite and inverse functions',
    'Calculate gradients of straight lines and interpret y = mx + c',
    'Predict how a graph moves under each transformation'
  ],
  body: `
<p class="lead">A <strong>relation</strong> pairs inputs with outputs; a <strong>function</strong> is a relation where each input has exactly one output. Graphs turn algebra into pictures, and the exam leans heavily on two skills: reading a gradient, and predicting what happens when a graph is shifted or flipped.</p>

<h2>Function notation</h2>
<div class="formula-box">
  <div class="fb-head">The vocabulary</div>
  <div class="formula-row"><div class="fname">f: x ↦ 2x + 3</div>
    <div class="fexpr">f(x) = 2x + 3 — the rule that turns an input into an output</div></div>
  <div class="formula-row"><div class="fname">Domain</div>
    <div class="fexpr">The set of permitted inputs</div></div>
  <div class="formula-row"><div class="fname">Range</div>
    <div class="fexpr">The set of outputs actually produced</div></div>
  <div class="formula-row"><div class="fname">One-one</div>
    <div class="fexpr">Different inputs give different outputs (it has an inverse)</div></div>
  <div class="formula-row"><div class="fname">Many-one</div>
    <div class="fexpr">Two or more inputs share an output (no true inverse)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Given f(x) = 2x + 3, find f(−1) and f(4)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">f(−1)</div>
    2(−1) + 3 = −2 + 3 = <b>1</b></div>
    <div class="step"><div class="step-l">f(4)</div>
    2(4) + 3 = 8 + 3 = <b>11</b></div>
    <div class="ans">f(−1) = 1 and f(4) = 11</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Watch out for brackets with negatives</b>
<p>f(−1) means substitute the <em>whole</em> value −1: f(x) = x² gives (−1)² = 1, not −1² = −1. When in doubt, write the substitution in brackets first.</p></div></div>

<h2>Finding the domain</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Function</th><th>Restriction</th><th>Domain</th></tr></thead>
  <tbody>
    <tr><td>f(x) = 3x − 7</td><td>None — a line runs forever</td><td>All real x</td></tr>
    <tr><td>f(x) = 1 ⁄ x</td><td>Denominator cannot be zero</td><td>All x except 0</td></tr>
    <tr><td>f(x) = √(x − 2)</td><td>Square root needs a non-negative radicand</td><td>x ≥ 2</td></tr>
    <tr><td>f(x) = √(9 − x²)</td><td>9 − x² ≥ 0</td><td>−3 ≤ x ≤ 3</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Two traps, always the same two</b>
<p>Never let a <strong>denominator be zero</strong> and never let a <strong>square root go negative</strong>. If a question asks for the domain, those are the only two conditions you ever need to check.</p></div></div>

<h2>Composite functions</h2>
<div class="formula-box">
  <div class="fb-head">fg(x) = f(g(x))</div>
  <div class="formula-row"><div class="fname">Read it right to left</div>
    <div class="fexpr">Apply g first, then apply f to the result</div>
    <div class="fnote">fg is not usually the same as gf.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> If f(x) = x² and g(x) = x + 1, find fg(x) and gf(x)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">fg(x)</div>
    f(g(x)) = f(x + 1) = (x + 1)²</div>
    <div class="step"><div class="step-l">gf(x)</div>
    g(f(x)) = g(x²) = x² + 1</div>
    <div class="ans">fg(x) = (x + 1)², gf(x) = x² + 1 — different, as expected</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> If f(x) = 3x − 2 and g(x) = x + 4, find fg(2)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    g(2) = 6</div>
    <div class="step"><div class="step-l">Step 2</div>
    f(6) = 18 − 2</div>
    <div class="ans">fg(2) = 16</div>
  </div>
</div>

<h2>Inverse functions</h2>
<p>The inverse undoes the function: if f sends x to y, then f⁻¹ sends y back to x. Write y = f(x), swap the variables, then make y the subject.</p>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the inverse of f(x) = 2x + 3
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Write y = 2x + 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    Swap: x = 2y + 3</div>
    <div class="step"><div class="step-l">Step 3</div>
    Solve: 2y = x − 3 → y = (x − 3) ⁄ 2</div>
    <div class="ans">f⁻¹(x) = (x − 3) ⁄ 2</div>
  </div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Graphically, the inverse is a mirror</b>
<p>The graph of f⁻¹ is the reflection of f in the line <strong>y = x</strong>. Also, f(f⁻¹(x)) = x for every x in the domain — the quickest way to check an inverse you have found.</p></div></div>

<h2>Gradient of a straight line</h2>
<div class="formula-box">
  <div class="fb-head">Gradient m = rise ⁄ run</div>
  <div class="formula-row"><div class="fname">Two points</div>
    <div class="fexpr">m = (y₂ − y₁) ⁄ (x₂ − x₁)</div></div>
  <div class="formula-row"><div class="fname">Equation of a line</div>
    <div class="fexpr">y − y₁ = m(x − x₁)</div>
    <div class="fnote">Or y = mx + c, where c is the y-intercept.</div></div>
  <div class="formula-row"><div class="fname">Parallel lines</div>
    <div class="fexpr">Equal gradients</div></div>
  <div class="formula-row"><div class="fname">Perpendicular lines</div>
    <div class="fexpr">m₁ × m₂ = −1 (gradients are negative reciprocals)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find the gradient of the line through (1, 2) and (4, 8)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Rise = 8 − 2 = 6; run = 4 − 1 = 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    m = 6 ⁄ 3</div>
    <div class="ans">m = 2</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> A line has gradient 3 and passes through (2, 5). Find its equation
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    y − 5 = 3(x − 2)</div>
    <div class="step"><div class="step-l">Step 2</div>
    y − 5 = 3x − 6</div>
    <div class="ans">y = 3x − 1</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Sign of the gradient tells you the direction</b>
<p>m &gt; 0 rises left to right; m &lt; 0 falls; m = 0 is horizontal; a vertical line has <strong>no gradient</strong> (division by zero). Two of these four appear in most years.</p></div></div>

<h2>Transformations of graphs</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Change</th><th>Movement</th><th>Common mistake</th></tr></thead>
  <tbody>
    <tr><td>y = f(x) + a</td><td>Shift <b>up</b> by a</td><td>Saying "left"</td></tr>
    <tr><td>y = f(x) − a</td><td>Shift <b>down</b> by a</td><td>Saying "right"</td></tr>
    <tr><td>y = f(x − a)</td><td>Shift <b>right</b> by a</td><td>Seeing the minus and saying "left"</td></tr>
    <tr><td>y = f(x + a)</td><td>Shift <b>left</b> by a</td><td>—</td></tr>
    <tr><td>y = −f(x)</td><td>Reflect in the <b>x</b>-axis</td><td>Confusing with the next row</td></tr>
    <tr><td>y = f(−x)</td><td>Reflect in the <b>y</b>-axis</td><td>—</td></tr>
    <tr><td>y = kf(x)</td><td>Vertical stretch by factor k</td><td>—</td></tr>
    <tr><td>y = f(kx)</td><td>Horizontal compression by 1⁄k</td><td>—</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The inside shift runs backwards</b>
<p>y = f(x − 3) moves the graph <strong>3 units to the right</strong>, not left. The reason: to get the same output as before, x must now be 3 <em>bigger</em>. This single fact accounts for most lost marks in this section.</p></div></div>

<h2>Shapes you should recognise</h2>
<div class="formula-box">
  <div class="fb-head">Standard curves</div>
  <div class="formula-row"><div class="fname">y = mx + c</div>
    <div class="fexpr">Straight line — gradient m, crossing the y-axis at c</div></div>
  <div class="formula-row"><div class="fname">y = ax² + bx + c</div>
    <div class="fexpr">Parabola — opens upward if a &gt; 0, downward if a &lt; 0</div></div>
  <div class="formula-row"><div class="fname">y = 1 ⁄ x</div>
    <div class="fexpr">Rectangular hyperbola — axes are asymptotes</div></div>
  <div class="formula-row"><div class="fname">y = aˣ</div>
    <div class="fexpr">Exponential growth — always passes through (0, 1)</div></div>
  <div class="formula-row"><div class="fname">y = logₐ x</div>
    <div class="fexpr">Logarithm curve — always passes through (1, 0)</div></div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>Domain: exclude zero denominators and negative square roots.</li>
<li>fg(x) means apply g first; inverses are found by swapping x and y.</li>
<li>m = (y₂ − y₁) ⁄ (x₂ − x₁); perpendicular lines have gradients multiplying to −1.</li>
<li>Shifts outside the function are vertical; inside, they are horizontal and reversed in direction.</li>
<li>Negating y reflects in the x-axis; negating x reflects in the y-axis.</li>
</ul>
`,
  quiz: [
    { q: 'If f(x) = 2x + 3, then f(−1) equals', opts: ['−1', '1', '5', '−5'], a: 1, why: '2(−1) + 3 = −2 + 3 = 1.' },
    { q: 'If f(x) = x² − 4x, then f(3) equals', opts: ['−3', '3', '21', '0'], a: 0, why: '9 − 12 = −3.' },
    { q: 'The domain of f(x) = 1 ⁄ (x − 4) is', opts: ['All real x', 'x ≠ 4', 'x ≥ 4', 'x &gt; 4'], a: 1, why: 'The denominator vanishes at x = 4.' },
    { q: 'The domain of √(x − 2) is', opts: ['x ≥ 2', 'x &gt; 2', 'x ≤ 2', 'All real x'], a: 0, why: 'The radicand must be non-negative: x − 2 ≥ 0.' },
    { q: 'The range of y = x² for real x is', opts: ['All real y', 'y ≥ 0', 'y &gt; 0', 'y ≤ 0'], a: 1, why: 'A square is zero or positive, and 0 is achieved at x = 0.' },
    { q: 'A many-one function has the property that', opts: ['Every output comes from one input', 'Some output is reached from two or more inputs', 'It has no domain', 'It cannot be drawn'], a: 1, why: 'Two different inputs give the same output.' },
    { q: 'If f(x) = x² and g(x) = x + 1, then fg(x) equals', opts: ['x² + 1', '(x + 1)²', 'x² + x + 1', '(x + 1)² + 1'], a: 1, why: 'Apply g first, then square the result.' },
    { q: 'If f(x) = x² and g(x) = x + 1, then gf(x) equals', opts: ['(x + 1)²', 'x² + 1', '2x + 1', 'x + 2'], a: 1, why: 'g(f(x)) = g(x²) = x² + 1.' },
    { q: 'If f(x) = 3x − 2 and g(x) = x + 4, then fg(2) equals', opts: ['16', '10', '14', '8'], a: 0, why: 'g(2) = 6, then f(6) = 18 − 2 = 16.' },
    { q: 'If f(x) = 2x + 3, its inverse is', opts: ['(x − 3) ⁄ 2', '(x + 3) ⁄ 2', '2x − 3', '(3 − x) ⁄ 2'], a: 0, why: 'Swap x and y, then solve: x = 2y + 3.' },
    { q: 'f(x) = 4 − 2x. Then f⁻¹(x) equals', opts: ['(4 − x) ⁄ 2', '(x − 4) ⁄ 2', '(4 − x) ⁄ 2 only', '2x − 4'], a: 0, why: 'x = 4 − 2y gives 2y = 4 − x.' },
    { q: 'The gradient of the line through (1, 2) and (4, 8) is', opts: ['2', '3', '½', '6'], a: 0, why: '(8 − 2) ⁄ (4 − 1) = 6 ⁄ 3 = 2.' },
    { q: 'The gradient of the line y = 5 − 3x is', opts: ['5', '3', '−3', '−5'], a: 2, why: 'Comparing with y = mx + c, m = −3.' },
    { q: 'A line through (0, −2) with gradient 4 has equation', opts: ['y = 4x − 2', 'y = 4x + 2', 'y = −2x + 4', 'y = 2x − 4'], a: 0, why: 'y = mx + c with m = 4 and intercept −2.' },
    { q: 'The line 2y = 6x + 8 has gradient', opts: ['6', '3', '2', '4'], a: 1, why: 'Divide by 2: y = 3x + 4.' },
    { q: 'A line with gradient ½ is perpendicular to a line with gradient', opts: ['½', '−2', '−½', '2'], a: 1, why: 'Perpendicular gradients multiply to −1: ½ × (−2) = −1.' },
    { q: 'The graph of y = f(x) + 3 is the original shifted', opts: ['3 units up', '3 units down', '3 units right', '3 units left'], a: 0, why: 'A change outside the function moves the graph vertically.' },
    { q: 'The graph of y = f(x − 3) is the original shifted', opts: ['3 units left', '3 units right', '3 units up', '3 units down'], a: 1, why: 'Inside changes are horizontal and run in the opposite direction to the sign.' },
    { q: 'The graph of y = −f(x) is obtained by reflecting f in the', opts: ['x-axis', 'y-axis', 'line y = x', 'origin'], a: 0, why: 'Every output changes sign, so the graph flips vertically.' },
    { q: 'The graph of y = f(−x) is a reflection in the', opts: ['x-axis', 'y-axis', 'line y = x', 'x = 0 line only if f is odd'], a: 1, why: 'Replacing x by −x mirrors the graph horizontally.' },
    { q: 'The curve y = 2ˣ always passes through', opts: ['(0, 0)', '(0, 1)', '(1, 0)', '(1, 1)'], a: 1, why: 'Any non-zero number to the zero power is 1.' },
    { q: 'The curve y = log x always passes through', opts: ['(0, 0)', '(0, 1)', '(1, 0)', '(1, 1)'], a: 2, why: 'Since log 1 = 0, the curve meets the x-axis at the point (1, 0).' },
    { q: 'The point of intersection of y = 3x + 1 and y = x + 5 is', opts: ['(2, 7)', '(7, 2)', '(1, 4)', '(4, 1)'], a: 0, why: '3x + 1 = x + 5 → x = 2, then y = 7.' },
    { q: 'Which transformation gives y = 2f(x)?', opts: ['Horizontal stretch by 2', 'Vertical stretch by 2', 'Shift up by 2', 'Shift right by 2'], a: 1, why: 'Multiplying the output doubles every height.' },
    { q: 'A line parallel to y = 4x − 7 could be', opts: ['y = −4x + 1', 'y = 4x + 9', 'y = x + 9', 'y = 4 − x'], a: 1, why: 'Parallel lines share the same gradient, 4.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'sequences-series',
  title: 'Sequences and Series',
  blurb: 'Arithmetic and geometric progressions, their nth terms, and sums to n terms.',
  time: '55 min',
  objectives: [
    'Identify whether a sequence is arithmetic or geometric',
    'Find the nth term of an AP and a GP',
    'Apply the sum formulas for both progressions',
    'Find the sum of an infinite geometric series'
  ],
  body: `
<p class="lead">A <strong>sequence</strong> is an ordered list; a <strong>series</strong> is what you get by adding its terms. Two patterns dominate the paper: the <strong>arithmetic progression</strong>, which changes by a fixed difference, and the <strong>geometric progression</strong>, which changes by a fixed ratio.</p>

<h2>Arithmetic progressions (AP)</h2>
<div class="formula-box">
  <div class="fb-head">Common difference d</div>
  <div class="formula-row"><div class="fname">nth term</div>
    <div class="fexpr">aₙ = a + (n − 1)d</div>
    <div class="fnote">a = first term.</div></div>
  <div class="formula-row"><div class="fname">Sum of the first n terms</div>
    <div class="fexpr">Sₙ = n ⁄ 2 × [2a + (n − 1)d]</div></div>
  <div class="formula-row"><div class="fname">Alternative sum</div>
    <div class="fexpr">Sₙ = n ⁄ 2 × (first term + last term)</div>
    <div class="fnote">Useful when both ends are known.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Find the 20th term of 3, 7, 11, 15, …
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    a = 3, d = 4, n = 20</div>
    <div class="step"><div class="step-l">Step 2</div>
    a₂₀ = 3 + (20 − 1)(4) = 3 + 76</div>
    <div class="ans">79</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Find the sum of the first 20 terms of 2, 5, 8, 11, …
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    a = 2, d = 3, n = 20</div>
    <div class="step"><div class="step-l">Step 2</div>
    S₂₀ = 20 ⁄ 2 × [2(2) + 19(3)] = 10 × [4 + 57]</div>
    <div class="ans">610</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The number of gaps is n − 1</b>
<p>Between 20 terms there are 19 gaps, never 20. Almost every AP error comes from using n where n − 1 belongs — write the formula down before substituting.</p></div></div>

<h2>Geometric progressions (GP)</h2>
<div class="formula-box">
  <div class="fb-head">Common ratio r</div>
  <div class="formula-row"><div class="fname">nth term</div>
    <div class="fexpr">aₙ = a r ⁿ⁻¹</div></div>
  <div class="formula-row"><div class="fname">Sum to n terms (r ≠ 1)</div>
    <div class="fexpr">Sₙ = a(rⁿ − 1) ⁄ (r − 1)  when r &gt; 1</div>
    <div class="fexpr">Sₙ = a(1 − rⁿ) ⁄ (1 − r)  when r &lt; 1</div>
    <div class="fnote">Both are the same expression; the second keeps the numerator positive.</div></div>
  <div class="formula-row"><div class="fname">Infinite sum (|r| &lt; 1)</div>
    <div class="fexpr">S∞ = a ⁄ (1 − r)</div>
    <div class="fnote">Only converges when the ratio is strictly between −1 and 1.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Find the 5th term of 2, 6, 18, 54, …
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    a = 2, r = 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    a₅ = 2 × 3⁴ = 2 × 81</div>
    <div class="ans">162</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the sum of the first 5 terms of 3, 6, 12, 24, …
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    a = 3, r = 2, n = 5. Since r &gt; 1 use Sₙ = a(rⁿ − 1) ⁄ (r − 1)</div>
    <div class="step"><div class="step-l">Step 2</div>
    S₅ = 3(32 − 1) ⁄ (2 − 1) = 3 × 31</div>
    <div class="ans">93</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find the sum to infinity of 8, 4, 2, 1, …
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    a = 8, r = ½, and |½| &lt; 1 so the series converges</div>
    <div class="step"><div class="step-l">Step 2</div>
    S∞ = 8 ⁄ (1 − ½) = 8 ⁄ ½</div>
    <div class="ans">16</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Two traps in GP sums</b>
<p><strong>1.</strong> Do not use a(rⁿ − 1) ⁄ (r − 1) when r &lt; 1 — you will get a negative sum.<br>
<strong>2.</strong> A sum to infinity exists only when |r| &lt; 1. If r = 2, the series grows without bound and "S∞" is meaningless.</p></div></div>

<h2>Recognising the pattern</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Test</th><th>AP</th><th>GP</th></tr></thead>
  <tbody>
    <tr><td>Between terms</td><td>Constant <b>difference</b></td><td>Constant <b>ratio</b></td></tr>
    <tr><td>Example</td><td>5, 8, 11, 14 (d = 3)</td><td>5, 10, 20, 40 (r = 2)</td></tr>
    <tr><td>nth term</td><td>a + (n − 1)d</td><td>a rⁿ⁻¹</td></tr>
    <tr><td>Sum</td><td>n⁄2[2a + (n − 1)d]</td><td>a(rⁿ − 1)⁄(r − 1)</td></tr>
  </tbody>
</table>

<h2>Σ notation</h2>
<div class="formula-box">
  <div class="fb-head">The sigma</div>
  <div class="formula-row"><div class="fname">Reading it</div>
    <div class="fexpr">Σ means "add up"; the letters below and above give the range of n</div>
    <div class="fnote">Σⁿᵣ₌₁ r = 1 + 2 + 3 + … + n</div></div>
  <div class="formula-row"><div class="fname">Standard results</div>
    <div class="fexpr">Σⁿᵣ₌₁ r = n(n + 1) ⁄ 2 · Σⁿᵣ₌₁ r² = n(n + 1)(2n + 1) ⁄ 6</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Find Σ²⁰ᵣ₌₁ (3r − 2)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    The terms are 1, 4, 7, … — an AP with a = 1, d = 3, n = 20</div>
    <div class="step"><div class="step-l">Step 2</div>
    S₂₀ = 20⁄2 × [2 + 19(3)] = 10 × 59</div>
    <div class="ans">590</div>
  </div>
</div>

<h2>Mixed sequences</h2>
<div class="example">
  <div class="example-h"><span class="num">7</span> The 4th term of a GP is 24 and the 7th is 192. Find the first term
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    a r³ = 24 and a r⁶ = 192</div>
    <div class="step"><div class="step-l">Step 2</div>
    Divide: r³ = 192 ⁄ 24 = 8 → r = 2</div>
    <div class="step"><div class="step-l">Step 3</div>
    a = 24 ⁄ 8</div>
    <div class="ans">a = 3 (the sequence is 3, 6, 12, 24, 48, 96, 192 …)</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Dividing two term-equations kills a</b>
<p>Whenever two terms of a GP are given, divide one by the other — the first term cancels and r falls out immediately. Then substitute back for a.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>AP: fixed difference; aₙ = a + (n − 1)d; Sₙ = n⁄2[2a + (n − 1)d].</li>
<li>GP: fixed ratio; aₙ = a rⁿ⁻¹; Sₙ = a(rⁿ − 1)⁄(r − 1).</li>
<li>Use the (1 − rⁿ) form when |r| &lt; 1 to keep sums positive.</li>
<li>S∞ = a⁄(1 − r) exists only when |r| &lt; 1.</li>
<li>Given two GP terms, divide them to find r first.</li>
</ul>
`,
  quiz: [
    { q: 'The nth term of the sequence 3, 7, 11, 15, … is', opts: ['4n − 1', '3 + 4n', '4n + 3', '7n'], a: 0, why: 'a = 3, d = 4: 3 + (n − 1)4 = 4n − 1.' },
    { q: 'The 20th term of 3, 7, 11, … is', opts: ['79', '83', '76', '80'], a: 0, why: '3 + 19 × 4 = 3 + 76 = 79.' },
    { q: 'The 10th term of 5, 8, 11, 14, … is', opts: ['32', '35', '38', '50'], a: 0, why: 'a₁₀ = 5 + 9 × 3 = 5 + 27 = 32.' },
    { q: 'How many terms are in 4, 9, 14, … , 74?', opts: ['14', '15', '16', '13'], a: 1, why: '74 = 4 + (n − 1)5 → 70 = 5(n − 1) → n = 15.' },
    { q: 'The sum of the first 20 terms of 2, 5, 8, … is', opts: ['610', '600', '590', '620'], a: 0, why: '10 × [4 + 57] = 610.' },
    { q: 'S₁₀ for the AP with a = 4 and d = 3 is', opts: ['165', '155', '150', '175'], a: 3, why: 'S₁₀ = 10⁄2 × [2(4) + 9(3)] = 5 × [8 + 27] = 5 × 35 = 175.' },
    { q: 'The 5th term of 2, 6, 18, 54, … is', opts: ['162', '486', '108', '324'], a: 0, why: '2 × 3⁴ = 2 × 81 = 162.' },
    { q: 'The common ratio of 3, 6, 12, 24, … is', opts: ['2', '3', '6', '½'], a: 0, why: 'Each term doubles: 6 ⁄ 3 = 2.' },
    { q: 'The 8th term of 5, 10, 20, 40, … is', opts: ['320', '640', '160', '400'], a: 1, why: 'a₈ = 5 × 2⁷ = 5 × 128 = 640.' },
    { q: 'The sum of the first 5 terms of 3, 6, 12, 24, … is', opts: ['93', '96', '141', '48'], a: 0, why: '3(2⁵ − 1) ⁄ (2 − 1) = 3 × 31 = 93.' },
    { q: 'The sum to infinity of 8, 4, 2, 1, … is', opts: ['16', '8', '32', 'It does not exist'], a: 0, why: 'a ⁄ (1 − r) = 8 ⁄ (1 − ½) = 16.' },
    { q: 'The sum to infinity of 9, 3, 1, ⅓, … is', opts: ['13.5', '12', '27', '9'], a: 0, why: 'S∞ = a ⁄ (1 − r) = 9 ⁄ (1 − ⅓) = 9 ⁄ (⅔) = 13.5.' },
    { q: 'A sum to infinity exists only when', opts: ['|r| &lt; 1', 'r &gt; 1', 'r = 1', 'r is a whole number'], a: 0, why: 'Each term must shrink to zero, which requires |r| &lt; 1.' },
    { q: 'In a GP the 4th term is 24 and the 7th is 192. The common ratio is', opts: ['2', '3', '4', '8'], a: 0, why: 'Dividing, r³ = 8, so r = 2.' },
    { q: 'In the same GP the first term is', opts: ['3', '6', '12', '1.5'], a: 0, why: 'ar³ = 24 and r = 2, so a = 3.' },
    { q: 'If a, b, c are in GP then', opts: ['b − a = c − b', 'b² = ac', 'a + c = 2b', 'ab = c'], a: 1, why: 'The middle term is the geometric mean of its neighbours.' },
    { q: 'If a, b, c are in AP then', opts: ['b² = ac', 'a + c = 2b', 'b = ac', 'a + b = c'], a: 1, why: 'The middle term is the arithmetic mean.' },
    { q: 'The sequence 2, 4, 6, 8, … is', opts: ['Geometric', 'Arithmetic', 'Neither', 'Constant'], a: 1, why: 'The difference is constantly 2.' },
    { q: 'The sequence 1, 2, 4, 8, … is', opts: ['Arithmetic', 'Geometric', 'Neither', 'Harmonic'], a: 1, why: 'The ratio is constantly 2.' },
    { q: 'Σ⁵ᵣ₌₁ 2ʳ equals', opts: ['62', '64', '30', '32'], a: 0, why: '2 + 4 + 8 + 16 + 32 = 62.' },
    { q: 'The number of terms of the AP 7, 11, 15, … needed for a sum of 168 is', opts: ['8', '9', '10', '7'], a: 0, why: 'Sₙ = n⁄2[14 + 4(n − 1)] = n(2n + 5). With n = 8: 8 × 21 = 168.' },
    { q: 'The 3rd term of an AP is 11 and the 7th is 23. The first term is', opts: ['5', '6', '7', '4'], a: 0, why: '4d = 12 → d = 3, then a + 2(3) = 11 → a = 5.' },
    { q: 'The harmonic mean of 2 and 6 is', opts: ['3', '4', '3⁄2', '8'], a: 0, why: 'H = 2ab ⁄ (a + b) = 2 × 2 × 6 ⁄ 8 = 24 ⁄ 8 = 3.' },
    { q: 'Find Σ²⁰ᵣ₌₁ (3r − 2)', opts: ['590', '570', '600', '580'], a: 0, why: 'An AP with a = 1, d = 3, n = 20: 10 × [2 + 57] = 590.' },
    { q: 'In a GP with |r| &lt; 1, S∞ = a ⁄ (1 − r). For a = 15, r = 0.4, S∞ is', opts: ['25', '10', '37.5', '60'], a: 0, why: '15 ⁄ 0.6 = 25.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'counting-binomial',
  title: 'Permutations, Combinations and the Binomial Theorem',
  blurb: 'Counting arrangements, choosing selections, and expanding powers of a sum.',
  time: '60 min',
  objectives: [
    'Distinguish arrangements (permutations) from selections (combinations)',
    'Use nPr, nCr and factorials confidently',
    'Account for repeated objects in arrangements',
    'Expand binomials and read off any term directly'
  ],
  body: `
<p class="lead">Counting sounds trivial until the numbers explode: ten letters have over three million arrangements. The topic reduces to one question asked repeatedly — <strong>does order matter?</strong> — plus a compact formula for expanding powers of a sum.</p>

<h2>Factorials</h2>
<div class="formula-box">
  <div class="fb-head">n factorial</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">n! = n × (n − 1) × (n − 2) × … × 2 × 1</div></div>
  <div class="formula-row"><div class="fname">Special values</div>
    <div class="fexpr">0! = 1 · 1! = 1</div>
    <div class="fnote">0! = 1 is defined so that formulas work with empty selections.</div></div>
  <div class="formula-row"><div class="fname">Useful reduction</div>
    <div class="fexpr">n! ⁄ (n − r)! = n(n − 1)(n − 2)…(n − r + 1)</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Write the factorial arithmetic out</b>
<p>5! ⁄ 3! is <em>not</em> 5 ⁄ 3. Expand: (5 × 4 × 3 × 2 × 1) ⁄ (3 × 2 × 1) = 5 × 4 = 20. Almost every factorial error on the paper comes from cancelling the symbols instead of the values.</p></div></div>

<h2>Order matters: permutations</h2>
<div class="formula-box">
  <div class="fb-head">Arranging r objects from n</div>
  <div class="formula-row"><div class="fname">nPr</div>
    <div class="fexpr">nPr = n! ⁄ (n − r)!</div>
    <div class="fnote">Arranging n objects in a row: n!</div></div>
  <div class="formula-row"><div class="fname">Circular arrangements</div>
    <div class="fexpr">(n − 1)! — one seat can be fixed to remove rotation</div></div>
  <div class="formula-row"><div class="fname">Repetition allowed</div>
    <div class="fexpr">nʳ for r slots each filled from n choices</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> In how many ways can 5 people sit in a row?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    5 choices for the first seat, 4 for the second, and so on</div>
    <div class="step"><div class="step-l">Step 2</div>
    5 × 4 × 3 × 2 × 1 = 5!</div>
    <div class="ans">120 arrangements</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> How many 3-letter arrangements can be made from the letters of "SCHOOL"?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    6 letters available, choose and order 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    6P3 = 6 × 5 × 4</div>
    <div class="ans">120 arrangements</div>
  </div>
</div>

<h2>Order does not matter: combinations</h2>
<div class="formula-box">
  <div class="fb-head">Choosing r objects from n</div>
  <div class="formula-row"><div class="fname">nCr</div>
    <div class="fexpr">nCr = n! ⁄ [r! (n − r)!] = nPr ⁄ r!</div>
    <div class="fnote">You divide by r! because each selection was counted r! times as an arrangement.</div></div>
  <div class="formula-row\"><div class=\"fname\">Symmetry</div>
    <div class=\"fexpr\">nCr = nC(n − r)</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Question contains…</th><th>Use</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>"arranged", "ordered", "in a row", "different codes"</td><td><b>Permutation</b></td><td>Top 3 finishers in a race</td></tr>
    <tr><td>"chosen", "selected", "committee", "team", "group"</td><td><b>Combination</b></td><td>3 players picked for a squad</td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">3</span> In how many ways can a committee of 3 be chosen from 8 people?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Order is irrelevant → 8C3</div>
    <div class="step"><div class="step-l">Step 2</div>
    8! ⁄ (3! 5!) = (8 × 7 × 6) ⁄ (3 × 2 × 1)</div>
    <div class="ans">56 committees</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> How many triangles can be formed from 6 points, no three of which are collinear?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    A triangle needs 3 vertices chosen without order</div>
    <div class="step"><div class="step-l">Step 2</div>
    6C3 = (6 × 5 × 4) ⁄ 6</div>
    <div class="ans">20 triangles</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Collinear points spoil the count</b>
<p>If three points lie on one line, subtract those degenerate selections: 6C3 − 1 = 19. Read the question for conditions such as "no three collinear" or "at least one woman".</p></div></div>

<h2>Repeated objects</h2>
<div class="formula-box">
  <div class="fb-head">Arrangements with identical items</div>
  <div class="formula-row"><div class="fname">Formula</div>
    <div class="fexpr">n! ⁄ (p! q! r! …)</div>
    <div class="fnote">p, q, r are the counts of each repeated letter.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> How many arrangements of MISSISSIPPI are there?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l\">Step 1</div>
    11 letters: 1 M, 4 I, 4 S, 2 P</div>
    <div class="step"><div class=\"step-l\">Step 2</div>
    11! ⁄ (4! 4! 2!)</div>
    <div class="step\"><div class=\"step-l\">Step 3</div>
    39 916 800 ⁄ (24 × 24 × 2) = 39 916 800 ⁄ 1152</div>
    <div class=\"ans\">34 650 arrangements</div>
  </div>
</div>

<h2>Codes and restrictions</h2>
<div class="example">
  <div class="example-h\"><span class=\"num\">6</span> How many 4-digit numbers can be formed from 0, 1, 2, 3, 4, 5 if no digit is repeated?
  </div>
  <div class="example-b">
    <div class=\"step\"><div class=\"step-l\">Step 1</div>
    The first digit cannot be 0 → 5 choices</div>
    <div class=\"step\"><div class=\"step-l\">Step 2</div>
    The remaining three places: 5, 4, 3 choices</div>
    <div class=\"ans\">5 × 5 × 4 × 3 = 300 numbers</div>
  </div>
</div>

<div class="note note-tip"><span class=\"ico\">💡</span><div><b>Handle restrictions first</b>
<p>Deal with the forbidden positions — leading zeros, "A and B must sit together", "at least one head" — before applying the general count. For <em>at least one</em> problems, count the complement: 1 − P(none).</p></div></div>

<h2>The binomial theorem</h2>
<div class="formula-box">
  <div class=\"fb-head\">Expanding (a + b)ⁿ</div>
  <div class=\"formula-row\"><div class=\"fname\">General expansion</div>
    <div class=\"fexpr\">(a + b)ⁿ = ⁿC₀aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + … + ⁿCₙbⁿ</div></div>
  <div class=\"formula-row\"><div class=\"fname\">The (r + 1)th term</div>
    <div class=\"fexpr\">T<sub>r+1</sub> = ⁿC<sub>r</sub> aⁿ⁻ʳ bʳ</div>
    <div class=\"fnote\">The index of b is r, but the term number is r + 1.</div></div>
  <div class=\"formula-row\"><div class=\"fname\">Coefficients</div>
    <div class=\"fexpr\">Pascal's row n: 1 · 11 · 121 · 1331 · 14641 (for n = 0 to 4)</div></div>
</div>

<div class="example">
  <div class=\"example-h\"><span class=\"num\">7</span> Expand (x + 2)⁴
  </div>
  <div class=\"example-b\">
    <div class=\"step\"><div class=\"step-l\">Step 1</div>
    Coefficients 1, 4, 6, 4, 1</div>
    <div class=\"step\"><div class=\"step-l\">Step 2</div>
    Powers of x fall 4 → 0; powers of 2 rise 0 → 4</div>
    <div class=\"step\"><div class=\"step-l\">Step 3</div>
    1·x⁴ + 4·x³·2 + 6·x²·4 + 4·x·8 + 1·16</div>
    <div class=\"ans\">x⁴ + 8x³ + 24x² + 32x + 16</div>
  </div>
</div>

<div class=\"example\">
  <div class=\"example-h\"><span class=\"num\">8</span> Find the 4th term of (2 + x)⁷
  </div>
  <div class=\"example-b\">
    <div class=\"step\"><div class=\"step-l\">Step 1</div>
    The 4th term means r + 1 = 4, so r = 3</div>
    <div class=\"step\"><div class=\"step-l\">Step 2</div>
    T₄ = ⁷C₃ (2)⁴⁻ … careful: a = 2, b = x, n = 7</div>
    <div class=\"step\"><div class=\"step-l\">Step 3</div>
    T₄ = ⁷C₃ × 2⁷⁻³ × x³ = 35 × 16 × x³</div>
    <div class=\"ans\">560x³</div>
  </div>
</div>

<div class=\"note note-warn\"><span class=\"ico\">⚠</span><div><b>r is the power of the second term</b>
<p>To find the term containing x³, set r = 3 — that is the <em>4th</em> term, not the 3rd. Reading the question's "coefficient of x³" as "the 3rd term" is the standard slip in this topic.</p></div></div>

<div class=\"formula-box\">
  <div class=\"fb-head\">Middle terms</div>
  <div class=\"formula-row\"><div class=\"fname\">n even</div>
    <div class=\"fexpr\">Single middle term: (n⁄2 + 1)th</div></div>
  <div class=\"formula-row\"><div class=\"fname\">n odd</div>
    <div class=\"fexpr\">Two middle terms: (n+1)⁄2 th and (n+3)⁄2 th</div></div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>n! ⁄ (n − r)! for arrangements; n! ⁄ [r!(n − r)!] for selections.</li>
<li>0! = 1, and factorial ratios must be expanded before cancelling.</li>
<li>Divide by the factorials of repeated objects.</li>
<li>T<sub>r+1</sub> = ⁿC<sub>r</sub> aⁿ⁻ʳ bʳ — r counts from zero.</li>
<li>Deal with restrictions before counting, or count the complement.</li>
</ul>
`,
  quiz: [
    { q: '5! equals', opts: ['120', '24', '600', '25'], a: 0, why: '5 × 4 × 3 × 2 × 1 = 120.' },
    { q: '0! equals', opts: ['0', '1', 'Undefined', '10'], a: 1, why: 'It is defined as 1 so that counting formulas remain consistent.' },
    { q: 'The value of 7! ⁄ 5! is', opts: ['42', '35', '21', '12'], a: 0, why: '7 × 6 = 42 after cancelling.' },
    { q: '6P2 equals', opts: ['30', '12', '36', '15'], a: 0, why: '6 × 5 = 30.' },
    { q: '5C2 equals', opts: ['20', '10', '25', '5'], a: 1, why: '(5 × 4) ⁄ 2 = 10.' },
    { q: 'The number of ways to arrange 5 different books on a shelf is', opts: ['120', '25', '5', '625'], a: 0, why: 'The 5 books can be ordered in 5 × 4 × 3 × 2 × 1 = 120 ways.' },
    { q: 'A committee of 3 is chosen from 8 people. The number of ways is', opts: ['336', '56', '24', '112'], a: 1, why: '8C3 = 56; the order within a committee is irrelevant.' },
    { q: 'The number of triangles from 6 points, no three collinear, is', opts: ['30', '20', '15', '36'], a: 1, why: 'A triangle is 3 vertices chosen without order: 6C3 = 20.' },
    { q: 'How many arrangements of MISSISSIPPI are there?', opts: ['34 650', '39 916 800', '11!', '10 395'], a: 0, why: '11! ⁄ (4! 4! 2!) = 34 650.' },
    { q: 'The number of distinct arrangements of the letters of BOOK is', opts: ['24', '12', '6', '4'], a: 1, why: '4! ⁄ 2! = 12, because the two O\'s are identical.' },
    { q: 'The number of 4-digit numbers from 0–5 with no repeated digit is', opts: ['300', '360', '120', '150'], a: 0, why: 'First digit: 5 choices (not 0); then 5, 4, 3 → 300.' },
    { q: 'Three letters are chosen from {A, B, C, D, E}. The number of selections is', opts: ['60', '10', '15', '20'], a: 1, why: 'Order does not matter: 5C3 = 10.' },
    { q: 'In how many ways can 5 runners finish a race?', opts: ['5', '10', '25', '120'], a: 3, why: 'Finishing order matters, so 5! = 120.' },
    { q: 'nCr = nC(n − r) is true because', opts: ['Every selection of r leaves a group of n − r', 'Combinations are equal', 'Factorials cancel', 'Permutations equal combinations'], a: 0, why: 'Choosing r to include is the same as choosing n − r to exclude.' },
    { q: 'The number of permutations of 4 objects taken 2 at a time is', opts: ['12', '6', '8', '24'], a: 0, why: '4 × 3 = 12.' },
    { q: 'How many ways can 6 people sit around a round table?', opts: ['720', '120', '360', '6'], a: 1, why: '(n − 1)! = 5! = 120, fixing one seat to remove rotations.' },
    { q: 'The number of ways to toss a coin 5 times and get exactly 3 heads is', opts: ['10', '5', '15', '20'], a: 0, why: 'Choose which 3 of the 5 tosses are heads: 5C3 = 10.' },
    { q: 'The number of 3-letter codes from A–F with repetition allowed is', opts: ['216', '120', '126', '72'], a: 0, why: '6 × 6 × 6 = 6³ = 216.' },
    { q: 'In (a + b)⁵, the number of terms is', opts: ['5', '6', '10', '32'], a: 1, why: '(a + b)ⁿ has n + 1 terms.' },
    { q: 'The binomial coefficients of (a + b)⁴ are', opts: ['1, 4, 6, 4, 1', '1, 3, 3, 1', '1, 4, 4, 1', '1, 5, 10, 10, 5, 1'], a: 0, why: 'Row 4 of Pascal\'s triangle.' },
    { q: 'In the expansion of (x + 1)ⁿ, the term independent of x is', opts: ['1', 'n', 'x', 'n + 1'], a: 0, why: 'The last term is 1ⁿ = 1, with x raised to the zero power.' },
    { q: 'The 4th term of (2 + x)⁷ is', opts: ['560x³', '35x⁴', '560x⁴', '16x³'], a: 0, why: 'T₄ = ⁷C₃ · 2⁴ · x³ = 35 × 16 x³ = 560x³.' },
    { q: 'The coefficient of x³ in (1 + x)⁶ is', opts: ['20', '15', '6', '30'], a: 0, why: 'The coefficient comes from the binomial coefficient ⁶C₃ = 20.' },
    { q: 'The coefficient of x² in (x + 2)⁴ is', opts: ['24', '16', '6', '32'], a: 0, why: '⁴C₂ · 2² = 6 × 4 = 24.' },
    { q: 'The middle term of (1 + x)⁶ is', opts: ['20x³', '15x²', '20x²', '15x³'], a: 0, why: 'n = 6, so the middle term is the 4th: ⁶C₃ x³ = 20x³.' },
    { q: 'From 5 men and 4 women, a team of 3 containing at least one woman is formed in', opts: ['74 ways', '84 ways', '40 ways', '64 ways'], a: 0, why: 'Total 9C3 = 84 minus all-male 5C3 = 10 → 74.' }
  ]
});
