/* JAMB 2027 Prep — Chemistry, Chapters 6–7 */

JAMB.addChapter('chemistry', {
  id: 'mole',
  title: 'The Mole and Chemical Calculations',
  blurb: 'Mole, molar mass, gas volume, concentration, empirical formula, yields and limiting reagents.',
  time: '70 min',
  objectives: [
    'Define the mole and use molar mass in calculations',
    'Use the molar gas volume (22.4 dm³ at S.T.P.)',
    'Calculate concentration in mol/dm³ and g/dm³',
    'Determine empirical and molecular formulae',
    'Solve limiting reagent, percentage yield and concentration problems'
  ],
  body: `
<p class="lead">The mole is Chemistry's counting unit, exactly like the dozen — only far bigger. Almost every quantitative question in JAMB reduces to one routine: <strong>convert to moles, use the equation, convert back</strong>. Master that loop and the whole of stoichiometry opens up.</p>

<div class="note note-warn" style="margin-top:0"><span class="ico">⚠</span><div><b>The universal method</b>
<p>Every calculation question follows the same three steps:<br>
<b>1.</b> Convert whatever you are given into <b>moles</b>.<br>
<b>2.</b> Use the balanced equation's mole ratio.<br>
<b>3.</b> Convert the answer back to whatever the question wants.<br>
If you are ever stuck, start again at step 1.</p></div></div>

<h2>The mole</h2>
<div class="formula-box">
  <div class="fb-head">Core definitions</div>
  <div class="formula-row"><div class="fname">The mole</div>
    <div class="fexpr">1 mol = 6.02 × 10²³ particles (Avogadro’s constant)</div>
    <div class="fnote">Particles = atoms, molecules, ions or formula units as appropriate.</div></div>
  <div class="formula-row"><div class="fname">Moles from mass</div>
    <div class="fexpr">n = <span class="frac"><span>mass (g)</span><span>molar mass (g/mol)</span></span></div></div>
  <div class="formula-row"><div class="fname">Moles from particles</div>
    <div class="fexpr">n = <span class="frac"><span>number of particles</span><span>6.02 × 10²³</span></span></div></div>
  <div class="formula-row"><div class="fname">Moles from gas volume</div>
    <div class="fexpr">n = <span class="frac"><span>volume (dm³)</span><span>22.4 dm³</span></span> at S.T.P.</div></div>
  <div class="formula-row"><div class="fname">Moles from concentration</div>
    <div class="fexpr">n = concentration (mol/dm³) × volume (dm³)</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>dm³ = litre = 1000 cm³</b>
<p>The units trip more people than the chemistry does. <b>1 dm³ = 1 L = 1000 cm³ = 1000 mL</b>. Concentration in mol/dm³ is the same as mol/L. Convert cm³ → dm³ by <b>dividing by 1000</b>.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Mass to moles</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Find the number of moles in 11 g of CO₂. (C = 12, O = 16)</div>
    <div class="step"><div class="step-l">Step 1 — molar mass</div>
    CO₂ = 12 + (16 × 2) = 44 g/mol</div>
    <div class="step"><div class="step-l">Step 2 — divide</div>
    n = 11 / 44</div>
    <div class="ans">Answer: 0.25 mol</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Moles to particles</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    How many molecules are in 0.5 mol of water?</div>
    <div class="step"><div class="step-l">Multiply by Avogadro’s number</div>
    0.5 × 6.02 × 10²³</div>
    <div class="ans">Answer: 3.01 × 10²³ molecules</div>
  </div>
</div>

<h2>Concentration</h2>
<div class="formula-box">
  <div class="fb-head">Concentration</div>
  <div class="formula-row"><div class="fname">Molar concentration</div>
    <div class="fexpr">C = <span class="frac"><span>n (mol)</span><span>V (dm³)</span></span></div>
    <div class="fnote">Unit: mol/dm³ (same as mol/L).</div></div>
  <div class="formula-row"><div class="fname">From mass</div>
    <div class="fexpr">C = <span class="frac"><span>mass (g)</span><span>molar mass × V (dm³)</span></span></div></div>
  <div class="formula-row"><div class="fname">Rearranged</div>
    <div class="fexpr">n = C × V &nbsp;·&nbsp; V = n / C</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Preparing a solution</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Find the mass of NaOH needed to make 500 cm³ of 0.2 mol/dm³ solution. (Na = 23, O = 16, H = 1)</div>
    <div class="step"><div class="step-l">Step 1 — convert volume</div>
    500 cm³ = 0.5 dm³</div>
    <div class="step"><div class="step-l">Step 2 — moles required</div>
    n = C × V = 0.2 × 0.5 = 0.1 mol</div>
    <div class="step"><div class="step-l">Step 3 — molar mass</div>
    NaOH = 23 + 16 + 1 = 40 g/mol</div>
    <div class="step"><div class="step-l">Step 4 — mass</div>
    mass = n × M = 0.1 × 40</div>
    <div class="ans">Answer: 4 g</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Dilution</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    What volume of 4.0 mol/dm³ acid is needed to make 250 cm³ of 0.5 mol/dm³ acid?</div>
    <div class="step"><div class="step-l">Moles needed in the dilute solution</div>
    n = C × V = 0.5 × 0.250 = 0.125 mol</div>
    <div class="step"><div class="step-l">Volume of concentrated acid providing that many moles</div>
    V = n / C = 0.125 / 4.0</div>
    <div class="ans">Answer: 0.03125 dm³ = 31.25 cm³</div>
  </div>
</div>

<h2>Gas calculations</h2>
<p>At <strong>S.T.P.</strong> (0 °C, 1 atm), one mole of any gas occupies <strong>22.4 dm³</strong> (22 400 cm³). At <strong>R.T.P.</strong> (room temperature and pressure) the value is approximately <strong>24 dm³</strong>. Check which the question specifies.</p>

<div class="formula-box">
  <div class="fb-head">Gas volume</div>
  <div class="formula-row"><div class="fname">At S.T.P.</div><div class="fexpr">V = n × 22.4 dm³</div></div>
  <div class="formula-row"><div class="fname">At R.T.P.</div><div class="fexpr">V = n × 24 dm³</div></div>
  <div class="formula-row"><div class="fname">Ideal equation (use when conditions change)</div><div class="fexpr">PV = nRT</div><div class="fnote">P in atm or Pa (consistent with R), T in kelvin.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Volume of a gas at S.T.P.</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    What volume does 0.5 mol of CO₂ occupy at S.T.P.?</div>
    <div class="step"><div class="step-l">Apply the molar volume</div>
    V = 0.5 × 22.4</div>
    <div class="ans">Answer: 11.2 dm³</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Reacting masses via an equation</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Equation</div>
    2Mg + O₂ → 2MgO. Find the mass of MgO formed from 4.8 g of Mg. (Mg = 24, O = 16)</div>
    <div class="step"><div class="step-l">Step 1 — moles of Mg</div>
    n = 4.8 / 24 = 0.2 mol</div>
    <div class="step"><div class="step-l">Step 2 — mole ratio from the equation</div>
    2 Mg → 2 MgO, so 0.2 mol Mg gives 0.2 mol MgO</div>
    <div class="step"><div class="step-l">Step 3 — molar mass of MgO</div>
    24 + 16 = 40 g/mol</div>
    <div class="step"><div class="step-l">Step 4 — mass</div>
    mass = 0.2 × 40</div>
    <div class="ans">Answer: 8 g of MgO</div>
  </div>
</div>

<h2>Empirical and molecular formula</h2>
<p>The <strong>empirical formula</strong> is the simplest whole-number ratio of atoms. The <strong>molecular formula</strong> is the actual number of atoms, and is always a whole-number multiple of the empirical formula.</p>

<div class="formula-box">
  <div class="fb-head">Working method</div>
  <div class="formula-row"><div class="fname">Steps</div>
    <div class="fexpr">1. Write % as mass in g &nbsp;→&nbsp; 2. ÷ by atomic mass &nbsp;→&nbsp; 3. ÷ by the smallest &nbsp;→&nbsp; 4. × to get whole numbers</div></div>
  <div class="formula-row"><div class="fname">Molecular formula</div>
    <div class="fexpr">Molecular mass ÷ empirical formula mass = whole number</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">7</span> Empirical formula from percentages</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A compound contains 40% carbon, 6.7% hydrogen and 53.3% oxygen by mass. (C = 12, H = 1, O = 16)</div>
    <div class="step"><div class="step-l">Step 1 and 2 — divide each % by its atomic mass</div>
    C: 40/12 = 3.33 &nbsp;·&nbsp; H: 6.7/1 = 6.7 &nbsp;·&nbsp; O: 53.3/16 = 3.33</div>
    <div class="step"><div class="step-l">Step 3 — divide by the smallest (3.33)</div>
    C: 1 &nbsp;·&nbsp; H: 2 &nbsp;·&nbsp; O: 1</div>
    <div class="ans">Answer: CH₂O (this is glucose's empirical formula)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">8</span> Finding the molecular formula</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Empirical formula CH₂O, molecular mass 180.</div>
    <div class="step"><div class="step-l">Empirical formula mass</div>
    12 + (1 × 2) + 16 = 30</div>
    <div class="step"><div class="step-l">Multiply factor</div>
    180 ÷ 30 = 6</div>
    <div class="ans">Answer: C₆H₁₂O₆</div>
  </div>
</div>

<h2>Percentage yield</h2>
<div class="eq">% yield = <span class="frac"><span>actual yield</span><span>theoretical yield</span></span> × 100</div>
<p>The <strong>theoretical yield</strong> comes from the balanced equation assuming everything reacts perfectly. The <strong>actual yield</strong> is what is obtained in practice. Yield is always below 100% because of losses on transfer, side reactions and incomplete reaction.</p>

<div class="eq">% purity = <span class="frac"><span>mass of pure substance</span><span>mass of sample</span></span> × 100</div>

<div class="example">
  <div class="example-h"><span class="num">9</span> Percentage yield</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A reaction should give 20 g of product but gives 15 g.</div>
    <div class="step"><div class="step-l">Apply the formula</div>
    % yield = (15 / 20) × 100</div>
    <div class="ans">Answer: 75%</div>
  </div>
</div>

<h2>Limiting reagent</h2>
<p>The reagent that is <strong>used up first</strong> limits how much product forms. The other is in excess. Method: convert <em>both</em> reactants to moles, divide each by its coefficient in the balanced equation — the <strong>smaller number is limiting</strong>.</p>

<div class="example">
  <div class="example-h"><span class="num">10</span> Which reagent runs out?</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Equation</div>
    N₂ + 3H₂ → 2NH₃. You have 1 mol N₂ and 4 mol H₂.</div>
    <div class="step"><div class="step-l">Divide by coefficients</div>
    N₂: 1/1 = 1 &nbsp;·&nbsp; H₂: 4/3 = 1.33</div>
    <div class="step"><div class="step-l">Compare</div>
    N₂ gives the smaller number → <b>N₂ is limiting</b>; H₂ is in excess</div>
    <div class="step"><div class="step-l">Product from the limiting reagent</div>
    1 mol N₂ produces 2 mol NH₃</div>
    <div class="ans">Answer: N₂ is limiting; 2 mol NH₃ formed</div>
  </div>
</div>

<h2>The balanced equation is law</h2>
<div class="note note-exam"><span class="ico">🎯</span><div><b>Balance before you calculate</b>
<p>You can never use an unbalanced equation in a calculation — the mole ratios come from the coefficients. Always balance first and count the coefficients carefully.</p></div></div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Reaction</th><th>Balanced equation</th></tr></thead>
  <tbody>
    <tr><td>Combustion of methane</td><td>CH₄ + 2O₂ → CO₂ + 2H₂O</td></tr>
    <tr><td>Haber process</td><td>N₂ + 3H₂ ⇌ 2NH₃</td></tr>
    <tr><td>Contact process (overall)</td><td>2SO₂ + O₂ ⇌ 2SO₃</td></tr>
    <tr><td>Neutralisation</td><td>HCl + NaOH → NaCl + H₂O</td></tr>
    <tr><td>Thermal decomposition of limestone</td><td>CaCO₃ → CaO + CO₂</td></tr>
    <tr><td>Iron smelting</td><td>Fe₂O₃ + 3CO → 2Fe + 3CO₂</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>n = mass/M; n = V/22.4 at S.T.P.; n = C × V; n = particles ÷ 6.02 × 10²³.</li>
<li>1 dm³ = 1 L = 1000 cm³ — divide cm³ by 1000.</li>
<li>Always: to moles → ratio → back to what's wanted.</li>
<li>Empirical = simplest ratio; molecular = empirical × whole number.</li>
<li>Limiting reagent: smallest (moles ÷ coefficient) wins.</li>
<li>Yield = actual ÷ theoretical × 100; always &lt; 100%.</li>
</ul>
`,
  quiz: [
    { q: 'The number of particles in one mole is', opts: ['6.02 × 10²³', '3.00 × 10⁸', '1.6 × 10⁻¹⁹', '9.8 × 10²³'], a: 0, why: 'Avogadro’s constant = 6.02 × 10²³ per mole.' },
    { q: 'The number of moles in 88 g of CO₂ (C=12, O=16) is', opts: ['4', '2', '1', '0.5'], a: 1, why: 'M = 12 + 32 = 44 g/mol; n = 88/44 = 2 mol.' },
    { q: 'The volume of 0.5 mol of any gas at S.T.P. is', opts: ['11.2 dm³', '22.4 dm³', '12 dm³', '24 dm³'], a: 0, why: 'Molar gas volume at S.T.P. = 22.4 dm³, so 0.5 × 22.4 = 11.2 dm³.' },
    { q: '500 cm³ expressed in dm³ is', opts: ['5 dm³', '0.5 dm³', '50 dm³', '0.05 dm³'], a: 1, why: 'Divide by 1000: 500/1000 = 0.5 dm³.' },
    { q: 'The concentration of a solution containing 0.4 mol in 2 dm³ is', opts: ['0.8 mol/dm³', '0.2 mol/dm³', '5 mol/dm³', '8 mol/dm³'], a: 1, why: 'C = n/V = 0.4/2 = 0.2 mol/dm³.' },
    { q: 'How many moles are in 1.204 × 10²⁴ molecules?', opts: ['0.5', '2', '6', '12'], a: 1, why: 'n = 1.204 × 10²⁴ ÷ 6.02 × 10²³ = 2 mol.' },
    { q: 'A compound contains 92.3% carbon and 7.7% hydrogen. Its empirical formula is', opts: ['CH₄', 'CH', 'C₂H₆', 'C₆H₆'], a: 1, why: 'C: 92.3/12 = 7.69, H: 7.7/1 = 7.7 — divide both by 7.69 to get 1 : 1, so CH.' },
    { q: 'A reaction should give 30 g but gives 24 g. The percentage yield is', opts: ['80%', '125%', '24%', '60%'], a: 0, why: '% yield = 24/30 × 100 = 80%.' },
    { q: 'The molar mass of Ca(OH)₂ (Ca=40, O=16, H=1) is', opts: ['57 g/mol', '74 g/mol', '58 g/mol', '98 g/mol'], a: 1, why: '40 + 2(16 + 1) = 40 + 34 = 74 g/mol.' },
    { q: 'How much NaCl (M = 58.5) is needed for 250 cm³ of 0.4 mol/dm³ solution?', opts: ['5.85 g', '2.925 g', '58.5 g', '11.7 g'], a: 0, why: 'n = 0.4 × 0.25 = 0.1 mol; mass = 0.1 × 58.5 = 5.85 g.' },
    { q: 'In N₂ + 3H₂ → 2NH₃, the mole ratio of N₂ to H₂ is', opts: ['1:1', '1:3', '3:1', '2:3'], a: 1, why: 'Coefficients give 1 mol N₂ reacting with 3 mol H₂.' },
    { q: 'One mole of hydrogen gas contains', opts: ['1 hydrogen atom', '2 hydrogen atoms', '6.02 × 10²³ hydrogen atoms', '6.02 × 10²³ hydrogen molecules'], a: 3, why: 'H₂ is diatomic: 1 mol of H₂ = 6.02 × 10²³ molecules, which contain 1.204 × 10²⁴ atoms in total.' },
    { q: 'Which sample contains the most atoms: 1 mol He, 1 mol H₂, 1 mol CO₂, 1 mol O₂?', opts: ['1 mol He', '1 mol H₂', '1 mol CO₂', '1 mol O₂'], a: 2, why: 'CO₂ has 3 atoms per molecule, so 1 mol gives 3 mol of atoms = 1.806 × 10²⁴.' },
    { q: 'The limiting reagent in a reaction is the one that', opts: ['Is present in the largest amount', 'Is used up first', 'Costs the most', 'Is a gas'], a: 1, why: 'It determines the maximum product; the other reactant is in excess.' },
    { q: 'The mass of 2 mol of H₂O (H=1, O=16) is', opts: ['18 g', '36 g', '20 g', '34 g'], a: 1, why: 'M = 18 g/mol; mass = 2 × 18 = 36 g.' },
    { q: 'Which has the greatest molar mass?', opts: ['O₂', 'CO₂', 'H₂O', 'N₂'], a: 1, why: 'O₂ = 32, CO₂ = 44, H₂O = 18, N₂ = 28 g/mol.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'states',
  title: 'States of Matter and the Kinetic Molecular Theory',
  blurb: 'Gas behaviour, diffusion, changes of state and the particle model.',
  time: '50 min',
  objectives: [
    'Describe the three states and the particle model',
    'Apply the ideal gas equation to unfamiliar conditions',
    'Explain diffusion and Graham’s law qualitatively',
    'Describe changes of state and latent heat',
    'Explain evaporation versus boiling'
  ],
  body: `
<p class="lead">All matter is made of particles in constant motion. The differences between solids, liquids and gases come down to <strong>how much those particles move and how strongly they attract each other</strong>. This chapter builds the model and then uses it to explain everything from evaporation to diffusion.</p>

<h2>The particle (kinetic) model</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Solid</th><th>Liquid</th><th>Gas</th></tr></thead>
  <tbody>
    <tr><td><b>Arrangement</b></td><td>Close, regular, fixed</td><td>Close, random</td><td>Far apart, random</td></tr>
    <tr><td><b>Movement</b></td><td>Vibrate about fixed positions</td><td>Slide over each other</td><td>Move rapidly in all directions</td></tr>
    <tr><td><b>Attraction</b></td><td>Very strong</td><td>Strong</td><td>Very weak</td></tr>
    <tr><td><b>Volume</b></td><td>Fixed</td><td>Fixed</td><td>Fills the container</td></tr>
    <tr><td><b>Compressibility</b></td><td>Practically none</td><td>Very little</td><td>Highly compressible</td></tr>
    <tr><td><b>Density</b></td><td>Highest</td><td>Intermediate</td><td>Lowest</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Compressibility explains everything</b>
<p>Gases are easily compressed because their particles have <b>large spaces between them</b>. Liquids and solids cannot be compressed because the particles are already touching. This is the standard one-mark explanation.</p></div></div>

<h2>The ideal gas equation</h2>
<div class="formula-box">
  <div class="fb-head">Gas calculations in chemistry</div>
  <div class="formula-row"><div class="fname">Ideal gas equation</div><div class="fexpr">PV = nRT</div></div>
  <div class="formula-row"><div class="fname">Molar volume at S.T.P.</div><div class="fexpr">22.4 dm³ (22 400 cm³)</div></div>
  <div class="formula-row"><div class="fname">Molar volume at R.T.P.</div><div class="fexpr">24 dm³</div></div>
  <div class="formula-row"><div class="fname">Common rearrangement</div><div class="fexpr">n = <span class="frac"><span>PV</span><span>RT</span></span></div><div class="fnote">T always in kelvin (°C + 273).</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Units must agree</b>
<p>If P is in pascals, V must be in m³ and R = 8.31 J K⁻¹ mol⁻¹. If P is in atm, V in dm³ and R = 0.082. Mixing units is the commonest cause of a wrong answer — and the wrong answer usually looks plausible.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Molar volume at R.T.P.</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    What volume does 0.25 mol of oxygen occupy at room temperature and pressure?</div>
    <div class="step"><div class="step-l">Apply 24 dm³/mol</div>
    V = 0.25 × 24</div>
    <div class="ans">Answer: 6 dm³</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Moles of gas from volume</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    How many moles are in 4.48 dm³ of CO₂ at S.T.P.?</div>
    <div class="step"><div class="step-l">Divide by molar volume</div>
    n = 4.48 / 22.4</div>
    <div class="ans">Answer: 0.2 mol</div>
  </div>
</div>

<h2>Changes of state</h2>
<div class="formula-box">
  <div class="fb-head">The six changes</div>
  <div class="formula-row"><div class="fname">Heating</div><div class="fexpr">melting (s→l) · boiling/evaporating (l→g) · sublimation (s→g)</div></div>
  <div class="formula-row"><div class="fname">Cooling</div><div class="fexpr">freezing (l→s) · condensing (g→l) · deposition (g→s)</div></div>
  <div class="formula-row"><div class="fname">Subliming substances</div><div class="fexpr">CO₂ (dry ice) · iodine · ammonium chloride · camphor · naphthalene</div></div>
</div>

<h3>Latent heat</h3>
<p><strong>Latent heat</strong> is the energy absorbed during a change of state at a <strong>constant temperature</strong>.</p>
<ul>
<li><strong>Latent heat of fusion</strong> — solid → liquid (melting).</li>
<li><strong>Latent heat of vaporisation</strong> — liquid → gas (boiling).</li>
</ul>
<p>During melting or boiling, the temperature <strong>does not rise</strong> — the energy breaks the attractions between particles rather than making them move faster. This is why a heating curve has flat sections.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why the temperature plateaus</b>
<p>On a heating curve, the flat regions correspond to melting and boiling. Energy goes into <b>overcoming intermolecular forces</b>, not into raising kinetic energy. A graph with a flat section is a very common question.</p></div></div>

<h2>Evaporation versus boiling</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Evaporation</th><th>Boiling</th></tr></thead>
  <tbody>
    <tr><td><b>Where</b></td><td>Surface only</td><td>Throughout the liquid</td></tr>
    <tr><td><b>Temperature</b></td><td>At any temperature</td><td>Only at the fixed boiling point</td></tr>
    <tr><td><b>Rate</b></td><td>Increases with heat, surface area, wind</td><td>Violent, steady bubbling</td></tr>
    <tr><td><b>Temperature effect</b></td><td>Cools the remaining liquid</td><td>Does not cool it</td></tr>
  </tbody>
</table>

<p><strong>Why evaporation cools you:</strong> the fastest-moving molecules escape, so the <em>average</em> kinetic energy of those remaining drops — and average kinetic energy is exactly what temperature measures. Hence a wet cloth on a windy day feels much colder than a dry one.</p>

<h2>Diffusion</h2>
<p><strong>Diffusion</strong> is the net movement of particles from a region of higher concentration to one of lower concentration, down the concentration gradient, due to random motion. It continues until the particles are evenly mixed.</p>

<div class="formula-box">
  <div class="fb-head">Diffusion rates</div>
  <div class="formula-row"><div class="fname">Rate depends on</div>
    <div class="fexpr">Molar mass and temperature</div>
    <div class="fnote">Lighter molecules move faster → diffuse faster.</div></div>
  <div class="formula-row"><div class="fname">Comparison rule</div>
    <div class="fexpr">rate ∝ 1 / √(molar mass)</div>
    <div class="fnote">At the same temperature, halve the mass → diffuse √2 times faster.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Comparing diffusion</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Compare the rate of diffusion of ammonia (NH₃, M = 17) and chlorine (Cl₂, M = 71).</div>
    <div class="step"><div class="step-l">Apply the inverse-square-root rule</div>
    rate ratio = √(71/17) = √4.18 ≈ 2.04</div>
    <div class="ans">Answer: ammonia diffuses about twice as fast as chlorine</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The classic experiment</b>
<p>NH₃ and HCl are placed at opposite ends of a glass tube. NH₃ is lighter and travels faster, so the white ring of <b>NH₄Cl forms nearer the hydrogen chloride end</b>. At exactly equal rates the ring forms in the middle.</p></div></div>

<h2>Real gases and kinetic theory</h2>
<p>Kinetic theory assumes:</p>
<ol>
<li>Gases are made of tiny particles in <strong>random motion</strong>.</li>
<li>Collisions with the walls are <strong>perfectly elastic</strong> (no energy lost) and produce gas pressure.</li>
<li>Actual particle volume is <strong>negligible</strong> compared with the container.</li>
<li>Forces of attraction between particles are <strong>negligible</strong>.</li>
</ol>
<p>Real gases deviate from this behaviour at <strong>high pressure and low temperature</strong>, where particles are close enough for attractions to matter and their own volume is no longer negligible. The gases most nearly "ideal" are those with weak intermolecular forces, like helium and hydrogen.</p>

<h2>Chapter recap</h2>
<ul>
<li>Solid: fixed, vibrating. Liquid: sliding, close. Gas: far apart, rapid, compressible.</li>
<li>22.4 dm³/mol at S.T.P.; 24 dm³/mol at R.T.P.</li>
<li>Changes of state happen at constant temperature; latent heat is involved.</li>
<li>Evaporation = surface, any temperature, cools the liquid. Boiling = throughout, fixed temperature.</li>
<li>Lighter gases diffuse faster: rate ∝ 1/√M.</li>
<li>Real gases deviate most at high pressure and low temperature.</li>
</ul>
`,
  quiz: [
    { q: 'A gas is easily compressed because its particles', opts: ['Are closely packed', 'Have large spaces between them', 'Are held by strong forces', 'Are very heavy'], a: 1, why: 'The large empty spaces can be reduced by pressure — unlike solids and liquids.' },
    { q: 'The volume of 0.75 mol of CO₂ at S.T.P. is', opts: ['16.8 dm³', '24 dm³', '22.4 dm³', '18 dm³'], a: 0, why: '0.75 × 22.4 = 16.8 dm³.' },
    { q: 'How many moles are in 2.24 dm³ of gas at S.T.P.?', opts: ['1', '0.1', '0.224', '10'], a: 1, why: 'n = 2.24/22.4 = 0.1 mol.' },
    { q: 'The change from solid directly to gas is called', opts: ['Evaporation', 'Sublimation', 'Condensation', 'Deposition'], a: 1, why: 'Sublimation bypasses the liquid state entirely.' },
    { q: 'During melting, the temperature of a substance', opts: ['Rises steadily', 'Remains constant', 'Falls', 'Rises then falls'], a: 1, why: 'The latent heat of fusion goes into breaking attractions between particles, not into raising kinetic energy.' },
    { q: 'Evaporation differs from boiling in that evaporation', opts: ['Occurs only at a fixed temperature', 'Occurs at the surface at any temperature', 'Is always faster', 'Requires heating to 100 °C'], a: 1, why: 'Evaporation is a surface phenomenon happening over a range of temperatures.' },
    { q: 'Evaporation cools the remaining liquid because', opts: ['Heat flows into the surroundings', 'The fastest molecules escape, lowering the average kinetic energy', 'The liquid loses mass only', 'Pressure falls'], a: 1, why: 'Temperature is a measure of average kinetic energy — removing the fastest molecules reduces it.' },
    { q: 'Diffusion is the net movement of particles', opts: ['From low to high concentration', 'Down a concentration gradient', 'Only in solids', 'Only at high temperature'], a: 1, why: 'From region of higher concentration to lower, due to random motion.' },
    { q: 'At the same temperature, which gas diffuses fastest?', opts: ['Oxygen (32)', 'Chlorine (71)', 'Ammonia (17)', 'Carbon dioxide (44)'], a: 2, why: 'Rate ∝ 1/√M, so the lightest gas — ammonia (M = 17) — diffuses fastest.' },
    { q: 'In the NH₃/HCl tube experiment, the white ring forms', opts: ['In the middle', 'Nearer the HCl end', 'Nearer the NH₃ end', 'At the very edge'], a: 1, why: 'NH₃ (M=17) travels faster than HCl (M=36.5), so it meets the HCl closer to the HCl end.' },
    { q: 'The SI unit of temperature in all gas calculations is the', opts: ['degree Celsius', 'kelvin', 'Fahrenheit', 'joule'], a: 1, why: 'Always convert to kelvin: K = °C + 273.' },
    { q: 'Which condition causes a real gas to deviate most from ideal behaviour?', opts: ['Low pressure, high temperature', 'High pressure, low temperature', 'Any temperature', 'Zero volume'], a: 1, why: 'Particles are then close together, so their own volume and intermolecular attractions become significant.' },
    { q: 'A heating curve shows a plateau during melting because', opts: ['No heat is supplied', 'Heat is used to overcome forces between particles', 'The substance is losing heat', 'The thermometer is faulty'], a: 1, why: 'Latent heat of fusion is absorbed without raising the temperature.' },
    { q: 'The latent heat of vaporisation is the energy needed to change', opts: ['Solid to liquid', 'Liquid to gas', 'Gas to liquid', 'Solid to gas'], a: 1, why: 'Vaporisation = liquid → gas; fusion = solid → liquid.' },
    { q: 'Which substance can sublimate at normal pressure?', opts: ['Sodium chloride', 'Dry ice (solid CO₂)', 'Water', 'Iron'], a: 1, why: 'Solid CO₂ goes straight to gas at room pressure — no liquid phase exists.' },
    { q: 'The particles in a solid', opts: ['Move freely', 'Vibrate about fixed positions', 'Are far apart', 'Are attracted negligibly'], a: 1, why: 'Strong forces hold them in a fixed lattice while they vibrate about their positions.' }
  ]
});
