/* JAMB 2027 Prep — Biology, Chapters 16–20 */

JAMB.addChapter('biology', {
  id: 'ecology',
  title: 'Ecology and the Environment',
  blurb: 'Habitats and niches, feeding relationships, energy flow, ecological pyramids and succession.',
  time: '65 min',
  objectives: [
    'Distinguish habitat from niche',
    'Construct food chains and food webs and identify trophic levels',
    'Explain the 10% rule and the ecological pyramids',
    'Describe primary and secondary succession',
    'Describe the interdependence of organisms and their environment'
  ],
  body: `
<p class="lead">Ecology is the study of how organisms interact with each other and with their surroundings. The marks come from <strong>trophic levels</strong> and <strong>energy transfer</strong>, from <strong>pyramids</strong>, and from <strong>succession</strong> — all of which are very predictable in format.</p>

<h2>Habitat and niche</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Habitat</b></td><td>The <b>place</b> where an organism lives — its address</td><td>A pond, a tree trunk, damp soil</td></tr>
    <tr><td><b>Niche</b></td><td>The organism's <b>role</b> — how it lives, what it eats, when it is active — its profession</td><td>"Nocturnal insect predator on the tree trunk"</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The classic analogy</b>
<p><b>Habitat = address; niche = profession.</b> Two species cannot occupy the same niche in the same habitat for long — this is <strong>Gause's competitive exclusion principle</strong>. If they do compete for exactly the same resources, one will outcompete the other or they will shift to use slightly different resources (<strong>resource partitioning</strong>).</p></div></div>

<h2>Abiotic and biotic factors</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Abiotic (non-living)</th><th>Biotic (living)</th></tr></thead>
  <tbody>
    <tr><td>Light, temperature, pH, salinity</td><td>Predation, competition, disease</td></tr>
    <tr><td>Water, oxygen, wind</td><td>Parasitism, food availability</td></tr>
    <tr><td>Soil type, minerals, current</td><td>Human activity, symbiosis</td></tr>
  </tbody>
</table>

<div class="note note-fact"><span class="ico">📌</span><div><b>Distribution in water</b>
<p>In a pond, the <b>photic (littoral) zone</b> supports rooted plants where light penetrates; the <b>limnetic zone</b> is open water with plankton; the <b>profundal</b> is deep, dark and low in oxygen; the <b>abyssal</b> is the deepest part. In a lake, algae grow where light reaches.</p></div></div>

<h2>Feeding relationships</h2>
<div class="formula-box">
  <div class="fb-head">Trophic levels</div>
  <div class="formula-row"><div class="fname">Producers</div>
    <div class="fexpr">Green plants and algae — they <b>fix light energy</b> by photosynthesis</div>
    <div class="fnote">Always the first trophic level.</div></div>
  <div class="formula-row"><div class="fname">Primary consumers</div>
    <div class="fexpr"><b>Herbivores</b> that eat producers</div></div>
  <div class="formula-row"><div class="fname">Secondary consumers</div>
    <div class="fexpr"><b>Carnivores</b> that eat herbivores</div></div>
  <div class="formula-row"><div class="fname">Tertiary consumers</div>
    <div class="fexpr">Carnivores that eat other carnivores</div></div>
  <div class="formula-row"><div class="fname">Decomposers</div>
    <div class="fexpr">Bacteria and fungi that break down dead matter and return nutrients</div>
    <div class="fnote">Detritivores (earthworms, woodlice) fragment the material first.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>How to label a chain quickly</b>
<p>Ask one question of each organism: <b>does it make its own food?</b> If yes, it is a producer. If it eats a plant, it is a primary consumer. After that, count upward — each step up is another "consumer" level. The chain must always start with a producer.</p></div></div>

<h3>Food chains and food webs</h3>
<ul>
<li>A <strong>food chain</strong> shows a single pathway of energy flow, with arrows pointing <strong>in the direction energy travels</strong> (from the eaten to the eater).</li>
<li>A <strong>food web</strong> is an interlocking network of food chains — most feeding relationships in nature are webs, not simple chains.</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Which way does the arrow point?</b>
<p>The arrow points from the organism that is <strong>eaten</strong> to the organism that <strong>eats it</strong> — that is the direction energy and nutrients move. Writing grass → rabbit → fox is correct; writing fox → rabbit → grass is the classic mistake. Arrows are never drawn "backwards".</p></div></div>

<h3>Types of interaction</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Effect on A</th><th>Effect on B</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Predation</b></td><td>+</td><td>−</td><td>Lion and zebra</td></tr>
    <tr><td><b>Parasitism</b></td><td>+</td><td>− (usually survives)</td><td>Tapeworm in intestine; mistletoe on tree</td></tr>
    <tr><td><b>Commensalism</b></td><td>+</td><td>0 (no effect)</td><td>Remora on a shark; orchid on a tree</td></tr>
    <tr><td><b>Mutualism</b></td><td>+</td><td>+</td><td>Legume and <em>Rhizobium</em>; bee and flower</td></tr>
    <tr><td><b>Competition</b></td><td>−</td><td>−</td><td>Two species feeding on the same prey</td></tr>
    <tr><td><b>Amensalism</b></td><td>0</td><td>−</td><td>A tall tree shading out a smaller plant</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Remember the signs</b>
<p>+ / − = predation or parasitism; + / + = mutualism; + / 0 = commensalism; − / − = competition. Give <em>both</em> organisms' outcomes when asked to define any of these — the definition is incomplete if you describe only one side.</p></div></div>

<h2>Energy flow and the 10% rule</h2>
<div class="formula-box">
  <div class="fb-head">Why energy is lost at each level</div>
  <div class="formula-row"><div class="fname">Only about 10% passes on</div>
    <div class="fexpr">Of the energy fixed by producers, roughly <b>10%</b> is converted into biomass of the next level</div></div>
  <div class="formula-row"><div class="fname">Where the rest goes</div>
    <div class="fexpr"><b>Respiration</b> (released as heat), <b>undigested material</b> in faeces, <b>excretory products</b>, and parts that are not eaten</div></div>
  <div class="formula-row"><div class="fname">Consequence</div>
    <div class="fexpr">Chains are short — usually only <b>3 to 5</b> links</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The single most common question here</b>
<p>"Why are food chains rarely longer than four or five links?" Answer: <b>energy is lost at each transfer, mainly as heat from respiration and in undigested waste</b>, so by the fourth level there is too little energy left to support another predator. State the losses, not just the 10% figure.</p></div></div>

<h2>Ecological pyramids</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Pyramid</th><th>Unit</th><th>Can it invert?</th></tr></thead>
  <tbody>
    <tr><td><b>Numbers</b></td><td>Number of organisms at each level</td><td><b>Yes</b> — e.g. one tree supports many insects</td></tr>
    <tr><td><b>Biomass</b></td><td>Dry mass per unit area at each level</td><td>Occasionally — a fast-growing phytoplankton crop can outweigh the slow-growing zooplankton that grazes it</td></tr>
    <tr><td><b>Energy</b></td><td>kJ per unit area per year</td><td><b>Never</b> — it must decrease upward because energy is always lost</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Which pyramid can never invert?</b>
<p><strong>Energy</strong>. Because energy is lost at every transfer (second law of thermodynamics), each successive level always holds less than the one below. Numbers and biomass pyramids <em>can</em> be inverted — and you should be able to give the reason for each.</p></div></div>

<h2>Ecological succession</h2>
<div class="formula-box">
  <div class="fb-head">The sequence</div>
  <div class="formula-row"><div class="fname">Pioneer species</div>
    <div class="fexpr">Lichens and mosses colonise <b>bare rock</b> — they tolerate extremes and need no soil</div></div>
  <div class="formula-row"><div class="fname">Soil formation</div>
    <div class="fexpr">Acids and physical weathering break down rock; dead material adds humus</div></div>
  <div class="formula-row"><div class="fname">Intermediate stages</div>
    <div class="fexpr">Grasses → herbs → shrubs, each outcompeting the last</div></div>
  <div class="formula-row"><div class="fname">Climax community</div>
    <div class="fexpr">A stable, self-sustaining community (e.g. woodland) in balance with the environment</div>
    <div class="fnote">It persists until disturbed.</div></div>
</div>

<h3>Primary vs secondary succession</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead>
  <tbody>
    <tr><td><b>Starting point</b></td><td><b>No soil</b> — bare rock, lava, new land</td><td><b>Soil already present</b> — after fire, flood, or abandoned farmland</td></tr>
    <tr><td><b>Speed</b></td><td>Slow</td><td><b>Faster</b> — soil and seeds are already there</td></tr>
    <tr><td><b>Pioneer species</b></td><td>Lichens, mosses</td><td>Weeds, grasses</td></tr>
    <tr><td><b>Example</b></td><td>Volcanic island, glacier retreat</td><td>Burnt forest, abandoned field</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The word that decides it</b>
<p>Ask whether <b>soil is present at the start</b>. No soil → primary. Soil present → secondary. That one question answers every "which type of succession?" question.</p></div></div>

<h2>Population ecology</h2>
<h3>Population growth curves</h3>
<ul>
<li><strong>J-shaped (exponential) curve</strong> — resources unlimited; growth accelerates continuously.</li>
<li><strong>S-shaped (sigmoid) curve</strong> — resources become limiting; growth slows and levels off at the <strong>carrying capacity (K)</strong>.</li>
</ul>

<div class="formula-box">
  <div class="fb-head">Factors limiting population growth</div>
  <div class="formula-row"><div class="fname">Density-dependent</div>
    <div class="fexpr">Competition for food and space, predation, <b>disease</b> — effects intensify as density rises</div></div>
  <div class="formula-row"><div class="fname">Density-independent</div>
    <div class="fexpr">Flood, fire, drought, cold snaps — they hit regardless of population size</div>
    <div class="fnote">Also called physical or random factors.</div></div>
</div>

<h3>Mark-recapture</h3>
<p>To estimate a population size:</p>
<div class="formula-box">
  <div class="fb-head">Lincoln–Petersen index</div>
  <div class="formula-row"><div class="fname">Formula</div>
    <div class="fexpr">Population N = (M × C) / R</div>
    <div class="fnote">M = number first marked and released; C = total caught in the second sample; R = number of marked individuals in the second sample.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Estimating a fish population
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Step 1</div>
    Catch and mark 60 fish, then release them and allow them to mix.</div>
    <div class="step"><div class="step-l">Step 2</div>
    Catch a second sample of 80 fish, of which 12 carry marks.</div>
    <div class="step"><div class="step-l">Step 3</div>
    N = (60 × 80) / 12</div>
    <div class="ans">N = 400 fish</div>
  </div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Assumptions of mark-recapture</b>
<p>The estimate only holds if: <b>(1)</b> marked animals mix fully with the population, <b>(2)</b> marking does not increase predation or mortality, <b>(3)</b> no significant migration, births or deaths between samples, <b>(4)</b> marks are not lost or overlooked. Any of these being violated invalidates the result — a standard exam follow-up.</p></div></div>

<h2>Interdependence</h2>
<p>No organism exists alone. Removing one species affects the whole web:</p>
<ul>
<li><strong>Loss of a predator</strong> → herbivore population explodes → overgrazing → vegetation loss → soil erosion.</li>
<li><strong>Loss of pollinators</strong> → reduced seed and fruit set → plant populations fall.</li>
<li><strong>Loss of decomposers</strong> → nutrients locked in dead matter → soil fertility declines → producer growth falls.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Follow the chain of effects</b>
<p>Questions of the form "what would happen if the rabbits were removed?" expect a <em>sequence</em>: the predator loses food and its numbers fall, while the plants the rabbits ate increase. Trace <strong>two or three steps</strong> rather than giving a single effect — that is what earns the marks.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Habitat = address; niche = role. Competitive exclusion means two species cannot share a niche.</li>
<li>Arrows point from eaten to eater — the direction of energy flow.</li>
<li>Only about 10% of energy passes between trophic levels; the rest is lost mainly as heat.</li>
<li>Only the energy pyramid can never invert.</li>
<li>Primary succession starts without soil; secondary starts with soil.</li>
<li>N = (M × C) / R, subject to its four assumptions.</li>
</ul>
`,
  quiz: [
    { q: 'The place where an organism lives is its', opts: ['Niche', 'Habitat', 'Population', 'Community'], a: 1, why: 'The habitat is its address; the niche is its role.' },
    { q: 'The ecological niche of an organism refers to', opts: ['Its exact location', 'Its role and way of life in the ecosystem', 'Its body size', 'Its population density'], a: 1, why: 'It includes what it eats, when it is active and how it interacts with others.' },
    { q: 'Two species cannot occupy the same niche in the same habitat for long because of', opts: ['Commensalism', 'Competitive exclusion', 'Mutualism', 'Predation only'], a: 1, why: 'One will outcompete the other or they will shift to different resources.' },
    { q: 'An organism that makes its own food is a', opts: ['Producer', 'Primary consumer', 'Decomposer', 'Predator'], a: 0, why: 'Producers are the first trophic level — green plants and algae.' },
    { q: 'An animal that feeds on green plants is a', opts: ['Secondary consumer', 'Primary consumer', 'Producer', 'Decomposer'], a: 1, why: 'Herbivores occupy the second trophic level.' },
    { q: 'In the chain grass → grasshopper → lizard → snake, the lizard is a', opts: ['Producer', 'Primary consumer', 'Secondary consumer', 'Decomposer'], a: 2, why: 'It eats the herbivore, so it is the second carnivore level.' },
    { q: 'Arrows in a food chain point', opts: ['From the eater to the eaten', 'From the eaten to the eater', 'Always upwards', 'Towards the producer'], a: 1, why: 'They show the direction in which energy and nutrients flow.' },
    { q: 'A network of interlocking food chains is called a', opts: ['Food chain', 'Food web', 'Trophic level', 'Population'], a: 1, why: 'Most natural feeding relationships form webs rather than simple chains.' },
    { q: 'Organisms that break down dead organic material and return nutrients are', opts: ['Producers', 'Predators', 'Decomposers', 'Herbivores'], a: 2, why: 'Bacteria and fungi — they complete the nutrient cycle.' },
    { q: 'Approximately how much energy is passed from one trophic level to the next?', opts: ['1%', '10%', '50%', '90%'], a: 1, why: 'About 10%; the rest is lost through respiration, faeces and unused material.' },
    { q: 'The greatest energy loss between trophic levels is due to', opts: ['Predation', 'Respiration as heat', 'Photosynthesis', 'Excretion of minerals'], a: 1, why: 'Most of the energy an organism takes in is used to keep itself alive.' },
    { q: 'Food chains are short mainly because', opts: ['Predators are scarce', 'Energy is lost at each transfer', 'Producers are few', 'Decomposers eat the rest'], a: 1, why: 'Too little energy remains to support a further level.' },
    { q: 'A pyramid of numbers can be inverted because', opts: ['Energy increases upwards', 'One large producer can support many small consumers', 'Decomposers are missing', 'Energy is not measured'], a: 1, why: 'One tree may host thousands of insects, making the base smaller.' },
    { q: 'A pyramid of biomass may occasionally be inverted in', opts: ['Terrestrial grassland', 'Phytoplankton–zooplankton systems', 'Woodland', 'Desert'], a: 1, why: 'Fast-growing phytoplankton can be outweighed by the zooplankton grazing on them.' },
    { q: 'Which ecological pyramid can NEVER be inverted?', opts: ['Numbers', 'Biomass', 'Energy', 'Volume'], a: 2, why: 'Energy is inevitably lost at each transfer, so each level is smaller.' },
    { q: 'Ecological succession beginning on bare rock with no soil is called', opts: ['Secondary succession', 'Primary succession', 'Cyclic succession', 'Retrogression'], a: 1, why: 'It starts with pioneer species such as lichens and mosses.' },
    { q: 'Secondary succession differs from primary in that it', opts: ['Begins on bare rock', 'Begins where soil already exists', 'Is always slower', 'Has no climax'], a: 1, why: 'Existing soil and seeds allow it to progress much faster.' },
    { q: 'The first organisms to colonise bare rock are', opts: ['Grasses', 'Trees', 'Lichens and mosses', 'Ferns'], a: 2, why: 'They tolerate extremes and can establish without soil.' },
    { q: 'The final, stable community in succession is the', opts: ['Pioneer community', 'Climax community', 'Intermediate stage', 'Detritus community'], a: 1, why: 'It is self-sustaining and remains until disturbed.' },
    { q: 'Lichens are useful as pioneers because they', opts: ['Grow very fast', 'Produce acids that help weather rock and add humus', 'Are carnivorous', 'Fix nitrogen only'], a: 1, why: 'Their decay adds organic matter to the nascent soil.' },
    { q: 'A population that grows in a J-shaped curve is limited by', opts: ['Density-dependent factors only', 'Nothing — resources are unlimited', 'Competition', 'Predation'], a: 1, why: 'Exponential growth occurs only while resources remain unlimited.' },
    { q: 'The maximum population size an environment can support is the', opts: ['Biotic potential', 'Carrying capacity', 'Growth rate', 'Dispersion'], a: 1, why: 'Marked as K on a sigmoid growth curve.' },
    { q: 'Drought and floods are examples of', opts: ['Density-dependent factors', 'Density-independent factors', 'Biotic factors', 'Competition'], a: 1, why: 'They affect the population whatever its size.' },
    { q: 'Disease and competition are density-dependent because their effect', opts: ['Is unrelated to population size', 'Intensifies as population density rises', 'Kills all individuals', 'Only affects producers'], a: 1, why: 'Transmission and resource pressure both rise with crowding.' },
    { q: 'In mark-recapture, 50 animals are marked and released; 40 are later caught, 8 marked. The population is about', opts: ['200', '250', '400', '1,000'], a: 1, why: 'N = (50 × 40) / 8 = 250.' },
    { q: 'Mark-recapture gives a valid estimate only if marked animals', opts: ['Are easier to catch', 'Mix fully with the population and marks are not lost', 'Are all the same size', 'Are released at night'], a: 1, why: 'Failure of mixing or loss of marks biases the result.' },
    { q: 'In the relationship between a tapeworm and its host, the effect on the host is', opts: ['Beneficial', 'Harmful', 'Neutral', 'Essential'], a: 1, why: 'Parasitism is + for the parasite and − for the host.' },
    { q: 'A clownfish living among sea anemone tentacles, where neither is harmed or helped, is an example of', opts: ['Mutualism', 'Commensalism', 'Parasitism', 'Competition'], a: 1, why: 'One benefits, the other is unaffected.' },
    { q: 'The relationship between Rhizobium bacteria and a leguminous plant is', opts: ['Parasitism', 'Commensalism', 'Mutualism', 'Predation'], a: 2, why: 'The bacteria fix nitrogen for the plant and receive shelter and sugars.' },
    { q: 'If the producer population in a pond were removed, the first effect would be on the', opts: ['Predators', 'Herbivores', 'Decomposers only', 'Water chemistry only'], a: 1, why: 'Primary consumers lose their food supply first.' },
    { q: 'Phytoplankton are important in a lake because they', opts: ['Are predators', 'Produce food by photosynthesis and are the base of the food chain', 'Decompose waste', 'Increase turbidity only'], a: 1, why: 'They are the primary producers of the aquatic ecosystem.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'genetics',
  title: 'Genetics and Inheritance',
  blurb: "Mendel's laws, monohybrid and dihybrid crosses, genetic terminology, blood groups and sex inheritance.",
  time: '70 min',
  objectives: [
    'Define the key genetic terms precisely',
    "State Mendel's two laws and when each applies",
    'Carry out monohybrid and dihybrid crosses and interpret the ratios',
    'Predict the genotypes and phenotypes of offspring using Punnett squares',
    'Explain ABO blood group inheritance and sex determination'
  ],
  body: `
<p class="lead">Genetics is the most mathematical part of the Biology paper — and the most rewarding, because the same small set of crosses produces most of the questions. Master the <strong>vocabulary</strong>, the <strong>Punnett square</strong>, and the <strong>ratios</strong>, and the answers follow by calculation rather than recall.</p>

<h2>The essential vocabulary</h2>
<div class="formula-box">
  <div class="fb-head">Terms that must be exact</div>
  <div class="formula-row"><div class="fname">Gene</div>
    <div class="fexpr">A unit of heredity; a length of DNA coding for a particular characteristic</div></div>
  <div class="formula-row"><div class="fname">Allele</div>
    <div class="fexpr">One of the <b>alternative forms</b> of a gene at the same locus</div>
    <div class="fnote">e.g. tall (T) and short (t) are alleles of the height gene.</div></div>
  <div class="formula-row"><div class="fname">Locus</div>
    <div class="fexpr">The fixed position of a gene on a chromosome</div></div>
  <div class="formula-row"><div class="fname">Genotype</div>
    <div class="fexpr">The <b>genetic constitution</b> — the alleles an organism carries (TT, Tt or tt)</div></div>
  <div class="formula-row"><div class="fname">Phenotype</div>
    <div class="fexpr">The <b>observable characteristic</b> produced by the genotype (tall or short)</div></div>
  <div class="formula-row"><div class="fname">Homozygous</div>
    <div class="fexpr">Two <b>identical</b> alleles — TT (dominant) or tt (recessive)</div></div>
  <div class="formula-row"><div class="fname">Heterozygous</div>
    <div class="fexpr">Two <b>different</b> alleles — Tt</div></div>
  <div class="formula-row"><div class="fname">Dominant</div>
    <div class="fexpr">Expressed in <b>both</b> homozygous and heterozygous states (T)</div></div>
  <div class="formula-row"><div class="fname">Recessive</div>
    <div class="fexpr">Expressed <b>only when homozygous</b> (t) — masked by a dominant allele</div></div>
  <div class="formula-row"><div class="fname">Pure-breeding</div>
    <div class="fexpr">Homozygous for the trait in question — true-breeding over generations</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Phenotype, not "physical appearance" only</b>
<p>The phenotype is every characteristic that can be <em>observed or measured</em> — height, colour, blood group, enzyme production. The genotype is the underlying allele pair. A question may give a phenotype and ask for all possible genotypes: tall plant = <strong>TT or Tt</strong>; short plant = <strong>tt only</strong>. That "or" is where marks are won and lost.</p></div></div>

<h2>Mendel's experiments</h2>
<p>Gregor Mendel worked with <strong>pea plants</strong>, choosing them because they had clear contrasting traits, could be self-pollinated, and were easy to cross-pollinate by hand.</p>

<div class="formula-box">
  <div class="fb-head">Mendel's two laws</div>
  <div class="formula-row"><div class="fname">Law of segregation</div>
    <div class="fexpr">The two alleles of a gene <b>separate</b> during gamete formation, so each gamete carries <b>only one</b> allele</div>
    <div class="fnote">Applies to a single gene — the basis of monohybrid crosses.</div></div>
  <div class="formula-row"><div class="fname">Law of independent assortment</div>
    <div class="fexpr">Alleles of <b>different genes</b> separate independently of one another during gamete formation</div>
    <div class="fnote">True only for genes on <b>different chromosome pairs</b> — the basis of dihybrid crosses.</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Independent assortment has a condition</b>
<p>Genes must be on <b>different chromosomes</b> (or far apart on the same one) to assort independently. Genes close together on the same chromosome are <strong>linked</strong> and tend to be inherited together — which <em>breaks</em> the 9:3:3:1 ratio. If a question mentions linked genes, independent assortment does not apply.</p></div></div>

<h2>Monohybrid crosses</h2>
<h3>The F1 and F2 generations</h3>
<ol>
<li>True-breeding tall (TT) × true-breeding short (tt).</li>
<li>All F1 offspring are <strong>Tt</strong> — all appear <strong>tall</strong>, because tall is dominant.</li>
<li>Self-pollinate the F1: Tt × Tt.</li>
<li>F2 gives <strong>3 tall : 1 short</strong>.</li>
</ol>

<div class="formula-box">
  <div class="fb-head">Standard monohybrid ratio</div>
  <div class="formula-row"><div class="fname">Genotypic ratio</div>
    <div class="fexpr">1 TT : 2 Tt : 1 tt</div></div>
  <div class="formula-row"><div class="fname">Phenotypic ratio</div>
    <div class="fexpr"><b>3 dominant : 1 recessive</b></div></div>
  <div class="formula-row"><div class="fname">Test cross</div>
    <div class="fexpr">Unknown × <b>homozygous recessive</b> (tt)</div>
    <div class="fnote">Used to reveal whether the unknown is TT or Tt: all dominant offspring → TT; 1:1 → Tt.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> A monohybrid cross
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Parents</div>
    Tt (heterozygous tall) × Tt (heterozygous tall)</div>
    <div class="step"><div class="step-l">Gametes</div>
    Each parent produces <b>T</b> and <b>t</b> in equal numbers</div>
    <div class="step"><div class="step-l">Punnett square</div>
    <table class="ledger" style="margin:.6em 0;width:auto">
      <thead><tr><th></th><th>T</th><th>t</th></tr></thead>
      <tbody>
        <tr><td><b>T</b></td><td>TT</td><td>Tt</td></tr>
        <tr><td><b>t</b></td><td>Tt</td><td>tt</td></tr>
      </tbody>
    </table></div>
    <div class="step"><div class="step-l">Result</div>
    Genotypes 1 TT : 2 Tt : 1 tt; phenotypes <b>3 tall : 1 short</b></div>
    <div class="ans">Phenotypic ratio 3:1; 25% short</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The two numbers to remember</b>
<p>Monohybrid F2: <strong>3:1</strong> phenotype, <strong>1:2:1</strong> genotype. Dihybrid F2: <strong>9:3:3:1</strong> phenotype, <strong>1:2:1 in each gene</strong> when considered separately. Also: the F1 generation is always uniform — the variation appears in F2.</p></div></div>

<h3>Other common ratios</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Cross</th><th>Phenotypic ratio</th></tr></thead>
  <tbody>
    <tr><td>Heterozygous × heterozygous (Tt × Tt)</td><td><b>3 : 1</b></td></tr>
    <tr><td>Heterozygous × homozygous recessive (Tt × tt) — test cross</td><td><b>1 : 1</b></td></tr>
    <tr><td>Homozygous dominant × homozygous recessive (TT × tt)</td><td>All dominant (F1 uniform)</td></tr>
    <tr><td>Dihybrid heterozygotes (RrYy × RrYy)</td><td><b>9 : 3 : 3 : 1</b></td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Work each gene separately</b>
<p>For any cross, split it into single-gene problems, work the ratio for each, then multiply the probabilities. RrYy × RrYy → (3:1) × (3:1) = 9:3:3:1. This is quicker and less error-prone than a 16-box square.</p></div></div>

<h2>Dihybrid crosses</h2>
<div class="example">
  <div class="example-h"><span class="num">2</span> Seed shape and colour
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Cross</div>
    RRYY (round, yellow) × rryy (wrinkled, green)</div>
    <div class="step"><div class="step-l">F1</div>
    All RrYy — round and yellow (both dominant)</div>
    <div class="step"><div class="step-l">F1 × F1</div>
    RrYy × RrYy</div>
    <div class="step"><div class="step-l">Expected</div>
    <b>9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green</b></div>
    <div class="ans">9:3:3:1</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>If the ratio is not 9:3:3:1</b>
<p>A different ratio in the F2 suggests something is interfering: <strong>linkage</strong> (genes on the same chromosome), <strong>lethal alleles</strong>, or <strong>epistasis</strong> (one gene masking another). If asked why 9:3:3:1 was not obtained, linkage is the answer expected at this level.</p></div></div>

<h2>Sex determination</h2>
<div class="formula-box">
  <div class="fb-head">Humans: 44 + XX or XY</div>
  <div class="formula-row"><div class="fname">Mother</div>
    <div class="fexpr">Produces only <b>X</b>-bearing eggs</div></div>
  <div class="formula-row"><div class="fname">Father</div>
    <div class="fexpr">Produces <b>X</b>-bearing and <b>Y</b>-bearing sperm in equal numbers</div></div>
  <div class="formula-row"><div class="fname">Result</div>
    <div class="fexpr">XX = girl, XY = boy — the <b>father</b> determines the sex</div>
    <div class="fnote">50 : 50 each time.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Who decides?</b>
<p><strong>The father</strong>, because only he produces two kinds of gamete. A common misconception is that the mother decides — she does not. If a question asks for the probability of a boy, the answer is <strong>1/2</strong>, unaffected by previous children.</p></div></div>

<h2>ABO blood groups</h2>
<div class="formula-box">
  <div class="fb-head">Multiple alleles and codominance</div>
  <div class="formula-row"><div class="fname">Alleles</div>
    <div class="fexpr"><b>I<sup>A</sup></b>, <b>I<sup>B</sup></b> (both codominant) and <b>i</b> (recessive)</div></div>
  <div class="formula-row"><div class="fname">Genotypes → phenotypes</div>
    <div class="fexpr">I<sup>A</sup>I<sup>A</sup> or I<sup>A</sup>i → <b>group A</b><br>
    I<sup>B</sup>I<sup>B</sup> or I<sup>B</sup>i → <b>group B</b><br>
    I<sup>A</sup>I<sup>B</sup> → <b>group AB</b> (codominant)<br>
    ii → <b>group O</b> (recessive)</div></div>
  <div class="formula-row"><div class="fname">The Rh factor</div>
    <div class="fexpr">A separate gene: Rh⁺ (D present, dominant) or Rh⁻ (dd)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Parents, group A and group B, have a group O child
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Reasoning</div>
    The child is ii, so it inherited one <b>i</b> from each parent. Both parents must therefore carry the recessive allele.</div>
    <div class="step"><div class="step-l">Parent 1</div>
    Group A carrying i → <b>I<sup>A</sup>i</b></div>
    <div class="step"><div class="step-l">Parent 2</div>
    Group B carrying i → <b>I<sup>B</sup>i</b></div>
    <div class="step"><div class="step-l">Possible children</div>
    I<sup>A</sup>I<sup>B</sup> (AB), I<sup>A</sup>i (A), I<sup>B</sup>i (B), ii (O)</div>
    <div class="ans">Each child has a 1 in 4 chance of group O</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Group O is the universal donor; AB the universal recipient</b>
<p><b>O</b> red cells carry <b>no antigen</b>, so they are not attacked by antibodies in any recipient. <b>AB</b> plasma carries <b>no antibodies</b> against A or B, so it can receive any group. Remember: O = no antigen to provoke a reaction; AB = no antibody to attack the donated cells.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Antigens on cells, antibodies in plasma</b>
<p>Group A has <b>A antigens</b> on the red cells and <b>anti-B antibodies</b> in the plasma — and vice versa. Giving group A blood to a group B patient triggers agglutination. If asked what agglutinates, the answer is the <em>red cells</em>.</p></div></div>

<h2>Sex-linked inheritance</h2>
<p>Genes carried on the <strong>X chromosome</strong> are called <strong>X-linked</strong>. Because a male (XY) has only one X, a single recessive allele is <strong>expressed</strong>; a female (XX) needs two copies to show it.</p>

<div class="formula-box">
  <div class="fb-head">X-linked recessive conditions</div>
  <div class="formula-row"><div class="fname">Examples</div>
    <div class="fexpr"><b>Colour blindness</b>, <b>haemophilia</b>, red–green blindness</div></div>
  <div class="formula-row"><div class="fname">Who is affected?</div>
    <div class="fexpr"><b>More males than females</b> — males are hemizygous</div>
    <div class="fnote">A female must inherit the allele from both parents.</div></div>
  <div class="formula-row"><div class="fname">Typical route</div>
    <div class="fexpr">Carrier mother → affected <b>son</b>; or affected mother → all <b>sons</b> affected</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Colour-blind father, normal homozygous mother
  </div>
  <div class="example-b">
    <div class="step"><div class="step-l">Genotypes</div>
    Father X<sup>c</sup>Y (colour blind); mother X<sup>C</sup>X<sup>C</sup> (normal)</div>
    <div class="step"><div class="step-l">Daughters</div>
    All X<sup>C</sup>X<sup>c</sup> — <b>normal but carriers</b></div>
    <div class="step"><div class="step-l">Sons</div>
    All X<sup>C</sup>Y — <b>normal</b>, because they receive a healthy X from their mother</div>
    <div class="ans">No child is colour blind in this cross</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The pattern to look for</b>
<p>X-linked recessive traits appear in <strong>males</strong> and are transmitted by <strong>unaffected (carrier) mothers</strong>. If a condition appears only in boys, or skips generations through the female line, suspect X-linkage. Questions usually ask "which children will be affected?" — give the sex as well as the proportion.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Genotype = alleles; phenotype = observable trait; TT/Tt/tt = homozygous dominant, heterozygous, homozygous recessive.</li>
<li>Segregation separates alleles into gametes; independent assortment applies only to genes on different chromosomes.</li>
<li>Monohybrid F2 = 3:1 (phenotype) and 1:2:1 (genotype); test cross gives 1:1.</li>
<li>Dihybrid F2 = 9:3:3:1; deviation suggests linkage.</li>
<li>The father determines sex by X- or Y-bearing sperm.</li>
<li>ABO: A and B codominant, O recessive; O is universal donor, AB universal recipient.</li>
<li>X-linked recessive conditions affect more males and pass through carrier females.</li>
</ul>
`,
  quiz: [
    { q: 'The observable characteristic of an organism is its', opts: ['Genotype', 'Phenotype', 'Allele', 'Locus'], a: 1, why: 'The phenotype is what can be seen or measured.' },
    { q: 'The genetic constitution of an organism, in terms of its alleles, is its', opts: ['Phenotype', 'Genotype', 'Karyotype', 'Protein'], a: 1, why: 'It is written as an allele pair such as TT, Tt or tt.' },
    { q: 'Two identical alleles for a gene are described as', opts: ['Heterozygous', 'Homozygous', 'Codominant', 'Recessive'], a: 1, why: 'Homozygous dominant (TT) or homozygous recessive (tt).' },
    { q: 'An organism with two different alleles of a gene is', opts: ['Homozygous', 'Heterozygous', 'Pure-breeding', 'Hemizygous'], a: 1, why: 'Such as Tt — also called a hybrid.' },
    { q: 'An allele that is expressed only when homozygous is', opts: ['Dominant', 'Recessive', 'Codominant', 'Sex-linked'], a: 1, why: 'It is masked by a dominant allele in the heterozygote.' },
    { q: 'A dominant allele is one that is expressed', opts: ['Only in the homozygote', 'In both homozygous and heterozygous states', 'Only in males', 'Never in the F2'], a: 1, why: 'It shows its effect even when a recessive allele is present.' },
    { q: 'The alternative forms of a gene are called', opts: ['Loci', 'Alleles', 'Chromosomes', 'Gametes'], a: 1, why: 'Different alleles of the same gene occupy the same locus.' },
    { q: 'The fixed position of a gene on a chromosome is its', opts: ['Allele', 'Locus', 'Genotype', 'Trait'], a: 1, why: 'Homologous chromosomes carry the same genes at the same loci.' },
    { q: 'Mendel worked with', opts: ['Fruit flies', 'Pea plants', 'Mice', 'Bacteria'], a: 1, why: 'They had clear contrasting traits and could be cross-pollinated by hand.' },
    { q: 'The law of segregation states that', opts: ['Genes are located on chromosomes', 'The two alleles of a gene separate during gamete formation', 'Alleles assort independently', 'Dominant alleles are always expressed'], a: 1, why: 'Each gamete receives only one allele of each gene.' },
    { q: 'The law of independent assortment applies to genes that are', opts: ['On the same chromosome close together', 'On different chromosome pairs', 'Always dominant', 'Sex-linked'], a: 1, why: 'Genes close together on one chromosome are linked and do not assort independently.' },
    { q: 'A test cross involves crossing the unknown with a', opts: ['Homozygous dominant', 'Heterozygote', 'Homozygous recessive', 'Wild type'], a: 2, why: 'The recessive parent reveals the unknown genotype.' },
    { q: 'A plant of unknown height crossed with a short plant (tt) gives all tall offspring. The unknown is', opts: ['tt', 'Tt', 'TT', 'Cannot be determined'], a: 2, why: 'If it carried a recessive allele, half the offspring would be short.' },
    { q: 'A test cross giving 1 tall : 1 short indicates the unknown is', opts: ['TT', 'Tt', 'tt', 'T'], a: 1, why: 'Half the gametes carry t, which pairs with the tester’s t to give short offspring.' },
    { q: 'The F1 generation from a cross of two true-breeding parents is', opts: ['Varied', 'All identical in phenotype', 'Half dominant', 'Sterile'], a: 1, why: 'It is uniformly heterozygous and shows the dominant trait.' },
    { q: 'When two heterozygotes are crossed, the F2 phenotypic ratio is', opts: ['1:1', '3:1', '9:3:3:1', '1:2:1'], a: 1, why: 'Tt × Tt gives three dominant to one recessive.' },
    { q: 'The genotypic ratio from a monohybrid cross between two heterozygotes is', opts: ['3:1', '1:2:1', '9:3:3:1', '1:1'], a: 1, why: '1 TT : 2 Tt : 1 tt.' },
    { q: 'The expected F2 ratio of a dihybrid cross between two double heterozygotes is', opts: ['3:1', '1:2:1', '9:3:3:1', '1:1:1:1'], a: 2, why: 'Two independent 3:1 ratios multiplied together.' },
    { q: 'A deviation from the 9:3:3:1 ratio in a dihybrid cross may be due to', opts: ['Linkage', 'Protein synthesis', 'Mitosis', 'Osmosis'], a: 0, why: 'Genes on the same chromosome are inherited together.' },
    { q: 'Mendel\'s law of independent assortment is illustrated by', opts: ['A monohybrid cross', 'A dihybrid cross', 'A test cross', 'A backcross'], a: 1, why: 'Two gene pairs assort independently, producing the 9:3:3:1 ratio.' },
    { q: 'In humans, the sex of the offspring is determined by the', opts: ['Mother', 'Father', 'Grandmother', 'Number of X chromosomes only'], a: 1, why: 'Only the father produces both X-bearing and Y-bearing sperm.' },
    { q: 'The chance of a couple having a boy is', opts: ['1/4', '1/2', '3/4', 'Certain'], a: 1, why: 'Half the sperm carry Y and half carry X.' },
    { q: 'A normal female (XX) produces eggs that are', opts: ['Half X and half Y', 'All X', 'All Y', 'Either XX or XY'], a: 1, why: 'Females have no Y chromosome to contribute.' },
    { q: 'In the ABO system, the alleles I(A) and I(B) are', opts: ['Recessive to each other', 'Codominant', 'Sex-linked', 'Lethal'], a: 1, why: 'Both are expressed in a group AB individual.' },
    { q: 'A person of blood group AB has the genotype', opts: ['I(A)I(A)', 'I(B)I(B)', 'I(A)I(B)', 'ii'], a: 2, why: 'Both antigens are expressed on the red cells.' },
    { q: 'A person of blood group O has the genotype', opts: ['I(A)I(B)', 'ii', 'I(A)i', 'I(B)i'], a: 1, why: 'The O allele is recessive, so only ii shows the phenotype.' },
    { q: 'A group A parent and a group B parent can have a child of group', opts: ['Only AB', 'AB, A, B or O', 'Only O', 'Only A and B'], a: 1, why: 'If both are heterozygous (I(A)i and I(B)i), all four groups are possible.' },
    { q: 'Group O blood is called the universal donor because its red cells have', opts: ['Both antigens', 'No A or B antigens', 'No Rh antigen', 'Antibodies only'], a: 1, why: 'With no antigens to attack, they can be given to any recipient.' },
    { q: 'Group AB is the universal recipient because its plasma contains', opts: ['Anti-A and anti-B antibodies', 'Neither anti-A nor anti-B antibodies', 'Only anti-O', 'No proteins'], a: 1, why: 'No antibodies are present to agglutinate donated cells.' },
    { q: 'A person of group A has antibodies against', opts: ['A antigen', 'B antigen', 'Both A and B', 'Neither'], a: 1, why: 'Anti-B antibodies circulate in the plasma.' },
    { q: 'Which condition is inherited as X-linked recessive?', opts: ['Albinism', 'Haemophilia', 'Sickle-cell anaemia', 'Cystic fibrosis'], a: 1, why: 'It is carried on the X chromosome and mainly affects males.' },
    { q: 'Colour blindness is more common in males because', opts: ['Men are larger', 'They have only one X chromosome, so one recessive allele is expressed', 'It is Y-linked', 'Women cannot be carriers'], a: 1, why: 'Males are hemizygous for X-linked genes.' },
    { q: 'A colour-blind man and a normal homozygous woman will have', opts: ['All colour-blind children', 'Normal sons and carrier daughters', 'All carrier children', 'Only affected daughters'], a: 1, why: 'The sons receive a healthy X from the mother.' },
    { q: 'A carrier woman (X(C)X(c)) and a normal man have a son. The chance he is colour-blind is', opts: ['0', '1/4', '1/2', '1'], a: 2, why: 'Half his gametes receive the X(c) allele.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'variation-evolution',
  title: 'Variation and Evolution',
  blurb: 'Types of variation, natural selection, evidence for evolution, and the mechanisms that change species.',
  time: '55 min',
  objectives: [
    'Distinguish continuous from discontinuous variation',
    'Explain the sources of genetic variation',
    "Describe natural selection as Darwin proposed it",
    'Compare Lamarck with Darwin',
    'Classify the evidence for evolution'
  ],
  body: `
<p class="lead">Variation is the raw material of evolution: without differences between individuals, natural selection has nothing to act on. The exam asks for <strong>types of variation</strong>, <strong>Darwin's mechanism</strong>, and the <strong>evidence</strong> — comparative anatomy, fossils, and embryology.</p>

<h2>Types of variation</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Continuous</th><th>Discontinuous</th></tr></thead>
  <tbody>
    <tr><td><b>Range</b></td><td>A <b>gradual range</b> of values with no clear cut-off</td><td><b>Distinct, separate</b> categories</td></tr>
    <tr><td><b>Graph shape</b></td><td>Smooth bell-shaped curve (normal distribution)</td><td>Bar chart with gaps between categories</td></tr>
    <tr><td><b>Controlled by</b></td><td>Many genes (<b>polygenic</b>) plus environment</td><td>Single gene (or a small number)</td></tr>
    <tr><td><b>Environment</b></td><td>Strongly influenced</td><td>Little or no influence</td></tr>
    <tr><td><b>Examples</b></td><td>Height, weight, skin colour, yield</td><td>Blood group, tongue rolling, sex, eye colour</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>How to decide from the graph</b>
<p>If the histogram shows a <b>smooth curve with no gaps</b>, it is continuous. If there are <b>separate bars with gaps</b> between categories, it is discontinuous. A question almost always gives you the graph and asks which type it is.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Sex is discontinuous but not inherited in the usual way</b>
<p>Sex falls into two discrete categories, so it is discontinuous variation — but it is determined by chromosomes, not by alleles of a single gene. Be ready to give <em>both</em> the category and the reason.</p></div></div>

<h2>Sources of genetic variation</h2>
<ul>
<li><strong>Mutation</strong> — a change in the DNA sequence; the <em>ultimate</em> source of all new alleles.</li>
<li><strong>Meiosis</strong> — produces genetically different gametes through:
  <ul>
  <li><strong>Independent assortment</strong> of chromosomes.</li>
  <li><strong>Crossing over</strong> (recombination) between homologous chromosomes in prophase I.</li>
  <li><strong>Random fertilisation</strong> — any sperm may meet any egg.</li>
  </ul>
</li>
<li><strong>Environmental variation</strong> — non-genetic differences within an individual's capacity.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Mutation is the only source of new alleles</b>
<p>Meiosis and fertilisation <em>reshuffle</em> existing alleles and create new combinations, but they do not create <em>new</em> alleles. Only <strong>mutation</strong> does that. If a question asks for the ultimate origin of genetic variation, the answer is mutation.</p></div></div>

<h2>Genetic and environmental variation</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Cause</th><th>Heritable?</th></tr></thead>
  <tbody>
    <tr><td><b>Genetic variation</b></td><td>Differences in alleles</td><td><b>Yes</b> — passed to offspring</td></tr>
    <tr><td><b>Environmental variation</b></td><td>Differences in nutrition, light, temperature</td><td>No</td></tr>
    <tr><td><b>Interaction</b></td><td>Most traits show <b>both</b> — the phenotype results from genotype × environment</td><td>Partly</td></tr>
  </tbody>
</table>

<h2>Natural selection</h2>
<div class="formula-box">
  <div class="fb-head">Darwin's mechanism, step by step</div>
  <div class="formula-row"><div class="fname">1. Overproduction</div>
    <div class="fexpr">More offspring are produced than can survive</div></div>
  <div class="formula-row"><div class="fname">2. Variation</div>
    <div class="fexpr">Individuals differ; much of that variation is <b>heritable</b></div></div>
  <div class="formula-row"><div class="fname">3. Struggle for existence</div>
    <div class="fexpr">Resources are limited, so competition and predation occur</div></div>
  <div class="formula-row"><div class="fname">4. Differential survival</div>
    <div class="fexpr">Individuals with advantageous variations are more likely to <b>survive and reproduce</b> — "survival of the fittest"</div></div>
  <div class="formula-row"><div class="fname">5. Inheritance</div>
    <div class="fexpr">The favourable traits are passed on, so they become <b>more common</b> in the population</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>What "fitness" means</b>
<p>In evolution, <strong>fitness</strong> is not strength — it is the ability to <strong>survive and leave fertile offspring</strong>. An organism that is well suited to its environment but produces no offspring has zero evolutionary fitness. Answer with "leaves more surviving offspring", not "is stronger".</p></div></div>

<h3>Types of natural selection</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Pressure</th><th>Effect on the distribution</th></tr></thead>
  <tbody>
    <tr><td><b>Directional</b></td><td>Environment changes in one direction</td><td>The curve shifts — the mean moves</td></tr>
    <tr><td><b>Stabilising</b></td><td>Both extremes selected against</td><td>The curve <b>narrows</b> around the mean; extremes removed</td></tr>
    <tr><td><b>Disruptive</b></td><td>Both extremes favoured over the mean</td><td>The curve develops <b>two peaks</b></td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Stabilising selection is the common one</b>
<p>In a stable environment, average individuals do best and both extremes are selected against — which is why most human babies are of average birth weight. Describe the shape of the curve: narrower and taller, with the mean unchanged.</p></div></div>

<h3>Industrial melanism</h3>
<p>The peppered moth (<em>Biston betularia</em>): before industrialisation the pale form was camouflaged against lichen-covered bark and the dark (melanic) form was easily seen. Soot darkened the bark, reversing the advantage — the <strong>dark form increased</strong>. With clean air, the pale form has returned again. This is <strong>directional selection</strong> driven by <strong>predation</strong>.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>What the moths demonstrate</b>
<p>The selective agent is <strong>predation by birds</strong>, not the ability to breed faster. The change in frequency of the allele is the observable evidence — the individual moths do not change colour in their lifetime. "The population changed, not the individuals" is the point being tested.</p></div></div>

<h2>Lamarck vs Darwin</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Lamarck</th><th>Darwin</th></tr></thead>
  <tbody>
    <tr><td><b>Mechanism</b></td><td>Use and disuse; organisms change during their life</td><td>Selection of pre-existing variation</td></tr>
    <tr><td><b>Inheritance</b></td><td>Acquired characteristics are inherited</td><td>Only inherited variations are passed on</td></tr>
    <tr><td><b>Direction</b></td><td>Driven by need; organisms strive upward</td><td>Driven by differential survival and reproduction</td></tr>
    <tr><td><b>Example</b></td><td>Giraffes stretched their necks, so offspring had longer necks</td><td>Long-necked giraffes reached more food, survived and left more offspring</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Acquired traits are not inherited</b>
<p>A bodybuilder's muscles, a tailor's skill, or a scar do not pass to offspring — they do not alter the genes in the gametes. This is the fundamental flaw in Lamarckism, and it is the reason his giraffe explanation fails: the variation must <strong>already exist</strong> before selection can act.</p></div></div>

<h2>Evidence for evolution</h2>
<h3>Comparative anatomy</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Meaning</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Homologous structures</b></td><td>Same <b>basic structure</b>, different function — indicate <b>common ancestor</b></td><td>Human arm, whale flipper, bat wing, horse leg — same bones</td></tr>
    <tr><td><b>Analogous structures</b></td><td>Same <b>function</b>, different structure — indicate <b>convergent evolution</b>, not common ancestry</td><td>Insect wing and bird wing; cactus spines and leaf spines</td></tr>
    <tr><td><b>Vestigial organs</b></td><td>Reduced, non-functional remnants of once-useful structures</td><td>Human appendix, wisdom teeth, goosebumps, pelvic bones in whales</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Homologous vs analogous, in one line</b>
<p><b>Homologous = same origin, different function</b> (common ancestry). <b>Analogous = different origin, same function</b> (similar environmental pressure). Get the two backwards and you lose the mark — the test is always <em>structure or function?</em></p></div></div>

<h3>Other evidence</h3>
<ul>
<li><strong>Fossils</strong> — preserved remains showing forms that changed over time; dated by rock layers (stratigraphy) and by radiocarbon/uranium dating. They provide a <em>direct</em> record but are incomplete, since soft-bodied organisms rarely fossilise.</li>
<li><strong>Embryology</strong> — vertebrate embryos look strikingly similar early on (gill slits, tails), suggesting shared ancestry; the differences emerge later.</li>
<li><strong>Comparative biochemistry</strong> — the more closely related two species are, the more similar their proteins and DNA. Cytochrome c is a favourite example.</li>
<li><strong>Homologous chromosomes and body plans</strong> — same genes in the same order across related species.</li>
<li><strong>Vestigial structures and atavisms</strong> — reappearance of ancestral features.</li>
</ul>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why some fossils are "missing links"</b>
<p>Fossilisation requires rapid burial in sediment and special conditions, so the record has gaps — particularly for soft-bodied organisms and for species living in environments where preservation is poor. The gaps are accidents of preservation, not evidence against evolution.</p></div></div>

<h2>Speciation</h2>
<ol>
<li>A population becomes <strong>geographically isolated</strong> (river, mountain, glacier).</li>
<li>The separated groups experience <strong>different environmental pressures</strong>.</li>
<li><strong>Different mutations</strong> are selected in each group.</li>
<li>Over many generations the gene pools <strong>diverge</strong>.</li>
<li>Eventually they can no longer interbreed to produce fertile offspring — <strong>new species</strong> are formed.</li>
</ol>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The definition of a species</b>
<p>A group of similar organisms that can interbreed <strong>freely in nature</strong> to produce <strong>fertile</strong> offspring. The word <em>fertile</em> is essential — mules are the offspring of a horse and a donkey but are sterile, so horse and donkey remain <b>separate species</b>.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Continuous = polygenic, environmentally influenced, bell curve; discontinuous = single gene, discrete categories.</li>
<li>Mutation is the only source of new alleles; meiosis and fertilisation create new combinations.</li>
<li>Natural selection: overproduction → variation → competition → differential survival → inheritance.</li>
<li>Lamarck wrongly assumed acquired characteristics are inherited.</li>
<li>Homologous = common ancestry; analogous = convergent evolution; vestigial = reduced remnants.</li>
<li>Isolation plus divergent selection produces new species.</li>
</ul>
`,
  quiz: [
    { q: 'Variation in height among people is described as', opts: ['Discontinuous', 'Continuous', 'Sex-linked', 'Lethal'], a: 1, why: 'It shows a gradual range of values with no clear cut-off.' },
    { q: 'A graph of continuous variation would show', opts: ['Separate bars with gaps', 'A smooth bell-shaped curve', 'Two peaks only', 'No pattern'], a: 1, why: 'The normal distribution has no gaps between categories.' },
    { q: 'Which of these is an example of discontinuous variation?', opts: ['Height', 'Weight', 'Blood group', 'Skin colour'], a: 2, why: 'Blood groups fall into distinct, separate categories.' },
    { q: 'Continuous variation is usually controlled by', opts: ['A single gene', 'Many genes and the environment', 'The Y chromosome', 'Mutation only'], a: 1, why: 'It is polygenic, and environmental factors add further spread.' },
    { q: 'Discontinuous variation is typically controlled by', opts: ['Many genes', 'A single gene', 'The environment', 'Age'], a: 1, why: 'One gene with distinct alleles gives clear categories.' },
    { q: 'Skin colour is best described as', opts: ['Discontinuous', 'Continuous', 'Sex-linked', 'Uncontrolled'], a: 1, why: 'It ranges gradually across a wide spectrum.' },
    { q: 'The ultimate source of all genetic variation is', opts: ['Meiosis', 'Mutation', 'Fertilisation', 'Natural selection'], a: 1, why: 'Only mutation creates new alleles.' },
    { q: 'New combinations of alleles are produced during', opts: ['Mitosis', 'Meiosis', 'Osmosis', 'Transpiration'], a: 1, why: 'Independent assortment and crossing over reshuffle existing alleles.' },
    { q: 'Crossing over occurs during', opts: ['Prophase I of meiosis', 'Metaphase of mitosis', 'Anaphase II only', 'Interphase only'], a: 0, why: 'Homologous chromosomes exchange segments while paired as bivalents.' },
    { q: 'The process by which random gametes fuse is called', opts: ['Selection', 'Random fertilisation', 'Mutation', 'Isolation'], a: 1, why: 'It adds to the genetic variety of the next generation.' },
    { q: 'Darwin\'s theory of natural selection begins with', opts: ['Overproduction of offspring', 'Mutation', 'Isolation', 'Domestication'], a: 0, why: 'More offspring are produced than the environment can support.' },
    { q: 'In natural selection, organisms with favourable variations', opts: ['All die', 'Survive and leave more offspring', 'Change during their lifetime', 'Acquire new traits'], a: 1, why: 'Their traits become more common in the population.' },
    { q: '"Survival of the fittest" means those that', opts: ['Are strongest', 'Survive and reproduce most successfully', 'Are largest', 'Eat most food'], a: 1, why: 'Fitness is measured in surviving fertile offspring.' },
    { q: 'A giraffe with a longer neck reaching more food is used by Darwin to illustrate', opts: ['Artificial selection', 'Natural selection', 'Acquired inheritance', 'Genetic drift'], a: 1, why: 'The pre-existing long-necked variant reached more food, survived better and left more offspring.' },
    { q: 'Lamarck\'s theory was based on', opts: ['Natural selection', 'Use and disuse with inheritance of acquired characters', 'Mutation', 'Isolation'], a: 1, why: 'He proposed that structures used heavily develop and are passed on.' },
    { q: 'The major flaw in Lamarck\'s theory is that', opts: ['Giraffes do not exist', 'Acquired characteristics do not alter genes and are not inherited', 'Peas grow too fast', 'Variation does not exist'], a: 1, why: 'Muscles developed in life do not change the alleles in gametes.' },
    { q: 'The limbs of a human, a whale and a bat are described as homologous because they', opts: ['Perform the same function', 'Have the same basic structure from a common ancestor', 'Are both used for flying', 'Are useless'], a: 1, why: 'Same bones, different functions — evidence of divergent evolution.' },
    { q: 'The wings of an insect and the wing of a bird are described as analogous because they', opts: ['Have the same structure', 'Have the same function but different origin', 'Come from a common ancestor', 'Both contain feathers'], a: 1, why: 'Similar environmental pressures produced similar solutions.' },
    { q: 'Homologous structures indicate', opts: ['Convergent evolution', 'Divergent evolution from a common ancestor', 'That the organisms live in the same habitat', 'Lethal mutation'], a: 1, why: 'A shared plan modified for different uses.' },
    { q: 'Analogous structures indicate', opts: ['Common ancestry', 'Convergent evolution', 'Vestigial organs', 'Linkage'], a: 1, why: 'Unrelated organisms evolving similar solutions to similar problems.' },
    { q: 'The human appendix and wisdom teeth are examples of', opts: ['Homologous organs', 'Vestigial organs', 'Analogous organs', 'Homing organs'], a: 1, why: 'Functional remnants of structures that were useful in ancestors.' },
    { q: 'The strongest direct evidence of changes over geological time is provided by', opts: ['Fossils', 'Blood groups', 'Nutrition', 'Ecology'], a: 0, why: 'They record actual forms that lived in earlier periods.' },
    { q: 'Fossils are dated by', opts: ['Their colour', 'The rock layers in which they are found', 'Their size', 'Their genus name'], a: 1, why: 'Deeper strata are older, supplemented by radiometric dating.' },
    { q: 'The fossil record is incomplete mainly because', opts: ['Fossils decay too slowly', 'Soft-bodied organisms rarely fossilise and conditions must be special', 'Scientists cannot find them', 'Fossils are all in one place'], a: 1, why: 'Preservation requires rapid burial in suitable sediment.' },
    { q: 'Similarities in the early embryonic stages of vertebrates provide evidence for', opts: ['Convergent evolution', 'A common ancestor', 'Natural selection only', 'Genetic engineering'], a: 1, why: 'Shared developmental pathways suggest shared ancestry.' },
    { q: 'The more similar the cytochrome c molecules of two species, the', opts: ['Less closely related they are', 'More closely related they are', 'More different their habitats', 'Older the species'], a: 1, why: 'Protein sequences accumulate changes at a roughly constant rate.' },
    { q: 'A species is defined as a group that can', opts: ['Live in the same place', 'Interbreed freely to produce fertile offspring', 'Look alike', 'Eat the same food'], a: 1, why: 'The ability to produce fertile offspring is the essential criterion.' },
    { q: 'Mules are sterile, which shows that horses and donkeys', opts: ['Are the same species', 'Are separate species', 'Are homologous', 'Are analogous'], a: 1, why: 'They cannot produce fertile offspring together.' },
    { q: 'Speciation is most likely to begin with', opts: ['Geographic isolation', 'Increased mutation rate', 'Domestication', 'Predation'], a: 0, why: 'Physical separation stops gene flow between populations.' },
    { q: 'Selection that favours both extremes over the average is', opts: ['Stabilising selection', 'Directional selection', 'Disruptive selection', 'Sexual selection'], a: 2, why: 'The distribution becomes bimodal, with two peaks.' },
    { q: 'Selection that narrows the distribution around the mean is', opts: ['Disruptive', 'Stabilising', 'Directional', 'Random'], a: 1, why: 'Both extremes are selected against in a stable environment.' },
    { q: 'The change in colour of the peppered moth was driven mainly by', opts: ['Mutation rate', 'Predation acting on variation', 'Migration', 'Temperature'], a: 1, why: 'Birds ate the moths that were less camouflaged against the bark.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'health-conservation',
  title: 'Pollution, Conservation, Diseases and Vectors',
  blurb: 'Types of pollution, biodiversity and conservation, major human diseases and their vectors, and controlled farming methods.',
  time: '60 min',
  objectives: [
    'Classify the main types of pollution and their effects',
    'Explain biodiversity and the reasons for conserving it',
    'Describe conservation methods and their value',
    'Identify the major human diseases, their causative organisms and vectors',
    'Explain the advantages of crop rotation, mixed farming and biological control'
  ],
  body: `
<p class="lead">This chapter brings together the applied side of Biology: how human activity damages the environment, why biodiversity matters, and how disease is spread and controlled. The questions are direct — match the <strong>pollutant to the effect</strong>, the <strong>vector to the disease</strong>, and the <strong>method to its benefit</strong>.</p>

<h2>Pollution</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Main pollutants</th><th>Effects</th></tr></thead>
  <tbody>
    <tr><td><b>Water</b></td><td>Sewage, fertiliser run-off, industrial effluent, oil</td><td>Eutrophication, fish kills, disease, oxygen depletion</td></tr>
    <tr><td><b>Air</b></td><td>CO, SO₂, NOₓ, particulates, lead, smoke</td><td>Acid rain, respiratory disease, smog, global warming</td></tr>
    <tr><td><b>Soil</b></td><td>Pesticides, heavy metals, plastics, sewage sludge</td><td>Reduced fertility, poisoning, bioaccumulation</td></tr>
    <tr><td><b>Noise</b></td><td>Machinery, traffic, industry</td><td>Stress, hearing loss, disturbance of wildlife</td></tr>
  </tbody>
</table>

<h3>Eutrophication — the classic sequence</h3>
<div class="formula-box">
  <div class="fb-head">Nutrient enrichment of water</div>
  <div class="formula-row"><div class="fname">1</div>
    <div class="fexpr">Nitrates and phosphates from fertiliser or sewage enter the water</div></div>
  <div class="formula-row"><div class="fname">2</div>
    <div class="fexpr">Algal bloom — algae multiply rapidly and cover the surface</div></div>
  <div class="formula-row"><div class="fname">3</div>
    <div class="fexpr">Light is blocked, so submerged plants cannot photosynthesise and die</div></div>
  <div class="formula-row"><div class="fname">4</div>
    <div class="fexpr">Bacteria <b>decompose</b> the dead material, multiplying and using up <b>dissolved oxygen</b></div></div>
  <div class="formula-row"><div class="fname">5</div>
    <div class="fexpr">Oxygen falls → fish and other aerobic organisms <b>suffocate</b> → only anaerobes remain</div>
    <div class="fnote">Known as a "dead zone".</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Give the sequence, not just the word</b>
<p>Eutrophication questions want the <em>chain</em>: fertiliser → algal bloom → light blocked → plants die → bacteria multiply → <b>oxygen depleted</b> → aquatic animals die. The final link — decomposition consuming oxygen — is the one most often omitted and most often marked.</p></div></div>

<h3>Acid rain</h3>
<ul>
<li>Caused by <strong>sulphur dioxide</strong> and <strong>nitrogen oxides</strong> from burning fossil fuels dissolving in rainwater to form sulphuric and nitric acids.</li>
<li><strong>pH falls</strong> below the normal 5.6 of rainwater.</li>
<li>Effects: damages leaves and waxy cuticles, leaches minerals from soil, kills fish in acidified lakes, corrodes buildings and limestone.</li>
</ul>

<h3>Global warming</h3>
<p><strong>Greenhouse gases</strong> — carbon dioxide, methane, nitrous oxide, CFCs — trap outgoing infrared radiation and raise the average temperature. Consequences: melting ice caps, <strong>sea-level rise</strong>, changed rainfall patterns, and more extreme weather.</p>

<div class="note note-fact"><span class="ico">📌</span><div><b>Deforestation adds to it twice</b>
<p>Burning or rotting trees release stored carbon dioxide, and fewer trees means less photosynthesis to remove CO₂ from the atmosphere. Both effects push in the same direction.</p></div></div>

<h2>Biodiversity and conservation</h2>
<div class="formula-box">
  <div class="fb-head">Levels of biodiversity</div>
  <div class="formula-row"><div class="fname">Genetic</div>
    <div class="fexpr">Variety of genes within a species</div></div>
  <div class="formula-row"><div class="fname">Species</div>
    <div class="fexpr">Variety of species in a habitat</div></div>
  <div class="formula-row"><div class="fname">Ecosystem</div>
    <div class="fexpr">Variety of habitats and communities</div></div>
</div>

<h3>Why conserve?</h3>
<ul>
<li>Species may have <strong>economic value</strong> — food, medicine, timber, industrial products.</li>
<li>Ecological value — pollination, seed dispersal, nutrient cycling, pest control.</li>
<li>Aesthetic, recreational and <strong>tourism</strong> value.</li>
<li><strong>Genetic reservoir</strong> — wild relatives of crops may carry disease resistance or useful traits for future breeding.</li>
<li>Moral and intrinsic value — every species has a right to exist.</li>
</ul>

<h3>Methods of conservation</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Method</th><th>What it means</th></tr></thead>
  <tbody>
    <tr><td><b>National parks and game reserves</b></td><td>Large protected areas where hunting and habitat destruction are prohibited</td></tr>
    <tr><td><b>Botanical and zoological gardens</b></td><td>Breeding programmes for rare species, research and public education</td></tr>
    <tr><td><b>Seed banks and gene banks</b></td><td>Preserve genetic diversity for future use — insurance against extinction</td></tr>
    <tr><td><b>Red Data Book / IUCN</b></td><td>Catalogue of threatened species to focus protection effort</td></tr>
    <tr><td><b>Legislation</b></td><td>Bans on hunting, poaching and trade in endangered species</td></tr>
    <tr><td><b>Reforestation and controlled grazing</b></td><td>Restore habitats and prevent soil erosion and desertification</td></tr>
    <tr><td><b>Ex situ conservation</b></td><td>Protection <em>outside</em> the natural habitat — zoos, aquaria, tissue culture</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>In situ vs ex situ</b>
<p><b>In situ</b> = in the natural habitat (national parks, reserves). <b>Ex situ</b> = outside it (zoos, botanical gardens, seed banks). If asked which is better, in situ conserves the whole <em>ecosystem</em>, not just the species — it also protects its food, competitors and habitat.</p></div></div>

<h2>Human diseases and vectors</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Disease</th><th>Causative organism</th><th>Vector or route</th></tr></thead>
  <tbody>
    <tr><td><b>Malaria</b></td><td><em>Plasmodium</em> (protozoan)</td><td><b>Female Anopheles mosquito</b></td></tr>
    <tr><td><b>Sleeping sickness</b></td><td><em>Trypanosoma</em></td><td><b>Tsetse fly</b></td></tr>
    <tr><td><b>Yellow fever / dengue</b></td><td>Virus</td><td><b>Aedes mosquito</b></td></tr>
    <tr><td><b>Cholera</b></td><td><em>Vibrio cholerae</em></td><td>Contaminated water (no vector)</td></tr>
    <tr><td><b>Typhoid</b></td><td><em>Salmonella typhi</em></td><td>Contaminated food and water</td></tr>
    <tr><td><b>Tuberculosis</b></td><td><em>Mycobacterium tuberculosis</em></td><td>Airborne droplets</td></tr>
    <tr><td><b>Guinea worm</b></td><td><em>Dracunculus</em></td><td>Drinking water with infected crustaceans</td></tr>
    <tr><td><b>Bilharzia (schistosomiasis)</b></td><td><em>Schistosoma</em></td><td><b>Snail</b> intermediate host; cercariae in water</td></tr>
    <tr><td><b>Onchocerciasis (river blindness)</b></td><td><em>Onchocerca</em></td><td><b>Blackfly</b></td></tr>
    <tr><td><b>Anopheles → malaria</b></td><td>—</td><td>Matches only with <b>Anopheles</b></td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Vector, host, carrier — the differences</b>
<p><b>Vector</b> — an animal (usually an arthropod) that <em>transmits</em> the pathogen from one host to another.<br>
<b>Intermediate host</b> — harbours the parasite during one stage of its life cycle.<br>
<b>Carrier</b> — a person or animal harbouring the pathogen with no symptoms, able to spread it.<br>
Malaria: the <em>female Anopheles mosquito</em> is the vector; humans are the definitive host.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Only the female mosquito bites</b>
<p>The female needs a blood meal for egg production, so only she transmits malaria. Also, malaria is caused by a <b>protozoan</b> (<em>Plasmodium</em>), not a virus or bacterium — questions frequently test whether you know the type of organism.</p></div></div>

<h3>Control of mosquitoes</h3>
<ul>
<li><strong>Eliminate breeding sites</strong> — drain stagnant water, clear blocked drains.</li>
<li><strong>Larvicides</strong> and <strong>insecticides</strong> such as DDT to kill larvae and adults.</li>
<li><strong>Insecticide-treated bed nets</strong> — the single most effective personal measure.</li>
<li><strong>Environmental management</strong> — filling puddles, covering tanks, planting oil on water surfaces.</li>
<li><strong>Biological control</strong> — introduce larvivorous fish that eat mosquito larvae.</li>
<li><strong>Screening</strong> and closing windows; repellents.</li>
<li>Eliminate the <strong>snail</strong> intermediate host to control bilharzia.</li>
</ul>

<h3>Methods of transmitting disease</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Route</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Contaminated food and water</b></td><td>Cholera, typhoid, dysentery</td></tr>
    <tr><td><b>Direct contact</b></td><td>Skin infections, measles</td></tr>
    <tr><td><b>Airborne droplets</b></td><td>Tuberculosis, common cold, influenza</td></tr>
    <tr><td><b>Sexual contact</b></td><td>HIV/AIDS, gonorrhoea</td></tr>
    <tr><td><b>Vector bite</b></td><td>Malaria, yellow fever</td></tr>
    <tr><td><b>Animal bite or scratch</b></td><td>Rabies</td></tr>
    <tr><td><b>Soil (wound entry)</b></td><td>Tetanus</td></tr>
  </tbody>
</table>

<h2>Agricultural biology</h2>
<h3>Crop rotation</h3>
<div class="formula-box">
  <div class="fb-head">Why rotate crops</div>
  <div class="formula-row"><div class="fname">Nutrient balance</div>
    <div class="fexpr">Different crops use different minerals, so one crop does not exhaust the soil</div></div>
  <div class="formula-row"><div class="fname">Nitrogen restoration</div>
    <div class="fexpr">Legumes in the rotation <b>fix atmospheric nitrogen</b> through <em>Rhizobium</em>, enriching the soil</div></div>
  <div class="formula-row"><div class="fname">Pest and disease control</div>
    <div class="fexpr">A pest specific to one crop cannot build up year after year</div></div>
  <div class="formula-row"><div class="fname">Soil structure</div>
    <div class="fexpr">Different root systems improve structure and reduce erosion</div></div>
</div>

<h3>Mixed farming</h3>
<ul>
<li>Combines <strong>crops and livestock</strong> on the same holding.</li>
<li>Animal manure returns nutrients to the soil, cutting fertiliser costs.</li>
<li>Crops provide feed for animals; animals provide a second income and spread risk.</li>
<li>Reduces soil erosion and improves soil structure and fertility.</li>
</ul>

<h3>Biological control</h3>
<p>Using <strong>natural enemies</strong> — predators, parasites or pathogens — to keep a pest population in check, instead of chemicals.</p>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Example</th><th>Control agent</th></tr></thead>
  <tbody>
    <tr><td>Cassava mealybug in Africa</td><td>An imported parasitic wasp</td></tr>
    <tr><td>Water hyacinth</td><td>Introduced weevils that feed on it</td></tr>
    <tr><td>Snail hosts of bilharzia</td><td>Introducing a predatory snail or fish</td></tr>
    <tr><td>Mosquito larvae</td><td>Larvivorous fish (<em>Gambusia</em>)</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Advantages of biological over chemical control</div>
  <div class="formula-row"><div class="fname">Benefits</div>
    <div class="fexpr">No <b>pollution</b>; no pesticide residues in food; pests do not develop <b>resistance</b>; cheaper in the long run; selective, so natural enemies are spared</div>
    <div class="fnote">Disadvantages: slower to act, and the introduced agent must not itself become a pest.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The three reasons chemicals fail</b>
<p>Pesticides cause <b>pollution</b>, leave <b>residues</b> in food and the food chain, and pests evolve <b>resistance</b>, requiring ever larger doses. Biological control avoids all three — but its agent must be tested so it does not harm native species.</p></div></div>

<h3>Other farming methods</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Method</th><th>Purpose</th></tr></thead>
  <tbody>
    <tr><td><b>Composting</b></td><td>Recycles organic waste into humus, returning nutrients</td></tr>
    <tr><td><b>Green manure</b></td><td>Ploughing in crops (often legumes) to add organic matter and nitrogen</td></tr>
    <tr><td><b>Mulching</b></td><td>Covers soil to conserve moisture and suppress weeds</td></tr>
    <tr><td><b>Irrigation</b></td><td>Supplies water in dry periods</td></tr>
    <tr><td><b>Variety selection</b></td><td>High-yielding, disease-resistant strains</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Eutrophication: nutrients → bloom → light blocked → plants die → bacteria use up oxygen → aquatic life dies.</li>
<li>SO₂ and NOₓ cause acid rain; CO₂ and methane cause global warming.</li>
<li>Biodiversity has genetic, species and ecosystem levels; in situ protects the whole habitat.</li>
<li>Malaria → Plasmodium → female Anopheles; sleeping sickness → tsetse fly; bilharzia → snail.</li>
<li>Rotate crops to restore nutrients, fix nitrogen and break pest cycles.</li>
<li>Biological control avoids pollution, residues and pest resistance.</li>
</ul>
`,
  quiz: [
    { q: 'The pollutant mainly responsible for acid rain is', opts: ['Carbon dioxide', 'Sulphur dioxide and nitrogen oxides', 'Methane', 'Oxygen'], a: 1, why: 'They dissolve in rainwater to form sulphuric and nitric acids.' },
    { q: 'The greenhouse gas produced in largest amount by human activity is', opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'], a: 1, why: 'From burning fossil fuels and deforestation.' },
    { q: 'Eutrophication of a lake is caused by an excess of', opts: ['Nitrates and phosphates', 'Oxygen', 'Sand', 'Carbon dioxide'], a: 0, why: 'From fertiliser run-off and untreated sewage.' },
    { q: 'The first visible sign of eutrophication is', opts: ['Death of fish', 'An algal bloom', 'Increased clarity', 'Falling temperature'], a: 1, why: 'Rapid algal growth blocks light from reaching submerged plants.' },
    { q: 'The ultimate cause of fish death in eutrophication is', opts: ['Poisoning by the algae', 'Depletion of dissolved oxygen by decomposers', 'Rising temperature only', 'Predation'], a: 1, why: 'Bacteria multiplying to decompose dead material consume the oxygen.' },
    { q: 'Blocking of light in a eutrophic lake leads to', opts: ['More photosynthesis by submerged plants', 'Death of submerged plants', 'More oxygen', 'Clearer water'], a: 1, why: 'The algal layer prevents light reaching the plants below.' },
    { q: 'Smog and respiratory illness are associated with pollution of the', opts: ['Soil', 'Air', 'Water only', 'Noise'], a: 1, why: 'Smoke, particulates and oxides of nitrogen accumulate in the atmosphere.' },
    { q: 'The layer of pollutants that depletes ozone is caused mainly by', opts: ['CO₂', 'CFCs', 'Methane only', 'Water vapour'], a: 1, why: 'Chlorofluorocarbons catalytically destroy ozone in the stratosphere.' },
    { q: 'Excessive CO₂ in the atmosphere causes', opts: ['Global warming', 'Acid rain', 'Eutrophication', 'Soil erosion only'], a: 0, why: 'It absorbs outgoing infrared radiation and raises mean temperature.' },
    { q: 'A direct consequence of global warming is', opts: ['Falling sea level', 'Melting of polar ice and rising sea level', 'Increased ozone', 'More snow everywhere'], a: 1, why: 'Thermal expansion of water and melting ice both raise sea level.' },
    { q: 'Pesticides in the food chain become more concentrated at higher levels, a process called', opts: ['Biodegradation', 'Biomagnification', 'Eutrophication', 'Percolation'], a: 1, why: 'Each trophic level accumulates a greater concentration.' },
    { q: 'Biodiversity includes diversity at all these levels EXCEPT', opts: ['Genetic', 'Species', 'Ecosystem', 'Political'], a: 3, why: 'The three recognised levels are genetic, species and ecosystem.' },
    { q: 'The variety of genes within a single species is', opts: ['Species diversity', 'Genetic diversity', 'Ecosystem diversity', 'Individual diversity'], a: 1, why: 'It is the raw material for adaptation and breeding programmes.' },
    { q: 'A protected area where hunting is prohibited is a', opts: ['National park or game reserve', 'Market', 'Farm', 'Laboratory'], a: 0, why: 'Habitat and species are protected in situ.' },
    { q: 'Preserving seeds for future use is an example of', opts: ['Ex situ conservation', 'In situ conservation', 'Predation', 'Pollution control'], a: 0, why: 'The material is kept outside its natural habitat.' },
    { q: 'Keeping endangered animals in a zoo is', opts: ['In situ conservation', 'Ex situ conservation', 'Natural selection', 'Farming'], a: 1, why: 'The organism is conserved away from its natural habitat.' },
    { q: 'The IUCN Red Data Book lists', opts: ['Pollutants', 'Threatened and endangered species', 'Fertilisers', 'Medicinal plants only'], a: 1, why: 'It helps conservationists target effort where it is most needed.' },
    { q: 'The main reason for conserving a wild relative of a crop plant is that it', opts: ['Looks attractive', 'May carry genes for disease resistance', 'Produces more fruit', 'Is easier to grow'], a: 1, why: 'Genetic reservoirs are valuable for future breeding.' },
    { q: 'Malaria is caused by', opts: ['A bacterium', 'A protozoan, Plasmodium', 'A virus', 'A fungus'], a: 1, why: 'Plasmodium is a single-celled parasite that infects red blood cells.' },
    { q: 'The vector of malaria is the', opts: ['Tsetse fly', 'Female Anopheles mosquito', 'Housefly', 'Blackfly'], a: 1, why: 'Only the female bites, because she needs a blood meal for her eggs.' },
    { q: 'Sleeping sickness is transmitted by the', opts: ['Mosquito', 'Tsetse fly', 'Housefly', 'Tick'], a: 1, why: 'It carries Trypanosoma from animal to human.' },
    { q: 'Yellow fever is transmitted by', opts: ['Anopheles', 'Aedes mosquito', 'Tsetse fly', 'Snail'], a: 1, why: 'Aedes also transmits dengue fever.' },
    { q: 'Cholera is spread mainly by', opts: ['A mosquito vector', 'Contaminated water', 'Airborne droplets', 'Direct contact'], a: 1, why: 'Vibrio cholerae enters through ingested contaminated water or food.' },
    { q: 'Bilharzia (schistosomiasis) involves which intermediate host?', opts: ['Snail', 'Mosquito', 'Rat', 'Fish'], a: 0, why: 'The parasite develops in the snail before entering water.' },
    { q: 'River blindness is transmitted by the', opts: ['Tsetse fly', 'Blackfly', 'Mosquito', 'Bedbug'], a: 1, why: 'It breeds near fast-flowing rivers, hence the name.' },
    { q: 'A vector is defined as an organism that', opts: ['Causes the disease directly', 'Transmits the pathogen from one host to another', 'Is killed by the pathogen', 'Produces the toxin'], a: 1, why: 'It carries the pathogen but need not suffer the disease itself.' },
    { q: 'An organism harbouring a pathogen without symptoms is a', opts: ['Vector', 'Carrier', 'Host only', 'Decomposer'], a: 1, why: 'Carriers can spread the disease without appearing ill.' },
    { q: 'The most effective way of reducing mosquito breeding is to', opts: ['Spray air freshener', 'Eliminate stagnant water', 'Increase lighting', 'Plant trees'], a: 1, why: 'Mosquitoes lay eggs in standing water; removing it removes the habitat.' },
    { q: 'A biological method of controlling mosquito larvae is to', opts: ['Use DDT', 'Introduce larvivorous fish', 'Burn tyres', 'Add fertiliser'], a: 1, why: 'Fish such as Gambusia eat the larvae before they emerge as adults.' },
    { q: 'Tetanus enters the body through', opts: ['A wound in the skin', 'Contaminated water', 'A mosquito bite', 'Airborne droplets'], a: 0, why: 'Clostridium tetani spores in soil infect deep wounds.' },
    { q: 'Rabies is transmitted by', opts: ['Contaminated food', 'The bite of an infected animal', 'Water', 'Soil'], a: 1, why: 'Usually a dog, cat or bat.' },
    { q: 'Tuberculosis is spread mainly by', opts: ['Water', 'Airborne droplets from coughing', 'Vector bite', 'Sexual contact'], a: 1, why: 'Mycobacterium tuberculosis is inhaled in droplets.' },
    { q: 'Crop rotation helps the farmer mainly because it', opts: ['Increases pests', 'Maintains soil fertility and reduces pest buildup', 'Uses more fertiliser', 'Reduces yield'], a: 1, why: 'Legumes restore nitrogen and pests specific to one crop cannot build up.' },
    { q: 'In crop rotation, legumes are included because they', opts: ['Grow faster', 'Fix atmospheric nitrogen in the soil', 'Require little water', 'Are not eaten'], a: 1, why: 'Rhizobium in their root nodules converts N₂ into usable nitrogen compounds.' },
    { q: 'Mixed farming refers to', opts: ['Planting several crops together', 'Keeping livestock and growing crops on the same farm', 'Using mixed fertilisers', 'Cross-breeding animals'], a: 1, why: 'Manure from animals fertilises the land and crops feed the animals.' },
    { q: 'Using natural enemies to control a pest is called', opts: ['Chemical control', 'Biological control', 'Mechanical control', 'Cultural control'], a: 1, why: 'Predators, parasites or pathogens are introduced to hold pest numbers down.' },
    { q: 'A major disadvantage of chemical pesticides is that pests', opts: ['Become more nutritious', 'Develop resistance', 'Reproduce faster only', 'Become larger'], a: 1, why: 'Resistant survivors pass on their resistance, requiring stronger doses.' },
    { q: 'The main advantage of biological control over chemical control is that it', opts: ['Works instantly', 'Causes no pollution or pesticide residue', 'Kills all insects', 'Is always cheaper'], a: 1, why: 'It also avoids the problem of resistance developing.' },
    { q: 'Composting is valuable to the farmer because it', opts: ['Kills seeds', 'Returns organic matter and nutrients to the soil', 'Increases pests', 'Removes nitrogen'], a: 1, why: 'It recycles waste into humus that improves soil structure and fertility.' },
    { q: 'A disadvantage of introducing a biological control agent is that it', opts: ['Is always expensive', 'May itself become a pest if uncontrolled', 'Never works', 'Pollutes water'], a: 1, why: 'The agent must be tested to ensure it does not attack native species.' }
  ]
});
