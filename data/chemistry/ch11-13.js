/* JAMB 2027 Prep — Chemistry, Chapters 11–13 */

JAMB.addChapter('chemistry', {
  id: 'redox',
  title: 'Oxidation, Reduction and Redox Equations',
  blurb: 'Oxidation numbers, balancing redox equations, and oxidising/reducing agents.',
  time: '55 min',
  objectives: [
    'Define oxidation and reduction in terms of oxygen, hydrogen and electron transfer',
    'Assign oxidation numbers to atoms in compounds and ions',
    'Identify the substance oxidised and reduced in a reaction',
    'Balance redox equations by the oxidation number and half-equation methods',
    'Identify oxidising and reducing agents'
  ],
  body: `
<p class="lead">Redox underpins corrosion, batteries, metals extraction and almost every industrial process you will be asked about. Three definitions of oxidation coexist — <strong>oxygen gain, hydrogen loss, electron loss</strong> — and they all describe the same event. Oxidation numbers give you a systematic way to track it.</p>

<h2>Three definitions, one idea</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Process</th><th>Oxygen definition</th><th>Hydrogen definition</th><th>Electron definition</th></tr></thead>
  <tbody>
    <tr><td><b>Oxidation</b></td><td>Gain of oxygen</td><td>Loss of hydrogen</td><td><b>Loss of electrons</b></td></tr>
    <tr><td><b>Reduction</b></td><td>Loss of oxygen</td><td>Gain of hydrogen</td><td><b>Gain of electrons</b></td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The mnemonic</b>
<p><b>OIL RIG</b> — Oxidation Is Loss, Reduction Is Gain (of electrons). Or <b>LEO the lion says GER</b> — Lose Electrons Oxidation, Gain Electrons Reduction. Since a reaction must involve both, it is always a <b>redox</b> reaction.</p></div></div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Redox in disguise</b>
<p>Some reactions look like nothing to do with redox — <b>neutralisation</b> (HCl + NaOH → NaCl + H₂O) is <b>not</b> redox: no oxidation numbers change. Combustion, displacement, decomposition of metal carbonates by acid — these usually <b>are</b> redox. Check oxidation numbers when unsure.</p></div></div>

<h2>Oxidation numbers — the rules</h2>
<div class="formula-box">
  <div class="fb-head">Rules, in order of priority</div>
  <div class="formula-row"><div class="fname">Free elements</div>
    <div class="fexpr">Oxidation number = <b>0</b> (Na, O₂, Fe, S₈)</div></div>
  <div class="formula-row"><div class="fname">Monatomic ions</div>
    <div class="fexpr">= the charge on the ion (Na⁺ = +1, O²⁻ = −2)</div></div>
  <div class="formula-row"><div class="fname">Oxygen</div>
    <div class="fexpr">Usually <b>−2</b>; <b>−1</b> in peroxides (H₂O₂); +2 in OF₂</div></div>
  <div class="formula-row"><div class="fname">Hydrogen</div>
    <div class="fexpr">Usually <b>+1</b>; <b>−1</b> in metal hydrides (NaH)</div></div>
  <div class="formula-row"><div class="fname">Fluorine</div>
    <div class="fexpr">Always <b>−1</b></div></div>
  <div class="formula-row"><div class="fname">Sum rule</div>
    <div class="fexpr">Numbers in a neutral compound sum to <b>0</b>; in an ion, to the <b>ion's charge</b></div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Working out oxidation numbers</div>
  <div class="example-b">
    <div class="step"><div class="step-l">KMnO₄</div>
    K = +1, O = −2 (×4 = −8). Let Mn = x.<br>
    +1 + x + (−8) = 0 → x = <b>+7</b></div>
    <div class="step"><div class="step-l">MnO₄⁻</div>
    x + (−8) = −1 → x = <b>+7</b> (same as above)</div>
    <div class="step"><div class="step-l">Cr₂O₇²⁻</div>
    2x + 7(−2) = −2 → 2x = +12 → x = <b>+6</b></div>
    <div class="ans">Answers: Mn = +7, Cr = +6</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Finding a formula from oxidation numbers</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Iron has oxidation number +3 and oxygen −2.</div>
    <div class="step"><div class="step-l">Balance the charges</div>
    Two Fe³⁺ (total +6) and three O²⁻ (total −6)</div>
    <div class="ans">Answer: Fe₂O₃</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Common oxidation numbers worth memorising</b>
<p>Carbon in CO₂ = <b>+4</b>; in CO = <b>+2</b>; in CH₄ = <b>−4</b>.<br>
Sulphur in H₂SO₄ = <b>+6</b>; in H₂S = <b>−2</b>; in SO₂ = <b>+4</b>.<br>
Nitrogen in NH₃ = <b>−3</b>; in HNO₃ = <b>+5</b>; in N₂ = <b>0</b>.<br>
Chlorine in Cl₂ = <b>0</b>; in HCl = <b>−1</b>; in HClO₄ = <b>+7</b>.<br>
These appear constantly — knowing them saves minutes.</p></div></div>

<h2>Identifying what is oxidised and reduced</h2>
<div class="formula-box">
  <div class="fb-head">The four questions</div>
  <div class="formula-row"><div class="fname">Substance oxidised</div>
    <div class="fexpr">loses electrons → oxidation number <b>increases</b></div>
    <div class="fnote">Also the <b>reducing agent</b>.</div></div>
  <div class="formula-row"><div class="fname">Substance reduced</div>
    <div class="fexpr">gains electrons → oxidation number <b>decreases</b></div>
    <div class="fnote">Also the <b>oxidising agent</b>.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The agent is the opposite</b>
<p>The <b>oxidising agent</b> gets reduced; the <b>reducing agent</b> gets oxidised. The name describes what it does <em>to the other substance</em>, not to itself. This reversal trips up candidates every year.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Analysing a displacement reaction</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reaction</div>
    Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)</div>
    <div class="step"><div class="step-l">Track oxidation numbers</div>
    Zn: 0 → +2 (increases, so Zn is <b>oxidised</b>)<br>
    Cu: +2 → 0 (decreases, so Cu²⁺ is <b>reduced</b>)</div>
    <div class="step"><div class="step-l">Identify the agents</div>
    Zn lost electrons → <b>reducing agent</b><br>
    Cu²⁺ gained electrons → <b>oxidising agent</b></div>
    <div class="ans">Answer: Zn oxidised (reducing agent); Cu²⁺ reduced (oxidising agent)</div>
  </div>
</div>

<h2>Half-equations</h2>
<p>Redox reactions can be split into two halves — one oxidation, one reduction. Combine them so that <strong>electrons cancel</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Half-equation</th><th>Type</th></tr></thead>
  <tbody>
    <tr><td>Zn → Zn²⁺ + 2e⁻</td><td>Oxidation (electrons on the right)</td></tr>
    <tr><td>Cu²⁺ + 2e⁻ → Cu</td><td>Reduction (electrons on the left)</td></tr>
    <tr><td>Cl₂ + 2e⁻ → 2Cl⁻</td><td>Reduction</td></tr>
    <tr><td>2Cl⁻ → Cl₂ + 2e⁻</td><td>Oxidation</td></tr>
    <tr><td>Fe²⁺ → Fe³⁺ + e⁻</td><td>Oxidation</td></tr>
    <tr><td>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</td><td>Reduction (in acid)</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Electrons are never products of a whole reaction</b>
<p>In the <em>overall</em> balanced equation, electrons cancel completely — if any remain, the halves weren't balanced. In oxidation they appear on the right of the half-equation; in reduction, on the left.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Combining half-equations</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Oxidation</div>
    Fe²⁺ → Fe³⁺ + e⁻</div>
    <div class="step"><div class="step-l">Reduction</div>
    MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</div>
    <div class="step"><div class="step-l">Balance electrons</div>
    Multiply the oxidation half by 5: 5Fe²⁺ → 5Fe³⁺ + 5e⁻</div>
    <div class="step"><div class="step-l">Add</div>
    MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</div>
    <div class="ans">Answer: electrons cancel; charges balance at +26 on each side</div>
  </div>
</div>

<h2>Balancing by oxidation number</h2>
<ol>
<li>Write the unbalanced equation.</li>
<li>Assign oxidation numbers to the species that change.</li>
<li>Work out the <strong>total change in oxidation number</strong> for oxidation and for reduction.</li>
<li>Adjust coefficients so the <strong>total increase = total decrease</strong>.</li>
<li>Balance H and O by adding H₂O and H⁺ (in acid) or OH⁻ (in alkali).</li>
<li>Check atoms <b>and</b> charge on both sides.</li>
</ol>

<div class="example">
  <div class="example-h"><span class="num">5</span> Balancing in acidic solution</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Unbalanced</div>
    MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (acidic)</div>
    <div class="step"><div class="step-l">Oxidation numbers</div>
    Mn: +7 → +2 (change = 5, <b>decrease</b>)<br>
    Fe: +2 → +3 (change = 1, <b>increase</b>)</div>
    <div class="step"><div class="step-l">Balance the changes</div>
    One Mn needs 5 Fe: 5 × (+1) = +5 balances −5</div>
    <div class="step"><div class="step-l">Balance charge with H⁺</div>
    Left = −1 + 10 = +9; right = +2 + 15 = +17 → add 8H⁺ to the left</div>
    <div class="step"><div class="step-l">Balance H and O with water</div>
    8 H on the left → 4H₂O on the right; O: 4 = 4 ✓</div>
    <div class="ans">MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</div>
  </div>
</div>

<h2>Common oxidising and reducing agents</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Oxidising agents (get reduced)</th><th>Reducing agents (get oxidised)</th></tr></thead>
  <tbody>
    <tr><td>Potassium manganate(VII), KMnO₄</td><td>Metals above iron in the reactivity series</td></tr>
    <tr><td>Acidified potassium dichromate(VI), K₂Cr₂O₇</td><td>Carbon monoxide, CO</td></tr>
    <tr><td>Chlorine water, Cl₂</td><td>Hydrogen peroxide, H₂O₂ (both)</td></tr>
    <tr><td>Concentrated sulphuric acid, H₂SO₄</td><td>Sulphur dioxide, SO₂</td></tr>
    <tr><td>Hydrogen peroxide, H₂O₂</td><td>Iodide ions, I⁻</td></tr>
    <tr><td>Halogens</td><td>Alkali metals</td></tr>
  </tbody>
</table>

<div class="note note-fact"><span class="ico">📌</span><div><b>Oxygen is not always an oxidising agent</b>
<p>In many reactions oxygen is simply incorporated without changing oxidation states of other atoms in a redox sense — actually, oxygen itself is reduced (0 → −2) in every combustion. Always check oxidation numbers rather than assuming from the word equation.</p></div></div>

<h2>Everyday redox</h2>
<ul>
<li><strong>Corrosion of iron</strong> — iron is oxidised: Fe → Fe²⁺ + 2e⁻; oxygen is reduced.</li>
<li><strong>Rusting needs both water and oxygen</strong> — dry iron does not rust; oil-covered iron does not rust.</li>
<li><strong>Fuel cells</strong> — redox produces electricity directly without combustion.</li>
<li><strong>Bleaching by chlorine</strong> — oxidation of coloured substances to colourless.</li>
<li><strong>Photosynthesis</strong> — CO₂ is reduced to glucose; water is oxidised to O₂.</li>
<li><strong>Respiration</strong> — the reverse: glucose is oxidised.</li>
</ul>

<h2>Chapter recap</h2>
<ul>
<li>Oxidation = loss of electrons = oxidation number increases. Reduction = gain = decreases.</li>
<li>Rules: elements 0; oxygen −2 (−1 in peroxides); hydrogen +1; sum to 0 (or ion charge).</li>
<li>The oxidising agent is reduced; the reducing agent is oxidised.</li>
<li>Half-equations: electrons on the right for oxidation, left for reduction; cancel before combining.</li>
<li>Neutralisation is not redox; combustion and displacement are.</li>
</ul>
`,
  quiz: [
    { q: 'Oxidation is best defined as', opts: ['Gain of electrons', 'Loss of electrons', 'Gain of hydrogen', 'Loss of oxygen'], a: 1, why: 'Oxidation Is Loss — electrons are lost; oxidation number increases.' },
    { q: 'Reduction involves', opts: ['Loss of electrons', 'Gain of electrons', 'Gain of oxygen only', 'Increase in oxidation number'], a: 1, why: 'Reduction Is Gain — electrons are gained; oxidation number decreases.' },
    { q: 'The oxidation number of oxygen in H₂O₂ is', opts: ['−2', '−1', '+1', '0'], a: 1, why: 'Peroxides have oxygen at −1; in most other compounds it is −2.' },
    { q: 'The oxidation number of sulphur in H₂SO₄ is', opts: ['+2', '+4', '+6', '−2'], a: 2, why: '2(+1) + S + 4(−2) = 0 → S − 6 = 0 → S = +6.' },
    { q: 'The oxidation number of nitrogen in NH₃ is', opts: ['+3', '+5', '−3', '0'], a: 2, why: 'N + 3(+1) = 0 → N = −3.' },
    { q: 'The oxidation number of Mn in KMnO₄ is', opts: ['+7', '+6', '+4', '+2'], a: 0, why: '+1 + Mn + 4(−2) = 0 → Mn − 7 = 0 → Mn = +7.' },
    { q: 'The oxidation number of any free element is', opts: ['+1', '−1', '0', 'Equal to its group number'], a: 2, why: 'Atoms in their elemental state have oxidation number zero.' },
    { q: 'In a neutral compound, the sum of oxidation numbers is', opts: ['Equal to the charge', 'Zero', 'Always +1', 'Equal to the atomic number'], a: 1, why: 'The numbers must cancel out; for an ion they sum to the ion charge.' },
    { q: 'In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, the substance reduced is', opts: ['Zn', 'Cu²⁺', 'Zn²⁺', 'Cu'], a: 1, why: 'Cu²⁺ gains two electrons to become Cu — its oxidation number falls from +2 to 0.' },
    { q: 'In the same reaction, Zn acts as the', opts: ['Oxidising agent', 'Reducing agent', 'Catalyst', 'Dehydrating agent'], a: 1, why: 'Zn loses electrons, reducing Cu²⁺ — so it is the reducing agent.' },
    { q: 'The oxidising agent in a redox reaction is the substance that', opts: ['Is oxidised', 'Is reduced', 'Gains no electrons', 'Is always oxygen'], a: 1, why: 'It causes oxidation in something else by accepting electrons itself.' },
    { q: 'Which reaction is NOT a redox reaction?', opts: ['Combustion of methane', 'Zn + HCl', 'NaOH + HCl', 'Fe + CuSO₄'], a: 2, why: 'Neutralisation involves no change in oxidation numbers — no electrons transfer.' },
    { q: 'In the oxidation half-equation for sodium, electrons appear on the', opts: ['Left (reactant) side', 'Right (product) side', 'Both sides', 'They do not appear at all'], a: 1, why: 'Oxidation is loss of electrons, so they are written as a product: Na → Na⁺ + e⁻.' },
    { q: 'When the half-equations for a full redox reaction are combined, the electrons', opts: ['Remain in the final equation', 'Cancel out completely', 'Appear on both sides', 'Are doubled'], a: 1, why: 'Electrons lost equal electrons gained, so they disappear from the balanced equation.' },
    { q: 'The oxidation number of carbon in CO is', opts: ['+4', '+2', '−2', '0'], a: 1, why: 'C + (−2) = 0 → C = +2 (compared with +4 in CO₂).' },
    { q: 'Rusting of iron requires', opts: ['Oxygen only', 'Water only', 'Both water and oxygen', 'Nitrogen'], a: 2, why: 'Neither dry oxygen nor water alone will rust iron — both are necessary.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'electrochemistry',
  title: 'Electrochemistry',
  blurb: 'Electrolysis, electrode products, electrochemical cells and electrode potentials.',
  time: '60 min',
  objectives: [
    'Define electrolysis and identify anode, cathode and electrolyte',
    'Predict the products of electrolysis for molten and aqueous electrolytes',
    'Explain the working of simple and voltaic cells',
    'Describe electroplating and its applications',
    'Relate electrode potentials to cell EMF'
  ],
  body: `
<p class="lead">Electrochemistry splits into two mirror images: <strong>electrolytic cells</strong> use electricity to force a non-spontaneous reaction, and <strong>voltaic (galvanic) cells</strong> use a spontaneous reaction to produce electricity. The same rules about which ion goes where apply to both.</p>

<h2>Key vocabulary</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td><b>Electrolyte</b></td><td>A substance whose molten form or solution conducts electricity (ions free to move)</td></tr>
    <tr><td><b>Electrode</b></td><td>A conductor dipping into the electrolyte</td></tr>
    <tr><td><b>Anode</b></td><td>The <b>positive</b> electrode — where <b>oxidation</b> occurs</td></tr>
    <tr><td><b>Cathode</b></td><td>The <b>negative</b> electrode — where <b>reduction</b> occurs</td></tr>
    <tr><td><b>Electrolysis</b></td><td>Decomposition of an electrolyte by the passage of electricity</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The mnemonic that earns marks</b>
<p><b>Cations are positive</b> → attracted to the <b>negative cathode</b>. <b>Anions are negative</b> → attracted to the <b>positive anode</b>. Or: <b>PANIC</b> — Positive Anode, Negative Is Cathode.</p>
<p>Note the anode is positive <em>in an electrolytic cell</em>. In a voltaic cell the anode is negative — but oxidation always happens at the anode in both.</p></div></div>

<h2>What is produced at each electrode?</h2>
<div class="formula-box">
  <div class="fb-head">The selection rules</div>
  <div class="formula-row"><div class="fname">At the cathode (negative)</div>
    <div class="fexpr">The <b>least reactive metal</b> ion (or H⁺ from water) is discharged</div>
    <div class="fnote">Below hydrogen in the reactivity series → metal deposits. Above hydrogen → H₂ evolved.</div></div>
  <div class="formula-row"><div class="fname">At the anode (positive)</div>
    <div class="fexpr">Halide ions if concentrated; otherwise <b>OH⁻</b> → O₂</div>
    <div class="fnote">Concentrated Cl⁻ gives Cl₂; dilute gives O₂.</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The reactivity series decides</b>
<p>Metals below hydrogen (Cu, Ag, Pt, Au) deposit as metal at the cathode. Metals above hydrogen (K, Na, Ca, Mg, Zn, Fe) give hydrogen gas instead — because water/acid H⁺ is easier to reduce.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Electrolysis of concentrated sodium chloride solution</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Ions present</div>
    Na⁺, Cl⁻, H⁺, OH⁻</div>
    <div class="step"><div class="step-l">Cathode (−)</div>
    H⁺ is easier to reduce than Na⁺ → <b>hydrogen gas</b> (2H⁺ + 2e⁻ → H₂)</div>
    <div class="step"><div class="step-l">Anode (+)</div>
    Concentrated Cl⁻ is discharged in preference to OH⁻ → <b>chlorine gas</b> (2Cl⁻ → Cl₂ + 2e⁻)</div>
    <div class="step"><div class="step-l">Solution left</div>
    Na⁺ and OH⁻ → <b>sodium hydroxide</b> solution</div>
    <div class="ans">Answer: H₂ at cathode, Cl₂ at anode, NaOH left in solution (chlor-alkali process)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Electrolysis of molten aluminium oxide</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Ions</div>
    Al³⁺ and O²⁻ only (no water present)</div>
    <div class="step"><div class="step-l">Cathode (−)</div>
    Al³⁺ + 3e⁻ → <b>Al</b> (molten aluminium collects)</div>
    <div class="step"><div class="step-l">Anode (+)</div>
    2O²⁻ → O₂ + 4e⁻ → <b>oxygen</b></div>
    <div class="step"><div class="step-l">Practical note</div>
    Cryolite (Na₃AlF₆) is added to lower the melting point from 2050 °C to about 1000 °C, saving energy</div>
    <div class="ans">Answer: Al at cathode, O₂ at anode (Hall–Héroult process)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Electrolysis of copper(II) sulphate with copper electrodes</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Cathode</div>
    Cu²⁺ + 2e⁻ → Cu (copper deposits — copper is below hydrogen)</div>
    <div class="step"><div class="step-l">Anode</div>
    The copper anode <b>dissolves</b>: Cu → Cu²⁺ + 2e⁻</div>
    <div class="step"><div class="step-l">Net result</div>
    The solution concentration <b>stays constant</b>; the cathode gains exactly what the anode loses</div>
    <div class="ans">Answer: used in electroplating and copper refining</div>
  </div>
</div>

<h2>Electroplating</h2>
<p><strong>Electroplating</strong> coats one metal with a thin layer of another for appearance, corrosion resistance or wear.</p>
<ul>
<li>The <strong>object to be plated is the cathode</strong> (negative).</li>
<li>The <strong>plating metal is the anode</strong> (positive).</li>
<li>The electrolyte contains <b>ions of the plating metal</b>.</li>
<li>Examples: silver on cutlery and ornaments, chromium on car bumpers and taps, tin on food cans, nickel on jewellery.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Object = cathode</b>
<p>The item being plated is always the cathode, because cations of the plating metal migrate there and are reduced onto its surface. Getting the object onto the anode is the commonest mistake.</p></div></div>

<h2>Voltaic (galvanic) cells</h2>
<p>A spontaneous redox reaction is split into two half-cells so that the electron transfer happens through an external circuit — producing a current.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Part</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td><b>Half-cells</b></td><td>Each holds a metal in a solution of its own ions</td></tr>
    <tr><td><b>Salt bridge</b></td><td>Completes the circuit and balances charge by allowing ions to flow</td></tr>
    <tr><td><b>External wire</b></td><td>Electrons flow from anode (−) to cathode (+)</td></tr>
    <tr><td><b>Voltmeter</b></td><td>Measures the EMF of the cell</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Cell EMF</div>
  <div class="formula-row"><div class="fname">Standard electrode potentials</div>
    <div class="fexpr">E°<sub>cell</sub> = E°<sub>reduction</sub> − E°<sub>oxidation</sub></div>
    <div class="fnote">Or: E°(right) − E°(left) for the cell diagram.</div></div>
  <div class="formula-row"><div class="fname">Condition for a working cell</div>
    <div class="fexpr">E°<sub>cell</sub> must be <b>positive</b></div>
    <div class="fnote">A negative value means the reaction is not spontaneous as written.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Calculating EMF</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Data</div>
    Zn²⁺/Zn: −0.76 V &nbsp;·&nbsp; Cu²⁺/Cu: +0.34 V</div>
    <div class="step"><div class="step-l">Apply</div>
    E°cell = E°(reduction, right) − E°(oxidation, left)<br>
    = +0.34 − (−0.76)</div>
    <div class="ans">Answer: +1.10 V (positive → spontaneous)</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Which way does current flow?</b>
<p>Conventional current flows from <b>positive to negative</b> in the external circuit; <b>electrons flow the opposite way</b>, from anode to cathode. Be careful which the question asks for.</p></div></div>

<h2>Daniell cell and dry cells</h2>
<ul>
<li><strong>Daniell cell:</strong> Zn | Zn²⁺ || Cu²⁺ | Cu — the classic demonstration, EMF 1.10 V.</li>
<li><strong>Dry (Leclanché) cell:</strong> zinc container as anode, carbon rod as cathode, manganese dioxide depolariser, ammonium chloride paste. About 1.5 V.</li>
<li><strong>Alkaline cell:</strong> similar but with KOH electrolyte — longer life, higher capacity.</li>
<li><strong>Fuel cell:</strong> hydrogen and oxygen supplied continuously; product is water — used in spacecraft.</li>
<li><strong>Secondary (rechargeable) cell:</strong> lead–acid accumulator; reaction reversed on charging.</li>
</ul>

<div class="note note-fact"><span class="ico">📌</span><div><b>Which metal is the better anode?</b>
<p>The more reactive metal (more negative E°) is the anode — it oxidises more readily. Zinc is the anode in a Daniell cell; if copper were, no current would flow.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Cations → cathode (negative); anions → anode (positive). Oxidation at anode, reduction at cathode.</li>
<li>Cathode product: least reactive ion or H⁺. Anode: halide if concentrated, else OH⁻ → O₂.</li>
<li>Object to plate = cathode; plating metal = anode; electrolyte contains plating ions.</li>
<li>E°cell = E°reduction − E°oxidation; must be positive.</li>
<li>Salt bridge completes the circuit and balances charge.</li>
</ul>
`,
  quiz: [
    { q: 'During electrolysis, cations migrate towards the', opts: ['Anode', 'Cathode', 'Salt bridge', 'Electrolyte centre'], a: 1, why: 'Cations are positive and are attracted to the negative cathode.' },
    { q: 'Oxidation always occurs at the', opts: ['Cathode', 'Anode', 'Salt bridge', 'Electrode of the electrolyte'], a: 1, why: 'Anode — from anodos (Greek, "way up"); reduction is at the cathode in both cell types.' },
    { q: 'In an electrolytic cell, the anode is', opts: ['Negative', 'Positive', 'Neutral', 'Variable'], a: 1, why: 'The anode is positive in electrolysis (it is negative in a voltaic cell).' },
    { q: 'Electrolysis of dilute sodium chloride solution at the cathode produces', opts: ['Sodium metal', 'Chlorine gas', 'Hydrogen gas', 'Oxygen gas'], a: 2, why: 'Sodium is above hydrogen in the reactivity series, so H⁺ from water is discharged instead.' },
    { q: 'Concentrated sodium chloride solution at the anode produces', opts: ['Oxygen', 'Chlorine', 'Sodium', 'Hydrogen'], a: 1, why: 'Concentrated Cl⁻ ions are discharged in preference to OH⁻, releasing chlorine.' },
    { q: 'Electrolysis of molten aluminium oxide produces at the cathode', opts: ['Oxygen', 'Aluminium', 'Sodium', 'Hydrogen'], a: 1, why: 'Al³⁺ ions gain electrons: Al³⁺ + 3e⁻ → Al.' },
    { q: 'Cryolite is added during the electrolysis of aluminium oxide to', opts: ['Act as a catalyst', 'Lower the melting point and save energy', 'Remove impurities', 'Increase the conductivity of the electrodes'], a: 1, why: 'It reduces the operating temperature from 2050 °C to about 1000 °C.' },
    { q: 'In electroplating, the object to be plated is made the', opts: ['Anode', 'Cathode', 'Electrolyte', 'Salt bridge'], a: 1, why: 'Metal cations are reduced onto the negatively charged object at the cathode.' },
    { q: 'The electrolyte used in electroplating with silver must contain', opts: ['Sodium ions', 'Silver ions', 'Chloride ions only', 'Copper ions'], a: 1, why: 'The electrolyte supplies the ions of the metal being deposited.' },
    { q: 'During the electrolysis of copper(II) sulphate with copper electrodes, the anode', opts: ['Gains mass', 'Loses mass', 'Is unchanged', 'Produces oxygen'], a: 1, why: 'The copper anode dissolves: Cu → Cu²⁺ + 2e⁻, so it loses mass.' },
    { q: 'The function of the salt bridge in a voltaic cell is to', opts: ['Generate electricity', 'Complete the circuit by balancing charge', 'Act as a catalyst', 'Measure the current'], a: 1, why: 'It allows ions to flow so the circuit is closed and charge stays balanced in each half-cell.' },
    { q: 'In a voltaic cell, electrons flow through the external wire', opts: ['From cathode to anode', 'From anode to cathode', 'From positive to negative', 'Nowhere — ions carry them'], a: 1, why: 'Electrons leave the anode (where oxidation releases them) and arrive at the cathode.' },
    { q: 'For a spontaneous cell reaction, E°cell must be', opts: ['Negative', 'Zero', 'Positive', 'Greater than 10 V'], a: 2, why: 'A positive EMF indicates a thermodynamically feasible, spontaneous reaction.' },
    { q: 'The EMF of a Zn–Cu Daniell cell is', opts: ['0.34 V', '0.76 V', '1.10 V', '2.00 V'], a: 2, why: '+0.34 − (−0.76) = +1.10 V.' },
    { q: 'In a Daniell cell, the anode is made of', opts: ['Copper', 'Zinc', 'Carbon', 'Platinum'], a: 1, why: 'Zinc is more reactive (more negative E°) and therefore oxidises at the anode.' },
    { q: 'The product of a hydrogen–oxygen fuel cell is', opts: ['Carbon dioxide', 'Water', 'Sulphur dioxide', 'Methane'], a: 1, why: '2H₂ + O₂ → 2H₂O — only water is produced, which is why it suits spacecraft.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'acids-bases',
  title: 'Acids, Bases and Salts',
  blurb: 'Definitions, pH, neutralisation, and the classification and preparation of salts.',
  time: '60 min',
  objectives: [
    'State the Arrhenius and Brønsted–Lowry definitions of acids and bases',
    'Use the pH scale and interpret universal indicator colours',
    'Explain neutralisation and the formation of different salt types',
    'Classify salts as normal, acid and basic, and describe their formation',
    'Describe laboratory methods of preparing salts'
  ],
  body: `
<p class="lead">Acids and bases appear in every practical question in JAMB Chemistry. The core skill is knowing <strong>which salt forms from which combination of acid and base</strong>, and <strong>which method of preparation is appropriate</strong> for each salt type. Learn the patterns and the predictions become mechanical.</p>

<h2>Definitions</h2>
<div class="formula-box">
  <div class="fb-head">Two definitions you must both know</div>
  <div class="formula-row"><div class="fname">Arrhenius</div>
    <div class="fexpr">Acid → H⁺ in water &nbsp;·&nbsp; Base → OH⁻ in water</div>
    <div class="fnote">Simple, but limited to aqueous solutions.</div></div>
  <div class="formula-row"><div class="fname">Brønsted–Lowry</div>
    <div class="fexpr">Acid = <b>proton (H⁺) donor</b> &nbsp;·&nbsp; Base = <b>proton acceptor</b></div>
    <div class="fnote">Wider — explains reactions in non-aqueous solvents and gas-phase reactions.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Identifying donor and acceptor</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reaction</div>
    HCl + NH₃ → NH₄⁺ + Cl⁻</div>
    <div class="step"><div class="step-l">Who gives the proton?</div>
    HCl loses H⁺ → <b>acid (proton donor)</b></div>
    <div class="step"><div class="step-l">Who accepts it?</div>
    NH₃ gains H⁺ → <b>base (proton acceptor)</b></div>
    <div class="ans">Answer: HCl is the acid, NH₃ is the base</div>
  </div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Conjugate pairs</b>
<p>After donating a proton, an acid becomes its <b>conjugate base</b>; after accepting one, a base becomes its <b>conjugate acid</b>. In HCl + H₂O → H₃O⁺ + Cl⁻, H₂O is the base and H₃O⁺ is its conjugate acid.</p></div></div>

<h2>The pH scale</h2>
<div class="formula-box">
  <div class="fb-head">pH</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">pH = −log₁₀[H⁺]</div></div>
  <div class="formula-row"><div class="fname">Neutral at 25 °C</div>
    <div class="fexpr">[H⁺] = [OH⁻] → pH = 7</div></div>
  <div class="formula-row"><div class="fname">Acidic</div>
    <div class="fexpr">pH &lt; 7 &nbsp;(strong acids approach 0)</div></div>
  <div class="formula-row"><div class="fname">Alkaline</div>
    <div class="fexpr">pH &gt; 7 &nbsp;(strong alkalis approach 14)</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>pH</th><th>Universal indicator colour</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>1–3</td><td>Red / orange</td><td>Strong acid</td></tr>
    <tr><td>4–6</td><td>Yellow / yellow-green</td><td>Weak acid</td></tr>
    <tr><td>7</td><td>Green</td><td>Neutral</td></tr>
    <tr><td>8–11</td><td>Blue-green / blue</td><td>Weak alkali</td></tr>
    <tr><td>12–14</td><td>Violet / purple</td><td>Strong alkali</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Strength vs concentration</b>
<p><b>Strength</b> = degree of ionisation (strong = fully ionised: HCl, HNO₃, H₂SO₄, NaOH, KOH, Ca(OH)₂). <b>Concentration</b> = amount per dm³. A dilute strong acid has pH ~1–2; a concentrated weak acid might be pH 3. They are independent properties — expect a question testing this distinction.</p></div></div>

<h3>Strong vs weak acids</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Strong acid</th><th>Weak acid</th></tr></thead>
  <tbody>
    <tr><td><b>Ionisation</b></td><td>Complete</td><td>Partial (equilibrium)</td></tr>
    <tr><td><b>Examples</b></td><td>HCl, HNO₃, H₂SO₄</td><td>CH₃COOH (ethanoic), H₂CO₃, H₃PO₄, citric</td></tr>
    <tr><td><b>At same concentration</b></td><td>Lower pH, more conductive</td><td>Higher pH, less conductive</td></tr>
    <tr><td><b>Reaction with metals</b></td><td>Fast</td><td>Slow</td></tr>
    <tr><td><b>Complete neutralisation</b></td><td>Yes</td><td>Yes — same volume of alkali needed at equal concentration</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Both acids react with alkali completely</b>
<p>A weak acid is still <b>fully neutralised</b> by a strong alkali — the equilibrium is pulled right. It just needs a titration to show that equal volumes of equal concentration are required. The difference appears in <em>rate</em> and <em>initial pH</em>, not in total neutralisation.</p></div></div>

<h2>Neutralisation</h2>
<div class="formula-box">
  <div class="fb-head">The general reactions</div>
  <div class="formula-row"><div class="fname">Acid + base → salt + water</div>
    <div class="fexpr">HCl + NaOH → NaCl + H₂O</div></div>
  <div class="formula-row"><div class="fname">Acid + carbonate → salt + water + CO₂</div>
    <div class="fexpr">2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂</div></div>
  <div class="formula-row"><div class="fname">Acid + metal → salt + hydrogen</div>
    <div class="fexpr">Zn + 2HCl → ZnCl₂ + H₂</div></div>
  <div class="formula-row"><div class="fname">Acid + base oxide → salt + water</div>
    <div class="fexpr">2HCl + CuO → CuCl₂ + H₂O</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Fizzing identifies a carbonate</b>
<p>Effervescence with acid that turns limewater milky = carbonate. The gas is CO₂. This distinguishes carbonates from hydroxides and oxides in identification questions.</p></div></div>

<h2>Types of salts</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Salt type</th><th>Contains</th><th>Formed from</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Normal (neutral)</b></td><td>No replaceable H or OH</td><td>Acid + base/alkali/carbonate</td><td>NaCl, CuSO₄, KNO₃</td></tr>
    <tr><td><b>Acid (hydrogen)</b></td><td>Replaceable <b>H</b> from the acid</td><td>Acid in <b>excess</b> + base</td><td>NaHSO₄, NaHCO₃, KH₂PO₄</td></tr>
    <tr><td><b>Basic (hydroxy)</b></td><td>Replaceable <b>OH</b> from the base</td><td>Base in <b>excess</b> + acid</td><td>Pb(OH)Cl, Fe(OH)Cl, Cu₂(OH)₂SO₄</td></tr>
    <tr><td><b>Double salt</b></td><td>Two cations in one lattice</td><td>Crystallisation of mixed solution</td><td>Alum KAl(SO₄)₂·12H₂O, potash alum</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Which excess gives which salt?</b>
<p><b>Acid in excess → acid salt</b> (not all the acid's hydrogen has reacted).<br>
<b>Base in excess → basic salt</b> (some base remains combined).<br>
<b>Equal amounts → normal salt.</b><br>
Note the counter-intuitive pairing: excess <em>acid</em> gives the <em>acid</em> salt; excess <em>base</em> gives the <em>basic</em> salt.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Making an acid salt</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Excess acid</div>
    NaOH + 2HNO₃ (excess) → NaNO₃ + HNO₃ → NaHNO₃ + H₂O</div>
    <div class="step"><div class="step-l">Or from a carbonate</div>
    Na₂CO₃ + H₂SO₄ (excess) → NaHSO₄ + CO₂ + H₂O</div>
    <div class="ans">Answer: acid in excess gives the acid salt</div>
  </div>
</div>

<h2>Preparing salts in the laboratory</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Salt type</th><th>Recommended method</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td><b>Soluble normal salt</b></td><td>Titration, or acid + excess insoluble base/carbonate, then filter</td><td>Controlled, pure product</td></tr>
    <tr><td><b>Insoluble salt</b></td><td><b>Double decomposition (precipitation)</b></td><td>Mix two solutions → precipitate forms</td></tr>
    <tr><td><b>From an insoluble base</b></td><td>Add acid in excess, filter off excess solid</td><td>Then evaporate/crystallise</td></tr>
    <tr><td><b>From a metal</b></td><td>Add acid, filter, crystallise</td><td>For metals below hydrogen</td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">3</span> Preparing copper(II) tetraoxosulphate(VI)</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Choice</div>
    Copper(II) oxide is an insoluble base → acid + insoluble base</div>
    <div class="step"><div class="step-l">Reaction</div>
    CuO + H₂SO₄ → CuSO₄ + H₂O</div>
    <div class="step"><div class="step-l">Procedure</div>
    Warm dilute H₂SO₄, add CuO in small amounts until no more dissolves (base in excess ensures no acid remains), <b>filter</b> off excess CuO, then crystallise by evaporating the filtrate.</div>
    <div class="ans">Answer: acid + excess insoluble base, filter, crystallise</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Preparing an insoluble salt</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Example</div>
    Silver chloride from sodium chloride and silver nitrate</div>
    <div class="step"><div class="step-l">Reaction</div>
    NaCl(aq) + AgNO₃(aq) → AgCl(s)↓ + NaNO₃(aq)</div>
    <div class="step"><div class="step-l">Method</div>
    Mix equal volumes of the two solutions, stir, filter the precipitate, wash with distilled water, dry between filter papers.</div>
    <div class="ans">Answer: double decomposition (precipitation)</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Titration is for soluble salts only</b>
<p>Use titration when the salt is <b>soluble</b> and all reagents are in solution, so you know exactly when to stop. For insoluble salts, precipitation is the method — titration would be pointless.</p></div></div>

<h2>Test-tube reactions that identify ions</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Test</th><th>Observation</th><th>Inference</th></tr></thead>
  <tbody>
    <tr><td>Add NaOH to a solution</td><td>Coloured precipitate</td><td>Metal cation present (Cu²⁺ blue, Fe²⁺ green, Fe³⁺ red-brown)</td></tr>
    <tr><td>Add NaOH until in excess</td><td>Precipitate <b>dissolves</b></td><td>Amphoteric (Zn²⁺, Al³⁺, Pb²⁺)</td></tr>
    <tr><td>Add NH₃ solution</td><td>Deep blue solution</td><td>Cu²⁺</td></tr>
    <tr><td>Add dilute acid</td><td>Fizzing, gas turns limewater milky</td><td>Carbonate</td></tr>
    <tr><td>Add BaCl₂ / Ba(NO₃)₂</td><td>White precipitate, insoluble in dilute acid</td><td>Sulphate (BaSO₄)</td></tr>
    <tr><td>Add AgNO₃</td><td>White precipitate, soluble in dilute NH₃</td><td>Chloride (AgCl)</td></tr>
    <tr><td>Add acidified AgNO₃</td><td>Pale yellow precipitate</td><td>Bromide (AgBr)</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Brønsted–Lowry: acid = proton donor, base = proton acceptor.</li>
<li>pH = −log₁₀[H⁺]; 7 neutral, &lt;7 acid, &gt;7 alkali; indicator colours red→violet.</li>
<li>Strength ≠ concentration.</li>
<li>Acid in excess → acid salt; base in excess → basic salt.</li>
<li>Soluble salts: titration or acid+insoluble base. Insoluble salts: precipitation.</li>
</ul>
`,
  quiz: [
    { q: 'According to the Brønsted–Lowry theory, an acid is', opts: ['A proton acceptor', 'A proton donor', 'An electron acceptor', 'A source of OH⁻'], a: 1, why: 'Acids donate H⁺; bases accept it.' },
    { q: 'A base, in the Brønsted–Lowry sense, is', opts: ['A proton donor', 'A proton acceptor', 'An electron donor', 'Any metal oxide'], a: 1, why: 'Bases accept protons — including NH₃, which contains no OH⁻ group.' },
    { q: 'A solution with pH 3 is', opts: ['Strongly alkaline', 'Neutral', 'Acidic', 'Basic'], a: 2, why: 'pH below 7 indicates acidity; 3 indicates a reasonably strong acid.' },
    { q: 'A neutral solution at 25 °C has a pH of', opts: ['0', '7', '10', '14'], a: 1, why: '[H⁺] = [OH⁻] = 10⁻⁷ mol dm⁻³, giving pH 7.' },
    { q: 'Which acid is strong?', opts: ['Ethanoic acid', 'Carbonic acid', 'Hydrochloric acid', 'Phosphoric acid'], a: 2, why: 'HCl ionises completely in water; the others ionise only partially.' },
    { q: 'Which of these is a weak alkali?', opts: ['Sodium hydroxide', 'Potassium hydroxide', 'Ammonia solution', 'Calcium hydroxide'], a: 2, why: 'Ammonia is only partially ionised; NaOH and KOH are fully ionised strong bases.' },
    { q: 'The main difference between a strong and a weak acid at the same concentration is', opts: ['The amount of acid present', 'The degree of ionisation', 'The volume of solution', 'The colour'], a: 1, why: 'Strong acids ionise completely; weak acids reach an equilibrium with much unionised acid.' },
    { q: 'The reaction of an acid with a carbonate produces', opts: ['Salt and hydrogen only', 'Salt, water and carbon dioxide', 'Salt and oxygen', 'Acid and base'], a: 1, why: '2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂.' },
    { q: 'Which product forms when an acid reacts with a reactive metal?', opts: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Chlorine'], a: 1, why: 'Metal + acid → salt + hydrogen (metals above hydrogen in the series).' },
    { q: 'An acid salt contains', opts: ['A replaceable hydroxyl group', 'A replaceable hydrogen atom from the acid', 'Two metal ions', 'No metal'], a: 1, why: 'Only part of the acid has neutralised, leaving an ionisable H — e.g. NaHSO₄.' },
    { q: 'To prepare an acid salt, the reagents should be mixed in', opts: ['Equal proportions', 'Acid in excess', 'Base in excess', 'Water only'], a: 1, why: 'Excess acid leaves unreacted acidic hydrogen, producing the acid salt.' },
    { q: 'A basic salt is obtained when', opts: ['The acid is in excess', 'The base is in excess', 'Both are equal', 'The solvent is removed'], a: 1, why: 'Excess base means some of it remains combined in the salt, as an OH group.' },
    { q: 'The best method to prepare an insoluble salt is', opts: ['Titration', 'Double decomposition (precipitation)', 'Evaporation of the solution', 'Electrolysis'], a: 1, why: 'Mixing two solutions precipitates the insoluble salt, which is then filtered off.' },
    { q: 'To prepare soluble copper(II) sulphate, the most suitable reagents are', opts: ['Copper and sulphuric acid', 'Copper oxide and dilute sulphuric acid', 'Copper carbonate and water', 'Copper and dilute sodium hydroxide'], a: 1, why: 'CuO (insoluble base) + H₂SO₄ gives a clean solution; excess CuO is then filtered off.' },
    { q: 'The precipitate formed when sodium chloride reacts with silver nitrate is', opts: ['AgNO₃', 'AgCl', 'NaCl', 'NaNO₃'], a: 1, why: 'Silver chloride is insoluble — the classic white precipitate test for chloride ions.' },
    { q: 'A white precipitate insoluble in dilute acid, formed with barium chloride, indicates', opts: ['Chloride', 'Sulphate', 'Carbonate', 'Nitrate'], a: 1, why: 'BaSO₄ is white and insoluble in acid; BaCO₃ would dissolve with fizzing.' },
    { q: 'Adding excess sodium hydroxide to a solution giving a precipitate that then dissolves suggests', opts: ['Cu²⁺', 'Fe³⁺', 'Zn²⁺', 'Ca²⁺'], a: 2, why: 'Zinc hydroxide is amphoteric and redissolves in excess alkali to form a zincate ion.' }
  ]
});
