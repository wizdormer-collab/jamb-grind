/* JAMB 2027 Prep — Mathematics, Chapters 1–5 */

JAMB.addChapter('mathematics', {
  id: 'number-bases',
  title: 'Number Bases and Conversion',
  blurb: 'Denary, base-n conversion and arithmetic in non-decimal bases.',
  time: '45 min',
  objectives: [
    'Convert numbers from base n to base 10 and back',
    'Expand a number in powers of its base',
    'Add, subtract and multiply in bases other than ten',
    'Check your own conversion by an independent method'
  ],
  body: `
<p class="lead">We write numbers in <strong>base 10</strong> because we have ten fingers. A base is simply the number of distinct digits used. In any base, each column is worth a power of that base — the same principle you already use in denary, applied to a different digit set.</p>

<h2>The place-value principle</h2>
<div class="formula-box">
  <div class="fb-head">Writing 4 5 2 in expanded form</div>
  <div class="formula-row"><div class="fname">Denary (base 10)</div>
    <div class="fexpr">452 = 4 × 10² + 5 × 10¹ + 2 × 10⁰</div>
    <div class="fnote">4 hundreds + 5 tens + 2 units.</div></div>
  <div class="formula-row"><div class="fname">Binary (base 2)</div>
    <div class="fexpr">1011₂ = 1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰</div>
    <div class="fnote">The subscript names the base.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Always write the base down</b>
<p>Write <strong>25₁₀</strong> and <strong>25₃</strong> — the same digits mean completely different quantities. Questions on this topic are lost more often to a forgotten subscript than to a wrong calculation.</p></div></div>

<h2>Converting from base n to base 10</h2>
<p>Expand the number in powers of the base and add.</p>

<div class="example">
  <div class="example-h"><span class="num">1</span> Convert 1101₂ to base 10
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Write the column values: 2³, 2², 2¹, 2⁰ = 8, 4, 2, 1</div>
    <div class="step"><div class="step-l">Step 2</div>
    Multiply each digit by its column value: 1 × 8 + 0 × 4 + 1 × 2 + 1 × 1</div>
    <div class="step"><div class="step-l">Step 3</div>
    Add: 8 + 0 + 2 + 1</div>
    <div class="ans">1101₂ = 13₁₀</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Convert 342₅ to base 10
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Column values: 5², 5¹, 5⁰ = 25, 5, 1</div>
    <div class="step"><div class="step-l">Step 2</div>
    3 × 25 + 4 × 5 + 2 × 1</div>
    <div class="step"><div class="step-l">Step 3</div>
    75 + 20 + 2</div>
    <div class="ans">342₅ = 97₁₀</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>There is no digit '9' in base 5</b>
<p>In base 5 the only digits are 0, 1, 2, 3, 4. If a question gives a number containing a digit that is not less than the base, the number is <strong>impossible</strong> — that is sometimes the whole point of the question.</p></div></div>

<h2>Converting from base 10 to base n</h2>
<p>Divide repeatedly by n and read the <strong>remainders upwards</strong>.</p>

<div class="example">
  <div class="example-h"><span class="num">3</span> Convert 47₁₀ to binary
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    47 ÷ 2 = 23 remainder <b>1</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    23 ÷ 2 = 11 remainder <b>1</b></div>
    <div class="step"><div class="step-l">Step 3</div>
    11 ÷ 2 = 5 remainder <b>1</b></div>
    <div class="step"><div class="step-l">Step 4</div>
    5 ÷ 2 = 2 remainder <b>1</b> · 2 ÷ 2 = 1 remainder <b>0</b> · 1 ÷ 2 = 0 remainder <b>1</b></div>
    <div class="step"><div class="step-l">Step 5</div>
    Read the remainders from the last one to the first</div>
    <div class="ans">47₁₀ = 101111₂</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Convert 245₁₀ to base 5
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    245 ÷ 5 = 49 remainder <b>0</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    49 ÷ 5 = 9 remainder <b>4</b></div>
    <div class="step"><div class="step-l">Step 3</div>
    9 ÷ 5 = 1 remainder <b>4</b> · 1 ÷ 5 = 0 remainder <b>1</b></div>
    <div class="ans">245₁₀ = 1440₅</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Check by converting back</b>
<p>1440₅ = 1 × 125 + 4 × 25 + 4 × 5 + 0 = 125 + 100 + 20 + 0 = 245 ✓. The reverse conversion takes seconds and catches almost every slip.</p></div></div>

<h2>Working in other bases</h2>
<p>The rules of arithmetic are unchanged — you simply use the base as the point at which you carry.</p>

<div class="example">
  <div class="example-h"><span class="num">5</span> Add 45₆ + 34₆
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Right-hand column: 5 + 4 = 9. In base 6, 9 = <b>1</b> six and <b>3</b> units → write 3, carry 1</div>
    <div class="step"><div class="step-l">Step 2</div>
    Left column: 4 + 3 + 1 = 8. In base 6, 8 = <b>1</b> six and <b>2</b> units → write 2, carry 1</div>
    <div class="step"><div class="step-l">Step 3</div>
    Write down the final carry</div>
    <div class="ans">45₆ + 34₆ = 123₆</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Subtract 1001₂ − 110₂
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Units column</div>
    1 − 0 = <b>1</b></div>
    <div class="step"><div class="step-l">Twos column</div>
    0 − 1 cannot be done, so borrow from the eights column: 10 − 1 = <b>1</b></div>
    <div class="step"><div class="step-l">Eights column</div>
    The 1 lent away becomes 0, so borrow from the sixteens column: 10 − 1 = <b>1</b></div>
    <div class="step"><div class="step-l">Sixteens column</div>
    Nothing left, giving <b>0</b></div>
    <div class="ans">1001₂ − 110₂ = 11₂ — check in base 10: 9 − 6 = 3 ✓</div>
  </div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Work in base 10 as your safety net</b>
<p>When a calculation in an unfamiliar base feels risky, convert both numbers to denary, calculate there, then convert the answer back. Only very short questions need you to work directly in the given base — and they are usually set in binary or base 8.</p></div></div>

<h2>Binary in computers (brief)</h2>
<div class="formula-box">
  <div class="fb-head">Powers of 2 worth memorising</div>
  <div class="formula-row"><div class="fname">Sequence</div>
    <div class="fexpr">1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024</div></div>
  <div class="formula-row"><div class="fname">Why they matter</div>
    <div class="fexpr">Each binary digit doubles the previous column, so any denary number is a <b>sum of distinct powers of 2</b></div>
    <div class="fnote">E.g. 100 = 64 + 32 + 4 = 1100100₂</div></div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>Each column in base n is worth n raised to its position power.</li>
<li>Base n → 10: expand in powers of n and add.</li>
<li>Base 10 → n: divide repeatedly by n and read the remainders upwards.</li>
<li>Carry when a column reaches the base; borrow the base when subtracting.</li>
<li>Always write the base as a subscript and check by converting back.</li>
</ul>
`,
  quiz: [
    { q: 'The digits used in base 6 are', opts: ['0, 1, 2, 3, 4', '0, 1, 2, 3, 4, 5', '0 to 6', '0 to 9'], a: 1, why: 'Base n uses the n digits from 0 to n − 1.' },
    { q: '1101₂ written in base 10 is', opts: ['11', '13', '14', '8'], a: 1, why: '8 + 0 + 2 + 1 = 13.' },
    { q: '1011₂ in base 10 is', opts: ['9', '10', '11', '13'], a: 2, why: '8 + 0 + 2 + 1 = 11.' },
    { q: '342₅ in base 10 is', opts: ['47', '97', '107', '147'], a: 1, why: '3 × 25 + 4 × 5 + 2 × 1 = 75 + 20 + 2 = 97.' },
    { q: '100100₂ in base 10 is', opts: ['36', '40', '44', '72'], a: 0, why: '32 + 4 = 36.' },
    { q: 'The value of the digit 7 in 473₈ is', opts: ['7', '70', '56', '400'], a: 2, why: 'It stands in the eights column: 7 × 8 = 56.' },
    { q: '47₁₀ written in binary is', opts: ['101101₂', '101111₂', '110111₂', '100111₂'], a: 1, why: 'Repeated division by 2 gives remainders 1, 1, 1, 1, 0, 1 read upwards.' },
    { q: '245₁₀ written in base 5 is', opts: ['1440₅', '144₅', '4401₅', '10440₅'], a: 0, why: '245 ÷ 5 leaves remainders 0, 4, 4, 1 read upwards.' },
    { q: '36₁₀ written in base 5 is', opts: ['121₅', '111₅', '131₅', '21₅'], a: 0, why: '36 = 25 + 10 + 1 = 1 × 25 + 2 × 5 + 1.' },
    { q: 'Which of these is NOT a valid base-4 number?', opts: ['321₄', '403₄', '103₂', '33₄'], a: 1, why: 'The digit 4 does not exist in base 4; valid digits are 0 to 3.' },
    { q: '11010₂ + 1101₂ equals', opts: ['101000₂', '100111₂', '11001₂', '11111₂'], a: 1, why: '26 + 13 = 39 = 100111₂.' },
    { q: '45₆ + 34₆ equals', opts: ['123₆', '79₆', '112₆', '122₆'], a: 0, why: '5 + 4 = 9 = 1 six and 3 units; then 4 + 3 + 1 = 8 = 1 six and 2 units.' },
    { q: '1001₂ − 110₂ equals', opts: ['10₂', '11₂', '111₂', '100₂'], a: 1, why: 'In base 10 this is 9 − 6 = 3, and 3 = 11₂.' },
    { q: 'In base 2, 1 + 1 =', opts: ['2', '10', '11', '01'], a: 1, why: 'One unit and one two: two carries, so the answer is written 10.' },
    { q: 'If 3 × 5 is written as 23 in base b, then b equals', opts: ['5', '6', '7', '8'], a: 1, why: '3 × 5 = 15 in base 10, and 23 in base b means 2b + 3. So 2b + 3 = 15, giving b = 6.' },
    { q: '1000000₂ in base 10 is', opts: ['32', '64', '100', '128'], a: 1, why: 'It is 1 followed by six zeros, so it stands in the 2⁶ column: 2⁶ = 64.' },
    { q: 'To convert denary to another base you', opts: ['Expand in powers of the base', 'Divide repeatedly by the base', 'Multiply by the base', 'Add the digits'], a: 1, why: 'Divide repeatedly by the base and read the remainders from the bottom up.' },
    { q: 'A quick way to check a conversion is to', opts: ['Add the digits', 'Convert the answer back to base 10', 'Reverse the digits', 'Divide by 10'], a: 1, why: 'Reverse the process — if the value matches, the conversion is correct.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'fractions-ratio-percentage',
  title: 'Fractions, Ratio, Proportion and Percentage',
  blurb: 'The everyday arithmetic of the paper: shares, change, profit, interest and rate problems.',
  time: '55 min',
  objectives: [
    'Manipulate fractions and convert between fractions and decimals',
    'Share quantities in a given ratio',
    'Solve direct and inverse proportion problems',
    'Calculate percentage increase, decrease, profit, loss, discount and interest'
  ],
  body: `
<p class="lead">A large share of the Mathematics paper is arithmetic dressed in words. The pattern is always the same: <strong>identify the whole, decide what part of it is involved, then multiply or divide</strong>. Almost every question here reduces to a fraction and a percentage.</p>

<h2>Fractions</h2>
<div class="formula-box">
  <div class="fb-head">The four operations</div>
  <div class="formula-row"><div class="fname">Addition / subtraction</div>
    <div class="fexpr">Make the denominators equal first, then add or subtract the numerators only</div>
    <div class="fnote">⅓ + ¼ = 4⁄12 + 3⁄12 = 7⁄12</div></div>
  <div class="formula-row"><div class="fname">Multiplication</div>
    <div class="fexpr">Multiply across; simplify afterwards</div>
    <div class="fnote">⅔ × ¾ = 6⁄12 = ½</div></div>
  <div class="formula-row"><div class="fname">Division</div>
    <div class="fexpr">Multiply by the <b>reciprocal</b> of the second fraction</div>
    <div class="fnote">⅔ ÷ ¾ = ⅔ × ¾⁄₂ = ⅔ × 4⁄3 = 8⁄9</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Fraction → decimal → percentage</b>
<p>To change a fraction to a decimal, divide numerator by denominator. Common values worth knowing instantly:</p>
<p><b>½ = 0.50 = 50%</b> · <b>¼ = 0.25 = 25%</b> · <b>¾ = 0.75 = 75%</b> · <b>⅕ = 0.20 = 20%</b> · <b>⅛ = 0.125 = 12.5%</b> · <b>⅓ = 0.333…</b></p></div></div>

<h2>Ratio</h2>
<p>A ratio compares quantities in the same units. <strong>Simplify by dividing through by the highest common factor.</strong></p>

<div class="example">
  <div class="example-h"><span class="num">1</span> Share #600 in the ratio 2 : 3 : 5
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Total parts = 2 + 3 + 5 = <b>10 parts</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    Value of one part = 600 ÷ 10 = <b>#60</b></div>
    <div class="step"><div class="step-l">Step 3</div>
    Multiply up: 2 × 60 = 120 · 3 × 60 = 180 · 5 × 60 = 300</div>
    <div class="ans">#120, #180 and #300 (they sum to #600 ✓)</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The check costs five seconds</b>
<p>Whatever you share in a ratio must add back to the original amount. A student who always adds the parts back gains marks that arithmetic errors would otherwise cost.</p></div></div>

<h2>Proportion</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Relationship</th><th>Formula</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Direct</b></td><td>More of one → more of the other</td><td>y = kx</td><td>5 men dig a trench in 12 days → 8 men in how many?</td></tr>
    <tr><td><b>Inverse</b></td><td>More of one → less of the other</td><td>xy = k</td><td>More taps fill a tank <em>faster</em></td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">2</span> 5 workers finish a job in 12 days. How long for 8 workers?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Workers and days are <b>inversely proportional</b> — more workers, fewer days</div>
    <div class="step"><div class="step-l">Step 2</div>
    Total work = 5 × 12 = <b>60 worker-days</b></div>
    <div class="step"><div class="step-l">Step 3</div>
    Days for 8 workers = 60 ÷ 8 = 7.5</div>
    <div class="ans">7½ days</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Which kind of proportion?</b>
<p>Read the sentence carefully. <strong>More workers → fewer days</strong> is inverse. <strong>More workers → more trenches</strong> (in the same time) is direct. The wrong choice flips the answer, and setting it up backwards is the commonest error in this topic.</p></div></div>

<h2>Percentage</h2>
<div class="formula-box">
  <div class="fb-head">The core formulas</div>
  <div class="formula-row"><div class="fname">Percentage of a quantity</div>
    <div class="fexpr">Percentage⁄100 × quantity</div></div>
  <div class="formula-row"><div class="fname">Percentage change</div>
    <div class="fexpr">(change ÷ original) × 100%</div>
    <div class="fnote">The denominator is always the <b>original</b> value.</div></div>
  <div class="formula-row"><div class="fname">New value after a change of p%</div>
    <div class="fexpr">Original × (1 ± p⁄100)</div></div>
  <div class="formula-row"><div class="fname">Express x as a percentage of y</div>
    <div class="fexpr">(x ÷ y) × 100%</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Increase 80 by 15%
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    15% of 80 = 0.15 × 80 = 12</div>
    <div class="step"><div class="step-l">Step 2</div>
    Add to the original: 80 + 12</div>
    <div class="ans">92</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> A value falls from 250 to 200. Find the percentage decrease
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Change = 250 − 200 = 50</div>
    <div class="step"><div class="step-l">Step 2</div>
    Divide by the <b>original</b>: 50 ÷ 250 = 0.2</div>
    <div class="step"><div class="step-l">Step 3</div>
    Multiply by 100</div>
    <div class="ans">20% decrease</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Down then up is not back to the start</b>
<p>A 20% fall followed by a 20% rise does <strong>not</strong> cancel: 100 → 80 → 96. Only the reverse order restores the value exactly. Questions on this are a favourite.</p></div></div>

<h2>Profit, loss and discount</h2>
<div class="formula-box">
  <div class="fb-head">Marks and money</div>
  <div class="formula-row"><div class="fname">Profit</div>
    <div class="fexpr">Selling price − Cost price</div></div>
  <div class="formula-row"><div class="fname">Percentage profit</div>
    <div class="fexpr">(Profit ÷ <b>cost price</b>) × 100%</div></div>
  <div class="formula-row"><div class="fname">Percentage loss</div>
    <div class="fexpr">(Loss ÷ <b>cost price</b>) × 100%</div></div>
  <div class="formula-row"><div class="fname">Selling price given profit of p%</div>
    <div class="fexpr">Cost × (1 + p⁄100)</div>
    <div class="fnote">Cost price given selling price and p% profit: Cost = Selling ÷ (1 + p⁄100)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> An article is sold for #1,260 at a profit of 26%. Find the cost price
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Selling price = cost × (1 + 26⁄100) = 1.26 × cost</div>
    <div class="step"><div class="step-l">Step 2</div>
    cost = 1260 ÷ 1.26</div>
    <div class="ans">#1,000</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Profit is always a % of the cost price</b>
<p>Never divide profit by the selling price. Write the denominator down before you calculate — it is what examiners look for in the method.</p></div></div>

<h2>Simple and compound interest</h2>
<div class="formula-box">
  <div class="fb-head">Interest</div>
  <div class="formula-row"><div class="fname">Simple interest</div>
    <div class="fexpr">I = P × R × T ⁄ 100</div>
    <div class="fnote">P = principal, R = rate % per annum, T = time in years.</div></div>
  <div class="formula-row"><div class="fname">Amount (simple)</div>
    <div class="fexpr">A = P + I = P(1 + RT⁄100)</div></div>
  <div class="formula-row"><div class="fname">Compound amount</div>
    <div class="fexpr">A = P(1 + R⁄100)ⁿ</div>
    <div class="fnote">n = number of conversion periods.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> #2,000 at 5% per annum for 3 years
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1 (simple)</div>
    I = 2000 × 5 × 3 ⁄ 100 = 10 000 ⁄ 100 = <b>#300</b></div>
    <div class="step"><div class="step-l">Step 2 (compound)</div>
    A = 2000 × (1.05)³ = 2000 × 1.157625 = <b>#2,315.25</b></div>
    <div class="ans">Simple interest #300; compound amount #2,315.25</div>
  </div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Compound always exceeds simple</b>
<p>Compound interest earns interest <em>on the interest</em>; simple never does. So the compound amount is always larger for the same rate and time (after one period they are equal).</p></div></div>

<h2>Rate problems</h2>
<div class="example">
  <div class="example-h"><span class="num">7</span> A tank holds 500 litres and is filled at 20 litres per minute
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Time = quantity ÷ rate</div>
    <div class="step"><div class="step-l">Step 2</div>
    500 ÷ 20</div>
    <div class="ans">25 minutes</div>
  </div>
</div>

<div class="formula-box">
  <div class="fb-head">The rate triangle</div>
  <div class="formula-row"><div class="fname">Cover the quantity you want</div>
    <div class="fexpr">Quantity = Rate × Time · Rate = Quantity ÷ Time · Time = Quantity ÷ Rate</div>
    <div class="fnote">Use it for work, speed, density and unit price alike.</div></div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>Add fractions only after the denominators match; divide by multiplying by the reciprocal.</li>
<li>Share in a ratio by finding the value of one part, then checking the total.</li>
<li>More → less is inverse proportion; more → more is direct.</li>
<li>Percentage change uses the original value as the denominator.</li>
<li>Profit and loss percentages are always calculated on the cost price.</li>
<li>I = PRT⁄100 for simple interest; A = P(1 + R⁄100)ⁿ for compound.</li>
</ul>
`,
  quiz: [
    { q: '⅔ + ¾ =', opts: ['7⁄12', '17⁄12', '5⁄7', '13⁄12'], a: 1, why: '⅔ + ¾ = 8⁄12 + 9⁄12 = 17⁄12 = 1 5⁄12.' },
    { q: '⅔ ÷ ¾ =', opts: ['8⁄9', '9⁄8', '1⁄2', '6⁄12'], a: 0, why: 'Multiply by the reciprocal: ⅔ × 4⁄3 = 8⁄9.' },
    { q: '0.375 expressed as a fraction in its lowest terms is', opts: ['3⁄4', '3⁄8', '37⁄100', '5⁄16'], a: 1, why: '0.375 = 375⁄1000 = 3⁄8.' },
    { q: 'The fraction 5⁄8 expressed as a percentage is', opts: ['58%', '62.5%', '68%', '48%'], a: 1, why: '5 ÷ 8 = 0.625 = 62.5%.' },
    { q: '#600 is shared in the ratio 2 : 3 : 5. The largest share is', opts: ['#120', '#180', '#300', '#200'], a: 2, why: '10 parts; 5 parts × #60 = #300.' },
    { q: 'Two numbers are in the ratio 3 : 5 and their sum is 64. The larger is', opts: ['24', '30', '40', '26'], a: 2, why: '8 parts = 64, so 1 part = 8 and 5 parts = 40.' },
    { q: '#90 is divided between A and B in the ratio 4 : 5. A receives', opts: ['#40', '#45', '#50', '#36'], a: 0, why: '9 parts = 90, 1 part = 10, so A gets 4 × 10 = #40.' },
    { q: 'If 5 workers complete a job in 12 days, 8 workers would take', opts: ['7½ days', '15 days', '9½ days', '6 days'], a: 0, why: '60 worker-days ÷ 8 = 7.5 days.' },
    { q: 'x and y are inversely proportional. If y = 6 when x = 4, then y = 3 when x is', opts: ['6', '8', '12', '2'], a: 1, why: 'xy = 24, so x = 24 ÷ 3 = 8.' },
    { q: 'The cost of 3 kg of rice is #450. The cost of 7 kg is', opts: ['#900', '#1,050', '#1,200', '#750'], a: 1, why: 'The unit price is #150 per kg; 7 × 150 = #1,050.' },
    { q: 'Increase 80 by 15%', opts: ['81.5', '92', '88', '95'], a: 1, why: '15% of 80 = 12, and 80 + 12 = 92.' },
    { q: 'Decrease 200 by 12.5%', opts: ['175', '187.5', '185', '160'], a: 0, why: '12.5% of 200 = 25, and 200 − 25 = 175.' },
    { q: 'A value falls from 250 to 200. The percentage decrease is', opts: ['20%', '25%', '50%', '16%'], a: 0, why: 'Change 50 over the original 250 = 0.2 = 20%.' },
    { q: 'A number increases by 20% and then decreases by 20%. The final value is', opts: ['The original value', '4% below the original', '4% above the original', 'Unchanged'], a: 1, why: 'x × 1.2 × 0.8 = 0.96x — 4% less than it started.' },
    { q: 'An article costing #1,000 is sold for #1,260. The percentage profit is', opts: ['20%', '26%', '26.6%', '24%'], a: 1, why: 'Profit 260 ÷ cost 1000 = 26%.' },
    { q: 'An article is sold for #1,260 at a profit of 26%. Its cost was', opts: ['#1,000', '#1,060', '#960', '#940'], a: 0, why: 'Cost = 1260 ÷ 1.26 = #1,000.' },
    { q: 'A #500 item is sold at a 10% discount. The selling price is', opts: ['#400', '#450', '#490', '#475'], a: 1, why: '10% of 500 = 50; 500 − 50 = #450.' },
    { q: 'The simple interest on #2,000 at 5% per annum for 3 years is', opts: ['#150', '#300', '#350', '#600'], a: 1, why: 'I = 2000 × 5 × 3 ⁄ 100 = #300.' },
    { q: 'The amount on #5,000 at 10% per annum compounded for 2 years is', opts: ['#5,500', '#6,050', '#6,000', '#5,750'], a: 1, why: 'A = 5000 × (1.10)² = 5000 × 1.21 = #6,050.' },
    { q: 'Which is always greater for the same rate and time (beyond one year)?', opts: ['Simple interest', 'Compound interest', 'They are equal', 'Neither'], a: 1, why: 'Compound interest earns interest on previously earned interest.' },
    { q: 'A car travels 180 km in 2½ hours. Its average speed is', opts: ['60 km/h', '72 km/h', '75 km/h', '90 km/h'], a: 1, why: '180 ÷ 2.5 = 72 km/h.' },
    { q: 'A pipe fills a 500 litre tank at 20 litres per minute. The time taken is', opts: ['10 min', '25 min', '30 min', '40 min'], a: 1, why: '500 ÷ 20 = 25 minutes.' },
    { q: '75% of a number is 45. The number is', opts: ['50', '55', '60', '75'], a: 2, why: '45 ÷ 0.75 = 60.' },
    { q: 'Express 15 minutes as a fraction of 2 hours', opts: ['1⁄8', '1⁄12', '1⁄6', '1⁄4'], a: 0, why: '15 min ÷ 120 min = 1⁄8.' },
    { q: 'The ratio 0.6 : 0.9 in its simplest form is', opts: ['2 : 3', '6 : 9', '3 : 2', '1 : 2'], a: 0, why: 'Multiply by 10 to get 6 : 9, then divide by 3 → 2 : 3.' },
    { q: 'If 12 men can build a wall in 8 days, how many men are needed to build it in 6 days?', opts: ['14', '16', '18', '24'], a: 1, why: '96 man-days ÷ 6 days = 16 men.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'indices-logs-surds',
  title: 'Indices, Logarithms, Surds and Standard Form',
  blurb: 'The rules of powers, the inverse of powers, irrational roots and writing very large or small numbers.',
  time: '60 min',
  objectives: [
    'Apply the laws of indices confidently, including zero and negative indices',
    'Write numbers in standard form and convert back',
    'Use the laws of logarithms and find antilogarithms',
    'Simplify surds and rationalise denominators'
  ],
  body: `
<p class="lead">These four topics are the vocabulary of the rest of the course — calculus, trigonometry and physics questions all assume them. They are also among the most reliable marks on the paper, because the rules never vary.</p>

<h2>Laws of indices</h2>
<div class="formula-box">
  <div class="fb-head">The eight laws</div>
  <div class="formula-row"><div class="fname">Multiplying</div>
    <div class="fexpr">aᵐ × aⁿ = aᵐ⁺ⁿ</div></div>
  <div class="formula-row"><div class="fname">Dividing</div>
    <div class="fexpr">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</div></div>
  <div class="formula-row"><div class="fname">Power of a power</div>
    <div class="fexpr">(aᵐ)ⁿ = aᵐⁿ</div></div>
  <div class="formula-row"><div class="fname">Power of a product</div>
    <div class="fexpr">(ab)ⁿ = aⁿbⁿ</div></div>
  <div class="formula-row"><div class="fname">Power of a quotient</div>
    <div class="fexpr">(a⁄b)ⁿ = aⁿ ⁄ bⁿ</div></div>
  <div class="formula-row"><div class="fname">Zero index</div>
    <div class="fexpr">a⁰ = 1 (for any a ≠ 0)</div></div>
  <div class="formula-row"><div class="fname">Negative index</div>
    <div class="fexpr">a⁻ⁿ = 1 ⁄ aⁿ</div></div>
  <div class="formula-row"><div class="fname">Fractional index</div>
    <div class="fexpr">a<sup>1/n</sup> = ⁿ√a · a<sup>m/n</sup> = ⁿ√(aᵐ)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Simplify 2³ × 2⁴ ÷ 2⁵
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Multiplying: add the indices → 2³⁺⁴ = 2⁷</div>
    <div class="step"><div class="step-l">Step 2</div>
    Dividing: subtract → 2⁷⁻⁵ = 2²</div>
    <div class="ans">4</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Evaluate 3⁻² and 27<sup>2/3</sup>
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Negative index</div>
    3⁻² = 1 ⁄ 3² = <b>1⁄9</b></div>
    <div class="step"><div class="step-l">Fractional index</div>
    27<sup>2/3</sup> = (∛27)² = 3² = <b>9</b></div>
    <div class="ans">3⁻² = 1⁄9 · 27<sup>2/3</sup> = 9</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Why a⁰ = 1</b>
<p>It follows from the division law: a³ ÷ a³ = a³⁻³ = a⁰, and any number divided by itself is 1. Writing 1 as the answer to a⁰ is not a rule to memorise — it is a consequence you can always re-derive.</p></div></div>

<h2>Standard form</h2>
<div class="formula-box">
  <div class="fb-head">a × 10ⁿ where 1 ≤ a &lt; 10</div>
  <div class="formula-row"><div class="fname">Large numbers</div>
    <div class="fexpr">n is positive: 450 000 = 4.5 × 10⁵</div></div>
  <div class="formula-row"><div class="fname">Small numbers</div>
    <div class="fexpr">n is negative: 0.000 32 = 3.2 × 10⁻⁴</div></div>
  <div class="formula-row"><div class="fname">Counting the power</div>
    <div class="fexpr">Move the decimal point until one non-zero digit sits before it, then count the moves</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The decimal point must be after the first digit</b>
<p><strong>0.045 × 10³ is NOT standard form</strong> — the coefficient must lie between 1 and 10. JAMB includes exactly this distractor regularly. Correct: 4.5 × 10⁻² × 10³ = 4.5 × 10¹ = 45.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Multiply (2 × 10³) × (4 × 10⁻⁶)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Multiply the coefficients: 2 × 4 = 8</div>
    <div class="step"><div class="step-l">Step 2</div>
    Add the powers: 10³ × 10⁻⁶ = 10⁻³</div>
    <div class="ans">8 × 10⁻³ (already in standard form)</div>
  </div>
</div>

<h2>Logarithms</h2>
<div class="formula-box">
  <div class="fb-head">Definition and laws</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">If 10ᵃ = b then log₁₀ b = a (read: "log to base 10 of b")</div></div>
  <div class="formula-row"><div class="fname">Multiplication</div>
    <div class="fexpr">log (xy) = log x + log y</div></div>
  <div class="formula-row"><div class="fname">Division</div>
    <div class="fexpr">log (x ⁄ y) = log x − log y</div></div>
  <div class="formula-row"><div class="fname">Power</div>
    <div class="fexpr">log xⁿ = n log x</div></div>
  <div class="formula-row"><div class="fname">Standard values</div>
    <div class="fexpr">log 1 = 0 · log 10 = 1 · log 100 = 2 · log 0.1 = −1</div>
    <div class="fnote">log 2 = 0.3010 · log 3 = 0.4771 · log 5 = 0.6990 (given in the paper).</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Given log 2 = 0.3010 and log 3 = 0.4771, find log 12
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Factorise: 12 = 4 × 3 = 2² × 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    log 12 = log 2² + log 3 = 2 log 2 + log 3</div>
    <div class="step"><div class="step-l">Step 3</div>
    2(0.3010) + 0.4771 = 0.6020 + 0.4771</div>
    <div class="ans">log 12 = 1.0791</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Evaluate log 300 − log 3 + log 10
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Combine using the division and multiplication laws: log (300 × 10 ⁄ 3)</div>
    <div class="step"><div class="step-l">Step 2</div>
    = log 1000 = log 10³</div>
    <div class="ans">3</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The characteristic and the mantissa</b>
<p>The whole part of a logarithm is the <strong>characteristic</strong>; the decimal part is the <strong>mantissa</strong>.</p>
<p>log 246 — three digits, so the characteristic is <strong>2</strong> → 2.3907.<br>
log 0.0454 — leading zeros only after the point, so the characteristic is <strong>−2</strong> → −2 + 0.3561 = ̲ −1.6439.</p>
<p>This is how log tables are read, and it appears directly in the paper.</p></div></div>

<h3>Finding antilogarithms</h3>
<p>The reverse operation: if log x = 1.6990, then x = antilog 1.6990.</p>
<div class="example">
  <div class="example-h"><span class="num">6</span> Solve log x = 2.4771
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    x = 10<sup>2.4771</sup></div>
    <div class="step"><div class="step-l">Step 2</div>
    10<sup>0.4771</sup> = 3 (since log 3 = 0.4771) and 10² = 100</div>
    <div class="ans">x = 300</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Use the 0.xxx part to read off the number</b>
<p>Split 2.4771 into 2 + 0.4771. The characteristic tells you the position of the decimal point; the mantissa 0.4771 tells you <em>which</em> digits — they are 3, so x = 300. Practise this: it is half of every logarithm question.</p></div></div>

<h2>Surds</h2>
<div class="formula-box">
  <div class="fb-head">Working with irrational roots</div>
  <div class="formula-row"><div class="fname">Multiplication</div>
    <div class="fexpr">√a × √b = √(ab) · e.g. √2 × √8 = √16 = 4</div></div>
  <div class="formula-row"><div class="fname">Division</div>
    <div class="fexpr">√a ⁄ √b = √(a⁄b)</div></div>
  <div class="formula-row"><div class="fname">Simplifying</div>
    <div class="fexpr">Split out any square factor: √50 = √(25 × 2) = 5√2</div></div>
  <div class="formula-row"><div class="fname">Rationalising</div>
    <div class="fexpr">Multiply top and bottom by the <b>conjugate</b>: for a + √b use a − √b</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> Rationalise 1 ⁄ (1 + √2)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Multiply by (1 − √2) ⁄ (1 − √2)</div>
    <div class="step"><div class="step-l">Step 2</div>
    Denominator: (1 + √2)(1 − √2) = 1 − 2 = −1</div>
    <div class="step"><div class="step-l">Step 3</div>
    Numerator: 1 − √2</div>
    <div class="ans">(1 − √2) ⁄ (−1) = √2 − 1</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">8</span> Simplify 2√3 + 4√3 − √27
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Simplify: √27 = √(9 × 3) = 3√3</div>
    <div class="step"><div class="step-l">Step 2</div>
    Collect like surds: 2√3 + 4√3 − 3√3</div>
    <div class="ans">3√3</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Only like surds can be added</b>
<p>√2 and √3 cannot be combined — you may add their coefficients only when the root is identical, exactly as with algebraic terms. 3√2 + 4√2 = 7√2, but 3√2 + 4√3 stays as it is.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Add indices when multiplying, subtract when dividing, multiply for a power of a power.</li>
<li>a⁰ = 1; a⁻ⁿ = 1/aⁿ; a<sup>1/n</sup> = ⁿ√a.</li>
<li>Standard form needs a coefficient between 1 and 10.</li>
<li>log(xy) = log x + log y; log(x/y) = log x − log y; log xⁿ = n log x.</li>
<li>Split a logarithm into characteristic (position) and mantissa (digits).</li>
<li>Rationalise with the conjugate; add only like surds.</li>
</ul>
`,
  quiz: [
    { q: 'Simplify 2³ × 2⁴', opts: ['2⁷', '2¹²', '4⁷', '2'], a: 0, why: 'When multiplying, indices of the same base are added: 3 + 4 = 7.' },
    { q: 'Simplify 5⁷ ÷ 5³', opts: ['5⁴', '5¹⁰', '5⁻⁴', '5²'], a: 0, why: 'When dividing, subtract the indices: 7 − 3 = 4.' },
    { q: '(3²)³ equals', opts: ['9³', '3⁶', '3⁵', '6³'], a: 1, why: 'A power of a power multiplies the indices: 2 × 3 = 6.' },
    { q: 'The value of 8⁰ is', opts: ['0', '1', '8', 'Undefined'], a: 1, why: 'Any non-zero number raised to the zero power is 1.' },
    { q: '3⁻² equals', opts: ['−9', '1⁄9', '−6', '9'], a: 1, why: 'A negative index gives the reciprocal: 1 ⁄ 3² = 1⁄9.' },
    { q: '27<sup>1/3</sup> equals', opts: ['3', '9', '81', '27'], a: 0, why: 'The cube root of 27 is 3.' },
    { q: '16<sup>3/4</sup> equals', opts: ['8', '12', '64', '4'], a: 0, why: 'Fourth root of 16 is 2, then 2³ = 8.' },
    { q: '(a³b⁻²)² simplifies to', opts: ['a⁵b⁻⁴', 'a⁶b⁻⁴', 'a⁶b⁻²', 'a³b⁻⁴'], a: 1, why: 'Every index inside is doubled: 3 × 2 = 6 and −2 × 2 = −4.' },
    { q: '450 000 written in standard form is', opts: ['45 × 10⁴', '4.5 × 10⁵', '4.5 × 10⁴', '0.45 × 10⁶'], a: 1, why: 'The coefficient must be between 1 and 10.' },
    { q: '0.000 32 in standard form is', opts: ['3.2 × 10⁻⁴', '32 × 10⁻⁵', '3.2 × 10⁴', '0.32 × 10⁻³'], a: 0, why: 'The decimal moves four places left, giving 3.2 × 10⁻⁴.' },
    { q: 'Which of these is NOT in standard form?', opts: ['5.6 × 10³', '0.045 × 10³', '1 × 10⁰', '9.9 × 10⁻⁶'], a: 1, why: 'The coefficient 0.045 is less than 1, so it is not standard form.' },
    { q: '(2 × 10³) × (4 × 10⁻⁶) equals', opts: ['8 × 10⁻³', '8 × 10⁻⁹', '6 × 10⁻³', '8 × 10¹'], a: 0, why: 'Coefficients multiply; powers add: 3 + (−6) = −3.' },
    { q: 'The value of log₁₀ 100 is', opts: ['1', '2', '10', '100'], a: 1, why: '10² = 100, so log 100 = 2.' },
    { q: 'log 1 equals', opts: ['0', '1', '10', 'Undefined'], a: 0, why: 'Logarithm answers the question "10 to what power gives 1?" — and 10⁰ = 1.' },
    { q: 'log x + log y equals', opts: ['log(x + y)', 'log(xy)', 'log(x ⁄ y)', 'xy'], a: 1, why: 'The product law of logarithms.' },
    { q: 'log(x ⁄ y) equals', opts: ['log x + log y', 'log x × log y', 'log x − log y', 'log y − log x'], a: 2, why: 'Division of numbers becomes subtraction of logarithms.' },
    { q: 'log x² equals', opts: ['2 log x', '(log x)²', 'log 2x', '2x'], a: 0, why: 'The power law brings the index down in front.' },
    { q: 'Given log 2 = 0.3010, log 8 equals', opts: ['0.6020', '0.9030', '1.2040', '0.3010'], a: 1, why: '8 = 2³, so log 8 = 3 × 0.3010 = 0.9030.' },
    { q: 'Given log 2 = 0.3010 and log 3 = 0.4771, log 12 equals', opts: ['1.0791', '0.7781', '0.9542', '1.7781'], a: 0, why: 'log 12 = 2 log 2 + log 3 = 0.6020 + 0.4771.' },
    { q: 'log 6 equals', opts: ['0.7781', '0.6020', '1.0791', '0.3010'], a: 0, why: 'log 6 = log 2 + log 3 = 0.3010 + 0.4771.' },
    { q: 'log 300 − log 3 + log 10 equals', opts: ['1', '2', '3', '100'], a: 2, why: 'It simplifies to log 1000 = 3.' },
    { q: 'If log x = 2.4771 then x =', opts: ['3', '30', '300', '3000'], a: 2, why: 'The mantissa 0.4771 corresponds to 3 and the characteristic 2 places it as 300.' },
    { q: 'log 246 has characteristic', opts: ['0', '1', '2', '3'], a: 2, why: 'It lies between 100 and 1000, so the characteristic is 2.' },
    { q: 'log 0.04 has characteristic', opts: ['−2', '−1', '0', '1'], a: 0, why: 'It lies between 0.01 and 0.1, so the characteristic is −2.' },
    { q: '√50 simplified is', opts: ['5√2', '2√5', '25√2', '10√5'], a: 0, why: '√50 = √(25 × 2) = 5√2.' },
    { q: '√2 × √8 equals', opts: ['√10', '4', '16', '2√8'], a: 1, why: '√(2 × 8) = √16 = 4.' },
    { q: '2√3 + 4√3 − √27 equals', opts: ['3√3', '6√3', '√3', '9√3'], a: 0, why: '√27 = 3√3, so 2 + 4 − 3 = 3√3.' },
    { q: 'Rationalising 1 ⁄ √2 gives', opts: ['√2', '√2 ⁄ 2', '2', '1⁄2'], a: 1, why: 'Multiply top and bottom by √2: √2 ⁄ 2.' },
    { q: '(1 + √3)(1 − √3) equals', opts: ['−2', '2', '4', '1 − 3 = −2 only for conjugates'], a: 0, why: 'Difference of two squares: 1 − 3 = −2.' },
    { q: 'The value of (2/3)⁻² is', opts: ['4⁄9', '9⁄4', '−4⁄9', '3⁄2'], a: 1, why: 'The negative index inverts: (3/2)² = 9⁄4.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'sets-venn',
  title: 'Sets and Venn Diagrams',
  blurb: 'Set notation, two- and three-set Venn diagrams, and the counting formulae.',
  time: '50 min',
  objectives: [
    'Use set notation correctly (∈, ⊆, ∪, ∩, complement)',
    'Draw and interpret two-set Venn diagrams',
    'Apply the formula n(A ∪ B) = n(A) + n(B) − n(A ∩ B)',
    'Solve three-set problems systematically'
  ],
  body: `
<p class="lead">A set is a well-defined collection of objects. Nearly every JAMB question on this topic is a <strong>counting</strong> problem, and the Venn diagram is not optional decoration — it is the method. Draw it, label every region, and the answer falls out.</p>

<h2>Notation you must read at sight</h2>
<div class="formula-box">
  <div class="fb-head">Symbols</div>
  <div class="formula-row"><div class="fname">A ⊂ B (or A ⊆ B)</div>
    <div class="fexpr">A is a <b>subset</b> of B — every member of A is in B</div></div>
  <div class="formula-row"><div class="fname">A ∈ S</div>
    <div class="fexpr">A is an <b>element</b> of the set S</div></div>
  <div class="formula-row"><div class="fname">A ∪ B</div>
    <div class="fexpr"><b>Union</b> — in A, in B, or in both</div></div>
  <div class="formula-row"><div class="fname">A ∩ B</div>
    <div class="fexpr"><b>Intersection</b> — in both A and B</div></div>
  <div class="formula-row"><div class="fname">A′ (or Aᶜ)</div>
    <div class="fexpr"><b>Complement</b> — everything in the universal set not in A</div></div>
  <div class="formula-row"><div class="fname">∅</div>
    <div class="fexpr">The <b>empty set</b> — contains no elements</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>⊂ and ∈ are not the same</b>
<p><strong>⊆</strong> compares two <em>sets</em>; <strong>∈</strong> compares an <em>element</em> with a set. Write {1, 2} ⊆ {1, 2, 3} but 1 ∈ {1, 2, 3}. Confusing the two is an easy mark thrown away.</p></div></div>

<h2>Two-set Venn diagrams</h2>
<div class="formula-box">
  <div class="fb-head">The counting formula</div>
  <div class="formula-row"><div class="fname">Union</div>
    <div class="fexpr">n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</div>
    <div class="fnote">The intersection is added twice, so it is subtracted once.</div></div>
  <div class="formula-row"><div class="fname">Complement</div>
    <div class="fexpr">n(A′) = n(ξ) − n(A)</div></div>
  <div class="formula-row"><div class="fname">Exactly one</div>
    <div class="fexpr">n(A ∪ B) − n(A ∩ B)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> In a class of 40 students, 25 play football, 20 play tennis and 8 play both. How many play neither?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    n(F ∪ T) = 25 + 20 − 8 = <b>37</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    Neither = 40 − 37</div>
    <div class="ans">3 students play neither</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Filling the diagram for question 1
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Start inside</div>
    Both = <b>8</b> in the overlap</div>
    <div class="step"><div class="step-l">Then football only</div>
    25 − 8 = <b>17</b></div>
    <div class="step"><div class="step-l">Then tennis only</div>
    20 − 8 = <b>12</b></div>
    <div class="step"><div class="step-l">Check</div>
    17 + 8 + 12 = 37; 40 − 37 = <b>3</b> outside both circles</div>
    <div class="ans">17 · 8 · 12 · 3 — four numbers that must add to the total</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Always fill the overlap first</b>
<p>Work outwards: intersection, then each circle's exclusive part, then the outside. Filling the circles first and the overlap afterwards is the route to double-counting — exactly the error the formula exists to avoid.</p></div></div>

<h2>Three-set problems</h2>
<div class="formula-box">
  <div class="fb-head">n(A ∪ B ∪ C)</div>
  <div class="formula-row"><div class="fname">Full formula</div>
    <div class="fexpr">n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)</div>
    <div class="fnote">Add singles, subtract doubles, add back the triple — the pattern alternates.</div></div>
  <div class="formula-row"><div class="fname">Region by region</div>
    <div class="fexpr">Start at the centre (all three), work outwards, finish outside</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Of 60 people, 25 read Daily Times, 18 read Guardian, 20 read Punch; 8 read Times and Guardian, 6 read Times and Punch, 5 read Guardian and Punch; 3 read all three. How many read none?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Sum the singles: 25 + 18 + 20 = 63</div>
    <div class="step"><div class="step-l">Step 2</div>
    Subtract the doubles: 63 − 8 − 6 − 5 = 44</div>
    <div class="step"><div class="step-l">Step 3</div>
    Add the triple back: 44 + 3 = <b>47</b> read at least one</div>
    <div class="step"><div class="step-l">Step 4</div>
    None = 60 − 47</div>
    <div class="ans">13 read none</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The alternating-sign pattern</b>
<p>+ − + for one, two and three sets. The sign for a term is <strong>positive if its index is odd, negative if even</strong>. Written this way, you never have to re-derive the formula in the exam.</p></div></div>

<h2>Proving identities with sets</h2>
<div class="example">
  <div class="example-h"><span class="num">4</span> Show that n(A ∪ B) = n(A) + n(B) − n(A ∩ B) using a diagram
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Adding n(A) and n(B) counts the intersection <b>twice</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    Subtract n(A ∩ B) once to leave it counted exactly once</div>
    <div class="ans">n(A ∪ B) = n(A) + n(B) − n(A ∩ B) ∎</div>
  </div>
</div>

<h2>De Morgan's laws</h2>
<div class="formula-box">
  <div class="fb-head">Complement of a union or intersection</div>
  <div class="formula-row"><div class="fname">First law</div>
    <div class="fexpr">(A ∪ B)′ = A′ ∩ B′</div></div>
  <div class="formula-row"><div class="fname">Second law</div>
    <div class="fexpr">(A ∩ B)′ = A′ ∪ B′</div>
    <div class="fnote">In words: "not (A or B)" = "not A and not B".</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Union becomes intersection under the complement</b>
<p>When you take the complement of a whole expression, the operator <strong>flips</strong>. It is the commonest slip in set identities — check every proof you write for a forgotten flip.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>⊆ is between sets; ∈ is between an element and a set.</li>
<li>Draw the diagram and fill the overlap first, then exclusive regions, then outside.</li>
<li>n(A ∪ B) = n(A) + n(B) − n(A ∩ B).</li>
<li>Three sets: + singles, − doubles, + triple.</li>
<li>Complement of a union is the intersection of the complements, and vice versa.</li>
</ul>
`,
  quiz: [
    { q: 'If A = {1, 2, 3} and B = {2, 3, 4}, then A ∩ B is', opts: ['{1, 2, 3, 4}', '{2, 3}', '{1, 4}', '{3}'], a: 1, why: 'The intersection contains only the elements common to both sets.' },
    { q: 'A ∪ B is', opts: ['Elements in both A and B', 'Elements in A or B or both', 'Elements in neither', 'Elements of B only'], a: 1, why: 'Union means everything belonging to at least one of the sets.' },
    { q: 'In a class of 40, 25 play football, 20 play tennis, 8 play both. The number who play neither is', opts: ['1', '3', '5', '13'], a: 1, why: 'Union = 25 + 20 − 8 = 37; 40 − 37 = 3.' },
    { q: 'The number playing exactly one of the two games in the previous question is', opts: ['17', '29', '25', '12'], a: 1, why: '(25 − 8) + (20 − 8) = 17 + 12 = 29.' },
    { q: 'The number who play football only is', opts: ['17', '25', '8', '20'], a: 0, why: '25 − 8 = 17 after removing those who play both.' },
    { q: 'If A = {2, 4, 6} and ξ = {1, 2, 3, 4, 5, 6}, then A′ =', opts: ['{1, 3, 5}', '{1, 2, 3}', '{2, 4, 6}', '{6}'], a: 0, why: 'The complement is every element of the universal set outside A.' },
    { q: 'The empty set is denoted by', opts: ['{0}', '∅', 'ξ', 'A′'], a: 1, why: 'It contains no elements at all.' },
    { q: 'Which symbol means "is a subset of"?', opts: ['∈', '⊂', '∩', '′'], a: 1, why: 'Every element of the first set lies in the second.' },
    { q: 'Which symbol means "is an element of"?', opts: ['∈', '⊂', '∪', '⊆'], a: 0, why: 'It relates a single member to a set.' },
    { q: 'For any two sets, n(A ∪ B) =', opts: ['n(A) + n(B)', 'n(A) + n(B) − n(A ∩ B)', 'n(A) × n(B)', 'n(A) − n(B)'], a: 1, why: 'The intersection is otherwise counted twice.' },
    { q: 'n(A) = 12, n(B) = 9, n(A ∩ B) = 4. Then n(A ∪ B) =', opts: ['17', '21', '13', '25'], a: 0, why: '12 + 9 − 4 = 17.' },
    { q: 'Of 60 people: 25 read Times, 18 read Guardian, 20 read Punch; 8 read Times and Guardian, 6 Times and Punch, 5 Guardian and Punch; 3 read all three. Those reading none number', opts: ['10', '13', '16', '3'], a: 1, why: '63 − 19 + 3 = 47; 60 − 47 = 13.' },
    { q: 'In the three-set calculation, the triple intersection is', opts: ['Subtracted twice', 'Added back once', 'Ignored', 'Subtracted once'], a: 1, why: 'It was removed three times with the doubles, so it must be restored once.' },
    { q: 'Every set is a subset of', opts: ['Itself', 'The empty set', 'Its complement', 'Any set'], a: 0, why: 'All elements of A are certainly in A.' },
    { q: 'The only subset of ∅ is', opts: ['∅', '{∅}', '{0}', 'It has none'], a: 0, why: 'The empty set is a subset of itself, and it is the only one.' },
    { q: '(A ∪ B)′ equals', opts: ['A′ ∩ B′', 'A′ ∪ B′', 'A ∩ B', 'A ∪ B′'], a: 0, why: "De Morgan's first law — the operator flips under the complement." },
    { q: '(A ∩ B)′ equals', opts: ['A′ ∩ B′', 'A′ ∪ B′', 'A ∪ B', '(A ∩ B)'], a: 1, why: "De Morgan's second law." },
    { q: 'If A ⊂ B then n(A ∩ B) =', opts: ['n(A)', 'n(B)', '0', 'n(A) − n(B)'], a: 0, why: 'Everything in A is inside B, so their intersection is A itself.' },
    { q: 'If A and B are disjoint, then n(A ∩ B) =', opts: ['n(A)', 'n(B)', '0', '1'], a: 2, why: 'Disjoint sets share no elements, so the overlap is empty.' },
    { q: 'n(A ∪ B) = 20, n(A) = 12, n(B) = 15. Then n(A ∩ B) =', opts: ['7', '3', '27', '5'], a: 0, why: '12 + 15 − intersection = 20, so the intersection is 7.' },
    { q: 'The set {x : x is an even number less than 10} is', opts: ['{1,2,3,4,5,6,7,8,9}', '{2, 4, 6, 8}', '{2,4,6,8,10}', '{0,2,4,6,8}'], a: 1, why: 'Strictly less than 10, so 10 is excluded.' },
    { q: 'If A = {a, b, c} and B = {b, c, d}, then A − B (difference) is', opts: ['{b, c}', '{a}', '{a, d}', '{c, d}'], a: 1, why: 'A − B keeps elements of A not in B.' },
    { q: 'n(ξ) = 50 and n(A) = 30. Then n(A′) =', opts: ['30', '20', '80', '50'], a: 1, why: 'The complement is everything outside A.' },
    { q: 'Two students are selected from a group. Choosing a subset of the group illustrates that', opts: ['The empty set is excluded', 'Every set has subsets', 'Sets must be finite', 'Intersection is empty'], a: 1, why: 'Any collection of members forms a valid subset.' },
    { q: 'Which of the following is FALSE for all sets A and B?', opts: ['A ∩ B ⊂ A', 'A ⊂ A ∪ B', 'A ∪ B = B ∪ A', 'A ∩ B = A ∪ B always'], a: 3, why: 'Union equals intersection only in the special case A = B.' },
    { q: 'In a survey of 100 people, 40 like tea, 35 like coffee and 20 like both. Those liking tea only number', opts: ['20', '40', '75', '45'], a: 0, why: '40 − 20 = 20.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'polynomials',
  title: 'Polynomials, Factors and Partial Fractions',
  blurb: 'Expansion, factorisation, the remainder and factor theorems, and splitting algebraic fractions.',
  time: '60 min',
  objectives: [
    'Expand and simplify products of brackets',
    'Factorise by common factor, grouping, and the usual patterns',
    'Apply the remainder and factor theorems',
    'Resolve a proper algebraic fraction into partial fractions'
  ],
  body: `
<p class="lead">A polynomial is an expression built from whole-number powers of x. The exam tests three skills: <strong>putting brackets together</strong>, <strong>taking them apart</strong>, and <strong>testing whether one polynomial divides another</strong>. All three follow from a small number of patterns.</p>

<h2>Expansion</h2>
<div class="formula-box">
  <div class="fb-head">Patterns worth knowing cold</div>
  <div class="formula-row"><div class="fname">Difference of two squares</div>
    <div class="fexpr">(a + b)(a − b) = a² − b²</div></div>
  <div class="formula-row"><div class="fname">Perfect square</div>
    <div class="fexpr">(a + b)² = a² + 2ab + b²</div></div>
  <div class="formula-row"><div class="fname">Perfect square (minus)</div>
    <div class="fexpr">(a − b)² = a² − 2ab + b²</div></div>
  <div class="formula-row"><div class="fname">General product</div>
    <div class="fexpr">(x + a)(x + b) = x² + (a + b)x + ab</div></div>
  <div class="formula-row"><div class="fname">Binomial expansion (used later)</div>
    <div class="fexpr">(a + b)² = a² + 2ab + b² · (a + b)³ = a³ + 3a²b + 3ab² + b³</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Expand (2x + 3)(x − 5)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Multiply each term of the first bracket by each of the second: 2x·x + 2x·(−5) + 3·x + 3·(−5)</div>
    <div class="step"><div class="step-l">Step 2</div>
    2x² − 10x + 3x − 15</div>
    <div class="step"><div class="step-l">Step 3</div>
    Collect like terms</div>
    <div class="ans">2x² − 7x − 15</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Expand and simplify (x + 4)² − (x − 2)²
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Method 1</div>
    Expand: (x² + 8x + 16) − (x² − 4x + 4) = x² + 8x + 16 − x² + 4x − 4</div>
    <div class="step"><div class="step-l">Method 2 (faster)</div>
    Difference of two squares with a = x + 4, b = x − 2: a² − b² = (a + b)(a − b)</div>
    <div class="step"><div class="step-l">Apply</div>
    (2x + 2)(6) = 12x + 12</div>
    <div class="ans">12x + 12</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Watch the minus sign in subtraction</b>
<p>When you subtract a bracket, <strong>every term inside changes sign</strong>. In (x² + 8x + 16) − (x² − 4x + 4) the −4x becomes +4x and the +4 becomes −4. Most expansion errors are sign errors, not multiplication errors.</p></div></div>

<h2>Factorisation</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Technique</th><th>Trigger</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td><b>Common factor</b></td><td>All terms share something</td><td>6x² + 9x = <b>3x(2x + 3)</b></td></tr>
    <tr><td><b>Difference of squares</b></td><td>a² − b²</td><td>9x² − 16 = <b>(3x + 4)(3x − 4)</b></td></tr>
    <tr><td><b>Grouping</b></td><td>Four terms in pairs</td><td>ax + ay + bx + by = <b>(a + b)(x + y)</b></td></tr>
    <tr><td><b>Trinomial</b></td><td>x² + bx + c</td><td>Find two numbers with sum b and product c</td></tr>
    <tr><td><b>Trinomial</b></td><td>ax² + bx + c</td><td>Split the middle term, then group</td></tr>
    <tr><td><b>Perfect square</b></td><td>a² ± 2ab + b²</td><td>(a ± b)²</td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">3</span> Factorise 2x² + 7x + 3
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Multiply a × c = 2 × 3 = <b>6</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    Find two numbers with product 6 and sum 7 → <b>6 and 1</b></div>
    <div class="step"><div class="step-l">Step 3</div>
    Split the middle term: 2x² + 6x + x + 3</div>
    <div class="step"><div class="step-l">Step 4</div>
    Group: 2x(x + 3) + 1(x + 3)</div>
    <div class="ans">(2x + 1)(x + 3)</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Check every factorisation by expanding</b>
<p>(2x + 1)(x + 3) = 2x² + 6x + x + 3 = 2x² + 7x + 3 ✓. It costs ten seconds and converts a guess into a certainty. Do it in the exam.</p></div></div>

<h2>Remainder and factor theorems</h2>
<div class="formula-box">
  <div class="fb-head">The two theorems</div>
  <div class="formula-row"><div class="fname">Remainder theorem</div>
    <div class="fexpr">The remainder when f(x) is divided by (x − a) is <b>f(a)</b></div></div>
  <div class="formula-row"><div class="fname">Factor theorem</div>
    <div class="fexpr">(x − a) is a factor of f(x) if and only if <b>f(a) = 0</b></div>
    <div class="fnote">It is the remainder theorem applied to a zero remainder.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the remainder when f(x) = 2x³ − 3x² + 4x − 5 is divided by (x − 2)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Here a = 2, so evaluate f(2)</div>
    <div class="step"><div class="step-l">Step 2</div>
    2(8) − 3(4) + 4(2) − 5 = 16 − 12 + 8 − 5</div>
    <div class="ans">7</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Show that (x − 1) is a factor of x³ − 3x² + 4x − 2
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Evaluate f(1): 1 − 3 + 4 − 2</div>
    <div class="step"><div class="step-l">Step 2</div>
    The result is 0</div>
    <div class="ans">f(1) = 0, so (x − 1) is a factor ∎</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Sign of the substitution</b>
<p>For (x + 3), substitute <strong>x = −3</strong>, not +3. The theorem always uses <em>a</em> where the factor is (x − a), so a positive factor means a negative substitution and vice versa.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Factorise x³ − 6x² + 11x − 6 completely
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Try x = 1: 1 − 6 + 11 − 6 = 0 → (x − 1) is a factor</div>
    <div class="step"><div class="step-l">Step 2</div>
    Divide to get x² − 5x + 6</div>
    <div class="step"><div class="step-l">Step 3</div>
    Factorise the quadratic: two numbers with sum −5 and product 6 → −2 and −3</div>
    <div class="ans">(x − 1)(x − 2)(x − 3)</div>
  </div>
</div>

<h2>Partial fractions</h2>
<p>Split a proper algebraic fraction into simpler fractions whose denominators are the factors of the original.</p>

<div class="formula-box">
  <div class="fb-head">Setting up the decomposition</div>
  <div class="formula-row"><div class="fname">Distinct linear factors</div>
    <div class="fexpr">P(x) ⁄ [(x + a)(x + b)] = A ⁄ (x + a) + B ⁄ (x + b)</div></div>
  <div class="formula-row"><div class="fname">Repeated linear factor</div>
    <div class="fexpr">… ⁄ (x + a)² = A ⁄ (x + a) + B ⁄ (x + a)²</div></div>
  <div class="formula-row"><div class="fname">Irreducible quadratic</div>
    <div class="fexpr">… ⁄ (x² + a²) = (Bx + C) ⁄ (x² + a²)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> Resolve (x + 3) ⁄ [(x + 1)(x + 2)] into partial fractions
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Write (x + 3) ⁄ [(x + 1)(x + 2)] = A ⁄ (x + 1) + B ⁄ (x + 2)</div>
    <div class="step"><div class="step-l">Step 2</div>
    Multiply through by (x + 1)(x + 2): x + 3 = A(x + 2) + B(x + 1)</div>
    <div class="step"><div class="step-l">Step 3</div>
    Put x = −1: 2 = A(1) → <b>A = 2</b></div>
    <div class="step"><div class="step-l">Step 4</div>
    Put x = −2: 1 = B(−1) → <b>B = −1</b></div>
    <div class="ans">2 ⁄ (x + 1) − 1 ⁄ (x + 2)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">8</span> Resolve 5 ⁄ [(x − 1)(x + 4)] into partial fractions
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    5 = A(x + 4) + B(x − 1)</div>
    <div class="step"><div class="step-l">Step 2</div>
    x = 1: 5 = 5A → A = 1</div>
    <div class="step"><div class="step-l">Step 3</div>
    x = −4: 5 = −5B → B = −1</div>
    <div class="ans">1 ⁄ (x − 1) − 1 ⁄ (x + 4)</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Substituting the roots is the fast method</b>
<p>Put the roots of the denominator in turn — each one kills one of the unknowns instantly. Only if a constant will not fall out this way should you compare coefficients instead. The shortcut is the intended method.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>(a + b)(a − b) = a² − b² and (a ± b)² = a² ± 2ab + b².</li>
<li>Factorise by common factor, grouping, difference of squares, then the quadratic patterns.</li>
<li>Remainder on division by (x − a) is f(a); factor when f(a) = 0.</li>
<li>Substitute the opposite sign to the one shown in the factor.</li>
<li>Partial fractions: multiply through, substitute each root, then read off the constants.</li>
</ul>
`,
  quiz: [
    { q: 'Expand (x + 3)(x + 5)', opts: ['x² + 8x + 15', 'x² + 15x + 8', 'x² + 8x + 8', 'x² + 3x + 5'], a: 0, why: 'Sum of 3 and 5 gives 8x; product 15.' },
    { q: '(2x + 3)(x − 5) expands to', opts: ['2x² − 7x − 15', '2x² − 13x − 15', '2x² + 7x − 15', '2x² − 7x + 15'], a: 0, why: '2x² − 10x + 3x − 15 = 2x² − 7x − 15.' },
    { q: '(x + 4)² equals', opts: ['x² + 16', 'x² + 8x + 16', 'x² + 4x + 16', 'x² + 8x + 8'], a: 1, why: 'a² + 2ab + b² with a = x, b = 4.' },
    { q: '(x − 3)² equals', opts: ['x² − 9', 'x² − 6x + 9', 'x² − 3x + 9', 'x² + 6x + 9'], a: 1, why: 'The middle term is 2·x·(−3) = −6x; the last term stays positive.' },
    { q: '(x + 5)(x − 5) equals', opts: ['x² − 25', 'x² + 25', 'x² − 10x + 25', 'x² − 25x'], a: 0, why: 'Difference of two squares: a² − b².' },
    { q: 'Factorise 6x² + 9x', opts: ['3x(2x + 3)', '6x(x + 9)', '3(2x² + 3x)', 'x(6x + 9)'], a: 0, why: 'The highest common factor of 6x² and 9x is 3x.' },
    { q: 'Factorise 9x² − 16', opts: ['(3x − 4)²', '(3x + 4)(3x − 4)', '(9x + 4)(x − 4)', '(x + 4)(x − 4)'], a: 1, why: 'Difference of two squares: (3x)² − 4².' },
    { q: 'Factorise x² + 7x + 12', opts: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x − 3)(x − 4)', '(x + 1)(x + 12)'], a: 0, why: '3 and 4 multiply to 12 and add to 7.' },
    { q: 'Factorise x² − 5x + 6', opts: ['(x − 2)(x − 3)', '(x + 2)(x + 3)', '(x − 1)(x − 6)', '(x + 2)(x − 3)'], a: 0, why: '−2 and −3 add to −5 and multiply to +6.' },
    { q: 'Factorise 2x² + 7x + 3', opts: ['(2x + 1)(x + 3)', '(2x + 3)(x + 1)', '(2x − 1)(x − 3)', '(x + 1)(2x + 3) only'], a: 0, why: 'Split 7x into 6x + x, then group: 2x(x + 3) + 1(x + 3).' },
    { q: 'ax + ay + bx + by factorises as', opts: ['(a + b)(x + y)', '(a + b)(x − y)', 'a(x + y) + b', '(ax + by)(x + y)'], a: 0, why: 'Group as a(x + y) + b(x + y).' },
    { q: 'The remainder when f(x) = x³ − 2x² + 3x − 1 is divided by (x − 1) is', opts: ['0', '1', '2', '3'], a: 1, why: 'f(1) = 1 − 2 + 3 − 1 = 1.' },
    { q: 'If (x − 2) is a factor of x² − 5x + k, then k =', opts: ['4', '6', '−6', '5'], a: 1, why: 'f(2) = 4 − 10 + k = 0, so k = 6.' },
    { q: 'Which of these is a factor of x³ − 4x² + 5x − 2?', opts: ['(x + 1)', '(x − 1)', '(x + 3)', '(x + 2)'], a: 1, why: 'f(1) = 1 − 4 + 5 − 2 = 0, so (x − 1) is a factor.' },
    { q: 'The remainder when f(x) = 2x³ + x − 5 is divided by (x + 1) is', opts: ['−8', '−2', '2', '8'], a: 0, why: 'Substitute x = −1: −2 − 1 − 5 = −8.' },
    { q: 'Factorise x³ − 6x² + 11x − 6', opts: ['(x + 1)(x + 2)(x + 3)', '(x − 1)(x − 2)(x − 3)', '(x − 1)(x − 2)(x + 3)', '(x − 1)²(x − 6)'], a: 1, why: 'f(1) = 0, f(2) = 0 and f(3) = 0.' },
    { q: 'If f(x) = x² + 3x − 4, then f(−2) equals', opts: ['−6', '2', '6', '−2'], a: 0, why: '4 − 6 − 4 = −6.' },
    { q: 'Partial fractions of (x + 3) ⁄ [(x + 1)(x + 2)] are', opts: ['1/(x+1) + 2/(x+2)', '2/(x+1) − 1/(x+2)', '−2/(x+1) + 1/(x+2)', '2/(x+1) + 1/(x+2)'], a: 1, why: 'x = −1 gives A = 2; x = −2 gives B = −1.' },
    { q: '5 ⁄ [(x − 1)(x + 4)] resolved is', opts: ['1/(x−1) − 1/(x+4)', '5/(x−1) + 5/(x+4)', '−1/(x−1) + 1/(x+4)', '1/(x−1) + 1/(x+4)'], a: 0, why: 'x = 1 gives A = 1; x = −4 gives B = −1.' },
    { q: 'x⁴ ÷ x² equals', opts: ['x²', 'x⁶', 'x', '2'], a: 0, why: 'Subtract indices: 4 − 2 = 2.' },
    { q: 'Which expression equals (a + b)³?', opts: ['a³ + b³', 'a³ + 3a²b + 3ab² + b³', 'a³ + 3ab + b³', 'a³ − 3a²b + 3ab² − b³'], a: 1, why: 'Binomial coefficients 1, 3, 3, 1.' },
    { q: 'Factorise 4x² − 25', opts: ['(2x − 5)²', '(2x + 5)(2x − 5)', '(4x − 5)(x + 5)', '(2x + 5)²'], a: 1, why: 'Difference of two squares: (2x)² − 5².' },
    { q: 'Simplify (x² − 9) ⁄ (x + 3)', opts: ['x − 3', 'x + 3', 'x² − 3', '9 − x'], a: 0, why: 'Numerator is (x + 3)(x − 3), so one factor cancels.' },
    { q: 'If (x + 2) divides x² + kx + 6 exactly, then k equals', opts: ['5', '3', '−3', '−5'], a: 0, why: 'f(−2) = 4 − 2k + 6 = 0 → 10 = 2k → k = 5. Check: x² + 5x + 6 = (x + 2)(x + 3) ✓' },
    { q: 'The number of terms in the expansion of (a + b)⁴ is', opts: ['4', '5', '8', '16'], a: 1, why: '(a + b)ⁿ has n + 1 terms.' },
    { q: 'Factorise x² − 7x + 12 by finding two numbers with product 12 and sum −7. They are', opts: ['−3 and −4', '3 and 4', '−2 and −6', '1 and 12'], a: 0, why: 'Both negative: product +12, sum −7.' }
  ]
});
