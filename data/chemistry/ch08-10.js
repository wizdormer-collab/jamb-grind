/* JAMB 2027 Prep — Chemistry, Chapters 8–10 */

JAMB.addChapter('chemistry', {
  id: 'thermochemistry',
  title: 'Thermochemistry and Energetics',
  blurb: 'Enthalpy changes, calorimetry, Hess’s law and bond energies.',
  time: '55 min',
  objectives: [
    'Define exothermic and endothermic changes',
    'Write thermochemical equations and interpret energy profile diagrams',
    'Calculate heat changes using q = mcΔT',
    'Apply Hess’s law to construct enthalpy cycles',
    'Use mean bond energies to estimate reaction enthalpy'
  ],
  body: `
<p class="lead">Every chemical reaction involves energy, and the direction of energy flow is what separates exothermic from endothermic. Two calculation methods dominate the exam — <strong>q = mcΔT</strong> in the laboratory and <strong>bond energies</strong> from data — plus <strong>Hess’s law</strong>, which lets you find an enthalpy change you cannot measure directly.</p>

<h2>Enthalpy change</h2>
<blockquote><strong>Enthalpy change (ΔH)</strong> is the heat energy change at <strong>constant pressure</strong>. It is measured in kJ mol⁻¹.</blockquote>

<div class="formula-box">
  <div class="fb-head">The sign convention</div>
  <div class="formula-row"><div class="fname">Exothermic</div>
    <div class="fexpr">ΔH is <b>negative</b> (−)</div>
    <div class="fnote">Energy released to the surroundings. Temperature of the surroundings rises.</div></div>
  <div class="formula-row"><div class="fname">Endothermic</div>
    <div class="fexpr">ΔH is <b>positive</b> (+)</div>
    <div class="fnote">Energy absorbed. Temperature of the surroundings falls.</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Process</th><th>Type</th><th>Typical ΔH</th></tr></thead>
  <tbody>
    <tr><td>Combustion of fuels</td><td>Exothermic</td><td>Large negative</td></tr>
    <tr><td>Neutralisation</td><td>Exothermic</td><td>≈ −57 kJ mol⁻¹</td></tr>
    <tr><td>Respiration</td><td>Exothermic</td><td>Releases energy</td></tr>
    <tr><td>Thermal decomposition (CaCO₃)</td><td>Endothermic</td><td>Positive</td></tr>
    <tr><td>Photosynthesis</td><td>Endothermic</td><td>Absorbs light energy</td></tr>
    <tr><td>Evaporation / boiling</td><td>Endothermic</td><td>Positive</td></tr>
    <tr><td>Dissolving NH₄NO₃ in water</td><td>Endothermic</td><td>Cooling effect</td></tr>
    <tr><td>Dissolving NaOH in water</td><td>Exothermic</td><td>Heating effect</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Mnemonic for exothermic</b>
<p><b>C</b>ombustion, <b>N</b>eutralisation, <b>R</b>espiration are <b>exothermic</b>. <b>D</b>ecomposition, <b>P</b>hotosynthesis, <b>E</b>vaporation are <b>endothermic</b>. JAMB asks this directly — know both lists.</p></div></div>

<h2>Types of enthalpy change</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Change</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td><b>Heat of combustion</b></td><td>Heat released when <b>1 mole</b> of a substance burns completely in excess oxygen</td></tr>
    <tr><td><b>Heat of neutralisation</b></td><td>Heat released when <b>1 mole of water</b> is formed from an acid and an alkali (≈ −57 kJ)</td></tr>
    <tr><td><b>Heat of formation</b></td><td>Heat change when <b>1 mole</b> of a compound forms from its elements in their standard states (ΔH°f of elements = 0)</td></tr>
    <tr><td><b>Heat of solution</b></td><td>Heat change when a solute dissolves</td></tr>
    <tr><td><b>Heat of atomisation</b></td><td>Heat change when <b>1 mole</b> of gaseous atoms forms from the element</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Neutralisation — a specific case</div>
  <div class="formula-row"><div class="fname">Strong acid + strong alkali</div>
    <div class="fexpr">H⁺(aq) + OH⁻(aq) → H₂O(l) &nbsp;&nbsp;ΔH = −57 kJ mol⁻¹</div>
    <div class="fnote">The same value whatever the strong acid and alkali — only H⁺ + OH⁻ matter.</div></div>
  <div class="formula-row"><div class="fname">Weak acid or weak alkali</div>
    <div class="fexpr">Magnitude is <b>less</b> than 57 kJ mol⁻¹</div>
    <div class="fnote">Some energy is used up ionising the weak electrolyte.</div></div>
</div>

<h2>Energy profile diagrams</h2>
<p>An energy profile shows the energy of the substances as the reaction proceeds.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Feature</th><th>Exothermic</th><th>Endothermic</th></tr></thead>
  <tbody>
    <tr><td>Products vs reactants</td><td>Products <b>lower</b></td><td>Products <b>higher</b></td></tr>
    <tr><td>ΔH</td><td>Negative</td><td>Positive</td></tr>
    <tr><td>Activation energy</td><td>Energy needed to start (hump)</td><td>Energy needed to start (hump)</td></tr>
    <tr><td>Heat released/absorbed</td><td>Released</td><td>Absorbed</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Reading ΔH off a diagram</b>
<p>ΔH = <b>products − reactants</b>. If products are below reactants, you get a negative number → exothermic. The activation energy is measured from the <em>reactants</em> to the peak of the hump, not from zero.</p></div></div>

<h3>The effect of a catalyst</h3>
<p>A catalyst provides an <strong>alternative reaction pathway of lower activation energy</strong>. It changes neither ΔH nor the position of equilibrium — only the rate.</p>

<h2>Calorimetry — q = mcΔT</h2>
<div class="formula-box">
  <div class="fb-head">Heat energy calculations</div>
  <div class="formula-row"><div class="fname">Heat gained or lost</div>
    <div class="fexpr">q = m c ΔT</div>
    <div class="fnote">m = mass (g), c = specific heat capacity (J g⁻¹ K⁻¹), ΔT = temperature change</div></div>
  <div class="formula-row"><div class="fname">Specific heat capacity of water</div>
    <div class="fexpr">c = 4.2 J g⁻¹ K⁻¹ (also 4.18)</div></div>
  <div class="formula-row"><div class="fname">Molar enthalpy change</div>
    <div class="fexpr">ΔH = −q / n &nbsp;&nbsp;(exothermic → negative)</div>
    <div class="fnote">n = moles of the substance that is burning / reacting</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Heat released when a fuel burns</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    0.50 g of a fuel burns and heats 100 g of water from 25 °C to 45 °C.</div>
    <div class="step"><div class="step-l">Step 1 — temperature change</div>
    ΔT = 45 − 25 = 20 °C = 20 K</div>
    <div class="step"><div class="step-l">Step 2 — heat gained by water</div>
    q = m c ΔT = 100 × 4.2 × 20 = 8400 J = 8.4 kJ</div>
    <div class="step"><div class="step-l">Step 3 — heat released by the fuel</div>
    8.4 kJ was absorbed by the water, so the fuel released 8.4 kJ</div>
    <div class="ans">Answer: 8.4 kJ released</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Heat of combustion per gram and per mole</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    0.72 g of ethanol (C₂H₅OH, M = 46) heats 250 g of water by 40 °C.</div>
    <div class="step"><div class="step-l">Heat absorbed by water</div>
    q = 250 × 4.2 × 40 = 42 000 J = 42 kJ</div>
    <div class="step"><div class="step-l">Moles of ethanol burned</div>
    n = 0.72 / 46 = 0.01565 mol</div>
    <div class="step"><div class="step-l">Heat of combustion per mole</div>
    ΔHc = −42 / 0.01565 ≈ −2683 kJ mol⁻¹</div>
    <div class="ans">Answer: ≈ −2683 kJ mol⁻¹ (per gram = −42/0.72 = −58.3 kJ g⁻¹)</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Heat lost by the reaction = heat gained by the water</b>
<p>The reaction's energy goes into the water (and the container). Set <b>−q(reaction) = q(water)</b>, and always give exothermic ΔH a <b>negative</b> sign. A positive answer for a combustion reaction loses the mark even if the arithmetic is perfect.</p></div></div>

<h2>Hess’s law</h2>
<blockquote><strong>Hess’s law:</strong> the total enthalpy change is the <strong>same regardless of the route</strong>, provided the initial and final conditions are the same.</blockquote>

<div class="formula-box">
  <div class="fb-head">Hess’s law cycles</div>
  <div class="formula-row"><div class="fname">Using heats of formation</div>
    <div class="fexpr">ΔHᵣ = Σ ΔH°f(products) − Σ ΔH°f(reactants)</div></div>
  <div class="formula-row"><div class="fname">Using heats of combustion</div>
    <div class="fexpr">ΔHᵣ = Σ ΔHc(reactants) − Σ ΔHc(products)</div>
    <div class="fnote">Note the reversal — combustion data runs the other way.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Products minus reactants, but which way round?</b>
<p>With <b>formation</b> data: products <b>minus</b> reactants. With <b>combustion</b> data: reactants <b>minus</b> products. If you remember only one rule, remember that the two are reversed — and check your sign against whether the reaction is exothermic.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Hess’s law with formation data</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reaction</div>
    CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)</div>
    <div class="step"><div class="step-l">Data (kJ mol⁻¹)</div>
    ΔH°f CO₂ = −394 · ΔH°f H₂O = −286 · ΔH°f CH₄ = −75 · ΔH°f O₂ = 0</div>
    <div class="step"><div class="step-l">Apply the rule</div>
    ΔHᵣ = [−394 + 2(−286)] − [−75 + 2(0)]<br>
    = [−394 − 572] − [−75]<br>
    = −966 + 75</div>
    <div class="ans">Answer: −891 kJ mol⁻¹</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Hess’s law with combustion data</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reaction</div>
    C(graphite) + ½O₂(g) → CO(g)</div>
    <div class="step"><div class="step-l">Data (kJ mol⁻¹)</div>
    ΔHc C = −394 · ΔHc CO = −283 · ΔHc O₂ = 0</div>
    <div class="step"><div class="step-l">Reactants minus products</div>
    ΔHᵣ = [−394 + 0] − [−283] = −394 + 283</div>
    <div class="ans">Answer: −111 kJ mol⁻¹</div>
  </div>
</div>

<h2>Bond energies</h2>
<p>Bonds are <strong>broken</strong> (energy <b>in</b>, endothermic) and <strong>formed</strong> (energy <b>out</b>, exothermic).</p>

<div class="formula-box">
  <div class="fb-head">Bond energy calculation</div>
  <div class="formula-row"><div class="fname">Formula</div>
    <div class="fexpr">ΔH = Σ(bonds broken) − Σ(bonds formed)</div>
    <div class="fnote">Broken is positive, formed is negative — hence "minus".</div></div>
  <div class="formula-row"><div class="fname">Sign check</div>
    <div class="fexpr">More energy released forming than absorbed breaking → <b>exothermic</b> (ΔH &lt; 0)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Using bond energies</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reaction</div>
    H₂ + Cl₂ → 2H–Cl<br>Break: H–H (436) and Cl–Cl (242)<br>Form: 2 × H–Cl (2 × 431 = 862)</div>
    <div class="step"><div class="step-l">Apply</div>
    ΔH = (436 + 242) − 862<br>
    = 678 − 862</div>
    <div class="ans">Answer: −184 kJ mol⁻¹ (exothermic, as expected)</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Why bond-energy answers never match table values exactly</b>
<p>Mean bond energies are averages over many different molecules, so calculated ΔH values differ slightly from experimental ones. A question may ask you to comment on this difference — the explanation is that <b>mean bond energies are averages and do not account for the molecular environment or intermolecular forces</b>.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Exothermic → ΔH negative (combustion, neutralisation, respiration). Endothermic → ΔH positive (decomposition, photosynthesis, evaporation).</li>
<li>q = mcΔT with c = 4.2 J g⁻¹ K⁻¹; heat lost by reaction = heat gained by water.</li>
<li>Neutralisation of strong acid + strong alkali = −57 kJ mol⁻¹; weaker electrolytes give less.</li>
<li>Hess: formation → products − reactants; combustion → reactants − products.</li>
<li>Bond energies: broken − formed. Catalyst changes rate, never ΔH.</li>
</ul>
`,
  quiz: [
    { q: 'A reaction with a negative ΔH is described as', opts: ['Endothermic', 'Exothermic', 'Reversible', 'Spontaneous'], a: 1, why: 'Negative ΔH means the system lost energy to the surroundings.' },
    { q: 'Which process is endothermic?', opts: ['Neutralisation', 'Combustion', 'Photosynthesis', 'Respiration'], a: 2, why: 'Photosynthesis absorbs light energy to build glucose from CO₂ and water.' },
    { q: 'The heat of neutralisation of a strong acid with a strong alkali is approximately', opts: ['−57 kJ mol⁻¹', '+57 kJ mol⁻¹', '−394 kJ mol⁻¹', '0 kJ mol⁻¹'], a: 0, why: 'H⁺(aq) + OH⁻(aq) → H₂O(l) releases about 57 kJ per mole of water formed.' },
    { q: 'The heat of neutralisation using ethanoic acid (a weak acid) will be', opts: ['Greater than 57 kJ mol⁻¹', 'Less than 57 kJ mol⁻¹', 'Exactly 57 kJ mol⁻¹', 'Zero'], a: 1, why: 'Some energy is consumed ionising the weak acid, so less heat is released overall.' },
    { q: 'The specific heat capacity of water used in calculations is', opts: ['4.2 J g⁻¹ K⁻¹', '42 J g⁻¹ K⁻¹', '0.42 J g⁻¹ K⁻¹', '4.2 kJ g⁻¹ K⁻¹'], a: 0, why: '4.2 J g⁻¹ K⁻¹ (or 4.18) — the standard value for aqueous calorimetry.' },
    { q: '100 g of water rises from 20 °C to 30 °C. Heat absorbed is', opts: ['42 J', '420 J', '4200 J', '42 000 J'], a: 2, why: 'q = 100 × 4.2 × 10 = 4200 J.' },
    { q: 'In q = mcΔT, ΔT must be expressed in', opts: ['Celsius only', 'Kelvin (numerically the same as °C)', 'Joules', 'dm³'], a: 1, why: 'A temperature difference in K equals one in °C, but the SI unit is the kelvin.' },
    { q: 'Hess’s law states that the enthalpy change', opts: ['Depends on the route taken', 'Is the same for any route between the same states', 'Is always positive', 'Depends on the catalyst'], a: 1, why: 'Total enthalpy change is independent of the route, provided start and finish are the same.' },
    { q: 'Using heats of formation, ΔHᵣ is calculated as', opts: ['Reactants − products', 'Products − reactants', 'Products × reactants', 'Reactants + products'], a: 1, why: 'ΔHᵣ = Σ ΔH°f(products) − Σ ΔH°f(reactants).' },
    { q: 'Using heats of combustion, ΔHᵣ is calculated as', opts: ['Products − reactants', 'Reactants − products', 'Half of reactants − products', 'Products + reactants'], a: 1, why: 'Combustion data runs the opposite way: ΔHᵣ = Σ ΔHc(reactants) − Σ ΔHc(products).' },
    { q: 'The standard enthalpy of formation of an element in its standard state is', opts: ['−100 kJ mol⁻¹', '0 kJ mol⁻¹', '+100 kJ mol⁻¹', 'Undefined'], a: 1, why: 'By definition, elements in their standard states have ΔH°f = 0.' },
    { q: 'The enthalpy change from bond energies is found by', opts: ['Bonds formed − bonds broken', 'Bonds broken − bonds formed', 'Bonds broken + bonds formed', 'Products − reactants'], a: 1, why: 'Breaking absorbs energy (positive), forming releases it (exothermic).' },
    { q: 'Breaking chemical bonds is always', opts: ['Exothermic', 'Endothermic', 'Neutral', 'Spontaneous'], a: 1, why: 'Energy must be supplied to pull bonded atoms apart.' },
    { q: 'A catalyst lowers the activation energy by', opts: ['Raising the energy of reactants', 'Providing an alternative reaction pathway', 'Changing the enthalpy of the products', 'Increasing the temperature'], a: 1, why: 'It offers a different route with a smaller energy hump — ΔH is unchanged.' },
    { q: 'The activation energy of a reaction is', opts: ['The total energy released', 'The minimum energy needed to start the reaction', 'The difference between reactants and products', 'The energy of the products'], a: 1, why: 'Molecules must collide with at least this much energy before reacting.' },
    { q: 'In an exothermic energy profile diagram, the products lie', opts: ['Higher than the reactants', 'Lower than the reactants', 'At the same level as the reactants', 'At the peak'], a: 1, why: 'Energy is released, so the products are at lower energy — giving a negative ΔH.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'equilibrium',
  title: 'Chemical Equilibrium',
  blurb: 'Le Chatelier’s principle and the effect of concentration, pressure and temperature.',
  time: '50 min',
  objectives: [
    'Define dynamic equilibrium and state its conditions',
    'Apply Le Chatelier’s principle to predict shifts',
    'Predict the effect of concentration, pressure and temperature changes',
    'Explain the Haber and Contact processes in terms of yield',
    'Write equilibrium constant expressions'
  ],
  body: `
<p class="lead">Many reactions never go to completion — they reach a balance point where both forward and reverse reactions continue at equal rates. The exam tests one idea repeatedly: <strong>if you disturb the system, which way does it move to oppose the disturbance?</strong> Learn that sentence and you can answer almost any question here.</p>

<h2>Reversible reactions and dynamic equilibrium</h2>
<p>A <strong>reversible reaction</strong> can proceed in both directions and is written with a double arrow:</p>
<div class="eq">N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</div>

<blockquote><strong>Dynamic equilibrium</strong> occurs in a closed system when the <em>forward and reverse reactions proceed at equal rates</em>, so the concentrations of all species remain constant — but <b>not necessarily equal</b> to each other.</blockquote>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Three conditions, all required</b>
<p>Equilibrium requires:<br>
<b>1.</b> A <b>closed system</b> (nothing enters or leaves).<br>
<b>2.</b> Both reactions occurring (it is <b>dynamic</b>, not stopped).<br>
<b>3.</b> Equal rates — so concentrations are <b>constant</b>.<br>
If any condition fails, equilibrium is not established.</p></div></div>

<h2>Le Chatelier’s principle</h2>
<blockquote><strong>When a system at equilibrium is disturbed, it shifts to partially oppose the change and re-establish equilibrium.</strong></blockquote>

<p>The disturbance is "opposed" — not eliminated. The system moves to use up what was added and replace what was removed.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Change</th><th>Shift</th><th>Reasoning</th></tr></thead>
  <tbody>
    <tr><td><b>Concentration: add more reactant</b></td><td>→ Forward</td><td>Uses up the added reactant</td></tr>
    <tr><td><b>Concentration: remove product</b></td><td>→ Forward</td><td>Replaces what was removed</td></tr>
    <tr><td><b>Concentration: add more product</b></td><td>← Reverse</td><td>Uses up the added product</td></tr>
    <tr><td><b>Pressure: increase</b></td><td>→ Towards the side with <b>fewer</b> moles of gas</td><td>Counteracts the pressure rise</td></tr>
    <tr><td><b>Pressure: decrease</b></td><td>→ Towards the side with <b>more</b> moles of gas</td><td>Counteracts the pressure fall</td></tr>
    <tr><td><b>Temperature: increase (exothermic)</b></td><td>← Reverse (endothermic direction)</td><td>Absorbs the added heat</td></tr>
    <tr><td><b>Temperature: decrease (exothermic)</b></td><td>→ Forward (exothermic direction)</td><td>Releases heat to compensate</td></tr>
    <tr><td><b>Add a catalyst</b></td><td><b>No shift</b></td><td>Speeds both directions equally; only shortens the time to equilibrium</td></tr>
    <tr><td><b>Add an inert gas at constant volume</b></td><td><b>No shift</b></td><td>Partial pressures of the reacting species unchanged</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The temperature rule has a twist</b>
<p>Temperature is the <b>only</b> change that alters the value of the equilibrium constant. Raising the temperature of an exothermic reaction shifts it backwards and <b>lowers</b> K. Concentration and pressure shifts change the position but <b>not</b> K itself.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Pressure only matters if gases are involved</b>
<p>If all species are solids or liquids, or if the number of gas moles is the same on both sides, changing the pressure has <b>no effect</b> on the position of equilibrium. Always count the gas moles on each side first.</p></div></div>

<h2>Worked applications</h2>

<div class="example">
  <div class="example-h"><span class="num">1</span> The Haber process</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Equation</div>
    N₂(g) + 3H₂(g) ⇌ 2NH₃(g) &nbsp;&nbsp;ΔH = −92 kJ mol⁻¹ (exothermic)</div>
    <div class="step"><div class="step-l">Count the gas moles</div>
    Left: 1 + 3 = 4 &nbsp;·&nbsp; Right: 2 → high pressure favours the right</div>
    <div class="step"><div class="step-l">Temperature</div>
    Exothermic, so low temperature favours yield — but too low gives an unusably slow rate</div>
    <div class="step"><div class="step-l">Industrial compromise</div>
    ≈450 °C, 200 atm, iron catalyst → best <b>rate</b> and <b>yield</b> balance for economics</div>
    <div class="ans">Answer: high pressure, moderate temperature, catalyst</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> The Contact process</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Equation</div>
    2SO₂(g) + O₂(g) ⇌ 2SO₃(g) &nbsp;&nbsp;ΔH = −196 kJ mol⁻¹</div>
    <div class="step"><div class="step-l">Count the gas moles</div>
    Left: 2 + 1 = 3 &nbsp;·&nbsp; Right: 2 → high pressure favours SO₃</div>
    <div class="step"><div class="step-l">Practical conditions</div>
    2 atm (not high — enough, and cheaper/safer), ~450 °C, V₂O₅ catalyst</div>
    <div class="ans">Answer: excess air shifts equilibrium right; moderate temperature chosen for rate</div>
  </div>
</div>

<h2>The equilibrium constant</h2>
<div class="formula-box">
  <div class="fb-head">Kc expression</div>
  <div class="formula-row"><div class="fname">General form</div>
    <div class="fexpr">aA + bB ⇌ cC + dD &nbsp;&nbsp;→&nbsp;&nbsp; K<sub>c</sub> = <span class="frac"><span>[C]<sup>c</sup>[D]<sup>d</sup></span><span>[A]<sup>a</sup>[B]<sup>b</sup></span></span></div>
    <div class="fnote">Products over reactants, each raised to its stoichiometric coefficient.</div></div>
  <div class="formula-row"><div class="fname">Key rules</div>
    <div class="fexpr">Pure solids and liquids are <b>omitted</b>; water is omitted if it is the solvent</div></div>
  <div class="formula-row"><div class="fname">K only changes with</div>
    <div class="fexpr">Temperature</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Writing Kc</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reaction</div>
    H₂(g) + I₂(g) ⇌ 2HI(g)</div>
    <div class="step"><div class="step-l">Products over reactants</div>
    K<sub>c</sub> = [HI]² / ([H₂][I₂])</div>
    <div class="step"><div class="step-l">Note</div>
    All are gases, so all appear. No pure solids to exclude.</div>
    <div class="ans">Answer: K<sub>c</sub> = [HI]²/([H₂][I₂])</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Kc with a solid present</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reaction</div>
    CaCO₃(s) ⇌ CaO(s) + CO₂(g)</div>
    <div class="step"><div class="step-l">Omit the solids</div>
    Only the gas appears in the expression</div>
    <div class="ans">Answer: K<sub>c</sub> = [CO₂]</div>
  </div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>What the value of K tells you</b>
<p><b>K ≫ 1</b> — equilibrium lies well to the right (products favoured).<br>
<b>K ≪ 1</b> — equilibrium lies well to the left (reactants favoured).<br>
A large K means the reaction goes almost to completion at that temperature.</p></div></div>

<h2>The meaning of "yield"</h2>
<p><strong>Yield</strong> = how much product you actually obtain. Anything that shifts the equilibrium <strong>to the right</strong> increases yield of that product. In practice industry also removes product as it forms (e.g. liquefying SO₃) to keep pulling the equilibrium forward.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Catalyst and yield</b>
<p>A catalyst increases the <b>rate</b> at which equilibrium is reached but does <b>not</b> change the yield or the value of K. Every question with "add a catalyst" as an option and "yield" in the stem is testing exactly this.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Dynamic equilibrium: closed system, both directions, equal rates, constant (not equal) concentrations.</li>
<li>Le Chatelier: the system opposes the change imposed.</li>
<li>Pressure shifts toward fewer gas moles; catalyst and inert gas cause no shift.</li>
<li>Temperature is the only change that alters K.</li>
<li>Kc = products/reactants, coefficients become powers, solids omitted.</li>
</ul>
`,
  quiz: [
    { q: 'Dynamic equilibrium requires the reaction to take place in a', opts: ['Open beaker', 'Closed system', 'Container with a catalyst', 'High-temperature vessel'], a: 1, why: 'Nothing may enter or leave, otherwise concentrations cannot stabilise.' },
    { q: 'At equilibrium, the forward and reverse reactions', opts: ['Stop completely', 'Occur at equal rates', 'Occur only in the forward direction', 'Occur at random'], a: 1, why: 'Equal rates make concentrations constant — the reactions continue dynamically.' },
    { q: 'The concentrations of species at equilibrium are', opts: ['Always equal to each other', 'Constant but not necessarily equal', 'Always zero', 'Increasing continuously'], a: 1, why: 'They stop changing, but their actual values depend on K.' },
    { q: 'Le Chatelier’s principle states that a system at equilibrium', opts: ['Ignores any disturbance', 'Shifts to oppose the disturbance imposed on it', 'Shifts in the direction of the catalyst', 'Stops reacting when disturbed'], a: 1, why: 'The system counteracts the change, though it does not fully cancel it.' },
    { q: 'Increasing the concentration of a reactant shifts the equilibrium', opts: ['To the left', 'To the right', 'No shift', 'Sideways only'], a: 1, why: 'The system uses up the added reactant by favouring the forward reaction.' },
    { q: 'Removing the product of a reversible reaction causes the equilibrium to', opts: ['Shift left', 'Shift right', 'Remain unchanged', 'Stop'], a: 1, why: 'The system replaces what was removed, driving the forward reaction.' },
    { q: 'Increasing the pressure on N₂(g) + 3H₂(g) ⇌ 2NH₃(g) shifts the equilibrium', opts: ['Left, because there are more moles on the left', 'Right, because there are fewer moles on the right', 'Not at all', 'Only if a catalyst is added'], a: 1, why: 'The system reduces pressure by moving to the side with fewer gas molecules (2 vs 4).' },
    { q: 'Catalysts affect an equilibrium by', opts: ['Shifting it to the right', 'Increasing the yield', 'Speeding up both directions equally with no shift', 'Changing the value of K'], a: 2, why: 'Both rates increase identically, so the position of equilibrium and the yield are unchanged.' },
    { q: 'Which change will alter the value of the equilibrium constant K?', opts: ['Changing concentration', 'Adding a catalyst', 'Changing temperature', 'Changing pressure'], a: 2, why: 'K depends only on temperature; other changes shift the position but not K.' },
    { q: 'The Haber process is exothermic, so yield of ammonia is favoured by', opts: ['High temperature', 'Low temperature', 'Removing nitrogen', 'Low pressure'], a: 1, why: 'Lower temperature shifts an exothermic equilibrium to the right, though a moderate temperature is used industrially for rate.' },
    { q: 'Industrial conditions in the Haber process are a compromise because', opts: ['High pressure gives no benefit', 'Low temperature gives too slow a rate', 'A catalyst increases yield', 'Ammonia decomposes at all temperatures'], a: 1, why: 'The theoretically best temperature gives an uneconomic rate, so about 450 °C is used.' },
    { q: 'For the equilibrium CaCO₃(s) ⇌ CaO(s) + CO₂(g), Kc equals', opts: ['[CaO][CO₂]/[CaCO₃]', '[CO₂]', '[CaO]/[CaCO₃]', '[CO₂]/[CaCO₃]'], a: 1, why: 'Pure solids are excluded from the expression, leaving only the gas.' },
    { q: 'For H₂(g) + I₂(g) ⇌ 2HI(g), the correct Kc expression is', opts: ['[HI]/([H₂][I₂])', '[HI]²/([H₂][I₂])', '[H₂][I₂]/[HI]²', '[2HI]/([H₂][I₂])'], a: 1, why: 'Products over reactants with coefficients as powers: [HI]².' },
    { q: 'In an equilibrium constant expression, pure solids and liquids are', opts: ['Included with a coefficient of 1', 'Omitted', 'Multiplied together', 'Placed in the denominator'], a: 1, why: 'Their concentrations (densities) are constant and are absorbed into K.' },
    { q: 'A very large value of K indicates that at equilibrium', opts: ['Reactants are favoured', 'Products are favoured', 'Neither side is favoured', 'No reaction occurs'], a: 1, why: 'K ≫ 1 means the numerator (products) dominates.' },
    { q: 'Adding an inert gas at constant volume to an equilibrium mixture causes', opts: ['A shift to the right', 'A shift to the left', 'No change in position', 'The equilibrium to stop'], a: 2, why: 'The partial pressures of the reacting species do not change.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'kinetics',
  title: 'Reaction Kinetics',
  blurb: 'Collision theory, activation energy, catalysts and the factors affecting rate.',
  time: '50 min',
  objectives: [
    'State the collision theory requirements for reaction',
    'Explain the effect of concentration, temperature, surface area and catalysts',
    'Describe how rate is monitored experimentally',
    'Draw and interpret reaction profile diagrams with and without a catalyst',
    'Explain the role of enzymes as biological catalysts'
  ],
  body: `
<p class="lead">Equilibrium tells you <em>how far</em> a reaction goes; kinetics tells you <em>how fast</em>. Both are governed by collisions — but while equilibrium is about balance, kinetics is about whether collisions have <strong>enough energy</strong> and the <strong>right orientation</strong> to succeed.</p>

<h2>Collision theory</h2>
<p>For a reaction to occur, particles must:</p>
<ol>
<li><strong>Collide</strong> — no collision, no reaction.</li>
<li>Collide with <strong>energy ≥ the activation energy</strong> (Ea).</li>
<li>Collide with the <strong>correct orientation</strong>.</li>
</ol>

<blockquote><strong>Rate</strong> is proportional to the frequency of <em>successful</em> collisions — not merely the total number of collisions.</blockquote>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why more collisions alone isn't the full answer</b>
<p>Increasing temperature increases both collision frequency <em>and</em> the proportion of collisions with enough energy — but the <b>second effect is far more important</b>. Saying only "particles collide more often" earns partial credit at best. Always mention the <b>energy</b> requirement.</p></div></div>

<h2>Factors affecting rate</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Factor</th><th>Effect on rate</th><th>Explanation</th></tr></thead>
  <tbody>
    <tr><td><b>Concentration</b> (gases/solutions)</td><td>↑ Rate</td><td>More particles per unit volume → more frequent collisions</td></tr>
    <tr><td><b>Temperature</b></td><td>↑ Rate</td><td>More collisions <b>and</b> a much greater proportion with E ≥ Ea</td></tr>
    <tr><td><b>Surface area</b> (solids)</td><td>↑ Rate</td><td>More particles exposed → more collision sites</td></tr>
    <tr><td><b>Catalyst</b></td><td>↑ Rate</td><td>Provides an alternative pathway of <b>lower activation energy</b></td></tr>
    <tr><td><b>Light</b> (photochemical)</td><td>↑ Rate</td><td>Provides energy to break bonds (e.g. photosynthesis, silver halides)</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The precise catalyst wording</b>
<p>A catalyst does <b>not</b> lower the activation energy of the <em>original</em> pathway — it offers a <b>different pathway</b> that happens to require less energy. Examiners look for the phrase "alternative pathway".</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Concentration has no effect on solids or pure liquids</b>
<p>Undissolved solids have a constant "concentration" (their density), so changing the amount of solid does not change its concentration — only increasing its <b>surface area</b> (by powdering) changes the rate.</p></div></div>

<h2>Measuring rate experimentally</h2>
<p>Rate is followed by measuring how quickly a <strong>reactant disappears</strong> or a <strong>product appears</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Measurement</th><th>Suitable for</th></tr></thead>
  <tbody>
    <tr><td>Mass loss (gas escaping)</td><td>Reactions producing CO₂, e.g. marble chips + acid</td></tr>
    <tr><td>Volume of gas collected</td><td>H₂ from metal + acid; O₂ from peroxide</td></tr>
    <tr><td>Change in colour / absorbance</td><td>Reactions involving a coloured species</td></tr>
    <tr><td>Turbidity (time for a cross to disappear)</td><td>Na₂S₂O₃ + HCl forming sulphur</td></tr>
    <tr><td>pH change</td><td>Acid-base reactions</td></tr>
    <tr><td>Conductivity change</td><td>Reactions that change the number of ions in solution</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Rate</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">rate = <span class="frac"><span>change in concentration (or mass, volume)</span><span>time</span></span></div></div>
  <div class="formula-row"><div class="fname">On a graph</div>
    <div class="fexpr">rate at any instant = gradient of the tangent at that point</div>
    <div class="fnote">Initial rate = tangent at t = 0.</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Gradient falls as a reaction proceeds</b>
<p>A graph of product against time starts steep and <b>flattens</b> as reactants are used up — the rate is continuously decreasing. The final plateau means the reaction has <b>stopped</b> (limiting reagent used up), not that it reached equilibrium.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Reading a rate graph</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    50 cm³ of hydrogen is collected over 100 s, but the curve is not straight.</div>
    <div class="step"><div class="step-l">Average rate</div>
    50 ÷ 100 = 0.5 cm³ s⁻¹ <b>over the whole interval</b></div>
    <div class="step"><div class="step-l">Instantaneous rate</div>
    Must be found from the gradient of a tangent — it is higher early on and lower later</div>
    <div class="ans">Answer: initial rate &gt; average rate (steepest at the start)</div>
  </div>
</div>

<h2>Reaction profile diagrams</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Feature</th><th>Uncatalysed</th><th>Catalysed</th></tr></thead>
  <tbody>
    <tr><td>Activation energy hump</td><td>Higher</td><td><b>Lower</b></td></tr>
    <tr><td>Energy of reactants</td><td>Same</td><td>Same</td></tr>
    <tr><td>Energy of products</td><td>Same</td><td>Same</td></tr>
    <tr><td>ΔH</td><td>Same</td><td><b>Same</b></td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Only the hump changes</b>
<p>On a catalysed profile, the reactant and product levels are <b>identical</b> — only the peak drops. If your diagram moves the products or changes ΔH, it is wrong.</p></div></div>

<h2>Enzymes — biological catalysts</h2>
<p><strong>Enzymes</strong> are protein molecules that catalyse reactions in living organisms.</p>
<ul>
<li>Each enzyme acts on a specific substrate (the <strong>lock-and-key</strong> model — the active site matches the substrate's shape).</li>
<li>They work extremely efficiently at <strong>body temperature (≈37 °C)</strong> and near neutral pH.</li>
<li>They are <strong>denatured</strong> by high temperature or extreme pH — the active site changes shape and can no longer fit the substrate.</li>
<li>They are not used up in the reaction.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why enzymes work at low temperature</b>
<p>Enzymes need much <b>less</b> activation energy than ordinary catalysts, so reactions proceed at body temperature. A common question: "Why is the rate of an enzyme-controlled reaction high at 37 °C?" Answer: the enzyme provides a low-activation-energy pathway.</p></div></div>

<h2>Energy and rate — putting it together</h2>
<div class="formula-box">
  <div class="fb-head">Relationships to remember</div>
  <div class="formula-row"><div class="fname">Higher temperature</div>
    <div class="fexpr">↑ rate — more energy <b>and</b> more frequent collisions</div></div>
  <div class="formula-row"><div class="fname">Lower activation energy</div>
    <div class="fexpr">↑ rate — a greater proportion of collisions succeed</div></div>
  <div class="formula-row"><div class="fname">Rate vs yield</div>
    <div class="fexpr">Faster ≠ more product — rate and yield are independent</div>
    <div class="fnote">A catalyst speeds a reaction without changing how much product forms.</div></div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Rate vs equilibrium — the classic comparison</b>
<p><b>Rate</b> = how quickly equilibrium is reached (affected by temperature, concentration, catalyst, surface area).<br>
<b>Position/yield</b> = how much product exists at equilibrium (affected by temperature, concentration, pressure — <b>not</b> by catalyst).<br>
Keep these separate and you will avoid the commonest trap in this topic.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Reaction needs collisions with E ≥ Ea and correct orientation.</li>
<li>Concentration and surface area ↑ collision frequency; temperature also ↑ energy; catalyst provides an alternative lower-Ea pathway.</li>
<li>Rate = change/time; instantaneous rate = tangent gradient; rate falls as reactants are used up.</li>
<li>Catalysed profile: only the hump lowers — ΔH unchanged.</li>
<li>Enzymes: specific, denatured by heat/extreme pH, effective at 37 °C.</li>
</ul>
`,
  quiz: [
    { q: 'For a reaction to occur, colliding particles must', opts: ['Always be in the gas phase', 'Have energy at least equal to the activation energy', 'Be at high pressure', 'Be catalysts'], a: 1, why: 'Collisions below the activation energy simply bounce apart without reacting.' },
    { q: 'The minimum energy required to start a chemical reaction is the', opts: ['Enthalpy of reaction', 'Activation energy', 'Heat of combustion', 'Bond energy'], a: 1, why: 'Activation energy (Ea) is the energy barrier that must be overcome.' },
    { q: 'Increasing the concentration of a reactant increases the rate because', opts: ['The activation energy falls', 'Particles collide more frequently', 'The temperature rises', 'Bonds become weaker'], a: 1, why: 'More particles per unit volume leads to more frequent collisions.' },
    { q: 'Increasing temperature increases rate mainly because', opts: ['Particles move more slowly', 'A greater proportion of collisions have energy ≥ Ea', 'The activation energy decreases', 'The reaction becomes exothermic'], a: 1, why: 'Collision frequency rises only slightly, but the fraction of successful collisions rises dramatically.' },
    { q: 'Powdered calcium carbonate reacts faster than marble chips because', opts: ['It is more concentrated', 'It has a larger surface area exposed to the acid', 'It is more soluble', 'It has a lower activation energy'], a: 1, why: 'Greater surface area means more particles are available for collision with the acid.' },
    { q: 'A catalyst increases the rate of a reaction by', opts: ['Increasing the temperature', 'Providing an alternative pathway with lower activation energy', 'Increasing the yield', 'Changing ΔH'], a: 1, why: 'It offers a different route needing less energy — the original pathway is unchanged.' },
    { q: 'The presence of a catalyst changes which of the following?', opts: ['Activation energy', 'Enthalpy change', 'Equilibrium yield', 'Value of K'], a: 0, why: 'Only the activation energy (pathway) changes; ΔH, yield and K are unaffected.' },
    { q: 'On an energy profile, a catalyst is shown as', opts: ['A higher peak', 'A lower peak with reactants and products unchanged', 'Lower products', 'A shifted equilibrium'], a: 1, why: 'Only the activation energy hump is lowered.' },
    { q: 'The rate of a reaction at any instant is given by', opts: ['The total amount of product formed', 'The gradient of the tangent to the curve at that point', 'The final concentration', 'The activation energy'], a: 1, why: 'Slope of the tangent gives the instantaneous rate.' },
    { q: 'A graph of volume of gas against time levels off because', opts: ['The reaction reached equilibrium', 'A reactant has been used up', 'The catalyst was consumed', 'The temperature dropped'], a: 1, why: 'The plateau means the reaction has stopped — the limiting reagent is exhausted.' },
    { q: 'A suitable method to follow the rate of marble chips reacting with acid is', opts: ['Measuring the mass loss', 'Measuring the colour change', 'Measuring the pH of a pure metal', 'Measuring the boiling point'], a: 0, why: 'CO₂ escapes, so the mass of the flask decreases steadily — an easy continuous measurement.' },
    { q: 'Which change will NOT increase the rate of a reaction?', opts: ['Raising the temperature', 'Adding a catalyst', 'Increasing the pressure of a gaseous reaction', 'Changing the enthalpy of reaction'], a: 3, why: 'Enthalpy change is a property of the reaction, not a variable that can be adjusted to change rate.' },
    { q: 'Increasing the pressure of a gaseous reaction generally increases the rate because', opts: ['Particles are closer together', 'Activation energy falls', 'The catalyst activates', 'Temperature rises'], a: 0, why: 'Higher pressure means more particles per unit volume and therefore more frequent collisions.' },
    { q: 'Enzymes are biological catalysts made of', opts: ['Lipids', 'Proteins', 'Carbohydrates', 'Nucleic acids'], a: 1, why: 'Enzymes are proteins whose shape provides a specific active site.' },
    { q: 'An enzyme stops working at high temperature because it', opts: ['Is used up', 'Is denatured — its active site changes shape', 'Becomes more soluble', 'Reaches its activation energy'], a: 1, why: 'The three-dimensional shape of the active site is disrupted, so the substrate no longer fits.' },
    { q: 'The lock-and-key model of enzyme action means that', opts: ['Every enzyme catalyses every reaction', 'Each enzyme has an active site matching one specific substrate', 'Enzymes change shape permanently', 'Substrates are destroyed by enzymes'], a: 1, why: 'The active site’s shape is complementary to a particular substrate, giving specificity.' }
  ]
});
