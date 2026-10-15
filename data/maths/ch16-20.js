/* JAMB 2027 Prep — Mathematics, Chapters 16–20 */

JAMB.addChapter('mathematics', {
  id: 'mensuration-vectors',
  title: 'Mensuration and Vectors',
  blurb: 'Perimeters, areas, volumes and surface areas of plane and solid shapes, plus vector algebra.',
  time: '65 min',
  objectives: [
    'Recall the area and perimeter formulas for standard shapes',
    'Find volumes and surface areas of solids',
    'Use the three-dimensional Pythagoras result',
    'Add, subtract, scale and find magnitudes of vectors'
  ],
  body: `
<p class="lead">Mensuration is pure formula recall plus careful substitution — the marks here are the most dependable on the paper. Vectors then supplies a compact algebra of direction and magnitude that returns in later topics.</p>

<h2>Plane figures</h2>
<div class="formula-box">
  <div class="fb-head">Perimeter and area</div>
  <div class="formula-row"><div class="fname">Rectangle</div>
    <div class="fexpr">Area = lb · Perimeter = 2(l + b)</div></div>
  <div class="formula-row"><div class="fname">Triangle</div>
    <div class="fexpr">Area = ½ × base × height</div></div>
  <div class="formula-row"><div class="fname">Parallelogram</div>
    <div class="fexpr">Area = base × perpendicular height</div></div>
  <div class="formula-row"><div class="fname">Trapezium</div>
    <div class="fexpr">Area = ½(a + b) × h (a and b are the parallel sides)</div></div>
  <div class="formula-row"><div class="fname">Circle</div>
    <div class="fexpr">Circumference = 2πr · Area = πr²</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> A trapezium has parallel sides 6 cm and 10 cm, height 4 cm. Find its area
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Area = ½(a + b)h</div>
    <div class="step"><div class="step-l">Step 2</div>
    ½(6 + 10)(4) = ½ × 16 × 4</div>
    <div class="ans">32 cm²</div>
  </div>
</div>

<h2>Solids</h2>
<div class="formula-box">
  <div class="fb-head">Volume</div>
  <div class="formula-row"><div class="fname">Cuboid</div>
    <div class="fexpr">V = l b h</div></div>
  <div class="formula-row"><div class="fname">Cylinder</div>
    <div class="fexpr">V = πr²h</div></div>
  <div class="formula-row"><div class="fname">Cone</div>
    <div class="fexpr">V = ⅓ πr²h</div></div>
  <div class="formula-row"><div class="fname">Sphere</div>
    <div class="fexpr">V = ⁴⁄₃ πr³</div></div>
  <div class="formula-row"><div class="fname">Pyramid</div>
    <div class="fexpr">V = ⅓ × (base area) × height</div></div>
  <div class="formula-row"><div class="fname">Prism</div>
    <div class="fexpr">V = (cross-section area) × length</div></div>
</div>

<div class="formula-box">
  <div class="fb-head">Surface area</div>
  <div class="formula-row"><div class="fname">Cylinder (total)</div>
    <div class="fexpr">2πr(r + h) — two circles plus the curved surface</div></div>
  <div class="formula-row"><div class="fname">Sphere</div>
    <div class="fexpr">4πr²</div></div>
  <div class="formula-row"><div class="fname">Cone (curved)</div>
    <div class="fexpr">π r l, where l is the slant height, l = √(r² + h²)</div></div>
  <div class="formula-row"><div class="fname">Cube</div>
    <div class="fexpr">6a² · total edge length = 12a</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Find the volume of a cone of radius 6 cm and height 10 cm
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    V = ⅓ π r² h</div>
    <div class="step"><div class="step-l">Step 2</div>
    ⅓ × π × 36 × 10</div>
    <div class="ans">120π cm³ ≈ 376.99 cm³</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> A sphere has radius 3 cm. Find its volume and surface area
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Volume</div>
    ⁴⁄₃ π (3)³ = ⁴⁄₃ π × 27 = 36π</div>
    <div class="step"><div class="step-l">Surface area</div>
    4π (3)² = 36π</div>
    <div class="ans">Both equal 36π — a useful reminder that the numbers can coincide</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Units are part of the answer</b>
<p>Area carries <strong>square</strong> units, volume <strong>cubic</strong> units. Writing "32" instead of "32 cm²" can cost the mark in a structured question, and mixed units (cm and m in one problem) must be converted before calculating.</p></div></div>

<h2>The three-dimensional diagonal</h2>
<div class="formula-box">
  <div class="fb-head">Cuboid of length l, width w, height h</div>
  <div class="formula-row"><div class="fname">Space diagonal</div>
    <div class="fexpr">d = √(l² + w² + h²)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the diagonal of a cuboid 3 cm by 4 cm by 12 cm
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    d² = 9 + 16 + 144 = 169</div>
    <div class="ans">d = 13 cm</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Do it in two stages</b>
<p>First find the diagonal of the base (3-4-5 here gives 5), then use that with the height: √(5² + 12²) = 13. Two right triangles in a row — the same method works for any cuboid.</p></div></div>

<h2>Vectors</h2>
<div class="formula-box">
  <div class="fb-head">The essentials</div>
  <div class="formula-row"><div class="fname">Component form</div>
    <div class="fexpr">a = a₁i + a₂j, where i and j are unit vectors along the axes</div></div>
  <div class="formula-row"><div class="fname">Magnitude</div>
    <div class="fexpr">|a| = √(a₁² + a₂²)</div></div>
  <div class="formula-row"><div class="fname">Addition and subtraction</div>
    <div class="fexpr">Add or subtract the components separately</div></div>
  <div class="formula-row"><div class="fname">Position of AB</div>
    <div class="fexpr">AB = (position vector of B) − (position vector of A)</div>
    <div class="fnote">Head minus tail — always.</div></div>
  <div class="formula-row"><div class="fname">Unit vector</div>
    <div class="fexpr">â = a ⁄ |a|</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> If a = 3i + 4j, find |a| and the unit vector in its direction
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Magnitude</div>
    |a| = √(3² + 4²) = √25 = 5</div>
    <div class="step"><div class="step-l">Unit vector</div>
    â = (3i + 4j) ⁄ 5</div>
    <div class="ans">|a| = 5 · â = 0.6i + 0.8j</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> A(1, 2) and B(4, 6). Find the vector AB
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    AB = B − A (head minus tail)</div>
    <div class="step"><div class="step-l">Step 2</div>
    (4 − 1)i + (6 − 2)j</div>
    <div class="ans">AB = 3i + 4j</div>
  </div>
</div>

<div class="formula-box">
  <div class="fb-head">Further operations</div>
  <div class="formula-row"><div class="fname">Scalar (dot) product</div>
    <div class="fexpr">a · b = a₁b₁ + a₂b₂ = |a||b| cos θ</div></div>
  <div class="formula-row"><div class="fname">Parallel vectors</div>
    <div class="fexpr">a = k b for some scalar k (components in the same ratio)</div></div>
  <div class="formula-row"><div class="fname">Perpendicular vectors</div>
    <div class="fexpr">a · b = 0</div></div>
  <div class="formula-row"><div class="fname">Midpoint</div>
    <div class="fexpr">(a + b) ⁄ 2 for position vectors a and b</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> Are a = 2i + 3j and b = 4i + 6j parallel?
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Compare components: 4 ⁄ 2 = 2 and 6 ⁄ 3 = 2</div>
    <div class="step"><div class="step-l">Step 2</div>
    The ratios are equal, so b = 2a</div>
    <div class="ans">Yes — they are parallel (and in the same direction)</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Head minus tail, not the other way</b>
<p>AB is the vector from A to B, so it is B − A. Reversing the order gives BA, the negative of AB. Sign slips here propagate through every later step.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Trapezium ½(a + b)h; circle πr²; remember the shape before the substitution.</li>
<li>Cone and pyramid carry a factor of ⅓; sphere volume ⁴⁄₃πr³ and area 4πr².</li>
<li>Cuboid diagonal = √(l² + w² + h²).</li>
<li>|a| = √(x² + y²); AB = B − A; unit vector = a ⁄ |a|.</li>
<li>Parallel ⟹ components in the same ratio; perpendicular ⟹ dot product zero.</li>
</ul>
`,
  quiz: [
    { q: 'The area of a triangle with base 10 cm and height 6 cm is', opts: ['30 cm²', '60 cm²', '16 cm²', '36 cm²'], a: 0, why: '½ × 10 × 6 = 30.' },
    { q: 'The area of a trapezium with parallel sides 6 and 10 and height 4 is', opts: ['32', '64', '40', '16'], a: 0, why: '½(6 + 10)(4) = 32.' },
    { q: 'The area of a circle of radius 7 cm (π = 22⁄7) is', opts: ['154 cm²', '44 cm²', '49 cm²', '148 cm²'], a: 0, why: '22⁄7 × 49 = 154.' },
    { q: 'The perimeter of a rectangle 12 cm by 5 cm is', opts: ['34 cm', '60 cm', '17 cm', '24 cm'], a: 0, why: '2(12 + 5) = 34.' },
    { q: 'The volume of a cuboid 3 by 4 by 5 is', opts: ['60', '12', '47', '36'], a: 0, why: '3 × 4 × 5 = 60.' },
    { q: 'The volume of a cylinder of radius 3 cm and height 5 cm is', opts: ['45π cm³', '15π cm³', '30π cm³', '75π cm³'], a: 0, why: 'πr²h = 9π × 5.' },
    { q: 'The volume of a cone of radius 6 cm and height 10 cm is', opts: ['120π cm³', '360π cm³', '60π cm³', '180π cm³'], a: 0, why: '⅓ × 36π × 10 = 120π.' },
    { q: 'A pyramid has a square base of side 6 cm and height 9 cm. Its volume is', opts: ['108 cm³', '324 cm³', '54 cm³', '162 cm³'], a: 0, why: '⅓ × 36 × 9 = 108.' },
    { q: 'The volume of a sphere of radius 3 cm is', opts: ['36π cm³', '27π cm³', '108π cm³', '12π cm³'], a: 0, why: '⁴⁄₃π × 27 = 36π.' },
    { q: 'The surface area of a sphere of radius 3 cm is', opts: ['36π cm²', '9π cm²', '27π cm²', '108π cm²'], a: 0, why: '4πr² = 36π.' },
    { q: 'The total surface area of a cylinder of radius 4 cm and height 5 cm is', opts: ['72π cm²', '40π cm²', '56π cm²', '80π cm²'], a: 0, why: '2πr(r + h) = 8π(9) = 72π.' },
    { q: 'The diagonal of a cuboid 3 by 4 by 12 is', opts: ['13', '12', '15', '5'], a: 0, why: '√(9 + 16 + 144) = √169 = 13.' },
    { q: 'The total edge length of a cube of side a is', opts: ['12a', '6a²', '4a', '8a'], a: 0, why: 'A cube has 12 edges.' },
    { q: 'A cone has radius 5 cm and slant height 13 cm. Its curved surface area is', opts: ['65π cm²', '25π cm²', '13π cm²', '30π cm²'], a: 0, why: 'π r l = π × 5 × 13.' },
    { q: 'The height of a cone with slant height 13 and radius 5 is', opts: ['12 cm', '13 cm', '18 cm', '8 cm'], a: 0, why: 'h = √(169 − 25) = 12.' },
    { q: 'The magnitude of the vector 3i + 4j is', opts: ['5', '7', '12', '25'], a: 0, why: '√(9 + 16) = 5.' },
    { q: 'If A(1, 2) and B(4, 6), the vector AB is', opts: ['3i + 4j', '−3i − 4j', '5i + 8j', '4i + 6j'], a: 0, why: 'Head minus tail: (4 − 1)i + (6 − 2)j.' },
    { q: 'The vector BA in the previous question is', opts: ['−3i − 4j', '3i + 4j', '0', '7i + 8j'], a: 0, why: 'BA runs in the opposite direction, so it is the negative of AB.' },
    { q: 'If a = 2i + 3j and b = i − j, then a + b equals', opts: ['3i + 2j', 'i + 2j', '3i + 4j', '2i + 4j'], a: 0, why: 'Add corresponding components.' },
    { q: 'If a = 2i + 3j and b = i − j, then 2a − b equals', opts: ['3i + 7j', '3i + 5j', '4i + 5j', '3i − 7j'], a: 0, why: '2a = 4i + 6j; subtracting b gives 3i + 7j.' },
    { q: 'The unit vector in the direction of 3i + 4j is', opts: ['0.6i + 0.8j', '0.8i + 0.6j', '3i + 4j', '0.5i + 0.5j'], a: 0, why: 'Divide by the magnitude 5.' },
    { q: 'Vectors a = 2i + 3j and b = 4i + 6j are', opts: ['Parallel', 'Perpendicular', 'Equal', 'Opposite'], a: 0, why: 'b = 2a, so their components are in the same ratio.' },
    { q: 'Vectors a = 2i + j and b = i − 2j are', opts: ['Perpendicular', 'Parallel', 'Equal in length only', 'Inclined at 45°'], a: 0, why: 'a · b = 2 − 2 = 0.' },
    { q: 'The scalar product of a = 2i + 3j and b = i + 2j is', opts: ['8', '12', '5', '2'], a: 0, why: '2 × 1 + 3 × 2 = 8.' },
    { q: 'The midpoint of the vectors i + 2j and 5i + 6j is', opts: ['3i + 4j', '2i + 3j', '6i + 8j', '3i + 2j'], a: 0, why: 'Add and halve: (6i + 8j) ⁄ 2.' },
    { q: 'If |r| = 10 and r makes an angle θ with the x-axis, its component along x is', opts: ['10 cos θ', '10 sin θ', 'tan θ', '10 tan θ'], a: 0, why: 'The horizontal component is the magnitude times cos θ.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'statistics',
  title: 'Statistics: Averages and Dispersion',
  blurb: 'Mean, median and mode, grouped data, quartiles, range, variance and standard deviation.',
  time: '55 min',
  objectives: [
    'Calculate mean, median and mode from raw data',
    'Find the mean of grouped data using midpoints',
    'Locate quartiles and the interquartile range',
    'Calculate variance and standard deviation'
  ],
  body: `
<p class="lead">Statistics splits into two questions: <strong>where is the data centred?</strong> (mean, median, mode) and <strong>how spread out is it?</strong> (range, quartiles, standard deviation). Both are formula-and-calculation work with no tricks — only carelessness.</p>

<h2>The three measures of centre</h2>
<div class="formula-box">
  <div class="fb-head">Definitions</div>
  <div class="formula-row"><div class="fname">Mean</div>
    <div class="fexpr">x̄ = (sum of all values) ⁄ (number of values)</div>
    <div class="fnote">Weighted form: x̄ = Σfx ⁄ Σf for frequency tables.</div></div>
  <div class="formula-row"><div class="fname">Median</div>
    <div class="fexpr">The middle value when the data are arranged in order</div>
    <div class="fnote">Position: (n + 1) ⁄ 2 th value.</div></div>
  <div class="formula-row"><div class="fname">Mode</div>
    <div class="fexpr">The value that occurs most often</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Find the mean, median and mode of 4, 7, 9, 12, 8
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Mean</div>
    (4 + 7 + 9 + 12 + 8) ⁄ 5 = 40 ⁄ 5 = <b>8</b></div>
    <div class="step"><div class="step-l">Median</div>
    Ordered: 4, 7, 8, 9, 12 — the middle (3rd) value is <b>8</b></div>
    <div class="step"><div class="step-l">Mode</div>
    Every value occurs once, so there is <b>no mode</b></div>
    <div class="ans">Mean 8 · Median 8 · No mode</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Find the median of 3, 9, 5, 7, 2, 8
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Order: 2, 3, 5, 7, 8, 9</div>
    <div class="step"><div class="step-l">Step 2</div>
    n = 6 is even, so average the 3rd and 4th values</div>
    <div class="ans">(5 + 7) ⁄ 2 = 6</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Order before median — always</b>
<p>Finding the median of unsorted data is the single commonest error in this topic. Write the values in order first, even when the list looks short.</p></div></div>

<h2>Grouped data</h2>
<p>For class intervals the exact values are unknown, so each class is represented by its <strong>midpoint</strong>.</p>

<div class="example">
  <div class="example-h"><span class="num">3</span> Find the mean of the distribution below
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Midpoints: 5, 15, 25, 35</div>
    <div class="step"><div class="step-l">Step 2</div>
    Multiply each midpoint by its frequency: 4×5 = 20 · 6×15 = 90 · 8×25 = 200 · 2×35 = 70</div>
    <div class="step"><div class="step-l">Step 3</div>
    Σfx = 380 and Σf = 20</div>
    <div class="ans">x̄ = 380 ⁄ 20 = 19</div>
  </div>
</div>

<div class="formula-box">
  <div class="fb-head">Frequency table used in the example</div>
  <div class="formula-row"><div class="fname">Class</div>
    <div class="fexpr">0 – 10 · 10 – 20 · 20 – 30 · 30 – 40</div></div>
  <div class="formula-row"><div class="fname">Frequency</div>
    <div class="fexpr">4 · 6 · 8 · 2</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Midpoint, not lower limit</b>
<p>The representative value of the class 10 – 20 is <strong>15</strong>, not 10. Also note the classes are continuous (the upper limit of one is the lower limit of the next), so no gap-filling is needed.</p></div></div>

<h2>Quartiles and the interquartile range</h2>
<div class="formula-box">
  <div class="fb-head">Dividing ordered data into four parts</div>
  <div class="formula-row"><div class="fname">Positions</div>
    <div class="fexpr">Q₁ at (n + 1)⁄4 · Median at (n + 1)⁄2 · Q₃ at 3(n + 1)⁄4</div></div>
  <div class="formula-row"><div class="fname">Interquartile range</div>
    <div class="fexpr">IQR = Q₃ − Q₁</div>
    <div class="fnote">A measure of spread less affected by outliers than the full range.</div></div>
  <div class="formula-row"><div class="fname">Semi-interquartile range</div>
    <div class="fexpr">(Q₃ − Q₁) ⁄ 2</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the quartiles of 2, 3, 5, 7, 8, 9, 11, 13
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    n = 8. Q₁ position = 9⁄4 = 2.25 → between the 2nd and 3rd values: 3 + 0.25(5 − 3) = <b>3.5</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    Median = average of the 4th and 5th = (7 + 8) ⁄ 2 = <b>7.5</b></div>
    <div class="step"><div class="step-l">Step 3</div>
    Q₃ position = 27⁄4 = 6.75 → 9 + 0.75(11 − 9) = <b>10.5</b></div>
    <div class="ans">Q₁ = 3.5 · Median = 7.5 · Q₃ = 10.5 · IQR = 7</div>
  </div>
</div>

<h2>Measures of spread</h2>
<div class="formula-box">
  <div class="fb-head">Dispersion</div>
  <div class="formula-row"><div class="fname">Range</div>
    <div class="fexpr">Largest value − smallest value</div></div>
  <div class="formula-row"><div class="fname">Variance</div>
    <div class="fexpr">σ² = Σ(x − x̄)² ⁄ n</div></div>
  <div class="formula-row"><div class="fname">Standard deviation</div>
    <div class="fexpr">σ = √[ Σ(x − x̄)² ⁄ n ]</div></div>
  <div class="formula-row"><div class="fname">Computational form</div>
    <div class="fexpr">σ² = (Σx² ⁄ n) − x̄²</div>
    <div class="fnote">Faster when the mean is not a whole number.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find the variance of 2, 4, 6, 8, 10
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Mean = 30 ⁄ 5 = 6</div>
    <div class="step"><div class="step-l">Step 2</div>
    Squared deviations: 16, 4, 0, 4, 16 — sum = 40</div>
    <div class="step"><div class="step-l">Step 3</div>
    σ² = 40 ⁄ 5 = 8</div>
    <div class="ans">Variance 8, standard deviation = √8 ≈ 2.83</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The squared deviations are always non-negative</b>
<p>Whatever the value of x, (x − x̄)² ≥ 0, so variance can never be negative. If you obtain a negative variance, the arithmetic — not the data — is at fault.</p></div></div>

<h2>Choosing the right average</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Average</th><th>Best when…</th><th>Weakness</th></tr></thead>
  <tbody>
    <tr><td><b>Mean</b></td><td>All values matter; data are symmetric</td><td>Pulled by extreme values</td></tr>
    <tr><td><b>Median</b></td><td>Outliers are present (salaries, house prices)</td><td>Ignores most of the values</td></tr>
    <tr><td><b>Mode</b></td><td>Choosing a best-seller size or most popular item</td><td>May not exist or be unique</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Mean = Σfx ⁄ Σf; median needs ordered data; mode is the most frequent value.</li>
<li>Grouped data: use class midpoints.</li>
<li>Quartiles at (n + 1)⁄4 and 3(n + 1)⁄4; IQR = Q₃ − Q₁.</li>
<li>σ² = Σ(x − x̄)² ⁄ n; σ is its square root and is never negative.</li>
<li>Use the median when outliers dominate; the mode for categorical choices.</li>
</ul>
`,
  quiz: [
    { q: 'The mean of 4, 7, 9, 12, 8 is', opts: ['7', '8', '9', '10'], a: 1, why: '40 ⁄ 5 = 8.' },
    { q: 'The median of 3, 5, 7, 9, 11 is', opts: ['5', '7', '9', '6'], a: 1, why: 'The middle value of the ordered list.' },
    { q: 'The median of 3, 9, 5, 7, 2, 8 is', opts: ['5', '6', '7', '6.5'], a: 1, why: 'Ordered: 2, 3, 5, 7, 8, 9; average of 5 and 7 is 6.' },
    { q: 'The mode of 2, 3, 3, 4, 5, 3, 6 is', opts: ['2', '3', '4', 'No mode'], a: 1, why: '3 occurs three times, more than any other value.' },
    { q: 'The range of 10, 15, 20, 8, 25 is', opts: ['17', '15', '25', '10'], a: 0, why: '25 − 8 = 17.' },
    { q: 'The mean of the first five positive odd integers is', opts: ['3', '5', '7', '9'], a: 1, why: '(1 + 3 + 5 + 7 + 9) ⁄ 5 = 5.' },
    { q: 'The mid-point of the class 10 – 20 is', opts: ['10', '15', '20', '5'], a: 1, why: '(10 + 20) ⁄ 2 = 15.' },
    { q: 'The mean of 4, 6, 8, 10, 12 is', opts: ['6', '7', '8', '9'], a: 2, why: '40 ⁄ 5 = 8.' },
    { q: 'A distribution has class midpoints 5, 15, 25 with frequencies 4, 6, 10. Its mean is', opts: ['19', '20', '21', '18'], a: 3, why: 'Σfx = 20 + 90 + 250 = 360 and Σf = 20, so the mean is 360 ⁄ 20 = 18.' },
    { q: 'If the mean of 8 numbers is 12, their total is', opts: ['96', '128', '84', '20'], a: 0, why: 'Mean × count = 12 × 8.' },
    { q: 'Three numbers have mean 10. A fourth number 20 is added. The new mean is', opts: ['12', '11', '12.5', '13'], a: 0, why: 'Total 30 + 20 = 50 over 4 values.' },
    { q: 'The quartile positions for n values are (n + 1)⁄4 and', opts: ['3(n + 1)⁄4', '(n + 1)⁄2', '(n + 1)⁄3', 'n⁄4'], a: 0, why: 'Q₁ at a quarter, Q₃ at three-quarters.' },
    { q: 'For ordered data 1, 2, 3, 4, 5, 6, 7, 8, the median is', opts: ['4', '4.5', '5', '3.5'], a: 1, why: 'Average of the 4th and 5th values.' },
    { q: 'The interquartile range is', opts: ['Q₃ − Q₁', 'Q₃ + Q₁', 'Maximum − minimum', 'Median − Q₁'], a: 0, why: 'It spans the middle half of the data.' },
    { q: 'If Q₁ = 3.5 and Q₃ = 10.5, the semi-interquartile range is', opts: ['3.5', '7', '14', '7.5'], a: 0, why: '(10.5 − 3.5) ⁄ 2 = 3.5.' },
    { q: 'The variance of 2, 4, 6, 8, 10 is', opts: ['8', '6.67', '4', '√8'], a: 0, why: 'Deviations squared sum to 40; 40 ⁄ 5 = 8.' },
    { q: 'The standard deviation of 2, 4, 6, 8, 10 is', opts: ['√8 ≈ 2.83', '8', '4', '2'], a: 0, why: 'It is the square root of the variance 8.' },
    { q: 'A variance can never be', opts: ['Zero', 'Negative', 'Fractional', 'Larger than the mean'], a: 1, why: 'Every squared deviation is non-negative.' },
    { q: 'The standard deviation of the data 5, 5, 5, 5, 5 is', opts: ['0', '5', '1', '25'], a: 0, why: 'There is no spread at all.' },
    { q: 'Which average is least affected by one very large value?', opts: ['Mean', 'Median', 'Sum', 'Product'], a: 1, why: 'The median depends only on position.' },
    { q: 'The best average for "the most popular shoe size sold" is the', opts: ['Mean', 'Median', 'Mode', 'Range'], a: 2, why: 'It identifies the most frequent choice.' },
    { q: 'If every value in a set is increased by 5, the standard deviation', opts: ['Increases by 5', 'Is unchanged', 'Is multiplied by 5', 'Increases by 25'], a: 1, why: 'Shifting every value leaves the spread untouched.' },
    { q: 'If every value is multiplied by 3, the standard deviation', opts: ['Is unchanged', 'Is tripled', 'Is multiplied by 9', 'Is reduced'], a: 1, why: 'Scaling by k scales the spread by |k|.' },
    { q: 'The range of 7, 7, 7, 7 is', opts: ['0', '7', '28', '1'], a: 0, why: 'Largest minus smallest.' },
    { q: 'The median of a set of 9 ordered values is the', opts: ['4th', '5th', '6th', '4.5th'], a: 1, why: '(9 + 1) ⁄ 2 = 5th value.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'probability',
  title: 'Probability',
  blurb: 'Basic probability, complements, independent and mutually exclusive events, and tree diagrams.',
  time: '55 min',
  objectives: [
    'Calculate the probability of simple events',
    'Use the complement rule for "at least" questions',
    'Distinguish mutually exclusive from independent events',
    'Solve multi-stage problems with tree diagrams'
  ],
  body: `
<p class="lead">Probability asks one question repeatedly: <strong>what fraction of the possible outcomes does the event represent?</strong> The whole subject turns on two distinctions — events that cannot happen together, and events that do not influence each other.</p>

<h2>Basic probability</h2>
<div class="formula-box">
  <div class="fb-head">The definition</div>
  <div class="formula-row"><div class="fname">P(A)</div>
    <div class="fexpr">number of favourable outcomes ⁄ total number of equally likely outcomes</div></div>
  <div class="formula-row"><div class="fname">Range</div>
    <div class="fexpr">0 ≤ P(A) ≤ 1 · P(certain) = 1 · P(impossible) = 0</div></div>
  <div class="formula-row"><div class="fname">Complement</div>
    <div class="fexpr">P(not A) = 1 − P(A)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> A fair die is thrown. Find the probability of scoring more than 4
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Total outcomes: 6</div>
    <div class="step"><div class="step-l">Step 2</div>
    Favourable: 5 and 6 — two of them</div>
    <div class="ans">P = 2 ⁄ 6 = 1⁄3</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Use the complement for "at least"</b>
<p>P(at least one) = <strong>1 − P(none)</strong>. Counting "at least one" directly means enumerating every case except the empty one; counting "none" is usually a single multiplication.</p></div></div>

<h2>Combined events</h2>
<div class="formula-box">
  <div class="fb-head">Two rules, two different situations</div>
  <div class="formula-row"><div class="fname">Mutually exclusive (A and B cannot both occur)</div>
    <div class="fexpr">P(A or B) = P(A) + P(B)</div></div>
  <div class="formula-row"><div class="fname">General addition</div>
    <div class="fexpr">P(A or B) = P(A) + P(B) − P(A and B)</div>
    <div class="fnote">The intersection is added twice otherwise.</div></div>
  <div class="formula-row"><div class="fname">Independent (neither affects the other)</div>
    <div class="fexpr">P(A and B) = P(A) × P(B)</div></div>
  <div class="formula-row"><div class="fname">Conditional</div>
    <div class="fexpr">P(A | B) = P(A and B) ⁄ P(B)</div>
    <div class="fnote">"The probability of A given that B has happened."</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The two most-mixed-up words in the syllabus</b>
<p><strong>Mutually exclusive</strong> concerns whether events can occur together (add the probabilities). <strong>Independent</strong> concerns whether one event changes the other (multiply the probabilities). Deciding which applies is usually the whole question.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">2</span> P(A) = 0.4 and P(B) = 0.35, and the events are mutually exclusive. Find P(A or B)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    They cannot both occur, so add</div>
    <div class="step"><div class="step-l">Step 2</div>
    0.4 + 0.35</div>
    <div class="ans">0.75</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> P(A) = 0.5, P(B) = 0.6, and A and B are independent. Find P(A and B)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Independence means multiply</div>
    <div class="step"><div class="step-l">Step 2</div>
    0.5 × 0.6</div>
    <div class="ans">0.30</div>
  </div>
</div>

<h2>Sampling</h2>
<div class="example">
  <div class="example-h"><span class="num">4</span> A bag holds 3 red and 5 blue marbles. Two are drawn at random without replacement. Find P(both red)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    First draw: 3 red out of 8 → 3⁄8</div>
    <div class="step"><div class="step-l">Step 2</div>
    Second draw: only 2 red remain out of 7 → 2⁄7</div>
    <div class="step"><div class="step-l">Step 3</div>
    Multiply along the branches: (3⁄8)(2⁄7) = 6⁄56</div>
    <div class="ans">3⁄28 ≈ 0.107</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>With or without replacement?</b>
<p><strong>With</strong> replacement the denominator stays the same and the events are independent. <strong>Without</strong>, both the numerator and the denominator change on the second draw. The question always states which — read it.</p></div></div>

<h2>Tree diagrams</h2>
<div class="example">
  <div class="example-h"><span class="num">5</span> A biased coin has P(heads) = 0.6. Find P(exactly one head in two tosses)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Path 1</div>
    H then T: 0.6 × 0.4 = 0.24</div>
    <div class="step"><div class="step-l">Path 2</div>
    T then H: 0.4 × 0.6 = 0.24</div>
    <div class="step"><div class="step-l">Step 3</div>
    These paths cannot both happen, so <b>add</b> them</div>
    <div class="ans">0.48</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Along multiply, between add</b>
<p>Follow a single path by multiplying its branches; combine different paths by adding. That single sentence resolves nearly every tree-diagram mistake.</p></div></div>

<h2>Standard sample spaces</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Experiment</th><th>Outcomes</th><th>Useful results</th></tr></thead>
  <tbody>
    <tr><td>Coin</td><td>2</td><td>P(H) = ½</td></tr>
    <tr><td>Die</td><td>6</td><td>P(6) = 1⁄6 · P(even) = ½</td></tr>
    <tr><td>Playing cards</td><td>52</td><td>P(heart) = 1⁄4 · P(face card) = 3⁄13</td></tr>
    <tr><td>Two dice</td><td>36</td><td>P(sum = 7) = 6⁄36 = 1⁄6</td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">6</span> Two dice are thrown. Find the probability that the total is 7
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    6 × 6 = 36 equally likely outcomes</div>
    <div class="step"><div class="step-l">Step 2</div>
    Favourable: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — six of them</div>
    <div class="ans">6⁄36 = 1⁄6</div>
  </div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>P(A) = favourable ⁄ total, always between 0 and 1.</li>
<li>P(not A) = 1 − P(A) — use it for every "at least one" question.</li>
<li>Mutually exclusive → add; independent → multiply.</li>
<li>Without replacement, both counts change after the first draw.</li>
<li>Along the branches multiply, between the branches add.</li>
</ul>
`,
  quiz: [
    { q: 'The probability of getting a head with a fair coin is', opts: ['0', '½', '¼', '1'], a: 1, why: 'One favourable outcome out of two equally likely ones.' },
    { q: 'The probability of rolling a 6 on a fair die is', opts: ['1', '1⁄6', '1⁄3', '6'], a: 1, why: 'One face out of six.' },
    { q: 'The probability of rolling an even number on a die is', opts: ['1⁄2', '1⁄3', '1⁄6', '2⁄3'], a: 0, why: '2, 4 and 6 — three of six outcomes.' },
    { q: 'The probability of drawing a heart from a pack of 52 cards is', opts: ['1⁄2', '1⁄4', '1⁄13', '13⁄52'], a: 1, why: '13 hearts in 52 cards.' },
    { q: 'The probability of drawing a face card is', opts: ['3⁄13', '1⁄4', '12⁄52', '1⁄13'], a: 0, why: '12 face cards in 52: J, Q, K of four suits.' },
    { q: 'If P(A) = 0.3, then P(not A) =', opts: ['0.3', '0.7', '1', '0.6'], a: 1, why: 'The complement rule: 1 − 0.3.' },
    { q: 'The probability that a randomly chosen day is a Monday is approximately', opts: ['1⁄7', '1⁄5', '1⁄365', '1⁄2'], a: 0, why: 'One Monday in seven days.' },
    { q: 'P(A) = 0.4 and P(B) = 0.35; the events are mutually exclusive. P(A or B) is', opts: ['0.75', '0.14', '0.65', '0.05'], a: 0, why: 'Add them: mutually exclusive events cannot overlap.' },
    { q: 'If P(A) = 0.5 and P(B) = 0.6 and they are independent, P(A and B) is', opts: ['0.30', '1.10', '0.10', '0.55'], a: 0, why: 'Independent events multiply.' },
    { q: 'P(A ∪ B) in general equals', opts: ['P(A) + P(B) − P(A ∩ B)', 'P(A) + P(B)', 'P(A) × P(B)', 'P(A) − P(B)'], a: 0, why: 'The intersection would otherwise be counted twice.' },
    { q: 'Two events cannot both occur. They are', opts: ['Independent', 'Mutually exclusive', 'Complementary', 'Certain'], a: 1, why: 'That is the definition of mutually exclusive.' },
    { q: 'Drawing a card and replacing it before the next draw makes the draws', opts: ['Dependent', 'Independent', 'Mutually exclusive', 'Impossible'], a: 1, why: 'The pack is identical for each draw.' },
    { q: 'A bag holds 3 red and 5 blue marbles. P(red) on one draw is', opts: ['3⁄5', '3⁄8', '5⁄8', '1⁄3'], a: 1, why: '3 red out of 8 marbles.' },
    { q: 'The same bag: two marbles are drawn without replacement. P(both red) is', opts: ['3⁄28', '9⁄64', '3⁄8', '1⁄4'], a: 0, why: '(3⁄8) × (2⁄7) = 6⁄56 = 3⁄28.' },
    { q: 'Two dice are thrown. P(total = 7) is', opts: ['1⁄6', '1⁄12', '7⁄36', '1⁄9'], a: 0, why: 'Six favourable pairs out of 36.' },
    { q: 'Two dice are thrown. P(total = 10) is', opts: ['1⁄12', '1⁄6', '1⁄9', '3⁄36'], a: 0, why: '(4,6), (5,5), (6,4) — three of 36.' },
    { q: 'A coin is tossed twice. P(exactly one head) is', opts: ['1⁄2', '1⁄4', '3⁄4', '1'], a: 0, why: 'HT and TH — two of four outcomes.' },
    { q: 'A coin is tossed twice. P(at least one head) is', opts: ['3⁄4', '1⁄4', '1⁄2', '1'], a: 0, why: '1 − P(no heads) = 1 − 1⁄4.' },
    { q: 'A biased coin has P(H) = 0.6. The probability of exactly one head in two tosses is', opts: ['0.48', '0.36', '0.24', '0.60'], a: 0, why: '(0.6 × 0.4) + (0.4 × 0.6) = 0.48.' },
    { q: 'P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Then P(A or B) is', opts: ['0.7', '0.9', '0.2', '0.6'], a: 0, why: '0.4 + 0.5 − 0.2.' },
    { q: 'If A and B are independent with P(A) = 0.5 and P(A ∩ B) = 0.15, then P(B) is', opts: ['0.3', '0.65', '0.75', '0.1'], a: 0, why: '0.5 × P(B) = 0.15.' },
    { q: 'Which of the following must be true for any event A?', opts: ['P(A) ≥ 1', '0 ≤ P(A) ≤ 1', 'P(A) ≤ 0', 'P(A) = ½'], a: 1, why: 'Probabilities are fractions of a whole.' },
    { q: 'P(impossible event) is', opts: ['0', '1', '½', 'Undefined'], a: 0, why: 'No outcomes are favourable.' },
    { q: 'A single die is thrown once. P(score less than 3) is', opts: ['1⁄3', '1⁄2', '2⁄3', '1⁄6'], a: 0, why: 'Scores 1 and 2 — two of six.' },
    { q: 'The probability of getting at least two heads in three tosses of a fair coin is', opts: ['1⁄2', '1⁄4', '3⁄8', '1⁄8'], a: 0, why: 'Favourable: HHT, HTH, THH, HHH = 4 of 8.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'differentiation',
  title: 'Differentiation',
  blurb: 'The rules of differentiation, gradients, stationary points and maximum–minimum problems.',
  time: '60 min',
  objectives: [
    'Differentiate polynomials using the power rule',
    'Find the gradient of a curve at a given point',
    'Locate and classify stationary points',
    'Apply differentiation to rate-of-change and optimisation problems'
  ],
  body: `
<p class="lead">Differentiation answers one question about a curve: <strong>how steep is it here, and which way is it turning?</strong> The mechanics are a single rule applied repeatedly; the skill lies in reading the question for what must be maximised, minimised or found.</p>

<h2>The power rule</h2>
<div class="formula-box">
  <div class="fb-head">Differentiating y = axⁿ</div>
  <div class="formula-row"><div class="fname">Rule</div>
    <div class="fexpr">dy ⁄ dx = a n xⁿ⁻¹</div>
    <div class="fnote">Bring the power down in front, then reduce the power by one.</div></div>
  <div class="formula-row"><div class="fname">Constant</div>
    <div class="fexpr">d ⁄ dx (c) = 0</div></div>
  <div class="formula-row"><div class="fname">Sum rule</div>
    <div class="fexpr">Differentiate each term separately</div></div>
  <div class="formula-row"><div class="fname">Negative and fractional powers</div>
    <div class="fexpr">x⁻² → −2x⁻³ · √x = x<sup>½</sup> → ½x<sup>−½</sup> · 1⁄x = x⁻¹ → −x⁻²</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Differentiate y = 3x⁴ − 2x² + 7x − 5
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Term by term: 3 × 4x³ = 12x³</div>
    <div class="step"><div class="step-l">Step 2</div>
    2 × 2x = 4x, so the second term gives −4x</div>
    <div class="step"><div class="step-l">Step 3</div>
    7x → 7 and −5 → 0</div>
    <div class="ans">dy ⁄ dx = 12x³ − 4x + 7</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Differentiate y = 1⁄x and y = √x
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Rewrite first</div>
    1⁄x = x⁻¹ and √x = x<sup>½</sup></div>
    <div class="step"><div class="step-l">Power rule</div>
    x⁻¹ → −x⁻² · x<sup>½</sup> → ½ x<sup>−½</sup></div>
    <div class="ans">d ⁄ dx (1⁄x) = −1⁄x² · d ⁄ dx (√x) = 1 ⁄ (2√x)</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Rewrite before you differentiate</b>
<p>Every expression should be in the form <strong>axⁿ</strong> before the rule is applied. √x, 1⁄x² and 3⁄x⁵ become x<sup>½</sup>, x⁻² and 3x⁻⁵ — and only then can the power come down.</p></div></div>

<h2>Gradient of a curve at a point</h2>
<div class="example">
  <div class="example-h"><span class="num">3</span> Find the gradient of y = x² − 4x + 3 at x = 3
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    dy ⁄ dx = 2x − 4</div>
    <div class="step"><div class="step-l">Step 2</div>
    At x = 3: 2(3) − 4</div>
    <div class="ans">Gradient = 2</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Find the equation of the tangent to y = x² at the point (2, 4)
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    dy ⁄ dx = 2x, so at x = 2 the gradient is <b>4</b></div>
    <div class="step"><div class="step-l">Step 2</div>
    y − 4 = 4(x − 2)</div>
    <div class="ans">y = 4x − 4</div>
  </div>
</div>

<h2>Stationary points</h2>
<div class="formula-box">
  <div class="fb-head">Where the gradient is zero</div>
  <div class="formula-row"><div class="fname">Condition</div>
    <div class="fexpr">dy ⁄ dx = 0</div></div>
  <div class="formula-row"><div class="fname">Second derivative test</div>
    <div class="fexpr">d²y ⁄ dx² &lt; 0 → <b>maximum</b> · d²y ⁄ dx² &gt; 0 → <b>minimum</b></div>
    <div class="fnote">Zero → the test fails; use a gradient table instead.</div></div>
  <div class="formula-row"><div class="fname">Without the second derivative</div>
    <div class="fexpr">Test the gradient on each side: + then − gives a max; − then + gives a min</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Find and classify the stationary points of y = x² − 6x + 11
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    dy ⁄ dx = 2x − 6 = 0 → x = 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    d²y ⁄ dx² = 2, which is positive</div>
    <div class="step"><div class="step-l">Step 3</div>
    y = 9 − 18 + 11 = 2</div>
    <div class="ans">Minimum point at (3, 2)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Find and classify the stationary points of y = 12x − x³
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    dy ⁄ dx = 12 − 3x² = 0 → x² = 4 → x = ±2</div>
    <div class="step"><div class="step-l">Step 2</div>
    d²y ⁄ dx² = −6x. At x = 2 it is −12 &lt; 0 → maximum; at x = −2 it is 12 &gt; 0 → minimum</div>
    <div class="step"><div class="step-l">Step 3</div>
    y(2) = 24 − 8 = 16 · y(−2) = −24 + 8 = −16</div>
    <div class="ans">Maximum (2, 16) and minimum (−2, −16)</div>
  </div>
</div>

<h2>Optimisation</h2>
<div class="example">
  <div class="example-h"><span class="num">7</span> A rectangle has a perimeter of 40 cm. Find the dimensions that give the greatest area
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    2(l + w) = 40 → l + w = 20 → w = 20 − l</div>
    <div class="step"><div class="step-l">Step 2</div>
    A = l(20 − l) = 20l − l²</div>
    <div class="step"><div class="step-l">Step 3</div>
    dA ⁄ dl = 20 − 2l = 0 → l = 10</div>
    <div class="step"><div class="step-l">Step 4</div>
    d²A ⁄ dl² = −2 &lt; 0, so it is a maximum</div>
    <div class="ans">A square of side 10 cm (area 100 cm²)</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Write the quantity before differentiating</b>
<p>Optimisation never starts with dy/dx — it starts with a single formula built from the words of the question, with everything expressed in terms of one variable. Getting that formula right is most of the work.</p></div></div>

<h2>Rates of change</h2>
<div class="formula-box">
  <div class="fb-head">Related rates</div>
  <div class="formula-row"><div class="fname">Interpretation</div>
    <div class="fexpr">dx ⁄ dt is the rate at which x changes with time</div>
    <div class="fnote">Given x = t³ + 2t, then dx ⁄ dt = 3t² + 2.</div></div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>Bring the power down in front and reduce the power by one.</li>
<li>Rewrite roots and reciprocals as powers first.</li>
<li>dy/dx at a point gives the gradient there.</li>
<li>Stationary points satisfy dy/dx = 0; classify with the second derivative.</li>
<li>Maximise by forming one expression, differentiating, and solving.</li>
</ul>
`,
  quiz: [
    { q: 'd ⁄ dx (x³) equals', opts: ['3x²', 'x²', '3x', 'x³'], a: 0, why: 'Bring 3 down and reduce the power to 2.' },
    { q: 'd ⁄ dx (5x⁴) equals', opts: ['20x³', '5x³', '20x⁴', 'x³'], a: 0, why: '5 × 4 = 20 and the power falls to 3.' },
    { q: 'd ⁄ dx (3x² − 4x + 7) equals', opts: ['6x − 4', '6x − 4 + 7', '3x − 4', '6x + 7'], a: 0, why: 'The constant differentiates to zero.' },
    { q: 'The derivative of a constant is', opts: ['0', '1', 'The constant itself', 'Undefined'], a: 0, why: 'A constant has no rate of change.' },
    { q: 'd ⁄ dx (7x) equals', opts: ['7', '7x', '0', '1'], a: 0, why: 'The gradient of the line y = 7x is 7.' },
    { q: 'd ⁄ dx (1⁄x) equals', opts: ['−1⁄x²', '1⁄x²', '−x⁻¹', 'ln x'], a: 0, why: 'Rewrite as x⁻¹: −x⁻².' },
    { q: 'd ⁄ dx (√x) equals', opts: ['1 ⁄ (2√x)', '2√x', '1⁄x', '½ x²'], a: 0, why: 'x<sup>½</sup> → ½ x<sup>−½</sup> = 1 ⁄ (2√x).' },
    { q: 'd ⁄ dx (x⁻²) equals', opts: ['−2x⁻³', '2x⁻¹', '−x⁻³', 'x⁻³'], a: 0, why: 'Power rule with n = −2.' },
    { q: 'If y = 4x³ − 2x, then dy ⁄ dx at x = 1 is', opts: ['10', '12', '6', '2'], a: 0, why: 'dy/dx = 12x² − 2; at x = 1 it is 10.' },
    { q: 'The gradient of y = x² − 4x + 3 at x = 3 is', opts: ['2', '0', '−2', '6'], a: 0, why: '2x − 4 at x = 3 gives 2.' },
    { q: 'The gradient of y = x² − 4x + 3 at x = 2 is', opts: ['0', '2', '−4', '4'], a: 0, why: '2(2) − 4 = 0 — a stationary point.' },
    { q: 'The tangent to y = x² at (2, 4) has equation', opts: ['y = 4x − 4', 'y = 2x', 'y = 4x + 4', 'y = x + 2'], a: 0, why: 'Gradient 4 through (2, 4).' },
    { q: 'A stationary point occurs where', opts: ['dy ⁄ dx = 0', 'y = 0', 'd²y ⁄ dx² = 0', 'x = 0'], a: 0, why: 'The tangent is horizontal there.' },
    { q: 'If d²y ⁄ dx² is negative at a stationary point, it is a', opts: ['Maximum', 'Minimum', 'Point of inflection', 'Horizontal point of inflection'], a: 0, why: 'The curve is concave down, shaped like an upside-down bowl.' },
    { q: 'If d²y ⁄ dx² is positive at a stationary point, it is a', opts: ['Minimum', 'Maximum', 'Neither', 'Always at x = 0'], a: 0, why: 'The curve is concave up.' },
    { q: 'y = x² − 6x + 11 has a stationary point at', opts: ['x = 3', 'x = 6', 'x = −3', 'x = 11'], a: 0, why: '2x − 6 = 0.' },
    { q: 'The stationary value of y = x² − 6x + 11 is', opts: ['2', '−2', '11', '9'], a: 0, why: 'At x = 3: 9 − 18 + 11 = 2.' },
    { q: 'y = 12x − x³ has a maximum at x =', opts: ['2', '−2', '4', '0'], a: 0, why: '12 − 3x² = 0 gives x = 2, where the second derivative is negative.' },
    { q: 'The second derivative of y = x⁴ is', opts: ['12x²', '4x³', '24x', 'x²'], a: 0, why: '4x³ then 12x².' },
    { q: 'd ⁄ dx (2x³ + 5) equals', opts: ['6x²', '6x', '2x²', '5'], a: 0, why: 'The 5 differentiates away.' },
    { q: 'A rectangle with a fixed perimeter has maximum area when it is', opts: ['A square', 'As long as possible', 'Twice as long as wide', 'A golden rectangle'], a: 0, why: 'For l + w fixed, lw is greatest when l = w.' },
    { q: 'The gradient of a horizontal line is', opts: ['0', '1', '∞', 'Undefined'], a: 0, why: 'There is no rise over the run.' },
    { q: 'If x = t³ + 2t, then dx ⁄ dt equals', opts: ['3t² + 2', 't² + 2', '3t²', 't³ + 2'], a: 0, why: 'Apply the power rule with respect to t.' },
    { q: 'Differentiating the product of two functions u and v requires', opts: ['The product rule: u′v + uv′', 'The quotient rule only', 'No special rule', 'Differentiating u only'], a: 0, why: 'Each factor in turn is differentiated, the other held fixed.' },
    { q: 'The gradient of y = 3x² + 2x at x = 2 is', opts: ['14', '12', '16', '20'], a: 0, why: 'dy ⁄ dx = 6x + 2, and at x = 2 that is 12 + 2 = 14.' }
  ]
});

JAMB.addChapter('mathematics', {
  id: 'integration',
  title: 'Integration',
  blurb: 'Indefinite and definite integrals, constants of integration, and area under a curve.',
  time: '60 min',
  objectives: [
    'Integrate powers of x and constants',
    'Include the constant of integration where required',
    'Evaluate definite integrals using the Fundamental Theorem',
    'Find the area under a curve between two limits'
  ],
  body: `
<p class="lead">Integration is differentiation run backwards: given the rate, recover the quantity. It reverses the power rule, and the definite version adds a precise geometric meaning — <strong>the area under a curve</strong>.</p>

<h2>Indefinite integration</h2>
<div class="formula-box">
  <div class="fb-head">Reverse of the power rule</div>
  <div class="formula-row"><div class="fname">Powers</div>
    <div class="fexpr">∫ xⁿ dx = xⁿ⁺¹ ⁄ (n + 1) + C   (n ≠ −1)</div></div>
  <div class="formula-row"><div class="fname">Constants</div>
    <div class="fexpr">∫ k dx = kx + C</div></div>
  <div class="formula-row"><div class="fname">Term by term</div>
    <div class="fexpr">Integrate each term separately and add one constant at the end</div></div>
  <div class="formula-row"><div class="fname">The constant C</div>
    <div class="fexpr">Required for <b>indefinite</b> integrals — a family of curves, one for each C</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Find ∫ 3x² dx
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Raise the power: 2 + 1 = 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    Divide by the new power: 3x³ ⁄ 3 = x³</div>
    <div class="ans">x³ + C</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Find ∫ (6x + 4) dx
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    6x → 6x² ⁄ 2 = 3x²</div>
    <div class="step"><div class="step-l">Step 2</div>
    4 → 4x</div>
    <div class="ans">3x² + 4x + C</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Find ∫ (5 − 2x) dx
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    5 → 5x</div>
    <div class="step"><div class="step-l">Step 2</div>
    −2x → −2x² ⁄ 2 = −x²</div>
    <div class="ans">5x − x² + C</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Add C, always</b>
<p>An indefinite integral without "+ C" is incomplete: 3x² has infinitely many antiderivatives differing by a constant. Examiners award the mark for the constant specifically — do not lose it through habit.</p></div></div>

<div class="formula-box">
  <div class="fb-head">Special cases</div>
  <div class="formula-row"><div class="fname">Reciprocal</div>
    <div class="fexpr">∫ (1⁄x) dx = ln |x| + C</div>
    <div class="fnote">The only power that does not use n + 1.</div></div>
  <div class="formula-row"><div class="fname">Negative powers</div>
    <div class="fexpr">∫ x⁻² dx = −x⁻¹ + C = −1⁄x + C</div></div>
  <div class="formula-row"><div class="fname">Roots</div>
    <div class="fexpr">∫ x<sup>½</sup> dx = ⅔ x<sup>3⁄2</sup> + C = (⅔)x√x + C</div></div>
</div>

<h2>Definite integration</h2>
<div class="formula-box">
  <div class="fb-head">The Fundamental Theorem of Calculus</div>
  <div class="formula-row"><div class="fname">Evaluation</div>
    <div class="fexpr">∫ₐᵇ f(x) dx = F(b) − F(a)</div>
    <div class="fnote">F is any antiderivative; the constant C cancels out.</div></div>
  <div class="formula-row"><div class="fname">Notation</div>
    <div class="fexpr">The lower limit sits at the bottom of ∫, the upper limit at the top</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Evaluate ∫₀² 3x² dx
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Antiderivative: x³</div>
    <div class="step"><div class="step-l">Step 2</div>
    At the upper limit: 2³ = 8</div>
    <div class="step"><div class="step-l">Step 3</div>
    At the lower limit: 0³ = 0, subtract</div>
    <div class="ans">8</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Evaluate ∫₁³ x² dx
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Antiderivative x³ ⁄ 3</div>
    <div class="step"><div class="step-l">Step 2</div>
    Upper: 27 ⁄ 3 = 9</div>
    <div class="step"><div class="step-l">Step 3</div>
    Lower: 1 ⁄ 3, subtract</div>
    <div class="ans">9 − 1⁄3 = 26⁄3 ≈ 8.67</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Evaluate ∫₁² (2x + 1) dx
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Antiderivative: x² + x</div>
    <div class="step"><div class="step-l">Step 2</div>
    At 2: 4 + 2 = 6</div>
    <div class="step"><div class="step-l">Step 3</div>
    At 1: 1 + 1 = 2, subtract</div>
    <div class="ans">4</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Subtract the lower limit second</b>
<p>Write the bracketed evaluation as [F(x)]ₐᵇ = F(b) − F(a) before putting numbers in. The commonest error in definite integration is subtracting a two-term lower value without brackets — (1 + 1) must be subtracted as a whole.</p></div></div>

<h2>Area under a curve</h2>
<div class="formula-box">
  <div class="fb-head">Geometric meaning</div>
  <div class="formula-row"><div class="fname">Area</div>
    <div class="fexpr">A = ∫ₐᵇ y dx when y ≥ 0 on the interval</div></div>
  <div class="formula-row"><div class="fname">Area between two curves</div>
    <div class="fexpr">∫ₐᵇ (upper − lower) dx</div></div>
  <div class="formula-row"><div class="fname">Caution</div>
    <div class="fexpr">If the curve dips below the x-axis, that portion counts as <b>negative</b> — split the integral at the crossing</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> Find the area under y = x² from x = 0 to x = 3
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    A = ∫₀³ x² dx = [ x³ ⁄ 3 ]₀³</div>
    <div class="step"><div class="step-l">Step 2</div>
    27 ⁄ 3 − 0</div>
    <div class="ans">9 square units</div>
  </div>
</div>

<h2>Finding the original function</h2>
<div class="example">
  <div class="example-h"><span class="num">8</span> Given dy ⁄ dx = 6x + 4 and y = 10 when x = 0, find y
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Integrate: y = 3x² + 4x + C</div>
    <div class="step"><div class="step-l">Step 2</div>
    Substitute x = 0, y = 10: 10 = 0 + 0 + C, so C = 10</div>
    <div class="ans">y = 3x² + 4x + 10</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Two steps: integrate, then pin down C</b>
<p>Every initial-condition question follows the same script. Integrate first to produce a general answer with C, then substitute the given values to fix C. Only after that should you write the final function.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>∫ xⁿ dx = xⁿ⁺¹ ⁄ (n + 1) + C; the constant is mandatory for indefinite integrals.</li>
<li>∫ (1⁄x) dx = ln |x| + C is the exception to the power rule.</li>
<li>Definite integrals: evaluate the antiderivative at the upper limit minus the lower.</li>
<li>∫ₐᵇ y dx gives the area under the curve when y is non-negative.</li>
<li>Integrate, then use the given condition to find C.</li>
</ul>
`,
  quiz: [
    { q: '∫ 3x² dx equals', opts: ['x³ + C', '3x³ + C', '6x + C', 'x³'], a: 0, why: 'Raise to 3 and divide by 3: 3x³⁄3.' },
    { q: '∫ x³ dx equals', opts: ['x⁴ ⁄ 4 + C', '3x² + C', 'x⁴ + C', '4x³ + C'], a: 0, why: 'Add 1 to the power and divide by it.' },
    { q: '∫ (6x + 4) dx equals', opts: ['3x² + 4x + C', '6x² + 4x + C', '3x² + 4 + C', '12x + C'], a: 0, why: '6x → 3x² and 4 → 4x.' },
    { q: '∫ 5 dx equals', opts: ['5x + C', '5 + C', 'x + C', 'C'], a: 0, why: 'A constant integrates to the constant times x.' },
    { q: '∫ (5 − 2x) dx equals', opts: ['5x − x² + C', '5x − 2x² + C', '5 − x² + C', '2x − x² + C'], a: 0, why: '−2x → −2x²⁄2 = −x².' },
    { q: '∫ (1⁄x) dx equals', opts: ['ln |x| + C', 'x⁻² + C', '−1⁄x² + C', '1 + C'], a: 0, why: 'The reciprocal is the exception to the power rule.' },
    { q: '∫ x⁻² dx equals', opts: ['−1⁄x + C', '1⁄x + C', '−2x⁻³ + C', 'x⁻¹ + C'], a: 0, why: 'x⁻¹ ⁄ (−1) = −x⁻¹ = −1⁄x.' },
    { q: '∫ √x dx equals', opts: ['(⅔)x<sup>3⁄2</sup> + C', '2√x + C', '⅔ x<sup>1⁄2</sup> + C', '(⅔)x² + C'], a: 0, why: 'x<sup>½</sup> → x<sup>3⁄2</sup> ⁄ (3⁄2).' },
    { q: '∫ (2x + 3x²) dx equals', opts: ['x² + x³ + C', 'x² + 3x³ + C', '2 + 6x + C', 'x² + x³'], a: 0, why: '2x → x² and 3x² → x³, plus C.' },
    { q: 'A constant of integration is needed because', opts: ['Derivatives of constants vanish', 'The limits are unknown', 'Integration is approximate', 'Powers must be increased'], a: 0, why: 'Every antiderivative differs by an arbitrary constant.' },
    { q: '∫₀² 3x² dx equals', opts: ['8', '12', '4', '24'], a: 0, why: '[x³]₀² = 8 − 0.' },
    { q: '∫₁³ x² dx equals', opts: ['26⁄3', '9', '27', '8'], a: 0, why: '27⁄3 − 1⁄3 = 26⁄3.' },
    { q: '∫₁² (2x + 1) dx equals', opts: ['4', '6', '2', '8'], a: 0, why: '[x² + x]₁² = 6 − 2.' },
    { q: '∫₀¹ (3x² + 2x) dx equals', opts: ['2', '5', '1', '3'], a: 0, why: '[x³ + x²]₀¹ = 1 + 1 = 2.' },
    { q: '∫₀⁴ 6x dx equals', opts: ['48', '24', '96', '12'], a: 0, why: '[3x²]₀⁴ = 48.' },
    { q: 'The value of ∫₂⁵ 4 dx is', opts: ['12', '20', '8', '4'], a: 0, why: '[4x]₂⁵ = 20 − 8.' },
    { q: '∫ₐᵇ f(x) dx is evaluated as', opts: ['F(b) − F(a)', 'F(a) − F(b)', 'F(b) + F(a)', 'F′(b) − F′(a)'], a: 0, why: 'Upper limit first, then subtract the lower.' },
    { q: 'The area under y = x² from 0 to 3 is', opts: ['9', '27', '3', '18'], a: 0, why: '[x³⁄3]₀³ = 9.' },
    { q: 'The area under y = 2x from 0 to 5 is', opts: ['25', '10', '50', '5'], a: 0, why: '∫₀⁵ 2x dx = [ x² ]₀⁵ = 25.' },
    { q: 'If y ≥ 0 on [a, b], the area between the curve and the x-axis is', opts: ['∫ₐᵇ y dx', '−∫ₐᵇ y dx', '∫ₐᵇ x dy', '(∫ₐᵇ y dx)²'], a: 0, why: 'That is the geometric meaning of the definite integral.' },
    { q: 'The area between the curves y = upper and y = lower from a to b is', opts: ['∫ₐᵇ (upper − lower) dx', '∫ₐᵇ (lower − upper) dx', '∫ₐᵇ (upper + lower) dx', '∫ₐᵇ upper dx only'], a: 0, why: 'The height of the strip is upper minus lower.' },
    { q: 'Given dy ⁄ dx = 6x + 4 and y = 10 when x = 0, then y equals', opts: ['3x² + 4x + 10', '3x² + 4x', '6x² + 4x + 10', '3x² + 4x − 10'], a: 0, why: 'Integrate, then set x = 0 to find C = 10.' },
    { q: 'Given dy ⁄ dx = 4x and y = 5 when x = 0, y equals', opts: ['2x² + 5', '4x² + 5', '2x²', '8x + 5'], a: 0, why: '∫ 4x dx = 2x² + C, and C = 5.' },
    { q: 'The definite integral of a constant k from a to b equals', opts: ['k(b − a)', 'k(b + a)', 'k b', 'k a'], a: 0, why: '[kx]ₐᵇ = kb − ka.' },
    { q: 'If the curve crosses the x-axis inside the interval, the total area is found by', opts: ['Splitting the integral at the crossing and taking absolute values', 'Integrating once as usual', 'Adding the two signed areas together', 'Ignoring the crossing'], a: 0, why: 'A signed integral cancels the positive and negative portions; area must be measured positively.' }
  ]
});
