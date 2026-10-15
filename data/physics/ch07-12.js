/* JAMB 2027 Prep — Physics, Chapters 7–12 */

JAMB.addChapter('physics', {
  id: 'pressure',
  title: 'Pressure',
  blurb: 'Definition of pressure, atmospheric pressure, barometers, and pressure in gases.',
  time: '45 min',
  objectives: [
    'Define pressure and state its SI unit',
    'Calculate pressure from force and area in solids',
    'Explain how a mercury barometer measures atmospheric pressure',
    'Describe manometers and open/closed-end pressure gauges',
    'Explain the workings of a simple Bourdon gauge and tyre gauge'
  ],
  body: `
<p class="lead">Pressure answers a question that force alone cannot: <em>how concentrated is that force?</em> A sharp knife cuts because its edge applies your whole force to a tiny area. The unit — the pascal — is one of the most examinable in the whole syllabus.</p>

<h2>Pressure in solids</h2>
<div class="formula-box">
  <div class="fb-head">Pressure</div>
  <div class="formula-row"><div class="fname">Definition</div><div class="fexpr">P = <span class="frac"><span>F</span><span>A</span></span></div><div class="fnote">F in newtons, A in m², P in pascals (Pa).</div></div>
  <div class="formula-row"><div class="fname">Equivalent units</div><div class="fexpr">1 Pa = 1 N m<sup>−2</sup></div><div class="fnote">Also written N/m².</div></div>
  <div class="formula-row"><div class="fname">Pressure in a column of liquid</div><div class="fexpr">P = ρ g h</div><div class="fnote">ρ = density (kg/m³), g = 9.8 m/s², h = height (m).</div></div>
  <div class="formula-row"><div class="fname">Total pressure</div><div class="fexpr">P<sub>total</sub> = P<sub>atm</sub> + ρ g h</div><div class="fnote">Add atmospheric pressure when the liquid is open to the air.</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Pressure depends on depth, not shape</b>
<p>For a liquid in a connected vessel, the pressure at a given depth is the same <b>regardless of the vessel's shape</b>. A wide beaker and a narrow test tube filled to the same height have equal pressure at the bottom. This is the hydrostatic paradox — a classic question.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Pressure of a solid on a surface</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A block of mass 60 kg stands on the floor on a base of area 0.3 m². (g = 10 m/s²)</div>
    <div class="step"><div class="step-l">Step 1 — force equals weight</div>
    F = mg = 60 × 10 = 600 N</div>
    <div class="step"><div class="step-l">Step 2 — divide by area</div>
    P = 600 / 0.3</div>
    <div class="ans">Answer: 2000 Pa</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Pressure at depth in a liquid</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Water (ρ = 1000 kg/m³) in a tank, depth 5 m, g = 9.8 m/s². Find the pressure at the bottom due to the water alone.</div>
    <div class="step"><div class="step-l">Apply P = ρgh</div>
    P = 1000 × 9.8 × 5</div>
    <div class="ans">Answer: 49 000 Pa = 49 kPa</div>
  </div>
</div>

<h2>Atmospheric pressure</h2>
<p>Air has mass, so it exerts a weight on everything below it. The pressure of the atmosphere at sea level is approximately:</p>
<div class="eq">P<sub>atm</sub> ≈ 1.01 × 10<sup>5</sup> Pa = 760 mmHg = 76 cmHg = 10.3 m of water</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Unit</th><th>Value</th></tr></thead>
  <tbody>
    <tr><td>Pascal</td><td>1.01 × 10<sup>5</sup> Pa (or 101 325 Pa)</td></tr>
    <tr><td>Millimetres of mercury</td><td>760 mmHg</td></tr>
    <tr><td>Centimetres of mercury</td><td>76 cmHg</td></tr>
    <tr><td>Atmospheres</td><td>1 atm</td></tr>
    <tr><td>Metres of water</td><td>≈ 10.3 m</td></tr>
    <tr><td>Millibars</td><td>1013 mbar</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why 760 mmHg and not more?</b>
<p>The atmosphere can only support a column of mercury about <b>760 mm</b> tall — that is exactly how much the air's weight balances. Water is far less dense, so the same pressure supports about <b>10.3 m</b> of water. This is why a straw drink works: you reduce the pressure inside your mouth and atmospheric pressure pushes the liquid up.</p></div></div>

<h2>The mercury barometer</h2>
<p>Invented by Torricelli. A glass tube about 1 m long, filled with mercury, is inverted into a mercury reservoir with the open end submerged.</p>
<ul>
<li>The mercury falls until the weight of the remaining column equals the atmospheric pressure pushing on the reservoir surface.</li>
<li>The space above the column is a <strong>vacuum</strong> (Torricellian vacuum), so it exerts no pressure.</li>
<li>The vertical height is <strong>760 mm at sea level</strong>, measured from the reservoir surface to the top of the column — not from the bottom of the tube.</li>
<li>Weather changes alter the height: higher when the weather is fine, lower in stormy conditions.</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The classic barometer trap</b>
<p>Only the <b>vertical height above the free surface</b> matters. Tilting the tube, widening it, or lifting it higher out of the reservoir does not change the 760 mm reading. <b>The diameter of the tube is irrelevant.</b></p></div></div>

<h2>The manometer</h2>
<p>A U-tube containing liquid, used to measure the pressure of gas in a connected container.</p>
<ul>
<li><strong>Open-ended:</strong> the difference in liquid levels gives the pressure <em>above</em> atmospheric. Height difference <i>h</i> corresponds to ρgh.</li>
<li><strong>Closed-ended:</strong> one arm is sealed above the liquid. If the closed arm contains a vacuum, the pressure in the gas equals ρgh exactly, because the trapped space contributes nothing.</li>
</ul>

<div class="example">
  <div class="example-h"><span class="num">3</span> Reading a manometer</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    An open-tube manometer shows the level 12 cm higher on the open side than on the gas side. The liquid is water (ρ = 1000 kg/m³), g = 10 m/s².</div>
    <div class="step"><div class="step-l">Gauge pressure = ρgh</div>
    h = 0.12 m → P = 1000 × 10 × 0.12 = 1200 Pa</div>
    <div class="step"><div class="step-l">Absolute pressure</div>
    P<sub>abs</sub> = P<sub>atm</sub> + 1200 Pa</div>
    <div class="ans">Answer: gauge pressure 1200 Pa above atmospheric</div>
  </div>
</div>

<h3>Gauge vs absolute pressure</h3>
<div class="eq">P<sub>absolute</sub> = P<sub>atm</sub> + P<sub>gauge</sub></div>
<p><strong>Gauge pressure</strong> is measured relative to atmospheric — a tyre gauge reading 32 psi means 32 psi <em>above</em> air pressure. <strong>Absolute pressure</strong> includes the atmosphere. If a gauge reads 0, the absolute pressure is still about 10<sup>5</sup> Pa.</p>

<h2>The Bourdon gauge</h2>
<p>Used for tyre pressure. A coiled, curved metal tube tends to straighten as pressure inside rises. The coil unwinds slightly, and a mechanism converts this small movement into a needle rotation on a dial.</p>
<ul>
<li>Pressure enters the tube → tube tries to straighten → coil uncoils → needle moves.</li>
<li>Reads <strong>zero at atmospheric pressure</strong> — so it measures gauge pressure.</li>
</ul>

<h2>Pressure in gases</h2>
<p>Unlike liquids, gases are compressible, so a trapped gas is often modelled as behaving like a spring: compress it and the pressure rises. The gas laws in the next chapter quantify exactly how.</p>

<h2>Chapter recap</h2>
<ul>
<li>P = F/A; SI unit pascal = N/m².</li>
<li>Fluid pressure: P = ρgh; total = P<sub>atm</sub> + ρgh.</li>
<li>Atmospheric pressure supports 760 mmHg or ≈ 10.3 m of water.</li>
<li>Barometer height depends only on vertical height above the reservoir — not tube width.</li>
<li>P<sub>absolute</sub> = P<sub>atm</sub> + P<sub>gauge</sub>.</li>
</ul>
`,
  quiz: [
    { q: 'The SI unit of pressure is the', opts: ['newton', 'pascal', 'joule', 'watt'], a: 1, why: 'Pressure = force/area = N/m², and this is named the pascal (Pa).' },
    { q: 'A force of 200 N acts on an area of 0.5 m². The pressure is', opts: ['100 Pa', '400 Pa', '0.0025 Pa', '1000 Pa'], a: 1, why: 'P = F/A = 200/0.5 = 400 Pa.' },
    { q: 'Atmospheric pressure at sea level is equivalent to', opts: ['760 mm of water', '760 mm of mercury', '10.3 mm of mercury', '1013 cm of water'], a: 1, why: 'The standard value is 760 mmHg (also 1.01 × 10⁵ Pa or about 10.3 m of water).' },
    { q: 'In a mercury barometer, the space above the mercury column contains', opts: ['Air at atmospheric pressure', 'A vacuum', 'Water vapour', 'Compressed mercury'], a: 1, why: 'The space is a Torricellian vacuum, so it exerts no downward pressure — the column is supported entirely by the atmosphere.' },
    { q: 'The height of a barometer reading changes with', opts: ['The diameter of the tube', 'The length of the tube', 'Weather conditions', 'The amount of mercury poured in'], a: 2, why: 'Atmospheric pressure varies with weather, so the supported column height changes. Tube dimensions are irrelevant.' },
    { q: 'The pressure due to a column of liquid depends on', opts: ['Its volume', 'Its depth and density', 'The shape of the container', 'The total mass of the liquid'], a: 1, why: 'P = ρgh depends only on density and vertical depth.' },
    { q: 'A tyre gauge reads 2.0 × 10⁵ Pa. If atmospheric pressure is 1.0 × 10⁵ Pa, the absolute pressure is', opts: ['1.0 × 10⁵ Pa', '2.0 × 10⁵ Pa', '3.0 × 10⁵ Pa', '0.5 × 10⁵ Pa'], a: 2, why: 'Absolute = atmospheric + gauge = 1.0 × 10⁵ + 2.0 × 10⁵ = 3.0 × 10⁵ Pa.' },
    { q: 'Water at a depth of 4 m (ρ = 1000, g = 10) exerts a pressure of', opts: ['4000 Pa', '40 000 Pa', '400 Pa', '4 Pa'], a: 1, why: 'P = ρgh = 1000 × 10 × 4 = 40 000 Pa.' },
    { q: 'Two vessels of different shapes hold water to the same height. The pressure at their bases is', opts: ['Greater in the wider vessel', 'Greater in the narrower vessel', 'Equal in both', 'Dependent on the total volume'], a: 2, why: 'P = ρgh depends only on depth and density, not on container shape or total volume.' },
    { q: 'Which device measures atmospheric pressure directly?', opts: ['Manometer', 'Mercury barometer', 'Bourdon gauge', 'Spring balance'], a: 1, why: 'The barometer balances the atmosphere’s weight against a liquid column. Manometers measure gas pressure differences.' },
    { q: 'A Bourdon gauge works by the tendency of a curved tube to', opts: ['Contract when pressurised', 'Straighten when pressurised', 'Vibrate', 'Change temperature'], a: 1, why: 'Internal pressure makes the curved tube try to straighten; the coil unwinds and drives the needle.' },
    { q: '1 pascal is equivalent to', opts: ['1 N/m', '1 N/m²', '1 N·m', '1 kg/m³'], a: 1, why: 'Pascal = N/m² — force per unit area.' },
    { q: 'In an open-ended manometer, the gauge pressure equals', opts: ['ρgh', 'ρg/h', 'ρh/g', 'P_atm + ρgh'], a: 0, why: 'The difference in levels h gives ρgh, which is the pressure above atmospheric.' },
    { q: 'Why can a person drink through a straw?', opts: ['The straw pulls the liquid up', 'Sucking creates weight in the liquid', 'Reducing pressure in the mouth lets atmospheric pressure push the liquid up', 'Capillary action alone'], a: 2, why: 'You lower the pressure inside your mouth; the greater atmospheric pressure on the liquid surface then drives it up the straw.' },
    { q: 'A closed-end manometer has a vacuum above the liquid. The gas pressure is therefore', opts: ['P_atm + ρgh', 'ρgh', 'Zero', 'ρgh − P_atm'], a: 1, why: 'With no pressure from the sealed side, the whole gas pressure is balanced by the liquid column: P = ρgh.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'hydrostatics',
  title: 'Liquids at Rest (Hydrostatics)',
  blurb: 'Archimedes’ principle, upthrust, floating conditions and relative density.',
  time: '50 min',
  objectives: [
    "State Archimedes' principle and calculate upthrust",
    'Apply the conditions for floating and sinking',
    'Use the relative density formula',
    'Explain why objects float differently in different liquids',
    'Solve buoyancy problems combining upthrust and weight'
  ],
  body: `
<p class="lead">A steel ship floats while a steel nail sinks. Why? The answer lies in <strong>upthrust</strong> — the upward force a fluid exerts on anything immersed in it. This chapter is one of the most reliably examined in Physics, and the reasoning is straightforward once you see it.</p>

<h2>Archimedes’ Principle</h2>
<blockquote>When a body is wholly or partly immersed in a fluid, it experiences an <strong>upthrust</strong> equal to the weight of fluid displaced.</blockquote>

<div class="formula-box">
  <div class="fb-head">Buoyancy</div>
  <div class="formula-row"><div class="fname">Upthrust (Archimedes)</div>
    <div class="fexpr">U = weight of fluid displaced = m<sub>fluid</sub> g</div></div>
  <div class="formula-row"><div class="fname">In terms of density</div>
    <div class="fexpr">U = ρ<sub>fluid</sub> × V<sub>displaced</sub> × g</div>
    <div class="fnote">V is the volume actually under the surface, not the body’s total volume.</div></div>
  <div class="formula-row"><div class="fname">Apparent loss of weight in liquid</div>
    <div class="fexpr">Loss = weight in air − weight in liquid = U</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The upthrust direction and origin</b>
<p>Upthrust acts <b>vertically upward</b>, because pressure in a liquid increases with depth. The bottom of a submerged body is deeper than its top, so the upward push on the bottom exceeds the downward push on the top. The difference is the upthrust.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Upthrust on a fully submerged body</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A stone of volume 0.005 m³ is fully immersed in water (ρ = 1000 kg/m³, g = 10 m/s²).</div>
    <div class="step"><div class="step-l">Volume displaced = volume of the stone</div>
    V = 0.005 m³</div>
    <div class="step"><div class="step-l">Upthrust</div>
    U = ρVg = 1000 × 0.005 × 10</div>
    <div class="ans">Answer: 50 N</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Apparent weight</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A body weighs 30 N in air and 20 N when fully immersed in water. Find the upthrust and the density of the body if its volume is 1 × 10⁻³ m³.</div>
    <div class="step"><div class="step-l">Upthrust = loss in weight</div>
    U = 30 − 20 = <b>10 N</b></div>
    <div class="step"><div class="step-l">Cross-check with ρVg</div>
    1000 × (1 × 10⁻³) × 10 = 10 N ✓</div>
    <div class="step"><div class="step-l">Density of the body</div>
    Weight in air = mg = 30 → m = 3 kg<br>ρ = m/V = 3 / (1 × 10⁻³) = <b>3000 kg/m³</b></div>
    <div class="ans">Answer: upthrust 10 N, body density 3000 kg/m³</div>
  </div>
</div>

<h2>Floating, floating and sinking</h2>
<p>Compare the body's weight with the maximum possible upthrust (when fully submerged):</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Condition</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td>Weight &lt; max upthrust</td><td><b>Floats</b> — rises until part is above the surface</td></tr>
    <tr><td>Weight = max upthrust</td><td><b>Neutral</b> — suspended anywhere in the liquid</td></tr>
    <tr><td>Weight &gt; max upthrust</td><td><b>Sinks</b> to the bottom</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The floating condition, stated precisely</b>
<p>For a floating body: <b>weight of body = weight of fluid displaced</b>. Equivalently, <b>ρ<sub>body</sub> × V<sub>total</sub> = ρ<sub>fluid</sub> × V<sub>submerged</sub></b>. This single relation solves almost every floating question — it tells you what fraction of the object sits below the surface.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">3</span> What fraction floats?</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A block of wood of density 600 kg/m³ floats in water (1000 kg/m³). What fraction is submerged?</div>
    <div class="step"><div class="step-l">Set weight = upthrust</div>
    ρ<sub>wood</sub> × V<sub>total</sub> × g = ρ<sub>water</sub> × V<sub>sub</sub> × g</div>
    <div class="step"><div class="step-l">Cancel g and V_total, solve for the ratio</div>
    600 V<sub>total</sub> = 1000 V<sub>sub</sub><br>
    V<sub>sub</sub> / V<sub>total</sub> = 600/1000 = 0.6</div>
    <div class="ans">Answer: 60% of the block is submerged</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Will it float?</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A solid of mass 8 kg and volume 0.005 m³ is placed in water.</div>
    <div class="step"><div class="step-l">Weight of the solid</div>
    W = 8 × 10 = 80 N</div>
    <div class="step"><div class="step-l">Maximum upthrust (fully submerged)</div>
    U = ρVg = 1000 × 0.005 × 10 = 50 N</div>
    <div class="step"><div class="step-l">Compare</div>
    80 N > 50 N — the weight exceeds the maximum upthrust</div>
    <div class="ans">Answer: it sinks</div>
  </div>
</div>

<h2>Relative density</h2>
<p>Relative density (specific gravity) compares a substance's density with that of water. It has <strong>no units</strong>.</p>
<div class="eq">RD = <span class="frac"><span>density of substance</span><span>density of water</span></span> = <span class="frac"><span>mass in air</span><span>mass in air − mass in water</span></span></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The second form is the useful one</b>
<p>RD = mass in air ÷ (apparent loss of weight in water). Since the loss in water equals the mass of water displaced, this reads as "mass of the object ÷ mass of an equal volume of water". Keep both forms — JAMB uses the second more often.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Relative density from balance readings</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A solid weighs 4 N in air and 3 N in water.</div>
    <div class="step"><div class="step-l">Apply the formula</div>
    RD = 4 / (4 − 3) = 4 / 1</div>
    <div class="ans">Answer: RD = 4 (density = 4000 kg/m³)</div>
  </div>
</div>

<h2>Why a ship floats</h2>
<p>A steel ship floats because its hull encloses a large volume of air, so the <em>average</em> density of the whole vessel is far below that of water, and the shape displaces a huge volume before it is fully submerged. The displaced water weighs as much as the ship — that is Archimedes' principle at work. A solid steel block of the same mass would displace too little water and sink.</p>

<h2>Practical consequences</h2>
<ul>
<li><strong>Hydrometer</strong> — floats upright, sinking deeper in less dense liquids. The scale reads low density low down.</li>
<li><strong>Submarines</strong> — ballast tanks take in water to increase weight (sink) and blow out air to decrease it (rise).</li>
<li><strong>Hot-air balloons</strong> — heating the air inside lowers its density below the surroundings, producing net upthrust.</li>
<li><strong>Freshwater vs seawater</strong> — seawater is denser, so objects float higher in it and displace less volume.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Displacement: which liquid?</b>
<p>Upthrust depends on the <b>density of the surrounding fluid</b>, not just the submerged volume. The same object fully submerged experiences greater upthrust in seawater than in freshwater, because ρ is larger.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Upthrust = weight of fluid displaced = ρ<sub>fluid</sub>V<sub>disp</sub>g, acting upward.</li>
<li>Loss of weight in liquid = upthrust.</li>
<li>Floating: weight of body = weight of fluid displaced; ρ<sub>body</sub>V<sub>total</sub> = ρ<sub>fluid</sub>V<sub>sub</sub>.</li>
<li>Sinks if weight > maximum upthrust (i.e. ρ<sub>body</sub> > ρ<sub>fluid</sub>).</li>
<li>Relative density = density ratio, no units.</li>
</ul>
`,
  quiz: [
    { q: 'Archimedes’ principle states that the upthrust on a body equals', opts: ['The weight of the body', 'The weight of fluid displaced', 'The volume of fluid displaced', 'The mass of the body'], a: 1, why: 'Upthrust equals the weight of the fluid the body displaces.' },
    { q: 'A body of volume 0.02 m³ is fully immersed in water (ρ = 1000 kg/m³, g = 10 m/s²). The upthrust is', opts: ['0.2 N', '20 N', '200 N', '2000 N'], a: 2, why: 'U = ρVg = 1000 × 0.02 × 10 = 200 N.' },
    { q: 'A solid weighs 5 N in air and 3 N in water. Its relative density is', opts: ['1.67', '0.6', '2.5', '8'], a: 2, why: 'RD = mass in air ÷ loss in water = 5 ÷ (5 − 3) = 5/2 = 2.5.' },
    { q: 'For a floating body, which relationship is correct?', opts: ['Weight of body = weight of fluid displaced', 'Weight of body > weight of fluid displaced', 'Upthrust = zero', 'Displaced volume = total volume'], a: 0, why: 'A floating body is in equilibrium, so upthrust (weight of fluid displaced) exactly balances its weight.' },
    { q: 'A body sinks in a liquid when its density is', opts: ['Less than the liquid’s', 'Equal to the liquid’s', 'Greater than the liquid’s', 'Always, regardless'], a: 2, why: 'If ρ_body > ρ_fluid, the body is heavier than an equal volume of liquid and sinks.' },
    { q: 'Upthrust acts', opts: ['Vertically downward', 'Vertically upward', 'Along the surface', 'Horizontally'], a: 1, why: 'Pressure increases with depth, so the net effect of the fluid on the body is an upward force.' },
    { q: 'Relative density has', opts: ['The unit kg/m³', 'The unit newton', 'No unit', 'The unit pascal'], a: 2, why: 'It is a ratio of two densities, so the units cancel.' },
    { q: 'A wooden block of density 800 kg/m³ floats in water. The fraction submerged is', opts: ['80%', '100%', '20%', '50%'], a: 0, why: 'ρ_wood/ρ_water = 800/1000 = 0.8 → 80% of the volume is below the surface.' },
    { q: 'A body weighs 6 N in air and 4 N when immersed in a liquid. The upthrust is', opts: ['10 N', '2 N', '4 N', '1.5 N'], a: 1, why: 'Upthrust = apparent loss of weight = 6 − 4 = 2 N.' },
    { q: 'A hydrometer floats higher in a liquid that is', opts: ['More dense', 'Less dense', 'Warmer', 'The same in all liquids'], a: 0, why: 'In a denser liquid it needs to displace less volume to balance its weight, so it rides higher.' },
    { q: 'The maximum upthrust on a submerged body occurs when', opts: ['It is fully submerged', 'It is partly submerged', 'It is at the surface', 'The liquid is cold'], a: 0, why: 'Upthrust = ρ_fluid V_displaced g, and displaced volume is greatest when the whole body is under the liquid.' },
    { q: 'A solid has a mass of 8 kg and displaces 2 kg of water when fully submerged. Its relative density is', opts: ['4', '0.25', '10', '6'], a: 0, why: 'RD = mass in air ÷ mass of displaced water = 8/2 = 4.' },
    { q: 'An object floats with 70% of its volume in water. Its density is', opts: ['700 kg/m³', '1400 kg/m³', '1000 kg/m³', '300 kg/m³'], a: 0, why: 'ρ_object = 0.7 × ρ_water = 0.7 × 1000 = 700 kg/m³.' },
    { q: 'A balloon rises because', opts: ['It weighs nothing', 'The hot air inside is less dense, so upthrust exceeds weight', 'Air pushes it down', 'Gravity reverses inside'], a: 1, why: 'Heating reduces the internal density; the balloon displaces outside air heavier than itself, so the net force is upward.' },
    { q: 'Which experiences the greater upthrust — the same object in seawater or freshwater?', opts: ['Freshwater', 'Seawater', 'Both equal', 'Neither — upthrust is zero'], a: 1, why: 'U = ρVg. Seawater has the higher density, so the upthrust is greater for the same displaced volume.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'temperature',
  title: 'Temperature and Thermal Expansion',
  blurb: 'Temperature scales, thermometers, and linear, superficial and cubic expansion.',
  time: '45 min',
  objectives: [
    'Distinguish temperature from heat',
    'Convert between Celsius, Fahrenheit, Kelvin and the absolute scales',
    'Describe how a clinical and a laboratory thermometer work',
    'Calculate linear, superficial and cubic expansion',
    'Explain anomalous expansion of water and bimetallic strips'
  ],
  body: `
<p class="lead">Heat is energy <em>in transit</em>; temperature tells you the <em>direction</em> that heat will flow — always from hot to cold. This chapter also covers the expansion of solids, which turns up repeatedly: in railway joints, thermostat strips and cracked water pipes.</p>

<h2>Temperature vs heat</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Heat</th><th>Temperature</th></tr></thead>
  <tbody>
    <tr><td><b>Nature</b></td><td>Energy in transit</td><td>Hotness or coldness of a body</td></tr>
    <tr><td><b>SI unit</b></td><td>joule (J)</td><td>kelvin (K)</td></tr>
    <tr><td><b>Measured by</b></td><td>Calorimeter</td><td>Thermometer</td></tr>
    <tr><td><b>Can be felt?</b></td><td>Yes</td><td>No — only inferred</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>They do not always travel together</b>
<p>A large amount of heat can flow with only a small temperature change (ice melting). Temperature measures the <b>average kinetic energy</b> of the molecules, not the total energy they hold.</p></div></div>

<h2>Thermometric properties</h2>
<p>A thermometric property is any physical quantity that changes regularly with temperature. Common ones:</p>
<ul>
<li><strong>Length of a liquid column</strong> — mercury or alcohol thermometer</li>
<li><strong>Pressure of a gas at constant volume</strong> — constant-pressure gas thermometer</li>
<li><strong>Electrical resistance</strong> — resistance thermometer (platinum)</li>
<li><strong>Thermo-emf</strong> — thermocouple</li>
<li><strong>Volume of a gas</strong> — constant-pressure gas thermometer</li>
</ul>

<h3>Types of thermometer</h3>
<dl class="defs">
<dt>Clinical thermometer</dt>
<dd>Range 35–42 °C, scale in 0.1 °C divisions. Has a <strong>constriction above the bulb</strong> that stops the mercury falling back, so the reading can be taken after removal from the patient. Must be shaken down.</dd>
<dt>Laboratory (conventional) thermometer</dt>
<dd>Range about −10 to 110 °C, no constriction, so the mercury falls back as the temperature drops.</dd>
</dl>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Why a clinical thermometer has a constriction</b>
<p>It is not for accuracy — it exists so the mercury thread <b>stays put</b> when you take the thermometer out of the mouth. This is a very frequent question.</p></div></div>

<h2>Temperature scales</h2>

<h3>Celsius and Fahrenheit</h3>
<div class="eq">°F = <span class="frac"><span>9</span><span>5</span></span>(°C) + 32 &nbsp;&nbsp;&nbsp;&nbsp; °C = <span class="frac"><span>5</span><span>9</span></span>(°F − 32)</div>
<p>Fixed points: ice point 0 °C = 32 °F; steam point 100 °C = 212 °F. So 100 Celsius degrees span 180 Fahrenheit degrees — the ratio 100:180 = 5:9.</p>

<h3>Kelvin (absolute) scale</h3>
<div class="eq">K = °C + 273 &nbsp;&nbsp;&nbsp;&nbsp; °C = K − 273</div>
<p>On the absolute scale, <strong>0 K = −273 °C</strong> is absolute zero — the lowest possible temperature, where molecular motion is minimal.</p>

<div class="example">
  <div class="example-h"><span class="num">1</span> Converting temperature</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Convert 37 °C to Fahrenheit</div>
    °F = (9/5)(37) + 32 = 66.6 + 32</div>
    <div class="ans">Answer: 98.6 °F (normal body temperature)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Body temperature in kelvin</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Convert 37 °C</div>
    K = 37 + 273</div>
    <div class="ans">Answer: 310 K</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Never write "27 degrees kelvin"</b>
<p>The kelvin has no degree symbol. The correct form is <b>273 K</b> or <b>300 K</b>. Also note a <em>temperature difference</em> of 1 °C equals 1 K — only the starting points differ, so differences convert 1:1.</p></div></div>

<h2>Thermal expansion</h2>
<p>Most materials expand when heated and contract when cooled, because higher temperature makes the particles vibrate harder and occupy more space.</p>

<div class="formula-box">
  <div class="fb-head">Expansion of solids</div>
  <div class="formula-row"><div class="fname">Linear expansion</div>
    <div class="fexpr">ΔL = α L<sub>0</sub> Δθ</div>
    <div class="fnote">α = coefficient of linear expansion (per °C or per K).</div></div>
  <div class="formula-row"><div class="fname">Superficial (area) expansion</div>
    <div class="fexpr">ΔA = β A<sub>0</sub> Δθ, &nbsp; β ≈ 2α</div></div>
  <div class="formula-row"><div class="fname">Cubic (volume) expansion</div>
    <div class="fexpr">ΔV = γ V<sub>0</sub> Δθ, &nbsp; γ ≈ 3α</div></div>
  <div class="formula-row"><div class="fname">Relationship</div>
    <div class="fexpr">α : β : γ = 1 : 2 : 3</div>
    <div class="fnote">For solids. For liquids only γ applies meaningfully.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Linear expansion of a steel rail</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A steel rail 20 m long is heated from 20 °C to 70 °C. α for steel = 1.1 × 10⁻⁵ /°C.</div>
    <div class="step"><div class="step-l">Temperature change</div>
    Δθ = 70 − 20 = 50 °C</div>
    <div class="step"><div class="step-l">Apply ΔL = αL₀Δθ</div>
    ΔL = (1.1 × 10⁻⁵)(20)(50) = 1.1 × 10⁻⁵ × 1000</div>
    <div class="ans">Answer: 0.011 m = 1.1 cm</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> From cubic to linear</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    The volume of a brass sphere increases by 0.9% when heated. Find α for brass.</div>
    <div class="step"><div class="step-l">Use γ ≈ 3α</div>
    γ = 0.9% → 0.9 = 3α → α = 0.3%</div>
    <div class="ans">Answer: α = 0.3 %/°C (i.e. 3 × 10⁻³ /°C)</div>
  </div>
</div>

<h2>Real-world applications</h2>
<ul>
<li><strong>Railway lines:</strong> laid with gaps so that expansion in hot weather does not buckle the track.</li>
<li><strong>Overhead power lines:</strong> slack loops between pylons allow for sagging in summer.</li>
<li><strong>Steel-framed bridges:</strong> rollers and expansion joints at one end permit movement.</li>
<li><strong>Bimetallic strip:</strong> two metals bonded together expand by different amounts and bend — used in thermostats and fire alarms.</li>
<li><strong>Cracked pipes:</strong> water expands when it freezes; a blocked pipe can split.</li>
</ul>

<h3>Anomalous expansion of water</h3>
<div class="note note-fact"><span class="ico">📌</span><div><b>Water’s strange behaviour</b>
<p>Water is at its <b>most dense at about 4 °C</b>. Between 0 °C and 4 °C it <b>expands as it cools</b> — this is the <em>anomalous expansion</em> of water. It is why ice floats and why fish survive under frozen lakes: the cold, light water stays at the surface while 4 °C water remains at the bottom.</p></div></div>

<h3>Why liquids expand more than solids</h3>
<p>Particles in a liquid are already further apart and less tightly held, so a given temperature increase produces a larger increase in separation. Therefore γ<sub>liquid</sub> &gt; γ<sub>solid</sub>.</p>

<h2>Chapter recap</h2>
<ul>
<li>Heat = energy in transit (J); temperature = hotness (K).</li>
<li>°F = 9/5 °C + 32; K = °C + 273; 0 K = −273 °C.</li>
<li>ΔL = αL₀Δθ; β ≈ 2α; γ ≈ 3α → 1 : 2 : 3.</li>
<li>Clinical thermometer has a constriction so the reading is retained.</li>
<li>Water is densest at 4 °C — anomalous expansion below that.</li>
</ul>
`,
  quiz: [
    { q: 'The SI unit of temperature is the', opts: ['degree Celsius', 'kelvin', 'Fahrenheit', 'joule'], a: 1, why: 'The kelvin (K) is the SI base unit of temperature.' },
    { q: '37 °C expressed in Fahrenheit is', opts: ['98.6 °F', '66.6 °F', '100 °F', '32 °F'], a: 0, why: '°F = (9/5)(37) + 32 = 66.6 + 32 = 98.6 °F.' },
    { q: '0 K is equivalent to', opts: ['0 °C', '−100 °C', '−273 °C', '−459 °C'], a: 2, why: 'Absolute zero is −273 °C (or −459 °F).' },
    { q: 'The main reason a clinical thermometer has a constriction above the bulb is to', opts: ['Make it more accurate', 'Prevent the mercury falling so the reading can be taken', 'Allow a wider range', 'Reduce the cost'], a: 1, why: 'The narrow constriction holds the mercury thread in place after removal from the patient.' },
    { q: 'The coefficient of superficial expansion β is related to α by', opts: ['β = α', 'β = 2α', 'β = 3α', 'β = α/2'], a: 1, why: 'For solids, α : β : γ = 1 : 2 : 3.' },
    { q: 'A metal rod of length 50 m is heated 20 °C. If α = 2 × 10⁻⁵ /°C, its increase in length is', opts: ['0.02 m', '0.01 m', '0.002 m', '0.2 m'], a: 0, why: 'ΔL = αL₀Δθ = (2 × 10⁻⁵)(50)(20) = 2 × 10⁻² = 0.02 m.' },
    { q: 'Heat is best described as', opts: ['A form of potential energy', 'Energy in transit due to a temperature difference', 'A property of matter', 'The average kinetic energy of molecules'], a: 1, why: 'Heat is energy transferred because of a temperature difference. The last option describes temperature itself.' },
    { q: 'Water is most dense at', opts: ['0 °C', '4 °C', '100 °C', '20 °C'], a: 1, why: 'Between 0 and 4 °C water expands as it cools — the anomalous expansion — so it is densest at 4 °C.' },
    { q: 'A bimetallic strip bends when heated because the two metals', opts: ['Are electrically different', 'Expand by different amounts', 'Are different colours', 'Have different masses'], a: 1, why: 'Different α values mean one metal lengthens more than the other, forcing the strip to curve.' },
    { q: '293 K expressed in Celsius is', opts: ['293 °C', '20 °C', '−20 °C', '273 °C'], a: 1, why: '°C = K − 273 = 293 − 273 = 20 °C.' },
    { q: 'A thermometer that uses electrical resistance as its thermometric property is called a', opts: ['Thermocouple', 'Resistance thermometer', 'Clinical thermometer', 'Pyrometer'], a: 1, why: 'Resistance thermometers use the change in electrical resistance of a metal wire (often platinum) with temperature.' },
    { q: 'The ratio α : β : γ for a solid is', opts: ['1 : 1 : 1', '1 : 2 : 3', '3 : 2 : 1', '1 : 3 : 2'], a: 1, why: 'Linear, then superficial, then cubic — each adds one power of expansion.' },
    { q: 'Railway lines are laid with gaps between sections so that', opts: ['Water can drain away', 'They can expand in hot weather without buckling', 'The rails are easier to install', 'They can contract in cold weather only'], a: 1, why: 'The gaps absorb the thermal expansion ΔL = αLΔθ that would otherwise buckle the track.' },
    { q: 'Which expands most for the same temperature rise?', opts: ['A solid', 'A liquid', 'A gas at constant pressure', 'Both B and C'], a: 3, why: 'Molecules in liquids and gases are less tightly bound than in solids, so liquids expand more than solids and gases most of all.' },
    { q: 'A temperature rise of 1 °C is equivalent to a rise of', opts: ['1 K', '273 K', '9/5 K', '1.8 K'], a: 0, why: 'The kelvin and Celsius degrees are the same size, so temperature differences convert one-to-one.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'gas-laws',
  title: 'Gas Laws and Kinetic Theory',
  blurb: 'Boyle’s, Charles’s, pressure and ideal gas laws, plus the particle model.',
  time: '55 min',
  objectives: [
    "State and apply Boyle's law",
    "State and apply Charles's law and the pressure law",
    'Combine the three into the ideal gas equation',
    'Convert between Celsius and absolute temperature in gas problems',
    'Explain gas behaviour using the kinetic theory model'
  ],
  body: `
<p class="lead">Gases are easy to compress and easy to heat — and they respond in beautifully predictable ways. Four equations cover the whole of JAMB gas work. The single most common cause of lost marks is <strong>forgetting to convert °C to kelvin</strong>, so that rule comes first.</p>

<div class="note note-warn" style="margin-top:0"><span class="ico">⚠</span><div><b>Golden rule — always use kelvin</b>
<p>Every gas calculation requires <b>absolute temperature</b>. Convert with <b>T(K) = °C + 273</b> before substituting. Using 27 °C directly instead of 300 K gives a wrong answer that looks superficially reasonable — this is the most common error in the whole topic.</p></div></div>

<h2>Boyle’s Law</h2>
<blockquote>For a fixed mass of gas at <strong>constant temperature</strong>, pressure is inversely proportional to volume.</blockquote>
<div class="eq">P ∝ <span class="frac"><span>1</span><span>V</span></span> &nbsp;&nbsp;⟹&nbsp;&nbsp; P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></div>
<p>A graph of P against V is a <strong>hyperbola</strong>; a graph of P against 1/V is a <strong>straight line through the origin</strong>.</p>

<div class="example">
  <div class="example-h"><span class="num">1</span> Compressing a gas</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A gas occupies 0.6 m³ at 1.2 × 10⁵ Pa. It is compressed to 0.4 m³ at constant temperature. Find the new pressure.</div>
    <div class="step"><div class="step-l">Apply P₁V₁ = P₂V₂</div>
    (1.2 × 10⁵)(0.6) = P₂(0.4)</div>
    <div class="step"><div class="step-l">Solve</div>
    P₂ = (1.2 × 10⁵ × 0.6) / 0.4 = 72000 / 0.4</div>
    <div class="ans">Answer: 1.8 × 10⁵ Pa</div>
  </div>
</div>

<h2>Charles’s Law</h2>
<blockquote>For a fixed mass of gas at <strong>constant pressure</strong>, volume is directly proportional to absolute temperature.</blockquote>
<div class="eq">V ∝ T &nbsp;&nbsp;⟹&nbsp;&nbsp; <span class="frac"><span>V<sub>1</sub></span><span>T<sub>1</sub></span></span> = <span class="frac"><span>V<sub>2</sub></span><span>T<sub>2</sub></span></span></div>
<p>Extrapolated back, the volume reaches zero at <strong>−273 °C</strong> — absolute zero. This is how the absolute scale was discovered.</p>

<div class="example">
  <div class="example-h"><span class="num">2</span> Heating a gas at constant pressure</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A gas has volume 0.3 m³ at 27 °C. It is heated to 127 °C at constant pressure.</div>
    <div class="step"><div class="step-l">Convert to kelvin</div>
    T₁ = 27 + 273 = 300 K<br>T₂ = 127 + 273 = 400 K</div>
    <div class="step"><div class="step-l">Apply V₁/T₁ = V₂/T₂</div>
    0.3 / 300 = V₂ / 400</div>
    <div class="step"><div class="step-l">Solve</div>
    V₂ = 0.3 × 400 / 300</div>
    <div class="ans">Answer: 0.4 m³</div>
  </div>
</div>

<h2>The Pressure Law (Gay-Lussac)</h2>
<blockquote>For a fixed mass of gas at <strong>constant volume</strong>, pressure is directly proportional to absolute temperature.</blockquote>
<div class="eq">P ∝ T &nbsp;&nbsp;⟹&nbsp;&nbsp; <span class="frac"><span>P<sub>1</sub></span><span>T<sub>1</sub></span></span> = <span class="frac"><span>P<sub>2</sub></span><span>T<sub>2</sub></span></span></div>
<p>This is why tyres burst on a hot day and why a pressure cooker works.</p>

<h2>The Ideal Gas Equation</h2>
<div class="formula-box">
  <div class="fb-head">Combining the three laws</div>
  <div class="formula-row"><div class="fname">Ideal gas equation</div>
    <div class="fexpr">PV = nRT</div>
    <div class="fnote">n = number of moles, R = universal gas constant, T in kelvin.</div></div>
  <div class="formula-row"><div class="fname">Expanded form</div>
    <div class="fexpr">PV = <span class="frac"><span>m</span><span>M</span></span> R T</div>
    <div class="fnote">m = mass of gas, M = molar mass.</div></div>
  <div class="formula-row"><div class="fname">In terms of density</div>
    <div class="fexpr">P = <span class="frac"><span>ρRT</span><span>M</span></span></div></div>
  <div class="formula-row"><div class="fname">Combining any two states</div>
    <div class="fexpr"><span class="frac"><span>P<sub>1</sub>V<sub>1</sub></span><span>T<sub>1</sub></span></span> = <span class="frac"><span>P<sub>2</sub>V<sub>2</sub></span><span>T<sub>2</sub></span></span></div>
    <div class="fnote">Use this when pressure, volume and temperature all change at once.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> All three quantities change</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A gas at 1 × 10⁵ Pa, 0.02 m³ and 27 °C is taken to 2 × 10⁵ Pa and 87 °C. Find the new volume.</div>
    <div class="step"><div class="step-l">Convert temperatures</div>
    T₁ = 300 K, T₂ = 360 K</div>
    <div class="step"><div class="step-l">Apply the combined law</div>
    (1 × 10⁵ × 0.02)/300 = (2 × 10⁵ × V₂)/360</div>
    <div class="step"><div class="step-l">Left side</div>
    2000/300 = 6.667</div>
    <div class="step"><div class="step-l">Solve for V₂</div>
    6.667 = (2 × 10⁵ V₂)/360 → V₂ = 6.667 × 360 / 200000</div>
    <div class="ans">Answer: 0.012 m³</div>
  </div>
</div>

<h2>Standard Temperature and Pressure (S.T.P.)</h2>
<div class="eq">S.T.P. = 0 °C (273 K) and 1 atmosphere (1.01 × 10<sup>5</sup> Pa)</div>
<p>At S.T.P., one mole of any ideal gas occupies <strong>22.4 litres (0.0224 m³)</strong> — a fact worth memorising for molar volume questions.</p>

<h2>Kinetic theory of gases</h2>
<p>Gas pressure arises from countless tiny, random collisions of molecules with the container walls. Temperature is a measure of the <strong>average kinetic energy</strong> of the molecules.</p>

<dl class="defs">
<dt>Pressure</dt>
<dd>The cumulative effect of molecular impacts on the container walls.</dd>
<dt>Absolute zero</dt>
<dd>The temperature at which molecular motion is minimal (theoretical minimum), at 0 K = −273 °C.</dd>
<dt>Heating a gas</dt>
<dd>Increases average kinetic energy → molecules move faster → strike the walls harder and more often → pressure rises (if volume is fixed) or volume expands (if pressure is fixed).</dd>
</dl>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why gases are easiest to compress</b>
<p>Particles in a gas are <b>far apart with large empty spaces between them</b>, so they can be pushed much closer together. In liquids and solids the particles are already in contact, so they resist compression. Expect this as a one-mark question.</p></div></div>

<h3>Changing state</h3>
<ul>
<li><strong>Heating:</strong> molecules gain kinetic energy, move faster, and the substance may change state.</li>
<li><strong>Boiling vs evaporation:</strong> boiling occurs throughout the liquid at a fixed temperature; evaporation occurs only at the surface, at any temperature, and cools the remaining liquid because the fastest molecules escape.</li>
</ul>

<h2>Chapter recap</h2>
<ul>
<li>Convert to kelvin: T = °C + 273. Every time.</li>
<li>Boyle: P₁V₁ = P₂V₂ (constant T). Charles: V₁/T₁ = V₂/T₂ (constant P). Pressure law: P₁/T₁ = P₂/T₂ (constant V).</li>
<li>Combined: P₁V₁/T₁ = P₂V₂/T₂; ideal gas: PV = nRT.</li>
<li>S.T.P. = 273 K, 1 atm, molar volume 22.4 L.</li>
<li>Pressure comes from molecular collisions; temperature measures average kinetic energy.</li>
</ul>
`,
  quiz: [
    { q: "Boyle’s law applies when the temperature is", opts: ['Rising', 'Constant', 'Zero', 'Falling'], a: 1, why: 'For a fixed mass of gas, P ∝ 1/V only when temperature is held constant.' },
    { q: 'A gas has volume 0.5 m³ at 1 × 10⁵ Pa. At constant temperature its pressure becomes 2 × 10⁵ Pa. The new volume is', opts: ['1.0 m³', '0.25 m³', '0.5 m³', '0.1 m³'], a: 1, why: 'P₁V₁ = P₂V₂ → (1 × 10⁵)(0.5) = (2 × 10⁵)V₂ → V₂ = 0.25 m³.' },
    { q: '10 °C expressed in kelvin is', opts: ['10 K', '283 K', '263 K', '−263 K'], a: 1, why: 'T = 10 + 273 = 283 K. Forgetting this conversion is the commonest gas-law error.' },
    { q: 'Charles’s law states that volume is proportional to', opts: ['Pressure', 'Absolute temperature', 'Square of temperature', 'Mass'], a: 1, why: 'At constant pressure, V ∝ T (kelvin).' },
    { q: 'A gas at 27 °C occupies 0.1 m³. Heated to 127 °C at constant pressure, its volume becomes', opts: ['0.133 m³', '0.3 m³', '0.433 m³', '0.075 m³'], a: 0, why: 'T₁ = 300 K, T₂ = 400 K. V₂ = 0.1 × 400/300 = 0.133 m³.' },
    { q: 'The pressure law applies when the gas is held at constant', opts: ['Volume', 'Temperature', 'Mass only', 'Nothing is held constant'], a: 0, why: 'At constant volume, P ∝ T.' },
    { q: 'Absolute zero is', opts: ['0 °C', '−273 °C', '−100 °C', '100 °C'], a: 1, why: '0 K = −273 °C, the lowest possible temperature.' },
    { q: 'One mole of an ideal gas at S.T.P. occupies approximately', opts: ['2.24 L', '22.4 L', '224 L', '2240 L'], a: 1, why: 'Molar volume at S.T.P. is 22.4 litres (0.0224 m³).' },
    { q: 'The ideal gas equation is', opts: ['PV = nRT', 'PV = nR/T', 'PV = nRT²', 'PV = n/T'], a: 0, why: 'PV = nRT with T in kelvin.' },
    { q: 'Gas pressure is caused by', opts: ['The weight of the gas', 'Collisions of molecules with the container walls', 'Gravity on the gas', 'The volume of the container'], a: 1, why: 'Molecular bombardment of the walls produces pressure.' },
    { q: 'Gases are easier to compress than liquids because gas molecules', opts: ['Are heavier', 'Are far apart with large spaces between them', 'Attract each other strongly', 'Move slowly'], a: 1, why: 'The large empty spaces mean only a small reduction in volume is needed to bring particles closer.' },
    { q: 'Temperature is a measure of the', opts: ['Total energy of molecules', 'Average kinetic energy of molecules', 'Potential energy of molecules', 'Number of molecules'], a: 1, why: 'Temperature relates to the mean kinetic energy per molecule, not the total.' },
    { q: 'Evaporation differs from boiling in that evaporation', opts: ['Occurs only at a fixed temperature', 'Occurs only at the surface and at any temperature', 'Requires a closed container', 'Is a slower name for boiling'], a: 1, why: 'Evaporation is a surface phenomenon at all temperatures; boiling happens throughout the liquid at a fixed temperature.' },
    { q: 'A gas is cooled from 227 °C to 127 °C at constant volume. Its pressure', opts: ['Doubles', 'Falls to 4/5 of the original', 'Stays constant', 'Halves'], a: 1, why: 'T₁ = 500 K, T₂ = 400 K. P₂ = P₁ × 400/500 = 0.8 P₁ — a fall to four-fifths.' },
    { q: 'Which change will increase the pressure of a fixed mass of gas in a rigid container?', opts: ['Decreasing the temperature', 'Increasing the temperature', 'Increasing the volume', 'Removing some gas'], a: 1, why: 'Fixed volume: raising T raises the average molecular speed and the force and frequency of wall collisions, so pressure rises.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'waves',
  title: 'Waves and Wave Motion',
  blurb: 'Transverse and longitudinal waves, frequency, wavelength, speed and the wave equation.',
  time: '50 min',
  objectives: [
    'Distinguish transverse from longitudinal waves with examples',
    'Define and relate wavelength, frequency, period and wave speed',
    'Apply v = fλ to solve wave problems',
    'Describe reflection, refraction, diffraction and interference',
    'Explain the principle of superposition and stationary waves'
  ],
  body: `
<p class="lead">Waves carry <strong>energy without transferring matter</strong>. Whether it is light from a star, sound in a classroom or a ripple on a pond, the medium oscillates about a fixed position while the disturbance travels on. The wave equation is one of the most examined formulas in the syllabus.</p>

<h2>What a wave does</h2>
<p>A wave transfers energy from one place to another. The particles of the medium vibrate about their equilibrium positions — they do <strong>not</strong> travel with the wave. (The one exception to worry about: a shock wave, which is not on the syllabus.)</p>

<dl class="defs">
<dt>Crest</dt><dd>The highest point of a transverse wave.</dd>
<dt>Trough</dt><dd>The lowest point of a transverse wave.</dd>
<dt>Compression</dt><dd>A region of a longitudinal wave where particles are closest together (high pressure).</dd>
<dt>Rarefaction</dt><dd>A region where particles are furthest apart (low pressure).</dd>
</dl>

<h2>Transverse vs longitudinal</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Transverse</th><th>Longitudinal</th></tr></thead>
  <tbody>
    <tr><td><b>Direction of vibration</b></td><td>Perpendicular to travel</td><td>Parallel to travel</td></tr>
    <tr><td><b>Features</b></td><td>Crests and troughs</td><td>Compressions and rarefactions</td></tr>
    <tr><td><b>Examples</b></td><td>Light, water waves, waves on strings</td><td>Sound waves, seismic P-waves</td></tr>
    <tr><td><b>Polarisable?</b></td><td>Yes</td><td>No</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The polarisation test</b>
<p>Only transverse waves can be <b>polarised</b>. If a question mentions polarisation, the wave must be transverse — this is a standard way of asking which type a wave is.</p></div></div>

<h2>The wave equation</h2>
<div class="formula-box">
  <div class="fb-head">Wave basics</div>
  <div class="formula-row"><div class="fname">The wave equation</div>
    <div class="fexpr">v = f λ</div>
    <div class="fnote">v = speed (m/s), f = frequency (Hz), λ = wavelength (m).</div></div>
  <div class="formula-row"><div class="fname">Frequency and period</div>
    <div class="fexpr">f = 1/T &nbsp;&nbsp;⟹&nbsp;&nbsp; v = λ / T</div>
    <div class="fnote">T = time for one complete oscillation (seconds).</div></div>
  <div class="formula-row"><div class="fname">Rearranged</div>
    <div class="fexpr">λ = v/f, &nbsp; f = v/λ</div></div>
  <div class="formula-row"><div class="fname">Definitions</div>
    <div class="fexpr">1 Hz = 1 cycle per second</div>
    <div class="fnote">Amplitude = maximum displacement from equilibrium.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Straight wave equation</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A wave has a frequency of 50 Hz and a wavelength of 4 m. Find its speed.</div>
    <div class="step"><div class="step-l">Apply v = fλ</div>
    v = 50 × 4</div>
    <div class="ans">Answer: 200 m/s</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Sound travelling through air</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Sound travels at 340 m/s. A tuning fork vibrates 510 times per second. Find the wavelength.</div>
    <div class="step"><div class="step-l">Rearrange λ = v/f</div>
    λ = 340 / 510</div>
    <div class="ans">Answer: 0.667 m (≈ 67 cm)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Frequency from period</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A wave has a period of 0.02 s and a wavelength of 2 m.</div>
    <div class="step"><div class="step-l">Frequency</div>
    f = 1/T = 1/0.02 = 50 Hz</div>
    <div class="step"><div class="step-l">Speed</div>
    v = fλ = 50 × 2 = 100 m/s</div>
    <div class="ans">Answer: f = 50 Hz, v = 100 m/s</div>
  </div>
</div>

<h2>Properties of waves</h2>

<h3>Reflection</h3>
<p>When a wave meets a boundary it bounces back into the original medium. The angle of incidence equals the angle of reflection. Sound reflection produces an <strong>echo</strong>; the geometry of reflections also explains why you can hear round a corner but cannot see round it.</p>

<h3>Refraction</h3>
<p>A change of direction as a wave passes from one medium to another because its <strong>speed changes</strong>. Frequency stays constant; wavelength changes in proportion to speed.</p>

<h3>Diffraction</h3>
<p>The spreading of a wave as it passes through a gap or around an edge. Diffraction is pronounced when the <strong>gap is comparable to the wavelength</strong> — a narrow gap relative to the wavelength gives little spreading. Low-pitched (long wavelength) sound diffracts around corners far better than high-pitched sound.</p>

<h3>Interference and superposition</h3>
<blockquote>When two waves meet, the resultant displacement at any point is the <strong>vector sum</strong> of the individual displacements.</blockquote>
<ul>
<li><strong>Constructive interference</strong> — crests meet crests → amplitude added → loud/bright.</li>
<li><strong>Destructive interference</strong> — crest meets trough → amplitude cancelled → silence/dark.</li>
</ul>
<p>Interference needs <strong>coherent</strong> sources — same frequency and a constant phase difference.</p>

<h3>Stationary (standing) waves</h3>
<p>Formed when two identical waves travel in opposite directions and superpose. Nodes are points of <strong>zero amplitude</strong>; antinodes are points of <strong>maximum amplitude</strong>. The wave appears not to travel. Standing waves produce the harmonics of a string and the notes of a flute or organ pipe.</p>

<div class="note note-tip"><span class="ico">💡</span><div><b>Nodes and antinodes</b>
<p>A string fixed at both ends always has a node at each end, and half a wavelength between consecutive nodes — or a quarter wavelength between a node and the adjacent antinode. This spacing relationship is what the questions ask for.</p></div></div>

<h2>Types of wave by medium</h2>
<ul>
<li><strong>Mechanical waves</strong> — need a material medium (sound, water waves, waves on a string).</li>
<li><strong>Electromagnetic waves</strong> — need no medium; they travel through a vacuum. They are transverse: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma (in order of increasing frequency).</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Sound cannot travel through a vacuum</b>
<p>Sound is mechanical and requires particles to carry it — in space, there is no sound. Light, being electromagnetic, travels through a vacuum. This contrast is asked almost every year.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Waves transfer energy, not matter.</li>
<li>Transverse: perpendicular, crests/troughs, polarisable — light. Longitudinal: parallel, compressions/rarefactions — sound.</li>
<li>v = fλ; f = 1/T.</li>
<li>Reflection, refraction (speed change), diffraction (spreading), interference (superposition).</li>
<li>Nodes = zero amplitude; antinodes = maximum.</li>
</ul>
`,
  quiz: [
    { q: 'The relationship between wave speed, frequency and wavelength is', opts: ['v = f/λ', 'v = fλ', 'v = λ/f', 'v = f + λ'], a: 1, why: 'v = fλ — the fundamental wave equation.' },
    { q: 'A wave of frequency 200 Hz has a wavelength of 2 m. Its speed is', opts: ['100 m/s', '400 m/s', '202 m/s', '0.01 m/s'], a: 1, why: 'v = fλ = 200 × 2 = 400 m/s.' },
    { q: 'Which of the following is a transverse wave?', opts: ['Sound in air', 'Wave on a stretched string', 'Seismic P-wave', 'Pressure wave in a pipe'], a: 1, why: 'Particles vibrate perpendicular to the direction of travel. Sound in air is longitudinal.' },
    { q: 'Sound cannot travel through', opts: ['Water', 'Steel', 'A vacuum', 'Air'], a: 2, why: 'Sound is a mechanical wave needing particles to propagate; a vacuum has none.' },
    { q: 'A wave has a period of 0.04 s. Its frequency is', opts: ['25 Hz', '40 Hz', '0.04 Hz', '100 Hz'], a: 0, why: 'f = 1/T = 1/0.04 = 25 Hz.' },
    { q: 'The spreading of a wave as it passes through a narrow opening is called', opts: ['Reflection', 'Refraction', 'Diffraction', 'Polarisation'], a: 2, why: 'Diffraction is the bending/spreading of waves around an edge or through an aperture.' },
    { q: 'In a longitudinal wave, the particles vibrate', opts: ['Perpendicular to the direction of travel', 'Parallel to the direction of travel', 'At 45° to the direction', 'In a circle'], a: 1, why: 'Longitudinal means oscillation along the same line as propagation.' },
    { q: 'A sound wave travels at 340 m/s with frequency 170 Hz. Its wavelength is', opts: ['2 m', '0.5 m', '57 800 m', '170 m'], a: 0, why: 'λ = v/f = 340/170 = 2 m.' },
    { q: 'Only transverse waves can be', opts: ['Refracted', 'Polarised', 'Diffracted', 'Reflected'], a: 1, why: 'Polarisation restricts vibrations to one plane, which requires a direction perpendicular to travel.' },
    { q: 'A point of zero amplitude on a stationary wave is called a', opts: ['Antinode', 'Node', 'Crest', 'Trough'], a: 1, why: 'Nodes have zero displacement; antinodes have maximum displacement.' },
    { q: 'During refraction of a wave, which quantity remains unchanged?', opts: ['Speed', 'Wavelength', 'Frequency', 'Direction'], a: 2, why: 'Frequency is set by the source and does not change. Speed and wavelength change together.' },
    { q: 'Which of these does NOT require a material medium?', opts: ['Sound', 'Light', 'Water waves', 'Waves on a string'], a: 1, why: 'Light is electromagnetic and propagates through a vacuum.' },
    { q: 'Diffraction is most pronounced when the aperture is', opts: ['Much larger than the wavelength', 'Comparable to the wavelength', 'Far smaller than the wavelength', 'Any size — it makes no difference'], a: 1, why: 'When the gap is similar to the wavelength, spreading is strong.' },
    { q: 'Two waves meeting such that their displacements cancel produce', opts: ['Constructive interference', 'Destructive interference', 'Diffraction', 'A stationary wave'], a: 1, why: 'Opposite displacements sum to zero — destructive interference.' },
    { q: 'In water waves, the distance between two consecutive crests is the', opts: ['Amplitude', 'Frequency', 'Wavelength', 'Period'], a: 2, why: 'Wavelength λ is the distance between two identical points on consecutive waves.' }
  ]
});
