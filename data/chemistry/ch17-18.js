/* JAMB 2027 Prep — Chemistry, Chapters 17–18 */

JAMB.addChapter('chemistry', {
  id: 'hydrocarbons',
  title: 'Organic Chemistry: Hydrocarbons',
  blurb: 'Alkanes, alkenes, alkynes, isomerism, and the reactions of each homologous series.',
  time: '70 min',
  objectives: [
    'Define a homologous series and state its characteristics',
    'Name and draw structural isomers of the first members',
    'Describe the reactions of alkanes, alkenes and alkynes',
    'Explain addition, substitution, cracking and polymerisation',
    'Distinguish saturated from unsaturated compounds and apply test reactions'
  ],
  body: `
<p class="lead">Organic Chemistry looks like a huge amount of memorisation, but it is built on a small number of patterns. Learn <strong>the homologous series</strong>, <strong>the functional group</strong>, and <strong>the reactions that functional group undergoes</strong> — and you can predict the chemistry of compounds you have never met.</p>

<h2>Foundations</h2>
<div class="formula-box">
  <div class="fb-head">Terms you must be able to define</div>
  <div class="formula-row"><div class="fname">Hydrocarbon</div>
    <div class="fexpr">A compound containing <b>only</b> hydrogen and carbon</div></div>
  <div class="formula-row"><div class="fname">Homologous series</div>
    <div class="fexpr">A family of compounds with the <b>same functional group</b> and <b>general formula</b>, differing by CH₂, with similar chemical properties and a gradual trend in physical properties</div></div>
  <div class="formula-row"><div class="fname">Functional group</div>
    <div class="fexpr">The atom or group of atoms responsible for the characteristic chemical reactions of a compound</div></div>
  <div class="formula-row"><div class="fname">Saturated</div>
    <div class="fexpr">Contains only <b>single</b> carbon–carbon bonds</div></div>
  <div class="formula-row"><div class="fname">Unsaturated</div>
    <div class="fexpr">Contains at least one <b>double or triple</b> C–C bond</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Series</th><th>General formula</th><th>Functional group</th><th>First member</th></tr></thead>
  <tbody>
    <tr><td><b>Alkanes</b></td><td>CₙH₂ₙ₊₂</td><td>None (C–C)</td><td>Methane CH₄</td></tr>
    <tr><td><b>Alkenes</b></td><td>CₙH₂ₙ</td><td>C=C</td><td>Ethene C₂H₄</td></tr>
    <tr><td><b>Alkynes</b></td><td>CₙH₂ₙ₋₂</td><td>C≡C</td><td>Ethyne C₂H₂</td></tr>
    <tr><td><b>Alcohols</b></td><td>CₙH₂ₙ₊₁OH</td><td>–OH</td><td>Methanol CH₃OH</td></tr>
    <tr><td><b>Aldehydes</b></td><td>CₙH₂ₙO</td><td>–CHO</td><td>Ethanal CH₃CHO</td></tr>
    <tr><td><b>Ketones</b></td><td>CₙH₂ₙO</td><td>C=O (mid-chain)</td><td>Propanone CH₃COCH₃</td></tr>
    <tr><td><b>Carboxylic acids</b></td><td>CₙH₂ₙO₂ / CₙH₂ₙ₊₁COOH</td><td>–COOH</td><td>Methanoic acid HCOOH</td></tr>
    <tr><td><b>Esters</b></td><td>CₙH₂ₙO₂</td><td>–COO–</td><td>Methyl methanoate</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The characteristics of a homologous series</b>
<p>1. Same general formula. 2. Same functional group and hence similar chemical properties. 3. Differ by <b>CH₂</b> (Mr = 14) between successive members. 4. Gradual change in physical properties (boiling point rises with chain length). 5. Can be represented by a <b>structural formula</b>. This list is often asked directly.</p></div></div>

<h2>Isomerism</h2>
<blockquote><strong>Structural isomers</strong> have the same molecular formula but different structural (displayed) formulae.</blockquote>

<div class="example">
  <div class="example-h"><span class="num">1</span> Butane and methylpropane</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Molecular formula</div>
    Both are C₄H₁₀</div>
    <div class="step"><div class="step-l">Butane</div>
    CH₃–CH₂–CH₂–CH₃ (straight chain)</div>
    <div class="step"><div class="step-l">Methylpropane</div>
    CH₃–CH(CH₃)–CH₃ (branched)</div>
    <div class="ans">Two isomers — different boiling points (0.5 °C and −12 °C)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Isomers of C₃H₈O</div>
  <div class="example-b">
    <div class="step"><div class="step-l">As an alcohol</div>
    Propan-1-ol: CH₃CH₂CH₂OH<br>Propan-2-ol: CH₃CH(OH)CH₃</div>
    <div class="step"><div class="step-l">As an ether</div>
    Methoxyethane: CH₃–O–CH₂CH₃</div>
    <div class="ans">Answer: at least three structural isomers</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>How to find isomers systematically</b>
<p>1. Draw the longest straight chain. 2. Shorten it by one and hang the difference as a branch. 3. Continue until no new arrangements are possible. 4. Check functional-group isomers (alcohol vs ether; aldehyde vs ketone) — they are frequently forgotten.</p></div></div>

<h2>Alkanes — saturated, unreactive-ish</h2>
<p><strong>General formula CₙH₂ₙ₊₂</strong>. Methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀, pentane C₅H₁₂.</p>

<h3>Preparation of methane</h3>
<div class="eq">CH₃COONa + NaOH → CH₄ + Na₂CO₃ &nbsp;&nbsp;(soda lime, heat)</div>
<p>Sodium ethanoate (anhydrous) is heated with soda lime (NaOH + CaO) in a hard-glass test tube. The CaO keeps the NaOH porous and free-flowing.</p>

<h3>Reactions of alkanes</h3>
<div class="formula-box">
  <div class="fb-head">Alkane reactions</div>
  <div class="formula-row"><div class="fname">Complete combustion</div>
    <div class="fexpr">CH₄ + 2O₂ → CO₂ + 2H₂O</div>
    <div class="fnote">Blue flame. Incomplete combustion gives CO (poisonous) and soot.</div></div>
  <div class="formula-row"><div class="fname">Substitution with halogens (UV light)</div>
    <div class="fexpr">CH₄ + Cl₂ → CH₃Cl + HCl &nbsp;&nbsp;(UV)</div>
    <div class="fnote">Free-radical substitution; continues to CH₂Cl₂, CHCl₃, CCl₄.</div></div>
  <div class="formula-row"><div class="fname">Cracking</div>
    <div class="fexpr">Long-chain alkane → shorter alkane + alkene</div>
    <div class="fnote">e.g. C₁₀H₂₂ → C₈H₁₈ + C₂H₄ (heat + catalyst)</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Substitution needs UV, not just mixing</b>
<p>Alkanes do not react with bromine in the dark — the halogenation of an alkane requires <b>ultraviolet light</b> (or high temperature) to break the halogen molecule into free radicals. Alkenes, by contrast, decolourise bromine water <b>immediately in the dark</b>. This contrast is examined constantly.</p></div></div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why substitution, not addition?</b>
<p>With only single bonds, alkanes have no electron-rich site for attack — they must lose a hydrogen first (substitution). Alkenes have a π bond that can break and accept atoms (addition).</p></div></div>

<h2>Alkenes — unsaturated, reactive</h2>
<p><strong>General formula CₙH₂ₙ</strong>, containing a <strong>carbon–carbon double bond C=C</strong>. Ethene C₂H₄ is the first member (there is no "methene").</p>

<h3>Preparation of ethene</h3>
<div class="eq">C₂H₅OH → C₂H₄ + H₂O &nbsp;&nbsp;(conc. H₂SO₄ or Al₂O₃, ~170 °C)</div>
<p>Dehydration of ethanol — the alcohol is passed over hot aluminium oxide or heated with concentrated sulphuric acid at about 170 °C.</p>

<h3>Reactions of alkenes</h3>
<div class="formula-box">
  <div class="fb-head">Addition reactions</div>
  <div class="formula-row"><div class="fname">With bromine (test for unsaturation)</div>
    <div class="fexpr">C₂H₄ + Br₂ → C₂H₄Br₂ &nbsp;(orange → colourless)</div></div>
  <div class="formula-row"><div class="fname">With hydrogen (Ni catalyst, 150 °C)</div>
    <div class="fexpr">C₂H₄ + H₂ → C₂H₆ &nbsp;&nbsp;<b>hydrogenation</b></div>
    <div class="fnote">Used to harden vegetable oils into margarine.</div></div>
  <div class="formula-row"><div class="fname">With steam (H₃PO₄ catalyst)</div>
    <div class="fexpr">C₂H₄ + H₂O → C₂H₅OH &nbsp;&nbsp;<b>hydration</b></div></div>
  <div class="formula-row"><div class="fname">With halogens/HX</div>
    <div class="fexpr">C₂H₄ + HBr → C₂H₅Br &nbsp;&nbsp;<b>hydrohalogenation</b></div></div>
  <div class="formula-row"><div class="fname">Polymerisation</div>
    <div class="fexpr">nC₂H₄ → (–CH₂–CH₂–)ₙ &nbsp;&nbsp;<b>poly(ethene)</b></div></div>
  <div class="formula-row"><div class="fname">Combustion</div>
    <div class="fexpr">Burns with a smoky, luminous flame (higher C:H ratio)</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The unsaturation test</b>
<p><b>Bromine water</b> is orange-brown. With an alkene it is decolourised <b>immediately in the dark</b>. With an alkane, <b>no change</b> unless exposed to UV. This is the definitive test distinguishing saturated from unsaturated compounds — and it is the most frequent organic question in JAMB.</p></div></div>

<h2>Alkynes</h2>
<p><strong>General formula CₙH₂ₙ₋₂</strong>, with a <strong>triple bond C≡C</strong>. Ethyne C₂H₂ (commonly called acetylene).</p>

<div class="formula-box">
  <div class="fb-head">Ethyne</div>
  <div class="formula-row"><div class="fname">Preparation</div>
    <div class="fexpr">2CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂</div>
    <div class="fnote">Calcium carbide with water.</div></div>
  <div class="formula-row"><div class="fname">Structure</div>
    <div class="fexpr">H–C≡C–H &nbsp;&nbsp;linear, bond angle 180°</div></div>
  <div class="formula-row"><div class="fname">Key use</div>
    <div class="fexpr">Oxy-ethyne welding torch — burns with a very hot flame (~3000 °C)</div></div>
  <div class="formula-row"><div class="fname">Reactions</div>
    <div class="fexpr">Addition of Br₂ (decolourises bromine water), hydrogenation to ethane/ethene, polymerisation to benzene</div></div>
</div>

<h2>Structures and shapes</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Feature</th><th>Detail</th></tr></thead>
  <tbody>
    <tr><td><b>Tetrahedral carbon</b></td><td>Four single bonds, 109.5° (alkanes, sp³)</td></tr>
    <tr><td><b>Trigonal planar</b></td><td>Double-bonded carbon, 120° (alkenes, sp²)</td></tr>
    <tr><td><b>Linear</b></td><td>Triple-bonded carbon, 180° (alkynes, sp)</td></tr>
    <tr><td><b>Isomerism types</b></td><td>Structural (chain, position, functional group), cis–trans (geometric), optical</td></tr>
  </tbody>
</table>

<h2>Cracking and petroleum</h2>
<p><strong>Cracking</strong> breaks large hydrocarbon molecules into smaller, more useful ones. It is necessary because the demand for short-chain fractions (petrol, gases) exceeds what crude oil naturally contains.</p>
<div class="eq">C₈H₁₈ → C₆H₁₄ + C₂H₄</div>
<p><strong>Conditions:</strong> high temperature (450–750 °C) and a catalyst (zeolite/porous silica-alumina), or steam cracking at 800 °C+.</p>
<div class="note note-exam"><span class="ico">🎯</span><div><b>Why crack?</b>
<p>Cracking does three things: (1) makes more of the <b>short-chain fractions</b> the market wants; (2) produces <b>alkenes</b> for polymers; (3) produces <b>hydrogen</b> for ammonia synthesis. Give at least two reasons for full marks.</p></div></div>

<h2>Naming — the essentials</h2>
<div class="formula-box">
  <div class="fb-head">Basic nomenclature</div>
  <div class="formula-row"><div class="fname">Prefix</div>
    <div class="fexpr">meth- (1) · eth- (2) · prop- (3) · but- (4) · pent- (5) · hex- (6) · hept- (7) · oct- (8)</div></div>
  <div class="formula-row"><div class="fname">Suffix</div>
    <div class="fexpr">-ane (alkane) · -ene (alkene) · -yne (alkyne) · -ol (alcohol) · -al (aldehyde) · -one (ketone) · -oic acid (acid) · -oate (ester)</div></div>
  <div class="formula-row"><div class="fname">Numbering</div>
    <div class="fexpr">Give the functional group the <b>lowest possible number</b></div>
    <div class="fnote">Butan-2-ol, not butan-3-ol.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Naming a compound</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Structure</div>
    CH₃–CH₂–CH=CH₂</div>
    <div class="step"><div class="step-l">Longest chain containing the double bond</div>
    4 carbons → "but"</div>
    <div class="step"><div class="step-l">Number to give = the lower number</div>
    Double bond starts at C1</div>
    <div class="ans">Answer: but-1-ene</div>
  </div>
</div>

<h2>Chapter recap</h2>
<ul>
<li>Alkanes CₙH₂ₙ₊₂ (saturated), alkenes CₙH₂ₙ (C=C), alkynes CₙH₂ₙ₋₂ (C≡C).</li>
<li>Alkanes substitute with halogens under UV; alkenes add bromine in the dark.</li>
<li>Bromine water = test for unsaturation: orange → colourless.</li>
<li>Hydrogenation hardens oils; hydration makes alcohol; cracking gives shorter chains + alkenes.</li>
<li>Isomers: same molecular formula, different structures.</li>
</ul>
`,
  quiz: [
    { q: 'The general formula of the alkenes is', opts: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁'], a: 1, why: 'One degree of unsaturation from the C=C bond removes two hydrogens.' },
    { q: 'Members of a homologous series differ by', opts: ['CH₃', 'CH₂', 'C₂H₆', 'H₂'], a: 1, why: 'Successive members differ by a CH₂ group (Mr = 14).' },
    { q: 'A homologous series has members with', opts: ['The same molecular formula', 'Different functional groups', 'The same general formula and similar chemical properties', 'Identical boiling points'], a: 2, why: 'Same functional group and general formula, with a gradual trend in physical properties.' },
    { q: 'Which compound is saturated?', opts: ['Ethene', 'Ethyne', 'Butane', 'Benzene'], a: 2, why: 'Butane contains only C–C single bonds; the others have multiple bonds.' },
    { q: 'The test that distinguishes an alkane from an alkene is', opts: ['Litmus paper', 'Bromine water in the dark', 'Sodium metal', 'Lime water'], a: 1, why: 'The alkene decolourises bromine water immediately; the alkane does not.' },
    { q: 'Bromine water changes from', opts: ['Colourless to orange', 'Orange-brown to colourless', 'Blue to green', 'Red to yellow'], a: 1, why: 'The bromine adds across the C=C bond, so the colour disappears.' },
    { q: 'The reaction of an alkane with chlorine in UV light is called', opts: ['Addition', 'Substitution', 'Cracking', 'Polymerisation'], a: 1, why: 'A hydrogen atom is replaced by a chlorine atom — free-radical substitution.' },
    { q: 'Halogenation of an alkane requires', opts: ['Ultraviolet light', 'A nickel catalyst', 'High pressure only', 'Darkness'], a: 0, why: 'UV provides the energy to split Cl₂ into chlorine radicals.' },
    { q: 'Ethanol is converted to ethene by', opts: ['Hydrogenation with Ni', 'Dehydration using conc. H₂SO₄ or hot Al₂O₃', 'Oxidation with KMnO₄', 'Addition of bromine'], a: 1, why: 'The alcohol loses a water molecule at about 170 °C.' },
    { q: 'The industrial hardening of vegetable oils to margarine is', opts: ['Hydrogenation', 'Hydration', 'Cracking', 'Neutralisation'], a: 0, why: 'H₂ adds across the C=C bonds with a nickel catalyst, making the oil solid.' },
    { q: 'Adding steam to ethene in the presence of a catalyst produces', opts: ['Ethane', 'Ethanol', 'Ethanoic acid', 'Ethyne'], a: 1, why: 'C₂H₄ + H₂O → C₂H₅OH — the industrial hydration process.' },
    { q: 'Cracking a long-chain alkane produces', opts: ['A longer alkane and an alkene only', 'Shorter alkanes and alkenes', 'Only carbon and hydrogen', 'Alcohols only'], a: 1, why: 'Large molecules break into smaller, more useful ones plus unsaturated products.' },
    { q: 'Cracking is necessary mainly because', opts: ['Crude oil is too expensive', 'Demand for short-chain fractions exceeds supply', 'Long chains are too reactive', 'It removes sulphur'], a: 1, why: 'More petrol and gases are needed than crude oil naturally contains.' },
    { q: 'Which compound has the molecular formula C₄H₁₀?', opts: ['Butane', 'Butene', 'Butyne', 'Butanol'], a: 0, why: 'CₙH₂ₙ₊₂ with n = 4 gives C₄H₁₀ — the alkane.' },
    { q: 'Butane and methylpropane are examples of', opts: ['Stereoisomers', 'Structural isomers', 'Identical compounds', 'Homologues'], a: 1, why: 'Same molecular formula C₄H₁₀, different structural arrangement.' },
    { q: 'The number of structural isomers of C₂H₆O that are alcohols is', opts: ['1', '2', '3', '4'], a: 0, why: 'Only ethanol (CH₃CH₂OH) fits; the other C₂H₆O isomer is the ether methoxymethane.' },
    { q: 'Ethyne (acetylene) contains', opts: ['A single bond only', 'A double bond', 'A triple bond', 'An aromatic ring'], a: 2, why: 'H–C≡C–H — a carbon–carbon triple bond, linear at 180°.' },
    { q: 'The principal use of ethyne is', opts: ['Making polythene', 'Oxy-ethyne welding', 'Manufacture of ethanol', 'Fuel for cars'], a: 1, why: 'It burns with an extremely hot flame suitable for welding and cutting metals.' },
    { q: 'The polymer formed from ethene is', opts: ['Poly(ethene) / polythene', 'Poly(propene) / polypropene', 'PVC', 'PTFE'], a: 0, why: 'nCH₂=CH₂ → –(CH₂–CH₂)ₙ–.' },
    { q: 'Methane is prepared in the laboratory by heating', opts: ['Ethanoic acid with soda lime', 'Sodium ethanoate with soda lime', 'Ethanol with sulphuric acid', 'Calcium carbide with water'], a: 1, why: 'CH₃COONa + NaOH (soda lime) → CH₄ + Na₂CO₃.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'functional-groups',
  title: 'Alcohols, Acids and Esters',
  blurb: 'Alcohols, aldehydes, ketones, carboxylic acids and esters — preparation, reactions and uses.',
  time: '70 min',
  objectives: [
    'Describe the preparation and reactions of alcohols',
    'Distinguish primary, secondary and tertiary alcohols',
    'Compare aldehydes and ketones and their oxidation behaviour',
    'Describe the preparation and reactions of carboxylic acids',
    'Explain esterification, hydrolysis and the uses of esters'
  ],
  body: `
<p class="lead">This chapter is where organic Chemistry becomes useful — alcohols, acids and esters are the compounds behind fuels, solvents, foods, medicines and perfumes. Each has a characteristic set of reactions. Learn <strong>how each is made</strong> and <strong>what it does with oxygen</strong>, and most questions become predictable.</p>

<h2>Alcohols</h2>
<p><strong>General formula CₙH₂ₙ₊₁OH</strong>, functional group <strong>–OH (hydroxyl)</strong> attached to a saturated carbon.</p>

<h3>Classification</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Structure</th><th>Example</th><th>Oxidation</th></tr></thead>
  <tbody>
    <tr><td><b>Primary (1°)</b></td><td>–CH₂OH at the end of a chain</td><td>Ethanol CH₃CH₂OH</td><td>→ aldehyde → <b>acid</b></td></tr>
    <tr><td><b>Secondary (2°)</b></td><td>–CHOH in the middle</td><td>Propan-2-ol</td><td>→ <b>ketone</b></td></tr>
    <tr><td><b>Tertiary (3°)</b></td><td>C–OH with no H on the carbon</td><td>2-methylpropan-2-ol</td><td><b>Not oxidised</b> (no H to lose)</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The oxidation sequence — a favourite question</b>
<p><b>Primary alcohol → aldehyde → carboxylic acid</b><br>
<b>Secondary alcohol → ketone</b> (stops there)<br>
<b>Tertiary alcohol → no oxidation</b> without breaking C–C bonds.<br>
Distil off the product quickly to stop at the aldehyde; reflux with excess oxidant to reach the acid.</p></div></div>

<h3>Preparation of alcohols</h3>
<div class="formula-box">
  <div class="fb-head">Alcohol preparations</div>
  <div class="formula-row"><div class="fname">Hydration of an alkene</div>
    <div class="fexpr">C₂H₄ + H₂O → C₂H₅OH &nbsp;&nbsp;(H₃PO₄ catalyst, 300 °C, 60 atm)</div>
    <div class="fnote">The main industrial route.</div></div>
  <div class="formula-row"><div class="fname">Fermentation of sugars</div>
    <div class="fexpr">C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ &nbsp;&nbsp;(yeast, 25–35 °C, anaerobic)</div>
    <div class="fnote">Glucose → ethanol + carbon dioxide.</div></div>
  <div class="formula-row"><div class="fname">Hydrolysis of an ester</div>
    <div class="fexpr">Ester + water → alcohol + acid</div></div>
  <div class="formula-row"><div class="fname">Reduction of an aldehyde</div>
    <div class="fexpr">RCHO + 2[H] → RCH₂OH</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Fermentation conditions</b>
<p><b>Yeast</b> (contains zymase), <b>25–35 °C</b> (enzyme denatures above ~40 °C), <b>no air</b> (anaerobic — oxygen would let the yeast respire instead), slightly acidic pH. Fermentation stops at about <b>15% ethanol</b> because the yeast is poisoned by its own product — hence distillation is needed for spirits.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Hydration vs fermentation</b>
<p>Hydration is <b>fast, continuous and gives pure ethanol</b>. Fermentation is <b>slow, batch-wise and gives dilute ethanol</b> needing distillation — but uses a renewable feedstock. If a question asks which method to use under a particular constraint, match these trade-offs.</p></div></div>

<h3>Reactions of alcohols</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Reaction</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td><b>Combustion</b></td><td>C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (clean blue flame — used as biofuel)</td></tr>
    <tr><td><b>Oxidation (acidified dichromate)</b></td><td>Primary → aldehyde → acid; secondary → ketone</td></tr>
    <tr><td><b>Dehydration</b></td><td>C₂H₅OH → C₂H₄ + H₂O (conc. H₂SO₄, 170 °C)</td></tr>
    <tr><td><b>With sodium</b></td><td>2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂ (less vigorous than water)</td></tr>
    <tr><td><b>Esterification</b></td><td>Alcohol + acid ⇌ ester + water (conc. H₂SO₄ catalyst)</td></tr>
    <tr><td><b>With PCl₅ / HCl</b></td><td>C₂H₅OH + PCl₅ → C₂H₅Cl + POCl₃ + HCl</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Sodium test — alcohol vs water</b>
<p>Sodium <b>does</b> react with alcohols, but <b>less vigorously</b> than with water. This difference in vigor is a standard comparison. Both give hydrogen (pop test positive).</p></div></div>

<h3>Uses and hazards of ethanol</h3>
<ul>
<li><strong>Solvent</strong> — in perfumes, tinctures, medicines (ethyl alcohol).</li>
<li><strong>Fuel</strong> — biofuel, alcoholic drinks (beverage spirit), heat.</li>
<li><strong>Industrial feedstock</strong> — for making ethanoic acid, esters and ethers.</li>
<li><strong>Antiseptic</strong> — 70% ethanol swabs.</li>
</ul>
<div class="note note-warn"><span class="ico">⚠</span><div><b>Methyl vs ethyl alcohol</b>
<p><b>Methanol (CH₃OH)</b> is <b>toxic</b> — it is oxidised in the body to methanal then methanoic acid, causing blindness and death. <b>Ethanol</b> is the drinkable one. Never confuse them; "industrial spirit" often means methanol.</p></div></div>

<h2>Aldehydes and ketones</h2>
<p>Both contain the <strong>carbonyl group C=O</strong>, but in different positions.</p>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Aldehyde</th><th>Ketone</th></tr></thead>
  <tbody>
    <tr><td><b>Group</b></td><td>–CHO at the <b>end</b> of the chain</td><td>C=O in the <b>middle</b></td></tr>
    <tr><td><b>General formula</b></td><td>CₙH₂ₙO (RCHO)</td><td>CₙH₂ₙO (RCOR)</td></tr>
    <tr><td><b>First member</b></td><td>Methanal HCHO (formaldehyde)</td><td>Propanone CH₃COCH₃ (acetone)</td></tr>
    <tr><td><b>Oxidised by Tollens'/Fehling's</b></td><td><b>Yes</b> — gives a silver mirror / red precipitate</td><td><b>No</b></td></tr>
    <tr><td><b>Oxidised by acidified dichromate</b></td><td>Yes → carboxylic acid</td><td>Not readily</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The aldehyde/ketone distinction</b>
<p><b>Tollens' reagent (ammoniacal silver nitrate)</b> — aldehydes give a <b>silver mirror</b>; ketones do not.<br>
<b>Fehling's solution</b> — aldehydes give a <b>red precipitate of Cu₂O</b>; ketones do not.<br>
This is the standard way to tell them apart, and it comes up frequently.</p></div></div>

<p><strong>Uses:</strong> methanal (formaldehyde) — preserving biological specimens and making plastics; propanone (acetone) — nail varnish remover and solvent for nail polish.</p>

<h2>Carboxylic acids</h2>
<p><strong>General formula CₙH₂ₙ₊₁COOH</strong>, functional group <strong>–COOH (carboxyl)</strong>.</p>

<h3>Preparation</h3>
<div class="formula-box">
  <div class="fb-head">Making ethanoic acid</div>
  <div class="formula-row"><div class="fname">Oxidation of ethanol</div>
    <div class="fexpr">C₂H₅OH + 2[O] → CH₃COOH + H₂O</div>
    <div class="fnote">Reflux with acidified potassium dichromate(VI), then distil.</div></div>
  <div class="formula-row"><div class="fname">Oxidation of ethene</div>
    <div class="fexpr">2C₂H₄ + O₂ → 2CH₃CHO &nbsp;then&nbsp; 2CH₃CHO + O₂ → 2CH₃COOH</div></div>
  <div class="formula-row"><div class="fname">Hydrolysis of an ester</div>
    <div class="fexpr">Ester + water → acid + alcohol</div></div>
</div>

<h3>Reactions</h3>
<div class="formula-box">
  <div class="fb-head">Ethanoic acid</div>
  <div class="formula-row"><div class="fname">With carbonates → CO₂ (test for carboxylic acids)</div>
    <div class="fexpr">2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂</div></div>
  <div class="formula-row"><div class="fname">With metals → hydrogen</div>
    <div class="fexpr">2CH₃COOH + Zn → (CH₃COO)₂Zn + H₂</div></div>
  <div class="formula-row"><div class="fname">With alkali → neutralisation</div>
    <div class="fexpr">CH₃COOH + NaOH → CH₃COONa + H₂O</div></div>
  <div class="formula-row"><div class="fname">With alcohol → ester (esterification)</div>
    <div class="fexpr">CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</div>
    <div class="fnote">Concentrated H₂SO₄ catalyst; reversible reaction.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Carboxylic acids vs carbonic acid</b>
<p>Carboxylic acids are <b>weak acids</b> (ethanoic acid ionises partially) but they <b>do</b> liberate CO₂ from carbonates — which carbonic acid cannot (it IS the carbonate product). The carbonate test distinguishes a carboxylic acid from phenol, which does not react with carbonates.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Weak but still reacts completely with alkali</b>
<p>Like all weak acids, ethanoic acid is <b>fully neutralised</b> by sodium hydroxide — partial ionisation only affects rate and initial pH, not the total amount of alkali needed.</p></div></div>

<h2>Esters</h2>
<p>Formed by the reaction of a <strong>carboxylic acid and an alcohol</strong> (esterification), or by the reaction of an acid chloride with an alcohol.</p>
<div class="eq">CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O &nbsp;&nbsp;(conc. H₂SO₄)</div>

<div class="formula-box">
  <div class="fb-head">Naming an ester</div>
  <div class="formula-row"><div class="fname">First part</div>
    <div class="fexpr">From the <b>alcohol</b> → "alkyl"</div></div>
  <div class="formula-row"><div class="fname">Second part</div>
    <div class="fexpr">From the <b>acid</b> → "alkanoate"</div>
    <div class="fnote">Ethanol + ethanoic acid → <b>ethyl ethanoate</b>.</div></div>
</div>

<h3>Properties and reactions</h3>
<ul>
<li><strong>Physical:</strong> sweet/fruity smell, volatile, <strong>insoluble in water</strong> but soluble in organic solvents — hence use as <strong>solvents for perfumes and varnishes</strong>.</li>
<li><strong>Hydrolysis (acid)</strong> — reversible, gives acid + alcohol.</li>
<li><strong>Hydrolysis (alkali, saponification)</strong> — irreversible, gives the <b>salt</b> of the acid + alcohol. This is how soap is made from fats (esters of glycerol and long-chain acids).</li>
</ul>
<div class="eq">Fat (ester) + 3NaOH → glycerol + 3 salt of fatty acid (soap)</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Esterification is reversible</b>
<p>Because the reaction is an equilibrium, <b>removing water</b> (or using excess of one reactant) shifts it to the right and increases yield. Le Chatelier applied to organic Chemistry — a very common cross-topic question.</p></div></div>

<h3>Uses of esters</h3>
<ul>
<li><strong>Fragrance and flavouring</strong> — many fruit smells are esters (banana → pentyl ethanoate; pineapple → ethyl butanoate).</li>
<li><strong>Solvents</strong> — for perfumes, paints, nail varnish (ethyl ethanoate, butyl ethanoate).</li>
<li><strong>Fats and oils</strong> — naturally occurring esters of glycerol.</li>
<li><strong>Plasticisers</strong> — make plastics flexible.</li>
</ul>

<h2>Glycerol</h2>
<p>A <strong>triol</strong> (three –OH groups) obtained by the hydrolysis of fats and oils. It is sweet, viscous, soluble in water, and used in cosmetics, antifreeze, explosives (nitroglycerine) and as a food humectant.</p>

<h2>Chapter recap</h2>
<ul>
<li>Alcohol classification: 1° → acid, 2° → ketone, 3° → no oxidation.</li>
<li>Preparation: hydration (industrial) or fermentation (yeast, 25–35 °C, anaerobic, max ~15%).</li>
<li>Aldehydes give Tollens' silver mirror and Fehling's red ppt; ketones do not.</li>
<li>Carboxylic acids liberate CO₂ from carbonates — the key test.</li>
<li>Esters: alcohol part first, acid part second; alkali hydrolysis = saponification.</li>
</ul>
`,
  quiz: [
    { q: 'The functional group of an alcohol is', opts: ['–COOH', '–OH', '–CHO', 'C=C'], a: 1, why: 'The hydroxyl group –OH attached to a saturated carbon.' },
    { q: 'Oxidation of a primary alcohol with acidified dichromate gives', opts: ['A ketone only', 'An aldehyde and then a carboxylic acid', 'No reaction', 'An ester'], a: 1, why: 'The alcohol oxidises to an aldehyde, which further oxidises to the acid if refluxed.' },
    { q: 'A secondary alcohol on oxidation yields', opts: ['An aldehyde', 'A ketone', 'A carboxylic acid', 'No product'], a: 1, why: 'There is no hydrogen on the terminal carbon, so oxidation stops at the ketone.' },
    { q: 'Tertiary alcohols are not readily oxidised because', opts: ['They are too bulky', 'The carbon bearing the OH has no hydrogen atom', 'They are insoluble', 'They decompose first'], a: 1, why: 'Oxidation requires loss of a hydrogen from the carbinol carbon.' },
    { q: 'Ethanol is manufactured industrially by', opts: ['Fermentation only', 'Hydration of ethene', 'Reduction of ethanoic acid', 'Hydrolysis of ethyl ethanoate'], a: 1, why: 'C₂H₄ + H₂O over a phosphoric acid catalyst at about 300 °C.' },
    { q: 'The catalyst in the hydration of ethene is typically', opts: ['Nickel', 'Phosphoric acid', 'Vanadium(V) oxide', 'Platinum'], a: 1, why: 'Concentrated H₃PO₄ on a solid support at ~300 °C and 60 atm.' },
    { q: 'Fermentation of glucose is carried out by', opts: ['Bacteria in air', 'Yeast under anaerobic conditions', 'Nickel at high temperature', 'Sulphuric acid'], a: 1, why: 'Zymase in yeast converts glucose to ethanol and CO₂ without oxygen.' },
    { q: 'Fermentation is usually stopped at about 15% ethanol because', opts: ['The sugar runs out first', 'The yeast is poisoned by the ethanol', 'The reaction reaches equilibrium', 'The alcohol evaporates'], a: 1, why: 'Higher concentrations are toxic to the yeast, halting further production.' },
    { q: 'Which set of conditions is unsuitable for fermentation?', opts: ['25–35 °C', 'Presence of air', 'Yeast', 'Slightly acidic solution'], a: 1, why: 'Oxygen allows aerobic respiration instead of ethanol production — anaerobic conditions are needed.' },
    { q: 'Ethanol burns with', opts: ['A smoky yellow flame', 'A clean blue flame', 'No flame', 'A green flame'], a: 1, why: 'Complete combustion gives a clean blue flame — the reason it is used as a biofuel.' },
    { q: 'The product of oxidising ethanol with acidified potassium dichromate under reflux is', opts: ['Ethene', 'Ethanoic acid', 'Ethanal (stopped)', 'Ethane'], a: 1, why: 'Reflux with excess oxidant continues oxidation all the way to the acid.' },
    { q: 'The compound CH₃COCH₃ is', opts: ['Propanal', 'Propanone', 'Propanoic acid', 'Propanol'], a: 1, why: 'The C=O is mid-chain with alkyl groups on both sides — a ketone.' },
    { q: 'Which reagent distinguishes an aldehyde from a ketone?', opts: ['Sodium metal', "Tollens' reagent (ammoniacal silver nitrate)", 'Bromine water', 'Lime water'], a: 1, why: 'Aldehydes reduce Ag⁺ to a silver mirror; ketones do not react.' },
    { q: 'An aldehyde gives with Fehling’s solution', opts: ['A white precipitate', 'A red precipitate', 'A silver mirror', 'No change'], a: 1, why: 'Red precipitate of copper(I) oxide indicates the aldehyde group.' },
    { q: 'The functional group of a carboxylic acid is', opts: ['–OH', '–CHO', '–COOH', '–COO–'], a: 2, why: 'The carboxyl group combines a carbonyl and a hydroxyl.' },
    { q: 'Which test is positive for a carboxylic acid but negative for phenol?', opts: ['Litmus turns red', 'Effervescence with sodium carbonate', 'Reaction with sodium metal', 'Blue with universal indicator'], a: 1, why: 'Carboxylic acids are strong enough to displace CO₂ from carbonates; phenols are not.' },
    { q: 'Esterification is a', opts: ['Neutralisation', 'Reversible reaction', 'Redox reaction', 'Displacement reaction'], a: 1, why: 'It reaches an equilibrium, so removing water drives it to the right.' },
    { q: 'The ester formed from ethanoic acid and ethanol is', opts: ['Ethyl ethanoate', 'Methyl ethanoate', 'Ethyl methanoate', 'Methyl methanoate'], a: 0, why: 'The alcohol part gives "ethyl" (named first) and the acid part gives "ethanoate" (named second).' },
    { q: 'The reaction of a fat with sodium hydroxide to give soap and glycerol is called', opts: ['Esterification', 'Saponification', 'Hydrogenation', 'Cracking'], a: 1, why: 'Alkaline hydrolysis of an ester — the industrial basis of soap-making.' },
    { q: 'Glycerol differs from ethanol in that it has', opts: ['Two carbon atoms', 'Three hydroxyl groups', 'A carboxyl group', 'A double bond'], a: 1, why: 'Glycerol is propane-1,2,3-triol — a triol with three –OH groups.' },
    { q: 'Sodium reacts with ethanol to produce', opts: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Water'], a: 1, why: '2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂, though less vigorously than with water.' },
    { q: 'Methanol is dangerous because in the body it is oxidised to', opts: ['Ethanoic acid', 'Methanoic acid, causing blindness', 'Formaldehyde only', 'Carbon'], a: 1, why: 'Methanol → methanal → methanoic acid, which attacks the optic nerve.' }
  ]
});
