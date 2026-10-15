/* JAMB 2027 Prep — Chemistry, Chapters 14–16 */

JAMB.addChapter('chemistry', {
  id: 'water-air',
  title: 'Water and Air',
  blurb: 'Composition of the atmosphere, water treatment, air pollution and greenhouse gases.',
  time: '45 min',
  objectives: [
    'State the composition of clean dry air',
    'Describe the treatment and purification of water',
    'Explain hardness in water and its removal',
    'Identify the oxides of nitrogen and sulphur and their environmental effects',
    'Explain the greenhouse effect and ozone depletion'
  ],
  body: `
<p class="lead">Water and air are Chemistry's two great mixtures. Exam questions here are largely factual — composition percentages, the steps in water treatment, and the cause-and-effect chain behind acid rain, smog and climate change. Well worth full marks for straightforward recall.</p>

<h2>The atmosphere</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Gas</th><th>Percentage by volume (dry air)</th></tr></thead>
  <tbody>
    <tr><td>Nitrogen, N₂</td><td><b>78%</b></td></tr>
    <tr><td>Oxygen, O₂</td><td><b>21%</b></td></tr>
    <tr><td>Argon, Ar</td><td>0.9%</td></tr>
    <tr><td>Carbon dioxide, CO₂</td><td>≈ 0.04% (about 420 ppm and rising)</td></tr>
    <tr><td>Water vapour</td><td>Variable (0–4%)</td></tr>
    <tr><td>Neon, helium, methane, krypton, hydrogen</td><td>Trace</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Dry air, by volume</b>
<p>Nitrogen 78%, oxygen 21%, noble gases ~1%, CO₂ ~0.04%. Note that oxygen makes up only a <b>fifth</b> — questions often offer "50%" as a distractor. Argon is more abundant than carbon dioxide.</p></div></div>

<div class="formula-box">
  <div class="fb-head">Why the atmosphere matters</div>
  <div class="formula-row"><div class="fname">Nitrogen (78%)</div>
    <div class="fexpr">Inert buffer; dilutes oxygen so combustion is controlled; source of nitrogen compounds</div></div>
  <div class="formula-row"><div class="fname">Oxygen (21%)</div>
    <div class="fexpr">Supports combustion and respiration</div></div>
  <div class="formula-row"><div class="fname">Carbon dioxide (0.04%)</div>
    <div class="fexpr">Photosynthesis; greenhouse gas; makes carbonated drinks</div></div>
  <div class="formula-row"><div class="fname">Water vapour</div>
    <div class="fexpr">Weather, clouds, the water cycle</div></div>
</div>

<h3>Comparing the air on Mars, Venus and Earth</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Planet</th><th>Main constituents</th></tr></thead>
  <tbody>
    <tr><td><b>Earth</b></td><td>N₂ 78%, O₂ 21%</td></tr>
    <tr><td><b>Mars</b></td><td>CO₂ ~95% — very thin atmosphere</td></tr>
    <tr><td><b>Venus</b></td><td>CO₂ ~96%, thick, extreme greenhouse effect</td></tr>
  </tbody>
</table>

<h2>Water treatment</h2>
<p>Raw water from rivers or reservoirs contains suspended solids, dissolved salts, microbes and dissolved gases.</p>

<div class="formula-box">
  <div class="fb-head">The treatment sequence</div>
  <div class="formula-row"><div class="fname">1. Screening</div>
    <div class="fexpr">Removes large floating debris (sticks, leaves, litter)</div></div>
  <div class="formula-row"><div class="fname">2. Sedimentation / coagulation</div>
    <div class="fexpr">Fine suspended particles settle; aluminium sulphate or ferric chloride added as coagulant to clump fine clay into "floc"</div></div>
  <div class="formula-row"><div class="fname">3. Filtration</div>
    <div class="fexpr">Water passes through sand and gravel beds — removes remaining solids and many microbes</div></div>
  <div class="formula-row"><div class="fname">4. Chlorination</div>
    <div class="fexpr">Kills remaining bacteria and prevents regrowth in pipes</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Order matters</b>
<p>Screening → sedimentation/coagulation → filtration → chlorination. Chlorine comes <b>last</b>, because it must kill organisms after the water is clear — sediment would shield bacteria from it. Expect an ordering question.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Hardness in water</b>
<p><b>Temporary hardness</b> — dissolved hydrogencarbonates, e.g. Ca(HCO₃)₂. Removed by <b>boiling</b> (decomposes to a carbonate precipitate) or by adding sodium carbonate (washing soda).<br>
<b>Permanent hardness</b> — dissolved sulphates and chlorides, e.g. CaSO₄. <b>Not</b> removed by boiling. Removed by ion exchange (sodium tetrasodium phosphate/"Calgon") or by adding sodium carbonate.<br>
Both types are removed by <b>distillation</b> and by ion-exchange resins.</p></div></div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why hardness is a problem</b>
<p>Hard water wastes soap — the Ca²⁺/Mg²⁺ ions form scum (calcium stearate) instead of lather, and leave "fur" (limescale) in kettles and boilers. Soft water is preferred for washing; very soft water can be slightly corrosive to pipes.</p></div></div>

<h2>Air pollution</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Pollutant</th><th>Source</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td><b>Sulphur dioxide, SO₂</b></td><td>Burning sulphur-containing fossil fuels; smelting; power stations</td><td>Acid rain; respiratory problems; bleaches foliage</td></tr>
    <tr><td><b>Oxides of nitrogen, NOₓ</b></td><td>High-temperature combustion in engines (N₂ + O₂ → 2NO)</td><td>Acid rain; photochemical smog; damages lungs</td></tr>
    <tr><td><b>Carbon monoxide, CO</b></td><td>Incomplete combustion</td><td>Highly toxic — binds haemoglobin, preventing oxygen transport</td></tr>
    <tr><td><b>Unburnt hydrocarbons</b></td><td>Incomplete combustion; evaporation of petrol</td><td>Photochemical smog; carcinogenic</td></tr>
    <tr><td><b>Particulates / soot</b></td><td>Diesel engines; industrial processes</td><td>Lung disease; reduces visibility; catalyses SO₂ oxidation</td></tr>
    <tr><td><b>Lead compounds</b></td><td>(Historically) leaded petrol</td><td>Neurotoxicity — now largely removed</td></tr>
  </tbody>
</table>

<h3>Acid rain</h3>
<div class="eq">SO₂ + ½O₂ → SO₃ &nbsp;&nbsp;·&nbsp;&nbsp; SO₃ + H₂O → H₂SO₄</div>
<div class="eq">2NO₂ + H₂O → HNO₃ + HNO₂</div>
<p>Normal rain is slightly acidic (pH ≈ 5.6) because CO₂ dissolves in it. <strong>Acid rain has pH below about 5</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Effect of acid rain</th><th>Detail</th></tr></thead>
  <tbody>
    <tr><td>Buildings and statues</td><td>Dissolves limestone (CaCO₃) and marble — erosion of stonework</td></tr>
    <tr><td>Lakes and rivers</td><td>Kills fish; aluminium leached from soil becomes toxic</td></tr>
    <tr><td>Forests</td><td>Damages leaves, leaches nutrients from soil</td></tr>
    <tr><td>Materials</td><td>Corrodes metals; attacks rubber and textiles</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why limestone reacts</b>
<p>Acid rain attacks limestone because CaCO₃ is a <b>base</b> — acid + carbonate → salt + water + CO₂. Metals like aluminium are attacked because their oxides are <b>amphoteric</b>. Sulphur dioxide also bleaches some dyes permanently (it reduces them), unlike chlorine's temporary bleach.</p></div></div>

<h3>Control measures</h3>
<ul>
<li><strong>Remove sulphur before burning</strong> — desulphurisation of coal and oil.</li>
<li><strong>Flue-gas desulphurisation</strong> — pass waste gases over calcium oxide or calcium hydroxide: CaO + SO₂ → CaSO₃.</li>
<li><strong>Catalytic converters</strong> in cars — convert CO, NOₓ and unburnt hydrocarbons into CO₂, N₂ and H₂O using platinum/rhodium catalysts.</li>
<li><strong>Electrostatic precipitators and filters</strong> — remove particulates.</li>
<li><strong>Leaded petrol replaced</strong> by unleaded; catalytic converters require lead-free fuel.</li>
<li><strong>Cleaner fuels</strong> — natural gas (methane) burns with far less SO₂ and soot than coal.</li>
<li><strong>Alternative energy</strong> — wind, solar, hydroelectric, nuclear.</li>
</ul>

<h2>The greenhouse effect</h2>
<p>Solar radiation reaches Earth mostly as visible light. The surface absorbs it and re-radiates it as <strong>infrared (heat)</strong>. Greenhouse gases absorb and re-emit this infrared, warming the lower atmosphere.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Greenhouse gas</th><th>Source</th></tr></thead>
  <tbody>
    <tr><td><b>Carbon dioxide</b></td><td>Combustion of fossil fuels; deforestation; respiration</td></tr>
    <tr><td><b>Methane, CH₄</b></td><td>Rice paddies; cattle; landfill; natural gas leaks</td></tr>
    <tr><td><b>Nitrous oxide, N₂O</b></td><td>Fertilisers; internal combustion engines</td></tr>
    <tr><td><b>Water vapour</b></td><td>Evaporation (the most abundant greenhouse gas)</td></tr>
    <tr><td><b>CFCs</b></td><td>Refrigerants, aerosols (also destroy ozone)</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Greenhouse ≠ ozone depletion</b>
<p>These are <b>different problems with different causes</b>. The greenhouse effect warms the planet (mainly CO₂, CH₄, N₂O). Ozone depletion lets more UV reach Earth (mainly CFCs over the poles). A question may deliberately conflate them — do not be caught.</p></div></div>

<h3>Consequences of enhanced global warming</h3>
<ul>
<li>Melting of polar ice and glaciers → rise in sea level</li>
<li>Thermal expansion of sea water</li>
<li>Climate shifts — altered rainfall, more droughts and floods</li>
<li>Threats to coral reefs and coastal habitats</li>
<li>Changes to agriculture and disease ranges</li>
</ul>

<h2>Ozone depletion</h2>
<p>Ozone (O₃) in the <strong>stratosphere</strong> absorbs harmful ultraviolet radiation.</p>
<div class="eq">O₃ + UV → O₂ + O &nbsp;&nbsp;·&nbsp;&nbsp; O + O₃ → 2O₂</div>
<p><strong>CFCs</strong> (chlorofluorocarbons) are broken down by UV to release chlorine radicals, which catalytically destroy ozone:</p>
<div class="eq">Cl• + O₃ → ClO• + O₂ &nbsp;&nbsp;·&nbsp;&nbsp; ClO• + O → Cl• + O₂</div>
<p>The chlorine radical is <strong>regenerated</strong>, so one radical destroys thousands of ozone molecules.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why a radical is a catalyst</b>
<p>Cl• is not consumed overall — it is regenerated after each cycle, making it a <b>catalyst</b> for ozone destruction. This is also why it is called a <b>chain reaction</b>. Recognising the catalyst in the ozone mechanism is a standard question.</p></div></div>

<h3>Effects of ozone depletion</h3>
<ul>
<li>Increased UV-B reaching Earth → more <strong>skin cancer and cataracts</strong></li>
<li>Damage to phytoplankton and crops</li>
<li>Weakened immune systems</li>
</ul>
<p><strong>Solutions:</strong> the Montreal Protocol (1987) phasing out CFCs; substitutes such as HFCs and HCFCs; responsible use of refrigerants.</p>

<h2>Chapter recap</h2>
<ul>
<li>Dry air: 78% N₂, 21% O₂, 0.9% Ar, 0.04% CO₂.</li>
<li>Water: screening → sedimentation/coagulation → filtration → chlorination.</li>
<li>Temporary hardness removed by boiling; permanent not; both by distillation/ion exchange.</li>
<li>SO₂ and NOₓ → acid rain; CO → toxic; hydrocarbons + NOₓ → smog.</li>
<li>Greenhouse warming ≠ ozone depletion; CFCs cause both kinds of harm.</li>
</ul>
`,
  quiz: [
    { q: 'The most abundant gas in clean dry air is', opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], a: 2, why: 'Nitrogen makes up about 78% by volume.' },
    { q: 'Oxygen constitutes approximately what percentage of dry air?', opts: ['50%', '33%', '21%', '10%'], a: 2, why: 'About 21% by volume — just over a fifth.' },
    { q: 'Carbon dioxide accounts for roughly', opts: ['0.04%', '4%', '21%', '10%'], a: 0, why: 'About 0.04% (400+ ppm) — a trace gas, though climatically significant.' },
    { q: 'In the treatment of water, chlorination is carried out last to', opts: ['Remove suspended solids', 'Kill bacteria after the water is clear', 'Adjust the pH', 'Remove dissolved salts'], a: 1, why: 'Sediment would shield microbes from chlorine, so disinfection follows clarification.' },
    { q: 'The chemical added as a coagulant to help fine particles settle in water treatment is', opts: ['Chlorine', 'Aluminium sulphate', 'Sodium hydroxide', 'Silver nitrate'], a: 1, why: 'Alum causes fine clay particles to clump into heavy floc that sinks.' },
    { q: 'Temporary hardness in water is removed by', opts: ['Distillation only', 'Boiling', 'Adding chlorine', 'Filtration through sand'], a: 1, why: 'Boiling decomposes dissolved calcium hydrogencarbonate to insoluble calcium carbonate.' },
    { q: 'Permanent hardness is caused by dissolved', opts: ['Calcium hydrogencarbonate', 'Calcium sulphate', 'Sodium chloride', 'Magnesium hydroxide'], a: 1, why: 'Sulphates and chlorides of calcium and magnesium do not decompose on boiling.' },
    { q: 'Which method removes both temporary and permanent hardness?', opts: ['Boiling', 'Adding sodium carbonate only', 'Distillation', 'Adding chlorine'], a: 2, why: 'Distillation leaves all dissolved salts behind, as does ion-exchange treatment.' },
    { q: 'Hard water causes soap to form', opts: ['More lather', 'Scum instead of lather', 'A gas', 'No change'], a: 1, why: 'Ca²⁺ and Mg²⁺ ions react with soap to form insoluble calcium stearate (scum).' },
    { q: 'The gas chiefly responsible for acid rain from coal-fired power stations is', opts: ['Carbon dioxide', 'Sulphur dioxide', 'Nitrogen', 'Methane'], a: 1, why: 'Burning sulphur impurities produces SO₂, which oxidises to sulphuric acid.' },
    { q: 'Oxides of nitrogen in the atmosphere are formed mainly by', opts: ['Photosynthesis', 'High-temperature combustion of air in engines', 'Volcanoes only', 'Decaying vegetation'], a: 1, why: 'The high heat of an engine makes N₂ and O₂ combine: N₂ + O₂ → 2NO.' },
    { q: 'Carbon monoxide is dangerous because it', opts: ['Is an irritant', 'Combines with haemoglobin and prevents oxygen transport', 'Causes acid rain', 'Destroys ozone'], a: 1, why: 'CO binds haemoglobin about 200× more tightly than oxygen, causing suffocation.' },
    { q: 'The pH of normal rainwater is about', opts: ['7', '5.6', '2', '14'], a: 1, why: 'Dissolved CO₂ forms weak carbonic acid, so unpolluted rain is slightly acidic at about pH 5.6; acid rain falls below about pH 5.' },
    { q: 'A catalytic converter reduces pollution by converting', opts: ['CO, NOₓ and hydrocarbons into CO₂, N₂ and H₂O', 'CO₂ into oxygen', 'Sulphur into sulphate', 'Nitrogen into ammonia'], a: 0, why: 'Platinum and rhodium catalyse oxidation of CO/hydrocarbons and reduction of NOₓ.' },
    { q: 'Unleaded petrol is required for vehicles with catalytic converters because lead', opts: ['Increases the octane rating', 'Poisons (deactivates) the catalyst', 'Is a greenhouse gas', 'Makes the fuel burn hotter'], a: 1, why: 'Lead deposits on the catalyst surface and permanently destroy its activity.' },
    { q: 'The greenhouse effect warms the Earth because greenhouse gases', opts: ['Reflect sunlight back to space', 'Absorb and re-emit infrared radiation from the surface', 'Produce heat by chemical reaction', 'Increase the density of the atmosphere'], a: 1, why: 'Solar energy arrives as visible light, leaves as infrared, and is trapped by these gases.' },
    { q: 'The most significant greenhouse gas emitted by cattle and rice paddies is', opts: ['Carbon dioxide', 'Methane', 'Nitrous oxide', 'Argon'], a: 1, why: 'CH₄ from enteric fermentation in ruminants and anaerobic decay in paddy fields.' },
    { q: 'CFCs damage the ozone layer by releasing', opts: ['Bromine atoms only', 'Chlorine radicals that catalytically destroy ozone', 'Hydrogen ions', 'Carbon dioxide'], a: 1, why: 'UV splits CFCs to give Cl•, which reacts with O₃ and is regenerated — a catalytic chain.' },
    { q: 'Increased ultraviolet radiation reaching Earth results in', opts: ['More acid rain', 'More skin cancer and cataracts', 'Lower sea levels', 'Increased ozone'], a: 1, why: 'UV-B damages DNA in skin cells and the lens of the eye.' },
    { q: 'The international agreement phasing out CFCs is the', opts: ['Kyoto Protocol', 'Montreal Protocol', 'Paris Agreement', 'Geneva Convention'], a: 1, why: 'Signed in 1987 to protect the stratospheric ozone layer.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'metals',
  title: 'Metals and their Compounds',
  blurb: 'The reactivity series, extraction of metals, alloys and the properties of common metals.',
  time: '60 min',
  objectives: [
    'State the reactivity series and predict reactions from it',
    'Explain the extraction of iron, aluminium and copper',
    'Describe the formation and properties of alloys',
    'Explain rusting and methods of prevention',
    'Apply displacement, thermite and electrolytic reduction'
  ],
  body: `
<p class="lead">The reactivity series is the backbone of inorganic Chemistry. It tells you which metals displace which, how each metal is extracted, how it behaves with water and acid, and even how it is stored. Memorise the order once and a large fraction of inorganic questions answer themselves.</p>

<h2>The reactivity series</h2>
<div class="formula-box">
  <div class="fb-head">From most to least reactive</div>
  <div class="formula-row"><div class="fname">Order</div>
    <div class="fexpr"><b>K · Na · Ca · Mg · Al · Zn · Fe · Pb · (H) · Cu · Ag · Au</b></div>
    <div class="fnote">Hydrogen is included as the reference point for acid reactions.</div></div>
  <div class="formula-row"><div class="fname">Useful grouping</div>
    <div class="fexpr">K Na Ca Mg Al — above H, react with water/acid<br>Zn Fe Pb — above H, react with acid (Fe reacts slowly)<br>Cu Ag Au — below H, no reaction with dilute acid</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>What the series predicts</b>
<p><b>Displacement:</b> a more reactive metal displaces a less reactive one from its compounds.<br>
<b>Extraction:</b> very reactive → electrolysis; moderately reactive → carbon reduction; unreactive → found native or roasted.<br>
<b>Reaction with water:</b> K/Na react cold and vigorously; Ca/Mg react slowly or with steam; Zn and below do not.<br>
<b>Storage:</b> K/Na under oil; others in air.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Predicting a displacement</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Question</div>
    Will magnesium displace copper from copper(II) sulphate?</div>
    <div class="step"><div class="step-l">Compare positions</div>
    Mg is <b>above</b> Cu in the series → Mg is more reactive</div>
    <div class="step"><div class="step-l">Prediction</div>
    Yes: Mg + CuSO₄ → MgSO₄ + Cu</div>
    <div class="ans">Answer: yes — the more reactive metal displaces the less reactive one</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Reactivity relates to ease of losing electrons</b>
<p>The more reactive a metal, the more readily it forms a positive ion — the lower its ionisation energy. This is why potassium is more reactive than sodium: its outer electron is further from the nucleus and shielded.</p></div></div>

<h2>Extraction of metals</h2>

<h3>Iron — blast furnace</h3>
<div class="eq">Fe₂O₃ + 3CO → 2Fe + 3CO₂</div>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Input</th><th>Role</th></tr></thead>
  <tbody>
    <tr><td><b>Haematite, Fe₂O₃</b></td><td>Ore — the source of iron</td></tr>
    <tr><td><b>Coke, C</b></td><td>Combusts to give heat and CO₂; provides the reducing agent</td></tr>
    <tr><td><b>Air</b> (hot blast)</td><td>Supplies oxygen for combustion of coke</td></tr>
    <tr><td><b>Limestone, CaCO₃</b></td><td>Removes sandy impurities (flux → slag)</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Reactions in the blast furnace</div>
  <div class="formula-row"><div class="fname">Hot zone (bottom)</div>
    <div class="fexpr">C + O₂ → CO₂ &nbsp;&nbsp;(exothermic, ~1900 °C)</div></div>
  <div class="formula-row"><div class="fname">Reduction by CO</div>
    <div class="fexpr">3CO + Fe₂O₃ → 2Fe + 3CO₂</div>
    <div class="fnote">CO is the main reducing agent for iron ore.</div></div>
  <div class="formula-row"><div class="fname">Making more CO</div>
    <div class="fexpr">CO₂ + C → 2CO</div></div>
  <div class="formula-row"><div class="fname">Removing impurity</div>
    <div class="fexpr">CaCO₃ → CaO + CO₂ &nbsp;&nbsp;then&nbsp;&nbsp; CaO + SiO₂ → CaSiO₃ (slag)</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Limestone's job</b>
<p>Limestone is <b>not</b> there to reduce the iron — it is a <b>flux</b> that removes sandy (silica) impurities as molten slag. The reducing agent is <b>carbon monoxide</b>. Confusing these two loses easy marks.</p></div></div>

<h3>Aluminium — electrolysis (Hall–Héroult)</h3>
<div class="eq">2Al₂O₃ (molten) → 4Al + 3O₂</div>
<ul>
<li>Aluminium is <b>too reactive</b> for carbon reduction — carbon would not reduce Al₂O₃ at available temperatures.</li>
<li>Electrolysis in a carbon-lined cell; the <b>carbon anode burns away</b> to CO/CO₂ (hence consumed).</li>
<li><strong>Cryolite (Na₃AlF₆)</strong> lowers the melting point from 2050 °C to ~1000 °C, saving energy.</li>
<li>Aluminium is protected by a tough, inert oxide layer — which is why it resists corrosion and is used for aircraft and cooking foil.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why aluminium is extracted by electrolysis but iron by reduction</b>
<p>Aluminium is <b>above carbon</b> in the reactivity series (more reactive than carbon), so carbon cannot displace it. Iron is below carbon, so CO or C can reduce its oxide. The position in the series determines the extraction method — a very common question.</p></div></div>

<h3>Copper</h3>
<ul>
<li>From low-grade sulphide ores such as <strong>chalcopyrite, CuFeS₂</strong>.</li>
<li><strong>Roasting then smelting:</strong> 2CuFeS₂ + O₂ → 2FeS + 2Cu₂S + SO₂, then further oxidation.</li>
<li><strong>Electrolytic refining:</strong> impure copper anode, pure copper cathode, acidified copper sulphate electrolyte. Copper dissolves at the anode and deposits pure at the cathode; impurities form "anode mud" containing silver and gold.</li>
</ul>

<div class="note note-fact"><span class="ico">📌</span><div><b>Native metals</b>
<p>Only the <b>least reactive</b> metals — gold, silver, platinum — are found native (uncombined) in nature. Reactive metals are always found as compounds because they have reacted with their surroundings.</p></div></div>

<h2>Alloys</h2>
<blockquote>An <strong>alloy</strong> is a mixture of a metal with one or more other elements (metals or non-metals).</blockquote>
<p>Alloying <strong>disrupts the regular layers of atoms</strong>, so the layers cannot slide over each other easily — the metal becomes <strong>harder and stronger</strong> than the pure metal.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Alloy</th><th>Components</th><th>Property / use</th></tr></thead>
  <tbody>
    <tr><td><b>Steel</b></td><td>Iron + small carbon</td><td>Strong, tough — construction, tools</td></tr>
    <tr><td><b>Stainless steel</b></td><td>Iron + carbon + chromium + nickel</td><td>Resists corrosion — cutlery, surgical instruments</td></tr>
    <tr><td><b>Brass</b></td><td>Copper + zinc</td><td>Corrosion-resistant, decorative — fittings, instruments</td></tr>
    <tr><td><b>Bronze</b></td><td>Copper + tin</td><td>Hard, low friction — bells, bearings</td></tr>
    <tr><td><b>Solder</b></td><td>Tin + lead</td><td>Low melting point — joining metals, plumbing</td></tr>
    <tr><td><b>Duralumin</b></td><td>Aluminium + copper + manganese</td><td>Light and strong — aircraft</td></tr>
    <tr><td><b>Amalgam</b></td><td>Metal + mercury</td><td>Dental fillings</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why alloys are harder</b>
<p>Different-sized atoms <b>prevent the layers from sliding</b>. State the reason, not just "alloys are harder". The explanation is what earns the mark.</p></div></div>

<h2>Rusting of iron</h2>
<blockquote><strong>Rusting</strong> is the oxidation of iron in the presence of <b>both water and oxygen</b>, forming hydrated iron(III) oxide, Fe₂O₃·xH₂O.</blockquote>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Condition</th><th>Rusts?</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Iron in air only (dry)</td><td>No</td><td>No water</td></tr>
    <tr><td>Iron in boiled water covered with oil (no O₂)</td><td>No</td><td>No oxygen</td></tr>
    <tr><td>Iron in water exposed to air</td><td><b>Yes — fastest</b></td><td>Both required</td></tr>
  </tbody>
</table>

<h3>Preventing rust</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Method</th><th>How it works</th></tr></thead>
  <tbody>
    <tr><td><b>Paint, grease, oil, plastic coating</b></td><td>Barrier — excludes water and oxygen</td></tr>
    <tr><td><b>Galvanising</b> (zinc coating)</td><td>Barrier <b>and</b> sacrificial protection — zinc oxidises in preference to iron</td></tr>
    <tr><td><b>Sacrificial protection</b></td><td>A more reactive metal (Zn or Mg) is attached; it corrodes instead (ships, pipelines)</td></tr>
    <tr><td><b>Alloying</b> — stainless steel</td><td>Chromium forms a protective oxide layer</td></tr>
    <tr><td><b>Electroplating</b> (chromium, tin, nickel)</td><td>Barrier coating; also decorative</td></tr>
    <tr><td><b>Cathodic protection</b></td><td>Impressed current or a sacrificial anode</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Galvanising vs tin-plating</b>
<p><b>Galvanising (Zn)</b> protects even when scratched — zinc is more reactive than iron and sacrifices itself. <b>Tin-plating</b> protects only while intact — tin is <em>less</em> reactive than iron, so a scratch makes the iron rust <b>faster</b> (forming a galvanic cell where iron is the anode). This contrast is a classic question.</p></div></div>

<h2>Other important metal chemistry</h2>
<h3>Sodium and potassium</h3>
<ul>
<li>Stored <strong>under oil</strong> — react vigorously with oxygen and moisture.</li>
<li>React with water: 2Na + 2H₂O → 2NaOH + H₂. The hydrogen may ignite, giving an orange flame (Na) or lilac (K).</li>
<li>Not prepared by electrolysis of their chlorides in industry for cost reasons in most cases; sodium by <strong>electrolysis of molten NaCl (Downs cell)</strong>.</li>
</ul>

<h3>Calcium</h3>
<ul>
<li>From <strong>electrolysis of molten calcium chloride</strong> (from limestone).</li>
<li>Reacts with water more slowly than Na: Ca + 2H₂O → Ca(OH)₂ + H₂.</li>
<li>Used in steelmaking (removes sulphur/phosphorus), cement, and as a drying agent (CaO).</li>
</ul>

<h3>Zinc</h3>
<ul>
<li>Roasted then reduced with carbon: ZnO + C → Zn + CO.</li>
<li>Used for galvanising and in dry cells.</li>
</ul>

<div class="note note-fact"><span class="ico">📌</span><div><b>Amphoteric metals</b>
<p>Zinc, aluminium and lead oxides/hydroxides react with <b>both</b> acids and alkali. This is exploited industrially to separate aluminium from iron oxide (Al₂O₃ dissolves in NaOH, Fe₂O₃ does not).</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>K Na Ca Mg Al Zn Fe Pb (H) Cu Ag Au — more reactive = loses electrons more easily.</li>
<li>Iron: blast furnace, CO reduction, limestone flux → slag.</li>
<li>Aluminium: electrolysis of molten Al₂O₃ with cryolite (above carbon in the series).</li>
<li>Copper: electrolytic refining; impurities as anode mud.</li>
<li>Alloys are harder because layers cannot slide.</li>
<li>Rust needs water AND oxygen; zinc sacrifices, tin does not.</li>
</ul>
`,
  quiz: [
    { q: 'The most reactive metal in the series is', opts: ['Sodium', 'Potassium', 'Calcium', 'Magnesium'], a: 1, why: 'Potassium sits at the top of the reactivity series used in JAMB.' },
    { q: 'A more reactive metal can displace a less reactive metal from', opts: ['Its compound', 'Its alloy', 'Pure metal', 'Its oxide only'], a: 0, why: 'Displacement: the more reactive metal forms the compound, releasing the less reactive one.' },
    { q: 'Which metal will displace copper from copper(II) sulphate solution?', opts: ['Silver', 'Gold', 'Zinc', 'Platinum'], a: 2, why: 'Zinc is above copper in the series; silver, gold and platinum are below it.' },
    { q: 'Metals below hydrogen in the reactivity series', opts: ['React vigorously with dilute acids', 'Do not react with dilute acids', 'React with water', 'Are always gases'], a: 1, why: 'They cannot displace hydrogen from acids — Cu, Ag and Pt give no reaction.' },
    { q: 'The reducing agent in the blast furnace is', opts: ['Carbon dioxide', 'Carbon monoxide', 'Limestone', 'Oxygen'], a: 1, why: 'CO reduces Fe₂O₃ to iron; carbon provides heat and generates more CO.' },
    { q: 'Limestone is added to the blast furnace to', opts: ['Reduce the iron ore', 'Remove sandy impurities as slag', 'Supply oxygen', 'Cool the furnace'], a: 1, why: 'It is a flux: CaCO₃ → CaO, then CaO + SiO₂ → CaSiO₃ slag.' },
    { q: 'Aluminium is extracted by electrolysis rather than carbon reduction because', opts: ['It has a low melting point', 'It is more reactive than carbon', 'Its ore is impure', 'Carbon does not exist'], a: 1, why: 'Being above carbon in the series, aluminium cannot be displaced by carbon.' },
    { q: 'Cryolite is added during aluminium extraction to', opts: ['Act as the reducing agent', 'Lower the melting point of the oxide', 'Remove iron impurities', 'Colour the aluminium'], a: 1, why: 'It reduces the operating temperature from 2050 °C to about 1000 °C, saving electricity.' },
    { q: 'During the electrolysis of aluminium oxide, the carbon anode', opts: ['Is permanent', 'Burns away and must be replaced', 'Plates the aluminium', 'Produces hydrogen'], a: 1, why: 'It reacts with the oxygen liberated to form CO and CO₂.' },
    { q: 'Alloys are harder than pure metals because', opts: ['They have higher melting points', 'Different-sized atoms prevent the layers from sliding', 'They contain more electrons', 'They are always denser'], a: 1, why: 'The regular layer structure is disrupted, so layers cannot slip under stress.' },
    { q: 'Which alloy contains copper and zinc?', opts: ['Bronze', 'Brass', 'Solder', 'Steel'], a: 1, why: 'Brass = Cu + Zn; bronze = Cu + Sn; solder = Sn + Pb.' },
    { q: 'Rusting of iron requires', opts: ['Oxygen only', 'Water only', 'Both water and oxygen', 'Carbon dioxide'], a: 2, why: 'Iron rusts only when both are present — proven by the classic three-test-tube experiment.' },
    { q: 'Galvanising protects iron by coating it with', opts: ['Tin', 'Copper', 'Zinc', 'Chromium'], a: 2, why: 'Zinc both barriers the surface and sacrifices itself if scratched.' },
    { q: 'A tin-plated iron can rusts faster once scratched because tin', opts: ['Is more reactive than iron', 'Is less reactive than iron, making iron the anode', 'Is a noble metal', 'Forms a protective oxide'], a: 1, why: 'Iron becomes the anode of a galvanic cell and corrodes preferentially.' },
    { q: 'Sodium is stored under oil because it', opts: ['Is too dense for water', 'Reacts vigorously with air and moisture', 'Melts in air', 'Is a liquid at room temperature'], a: 1, why: 'It would rapidly form oxide and hydroxide in contact with oxygen and water vapour.' },
    { q: 'Metals found native (uncombined) in nature are', opts: ['The most reactive ones', 'The least reactive ones', 'All transition metals', 'Alkali metals'], a: 1, why: 'Gold, silver and platinum are unreactive enough to escape combination with other elements.' },
    { q: 'Zinc oxide is described as amphoteric because it reacts with', opts: ['Acids only', 'Bases only', 'Both acids and bases', 'Neither'], a: 2, why: 'Amphoteric substances dissolve in both — ZnO, Al₂O₃ and PbO behave this way.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'nonmetals',
  title: 'Sulphur, Nitrogen and their Compounds',
  blurb: 'Manufacture of sulphuric and nitric acid, ammonia, fertilisers, and the halogens’ compounds.',
  time: '60 min',
  objectives: [
    'Describe the Contact process and the Haber process',
    'Explain the Ostwald process for nitric acid',
    'State the properties and uses of sulphuric acid, ammonia and nitric acid',
    'Classify fertilisers (NPK) and describe eutrophication',
    'Describe the preparation and reactions of hydrochloric acid and chlorides'
  ],
  body: `
<p class="lead">This chapter covers the industrial heart of Chemistry — the three great acids and ammonia — plus the fertiliser industry built on them. JAMB asks for <strong>equations, conditions and uses</strong>. Learn the processes as packages: raw materials, conditions, equation, uses.</p>

<h2>Sulphur</h2>
<p>Recovered from <strong>volcanic deposits</strong> and, more importantly, from <strong>desulphurisation of natural gas and petroleum</strong>.</p>
<div class="eq">H₂S + ½O₂ → S + H₂O &nbsp;&nbsp;(Claus process)</div>
<p>Most sulphuric acid is now made from the sulphur recovered during oil refining — a self-sustaining cycle in which the sulphur removed to prevent pollution becomes the feedstock for acid manufacture.</p>

<h2>The Contact process — sulphuric acid</h2>
<div class="formula-box">
  <div class="fb-head">Contact process</div>
  <div class="formula-row"><div class="fname">Stage 1 — burn sulphur</div>
    <div class="fexpr">S(s) + O₂(g) → SO₂(g)</div></div>
  <div class="formula-row"><div class="fname">Stage 2 — catalytic oxidation</div>
    <div class="fexpr">2SO₂(g) + O₂(g) ⇌ 2SO₃(g) &nbsp;&nbsp;ΔH = −196 kJ mol⁻¹</div>
    <div class="fnote">V₂O₅ catalyst, ~450 °C, about 2 atm</div></div>
  <div class="formula-row"><div class="fname">Stage 3 — absorption</div>
    <div class="fexpr">SO₃ + H₂SO₄ → H₂S₂O₇ (oleum) &nbsp;then&nbsp; H₂S₂O₇ + H₂O → 2H₂SO₄</div>
    <div class="fnote">SO₃ is NOT dissolved directly in water — the reaction is too violent and forms a mist.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why oleum, not direct hydration?</b>
<p>Directly adding SO₃ to water produces a dense, corrosive acid mist that is hard to condense. Instead SO₃ is absorbed in <b>concentrated sulphuric acid</b> to give oleum, which is later diluted. This is a frequent short-answer question.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Temperature is a compromise again</b>
<p>The reaction is exothermic, so low temperature favours yield — but the rate would be uneconomic. <b>~450 °C</b> with <b>V₂O₅</b> is a compromise. Pressure is only moderate (2 atm) because the yield is already acceptable; high pressure would be expensive and unnecessary.</p></div></div>

<h3>Properties and uses of sulphuric acid</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>Strong acid</td><td>Manufacture of fertilisers, detergents, dyes</td></tr>
    <tr><td>Dehydrating agent</td><td>Desiccant in drying cabinets; sugars to carbon (blackening of sugar/cloth)</td></tr>
    <tr><td>Strong oxidising agent (hot, conc.)</td><td>Preparation of gases; oxidises metals and non-metals</td></tr>
    <tr><td>High boiling point (337 °C)</td><td>Used to prepare less volatile acids such as HCl and HNO₃ by distillation</td></tr>
    <tr><td>Preparation of other chemicals</td><td>Phosphate fertilisers, paints, pharmaceuticals</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Which acid to use — a classic experiment</div>
  <div class="formula-row"><div class="fname">To prepare HCl gas</div>
    <div class="fexpr">NaCl + H₂SO₄ → NaHSO₄ + HCl↑</div>
    <div class="fnote">Sulphuric acid is used because HCl is volatile and can be driven off.</div></div>
  <div class="formula-row"><div class="fname">To prepare HNO₃</div>
    <div class="fexpr">NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃↑</div>
    <div class="fnote">Uses the high boiling point of H₂SO₄.</div></div>
  <div class="formula-row"><div class="fname">NOT for preparing H₂S</div>
    <div class="fexpr">H₂SO₄ would <b>oxidise</b> H₂S to sulphur instead of letting it escape</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Which acid is used for which salt?</b>
<p>Use <b>sulphuric acid</b> to make chlorides and nitrates (both volatile, driven off by distillation). Do <b>not</b> use it to make a sulphate (it IS the sulphate) or H₂S (it would oxidise it). Use <b>HCl</b> when you want a sulphate. This selection logic appears every year.</p></div></div>

<h2>Ammonia — the Haber process</h2>
<div class="formula-box">
  <div class="fb-head">Haber process</div>
  <div class="formula-row"><div class="fname">Equation</div>
    <div class="fexpr">N₂(g) + 3H₂(g) ⇌ 2NH₃(g) &nbsp;&nbsp;ΔH = −92 kJ mol⁻¹</div></div>
  <div class="formula-row"><div class="fname">Raw materials</div>
    <div class="fexpr">Nitrogen from <b>fractional distillation of liquid air</b>; hydrogen from <b>steam reforming of natural gas</b></div></div>
  <div class="formula-row"><div class="fname">Conditions</div>
    <div class="fexpr">~450 °C · ~200 atm · iron catalyst with K₂O/Al₂O₃ promoters</div></div>
  <div class="formula-row"><div class="fname">Why these conditions</div>
    <div class="fexpr">High pressure favours fewer gas moles (right); low temperature favours exothermic direction but is too slow — 450 °C is a <b>compromise</b></div></div>
</div>

<p><strong>Properties of ammonia:</strong> colourless gas, pungent smell, very soluble in water (gives an alkaline solution), turns damp red litmus <strong>blue</strong>.</p>

<div class="formula-box">
  <div class="fb-head">Key ammonia reactions</div>
  <div class="formula-row"><div class="fname">In water</div>
    <div class="fexpr">NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</div>
    <div class="fnote">The hydroxide ions make it alkaline.</div></div>
  <div class="formula-row"><div class="fname">With acid (white fumes)</div>
    <div class="fexpr">NH₃ + HCl → NH₄Cl</div>
    <div class="fnote">The standard test: white smoke of ammonium chloride.</div></div>
  <div class="formula-row"><div class="fname">Lab preparation</div>
    <div class="fexpr">2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃</div></div>
</div>

<h2>Nitric acid — the Ostwald process</h2>
<div class="formula-box">
  <div class="fb-head">Ostwald process</div>
  <div class="formula-row"><div class="fname">Step 1 — catalytic oxidation</div>
    <div class="fexpr">4NH₃ + 5O₂ → 4NO + 6H₂O &nbsp;&nbsp;(Pt/Rh catalyst, ~800 °C)</div></div>
  <div class="formula-row"><div class="fname">Step 2 — oxidation</div>
    <div class="fexpr">2NO + O₂ → 2NO₂</div></div>
  <div class="formula-row"><div class="fname">Step 3 — absorption in water</div>
    <div class="fexpr">3NO₂ + H₂O → 2HNO₃ + NO</div>
    <div class="fnote">The NO is recycled back to step 2.</div></div>
</div>

<h3>Nitric acid</h3>
<ul>
<li>A <strong>strong oxidising acid</strong> — it does not release hydrogen on reaction with metals (except very dilute with Mg/Mn).</li>
<li>With copper it produces <strong>NO</strong> when dilute and <strong>NO₂</strong> when concentrated:</li>
</ul>
<div class="eq">3Cu + 8HNO₃(dil) → 3Cu(NO₃)₂ + 2NO + 4H₂O</div>
<div class="eq">Cu + 4HNO₃(conc) → Cu(NO₃)₂ + 2NO₂ + 2H₂O</div>
<p><strong>Uses:</strong> manufacture of fertilisers, explosives (TNT, nitroglycerine), dyes, drugs, and as a nitrating agent in organic Chemistry.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Dilute vs concentrated nitric acid</b>
<p>Dilute HNO₃ gives colourless <b>NO</b>; concentrated HNO₃ gives brown, choking <b>NO₂</b>. This gas distinction is a standard practical question.</p></div></div>

<h2>Fertilisers</h2>
<p>Plants need <strong>N, P and K</strong> (plus Ca, Mg, S, and trace elements).</p>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Fertiliser</th><th>Element supplied</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Nitrogen</b> fertilisers</td><td>N — for protein and leaf growth</td><td>Ammonium nitrate (NH₄NO₃), urea (CO(NH₂)₂), ammonium sulphate</td></tr>
    <tr><td><b>Phosphate</b> fertilisers</td><td>P — for roots, flowers, fruit</td><td>Calcium trioxophosphate(V), superphosphate</td></tr>
    <tr><td><b>Potassium</b> fertilisers</td><td>K — for general health and disease resistance</td><td>Potassium chloride (KCl), potassium nitrate</td></tr>
    <tr><td><b>NPK</b> fertilisers</td><td>All three</td><td>Mixtures used widely in farming</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">How fertilisers are made</div>
  <div class="formula-row"><div class="fname">Ammonium nitrate</div>
    <div class="fexpr">NH₃ + HNO₃ → NH₄NO₃</div></div>
  <div class="formula-row"><div class="fname">Urea</div>
    <div class="fexpr">2NH₃ + CO₂ → CO(NH₂)₂ + H₂O</div></div>
  <div class="formula-row"><div class="fname">Phosphate rock + acid</div>
    <div class="fexpr">Ca₃(PO₄)₂ + 4H₂SO₄ → 2CaSO₄ + Ca(H₂PO₄)₂ &nbsp;(superphosphate)</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Eutrophication — the chain</b>
<p>Nitrates (from fertiliser runoff) wash into lakes → <b>algal bloom</b> blocks light → submerged plants <b>die</b> → bacteria decompose them and <b>consume dissolved oxygen</b> → fish and other aerobic organisms <b>suffocate</b>. Each step is worth a mark — learn it as a sequence.</p></div></div>

<h2>Hydrochloric acid and chlorides</h2>
<div class="formula-box">
  <div class="fb-head">Preparation</div>
  <div class="formula-row"><div class="fname">Laboratory</div>
    <div class="fexpr">NaCl + H₂SO₄ → NaHSO₄ + HCl↑</div>
    <div class="fnote">HCl is soluble, so gas is passed into water using a funnel to prevent suck-back.</div></div>
  <div class="formula-row"><div class="fname">Industrial</div>
    <div class="fexpr">H₂ + Cl₂ → 2HCl &nbsp;(burning hydrogen in chlorine)</div></div>
</div>

<h3>Properties of hydrochloric acid</h3>
<ul>
<li>Strong acid: ionises completely.</li>
<li>Reacts with metals → salt + hydrogen; with carbonates → salt + water + CO₂; with alkalis → salt + water.</li>
<li>Reacts with silver nitrate to give a <strong>white precipitate of silver chloride</strong>, soluble in ammonia:</li>
</ul>
<div class="eq">AgNO₃ + NaCl → AgCl↓ + NaNO₃</div>

<h3>Solubility of chlorides</h3>
<ul>
<li><b>All</b> chlorides are soluble <b>except</b> silver chloride (AgCl) and lead(II) chloride (PbCl₂).</li>
<li>PbCl₂ dissolves in <b>hot water</b> — useful in separation.</li>
</ul>

<h3>Chlorides of sodium and calcium</h3>
<ul>
<li><strong>NaCl</strong> — obtained by evaporation of sea water (solar evaporation) and by mining rock salt. Used in food preservation, chlorine and sodium hydroxide manufacture, and as a food seasoning.</li>
<li><strong>CaCl₂</strong> — from limestone + HCl. Used as a desiccant, for de-icing roads, and to control dust on roads.</li>
</ul>

<div class="note note-fact"><span class="ico">📌</span><div><b>Different chlorides, different uses</b>
<p>NaCl = table salt and chemical feedstock. CaCl₂ = drying agent and road de-icer. NH₄Cl = dry cells and soldering flux. PbCl₂ = (limited) pigments. Match the use to the compound.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Contact: S → SO₂ → SO₃ (V₂O₅, 450 °C) → oleum → H₂SO₄.</li>
<li>Haber: N₂ + 3H₂ ⇌ 2NH₃ (iron, 450 °C, 200 atm, exothermic).</li>
<li>Ostwald: NH₃ → NO → NO₂ → HNO₃ (Pt/Rh).</li>
<li>H₂SO₄ prepares HCl and HNO₃ (volatile) but not H₂S (would oxidise it).</li>
<li>NPK fertilisers; eutrophication chain: nitrate → algae → decay → oxygen depletion.</li>
<li>All chlorides soluble except AgCl and PbCl₂.</li>
</ul>
`,
  quiz: [
    { q: 'The catalyst used in the Contact process is', opts: ['Iron', 'Platinum', 'Vanadium(V) oxide', 'Nickel'], a: 2, why: 'V₂O₅ at about 450 °C oxidises SO₂ to SO₃.' },
    { q: 'In the Contact process, sulphur trioxide is absorbed in', opts: ['Water directly', 'Concentrated sulphuric acid to form oleum', 'Sodium hydroxide', 'Ammonia solution'], a: 1, why: 'Direct hydration produces a corrosive mist; oleum is formed then diluted.' },
    { q: 'The conditions in the Contact process are approximately', opts: ['450 °C and 2 atm', '1000 °C and 100 atm', '20 °C and 1 atm', '450 °C and 200 atm'], a: 0, why: 'Around 450 °C with V₂O₅ and only a few atmospheres — a rate/yield/cost compromise.' },
    { q: 'Concentrated sulphuric acid is used to prepare hydrochloric acid gas because', opts: ['It is cheap', 'It has a high boiling point and HCl is volatile', 'It is a strong oxidising agent', 'It dissolves sodium chloride'], a: 1, why: 'H₂SO₄ is non-volatile, so HCl is displaced and distils off.' },
    { q: 'Concentrated sulphuric acid cannot be used to prepare hydrogen sulphide because it', opts: ['Is not an acid', 'Would oxidise H₂S to sulphur', 'Is too dilute', 'Reacts too slowly'], a: 1, why: 'H₂SO₄ is a strong oxidising acid and would oxidise the H₂S produced.' },
    { q: 'Concentrated sulphuric acid blackens sugar because it acts as a', opts: ['Dehydrating agent', 'Reducing agent', 'Catalyst', 'Base'], a: 0, why: 'It removes the elements of water (H and O) from sucrose, leaving black carbon.' },
    { q: 'The raw materials for the Haber process are', opts: ['Methane and oxygen', 'Nitrogen and hydrogen', 'Ammonia and oxygen', 'Nitrogen and oxygen'], a: 1, why: 'N₂ from liquid air and H₂ from steam reforming of natural gas.' },
    { q: 'Conditions in the Haber process are', opts: ['Low pressure, high temperature', '200 atm, 450 °C, iron catalyst', '1 atm, 100 °C, no catalyst', '200 atm, 100 °C, platinum'], a: 1, why: 'High pressure favours ammonia; 450 °C and iron are a rate/yield compromise.' },
    { q: 'The Haber process is exothermic, so a low temperature would', opts: ['Increase the yield', 'Decrease the rate unacceptably', 'Have no effect', 'Reverse the reaction'], a: 1, why: 'Low temperature maximises yield but makes the reaction impractically slow.' },
    { q: 'Ammonia turns damp red litmus paper', opts: ['Red', 'Blue', 'Green', 'Yellow'], a: 1, why: 'NH₃ dissolves to give OH⁻ ions, making the solution alkaline.' },
    { q: 'The white fumes formed when ammonia meets hydrogen chloride are', opts: ['NH₄Cl', 'NH₄NO₃', 'NaCl', 'H₂O'], a: 0, why: 'Solid particles of ammonium chloride form in the gas phase — a classic test for ammonia.' },
    { q: 'The catalyst in the Ostwald process for nitric acid is', opts: ['V₂O₅', 'Iron', 'Platinum–rhodium', 'Nickel'], a: 2, why: 'Pt/Rh gauze at about 800 °C catalyses oxidation of ammonia to NO.' },
    { q: 'Concentrated nitric acid reacting with copper produces', opts: ['Hydrogen', 'Colourless NO', 'Brown NO₂', 'Ammonia'], a: 2, why: 'Concentrated HNO₃ gives brown NO₂; the dilute acid gives colourless NO.' },
    { q: 'Nitric acid is a strong oxidising acid, so with metals it usually produces', opts: ['Hydrogen gas', 'Oxides of nitrogen instead of hydrogen', 'Chlorine', 'Water only'], a: 1, why: 'The acid is reduced to NO or NO₂ rather than liberating H₂.' },
    { q: 'The element supplied by nitrogenous fertilisers for leaf growth is', opts: ['Phosphorus', 'Potassium', 'Nitrogen', 'Calcium'], a: 2, why: 'Nitrogen is needed for proteins and chlorophyll — hence vigorous leafy growth.' },
    { q: 'A fertiliser supplying N, P and K is described as', opts: ['NPK', 'DAP', 'Superphosphate', 'Urea'], a: 0, why: 'NPK blends contain all three primary nutrients.' },
    { q: 'Eutrophication kills fish chiefly because', opts: ['Algae poison them directly', 'Bacterial decomposition depletes dissolved oxygen', 'The water becomes too acidic', 'Nitrates are toxic'], a: 1, why: 'Decomposing algal blooms consume the oxygen fish need to breathe.' },
    { q: 'Which pair of chlorides is insoluble in water?', opts: ['NaCl and KCl', 'AgCl and PbCl₂', 'CaCl₂ and BaCl₂', 'NH₄Cl and MgCl₂'], a: 1, why: 'Silver chloride and lead(II) chloride are the two notable exceptions.' },
    { q: 'Laboratory preparation of hydrochloric acid uses', opts: ['NaCl + H₂SO₄', 'NaCl + HNO₃', 'H₂ + Cl₂', 'NaOH + HCl'], a: 0, why: 'Sodium chloride with concentrated sulphuric acid, the gas then absorbed in water.' },
    { q: 'Calcium chloride is used as a drying agent and to', opts: ['Fertilise soil', 'De-ice roads', 'Make soap', 'Purify water'], a: 1, why: 'It lowers the freezing point of water and also absorbs moisture.' }
  ]
});
