/* JAMB 2027 Prep — Chemistry, Chapters 1–5 */

JAMB.addChapter('chemistry', {
  id: 'separation',
  title: 'Separation Techniques and Purification',
  blurb: 'Choosing the right method for each mixture, and proving a substance is pure.',
  time: '50 min',
  objectives: [
    'Choose the correct separation method for a given mixture',
    'Explain filtration, evaporation, crystallisation and distillation',
    'Distinguish simple from fractional distillation and state uses of each',
    'Describe paper chromatography and Rf calculations',
    'Explain how melting point and boiling point prove purity'
  ],
  body: `
<p class="lead">Almost every practical question in Chemistry begins with one decision: <strong>what is in this mixture, and how do the components differ?</strong> Separation methods exploit differences — in particle size, boiling point, solubility or magnetic properties. Match the difference to the method and the answer follows.</p>

<h2>The methods, and when to use each</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Method</th><th>Difference exploited</th><th>Typical use</th></tr></thead>
  <tbody>
    <tr><td><b>Filtration</b></td><td>Particle size (insoluble solid vs liquid)</td><td>Sand from water; precipitate from solution</td></tr>
    <tr><td><b>Evaporation</b></td><td>Volatile solvent vs non-volatile solute</td><td>Obtaining salt crystals from brine</td></tr>
    <tr><td><b>Crystallisation</b></td><td>Change of solubility with temperature</td><td>Pure copper(II) sulphate crystals</td></tr>
    <tr><td><b>Simple distillation</b></td><td>Boiling point (liquid from dissolved solid)</td><td>Purifying water; recovering solvent</td></tr>
    <tr><td><b>Fractional distillation</b></td><td>Differing boiling points of miscible liquids</td><td>Separating crude oil; alcohol from water</td></tr>
    <tr><td><b>Chromatography</b></td><td>Different rates of movement on a medium</td><td>Separating coloured dyes; inks; amino acids</td></tr>
    <tr><td><b>Sublimation</b></td><td>Sublimes vs does not</td><td>Separating iodine or ammonium chloride from sand</td></tr>
    <tr><td><b>Magnetic separation</b></td><td>Magnetic vs non-magnetic</td><td>Iron filings from sulphur</td></tr>
    <tr><td><b>Decanting / centrifuging</b></td><td>Density / settling rate</td><td>Separating muddy water quickly</td></tr>
    <tr><td><b>Solvent extraction</b></td><td>Differential solubility in two solvents</td><td>Extracting a solute from a mixture</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Distillation — which one?</b>
<p><b>Simple distillation</b> separates a <em>liquid from a dissolved solid</em> (water from salt). <b>Fractional distillation</b> separates <em>two or more miscible liquids</em> with different boiling points (ethanol from water; petroleum fractions). Choosing the wrong one is the single most common error in this topic.</p></div></div>

<h2>The key techniques in detail</h2>

<h3>Filtration</h3>
<p>Pour the mixture into filter paper in a funnel. The <strong>residue</strong> stays on the paper; the <strong>filtrate</strong> passes through. Used only when one component is <em>insoluble</em>. The filter paper must be folded correctly and the funnel stem touching the beaker wall to prevent splashing.</p>

<h3>Evaporation and crystallisation</h3>
<ul>
<li><strong>Evaporation to dryness</strong> — heat until all solvent is gone. Gives the solute, but not especially pure crystals.</li>
<li><strong>Crystallisation</strong> — evaporate only <em>part</em> of the solvent to make a hot saturated solution, then allow it to cool slowly. Crystals form as the solution can no longer hold the solute, leaving impurities behind in the remaining liquid (<strong>mother liquor</strong>). Slow cooling gives large, purer crystals.</li>
</ul>

<h3>Simple distillation</h3>
<ol>
<li>Mixture heated in a flask with anti-bumping granules.</li>
<li>Vapour passes into a <strong>condenser</strong>, cooled by water circulating <strong>in at the bottom and out at the top</strong> (counter-current, keeps the jacket full).</li>
<li>Pure liquid collects in the receiver.</li>
</ol>
<div class="note note-warn"><span class="ico">⚠</span><div><b>Condenser water direction</b>
<p>Cold water enters at the <b>lower</b> outlet and leaves at the <b>upper</b> one. This fills the jacket completely and maximises cooling. Reversed, it drains and cooling fails — a classic exam question.</p></div></div>

<h3>Fractional distillation</h3>
<p>Identical apparatus plus a <strong>fractionating column</strong> packed with glass beads. Repeated vaporisation and condensation occurs on the beads, and the vapour reaching the top is the substance with the <strong>lowest boiling point</strong>. Used to separate:</p>
<ul>
<li>Petroleum into fractions (by fractional distillation in a refinery)</li>
<li>Oxygen and nitrogen from liquid air</li>
<li>Ethanol and water</li>
</ul>

<h3>Chromatography</h3>
<p>A mixture is dissolved in a solvent and allowed to travel up a paper. Components separate because they are attracted differently to the <strong>paper (stationary phase)</strong> and the <strong>solvent (mobile phase)</strong>. Components that dissolve better in the solvent travel further.</p>

<div class="formula-box">
  <div class="fb-head">Rf value</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">R<sub>f</sub> = <span class="frac"><span>distance moved by substance</span><span>distance moved by solvent</span></span></div>
    <div class="fnote">Always less than 1, and has no units.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Calculating an Rf value</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Measurements</div>
    A dye moves 4.5 cm while the solvent front moves 9.0 cm.</div>
    <div class="step"><div class="step-l">Apply the formula</div>
    R<sub>f</sub> = 4.5 / 9.0</div>
    <div class="ans">Answer: 0.5 (no units)</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Rf is always a fraction less than 1</b>
<p>If your answer is above 1, you have divided the wrong way round. The substance can never outrun the solvent.</p></div></div>

<h2>Purification and proof of purity</h2>
<p>A <strong>pure</strong> substance contains nothing else. The definitive test is that a pure substance has a <strong>sharp, fixed melting point</strong> and a <strong>fixed boiling point</strong>. Impurities:</p>
<ul>
<li><strong>Depress (lower) the melting point</strong></li>
<li><strong>Widen (broaden) the melting range</strong></li>
<li><strong>Alter (usually raise) the boiling point</strong> and broaden its range</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The two purity facts to memorise</b>
<p>1. A pure substance melts over a very <b>narrow range</b> (often quoted as 1–2 °C). 2. Impurities <b>lower</b> the melting point — which is why ice melts below 0 °C when salt is spread on a road. Both appear regularly.</p></div></div>

<h3>Recrystallisation</h3>
<p>The standard method for purifying a solid:</p>
<ol>
<li>Dissolve the impure solid in the <em>minimum</em> of hot solvent.</li>
<li>Filter hot to remove insoluble impurities.</li>
<li>Cool the filtrate slowly — pure crystals form.</li>
<li>Filter off the crystals, wash with a little cold solvent, and dry.</li>
</ol>
<p>Recrystallisation works because the substance's solubility drops steeply on cooling while the impurities stay dissolved or are filtered out.</p>

<h2>Distinguishing tests worth knowing</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>To separate / identify</th><th>Method or test</th></tr></thead>
  <tbody>
    <tr><td>Sand and salt</td><td>Dissolve, filter (sand is residue), evaporate filtrate</td></tr>
    <tr><td>Iron and sulphur</td><td>Magnet first (iron), then carbon disulphide or heating</td></tr>
    <tr><td>Iodine and sand</td><td>Sublimation — iodine sublimes and re-deposits</td></tr>
    <tr><td>Ammonium chloride and sodium chloride</td><td>Sublimation — only NH₄Cl sublimes</td></tr>
    <tr><td>Two coloured dyes</td><td>Chromatography</td></tr>
    <tr><td>Ethanol and water</td><td>Fractional distillation</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Match the method to the difference exploited — size, boiling point, solubility, magnetism.</li>
<li>Simple distillation: liquid from dissolved solid. Fractional: miscible liquids.</li>
<li>Condenser water: in at the bottom, out at the top.</li>
<li>Rf = distance by substance ÷ distance by solvent, always &lt; 1, no units.</li>
<li>Purity is proved by a sharp, fixed melting/boiling point; impurities lower and widen the melting range.</li>
</ul>
`,
  quiz: [
    { q: 'The most suitable method for separating sand from water is', opts: ['Distillation', 'Filtration', 'Chromatography', 'Fractional distillation'], a: 1, why: 'Sand is insoluble, so it stays on the filter paper as residue while water passes through.' },
    { q: 'Separating ethanol from water requires', opts: ['Simple distillation', 'Fractional distillation', 'Filtration', 'Sublimation'], a: 1, why: 'Both are miscible liquids with different boiling points (78 °C and 100 °C), so a fractionating column is needed.' },
    { q: 'In a simple distillation, cooling water enters the condenser at the', opts: ['Top and leaves at the bottom', 'Bottom and leaves at the top', 'Either way makes no difference', 'Middle and leaves at the top'], a: 1, why: 'Entering at the lower end fills the jacket completely and gives counter-current cooling.' },
    { q: 'The Rf value of a substance is calculated as', opts: ['Distance moved by solvent ÷ distance moved by substance', 'Distance moved by substance ÷ distance moved by solvent', 'Distance moved by paper ÷ distance moved by solvent', 'Rate of flow × time'], a: 1, why: 'Rf = distance of substance / distance of solvent front — always less than 1.' },
    { q: 'An Rf value cannot exceed 1 because', opts: ['The paper limits movement', 'The substance always travels faster than the solvent', 'The solvent always travels at least as far as the substance', 'Chromatography is inaccurate'], a: 2, why: 'The solute moves with the solvent but is retarded by attraction to the paper, so it can never outrun the front.' },
    { q: 'Which technique would best separate a mixture of two coloured dyes?', opts: ['Filtration', 'Evaporation', 'Chromatography', 'Magnetic separation'], a: 2, why: 'Chromatography separates components with different affinities for the stationary and mobile phases.' },
    { q: 'Adding an impurity to a pure solid will cause its melting point to', opts: ['Rise and sharpen', 'Fall and become less sharp', 'Stay exactly the same', 'Fall but narrow'], a: 1, why: 'Impurities lower the melting point and broaden the range over which melting occurs.' },
    { q: 'A pure substance can be identified by its', opts: ['Variable boiling point', 'Sharp, fixed melting point', 'High solubility', 'Colour'], a: 1, why: 'Pure substances melt over a very narrow temperature range at a fixed value.' },
    { q: 'Iodine can be separated from sand by', opts: ['Filtration', 'Sublimation', 'Chromatography', 'Decanting'], a: 1, why: 'Iodine sublimes when heated and re-deposits as crystals on a cool surface, leaving sand behind.' },
    { q: 'The liquid that passes through the filter paper is called the', opts: ['Residue', 'Filtrate', 'Mother liquor', 'Distillate'], a: 1, why: 'The filtrate passes through; the residue is what the paper retains.' },
    { q: 'Crystallisation produces purer crystals than evaporation to dryness because', opts: ['It uses more heat', 'Impurities remain dissolved in the mother liquor as crystals form on cooling', 'The solvent evaporates faster', 'It removes all impurities by reaction'], a: 1, why: 'On cooling, only the pure substance crystallises out; soluble impurities stay in the remaining solution.' },
    { q: 'Which pair of liquids is best separated by fractional distillation?', opts: ['Salt and water', 'Sand and water', 'Ethanol and water', 'Iron and sulphur'], a: 2, why: 'Miscible liquids with different boiling points need a fractionating column.' },
    { q: 'The purpose of a fractionating column is to', opts: ['Cool the vapour rapidly', 'Allow repeated vaporisation and condensation to separate liquids', 'Filter the vapour', 'Increase the pressure'], a: 1, why: 'Each condensation and re-vaporisation on the beads enriches the vapour in the lower-boiling component.' },
    { q: 'To purify an impure solid sample, the best method is', opts: ['Simple distillation', 'Recrystallisation', 'Decanting', 'Evaporation to dryness'], a: 1, why: 'Dissolving in hot solvent, cooling to form crystals, and filtering removes both soluble and insoluble impurities.' },
    { q: 'Which substance can be removed from a mixture by sublimation?', opts: ['Sodium chloride', 'Ammonium chloride', 'Sand', 'Copper turnings'], a: 1, why: 'Ammonium chloride sublimes on heating, changing straight from solid to vapour.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'apparatus',
  title: 'Laboratory Apparatus, Measurement and Safety',
  blurb: 'What each piece of glassware does, reading a burette correctly, and essential safety rules.',
  time: '45 min',
  objectives: [
    'Identify common laboratory apparatus and state its use',
    'Distinguish burette, pipette and volumetric flask by volume and precision',
    'Read a burette or meniscus correctly',
    'State essential laboratory safety precautions',
    'Describe basic qualitative tests for gases'
  ],
  body: `
<p class="lead">Marks in practical-based questions are lost through small errors: reading a burette from the wrong level, using a measuring cylinder where a volumetric flask was needed, or misidentifying a piece of apparatus from a diagram. This chapter is short, factual and worth full marks.</p>

<h2>Volumetric glassware</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Apparatus</th><th>Delivers</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td><b>Burette</b></td><td>Variable volume, 0–50 cm³ (also 25 cm³)</td><td>Has a tap; graduated; read to 0.05 cm³</td></tr>
    <tr><td><b>Pipette</b></td><td><b>One</b> fixed volume, usually 20 or 25 cm³</td><td>No tap (or a single bulb); fills to the mark</td></tr>
    <tr><td><b>Volumetric flask</b></td><td>One exact volume when filled to the mark (100, 250, 500 cm³)</td><td>Long neck with a single calibration mark; used to prepare standard solutions</td></tr>
    <tr><td><b>Measuring cylinder</b></td><td>Approximate volume</td><td>Least precise of the three</td></tr>
    <tr><td><b>Conical flask</b></td><td>No measurement</td><td>Holds the reaction mixture; wide base, easy to swirl</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Burette vs pipette vs flask</b>
<p>A <b>burette</b> delivers <em>variable</em> volumes and has a <b>t</b>ap. A <b>pipette</b> delivers <em>one fixed</em> volume. A <b>volumetric flask</b> <em>contains</em> one exact volume when filled to its mark. Volumes delivered ≠ volumes contained is a very common distinction question.</p></div></div>

<h2>Reading a liquid level</h2>
<p>Liquids wet glass and curve — the <strong>meniscus</strong>. Always read the <strong>bottom of the curve</strong>, with your eye level with the mark to avoid <strong>parallax error</strong>.</p>
<ul>
<li><strong>Clear liquids (water, dilute acid):</strong> read the <b>lower</b> meniscus.</li>
<li><strong>Mercury:</strong> curves the opposite way, so read the <b>upper</b> edge.</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Zero at the top</b>
<p>A burette is graduated with <b>0 at the top</b> and the largest number at the bottom — you read the <b>difference</b> between final and initial readings, never just the final one.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Titre calculation</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Readings</div>
    Initial burette reading: 2.50 cm³<br>Final burette reading: 26.30 cm³</div>
    <div class="step"><div class="step-l">Titre = difference</div>
    26.30 − 2.50 = 23.80 cm³</div>
    <div class="step"><div class="step-l">Concordant results</div>
    Repeat until results agree within 0.10 cm³, then average those.</div>
    <div class="ans">Answer: titre = 23.80 cm³</div>
  </div>
</div>

<h2>Other apparatus and their uses</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Apparatus</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>Watch glass</td><td>Evaporating small quantities; covering a beaker</td></tr>
    <tr><td>Crucible and lid</td><td>Heating substances to very high temperatures</td></tr>
    <tr><td>Evaporating basin</td><td>Evaporating a solvent to obtain a solid</td></tr>
    <tr><td>Delivery tube</td><td>Conducting gas between vessels</td></tr>
    <tr><td>Desiccator</td><td>Storing substances in a dry atmosphere</td></tr>
    <tr><td>Retort stand and clamps</td><td>Supporting apparatus</td></tr>
    <tr><td>Water bath</td><td>Heating evenly and gently; handling flammable liquids</td></tr>
    <tr><td>Bunsen burner</td><td>Heating — roaring blue flame for hot work, luminous for warming</td></tr>
    <tr><td>Gauze</td><td>Spreading heat evenly when heating a beaker/crucible</td></tr>
    <tr><td>Thistle funnel</td><td>Adding liquid reagents to a flask safely</td></tr>
    <tr><td>Safety bottle / trap</td><td>Preventing suck-back of water into a hot flask</td></tr>
  </tbody>
</table>

<h3>The Bunsen burner</h3>
<ul>
<li><strong>Mixed (roaring blue) flame</strong> — air hole open, hottest, used for heating strongly.</li>
<li><strong>Unmixed (luminous/yellow) flame</strong> — air hole closed, cooler, used for gentle warming and for heating a substance where flame colour tests are needed.</li>
</ul>

<h2>Tests for common gases</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Gas</th><th>Test</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td>Oxygen, O₂</td><td>Glowing splint</td><td><b>Relights</b></td></tr>
    <tr><td>Hydrogen, H₂</td><td>Lit splint at the mouth of the tube</td><td><b>Squeaky pop</b></td></tr>
    <tr><td>Carbon dioxide, CO₂</td><td>Turns limewater milky/cloudy</td><td>White precipitate of CaCO₃</td></tr>
    <tr><td>Chlorine, Cl₂</td><td>Damp blue litmus paper</td><td>Bleaches white</td></tr>
    <tr><td>Ammonia, NH₃</td><td>Damp red litmus paper</td><td>Turns <b>blue</b> (alkaline)</td></tr>
    <tr><td>Water, H₂O</td><td>Anhydrous copper(II) sulphate</td><td>White → <b>blue</b></td></tr>
    <tr><td>Hydrogen sulphide, H₂S</td><td>Lead(II) acetate paper</td><td>Turns black</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Relight vs squeaky pop</b>
<p>Oxygen <b>relights</b> a glowing splint; hydrogen gives a <b>squeaky pop</b>. Getting these two the wrong way round is the most common gas-test error. Note that the hydrogen splint test uses a <em>lit</em> splint, not a glowing one.</p></div></div>

<h2>Safety in the laboratory</h2>
<ul>
<li><strong>Never taste or directly smell</strong> a chemical — waft vapour towards you gently.</li>
<li><strong>Wear eye protection</strong> when heating or mixing chemicals.</li>
<li><strong>Never point a test tube</strong> at yourself or anyone else while heating.</li>
<li><strong>Heat gradually</strong> and move the flame along the tube to avoid "bumping" (violent boiling).</li>
<li><strong>Do not wash down spills of concentrated acid with water alone</strong> — dilute carefully by adding acid to water. For large spills, use sodium hydrogen carbonate solution.</li>
<li><strong>No open flames near flammable solvents</strong> — use a water bath.</li>
<li><strong>Test tubes are not for long-term heating of liquids</strong> — use a flask or basin.</li>
<li><strong>Electrical equipment must be kept away from water.</strong></li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Acid into water, never water into acid</b>
<p>Always add <b>concentrated acid to water</b>, with stirring. Adding water to concentrated acid causes violent local boiling and can splash acid out of the container. This is the most frequently tested safety rule.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Burette = variable volume, has a tap, 0 at the top. Pipette = one fixed volume. Volumetric flask = contains one exact volume.</li>
<li>Read the bottom of the meniscus at eye level.</li>
<li>Titre = final − initial reading; concordant results agree within 0.10 cm³.</li>
<li>Oxygen relights; hydrogen squeaky pop; CO₂ turns limewater milky.</li>
<li>Add acid to water, never the reverse.</li>
</ul>
`,
  quiz: [
    { q: 'Which apparatus delivers a variable, measured volume of liquid?', opts: ['Volumetric flask', 'Pipette', 'Burette', 'Conical flask'], a: 2, why: 'A burette has a tap and is used to deliver any volume up to 50 cm³ (or 25 cm³).' },
    { q: 'A pipette is designed to deliver', opts: ['Any volume chosen by the user', 'One fixed volume accurately', 'Volumes above 100 cm³', 'Approximate volumes only'], a: 1, why: 'A volumetric pipette delivers a single calibrated volume, usually 20 or 25 cm³.' },
    { q: 'The liquid level on a burette should be read', opts: ['From the top of the meniscus', 'From the bottom of the meniscus', 'From the top edge of the glass', 'At any convenient level'], a: 1, why: 'For clear liquids, read the bottom of the curve with your eye level with the mark to avoid parallax error.' },
    { q: 'A burette is graduated with', opts: ['0 at the bottom', '0 at the top', '0 in the middle', 'No zero mark'], a: 1, why: 'Volume runs 0 at the top to 50 at the base, so you subtract the initial reading from the final one.' },
    { q: 'A glowing splint is used to test for', opts: ['Hydrogen', 'Carbon dioxide', 'Oxygen', 'Chlorine'], a: 2, why: 'Oxygen relights a glowing splint.' },
    { q: 'The test for hydrogen gas is a', opts: ['Glowing splint that relights', 'Lit splint giving a squeaky pop', 'Splint that turns milky', 'Blue litmus that bleaches'], a: 1, why: 'Hydrogen burns with a characteristic squeaky pop when a lit splint meets it.' },
    { q: 'Carbon dioxide is identified by its ability to', opts: ['Relight a glowing splint', 'Turn limewater milky', 'Bleach litmus', 'Burn with a pop'], a: 1, why: 'CO₂ reacts with limewater to form insoluble calcium carbonate, making it cloudy.' },
    { q: 'When diluting concentrated acid, the correct procedure is to', opts: ['Add water to the acid', 'Add acid to water with stirring', 'Mix them at any rate', 'Heat the mixture first'], a: 1, why: 'Adding acid to water disperses the heat generated. Adding water to acid causes violent boiling and splashing.' },
    { q: 'The apparatus used to prepare a solution of exact concentration is a', opts: ['Measuring cylinder', 'Conical flask', 'Volumetric flask', 'Beaker'], a: 2, why: 'A volumetric flask is filled to the calibration mark, giving one precise volume for a standard solution.' },
    { q: 'The volume of a titre is found by', opts: ['Reading the final burette reading only', 'Subtracting the initial reading from the final reading', 'Adding the two readings together', 'Using the pipette reading'], a: 1, why: 'Titre = final reading − initial reading.' },
    { q: 'Which gas turns damp blue litmus paper white?', opts: ['Ammonia', 'Chlorine', 'Oxygen', 'Hydrogen'], a: 1, why: 'Chlorine forms chloric acid when damp and bleaches the paper white.' },
    { q: 'Anhydrous copper(II) sulphate turns blue in the presence of', opts: ['Oxygen', 'Ammonia', 'Water', 'Carbon dioxide'], a: 2, why: 'White anhydrous CuSO₄ becomes blue hydrated CuSO₄·5H₂O — the standard test for water.' },
    { q: 'A water bath is preferred to a naked flame when heating', opts: ['Solutions of acid', 'Inflammable liquids', 'Ionic solids', 'Metals'], a: 1, why: 'Flammable solvents can ignite over a flame; a water bath heats evenly and safely below the ignition point.' },
    { q: 'The hottest part of a Bunsen burner is the', opts: ['Luminous yellow flame', 'Roaring blue flame with air hole open', 'Outer edge only', 'Inner cone'], a: 1, why: 'With the air hole open, complete combustion gives the hottest, non-luminous flame.' },
    { q: 'Concordant titration results are those that agree within approximately', opts: ['0.10 cm³', '1.00 cm³', '5.00 cm³', 'Exactly 0.00 cm³'], a: 0, why: 'Results within 0.10 cm³ of each other are considered concordant and are the ones averaged.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'atomic-structure',
  title: 'Atomic Structure',
  blurb: 'Sub-atomic particles, electron arrangement, shells, and isotopes.',
  time: '55 min',
  objectives: [
    'Compare protons, neutrons and electrons',
    'Define atomic number, mass number and isotope',
    'Write electron arrangements for the first 20 elements',
    'Explain how isotopes affect relative atomic mass',
    'State uses of isotopes'
  ],
  body: `
<p class="lead">Everything in Chemistry follows from what is inside the atom. The nucleus holds almost all the mass but none of the chemical behaviour — that comes from the arrangement of the electrons. Get the electron arrangement right and bonding, the periodic table and reactivity all become predictable.</p>

<h2>The three particles</h2>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Particle</th><th>Relative mass</th><th>Relative charge</th><th>Location</th></tr></thead>
  <tbody>
    <tr><td><b>Proton</b></td><td>1</td><td>+1</td><td>Nucleus</td></tr>
    <tr><td><b>Neutron</b></td><td>1</td><td>0</td><td>Nucleus</td></tr>
    <tr><td><b>Electron</b></td><td><sup>1</sup>/<sub>1840</sub> (negligible)</td><td>−1</td><td>Shells around the nucleus</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">The numbers that matter</div>
  <div class="formula-row"><div class="fname">Atomic number (proton number), Z</div>
    <div class="fexpr">Z = number of protons = number of electrons (in a neutral atom)</div>
    <div class="fnote">Defines the element — change Z and you change the element.</div></div>
  <div class="formula-row"><div class="fname">Mass number, A</div>
    <div class="fexpr">A = protons + neutrons</div></div>
  <div class="formula-row"><div class="fname">Number of neutrons</div>
    <div class="fexpr">N = A − Z</div></div>
  <div class="formula-row"><div class="fname">In an ion</div>
    <div class="fexpr">electrons = Z − charge</div>
    <div class="fnote">For a 2+ ion, electrons = Z − 2. For a 1− ion, electrons = Z + 1.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Reading an isotope symbol</div>
  <div class="example-b">
    <div class="step"><div class="step-l">The notation ³⁵₁₇Cl</div>
    Z = 17 (protons), A = 35 (nucleons)</div>
    <div class="step"><div class="step-l">Neutrons</div>
    N = 35 − 17 = 18</div>
    <div class="step"><div class="step-l">Electrons (neutral atom)</div>
    17</div>
    <div class="ans">Answer: 17 protons, 18 neutrons, 17 electrons</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Electrons in an ion</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A Ca²⁺ ion. Calcium has Z = 20.</div>
    <div class="step"><div class="step-l">Account for the charge</div>
    A 2+ charge means two electrons lost: 20 − 2</div>
    <div class="ans">Answer: 18 electrons, 20 protons, 20 neutrons</div>
  </div>
</div>

<h2>Electron arrangement</h2>
<p>Electrons occupy <strong>shells</strong> (energy levels) starting nearest the nucleus. The first shell holds a maximum of <strong>2</strong>, the second <strong>8</strong>, the third <strong>8</strong> in the elements you need (up to calcium), then 18 and 32.</p>

<div class="formula-box">
  <div class="fb-head">Maximum electrons per shell</div>
  <div class="formula-row"><div class="fname">Capacity</div><div class="fexpr">2, 8, 8, 18, 32 …</div><div class="fnote">From 2n², but the third shell fills as 2,8,8,2 for the first 20 elements.</div></div>
  <div class="formula-row"><div class="fname">Valence electrons</div><div class="fexpr">= outermost shell</div><div class="fnote">Determines chemical behaviour and the group number.</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Element</th><th>Atomic no.</th><th>Arrangement</th></tr></thead>
  <tbody>
    <tr><td>Hydrogen H</td><td>1</td><td>1</td></tr>
    <tr><td>Carbon C</td><td>6</td><td>2, 4</td></tr>
    <tr><td>Nitrogen N</td><td>7</td><td>2, 5</td></tr>
    <tr><td>Oxygen O</td><td>8</td><td>2, 6</td></tr>
    <tr><td>Sodium Na</td><td>11</td><td>2, 8, 1</td></tr>
    <tr><td>Chlorine Cl</td><td>17</td><td>2, 8, 7</td></tr>
    <tr><td>Argon Ar</td><td>18</td><td>2, 8, 8</td></tr>
    <tr><td>Calcium Ca</td><td>20</td><td>2, 8, 8, 2</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The noble gas exception</b>
<p>Argon (18) is 2, 8, 8 — <em>not</em> 2, 8, 10. Although the third shell can hold 18, the 4s sub-shell fills before the remaining 3d electrons, so the first 20 elements go 2,8,8,2. Getting argon wrong loses an easy mark.</p></div></div>

<h3>Why electron arrangement matters</h3>
<ul>
<li><strong>Group number = number of valence electrons.</strong> Group I has 1, Group VII has 7, Group 0 has 8 (except He, which has 2).</li>
<li>Atoms with a <strong>full outer shell are unreactive</strong> — the noble gases.</li>
<li>Atoms tend to <strong>gain or lose electrons to achieve a full outer shell</strong>, which is the driving force behind bonding.</li>
</ul>

<h2>Isotopes</h2>
<blockquote><strong>Isotopes</strong> are atoms of the <em>same element</em> (same number of protons) with <em>different numbers of neutrons</em> — therefore different mass numbers.</blockquote>

<p>Because they have the same number of electrons and the same arrangement, <strong>isotopes of an element have identical chemical properties</strong>.</p>

<div class="formula-box">
  <div class="fb-head">Relative atomic mass from isotopes</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">A<sub>r</sub> = <span class="frac"><span>Σ (isotopic mass × % abundance)</span><span>Σ (% abundance)</span></span></div>
    <div class="fnote">Or use relative abundances instead of percentages.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Chlorine’s relative atomic mass</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Data</div>
    Chlorine exists as ³⁵Cl (75%) and ³⁷Cl (25%).</div>
    <div class="step"><div class="step-l">Apply the weighted mean</div>
    A<sub>r</sub> = (35 × 75 + 37 × 25) / (75 + 25)<br>
    = (2625 + 925) / 100<br>
    = 3550 / 100</div>
    <div class="ans">Answer: Aᵣ = 35.5</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Sanity-check your answer</b>
<p>The answer must lie <b>between</b> the isotope masses and <b>closer to the commoner isotope</b>. Since ³⁵Cl is 75% abundant, 35.5 sits just above 35 — correct. If you got 40 or 30, the weighting is wrong.</p></div></div>

<h3>Uses of isotopes</h3>
<ul>
<li><strong>Carbon-14</strong> — dating once-living objects (archaeology, geology), half-life 5730 years.</li>
<li><strong>Cobalt-60</strong> — radiotherapy and sterilising equipment.</li>
<li><strong>Iodine-131</strong> — treating and imaging the thyroid gland.</li>
<li><strong>Phosphorus-32</strong> — tracing the uptake of fertiliser by plants.</li>
<li><strong>Uranium-235</strong> — nuclear fuel (fission).</li>
<li><strong>Deuterium (²H)</strong> — heavy water moderator in nuclear reactors.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Radioactive vs stable isotopes</b>
<p>Not all isotopes are radioactive. Carbon-12, carbon-13 and hydrogen-1 are <b>stable</b>. When a question says "radioactive isotope", it means the nucleus is unstable and decays; a stable isotope has no radioactivity.</p></div></div>

<h2>Sub-atomic history worth knowing</h2>
<ul>
<li><strong>Thomson</strong> — discovered the electron (cathode rays); proposed the "plum pudding" model.</li>
<li><strong>Rutherford</strong> — alpha-particle scattering showed a tiny, dense, positively charged nucleus; most of the atom is empty space.</li>
<li><strong>Bohr</strong> — electrons orbit in fixed energy levels; jumps between levels explain emission spectra.</li>
<li><strong>Chadwick</strong> — discovered the neutron.</li>
</ul>

<p>The <strong>nuclear model</strong> stands: a small dense nucleus containing protons and neutrons, with electrons in shells around it. Nearly all the atom's mass and all its positive charge is in the nucleus, which occupies a tiny fraction of the atom's volume.</p>

<h2>Chapter recap</h2>
<ul>
<li>Proton +1 (mass 1), neutron 0 (mass 1), electron −1 (mass ≈ 0).</li>
<li>Z = protons = electrons (neutral); A = protons + neutrons; N = A − Z.</li>
<li>Arrangements for the first 20: 2, 8, 8, 2 pattern; argon is 2,8,8.</li>
<li>Isotopes: same protons, different neutrons, identical chemistry.</li>
<li>Aᵣ = weighted mean of isotopic masses.</li>
</ul>
`,
  quiz: [
    { q: 'Which sub-atomic particle determines the identity of an element?', opts: ['Neutron', 'Proton', 'Electron', 'Photon'], a: 1, why: 'The proton number (Z) defines the element — change it and you have a different element.' },
    { q: 'The mass number of an atom is the sum of its', opts: ['Protons and electrons', 'Protons and neutrons', 'Neutrons and electrons', 'Electrons only'], a: 1, why: 'A = protons + neutrons; electrons contribute negligible mass.' },
    { q: 'An atom of ²⁴₁₂Mg contains how many neutrons?', opts: ['12', '24', '36', '10'], a: 0, why: 'N = A − Z = 24 − 12 = 12.' },
    { q: 'A sodium ion Na⁺ has', opts: ['11 protons and 11 electrons', '11 protons and 10 electrons', '10 protons and 11 electrons', '11 protons and 12 electrons'], a: 1, why: 'Loss of one electron gives a 1+ charge; the proton number stays 11.' },
    { q: 'The electron arrangement of chlorine (Z = 17) is', opts: ['2, 8, 7', '2, 8, 8', '2, 7', '2, 8, 6'], a: 0, why: '2 + 8 + 7 = 17 electrons.' },
    { q: 'The electron arrangement of argon (Z = 18) is', opts: ['2, 8, 8', '2, 8, 10', '2, 8, 6', '8, 8, 2'], a: 0, why: 'Argon fills 2, then 8, then 8 — not 2,8,10 — giving a stable full outer shell.' },
    { q: 'Elements in Group I of the periodic table have', opts: ['8 valence electrons', '1 valence electron', '7 valence electrons', '2 valence electrons'], a: 1, why: 'Group number corresponds to the number of electrons in the outermost shell.' },
    { q: 'Isotopes of the same element have', opts: ['Different numbers of protons', 'Identical chemical properties', 'Different numbers of electrons', 'Identical mass numbers'], a: 1, why: 'They have the same electron arrangement, so they react identically.' },
    { q: 'Isotopes differ from each other in the number of', opts: ['Protons', 'Neutrons', 'Electrons', 'Shells'], a: 1, why: 'Same protons, different neutrons — that is the definition of an isotope.' },
    { q: 'Chlorine has isotopes of mass 35 (75%) and 37 (25%). Its relative atomic mass is', opts: ['35.0', '35.5', '36.0', '36.5'], a: 1, why: '(35×75 + 37×25)/100 = (2625 + 925)/100 = 3550/100 = 35.5.' },
    { q: 'The relative atomic mass of an element is', opts: ['A whole number always', 'A weighted average of its isotopic masses', 'Equal to the mass number of its heaviest isotope', 'The sum of all isotope masses'], a: 1, why: 'It accounts for how abundant each isotope naturally is.' },
    { q: 'Carbon-14 is used to', opts: ['Sterilise food', 'Date once-living organic material', 'Treat thyroid disease', 'Power a reactor'], a: 1, why: 'Its half-life of 5730 years makes it ideal for archaeological and geological dating.' },
    { q: 'The experiment that led to the discovery of the atomic nucleus was', opts: ['Cathode ray tubes', 'Alpha particle scattering', 'Electrolysis of water', 'Spectroscopy'], a: 1, why: 'Rutherford’s gold foil experiment showed most alpha particles passed through, implying mostly empty space with a small dense nucleus.' },
    { q: 'The particle discovered by Chadwick was the', opts: ['Electron', 'Proton', 'Neutron', 'Positron'], a: 2, why: 'Chadwick identified the uncharged neutron in 1932.' },
    { q: 'The maximum number of electrons in the second shell is', opts: ['2', '8', '18', '32'], a: 1, why: 'Shell capacities are 2, 8, 8, 18, 32…' },
    { q: 'An anion with 10 electrons and atomic number 8 is', opts: ['O²⁻', 'O', 'Ne', 'F⁻'], a: 0, why: 'Oxygen (Z=8) with 8+2 = 10 electrons has gained 2, giving O²⁻ — isoelectronic with neon.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'periodic-table',
  title: 'The Periodic Table and Periodic Trends',
  blurb: 'Groups, periods, and how properties change across and down the table.',
  time: '55 min',
  objectives: [
    'Explain the arrangement into groups and periods',
    'Describe trends in atomic radius, ionisation energy and electronegativity',
    'Explain trends in metallic character',
    'Predict the behaviour of Group I, Group VII and Period 3 elements',
    'State uses of noble gases and common industrial gases'
  ],
  body: `
<p class="lead">The periodic table is not a list to memorise — it is a <strong>predictive tool</strong>. Elements in the same group have the same number of valence electrons and therefore behave alike. Elements in the same period show a smooth change. Learn the trends and you can deduce behaviour you have never been told about.</p>

<h2>Organisation</h2>
<dl class="defs">
<dt>Group (vertical column)</dt>
<dd>Elements with the <strong>same number of valence electrons</strong> — similar chemical properties. Numbered I–VII and 0 (or 1–18).</dd>
<dt>Period (horizontal row)</dt>
<dd>Elements with the <strong>same number of occupied shells</strong>. Period 3 has 3 shells filled across the row.</dd>
</dl>

<p><strong>Metals</strong> are on the left; <strong>non-metals</strong> on the right. The <strong>staircase</strong> of metalloids separates them.</p>

<h2>The three main trends across a period</h2>
<p>Going <strong>from left to right</strong>, the nuclear charge increases while each electron is added to the <em>same</em> shell (no extra shielding). The nucleus pulls harder on the outer electrons.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Trend across a period →</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td><b>Atomic radius</b></td><td><b>Decreases</b></td><td>More protons, same shell → stronger attraction → smaller atom</td></tr>
    <tr><td><b>Ionisation energy</b></td><td><b>Increases</b></td><td>Electrons held more tightly → harder to remove</td></tr>
    <tr><td><b>Electronegativity</b></td><td><b>Increases</b></td><td>Smaller atom, stronger pull on shared electrons</td></tr>
    <tr><td><b>Metallic character</b></td><td><b>Decreases</b></td><td>Less tendency to lose electrons → becomes non-metallic</td></tr>
  </tbody>
</table>

<h2>The trends down a group</h2>
<p>Going <strong>down a group</strong>, each element has one more occupied shell. The outer electrons are further from the nucleus and shielded by the inner shells.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Trend down a group ↓</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td><b>Atomic radius</b></td><td><b>Increases</b></td><td>More shells → outer electrons further out</td></tr>
    <tr><td><b>Ionisation energy</b></td><td><b>Decreases</b></td><td>Outer electrons further away and shielded → easier to remove</td></tr>
    <tr><td><b>Electronegativity</b></td><td><b>Decreases</b></td><td>Weaker pull on shared electrons</td></tr>
    <tr><td><b>Metallic character</b></td><td><b>Increases</b></td><td>Electrons lost more easily → more metallic</td></tr>
    <tr><td><b>Reactivity (metals)</b></td><td><b>Increases</b></td><td>Loss of an electron becomes easier</td></tr>
    <tr><td><b>Reactivity (non-metals)</b></td><td><b>Decreases</b></td><td>Gain of an electron becomes harder</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Reactivity trends run in opposite directions</b>
<p>For <b>metals</b> (Group I), reactivity <b>increases down</b> the group — losing an electron gets easier. For <b>non-metals</b> (Group VII), reactivity <b>decreases down</b> — gaining an electron gets harder. This reversal is the single most examined point in the periodic table.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The memory hook</b>
<p>Ionisation energy and atomic radius move in <b>opposite</b> directions — small atoms hold electrons tightly (high IE), large atoms let go easily (low IE). If you remember only one trend, remember that.</p></div></div>

<h2>Group I — the alkali metals</h2>
<p>Lithium, sodium, potassium, rubidium, caesium. All have <strong>one valence electron</strong>.</p>
<p><strong>Reactions with water:</strong></p>
<div class="eq">2Na + 2H₂O → 2NaOH + H₂</div>
<p>The metal floats (less dense than water), fizzes as hydrogen is released, moves about as the heat melts it, and the solution turns <strong>alkaline</strong> (universal indicator → blue/purple).</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Down the group →</th></tr></thead>
  <tbody>
    <tr><td>Melting/boiling point</td><td>Decrease (atoms larger, metallic bonding weaker)</td></tr>
    <tr><td>Density</td><td>Generally increase</td></tr>
    <tr><td>Reaction with water</td><td>Become <b>more vigorous</b> (Li gentle → Cs violent)</td></tr>
    <tr><td>Ionisation energy</td><td>Decrease</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Storage</b>
<p>Alkali metals are stored <b>under oil</b> because they react vigorously with moisture and oxygen in air. Lithium floats on oil; potassium is denser than oil.</p></div></div>

<h2>Group VII — the halogens</h2>
<p>Fluorine, chlorine, bromine, iodine, astatine. All have <strong>seven valence electrons</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Down the group →</th></tr></thead>
  <tbody>
    <tr><td>State at room temp</td><td>F₂ gas → Cl₂ gas → Br₂ liquid → I₂ solid</td></tr>
    <tr><td>Colour</td><td>Pale yellow → yellow-green → red-brown → purple-black</td></tr>
    <tr><td>Reactivity</td><td><b>Decreases</b></td></tr>
    <tr><td>Volatility</td><td>Decreases (harder to vaporise)</td></tr>
  </tbody>
</table>

<h3>Displacement reactions</h3>
<p>A more reactive halogen displaces a less reactive one from its salt:</p>
<div class="eq">Cl₂ + 2KBr → 2KCl + Br₂</div>
<div class="eq">Br₂ + 2KI → 2KBr + I₂</div>
<p>But iodine cannot displace chlorine: <strong>I₂ + 2KCl → no reaction</strong>.</p>
<div class="note note-exam"><span class="ico">🎯</span><div><b>The order to remember</b>
<p>Reactivity: <b>F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂</b>. The higher element displaces the lower. Colour change on adding chlorine water to a bromide: colourless → <b>orange/brown</b>. To a iodide: colourless → <b>brown</b>.</p></div></div>

<h3>Disproportionation of chlorine in water</h3>
<div class="eq">Cl₂ + H₂O → HCl + HClO</div>
<p>Chlorine is simultaneously oxidised (to +1 in HClO) and reduced (to −1 in HCl) — this is <strong>disproportionation</strong>. Hypochlorous acid (HClO) is the bleaching agent, which is why chlorine disinfects and bleaches. Chlorine is added to <strong>drinking water and swimming pools</strong> to kill bacteria.</p>

<h2>Group 0 — the noble gases</h2>
<p>Helium, neon, argon, krypton, xenon, radon. All have a <strong>full outer shell</strong>, so they are monatomic and extremely unreactive.</p>
<ul>
<li><strong>Helium</strong> — balloons, deep-sea diving mixtures (less soluble in blood than N₂, avoids "the bends"), cryogenics.</li>
<li><strong>Argon</strong> — inert atmosphere for welding and light bulbs (prevents oxidation of the filament).</li>
<li><strong>Neon</strong> — glowing signs (red-orange discharge).</li>
<li><strong>Xenon / Krypton</strong> — high-intensity lamps and anaesthetics.</li>
</ul>

<h2>Period 3 — the trend in detail</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Na → Mg → Al → Si → P → S → Cl → Ar</th></tr></thead>
  <tbody>
    <tr><td>Arrangement: 2,8,1 → 2,8,2 → 2,8,3 → 2,8,4 → 2,8,5 → 2,8,6 → 2,8,7 → 2,8,8</td></tr>
    <tr><td>Oxide nature: <b>basic</b> → <b>basic</b> → <b>amphoteric</b> → <b>acidic</b> → <b>acidic</b> → <b>acidic</b> → <b>acidic</b> → no oxide</td></tr>
    <tr><td>Conductivity: high at left (metallic bonding) → falls to zero at the right (covalent/molecular)</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Amphoteric aluminium</b>
<p>Aluminium oxide reacts with <b>both</b> acids and alkalis — it is <strong>amphoteric</strong>. Sodium oxide is basic; silicon dioxide is acidic. The trend across Period 3 from basic to acidic oxide is examined regularly.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Group = same valence electrons = similar chemistry. Period = same number of shells.</li>
<li>Across: radius ↓, IE ↑, electronegativity ↑, metallic character ↓.</li>
<li>Down: radius ↑, IE ↓, electronegativity ↓, metallic character ↑.</li>
<li>Group I reactivity increases down; Group VII reactivity decreases down.</li>
<li>Noble gases: full outer shell, inert, used where an unreactive atmosphere is needed.</li>
</ul>
`,
  quiz: [
    { q: 'Elements in the same group of the periodic table have the same number of', opts: ['Neutrons', 'Valence electrons', 'Shells', 'Protons'], a: 1, why: 'Group membership is defined by the number of electrons in the outermost shell.' },
    { q: 'Moving from left to right across a period, atomic radius', opts: ['Increases', 'Decreases', 'Stays constant', 'First increases then decreases'], a: 1, why: 'Nuclear charge rises with no extra shielding, so the same shell is pulled in tighter.' },
    { q: 'Moving left to right across a period, ionisation energy', opts: ['Decreases', 'Increases', 'Remains constant', 'Becomes zero'], a: 1, why: 'Electrons are held more strongly, so more energy is needed to remove one.' },
    { q: 'Going down Group I, the reactivity of the metals', opts: ['Increases', 'Decreases', 'Stays the same', 'Increases then decreases'], a: 0, why: 'The outer electron is further from the nucleus and shielded, so it is lost more easily.' },
    { q: 'Going down Group VII, the reactivity of the halogens', opts: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'], a: 1, why: 'Non-metal reactivity depends on gaining an electron, which becomes harder as atoms get larger.' },
    { q: 'Which trend is correct for ionisation energy down a group?', opts: ['Increases down the group', 'Decreases down the group', 'Unchanged', 'Increases across a period'], a: 1, why: 'Outer electrons are further away and more shielded, so less energy removes them.' },
    { q: 'Potassium is more reactive than sodium because', opts: ['It has more neutrons', 'Its outer electron is further from the nucleus and more shielded', 'It has a higher electronegativity', 'It is denser'], a: 1, why: 'Greater distance and shielding weaken the nuclear attraction, so ionisation energy is lower.' },
    { q: 'Which metal is stored under oil to prevent reaction with air?', opts: ['Copper', 'Sodium', 'Iron', 'Gold'], a: 1, why: 'Alkali metals react vigorously with oxygen and moisture, so they are kept submerged in oil.' },
    { q: 'The reaction of sodium with water produces', opts: ['Hydrogen only', 'Hydrogen and an alkaline solution', 'Oxygen and a salt', 'Chlorine gas'], a: 1, why: '2Na + 2H₂O → 2NaOH + H₂; the NaOH makes the solution alkaline.' },
    { q: 'Which halogen is the most reactive?', opts: ['Iodine', 'Bromine', 'Chlorine', 'Fluorine'], a: 3, why: 'Reactivity of halogens decreases down the group, so fluorine is the most reactive.' },
    { q: 'The reaction Cl₂ + 2KBr → 2KCl + Br₂ is an example of', opts: ['Neutralisation', 'Displacement', 'Disproportionation', 'Combustion'], a: 1, why: 'The more reactive halogen displaces the less reactive one from its salt.' },
    { q: 'Iodine will NOT displace', opts: ['Bromine', 'Fluorine', 'Chlorine', 'Both B and C'], a: 3, why: 'Iodine is the least reactive halogen, so it cannot displace chlorine or fluorine from their compounds.' },
    { q: 'Chlorine water bleaches because it contains', opts: ['Hydrochloric acid only', 'Hypochlorous acid (HClO)', 'Sodium chloride', 'Oxygen gas'], a: 1, why: 'Cl₂ + H₂O ⇌ HCl + HClO; hypochlorous acid is the oxidising, bleaching agent.' },
    { q: 'Noble gases are unreactive because they have', opts: ['Two electrons only', 'A full outer shell of electrons', 'High ionisation energies only', 'Low electronegativities'], a: 1, why: 'A complete outer shell has no tendency to gain, lose or share electrons.' },
    { q: 'Argon is used in electric bulbs to', opts: ['Conduct electricity', 'Prevent oxidation of the filament', 'Produce light directly', 'Cool the bulb'], a: 1, why: 'Its inertness stops the tungsten filament burning away in air.' },
    { q: 'Aluminium oxide is described as', opts: ['Basic only', 'Acidic only', 'Amphoteric', 'Neutral'], a: 2, why: 'It reacts with both acids and alkalis, e.g. with NaOH to form sodium aluminate.' },
    { q: 'Which of these is a correct use of helium?', opts: ['Welding shield gas', 'Deep-sea diving mixtures', 'Swimming pool disinfection', 'Neon signs'], a: 1, why: 'Helium is less soluble in blood than nitrogen, preventing the bends. Argon is used for welding.' }
  ]
});

JAMB.addChapter('chemistry', {
  id: 'bonding',
  title: 'Chemical Bonding',
  blurb: 'Ionic, covalent, coordinate and metallic bonding, and how structure explains properties.',
  time: '60 min',
  objectives: [
    'Explain ionic, covalent and metallic bonding',
    'Draw dot-and-cross diagrams for simple molecules',
    'Predict bonding type from the elements involved',
    'Relate structure to melting point, conductivity and solubility',
    'Explain coordinate bonding and hydrogen bonding'
  ],
  body: `
<p class="lead">Bonding is where the periodic table pays off. A metal with one valence electron and a non-metal with seven will transfer; two non-metals will share. From that one decision flows the structure — and from the structure comes every physical property you will be asked about.</p>

<h2>Why atoms bond</h2>
<p>Atoms bond to reach a <strong>stable electron configuration</strong>, usually a full outer shell (8 electrons, or 2 for helium). Metals tend to <strong>lose</strong> electrons; non-metals tend to <strong>gain</strong> or <strong>share</strong> them.</p>

<h2>Ionic bonding</h2>
<p>Formed between a <strong>metal and a non-metal</strong>. Electrons are <em>transferred</em> from the metal to the non-metal, producing positive and negative <strong>ions</strong> that attract each other into a rigid lattice.</p>

<div class="example">
  <div class="example-h"><span class="num">1</span> Sodium chloride</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Sodium (2,8,1)</div>
    Loses 1 electron → Na⁺ with arrangement 2,8 (stable)</div>
    <div class="step"><div class="step-l">Chlorine (2,8,7)</div>
    Gains 1 electron → Cl⁻ with arrangement 2,8,8 (stable)</div>
    <div class="step"><div class="step-l">Result</div>
    Oppositely charged ions pack into a giant <b>ionic lattice</b>; strong electrostatic attraction in all directions.</div>
    <div class="ans">Formula: NaCl (1:1 ratio of ions)</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Magnesium oxide</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Magnesium (2,8,2)</div>
    Loses 2 electrons → Mg²⁺</div>
    <div class="step"><div class="step-l">Oxygen (2,8,6)</div>
    Gains 2 electrons → O²⁻</div>
    <div class="step"><div class="step-l">Charges</div>
    The 2+ and 2− ions attract strongly; the formula is 1:1 because the charges balance.</div>
    <div class="ans">Formula: MgO</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Writing ionic formulae</b>
<p>Balance the charges, not the atoms. Al³⁺ with O²⁻ needs two Al³⁺ and three O²⁻ to cancel: <b>Al₂O₃</b>. If charges are equal and opposite, the ratio is 1:1 (NaCl, MgO, KBr).</p></div></div>

<h3>Properties of ionic compounds</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td><b>High melting and boiling points</b></td><td>Many strong electrostatic attractions throughout the lattice must be broken</td></tr>
    <tr><td><b>Conduct when molten or in solution</b></td><td>Ions are free to move; <b>not</b> when solid (ions locked in place)</td></tr>
    <tr><td><b>Often soluble in water</b> <span class="muted">(a polar solvent)</span></td><td>Polar water molecules surround and stabilise the ions</td></tr>
    <tr><td><b>Brittle</b></td><td>Displacing layers brings like charges together → repulsion → crystal splits</td></tr>
  </tbody>
</table>

<h2>Covalent bonding</h2>
<p>Formed between <strong>two non-metals</strong>. Electrons are <em>shared</em> between atoms so that each achieves a full outer shell.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Bond</th><th>Electrons shared</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Single</td><td>One pair (2 e⁻)</td><td>H–H, Cl–Cl, H–Cl, CH₄</td></tr>
    <tr><td>Double</td><td>Two pairs (4 e⁻)</td><td>O=O, CO₂, C₂H₄</td></tr>
    <tr><td>Triple</td><td>Three pairs (6 e⁻)</td><td>N≡N, C₂H₂, CO</td></tr>
  </tbody>
</table>

<div class="example">
  <div class="example-h"><span class="num">3</span> Water — a dot-and-cross structure</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Oxygen: 2,8,6 — needs 2 more electrons</div>
    Shares one pair with each hydrogen</div>
    <div class="step"><div class="step-l">Hydrogen: 1 — needs 1 more</div>
    Shares one pair with oxygen, completing its first shell</div>
    <div class="step"><div class="step-l">Count the outer electrons</div>
    O has 2 shared + 4 own = 8 ✓ &nbsp;·&nbsp; each H has 2 ✓</div>
    <div class="ans">Two single O–H bonds; formula H₂O</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Carbon dioxide</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Carbon: 2,8,4 — needs 4 electrons</div>
    Forms two double bonds, one with each oxygen</div>
    <div class="step"><div class="step-l">Each oxygen: 2,8,6 — needs 2</div>
    Shares a double bond with carbon</div>
    <div class="step"><div class="step-l">Check</div>
    C: 8 shared electrons ✓ &nbsp;·&nbsp; each O: 4 shared + 4 own = 8 ✓</div>
    <div class="ans">O=C=O — two double bonds, no lone pairs on carbon</div>
  </div>
</div>

<h3>Properties of simple covalent substances</h3>
<ul>
<li><strong>Low melting and boiling points</strong> — only weak intermolecular forces between molecules; the covalent bonds inside are strong and are <em>not</em> broken on melting.</li>
<li><strong>Do not conduct</strong> — no free ions or delocalised electrons (except graphite, which has delocalised electrons).</li>
<li><strong>Many are gases or volatile liquids</strong> at room temperature.</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Melting breaks intermolecular forces, not covalent bonds</b>
<p>When ice melts, the <b>hydrogen bonds between water molecules</b> break — the O–H covalent bonds stay intact. Similarly, when methane burns, the C–H bonds break. Distinguishing which bond breaks is a very common question.</p></div></div>

<h2>Coordinate (dative) covalent bonding</h2>
<p>Both electrons in the shared pair come from the <strong>same atom</strong> — the atom with a lone pair donates it to an atom with an empty orbital.</p>
<ul>
<li><strong>Ammonium ion:</strong> NH₃ + H⁺ → NH₄⁺. Nitrogen's lone pair is donated to H⁺.</li>
<li><strong>Hydronium ion:</strong> H₂O + H⁺ → H₃O⁺.</li>
<li><strong>Aluminium chloride dimer:</strong> AlCl₃ + AlCl₃ → Al₂Cl₆ (Al is electron-deficient).</li>
</ul>
<div class="note note-exam"><span class="ico">🎯</span><div><b>Who provides the pair?</b>
<p>In NH₄⁺, the nitrogen provides <b>both</b> electrons of the coordinate bond while hydrogen provides none. Expect a question asking which atom donates the lone pair.</p></div></div>

<h2>Metallic bonding</h2>
<p>A <strong>"sea" of delocalised electrons</strong> surrounding a lattice of positive metal ions. The metal atoms lose their valence electrons, which become free to move throughout the structure.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Explanation</th></tr></thead>
  <tbody>
    <tr><td><b>Good conductor, solid and liquid</b></td><td>Delocalised electrons move freely — even when molten</td></tr>
    <tr><td><b>Malleable and ductile</b></td><td>Layers of ions slide over each other; the electron sea readjusts, no bonds break</td></tr>
    <tr><td><b>High melting point</b></td><td>Strong attraction between positive ions and the electron sea (strongest in Group I → Group IV)</td></tr>
    <tr><td><b>Shiny</b></td><td>Free electrons absorb and re-emit light</td></tr>
  </tbody>
</table>

<h2>Giant vs simple molecular</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Structure</th><th>Bonding</th><th>MP/boiling</th><th>Conducts?</th></tr></thead>
  <tbody>
    <tr><td><b>NaCl</b> (giant ionic)</td><td>Ionic</td><td>Very high (801 °C)</td><td>Molten or solution only</td></tr>
    <tr><td><b>Diamond</b></td><td>Covalent, giant</td><td>Very high (3550 °C)</td><td>No (each C has 4 bonds)</td></tr>
    <tr><td><b>Graphite</b></td><td>Covalent, giant</td><td>Very high</td><td><b>Yes</b> — delocalised electrons</td></tr>
    <tr><td><b>Ice / H₂O</b></td><td>Covalent molecules</td><td>Low (0 °C)</td><td>No</td></tr>
    <tr><td><b>Iron</b></td><td>Metallic</td><td>High (1538 °C)</td><td>Yes</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Diamond vs graphite</b>
<p>Both are carbon. In <b>diamond</b> each carbon forms <b>4</b> strong bonds in a tetrahedral lattice — extremely hard, no free electrons, does not conduct. In <b>graphite</b> each carbon forms <b>3</b> bonds in layers, leaving <b>1 delocalised electron</b> per atom — soft (layers slide) and <b>conducts electricity</b>.</p></div></div>

<h2>Hydrogen bonding</h2>
<p>A special strong intermolecular force where hydrogen is bonded to <strong>N, O or F</strong> and is attracted to a lone pair on N, O or F of a neighbouring molecule. It explains:</p>
<ul>
<li><strong>Water's unusually high boiling point</strong> compared with H₂S.</li>
<li><strong>Ice being less dense than water</strong> — the hydrogen bonds hold an open, hexagonal lattice.</li>
<li><strong>Ammonia's high boiling point</strong> and its great solubility.</li>
</ul>

<h2>Chapter recap</h2>
<ul>
<li>Metal + non-metal → ionic (transfer). Non-metal + non-metal → covalent (share). Metal → metallic.</li>
<li>Ionic: giant lattice, high MP, conducts molten/solution only, brittle.</li>
<li>Simple covalent: low MP, does not conduct. Graphite is the exception.</li>
<li>Metallic: sea of delocalised electrons → conducts, malleable.</li>
<li>Coordinate bond: both electrons from one atom (NH₃ + H⁺ → NH₄⁺).</li>
<li>Hydrogen bonding needs H bonded to N, O or F.</li>
</ul>
`,
  quiz: [
    { q: 'Ionic bonding occurs between', opts: ['Two non-metals', 'A metal and a non-metal', 'Two metals', 'Noble gases'], a: 1, why: 'Electrons transfer from the metal (which loses) to the non-metal (which gains).' },
    { q: 'Covalent bonds are formed by', opts: ['Transfer of electrons', 'Sharing of electron pairs', 'Attraction between ions', 'Sharing of neutrons'], a: 1, why: 'Two non-metals share pairs so each achieves a full outer shell.' },
    { q: 'The electron arrangement of a sodium ion Na⁺ is', opts: ['2, 8, 1', '2, 8', '2, 7', '2, 8, 8'], a: 1, why: 'Sodium loses its single 3s electron, leaving the stable 2,8 arrangement of neon.' },
    { q: 'The formula of aluminium oxide is', opts: ['AlO', 'Al₂O₃', 'Al₃O₂', 'Al₂O'], a: 1, why: 'Al³⁺ and O²⁻ need two aluminums (6+) and three oxides (6−) to balance.' },
    { q: 'Ionic compounds conduct electricity when', opts: ['Solid', 'Molten or dissolved in water', 'In any state', 'Never'], a: 1, why: 'Ions must be free to move; in the solid lattice they are fixed in position.' },
    { q: 'An ionic solid is brittle because', opts: ['It evaporates easily', 'Displacing layers brings like charges together, causing repulsion', 'The ions are small', 'It absorbs water'], a: 1, why: 'Repulsion between adjacent like charges shatters the crystal along a plane.' },
    { q: 'The number of lone pairs on the oxygen in H₂O is', opts: ['0', '1', '2', '4'], a: 2, why: 'Oxygen has 6 valence electrons, uses 2 in bonds, leaving 2 lone pairs (4 electrons).' },
    { q: 'Carbon dioxide contains', opts: ['Two single bonds', 'Two double bonds', 'One single and one double bond', 'One triple bond'], a: 1, why: 'O=C=O — each oxygen shares two pairs with carbon.' },
    { q: 'In the ammonium ion NH₄⁺, the bond between N and the added H⁺ is', opts: ['Ionic', 'Covalent', 'Coordinate (dative) covalent', 'Metallic'], a: 2, why: 'Nitrogen donates both electrons of the lone pair to the proton, which brings none.' },
    { q: 'Graphite conducts electricity but diamond does not because in graphite', opts: ['Carbon atoms are smaller', 'Each carbon leaves one delocalised electron free to move', 'The bonds are ionic', 'There are free hydrogen atoms'], a: 1, why: 'Each carbon in graphite forms 3 bonds, leaving 1 electron per atom delocalised in the layer.' },
    { q: 'The forces broken when ice melts are', opts: ['Covalent O–H bonds', 'Hydrogen bonds between molecules', 'Ionic bonds', 'Metallic bonds'], a: 1, why: 'Melting overcomes intermolecular forces; the covalent bonds within each molecule remain intact.' },
    { q: 'Metallic bonding consists of', opts: ['Shared electron pairs', 'Positive ions in a sea of delocalised electrons', 'Transfer of electrons', 'Hydrogen bridges'], a: 1, why: 'Metal atoms release valence electrons which move freely through a lattice of cations.' },
    { q: 'Which substance would have the highest melting point?', opts: ['CH₄', 'NaCl', 'H₂O', 'CO₂'], a: 1, why: 'NaCl is a giant ionic lattice needing much energy to break; the others are simple molecules.' },
    { q: 'Diamond does not conduct electricity because', opts: ['It is a metal', 'All four valence electrons are used in covalent bonds', 'It contains ions', 'It is an insulating gas'], a: 1, why: 'With 4 bonds per carbon there are no delocalised electrons available to move.' },
    { q: 'Which pair of elements would form a covalent bond?', opts: ['Sodium and chlorine', 'Carbon and oxygen', 'Magnesium and oxygen', 'Potassium and iodine'], a: 1, why: 'Carbon and oxygen are both non-metals, so they share electrons.' },
    { q: 'Hydrogen bonding can occur when hydrogen is directly bonded to', opts: ['Carbon or chlorine', 'Nitrogen, oxygen or fluorine', 'Any non-metal', 'Sodium or magnesium'], a: 1, why: 'Only N, O and F are electronegative and small enough to create the strong dipole.' },
    { q: 'Which compound has a higher boiling point than H₂S?', opts: ['H₂Se', 'H₂Te', 'H₂O', 'PH₃'], a: 2, why: 'Water has hydrogen bonding; H₂S has only weak van der Waals forces despite being similar in size.' }
  ]
});
