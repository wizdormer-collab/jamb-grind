/* JAMB 2027 Prep — Physics, Chapters 1–6 */

JAMB.addChapter('physics', {
  id: 'measurements',
  title: 'Measurements and Units',
  blurb: 'SI units, dimensions, significant figures and the errors you must be able to spot.',
  time: '50 min',
  objectives: [
    'State and use the seven SI base quantities and their units',
    'Convert between units and derive secondary units',
    'Apply dimensional analysis to check an equation',
    'Distinguish accuracy from precision and classify errors',
    'Work with significant figures, decimal places and percentage error'
  ],
  body: `
<p class="lead">Every number in Physics answers a question about the physical world — <i>how long</i>, <i>how heavy</i>, <i>how fast</i>. Before you can do any calculation, you must know what you are measuring, which unit you are measuring it in, and how much you can trust the number. That is the whole of this chapter.</p>

<h2>Why we measure at all</h2>
<p>A measurement is always a <strong>number</strong> paired with a <strong>unit</strong>. Writing "5" is meaningless; writing "5 metres" is a statement. In Physics we need agreed units so that a result obtained in Lagos means the same thing as a result obtained in London.</p>

<h3>The SI base quantities</h3>
<p>SI (Système International) has seven <strong>base quantities</strong>. Every other quantity in Physics is built from these seven.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Base quantity</th><th>SI unit</th><th>Symbol</th></tr></thead>
  <tbody>
    <tr><td>Length</td><td>metre</td><td>m</td></tr>
    <tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
    <tr><td>Time</td><td>second</td><td>s</td></tr>
    <tr><td>Electric current</td><td>ampere</td><td>A</td></tr>
    <tr><td>Temperature</td><td>kelvin</td><td>K</td></tr>
    <tr><td>Luminous intensity</td><td>candela</td><td>cd</td></tr>
    <tr><td>Amount of substance</td><td>mole</td><td>mol</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>What JAMB asks here</b>
<p>The gram is <b>not</b> a base unit — the base unit of mass is the <b>kilogram</b>. The base unit of length is the metre, not the centimetre. Learn all seven; the first three and electric current appear constantly.</p></div></div>

<h3>Derived units</h3>
<p>A <strong>derived unit</strong> is built by combining base units. You should be able to produce these on sight:</p>

<div class="formula-box">
  <div class="fb-head">Derived units you must know</div>
  <div class="formula-row"><div class="fname">Area</div><div class="fexpr">m<sup>2</sup> &nbsp;(square metre)</div><div class="fnote">length × length</div></div>
  <div class="formula-row"><div class="fname">Volume</div><div class="fexpr">m<sup>3</sup></div><div class="fnote">length × length × length</div></div>
  <div class="formula-row"><div class="fname">Speed / velocity</div><div class="fexpr">m s<sup>−1</sup> or m/s</div><div class="fnote">distance ÷ time</div></div>
  <div class="formula-row"><div class="fname">Density</div><div class="fexpr">kg m<sup>−3</sup></div><div class="fnote">mass ÷ volume</div></div>
  <div class="formula-row"><div class="fname">Force (newton)</div><div class="fexpr">kg m s<sup>−2</sup></div><div class="fnote">from F = ma</div></div>
  <div class="formula-row"><div class="fname">Energy / work / heat (joule)</div><div class="fexpr">kg m<sup>2</sup> s<sup>−2</sup></div><div class="fnote">also written N m</div></div>
  <div class="formula-row"><div class="fname">Pressure (pascal)</div><div class="fexpr">N m<sup>−2</sup> = kg m<sup>−1</sup> s<sup>−2</sup></div><div class="fnote">force ÷ area</div></div>
  <div class="formula-row"><div class="fname">Power (watt)</div><div class="fexpr">kg m<sup>2</sup> s<sup>−3</sup></div><div class="fnote">also written J/s</div></div>
  <div class="formula-row"><div class="fname">Frequency (hertz)</div><div class="fexpr">s<sup>−1</sup></div><div class="fnote">1 ÷ period</div></div>
</div>

<h2>Prefixes — making big and small numbers usable</h2>
<p>Scientific notation plus a prefix keeps numbers readable. The prefixes you must recognise:</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Prefix</th><th>Symbol</th><th>Factor</th></tr></thead>
  <tbody>
    <tr><td>tera</td><td>T</td><td>10<sup>12</sup></td></tr>
    <tr><td>giga</td><td>G</td><td>10<sup>9</sup></td></tr>
    <tr><td>mega</td><td>M</td><td>10<sup>6</sup></td></tr>
    <tr><td>kilo</td><td>k</td><td>10<sup>3</sup></td></tr>
    <tr><td>centi</td><td>c</td><td>10<sup>−2</sup></td></tr>
    <tr><td>milli</td><td>m</td><td>10<sup>−3</sup></td></tr>
    <tr><td>micro</td><td>µ</td><td>10<sup>−6</sup></td></tr>
    <tr><td>nano</td><td>n</td><td>10<sup>−9</sup></td></tr>
    <tr><td>pico</td><td>p</td><td>10<sup>−12</sup></td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The classic trap</b>
<p>1 MB is not 1000 bytes in the strict SI sense — it is 10<sup>6</sup>. But the trap JAMB really likes is <b>kilo = 1000 = 10<sup>3</sup></b>, and then asking you to convert km/h to m/s. See the worked example.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Convert 72 km/h to m/s</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1 — remove kilometres</div>
    72 km/h = 72 × 1000 m per hour = 72 000 m per hour</div>
    <div class="step"><div class="step-l">Step 2 — remove hours</div>
    There are 3600 s in one hour, so divide by 3600:<br>
    <span class="eq">72 000 ÷ 3600 = 20 m/s</span></div>
    <div class="step"><div class="step-l">Shortcut</div>
    Divide km/h by 3.6 to get m/s: <b>72 ÷ 3.6 = 20</b></div>
    <div class="ans">Answer: 20 m/s</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Convert 4500 µm to metres</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reason it through</div>
    "Micro" means 10<sup>−6</sup>, so 1 µm = 1 × 10<sup>−6</sup> m</div>
    <div class="step"><div class="step-l">Multiply</div>
    4500 × 10<sup>−6</sup> m = 4.5 × 10<sup>3</sup> × 10<sup>−6</sup> m</div>
    <div class="ans">Answer: 4.5 × 10<sup>−3</sup> m (i.e. 0.0045 m)</div>
  </div>
</div>

<h2>Dimensions</h2>
<p>The <strong>dimension</strong> of a quantity tells you which base quantities it is made of — not the numeric value. If length is [L], mass is [M] and time is [T], then:</p>

<div class="formula-box">
  <div class="fb-head">Dimensional formulae</div>
  <div class="formula-row"><div class="fname">Area</div><div class="fexpr">[L<sup>2</sup>]</div></div>
  <div class="formula-row"><div class="fname">Volume</div><div class="fexpr">[L<sup>3</sup>]</div></div>
  <div class="formula-row"><div class="fname">Velocity</div><div class="fexpr">[L T<sup>−1</sup>]</div><div class="fnote">distance ÷ time</div></div>
  <div class="formula-row"><div class="fname">Acceleration</div><div class="fexpr">[L T<sup>−2</sup>]</div></div>
  <div class="formula-row"><div class="fname">Force</div><div class="fexpr">[M L T<sup>−2</sup>]</div><div class="fnote">mass × acceleration</div></div>
  <div class="formula-row"><div class="fname">Work / Energy</div><div class="fexpr">[M L<sup>2</sup> T<sup>−2</sup>]</div></div>
  <div class="formula-row"><div class="fname">Pressure</div><div class="fexpr">[M L<sup>−1</sup> T<sup>−2</sup>]</div></div>
  <div class="formula-row"><div class="fname">Density</div><div class="fexpr">[M L<sup>−3</sup>]</div></div>
</div>

<p><strong>Why bother?</strong> Two uses:</p>
<ol>
<li><strong>Consistency check.</strong> Both sides of any valid equation must have the same dimensions. If they don't, the equation is wrong.</li>
<li><strong>Deriving relationships.</strong> If you know that period <i>T</i> depends on length <i>l</i> and <i>g</i>, you can combine [T], [L] and [L T<sup>−2</sup>] to find the powers — this is the standard "s dimensions" question.</li>
</ol>

<div class="note note-tip"><span class="ico">💡</span><div><b>Golden rule of dimensions</b>
<p>You can add or subtract only quantities with the <b>same</b> dimensions. You can multiply quantities of <b>different</b> dimensions freely. Dimensionless quantities (like angle, in radians) have no dimension.</p></div></div>

<h2>Accuracy, precision and errors</h2>
<p>These words are not synonyms, and JAMB tests the difference directly.</p>

<dl class="defs">
<dt>Accuracy</dt>
<dd>How close a measured value is to the <strong>true</strong> (accepted) value.</dd>
<dt>Precision</dt>
<dd>How close repeated measurements are to <em>each other</em>. A ruler marked in millimetres is more precise than one marked in centimetres — whether it is accurate is a separate question.</dd>
<dt>Systematic error</dt>
<dd>A consistent bias in one direction, caused by faulty apparatus or method — a zero error, or a worn-out spring balance. It repeats the same way every time and is <strong>not</strong> reduced by taking more readings.</dd>
<dt>Random error</dt>
<dd>Unpredictable scatter from the observer or environment — parallax, jitter, fluctuating temperature. <strong>Reduced</strong> by taking many readings and averaging.</dd>
</dl>

<h3>Zero error</h3>
<p>A <strong>zero error</strong> exists when an instrument does not read zero with nothing applied. It is a systematic error: it shifts every reading by the same amount and can be corrected by subtraction.</p>

<h2>Accuracy of measurement</h2>

<div class="formula-box">
  <div class="fb-head">The three calculations</div>
  <div class="formula-row"><div class="fname">Absolute error</div>
    <div class="fexpr">Δx = measured − true</div>
    <div class="fnote">Also called the error in the reading.</div></div>
  <div class="formula-row"><div class="fname">Percentage error</div>
    <div class="fexpr">% error = <span class="frac"><span>Δx</span><span>x</span></span> × 100%</div>
    <div class="fnote">The commonest exam calculation.</div></div>
  <div class="formula-row"><div class="fname">Sensitivity</div>
    <div class="fexpr">1 ÷ (smallest division)</div>
    <div class="fnote">An instrument with 0.1 mm divisions is more sensitive than one with 1 mm.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Percentage error</div>
  <div class="example-b">
    <div class="step"><div class="step-l">The measurement</div>
    A length is measured as 25.4 cm. The true value is 25.0 cm.</div>
    <div class="step"><div class="step-l">Step 1 — absolute error</div>
    Δx = 25.4 − 25.0 = 0.4 cm</div>
    <div class="step"><div class="step-l">Step 2 — divide by the measured value and multiply by 100</div>
    <span class="eq">% error = <span class="frac"><span>0.4</span><span>25.0</span></span> × 100% = 1.6%</span></div>
    <div class="ans">Answer: 1.6%</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Fractional form first</b>
<p>Write <b>Δx/x</b> before multiplying by 100. JAMB options are often given as fractions — spotting that 0.4/25.0 = 1/62.5 saves you the division entirely.</p></div></div>

<h2>Significant figures and decimal places</h2>
<p><strong>Significant figures</strong> count the digits that carry information — every non-zero digit, plus any zero between or after non-zero digits.</p>

<ul>
<li>0.00530 has <strong>3</strong> significant figures (the leading zeros don't count; the trailing zero after the 3 does).</li>
<li>1004 has <strong>4</strong> significant figures.</li>
<li>2.50 × 10<sup>3</sup> has <strong>3</strong> significant figures.</li>
</ul>

<p><strong>Decimal places</strong> simply count the digits after the decimal point: 0.00530 has <strong>5</strong> decimal places.</p>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The two questions are different</b>
<p>"Give your answer to 3 significant figures" and "give your answer to 3 decimal places" are different instructions producing different answers. Read the wording carefully — this is a very common way to lose marks.</p></div></div>

<h3>Rules for combining measurements</h3>
<ul>
<li><strong>Addition/subtraction:</strong> the answer carries the same number of <em>decimal places</em> as the least precise measurement.</li>
<li><strong>Multiplication/division:</strong> the answer carries the same number of <em>significant figures</em> as the measurement with the fewest significant figures.</li>
</ul>

<h2>Measurement instruments</h2>
<p>Know how each works, its <strong>least count</strong> (smallest division), and its typical use.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Instrument</th><th>Least count (typical)</th><th>Used for</th></tr></thead>
  <tbody>
    <tr><td>Metre rule</td><td>1 mm</td><td>Lengths a few cm to ~1 m</td></tr>
    <tr><td>Vernier callipers</td><td>0.1 mm, 0.05 mm or 0.02 mm</td><td>Internal and external diameters, depth</td></tr>
    <tr><td>Micrometer screw gauge</td><td>0.01 mm</td><td>Very small diameters — wire, sheet</td></tr>
    <tr><td>Spring balance</td><td>varies</td><td>Weight / force</td></tr>
    <tr><td>Stopwatch</td><td>0.01–0.1 s</td><td>Time intervals</td></tr>
    <tr><td>Beam balance</td><td>0.01 g or better</td><td>Mass by comparison</td></tr>
    <tr><td>Sphygmomanometer</td><td>2 mmHg</td><td>Blood pressure</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Vernier vs micrometer</b>
<p>A <b>micrometer screw gauge</b> gives the smaller least count (0.01 mm) and is therefore the more precise instrument. It is used for <b>wire diameter</b> and thin sheet. The vernier calliper is used when you need to measure an <b>internal</b> diameter or a <b>depth</b>, which a micrometer cannot do.</p></div></div>

<h2>Vector and scalar quantities — a preview</h2>
<p>Scalars have magnitude only (mass, time, temperature, speed). Vectors have magnitude <em>and</em> direction (displacement, velocity, acceleration, force, weight, momentum). The next chapter handles vectors properly — but you must be able to sort them from page one.</p>

<blockquote>If a quantity can be fully described by a single number plus a unit, it is a <strong>scalar</strong>. If it also needs a direction to be meaningful, it is a <strong>vector</strong>.</blockquote>

<h2>Chapter recap</h2>
<ul>
<li>Seven base quantities; the kilogram (not gram) is the base unit of mass.</li>
<li>Derived units come from base units — F = ma gives N = kg m s<sup>−2</sup>.</li>
<li>Divide km/h by 3.6 to get m/s.</li>
<li>Accuracy = closeness to true value; precision = repeatability.</li>
<li>Systematic errors are not fixed by averaging; random errors are.</li>
<li>% error = (Δx / x) × 100.</li>
<li>Multiply/divide → least significant figures. Add/subtract → least decimal places.</li>
</ul>
`,
  quiz: [
    { q: 'Which of the following is a base quantity in the SI system?', opts: ['Force', 'Electric current', 'Velocity', 'Energy'], a: 1, why: 'The seven base quantities are length, mass, time, electric current, temperature, luminous intensity and amount of substance. Force and energy are derived.' },
    { q: 'The SI unit of mass is the', opts: ['gram', 'kilogram', 'newton', 'pound'], a: 1, why: 'The base unit of mass is the kilogram (kg). The gram is not a base unit.' },
    { q: 'A student records 5.002 m, 5.004 m and 5.001 m for the same length. The true value is 5.100 m. Which statement is correct?', opts: ['The measurements are accurate but not precise', 'The measurements are precise but not accurate', 'The measurements are both accurate and precise', 'The measurements are neither'], a: 1, why: 'They cluster closely together (precise/repeatable) but sit far from the true value (not accurate). This pattern indicates a systematic error.' },
    { q: 'Which error is NOT reduced by taking several readings and averaging?', opts: ['Random error', 'Systematic error', 'Parallax error', 'Observational error'], a: 1, why: 'Systematic errors are consistent biases in the instrument or method. Averaging cancels scatter (random errors) but not a fixed offset.' },
    { q: '72 km/h is equal to', opts: ['7.2 m/s', '20 m/s', '259 m/s', '0.02 m/s'], a: 1, why: 'Divide by 3.6: 72 ÷ 3.6 = 20 m/s. Or 72000 m ÷ 3600 s = 20 m/s.' },
    { q: 'Which of these has three significant figures?', opts: ['0.00530', '5300', '0.53', '5.300'], a: 0, why: 'Leading zeros never count, so 0.00530 has 3 significant figures (5, 3, and the final 0, which follows a non-zero digit).' },
    { q: 'The dimension of force is', opts: ['[M L T⁻¹]', '[M L T⁻²]', '[M L² T⁻²]', '[M L⁻¹ T⁻²]'], a: 1, why: 'Force = mass × acceleration = M × L T⁻² = [M L T⁻²]. Option C is work/energy and option D is pressure.' },
    { q: 'A length is measured as 50.0 cm when the true value is 49.2 cm. The percentage error is', opts: ['0.8%', '1.6%', '1.63%', '8.0%'], a: 1, why: 'Absolute error = 50.0 − 49.2 = 0.8. % error = (0.8/49.2) × 100 ≈ 1.63%. Taking the measured value as reference gives 1.6% — the standard exam convention.' },
    { q: 'Which instrument has the smallest least count?', opts: ['Metre rule', 'Vernier callipers', 'Micrometer screw gauge', 'Spring balance'], a: 2, why: 'A micrometer screw gauge reads to 0.01 mm, compared with 0.1 mm for vernier callipers and 1 mm for a metre rule.' },
    { q: 'Which of the following is a vector quantity?', opts: ['Temperature', 'Speed', 'Displacement', 'Mass'], a: 2, why: 'Displacement needs both magnitude and direction. Speed, temperature and mass are fully described by a number alone.' },
    { q: 'The derived SI unit of pressure is', opts: ['Joule', 'Pascal', 'Newton', 'Watt'], a: 1, why: 'Pressure = force ÷ area, so its unit is N/m², which is given the name pascal (Pa).' },
    { q: 'In the equation v = u + at, the correct dimensional check gives', opts: ['[L T⁻¹] = [L T⁻¹]', '[L T⁻¹] = [L T⁻²]', '[L] = [L T⁻¹]', '[M L T⁻¹] = [M L T⁻¹]'], a: 0, why: 'Velocity [L T⁻¹], initial velocity [L T⁻¹], and acceleration × time = L T⁻² × T = L T⁻¹. Both sides match.' },
    { q: 'A zero error in an instrument is classified as', opts: ['A random error', 'A systematic error', 'A gross error', 'A reading error'], a: 1, why: 'A zero error produces the same offset every time — it is systematic and must be corrected by subtraction.' },
    { q: 'Which of the following quantities can be added together meaningfully?', opts: ['A force and a temperature', 'A length and an area', 'A velocity and another velocity', 'A mass and a time'], a: 2, why: 'Only quantities with the same dimension can be added. Two velocities share [L T⁻¹], so they can be summed.' },
    { q: '4500 µm expressed in metres is', opts: ['4.5 × 10⁻³ m', '4.5 × 10³ m', '4.5 × 10⁻⁶ m', '4.5 × 10⁻² m'], a: 0, why: 'Micro = 10⁻⁶, so 4500 µm = 4500 × 10⁻⁶ m = 4.5 × 10³ × 10⁻⁶ = 4.5 × 10⁻³ m.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'scalars-vectors',
  title: 'Scalars and Vectors',
  blurb: 'Adding forces, resolving components, relative velocity and the triangle rules.',
  time: '55 min',
  objectives: [
    'Distinguish scalar from vector quantities',
    'Add vectors by the triangle and parallelogram methods',
    'Resolve a vector into perpendicular components',
    'Use the tangent ratio for resultant direction',
    'Apply vector addition to relative velocity problems'
  ],
  body: `
<p class="lead">Some quantities only need a size: how hot, how heavy, how long. Others are meaningless without a direction: how far <em>north</em>, how hard <em>left</em>, how fast <em>downwards</em>. This chapter gives you the tools to combine directional quantities — the single most reusable skill in Mechanics.</p>

<h2>Sorting the two kinds</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Scalars (size only)</th><th>Vectors (size + direction)</th></tr></thead>
  <tbody>
    <tr><td>Distance, speed, mass, weight, energy, power, temperature, pressure, work, density, time</td><td>Displacement, velocity, acceleration, force, momentum, moment, impulse, electric field, magnetic flux</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The two that catch people</b>
<p><b>Weight</b> is a vector — it has the direction of gravity. <b>Mass</b> is a scalar. And note that <b>work</b> is a scalar (energy transferred), even though it is calculated from two vectors.</p></div></div>

<h3>Distance vs displacement</h3>
<p><strong>Distance</strong> is the total length of the path actually travelled — it can only increase. <strong>Displacement</strong> is the straight-line separation between start and finish, with a direction. A complete lap of a 400 m track gives a distance of 400 m but a displacement of <b>zero</b>.</p>

<h3>Speed vs velocity</h3>
<div class="eq"><b>speed</b> = <span class="frac"><span>distance</span><span>time</span></span> &nbsp;&nbsp;&nbsp; <b>velocity</b> = <span class="frac"><span>displacement</span><span>time</span></span></div>
<p>When direction does not change, speed and velocity have the same magnitude. When direction changes, average speed uses distance while average velocity uses displacement — and the two differ.</p>

<h2>Adding vectors</h2>

<h3>The triangle (head-to-tail) rule</h3>
<p>Draw the first vector to scale. From its <strong>head</strong>, draw the second vector to scale. The resultant is drawn from the tail of the first to the head of the second.</p>
<ul>
<li>Vectors in the <strong>same direction</strong>: add the magnitudes directly.</li>
<li>Vectors in <strong>opposite directions</strong>: subtract the magnitudes; direction follows the larger.</li>
<li>Perpendicular vectors: use Pythagoras for size and trigonometry for direction.</li>
</ul>

<div class="formula-box">
  <div class="fb-head">Resultant of two perpendicular vectors</div>
  <div class="formula-row"><div class="fname">Magnitude (Pythagoras)</div>
    <div class="fexpr">R = √(a² + b²)</div>
    <div class="fnote">For a 3-4-5 set, R = √(9 + 16) = 5.</div></div>
  <div class="formula-row"><div class="fname">Direction (from vector a)</div>
    <div class="fexpr">tan θ = <span class="frac"><span>b</span><span>a</span></span> &nbsp;⟹&nbsp; θ = tan<sup>−1</sup>(b/a)</div>
    <div class="fnote">θ is measured from vector a towards vector b.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Two perpendicular forces: 3 N east and 4 N north</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Magnitude</div>
    R = √(3² + 4²) = √(9 + 16) = √25 = 5 N</div>
    <div class="step"><div class="step-l">Direction</div>
    tan θ = 4/3 = 1.333…, so θ = tan<sup>−1</sup>(1.333) = 53.1°<br>
    measured from the 3 N (east) vector towards the 4 N (north) vector</div>
    <div class="ans">Answer: 5 N at 53.1° north of east</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Never add magnitudes blindly</b>
<p>A 3 N force and a 4 N force at right angles give <b>5 N</b>, not 7 N. Writing "3 + 4 = 7" is the single most common error in this topic. Reserve direct addition for vectors pointing in exactly the same direction.</p></div></div>

<h2>Resolving a vector</h2>
<p>Resolving means splitting one vector into two perpendicular components. Given a vector <b>F</b> at angle θ to the horizontal:</p>

<div class="formula-box">
  <div class="fb-head">Resolution</div>
  <div class="formula-row"><div class="fname">Horizontal component</div><div class="fexpr">F<sub>x</sub> = F cos θ</div></div>
  <div class="formula-row"><div class="fname">Vertical component</div><div class="fexpr">F<sub>y</sub> = F sin θ</div></div>
  <div class="formula-row"><div class="fname">Recovering the whole</div><div class="fexpr">F = √(F<sub>x</sub>² + F<sub>y</sub>²), &nbsp; tan θ = F<sub>y</sub> / F<sub>x</sub></div>
    <div class="fnote">θ is always measured from the axis used with cos.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Resolve a 10 N force acting at 30° to the horizontal</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Horizontal</div>
    F<sub>x</sub> = 10 cos 30° = 10 × 0.866 = 8.66 N</div>
    <div class="step"><div class="step-l">Vertical</div>
    F<sub>y</sub> = 10 sin 30° = 10 × 0.500 = 5.00 N</div>
    <div class="step"><div class="step-l">Check</div>
    √(8.66² + 5²) = √(75 + 25) = √100 = 10 ✓ and tan θ = 5/8.66 → 30° ✓</div>
    <div class="ans">Answer: 8.66 N horizontally, 5.00 N vertically</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Remember SOH-CAH-TOA</b>
<p>cos pairs with the axis the angle touches; sin pairs with the opposite axis. If you mix them up, your two components will still reconstruct the right magnitude but at the wrong angle — so always sanity-check against a sketch.</p></div></div>

<h2>Equilibrium of vectors</h2>
<p>If three coplanar forces hold a body at rest, they can be arranged into a closed triangle — the resultant is zero. Equivalently, the sum of all horizontal components is zero <em>and</em> the sum of all vertical components is zero:</p>
<div class="eq">ΣF<sub>x</sub> = 0 &nbsp;&nbsp; and &nbsp;&nbsp; ΣF<sub>y</sub> = 0</div>
<p>This component method is the reliable way to solve any statics problem — it always works, whereas the triangle method only works if you happen to spot the geometry.</p>

<h2>Relative velocity</h2>
<p>Relative velocity is the velocity of one object as seen from another:</p>
<div class="eq"><b>v</b><sub>AB</sub> = <b>v</b><sub>A</sub> − <b>v</b><sub>B</sub></div>
<p>Read <b>v</b><sub>AB</sub> as "velocity of A relative to B".</p>

<div class="example">
  <div class="example-h"><span class="num">3</span> Cars on the same road</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Situation</div>
    Car A travels east at 20 m/s. Car B travels east at 30 m/s. Find the velocity of A relative to B.</div>
    <div class="step"><div class="step-l">Apply the definition</div>
    v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub> = 20 − 30 = −10 m/s</div>
    <div class="step"><div class="step-l">Interpret the sign</div>
    The minus sign means "opposite to east" — so A appears to move west at 10 m/s as seen from B.</div>
    <div class="ans">Answer: 10 m/s westward</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Opposite directions</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Situation</div>
    A boat heads east at 8 m/s while the river flows west at 3 m/s.</div>
    <div class="step"><div class="step-l">Relative to the water, then the ground</div>
    Velocity of boat relative to water = 8 m/s east.<br>
    Velocity of boat relative to ground = 8 − 3 = 5 m/s east.</div>
    <div class="ans">Answer: 5 m/s east</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The river problem, made simple</b>
<p>For a river flowing directly across the boat's heading, cross-stream and downstream components are perpendicular — use Pythagoras for the resultant speed, then tan θ for the direction. The boat must aim <b>upstream</b> at the same angle to go straight across.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Scalars: size only. Vectors: size + direction. Weight is a vector; mass is not.</li>
<li>Perpendicular vectors: R = √(a² + b²), tan θ = b/a — never a + b.</li>
<li>Resolve with F cos θ along the angle's axis, F sin θ perpendicular.</li>
<li>Equilibrium: ΣF<sub>x</sub> = 0 and ΣF<sub>y</sub> = 0 simultaneously.</li>
<li>v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>; sign gives direction.</li>
</ul>
`,
  quiz: [
    { q: 'Which of the following is a scalar quantity?', opts: ['Velocity', 'Momentum', 'Distance', 'Force'], a: 2, why: 'Distance needs only a size. Velocity, momentum and force all require a direction to be fully described.' },
    { q: 'A boy walks 5 m north, then 5 m south. His distance travelled and displacement are respectively', opts: ['10 m, 0 m', '0 m, 10 m', '10 m, 10 m north', '5 m, 5 m north'], a: 0, why: 'Distance adds the path: 5 + 5 = 10 m. Displacement is start-to-finish separation, and he ends where he began, so 0 m.' },
    { q: 'Two forces of 3 N and 4 N act at right angles to each other. Their resultant is', opts: ['7 N', '5 N', '1 N', '12 N'], a: 1, why: 'R = √(3² + 4²) = √25 = 5 N. You must never add perpendicular vectors directly.' },
    { q: 'The resultant in the question above acts at an angle of', opts: ['37° to the 3 N force', '53° to the 3 N force', '45° to the 3 N force', '60° to the 3 N force'], a: 1, why: 'tan θ = 4/3 → θ = 53.1° measured from the 3 N force towards the 4 N force.' },
    { q: 'A 20 N force acts at 60° to the horizontal. Its vertical component is', opts: ['10 N', '17.3 N', '20 N', '5 N'], a: 1, why: 'Vertical = F sin θ = 20 sin 60° = 20 × 0.866 = 17.3 N.' },
    { q: 'Weight is best described as', opts: ['A scalar quantity', 'A vector quantity', 'A derived scalar', 'Neither scalar nor vector'], a: 1, why: 'Weight is the force of gravity on a body — it has both magnitude and a direction (towards the Earth’s centre).' },
    { q: 'Car A moves east at 30 m/s and car B moves east at 18 m/s. Velocity of A relative to B is', opts: ['48 m/s east', '12 m/s east', '12 m/s west', '18 m/s east'], a: 1, why: 'v_AB = v_A − v_B = 30 − 18 = 12 m/s. Positive, so in the direction of motion — east.' },
    { q: 'A boat can travel at 6 m/s in still water and the river flows at 8 m/s. The speed of the boat relative to the ground, moving directly downstream, is', opts: ['2 m/s', '14 m/s', '48 m/s', '10 m/s'], a: 1, why: 'Same direction means the magnitudes add: 6 + 8 = 14 m/s.' },
    { q: 'Which pair are both vector quantities?', opts: ['Speed and distance', 'Work and energy', 'Acceleration and momentum', 'Pressure and temperature'], a: 2, why: 'Acceleration and momentum both require a direction. Work, energy, pressure and temperature are scalars.' },
    { q: 'Forces of 6 N and 8 N act at right angles. The resultant is', opts: ['14 N', '10 N', '2 N', '48 N'], a: 1, why: 'R = √(6² + 8²) = √(36 + 64) = √100 = 10 N — the 6-8-10 triangle.' },
    { q: 'A body is in equilibrium under coplanar forces. Which must be true?', opts: ['The forces must be equal in magnitude', 'ΣF_x = 0 and ΣF_y = 0', 'The resultant force must be downward', 'Only two forces can act on it'], a: 1, why: 'Equilibrium means zero resultant, which for coplanar forces requires the horizontal and vertical components both to sum to zero.' },
    { q: 'Resolving a vector means', opts: ['Adding two vectors together', 'Splitting one vector into two perpendicular components', 'Finding the magnitude of the resultant', 'Measuring the angle between two vectors'], a: 1, why: 'Resolution is the reverse of composition — it splits a single vector into components along chosen axes.' },
    { q: 'A man walks 8 m east then 6 m north. His displacement from the start is', opts: ['14 m', '10 m', '2 m', '14 m north-east'], a: 1, why: 'Perpendicular legs: √(8² + 6²) = √(64 + 36) = √100 = 10 m, at tan⁻¹(6/8) = 36.9° north of east.' },
    { q: 'Which statement about the triangle of forces is correct?', opts: ['Three forces keeping a body at rest can form a closed triangle', 'Forces always add to the sum of their magnitudes', 'A closed triangle means a non-zero resultant', 'Only equal forces can form a triangle'], a: 0, why: 'If you draw the forces head-to-tail and they close back to the start, the displacement from tail-of-first to head-of-last is zero — no resultant.' },
    { q: 'A 50 N force acts at 30° to the vertical. Its horizontal component is', opts: ['43.3 N', '25 N', '50 N', '28.9 N'], a: 1, why: 'The horizontal axis is opposite the 30° angle measured from the vertical, so use sin: 50 sin 30° = 25 N.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'motion',
  title: 'Motion (Kinematics)',
  blurb: 'Equations of uniform acceleration, free fall, graphs and projectile motion.',
  time: '60 min',
  objectives: [
    'Define and distinguish displacement, velocity and acceleration',
    'Apply the four equations of uniform acceleration',
    'Solve free-fall and vertical projection problems',
    'Interpret velocity–time and displacement–time graphs',
    'Analyse projectile motion as two independent components'
  ],
  body: `
<p class="lead">Kinematics describes <em>how</em> things move without asking <em>why</em>. Almost every JAMB mechanics question reduces to four equations — but only when acceleration is constant. Learn to recognise when they apply, and you have solved most of the paper.</p>

<h2>The basic quantities</h2>
<dl class="defs">
<dt>Displacement (s)</dt>
<dd>Distance in a stated direction. SI unit: metre (m).</dd>
<dt>Velocity (u, v)</dt>
<dd>Rate of change of displacement. u = initial, v = final. Unit: m/s.</dd>
<dt>Acceleration (a)</dt>
<dd>Rate of change of velocity. Unit: m/s².</dd>
</dl>

<div class="eq">a = <span class="frac"><span>change in velocity</span><span>time taken</span></span> = <span class="frac"><span>v − u</span><span>t</span></span></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Sign convention decides everything</b>
<p>Pick a direction as positive and stick to it. Standard choice: <b>up is positive</b>, so acceleration due to gravity is <b>a = −9.8 m/s²</b> (or −10 m/s² when the question says so). If a ball is thrown upward at 30 m/s, then u = +30 and a = −9.8. Getting the sign wrong wrecks the whole calculation.</p></div></div>

<h2>The four equations of uniform acceleration</h2>
<div class="formula-box">
  <div class="fb-head">Memorise these — every kinematics question uses one</div>
  <div class="formula-row"><div class="fname">1 · no t</div><div class="fexpr">v² = u² + 2as</div></div>
  <div class="formula-row"><div class="fname">2 · no s</div><div class="fexpr">v = u + at</div></div>
  <div class="formula-row"><div class="fname">3 · no v</div><div class="fexpr">s = ut + ½at²</div></div>
  <div class="formula-row"><div class="fname">4 · no a</div><div class="fexpr">s = ½(u + v)t</div></div>
</div>

<p><strong>Method:</strong> write down u, v, a, s, t; circle the three you know and the one you need; pick the equation missing the quantity you don't have. That single habit solves the problem.</p>

<div class="example">
  <div class="example-h"><span class="num">1</span> Braking car</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A car moving at 20 m/s brakes to rest in 5 s. Find the deceleration and the distance travelled.</div>
    <div class="step"><div class="step-l">Step 1 — set up</div>
    u = 20 m/s, v = 0 m/s, t = 5 s. Need a, then s.</div>
    <div class="step"><div class="step-l">Step 2 — deceleration (v = u + at)</div>
    0 = 20 + a(5) → 5a = −20 → <b>a = −4 m/s²</b> (4 m/s² deceleration)</div>
    <div class="step"><div class="step-l">Step 3 — distance (s = ½(u+v)t)</div>
    s = ½(20 + 0)(5) = ½ × 20 × 5 = 50 m</div>
    <div class="ans">Answer: 4 m/s² deceleration, 50 m</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Distance to stop without knowing time</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A train at 30 m/s decelerates at 0.5 m/s². How far before it stops?</div>
    <div class="step"><div class="step-l">Choose the equation</div>
    No time given → use v² = u² + 2as</div>
    <div class="step"><div class="step-l">Substitute</div>
    0² = 30² + 2(−0.5)s<br>0 = 900 − s → <b>s = 900 m</b></div>
    <div class="ans">Answer: 900 m</div>
  </div>
</div>

<h2>Free fall</h2>
<p>Free fall is vertical motion with a = g, ignoring air resistance. Near the Earth's surface:</p>
<div class="formula-box">
  <div class="fb-head">Free fall</div>
  <div class="formula-row"><div class="fname">Acceleration</div><div class="fexpr">g = 9.8 m/s² (≈ 10 m/s² in exams)</div><div class="fnote">Directed downwards, so take it as negative when up is positive.</div></div>
  <div class="formula-row"><div class="fname">Max height (thrown up at u)</div><div class="fexpr">H = <span class="frac"><span>u²</span><span>2g</span></span></div><div class="fnote">Because v = 0 at the top.</div></div>
  <div class="formula-row"><div class="fname">Time to reach max height</div><div class="fexpr">T = <span class="frac"><span>u</span><span>g</span></span></div></div>
  <div class="formula-row"><div class="fname">Total flight (up and back down)</div><div class="fexpr">t<sub>total</sub> = <span class="frac"><span>2u</span><span>g</span></span></div></div>
  <div class="formula-row"><div class="fname">Speed after falling from rest</div><div class="fexpr">v = √(2gh)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Ball thrown upward</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A ball is thrown vertically upward at 40 m/s. Take g = 10 m/s². Find max height and total time.</div>
    <div class="step"><div class="step-l">Max height (v² = u² + 2as, v = 0)</div>
    0 = 40² + 2(−10)s → 20s = 1600 → <b>s = 80 m</b></div>
    <div class="step"><div class="step-l">Time to top (v = u + at)</div>
    0 = 40 − 10t → t = 4 s</div>
    <div class="step"><div class="step-l">Total flight</div>
    Up and down are symmetric → total = 2 × 4 = <b>8 s</b></div>
    <div class="ans">Answer: 80 m high, 8 s total</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Two facts about projectiles that get asked constantly</b>
<p>1. At the highest point, <b>vertical velocity is zero but horizontal velocity is unchanged</b> — the acceleration at the top is still g downwards. 2. The time of flight is the same for a projectile launched and landing at the same height, regardless of speed.</p></div></div>

<h2>Interpreting graphs</h2>

<h3>Velocity–time graph</h3>
<ul>
<li><strong>Gradient</strong> = acceleration. Steeper means greater acceleration; a negative gradient means deceleration.</li>
<li><strong>Area under the graph</strong> = displacement. Use triangles and rectangles — for a curve, count squares.</li>
<li><strong>A horizontal line</strong> = constant velocity (zero acceleration).</li>
</ul>

<h3>Displacement–time graph</h3>
<ul>
<li><strong>Gradient</strong> = velocity. A steeper line is a higher speed.</li>
<li><strong>A horizontal line</strong> = at rest.</li>
<li>A straight line = uniform velocity; a curve = changing velocity.</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Do not confuse the two graphs</b>
<p>On a <b>displacement–time</b> graph, the gradient is velocity. On a <b>velocity–time</b> graph, the gradient is acceleration and the <b>area</b> is displacement. Swapping these is the most frequent graph error in JAMB.</p></div></div>

<h3>Accelerating from a graph</h3>
<div class="example">
  <div class="example-h"><span class="num">4</span> Gradient of a v–t graph</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reading the graph</div>
    A velocity–time graph rises uniformly from 0 to 30 m/s over 10 s.</div>
    <div class="step"><div class="step-l">Gradient = acceleration</div>
    a = Δv / Δt = (30 − 0) / 10 = <b>3 m/s²</b></div>
    <div class="step"><div class="step-l">Area = displacement</div>
    Area of triangle = ½ × 10 × 30 = <b>150 m</b></div>
    <div class="ans">Answer: 3 m/s², displacement 150 m</div>
  </div>
</div>

<h2>Terminal velocity</h2>
<p>A falling body experiences weight downwards and air resistance upwards. As speed increases, air resistance grows until it equals the weight — then the resultant force is zero, acceleration is zero, and the body falls at a constant <strong>terminal velocity</strong>.</p>
<div class="note note-fact"><span class="ico">📌</span><div><b>Key idea</b>
<p>Terminal velocity is reached when <b>air resistance = weight</b>, not when air resistance is zero. A parachutist reaches a high terminal velocity before the chute opens, then a much lower one after.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Four equations — pick the one missing the quantity you don't have.</li>
<li>Sign convention: up positive → g = −9.8 m/s² (or −10).</li>
<li>At projectile maximum height, v<sub>vertical</sub> = 0 but horizontal velocity continues unchanged.</li>
<li>v–t gradient = acceleration, v–t area = displacement; s–t gradient = velocity.</li>
<li>Terminal velocity: air resistance equals weight, so a = 0.</li>
</ul>
`,
  quiz: [
    { q: 'A body starts from rest and accelerates at 4 m/s² for 6 s. The distance covered is', opts: ['24 m', '48 m', '72 m', '12 m'], a: 2, why: 's = ut + ½at² = 0 + ½(4)(6²) = ½ × 4 × 36 = 72 m.' },
    { q: 'A car decelerating from 30 m/s to rest in 6 s travels', opts: ['5 m', '90 m', '180 m', '15 m'], a: 1, why: 's = ½(u + v)t = ½(30 + 0)(6) = 90 m.' },
    { q: 'The equation that does NOT involve time is', opts: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 's = ½(u + v)t'], a: 2, why: 'v² = u² + 2as links velocity, acceleration and distance with no t — the right choice when time is unknown.' },
    { q: 'A stone dropped from rest hits the ground at 49 m/s. The height fallen (g = 9.8 m/s²) is', opts: ['5 m', '122.5 m', '245 m', '9.8 m'], a: 1, why: 'v² = u² + 2as → 49² = 0 + 2(9.8)s → 2401 = 19.6s → s = 122.5 m.' },
    { q: 'A ball is thrown upward at 30 m/s. Taking g = 10 m/s², its maximum height is', opts: ['45 m', '90 m', '30 m', '15 m'], a: 0, why: 'H = u²/2g = 900/20 = 45 m.' },
    { q: 'At the highest point of a projectile’s path, its acceleration is', opts: ['Zero', 'Directed horizontally', 'Directed vertically downward', 'Directed vertically upward'], a: 2, why: 'Gravity acts throughout the flight. Only the vertical velocity vanishes at the top; acceleration remains g downward.' },
    { q: 'On a velocity–time graph, the gradient represents', opts: ['Displacement', 'Velocity', 'Distance', 'Acceleration'], a: 3, why: 'Gradient = change in velocity ÷ change in time = acceleration.' },
    { q: 'On a displacement–time graph, the area under the curve represents', opts: ['Velocity', 'Acceleration', 'Nothing useful', 'Time'], a: 2, why: 'Neither gradient nor area of an s–t graph gives a standard quantity. Displacement × time has no physical meaning.' },
    { q: 'A body reaches terminal velocity when', opts: ['Air resistance is zero', 'Air resistance equals its weight', 'Its acceleration is maximum', 'It first begins to fall'], a: 1, why: 'When upward air resistance balances downward weight, the resultant force is zero, so velocity stops changing.' },
    { q: 'A car accelerates uniformly from 10 m/s to 30 m/s in 5 s. Its acceleration is', opts: ['6 m/s²', '4 m/s²', '8 m/s²', '2 m/s²'], a: 1, why: 'a = (v − u)/t = (30 − 10)/5 = 20/5 = 4 m/s².' },
    { q: 'How long does a body take to fall freely from rest through 20 m? (g = 10 m/s²)', opts: ['4 s', '2 s', '1 s', '20 s'], a: 1, why: 's = ½gt² → 20 = ½(10)t² = 5t² → t² = 4 → t = 2 s.' },
    { q: 'A velocity–time graph that is a horizontal straight line indicates', opts: ['Constant acceleration', 'Constant velocity', 'Rest', 'Increasing velocity'], a: 1, why: 'The value on the v axis never changes, so velocity is constant — and the gradient (acceleration) is zero.' },
    { q: 'A train travelling at 25 m/s decelerates at 0.5 m/s². The distance to stop is', opts: ['625 m', '50 m', '125 m', '1250 m'], a: 0, why: 'v² = u² + 2as → 0 = 625 + 2(−0.5)s → s = 625 m.' },
    { q: 'The total time of flight for a projectile launched at 50 m/s and returning to the same level (g = 10 m/s²) is', opts: ['5 s', '10 s', '2.5 s', '20 s'], a: 1, why: 't = 2u/g = 2(50)/10 = 10 s.' },
    { q: 'A body is dropped and falls freely for 3 s. Its speed is (g = 10 m/s²)', opts: ['3 m/s', '10 m/s', '30 m/s', '45 m/s'], a: 2, why: 'v = u + at = 0 + 10(3) = 30 m/s.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'dynamics',
  title: 'Dynamics — Newton’s Laws of Motion',
  blurb: 'F = ma, momentum, impulse and the law of conservation of momentum.',
  time: '55 min',
  objectives: [
    "State Newton's three laws and give an example of each",
    'Use F = ma to solve single- and multi-body problems',
    'Define momentum and impulse and apply conservation of momentum',
    'Explain the distinction between mass and weight',
    'Distinguish between inelastic and elastic collisions'
  ],
  body: `
<p class="lead">Kinematics told you <em>how</em> things move. Dynamics explains <em>why</em> — the connection between the forces acting on a body and the motion they produce. Everything in this chapter rests on one equation: <strong>F = ma</strong>.</p>

<h2>Newton’s Three Laws</h2>

<h3>First Law — Inertia</h3>
<blockquote>A body remains at rest, or continues in uniform motion in a straight line, unless acted upon by a resultant external force.</blockquote>
<p><strong>Inertia</strong> is this reluctance to change state — the property that makes a body resist a change in its motion. It is why a passenger lurches forward when a bus stops sharply: the body keeps moving because no forward force acts on it.</p>
<div class="note note-exam"><span class="ico">🎯</span><div><b>Mass as a measure of inertia</b>
<p>The more massive a body, the greater its inertia, and the harder it is to change its state of motion. Mass is the quantitative measure of inertia — this is a very common one-mark question.</p></div></div>

<h3>Second Law — Force and acceleration</h3>
<blockquote>The rate of change of momentum of a body is directly proportional to the applied resultant force, and takes place in the direction of that force.</blockquote>
<div class="formula-box">
  <div class="fb-head">Newton's second law</div>
  <div class="formula-row"><div class="fname">The equation</div><div class="fexpr">F = ma</div><div class="fnote">Force in newtons, mass in kg, acceleration in m/s².</div></div>
  <div class="formula-row"><div class="fname">Equivalent form</div><div class="fexpr">F = <span class="frac"><span>Δ(mv)</span><span>Δt</span></span></div><div class="fnote">Rate of change of momentum — this is the original statement.</div></div>
  <div class="formula-row"><div class="fname">Weight</div><div class="fexpr">W = mg</div><div class="fnote">g ≈ 9.8 m/s² (10 m/s² in most exam questions).</div></div>
</div>

<h3>Third Law — Action and reaction</h3>
<blockquote>When body A exerts a force on body B, body B exerts an equal and opposite force on body A.</blockquote>
<div class="note note-warn"><span class="ico">⚠</span><div><b>The trap about the Third Law</b>
<p>The equal and opposite forces act on <b>different bodies</b>. They never cancel, because they do not act on the same object. If action and reaction cancelled, no object could ever accelerate. On a free-body diagram, each body gets its own diagram.</p></div></div>

<h2>Working with F = ma</h2>
<div class="example">
  <div class="example-h"><span class="num">1</span> A pushed block</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 5 kg block on a smooth horizontal surface is pushed by a 20 N force. Find its acceleration.</div>
    <div class="step"><div class="step-l">Apply F = ma</div>
    20 = 5 × a → a = 20 ÷ 5</div>
    <div class="ans">Answer: 4 m/s²</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Two bodies tied together</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Bodies of 4 kg and 6 kg are connected by a light string and pulled by a 30 N force. Neglect friction. Find the acceleration and the tension.</div>
    <div class="step"><div class="step-l">Step 1 — treat them as one system</div>
    Total mass = 4 + 6 = 10 kg<br>30 = 10 × a → <b>a = 3 m/s²</b></div>
    <div class="step"><div class="step-l">Step 2 — isolate one body to find tension</div>
    For the trailing 4 kg body the only horizontal force is the tension:<br>T = 4 × 3 = <b>12 N</b></div>
    <div class="step"><div class="step-l">Check with the other body</div>
    Net force on the 6 kg body = 30 − 12 = 18 N; 18 ÷ 6 = 3 m/s² ✓</div>
    <div class="ans">Answer: a = 3 m/s², tension T = 12 N</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>System first, then isolate</b>
<p>Combine all bodies to find the shared acceleration, then break them apart to find internal forces such as tension or contact force. This two-step routine works every time.</p></div></div>

<h2>Mass versus weight</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Mass</th><th>Weight</th></tr></thead>
  <tbody>
    <tr><td><b>Nature</b></td><td>Scalar — amount of matter</td><td>Vector — force of gravity</td></tr>
    <tr><td><b>SI unit</b></td><td>kilogram (kg)</td><td>newton (N)</td></tr>
    <tr><td><b>Measured by</b></td><td>Beam balance</td><td>Spring balance</td></tr>
    <tr><td><b>Changes with place?</b></td><td>No — constant everywhere</td><td>Yes — depends on g</td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">3</span> Mass to weight</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A body has mass 5 kg on Earth (g = 9.8 m/s²). Find its weight.</div>
    <div class="step"><div class="step-l">Apply W = mg</div>
    W = 5 × 9.8 = <b>49 N</b></div>
    <div class="step"><div class="step-l">The same mass on the Moon (g = 1.6 m/s²)</div>
    W = 5 × 1.6 = <b>8 N</b> — the mass is still 5 kg.</div>
    <div class="ans">Answer: 49 N on Earth; mass unchanged at 5 kg</div>
  </div>
</div>

<h2>Momentum and impulse</h2>
<div class="formula-box">
  <div class="fb-head">Momentum and impulse</div>
  <div class="formula-row"><div class="fname">Momentum</div><div class="fexpr">p = mv</div><div class="fnote">kg m s⁻¹ — a vector, in the direction of v.</div></div>
  <div class="formula-row"><div class="fname">Impulse</div><div class="fexpr">Impulse = F Δt = Δ(mv)</div><div class="fnote">N s — equal to the change in momentum.</div></div>
  <div class="formula-row"><div class="fname">Second law restated</div><div class="fexpr">F = <span class="frac"><span>Δp</span><span>Δt</span></span></div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Impulse from a force and time</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 200 N force acts for 0.05 s. Find the impulse and the change in momentum of a 2 kg body from rest.</div>
    <div class="step"><div class="step-l">Impulse</div>
    Impulse = FΔt = 200 × 0.05 = <b>10 N s</b></div>
    <div class="step"><div class="step-l">Change in momentum equals impulse</div>
    Δp = 10 kg m/s → 2(v − 0) = 10 → <b>v = 5 m/s</b></div>
    <div class="ans">Answer: 10 N s, final speed 5 m/s</div>
  </div>
</div>

<h2>Conservation of momentum</h2>
<blockquote>For a system of colliding bodies, the total momentum before collision equals the total momentum after collision, provided no external resultant force acts.</blockquote>
<div class="eq">m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub></div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Perfectly inelastic collision</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 4 kg trolley moving at 6 m/s collides with a stationary 2 kg trolley and they move off together. Find the common velocity.</div>
    <div class="step"><div class="step-l">Momentum before</div>
    (4 × 6) + (2 × 0) = 24 kg m/s</div>
    <div class="step"><div class="step-l">Momentum after</div>
    (4 + 2)v = 6v</div>
    <div class="step"><div class="step-l">Equate</div>
    6v = 24 → <b>v = 4 m/s</b></div>
    <div class="ans">Answer: 4 m/s</div>
  </div>
</div>

<h3>Elastic vs inelastic</h3>
<ul>
<li><strong>Perfectly elastic:</strong> momentum <em>and</em> kinetic energy both conserved. Objects separate after impact.</li>
<li><strong>Inelastic (including perfectly inelastic):</strong> momentum conserved, but kinetic energy is <strong>not</strong> — some becomes heat, sound or deformation. In a perfectly inelastic collision the bodies stick together.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Which quantity is always conserved?</b>
<p><b>Momentum is always conserved in a collision. Kinetic energy is not</b> (except when the question explicitly says "perfectly elastic"). This exact contrast is a favourite JAMB question.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>First law: inertia; mass measures inertia.</li>
<li>Second law: F = ma, equivalent to F = Δ(mv)/Δt.</li>
<li>Third law: equal and opposite forces act on <b>different</b> bodies.</li>
<li>Weight = mg, changes with g; mass does not change.</li>
<li>Impulse = FΔt = change in momentum.</li>
<li>Momentum always conserved in collisions; kinetic energy only in elastic ones.</li>
</ul>
`,
  quiz: [
    { q: "A body of mass 8 kg accelerates at 3 m/s². The resultant force acting on it is", opts: ['2.67 N', '24 N', '11 N', '0.375 N'], a: 1, why: 'F = ma = 8 × 3 = 24 N.' },
    { q: 'Newton’s first law of motion is also called the law of', opts: ['Momentum', 'Inertia', 'Acceleration', 'Gravitation'], a: 1, why: 'The first law states that a body resists any change to its state of motion — this resistance is inertia.' },
    { q: 'A 50 N force acts on a mass of 20 kg initially at rest for 4 s. Its final speed is', opts: ['10 m/s', '40 m/s', '2.5 m/s', '400 m/s'], a: 0, why: 'a = F/m = 50/20 = 2.5 m/s²; v = u + at = 0 + 2.5(4) = 10 m/s.' },
    { q: 'The SI unit of momentum is', opts: ['N s', 'kg m s⁻¹', 'Both A and B are correct', 'J'], a: 2, why: 'Impulse FΔt has units N s, and momentum mv has units kg m s⁻¹ — these are dimensionally identical.' },
    { q: 'A 3 kg ball moving at 10 m/s is brought to rest in 0.5 s. The average force applied is', opts: ['60 N', '15 N', '30 N', '6 N'], a: 0, why: 'Δp = 3 × 10 = 30 kg m/s; F = Δp/Δt = 30/0.5 = 60 N.' },
    { q: 'Which of the following is conserved in all collisions?', opts: ['Kinetic energy', 'Total momentum', 'Both momentum and kinetic energy', 'Neither'], a: 1, why: 'Momentum is conserved whenever there is no external resultant force. Kinetic energy is conserved only in perfectly elastic collisions.' },
    { q: 'A 2 kg trolley at 5 m/s hits a stationary 3 kg trolley and they move off together. Their common speed is', opts: ['10 m/s', '2 m/s', '7.5 m/s', '1.5 m/s'], a: 1, why: 'Momentum before = 2 × 5 = 10. After = (2+3)v = 5v. 5v = 10 → v = 2 m/s.' },
    { q: 'The mass of an object on Earth is 60 kg. Its mass on the Moon (g_Moon = 1.6 m/s²) is', opts: ['10 kg', '60 kg', '375 kg', '96 kg'], a: 1, why: 'Mass is the amount of matter and does not change with location — only weight changes.' },
    { q: 'Action and reaction forces differ in that they', opts: ['Are never equal in magnitude', 'Act on different bodies', 'Act in the same direction', 'Occur only at rest'], a: 1, why: 'They are equal and opposite but act on different bodies, so they do not cancel.' },
    { q: 'An unbalanced force on a body causes it to', opts: ['Remain at rest', 'Change its momentum', 'Lose all momentum', 'Move at constant velocity'], a: 1, why: 'A resultant (unbalanced) force produces acceleration, which means momentum changes. Balanced forces produce no change.' },
    { q: 'A car of mass 1000 kg travelling at 20 m/s is brought to rest in 4 s. The average braking force is', opts: ['5000 N', '20000 N', '8000 N', '250 N'], a: 0, why: 'Δp = 1000 × 20 = 20000 kg m/s; F = Δp/Δt = 20000/4 = 5000 N.' },
    { q: 'A passenger in a bus moves forward when the bus brakes sharply because of', opts: ['Newton’s first law', 'Newton’s second law', 'Newton’s third law', 'Conservation of momentum'], a: 0, why: 'The body tends to continue its forward motion while the bus slows — inertia, i.e. the first law.' },
    { q: 'Which quantity has the SI unit joule?', opts: ['Force', 'Energy', 'Power', 'Pressure'], a: 1, why: 'The joule is the unit of work and energy (1 J = 1 N m).' },
    { q: 'A 200 g ball moving at 8 m/s rebounds at 6 m/s in the opposite direction. The change in momentum is', opts: ['2.8 kg m/s', '0.4 kg m/s', '14 kg m/s', '2.0 kg m/s'], a: 0, why: 'Take the initial direction positive: Δp = m(v − u) = 0.2(−6 − 8) = 0.2(−14) = −2.8 kg m/s. Magnitude 2.8 kg m/s.' },
    { q: 'Two bodies collide. Their total momentum after the collision is 40 kg m/s. Before the collision their total momentum was', opts: ['Less than 40 kg m/s', 'Exactly 40 kg m/s', 'More than 40 kg m/s', 'Cannot be determined'], a: 1, why: 'Momentum is conserved, so the total before the collision must equal the total after it.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'work-energy',
  title: 'Work, Energy and Power',
  blurb: 'The work–energy theorem, kinetic and potential energy, conservation of energy, and power.',
  time: '55 min',
  objectives: [
    'Define work and calculate it from force and displacement',
    'Distinguish between kinetic and potential energy',
    'Apply the conservation of energy principle',
    'Define power and relate it to work and to force and velocity',
    'Calculate efficiency in simple machines'
  ],
  body: `
<p class="lead">Dynamics told you how forces produce acceleration. This chapter looks at what that acceleration is <em>for</em> — the transfer and storage of energy. Work is energy <strong>in transit</strong>; energy is the capacity to do work. The two share the unit joule.</p>

<h2>Work</h2>
<p>Work is done when a force moves a body <strong>along the direction of the force</strong>:</p>
<div class="formula-box">
  <div class="fb-head">Work</div>
  <div class="formula-row"><div class="fname">Basic definition</div><div class="fexpr">W = F × d</div><div class="fnote">Force in newtons, distance in metres, work in joules.</div></div>
  <div class="formula-row"><div class="fname">Force at an angle</div><div class="fexpr">W = F d cos θ</div><div class="fnote">θ is the angle between force and displacement.</div></div>
  <div class="formula-row"><div class="fname">From a graph</div><div class="fexpr">W = area under the force–distance graph</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>When is work zero?</b>
<p>If the force is <b>perpendicular</b> to the displacement (cos 90° = 0), no work is done. Carrying a bucket horizontally: the upward lifting force does <b>no work</b>, because the displacement is sideways. Equally, a body moving at constant velocity on a rough floor has zero net work done on it — the forces cancel.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Work done by an angled force</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 50 N force acts at 60° to the direction of motion and moves the body 10 m.</div>
    <div class="step"><div class="step-l">Apply W = Fd cos θ</div>
    W = 50 × 10 × cos 60° = 500 × 0.5</div>
    <div class="ans">Answer: 250 J</div>
  </div>
</div>

<h2>Kinetic energy</h2>
<div class="eq">E<sub>k</sub> = ½ m v²</div>
<p>The energy a body possesses <strong>because of its motion</strong>. Note the square: doubling the speed makes kinetic energy four times larger.</p>

<div class="example">
  <div class="example-h"><span class="num">2</span> Kinetic energy of a car</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A car of mass 1000 kg travels at 20 m/s.</div>
    <div class="step"><div class="step-l">Substitute</div>
    E<sub>k</sub> = ½ × 1000 × 20² = 500 × 400</div>
    <div class="ans">Answer: 200 000 J = 200 kJ</div>
  </div>
</div>

<h2>Gravitational potential energy</h2>
<div class="eq">E<sub>p</sub> = m g h</div>
<p>The energy stored due to <strong>height above a reference level</strong>. Always state your reference — usually the ground. If a 2 kg book is on a table 1 m high, its E<sub>p</sub> = 2 × 9.8 × 1 = 19.6 J relative to the floor.</p>

<h2>Conservation of energy</h2>
<blockquote>Energy cannot be created or destroyed — only converted from one form to another. The total energy of a closed system remains constant.</blockquote>

<p>For a body falling freely from height <i>h</i>, neglecting air resistance:</p>
<div class="formula-box">
  <div class="fb-head">Energy during free fall</div>
  <div class="formula-row"><div class="fname">At the top</div><div class="fexpr">E<sub>p</sub> = mgh, &nbsp; E<sub>k</sub> = 0</div></div>
  <div class="formula-row"><div class="fname">Somewhere on the way down</div><div class="fexpr">mgh = ½mv² + E<sub>p</sub> remaining</div></div>
  <div class="formula-row"><div class="fname">Just before landing</div><div class="fexpr">½mv² = mgh &nbsp;⟹&nbsp; v = √(2gh)</div><div class="fnote">Notice the mass cancels — speed depends only on height.</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Mass cancels for falling bodies</b>
<p>A heavy ball and a light ball dropped from the same height hit the ground at the <b>same speed</b> (ignoring air resistance), because v = √(2gh) contains no mass. Galileo's classic result — and a favourite JAMB question.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Height from landing speed</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A stone hits the ground at 20 m/s after falling from rest (g = 10 m/s²).</div>
    <div class="step"><div class="step-l">Use v² = 2gh</div>
    400 = 2(10)h → h = 400 ÷ 20</div>
    <div class="ans">Answer: 20 m</div>
  </div>
</div>

<h3>What happens on impact</h3>
<p>The kinetic energy does not vanish — it is converted into heat, sound and deformation of the surfaces. In every real collision, total energy is conserved but kinetic energy is <strong>not</strong>.</p>

<h2>Work–energy theorem</h2>
<div class="eq">Net work done on a body = change in its kinetic energy</div>
<p>This gives a powerful alternative to F = ma. If friction does 300 J of work on a 10 kg body moving at 15 m/s, its kinetic energy falls by 300 J.</p>

<div class="example">
  <div class="example-h"><span class="num">4</span> Work–energy approach</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 500 kg body moving at 12 m/s is brought to rest by a friction force. How much work does friction do?</div>
    <div class="step"><div class="step-l">Kinetic energy lost</div>
    ΔE<sub>k</sub> = ½ m v² = ½ × 500 × 144 = 36 000 J</div>
    <div class="step"><div class="step-l">All of it is the work done by friction</div>
    Work = −36 000 J (negative because friction opposes the motion)</div>
    <div class="ans">Answer: 36 000 J (36 kJ) of work by friction</div>
  </div>
</div>

<h2>Power</h2>
<p>Power is the <strong>rate of doing work</strong> — it tells you how fast energy is transferred.</p>
<div class="formula-box">
  <div class="fb-head">Power</div>
  <div class="formula-row"><div class="fname">Definition</div><div class="fexpr">P = <span class="frac"><span>W</span><span>t</span></span></div><div class="fnote">Unit: watt (W) = 1 joule per second.</div></div>
  <div class="formula-row"><div class="fname">Force and velocity</div><div class="fexpr">P = F v</div><div class="fnote">Applies when force and velocity are in the same direction.</div></div>
  <div class="formula-row"><div class="fname">Useful conversions</div><div class="fexpr">1 kW = 1000 W &nbsp;·&nbsp; 1 hp ≈ 746 W</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Power from work and time</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A pump lifts 200 kg of water to a height of 10 m in 40 s. Find the power (g = 10 m/s²).</div>
    <div class="step"><div class="step-l">Work done against gravity</div>
    W = mgh = 200 × 10 × 10 = 20 000 J</div>
    <div class="step"><div class="step-l">Power</div>
    P = W/t = 20 000 ÷ 40</div>
    <div class="ans">Answer: 500 W</div>
  </div>
</div>

<h3>Force and velocity form</h3>
<div class="example">
  <div class="example-h"><span class="num">6</span> P = Fv</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    An engine develops 60 000 W while driving a vehicle at 30 m/s against a resistive force. Find the force.</div>
    <div class="step"><div class="step-l">Rearrange P = Fv</div>
    F = P/v = 60 000 ÷ 30</div>
    <div class="ans">Answer: 2000 N</div>
  </div>
</div>

<h2>Efficiency</h2>
<div class="eq">Efficiency = <span class="frac"><span>useful energy output</span><span>total energy input</span></span> × 100% &nbsp;=&nbsp; <span class="frac"><span>useful power output</span><span>power input</span></span> × 100%</div>
<p>A machine is never 100% efficient — energy escapes as heat, sound and friction. Efficiency <strong>cannot exceed 100%</strong>; if a question's numbers give more, recheck your method.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Units to have ready</b>
<p><b>1 J = 1 N m = 1 W s.</b> <b>1 kW h = 3.6 × 10⁶ J</b> — the unit on a domestic electricity meter. Converting 1 kWh: 1000 W × 3600 s = 3 600 000 J. This conversion is examined regularly.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>W = Fd cos θ; zero work when the force is perpendicular to the motion.</li>
<li>E<sub>k</sub> = ½mv²; E<sub>p</sub> = mgh.</li>
<li>Total energy is always conserved; kinetic energy alone is not.</li>
<li>Falling bodies from the same height land at the same speed — mass cancels.</li>
<li>P = W/t = Fv; 1 kWh = 3.6 × 10⁶ J.</li>
<li>Efficiency = useful output ÷ total input, as a percentage.</li>
</ul>
`,
  quiz: [
    { q: 'A force of 10 N moves a body 5 m in the direction of the force. The work done is', opts: ['50 J', '2 J', '15 J', '0.5 J'], a: 0, why: 'W = Fd = 10 × 5 = 50 J.' },
    { q: 'The kinetic energy of a body of mass 4 kg moving at 6 m/s is', opts: ['24 J', '72 J', '12 J', '144 J'], a: 1, why: 'E_k = ½mv² = ½ × 4 × 36 = 72 J.' },
    { q: 'A body of mass 20 kg is at a height of 5 m. Its gravitational potential energy (g = 10 m/s²) is', opts: ['100 J', '1000 J', '25 J', '500 J'], a: 1, why: 'E_p = mgh = 20 × 10 × 5 = 1000 J.' },
    { q: 'Which statement about work is correct?', opts: ['Work is done when a force has no displacement', 'Work is done only when force and displacement are perpendicular', 'Work is zero when the force is perpendicular to displacement', 'Work depends only on distance travelled'], a: 2, why: 'W = Fd cos θ, and cos 90° = 0, so a force acting perpendicular to the motion does no work.' },
    { q: 'A machine does 500 J of useful work from 800 J of input energy. Its efficiency is', opts: ['160%', '62.5%', '300 J', '30%'], a: 1, why: 'Efficiency = (500/800) × 100 = 62.5%.' },
    { q: 'Power is best defined as', opts: ['Force × distance', 'Rate of doing work', 'Work × time', 'Rate of change of distance'], a: 1, why: 'Power = work ÷ time, measured in watts (1 W = 1 J/s).' },
    { q: 'A 1000 kg car moves at 15 m/s. Its kinetic energy is', opts: ['15000 J', '112500 J', '150000 J', '7500 J'], a: 1, why: 'E_k = ½ × 1000 × 15² = 500 × 225 = 112 500 J.' },
    { q: 'A ball of mass 0.5 kg falls from a height of 20 m. Its speed on landing (g = 10 m/s²) is', opts: ['20 m/s', '10 m/s', '400 m/s', '14.1 m/s'], a: 0, why: 'v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s.' },
    { q: 'A heavy stone and a light pebble are dropped from the same height. Neglecting air resistance, they land', opts: ['With the stone travelling faster', 'At the same speed', 'With the pebble travelling faster', 'At the same time only if masses are equal'], a: 1, why: 'v = √(2gh) contains no mass, so both reach the same speed and, dropped together, land together.' },
    { q: 'Which of the following is NOT conserved on its own in a real fall?', opts: ['Total energy', 'Kinetic energy', 'Potential energy', 'Momentum'], a: 1, why: 'Kinetic energy converts to potential energy and back during the fall. It is the <b>total</b> that stays constant.' },
    { q: 'An engine exerts a force of 4000 N while moving at 15 m/s. Its power output is', opts: ['60 kW', '267 W', '60 W', '600 kW'], a: 0, why: 'P = Fv = 4000 × 15 = 60 000 W = 60 kW.' },
    { q: '1 kWh is equivalent to', opts: ['3.6 × 10⁶ J', '1000 J', '3.6 × 10³ J', '1 × 10⁶ J'], a: 0, why: '1000 W × 3600 s = 3 600 000 J = 3.6 × 10⁶ J.' },
    { q: 'A pump raises 500 kg of water through 4 m in 10 s (g = 10 m/s²). The power used is', opts: ['2000 W', '200 W', '20 W', '20000 W'], a: 0, why: 'W = mgh = 500 × 10 × 4 = 20 000 J; P = 20 000/10 = 2000 W.' },
    { q: 'A body is carried horizontally while a force holds it up. The work done by the upward force is', opts: ['Positive and large', 'Zero', 'Negative', 'Equal to mgh'], a: 1, why: 'Displacement is horizontal while the force is vertical — perpendicular, so W = Fd cos 90° = 0.' },
    { q: 'Doubling the speed of a body changes its kinetic energy by a factor of', opts: ['2', '4', '8', '16'], a: 1, why: 'E_k ∝ v², so doubling v gives 2² = 4 times the kinetic energy.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'friction',
  title: 'Friction',
  blurb: 'Static and sliding friction, the coefficient of friction, and advantages and disadvantages.',
  time: '40 min',
  objectives: [
    'Describe the origin and direction of frictional forces',
    'Distinguish static friction from sliding (kinetic) friction',
    'Apply F = µR to calculate frictional force and coefficient of friction',
    'State the factors friction depends on and those it does not',
    'Explain the advantages and disadvantages of friction'
  ],
  body: `
<p class="lead">Friction is the force that opposes <strong>relative motion between two surfaces in contact</strong>. Without it you could not walk, drive or write. With it you lose energy, wear out machines and generate heat. This chapter is short but the calculation appears in nearly every paper.</p>

<h2>The nature of friction</h2>
<p>Surfaces look smooth to the eye but are covered in microscopic peaks and valleys. When two surfaces touch, these irregularities interlock, and molecular adhesion forms where they meet. Friction resists the sliding that would separate them.</p>

<dl class="defs">
<dt>Static friction</dt>
<dd>The force that prevents a body from starting to move. It acts <strong>up to a maximum value</strong>, and only that maximum is fixed by µR.</dd>
<dt>Sliding (kinetic) friction</dt>
<dd>The force resisting motion once the surfaces are already sliding. Generally <strong>slightly lower</strong> than maximum static friction.</dd>
</dl>

<div class="note note-tip"><span class="ico">💡</span><div><b>Direction always</b>
<p>Friction always acts <b>parallel to the contact surfaces</b> and in the direction <b>opposing the relative motion (or the tendency of it)</b>. A block sliding right experiences friction to the left. If you push a block right and it stays still, friction points left — opposing the <em>tendency</em> to move.</p></div></div>

<h2>The friction equations</h2>
<div class="formula-box">
  <div class="fb-head">Friction</div>
  <div class="formula-row"><div class="fname">Limiting (maximum static) friction</div>
    <div class="fexpr">F = µR</div>
    <div class="fnote">µ = coefficient of friction (no units), R = normal contact force.</div></div>
  <div class="formula-row"><div class="fname">On a rough horizontal surface</div>
    <div class="fexpr">R = mg &nbsp;⟹&nbsp; F = µmg</div>
    <div class="fnote">With no other vertical force, the normal reaction equals the weight.</div></div>
  <div class="formula-row"><div class="fname">On an inclined plane</div>
    <div class="fexpr">R = mg cos θ, &nbsp; F<sub>down the slope</sub> = mg sin θ</div>
    <div class="fnote">For sliding at constant speed, µ = tan θ.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Force to just move a block</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 50 kg block rests on a horizontal surface. µ = 0.4, g = 10 m/s². Find the horizontal force needed to just move it.</div>
    <div class="step"><div class="step-l">Normal reaction</div>
    R = mg = 50 × 10 = 500 N</div>
    <div class="step"><div class="step-l">Limiting friction</div>
    F = µR = 0.4 × 500</div>
    <div class="ans">Answer: 200 N</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Coefficient of friction on a slope</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A block just begins to slide down a rough plane inclined at 30°. Find µ.</div>
    <div class="step"><div class="step-l">At the point of sliding</div>
    Down-slope force = limiting friction:<br>mg sin θ = µ mg cos θ</div>
    <div class="step"><div class="step-l">Mass cancels</div>
    µ = sin θ / cos θ = tan θ = tan 30°</div>
    <div class="ans">Answer: µ = 0.577</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The angle of friction</b>
<p>The <b>angle of friction</b> λ is defined by <b>µ = tan λ</b>. It is the angle at which the resultant of the normal reaction and friction lies — equivalently, the angle of the plane at which the body just slides. Learn µ = tan λ alongside µ = tan θ for the inclined plane; they are the same idea.</p></div></div>

<h2>What friction depends on</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Friction DOES depend on</th><th>Friction does NOT depend on</th></tr></thead>
  <tbody>
    <tr>
      <td>
        • Nature/roughness of the surfaces<br>
        • The normal reaction R (contact force)<br>
        • Whether the surfaces are lubricated
      </td>
      <td>
        • The area of contact<br>
        • The speed of sliding (roughly)<br>
        • The mass of the body (only via R)
      </td>
    </tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>"Area of contact" is the favourite</b>
<p>JAMB frequently asks whether friction changes when a brick is turned on its side. It does <b>not</b> — friction is independent of contact area. The pressure changes, but the total normal force does not, so F = µR is unchanged.</p></div></div>

<h2>Reducing friction</h2>
<ul>
<li><strong>Lubrication</strong> — oil or grease separates the surfaces with a fluid layer.</li>
<li><strong>Ball bearings / rollers</strong> — replace sliding friction with much smaller rolling friction.</li>
<li><strong>Smoothing surfaces</strong> — reduces mechanical interlocking.</li>
<li><strong>Air cushioning</strong> — hovercraft lift the surface clear of contact.</li>
</ul>

<h2>Advantages and disadvantages</h2>
<div class="note note-fact"><span class="ico">📌</span><div><b>Advantages</b>
<p>Walking and driving depend on friction between tyres and road; friction lets you grip and write; braking relies on it; belts and clutches transmit power; it converts kinetic energy to heat in brakes.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Disadvantages</b>
<p>Wears away machine parts; wastes energy as heat, reducing efficiency; produces noise; makes locomotion and machinery harder, so more fuel is consumed.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Friction opposes relative motion, parallel to the surfaces.</li>
<li>Static friction adjusts up to a maximum of µR.</li>
<li>F = µR; µ has no units; µ = tan λ (angle of friction).</li>
<li>On a slope, µ = tan θ at the point of sliding.</li>
<li>Independent of contact area and roughly of speed.</li>
</ul>
`,
  quiz: [
    { q: 'Frictional force always acts', opts: ['In the direction of motion', 'Opposite to the direction of relative motion', 'Perpendicular to the surfaces', 'Vertically downward'], a: 1, why: 'Friction opposes the relative motion (or the tendency to move) between the surfaces, and acts parallel to them.' },
    { q: 'A 20 kg block rests on a horizontal floor. If µ = 0.5 and g = 10 m/s², the force needed to just move it is', opts: ['100 N', '200 N', '40 N', '50 N'], a: 0, why: 'R = mg = 200 N; limiting friction F = µR = 0.5 × 200 = 100 N.' },
    { q: 'The coefficient of friction has', opts: ['The unit newton', 'The unit pascal', 'No unit', 'The unit metre'], a: 2, why: 'µ = F/R, and since both F and R are in newtons, the units cancel — µ is dimensionless.' },
    { q: 'A block just slides down a rough plane inclined at 45°. The coefficient of friction is', opts: ['1.0', '0.707', '0.5', '0.25'], a: 0, why: 'At the point of sliding, µ = tan θ = tan 45° = 1.' },
    { q: 'Which of the following does NOT affect the force of friction?', opts: ['Nature of the surfaces', 'Normal contact force', 'Area of contact', 'Presence of lubrication'], a: 2, why: 'Friction is independent of contact area — F = µR involves only the coefficient and the normal force.' },
    { q: 'When a body slides at constant speed down a rough incline, the frictional force is', opts: ['Greater than the component of weight down the slope', 'Equal to the component of weight down the slope', 'Zero', 'Equal to the full weight of the body'], a: 1, why: 'Constant speed means zero net force along the slope, so friction exactly balances the down-slope weight component mg sin θ.' },
    { q: 'Static friction differs from sliding friction in that it', opts: ['Is always larger than sliding friction at its maximum', 'Acts only on moving bodies', 'Is independent of the normal force', 'Always equals µR exactly'], a: 0, why: 'The maximum static friction is generally slightly greater than the kinetic friction once the surfaces are sliding.' },
    { q: 'The angle of friction λ is related to µ by', opts: ['µ = sin λ', 'µ = cos λ', 'µ = tan λ', 'µ = cot λ'], a: 2, why: 'By definition µ = tan λ.' },
    { q: 'A body of mass 5 kg rests on a horizontal table with µ = 0.2 (g = 10 m/s²). The limiting friction is', opts: ['10 N', '50 N', '0.2 N', '100 N'], a: 0, why: 'R = 5 × 10 = 50 N; F = µR = 0.2 × 50 = 10 N.' },
    { q: 'Which is an example where friction is DESIRABLE?', opts: ['Wear of engine parts', 'Walking', 'Loss of energy as heat', 'Noise from machinery'], a: 1, why: 'Walking depends entirely on friction between the foot and the ground — without it you would slip.' },
    { q: 'Ball bearings reduce friction by converting', opts: ['Rolling friction into sliding friction', 'Sliding friction into rolling friction', 'Static friction into kinetic friction', 'Friction into adhesion'], a: 1, why: 'Rolling resistance is much smaller than sliding friction, so bearings replace sliding contact with rolling.' },
    { q: 'A block is pushed along a rough horizontal surface but does not move. The friction acting equals', opts: ['µR', 'The applied force', 'Zero', 'mg'], a: 1, why: 'Below the limiting value, static friction matches the applied force exactly, so the block stays at rest.' },
    { q: 'The frictional force depends on the', opts: ['Speed of the body', 'Normal reaction force', 'Area of contact', 'Weight of the body only'], a: 1, why: 'F = µR. It depends directly on the normal contact force R (which on a horizontal surface happens to equal the weight).' },
    { q: 'On an inclined plane, the normal reaction R equals', opts: ['mg', 'mg sin θ', 'mg cos θ', 'mg tan θ'], a: 2, why: 'Resolving perpendicular to the slope: R = mg cos θ.' },
    { q: 'Lubrication reduces friction by', opts: ['Increasing surface roughness', 'Replacing solid contact with a fluid layer', 'Increasing the normal force', 'Decreasing the contact area'], a: 1, why: 'The lubricant separates the surfaces so they slide on a thin fluid film instead of interlocking.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'elasticity',
  title: 'Elasticity and Hooke’s Law',
  blurb: 'Deforming forces, Hooke’s law, Young’s modulus and the elastic limit.',
  time: '45 min',
  objectives: [
    'Explain tensile and compressive deformation',
    "State Hooke's law and identify its limits",
    'Calculate the spring constant and work done in stretching',
    "Define Young's modulus and interpret a force–extension graph",
    'Distinguish elastic from plastic behaviour'
  ],
  body: `
<p class="lead">Pull a rubber band and it stretches; release it and it springs back. That ability to return to the original shape after a deforming force is removed is <strong>elasticity</strong>. This chapter is the bridge between forces and materials — and it is where graphs start earning marks.</p>

<h2>Deforming forces</h2>
<p>Two kinds of force change a body's shape:</p>
<dl class="defs">
<dt>Tensile force</dt>
<dd>Stretches or elongates — pulls outwards at both ends. (Tension, weight hanging from a wire.)</dd>
<dt>Compressive force</dt>
<dd>Shortens or squashes — pushes inwards at both ends. (A weight on a spring, a pillar under a building.)</dd>
</dl>

<p><strong>Elastic deformation</strong> returns to the original shape when the force is removed. <strong>Plastic deformation</strong> is permanent — the body keeps the new shape (bending a paperclip past its limit, crumpling metal in a crash).</p>

<h2>Hooke’s Law</h2>
<blockquote>Within the <strong>limit of proportionality</strong>, the extension of a material is directly proportional to the applied force, provided the elastic limit is not exceeded.</blockquote>

<div class="formula-box">
  <div class="fb-head">Hooke's law</div>
  <div class="formula-row"><div class="fname">Force–extension</div><div class="fexpr">F = k e</div><div class="fnote">k = spring constant (N/m), e = extension (m). k is the stiffness.</div></div>
  <div class="formula-row"><div class="fname">Rearranged</div><div class="fexpr">k = <span class="frac"><span>F</span><span>e</span></span>, &nbsp; e = <span class="frac"><span>F</span><span>k</span></span></div></div>
  <div class="formula-row"><div class="fname">Series springs</div><div class="fexpr">1/k<sub>total</sub> = 1/k₁ + 1/k₂ + …</div></div>
  <div class="formula-row"><div class="fname">Parallel springs</div><div class="fexpr">k<sub>total</sub> = k₁ + k₂ + …</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Two limits, not one</b>
<p><b>Proportional limit:</b> beyond it, extension is no longer proportional to force (the graph curves) — but the body still springs back. <b>Elastic limit:</b> beyond it, the deformation is <b>permanent</b>. They are close together but distinct, and JAMB does test the difference. Hooke's law strictly holds only <b>up to the proportional limit</b>.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Finding the spring constant</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A force of 12 N produces an extension of 0.3 m in a spring.</div>
    <div class="step"><div class="step-l">Apply F = ke</div>
    k = F/e = 12 ÷ 0.3</div>
    <div class="ans">Answer: k = 40 N/m</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Extension from a known spring constant</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A spring of constant 250 N/m carries a 15 N load. Find the extension and the new length if the original was 0.12 m.</div>
    <div class="step"><div class="step-l">Extension</div>
    e = F/k = 15 ÷ 250 = 0.06 m</div>
    <div class="step"><div class="step-l">New length</div>
    L = 0.12 + 0.06 = 0.18 m</div>
    <div class="ans">Answer: extension 0.06 m; new length 0.18 m</div>
  </div>
</div>

<h2>Work done in stretching</h2>
<p>A force that increases gradually from 0 to F stretches a spring by e. The work stored (elastic potential energy) is the area under the force–extension graph — a triangle:</p>
<div class="eq">W = ½ F e = ½ k e²</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Energy stored in a spring</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A spring with k = 60 N/m is stretched 0.25 m.</div>
    <div class="step"><div class="step-l">Use W = ½ke²</div>
    W = ½ × 60 × (0.25)² = 30 × 0.0625</div>
    <div class="ans">Answer: 1.875 J</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The ½ catches people</b>
<p>The energy in a spring is <b>½ke²</b>, not <b>ke²</b>, because the force builds up gradually from zero. Forgetting the ½ is the single most common error in this chapter.</p></div></div>

<h2>Young’s modulus</h2>
<p>Spring constant depends on the shape and size of the object. To compare <em>materials</em> themselves, we use stress, strain and Young's modulus.</p>

<div class="formula-box">
  <div class="fb-head">Stress, strain and Young's modulus</div>
  <div class="formula-row"><div class="fname">Stress</div><div class="fexpr">Stress = <span class="frac"><span>force</span><span>cross-sectional area</span></span> = F/A</div><div class="fnote">Unit: pascal (Pa = N/m²). Tensile or compressive.</div></div>
  <div class="formula-row"><div class="fname">Strain</div><div class="fexpr">Strain = <span class="frac"><span>extension</span><span>original length</span></span> = e/L</div><div class="fnote">No units — a ratio of lengths.</div></div>
  <div class="formula-row"><div class="fname">Young's modulus</div><div class="fexpr">E = <span class="frac"><span>stress</span><span>strain</span></span> = <span class="frac"><span>FL</span><span>Ae</span></span></div><div class="fnote">Unit: pascal (Pa). A constant for the material.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Young’s modulus from raw data</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A wire of original length 2 m and cross-sectional area 2 × 10⁻⁶ m² extends by 1.0 mm under a 100 N load.</div>
    <div class="step"><div class="step-l">Step 1 — convert to metres</div>
    e = 1.0 mm = 1.0 × 10⁻³ m</div>
    <div class="step"><div class="step-l">Step 2 — stress</div>
    Stress = 100 / (2 × 10⁻⁶) = 5 × 10⁷ Pa</div>
    <div class="step"><div class="step-l">Step 3 — strain</div>
    Strain = (1 × 10⁻³) / 2 = 5 × 10⁻⁴</div>
    <div class="step"><div class="step-l">Step 4 — Young's modulus</div>
    E = (5 × 10⁷) / (5 × 10⁻⁴)</div>
    <div class="ans">Answer: E = 1 × 10¹¹ Pa</div>
  </div>
</div>

<h2>Interpreting a force–extension graph</h2>
<ul>
<li><strong>Initial straight line</strong> → Hooke's law obeys; gradient = k.</li>
<li><strong>Curving away from the straight line</strong> → proportional limit exceeded (still elastic if it returns).</li>
<li><strong>Horizontal section</strong> → the material yields — it stretches with little extra force. This region is <strong>plastic</strong>.</li>
<li><strong>Area under the graph</strong> → work done / energy stored.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Stiffer means steeper</b>
<p>A stiffer spring (larger k) gives a <b>steeper</b> gradient on an F–e graph. On a stress–strain graph, a material with a larger Young's modulus is stiffer. JAMB often asks you to compare two materials from the gradients of their lines.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Tension stretches, compression squashes.</li>
<li>F = ke within the proportional limit; k is stiffness.</li>
<li>Elastic limit → beyond it, deformation is permanent.</li>
<li>Energy stored = ½Fe = ½ke² (never ke²).</li>
<li>Stress = F/A; strain = e/L; E = stress/strain, in pascals.</li>
</ul>
`,
  quiz: [
    { q: 'Hooke’s law states that extension is proportional to', opts: ['Area of the material', 'Applied force', 'Volume', 'Weight of the material'], a: 1, why: 'Within the proportional limit, extension e is directly proportional to the applied force F — F = ke.' },
    { q: 'A force of 24 N stretches a spring by 0.4 m. The spring constant is', opts: ['9.6 N/m', '60 N/m', '0.017 N/m', '24 N/m'], a: 1, why: 'k = F/e = 24/0.4 = 60 N/m.' },
    { q: 'Beyond the elastic limit, a material', opts: ['Still returns to its original shape', 'Is permanently deformed', 'Becomes stiffer', 'Obeys Hooke’s law exactly'], a: 1, why: 'Past the elastic limit the deformation is plastic — the material retains its new shape.' },
    { q: 'The energy stored in a spring stretched by e with constant k is', opts: ['ke²', '½ke²', '2ke', '½ke'], a: 1, why: 'W = ½Fe = ½ke². The factor ½ appears because the force builds from zero.' },
    { q: 'Young’s modulus is defined as', opts: ['Stress × strain', 'Stress ÷ strain', 'Force ÷ extension', 'Strain ÷ stress'], a: 1, why: 'E = stress/strain. Both stress and strain have consistent units so E is in pascals.' },
    { q: 'A wire of 100 N load and 4 × 10⁻⁶ m² area has a stress of', opts: ['4 × 10⁷ Pa', '2.5 × 10⁷ Pa', '400 Pa', '25 Pa'], a: 1, why: 'Stress = F/A = 100/(4 × 10⁻⁶) = 2.5 × 10⁷ Pa.' },
    { q: 'The unit of strain is', opts: ['Pascal', 'Newton', 'None (dimensionless)', 'Per metre'], a: 2, why: 'Strain = extension ÷ original length = m/m, so the units cancel and strain has no unit.' },
    { q: 'A spring with k = 50 N/m is stretched 0.2 m. The energy stored is', opts: ['1 J', '0.5 J', '10 J', '0.2 J'], a: 0, why: 'W = ½ke² = ½ × 50 × 0.04 = 1 J.' },
    { q: 'A material that does not return to its original shape after the deforming force is removed is said to be', opts: ['Elastic', 'Plastic', 'Brittle', 'Ductile'], a: 1, why: 'Permanent deformation defines plastic behaviour.' },
    { q: 'On a force–extension graph, the gradient represents', opts: ['Energy stored', 'The spring constant k', 'Stress', 'Strain'], a: 1, why: 'Gradient = ΔF/Δe = k, the stiffness of the spring.' },
    { q: 'Which deformation is compressive?', opts: ['A weight hanging from a wire', 'A pillar supporting a building', 'A rope being pulled at both ends', 'A bowstring being drawn'], a: 1, why: 'The pillar is squeezed inwards at both ends — that is compression. The others are tension.' },
    { q: 'Two identical springs of constant k are connected in parallel. The effective constant is', opts: ['k/2', 'k', '2k', '4k'], a: 2, why: 'In parallel the constants add: k_total = k + k = 2k.' },
    { q: 'Within the proportional limit, if the force doubles the extension will', opts: ['Stay the same', 'Halve', 'Double', 'Quadruple'], a: 2, why: 'Proportionality means e ∝ F, so doubling F doubles the extension.' },
    { q: 'Which quantity is a vector?', opts: ['Stress', 'Strain', 'Mass', 'Density'], a: 0, why: 'Stress has a direction (tensile or compressive) as well as magnitude. Strain, mass and density are scalars.' },
    { q: 'A material with a large Young’s modulus is', opts: ['Very stretchable', 'Very stiff', 'Very weak', 'Plastic'], a: 1, why: 'A large E means a large stress is needed for a given strain — the material resists deformation strongly.' }
  ]
});
