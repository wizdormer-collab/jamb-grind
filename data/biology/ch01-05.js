/* JAMB 2027 Prep — Biology, Chapters 1–5 */

JAMB.addChapter('biology', {
  id: 'living-things',
  title: 'Living Organisms and the Characteristics of Life',
  blurb: 'What makes something alive, and how each life process keeps it alive.',
  time: '45 min',
  objectives: [
    'State the seven characteristics shared by all living things',
    'Explain each life process and give an example of it',
    'Distinguish living organisms from non-living material',
    'Describe the levels of organisation in a multicellular organism',
    'Explain why the characteristics are interdependent'
  ],
  body: `
<p class="lead">Every question in Biology rests on one idea: <strong>what does a living thing do that a rock does not?</strong> The answer is a set of seven life processes. They are not a checklist to memorise and forget — each one keeps the organism alive, and they depend on each other. Learn them as a working system.</p>

<h2>The seven characteristics</h2>
<p>Use the mnemonic <strong>MRS GREN</strong>:</p>

<div class="formula-box">
  <div class="fb-head">MRS GREN</div>
  <div class="formula-row"><div class="fname">M — Movement</div>
    <div class="fexpr">Change of position, or of part of the body</div>
    <div class="fnote">Animals move actively; plants move their shoots towards light.</div></div>
  <div class="formula-row"><div class="fname">R — Respiration</div>
    <div class="fexpr">Releasing energy from food by breaking down glucose</div>
    <div class="fnote">Happens in every living cell, all the time — not just breathing.</div></div>
  <div class="formula-row"><div class="fname">S — Sensitivity</div>
    <div class="fexpr">Detecting and responding to changes in the environment</div>
    <div class="fnote">Irritability — plants respond to light and gravity.</div></div>
  <div class="formula-row"><div class="fname">G — Growth</div>
    <div class="fexpr">Permanent increase in size and dry mass</div>
    <div class="fnote">Usually by increase in cell number, cell size, or both.</div></div>
  <div class="formula-row"><div class="fname">R — Reproduction</div>
    <div class="fexpr">Producing new individuals of the same kind</div>
    <div class="fnote">Sexual (gametes fuse) or asexual (no gametes).</div></div>
  <div class="formula-row"><div class="fname">E — Excretion</div>
    <div class="fexpr">Removal of the waste products of metabolism</div>
    <div class="fnote">Mainly CO₂, urea, excess water and salts.</div></div>
  <div class="formula-row"><div class="fname">N — Nutrition</div>
    <div class="fexpr">Taking in and using food for energy, growth and repair</div>
    <div class="fnote">Autotrophic (make own food) or heterotrophic (ingest it).</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Respiration is not breathing</b>
<p><b>Respiration</b> is the chemical release of energy inside <em>every</em> living cell — it happens in plants, in bacteria, and in you while you sleep. <b>Breathing</b> (ventilation) is just the mechanical movement of air in and out of the lungs. A question may ask you to distinguish them; this distinction is worth a mark every time.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Excretion is not egestion</b>
<p><b>Excretion</b> removes <em>metabolic</em> wastes — CO₂ from respiration, urea from protein breakdown — which were made inside the body's cells.<br>
<b>Egestion</b> removes <em>undigested</em> food (faeces) that was never absorbed into the cells at all. Faeces are not a waste product of metabolism, so their removal is not excretion. This is a very common trap.</p></div></div>

<h2>The characteristics explained properly</h2>

<h3>Movement</h3>
<p>Animals show <strong>locomotion</strong> — moving the whole body from place to place. Plants cannot, but they show <strong>movement of parts</strong>: shoots bend towards light (phototropism), roots grow downwards (geotropism). Even single-celled organisms such as <em>Amoeba</em> move using pseudopodia.</p>

<h3>Respiration</h3>
<p>Energy is released from glucose and transferred to <strong>ATP</strong> (adenosine triphosphate), the energy currency of the cell. ATP powers muscle contraction, active transport, nerve impulses, growth and synthesis.</p>
<p>Two main types:</p>
<ul>
<li><strong>Aerobic</strong> — with oxygen; large energy yield; glucose + oxygen → carbon dioxide + water.</li>
<li><strong>Anaerobic</strong> — without oxygen; small energy yield; in animals gives lactic acid; in yeast and plants gives ethanol + carbon dioxide.</li>
</ul>

<h3>Sensitivity (irritability)</h3>
<p>Organisms detect stimuli — light, heat, chemicals, pressure, gravity — and respond. Animals use a <strong>nervous system</strong> (fast, short-lived) and an <strong>endocrine system</strong> (hormones, slower but longer-lasting). Plants respond more slowly, using <strong>hormones such as auxins</strong> that redistribute within the plant.</p>

<h3>Growth</h3>
<p><strong>Unlimited growth</strong> — organisms keep growing throughout life, as in plants and many invertebrates.<br>
<strong>Limited growth</strong> — growth stops at a certain size, as in most animals, including humans.</p>
<p>Growth can be measured as an increase in <strong>fresh mass</strong> (includes water), <strong>dry mass</strong> (water removed — the more reliable measure), <strong>length</strong>, or <strong>volume</strong>.</p>

<div class="note note-tip"><span class="ico">💡</span><div><b>Dry mass is the truest measure</b>
<p>Fresh mass fluctuates with the water content of the organism — a plant weighs different amounts at dawn and midday. <b>Dry mass</b> (measured after drying in an oven) removes this variation and gives the real accumulation of material, so it is the most reliable measure of growth.</p></div></div>

<h3>Reproduction</h3>
<p>Ensures the continuation of the species. Not every individual reproduces (worker bees, mules, sterile humans), but the <em>species</em> as a whole does.</p>
<ul>
<li><strong>Sexual</strong> — involves the fusion of two <strong>gametes</strong> to form a <strong>zygote</strong>; produces variation.</li>
<li><strong>Asexual</strong> — no gametes; one parent; offspring are genetically identical (<strong>clones</strong>).</li>
</ul>

<h3>Excretion</h3>
<p>Metabolism produces wastes that would be poisonous if allowed to accumulate. The main excretory products are:</p>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Waste</th><th>From</th><th>Removed by</th></tr></thead>
  <tbody>
    <tr><td>Carbon dioxide</td><td>Aerobic respiration</td><td>Lungs / gills / stomata</td></tr>
    <tr><td>Urea</td><td>Deamination of excess amino acids in the liver</td><td>Kidneys (in urine)</td></tr>
    <tr><td>Excess water</td><td>Respiration and digestion</td><td>Kidneys and skin</td></tr>
    <tr><td>Excess salts</td><td>Diet and metabolism</td><td>Kidneys and sweat glands</td></tr>
    <tr><td>Bile pigment (bilirubin)</td><td>Breakdown of haemoglobin</td><td>Liver, then faeces</td></tr>
  </tbody>
</table>

<h3>Nutrition</h3>
<p><strong>Autotrophic</strong> — the organism makes its own food. Plants and algae photosynthesise; some bacteria use chemical energy.<br>
<strong>Heterotrophic</strong> — the organism must take in food made by others. <em>Holozoic</em> nutrition means ingesting and internally digesting solid food (animals, <em>Amoeba</em>).</p>

<h2>Levels of organisation</h2>
<p>Living things are built up in a hierarchy — a favourite source of "which level is this?" questions.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Level</th><th>Definition</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Cell</b></td><td>The basic structural and functional unit of life</td><td>A red blood cell, a leaf cell</td></tr>
    <tr><td><b>Tissue</b></td><td>A group of similar cells working together</td><td>Epidermis, xylem, muscle fibre</td></tr>
    <tr><td><b>Organ</b></td><td>Different tissues working together for one function</td><td>Heart, leaf, stomach</td></tr>
    <tr><td><b>Organ system</b></td><td>Organs cooperating in a major function</td><td>Digestive, circulatory, respiratory</td></tr>
    <tr><td><b>Organism</b></td><td>A complete living individual</td><td>One maize plant, one person</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The classic "identify the level" question</b>
<p>JAMB loves a list such as: <em>palisade cells → xylem → leaf → transport system → maize plant</em>, and asks which level each is. The giveaway words are: "a group of <b>similar</b> cells" = tissue; "a group of <b>different</b> tissues" = organ.</p></div></div>

<h2>Why the characteristics depend on each other</h2>
<p>The processes form a chain rather than a list:</p>
<ol>
<li><strong>Nutrition</strong> supplies raw materials and energy.</li>
<li><strong>Respiration</strong> releases that energy in a usable form (ATP).</li>
<li>Energy powers <strong>movement</strong>, <strong>growth</strong> and <strong>sensitivity</strong>.</li>
<li>Growth builds the structures needed for <strong>reproduction</strong>.</li>
<li>Metabolism throughout produces wastes, which <strong>excretion</strong> removes.</li>
<li><strong>Sensitivity</strong> lets the organism find food and avoid danger, supporting all the rest.</li>
</ol>

<div class="note note-fact"><span class="ico">📌</span><div><b>Can one characteristic be absent?</b>
<p>A single individual may lack one — a sterile mule does not reproduce; a mature xylem vessel is dead and does not respire. But the <b>species</b> always shows all seven. If a question asks whether an individual organism must show every characteristic, the careful answer is: the <em>species</em> does, not necessarily every individual.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>MRS GREN — Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.</li>
<li>Respiration is chemical energy release in every cell; breathing is merely ventilation.</li>
<li>Excretion removes metabolic wastes; egestion removes undigested food.</li>
<li>Dry mass is the most reliable measure of growth.</li>
<li>Organisation: cell → tissue → organ → organ system → organism.</li>
<li>The seven processes are interdependent, not independent.</li>
</ul>
`,
  quiz: [
    { q: 'The mnemonic MRS GREN stands for the', opts: ['Parts of a cell', 'Seven characteristics of living things', 'Types of nutrition', 'Classes of vertebrates'], a: 1, why: 'Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.' },
    { q: 'Which is NOT one of the seven characteristics?', opts: ['Respiration', 'Reproduction', 'Digestion', 'Excretion'], a: 2, why: 'Digestion is a method of nutrition, not a separate characteristic in its own right.' },
    { q: 'Respiration is best defined as', opts: ['Breathing in and out', 'Releasing energy from food in living cells', 'Moving air through the lungs', 'Exchanging gases at the surface'], a: 1, why: 'It is a chemical process occurring in every living cell, not the mechanical act of breathing.' },
    { q: 'Which process removes the waste products of metabolism?', opts: ['Egestion', 'Excretion', 'Respiration', 'Transpiration'], a: 1, why: 'Excretion removes CO₂, urea and excess salts produced inside the body’s cells.' },
    { q: 'The removal of undigested food from the body is called', opts: ['Excretion', 'Egestion', 'Secretion', 'Assimilation'], a: 1, why: 'Faeces were never absorbed or metabolised, so their removal is not excretion.' },
    { q: 'Urea is produced in the liver by', opts: ['Respiration', 'Deamination of excess amino acids', 'Digestion of protein', 'Breakdown of fats'], a: 1, why: 'The amino group is removed from surplus amino acids and converted to urea for excretion.' },
    { q: 'The most reliable measure of growth in an organism is', opts: ['Fresh mass', 'Dry mass', 'Height only', 'Volume only'], a: 1, why: 'Dry mass removes variation due to water content, giving a true measure of material gained.' },
    { q: 'Growth that continues throughout life is described as', opts: ['Limited growth', 'Unlimited growth', 'Negative growth', 'Determinate growth'], a: 1, why: 'Plants and many invertebrates keep growing; most animals, including humans, stop.' },
    { q: 'Asexual reproduction differs from sexual reproduction in that it involves', opts: ['Fusion of gametes', 'Two parents', 'One parent and no gametes', 'Formation of a zygote'], a: 2, why: 'Asexual reproduction uses mitosis only — no gametes fuse and the offspring are clones.' },
    { q: 'Offspring produced asexually are', opts: ['Genetically different from the parent', 'Genetically identical to the parent', 'Always male', 'Always weaker'], a: 1, why: 'With no gamete fusion there is no genetic mixing, so they are clones.' },
    { q: 'The basic structural and functional unit of life is the', opts: ['Tissue', 'Organ', 'Cell', 'Organ system'], a: 2, why: 'The cell theory states that the cell is the basic unit of all living things.' },
    { q: 'A group of similar cells performing a common function is a', opts: ['Tissue', 'Organ', 'Organism', 'System'], a: 0, why: 'Similar cells working together constitute a tissue — e.g. epithelial tissue.' },
    { q: 'The heart is an example of which level of organisation?', opts: ['Cell', 'Tissue', 'Organ', 'Organ system'], a: 2, why: 'The heart is built of several different tissues (muscle, nerve, connective) working together.' },
    { q: 'Which sequence correctly lists the levels of organisation in order?', opts: ['Cell → organ → tissue → system', 'Tissue → cell → organ → system', 'Cell → tissue → organ → system', 'Organ → cell → tissue → system'], a: 2, why: 'Cells form tissues, tissues form organs, and organs form systems.' },
    { q: 'Organisms that make their own food are called', opts: ['Heterotrophs', 'Autotrophs', 'Saprophytes', 'Parasites'], a: 1, why: 'Autotrophs — chiefly green plants and algae — manufacture food by photosynthesis.' },
    { q: 'Sensitivity in animals is coordinated mainly by the', opts: ['Digestive system', 'Nervous system', 'Excretory system', 'Skeletal system'], a: 1, why: 'The nervous system detects stimuli and coordinates rapid responses; hormones act more slowly.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'classification',
  title: 'Classification of Living Things',
  blurb: 'The hierarchy of classification, characteristics of the major groups, and the five kingdoms.',
  time: '55 min',
  objectives: [
    'State the hierarchy of taxonomic classification',
    'Explain binomial nomenclature and why it is used',
    'Describe the five kingdoms and their distinguishing features',
    'Compare the characteristics of the major invertebrate and vertebrate groups',
    'Explain the advantages and limitations of classification systems'
  ],
  body: `
<p class="lead">Classification is biology's filing system. With over two million known species, scientists need a shared, orderly way to group organisms so that a name means the same thing everywhere. The exam tests the <strong>hierarchy</strong>, <strong>binomial nomenclature</strong>, and the <strong>features that separate the major groups</strong>.</p>

<h2>The hierarchy</h2>
<div class="formula-box">
  <div class="fb-head">Taxonomic ranks, largest to smallest</div>
  <div class="formula-row"><div class="fname">Order</div>
    <div class="fexpr"><b>K</b>ingdom → <b>P</b>hylum → <b>C</b>lass → <b>O</b>rder → <b>F</b>amily → <b>G</b>enus → <b>S</b>pecies</div>
    <div class="fnote">Mnemonic: <b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup.</div></div>
  <div class="formula-row"><div class="fname">Species</div>
    <div class="fexpr">A group of similar organisms that can interbreed freely to produce <b>fertile</b> offspring</div>
    <div class="fnote">The basic unit of classification.</div></div>
  <div class="formula-row"><div class="fname">Genus</div>
    <div class="fexpr">A group of closely related species</div>
    <div class="fnote">e.g. Panthera (lions, tigers, leopards).</div></div>
</div>

<p>As you move down the hierarchy, the groups become <strong>smaller</strong> but the organisms within them become <strong>more similar</strong>. As you move up, the groups become broader and the members share fewer features.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Which rank is the question asking about?</b>
<p>"A group of similar species" = <b>genus</b>. "A group of organisms that can interbreed" = <b>species</b>. "A group of genera with a few features in common" = <b>family</b>. The definitions are precise — learn the exact wording, not approximations.</p></div></div>

<h2>Binomial nomenclature</h2>
<p>Every organism has a two-part scientific name, written in <em>Latin</em>, that means the same thing in every country.</p>

<div class="formula-box">
  <div class="fb-head">The rules</div>
  <div class="formula-row"><div class="fname">Format</div>
    <div class="fexpr"><b>Genus</b> (capital) + <b>species</b> (lower case)</div>
    <div class="fnote">Both italicised, or underlined separately when handwritten.</div></div>
  <div class="formula-row"><div class="fname">Examples</div>
    <div class="fexpr"><i>Homo sapiens</i> · <i>Mangoifera indica</i> · <i>Escherichia coli</i> · <i>Caenorhabditis elegans</i></div></div>
  <div class="formula-row"><div class="fname">Why it is used</div>
    <div class="fexpr">Avoids confusion from <b>common names</b>, which vary by region and language</div>
    <div class="fnote">"Cowpea" names different plants in different places; <i>Vigna unguiculata</i> names only one.</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Capitalisation marks you</b>
<p>The <b>genus is capitalised</b> and the <b>species is not</b>, and the whole name is italicised (or underlined by hand). Writing <i>homo SAPIENS</i> loses the mark. Only the genus takes a capital letter.</p></div></div>

<h2>The five kingdoms</h2>
<p>The most widely used system divides life into five kingdoms based on <strong>cell structure</strong> and <strong>mode of nutrition</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Kingdom</th><th>Cell type</th><th>Nutrition</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td><b>Monera</b></td><td><b>Prokaryotic</b>, no membrane-bound nucleus</td><td>Autotrophic or heterotrophic</td><td>Bacteria, cyanobacteria</td></tr>
    <tr><td><b>Protista</b></td><td>Eukaryotic, mostly single-celled</td><td>Autotrophic or heterotrophic</td><td><em>Amoeba</em>, <em>Paramecium</em>, plasmodium</td></tr>
    <tr><td><b>Fungi</b></td><td>Eukaryotic, cell wall of <b>chitin</b></td><td><b>Saprophytic</b> — secrete enzymes and absorb</td><td>Mushroom, bread mould, yeast</td></tr>
    <tr><td><b>Plantae</b></td><td>Eukaryotic, cell wall of <b>cellulose</b></td><td>Autotrophic — photosynthesis</td><td>Mosses, ferns, maize, hibiscus</td></tr>
    <tr><td><b>Animalia</b></td><td>Eukaryotic, <b>no cell wall</b></td><td>Heterotrophic — ingest</td><td>Humans, earthworm, snail</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The two distinctions that carry most marks</b>
<p><b>Prokaryotic vs eukaryotic:</b> prokaryotes (Monera) have no membrane-bound nucleus and no membrane-bound organelles; their genetic material lies free in the cytoplasm in a region called the <b>nucleoid</b>.<br>
<b>Cell wall composition:</b> fungi have <b>chitin</b>, plants have <b>cellulose</b>, bacteria have <b>murein (peptidoglycan)</b>. Animals have no wall at all.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Why fungi are not plants</b>
<p>Fungi look plant-like (fixed, often with a wall) but are <b>not photosynthetic</b> — they are <b>saprophytic</b>, secreting enzymes onto dead material and absorbing the products. Their wall is chitin, not cellulose. Being unable to photosynthesise is the decisive difference.</p></div></div>

<h2>Comparing the major groups</h2>
<p>Each group is separated from the next by a small number of <strong>key features</strong>. Learn those features and you can place almost any organism.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Phylum</th><th>Key features</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Protozoa</b></td><td>Single-celled, animal-like, no cell wall, some have cilia/flagella/pseudopodia</td><td><em>Amoeba</em>, <em>Plasmodium</em></td></tr>
    <tr><td><b>Porifera</b></td><td>Sessile, porous body with many pores (ostia), internal cavity, no true tissues</td><td>Sponges</td></tr>
    <tr><td><b>Coelenterata</b></td><td>Sac-like gut with one opening, tentacles with <b>nematocysts</b> (stinging cells)</td><td>Hydra, jellyfish, corals</td></tr>
    <tr><td><b>Platyhelminthes</b></td><td><b>Flat</b>, bilaterally symmetrical, dorso-ventrally flattened, some parasitic</td><td>Tapeworm, flatworm</td></tr>
    <tr><td><b>Nematoda</b></td><td>Cylindrical, pointed ends, unsegmented, smooth body wall</td><td>Roundworm, <em>Ascaris</em></td></tr>
    <tr><td><b>Annelida</b></td><td><b>Segmented</b> body, setae (bristles), closed circulatory system</td><td>Earthworm, leech</td></tr>
    <tr><td><b>Arthropoda</b></td><td><b>Jointed appendages</b>, chitinous exoskeleton, segmented body, open circulatory system</td><td>Grasshopper, crab, scorpion</td></tr>
    <tr><td><b>Mollusca</b></td><td>Soft body, often a calcareous <b>shell</b>, muscular <b>foot</b>, mantle</td><td>Snail, cockle, octopus</td></tr>
    <tr><td><b>Echinodermata</b></td><td><b>Spiny-skinned</b>, radial symmetry in adults, water vascular system, tube feet</td><td>Starfish, sea urchin</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The pairs that get confused</b>
<p><b>Annelida vs Nematoda</b> — Annelida are <b>segmented</b> (earthworm); Nematoda are <b>unsegmented</b> (roundworm).<br>
<b>Arthropoda vs Mollusca</b> — Arthropoda have <b>jointed legs</b> and an exoskeleton; Mollusca have a soft body with a <b>muscular foot</b> and often a shell.<br>
<b>Coelenterata</b> is the group with <b>nematocysts</b> — a unique and frequently tested feature.</p></div></div>

<h3>Classes of Arthropoda</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Class</th><th>Legs</th><th>Body segments</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Insecta</b></td><td><b>3 pairs</b></td><td>3 (head, thorax, abdomen)</td><td>Grasshopper, bee</td></tr>
    <tr><td><b>Arachnida</b></td><td><b>4 pairs</b></td><td>2 (cephalothorax, abdomen)</td><td>Spider, scorpion, tick</td></tr>
    <tr><td><b>Crustacea</b></td><td>Usually &gt; 5 pairs</td><td>2 or more</td><td>Crab, crayfish, woodlouse</td></tr>
    <tr><td><b>Myriapoda</b></td><td>Many pairs</td><td>Many</td><td>Centipede, millipede</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Insect vs arachnid, at a glance</b>
<p><b>Spider = Arachnida</b> — <b>4 pairs</b> of legs and <b>2</b> body segments, and it is <b>not</b> an insect. An insect has <b>3 pairs</b> and <b>3</b> segments. This single comparison appears in some form in most years.</p></div></div>

<h2>Phylum Chordata</h2>
<p>The chordates share four features at some stage of life:</p>
<ol>
<li><strong>Notochord</strong> — a flexible rod supporting the body (replaced by the vertebral column in vertebrates).</li>
<li><strong>Dorsal hollow nerve cord</strong> — becomes the brain and spinal cord.</li>
<li><strong>Pharyngeal gill slits</strong> — appear in the throat region.</li>
<li><strong>Post-anal tail</strong> — present at some stage, often lost later.</li>
</ol>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The nerve cord is hollow and dorsal</b>
<p>Chordates have a <b>hollow</b> nerve cord lying <b>dorsally</b> (along the back). An earthworm has a <b>solid ventral</b> nerve cord — which is exactly why it is not a chordate. Both adjectives matter.</p></div></div>

<h2>Classes of vertebrates</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Class</th><th>Key distinguishing features</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Pisces</b></td><td>Gills throughout life, scales, fins, 2-chambered heart, cold-blooded</td><td>Tilapia, shark</td></tr>
    <tr><td><b>Amphibia</b></td><td>Moist scaleless skin, gills as larvae and lungs as adults, 3-chambered heart, cold-blooded</td><td>Frog, toad</td></tr>
    <tr><td><b>Reptilia</b></td><td>Dry <b>keratinised</b> scales, lungs throughout, 3-chambered heart (4 in crocodiles), cold-blooded</td><td>Lizard, snake, crocodile</td></tr>
    <tr><td><b>Aves</b></td><td>Feathers, forelimbs modified as wings, 4-chambered heart, warm-blooded, pneumatic bones</td><td>Pigeon, hawk</td></tr>
    <tr><td><b>Mammalia</b></td><td><b>Mammary glands</b>, hair, 4-chambered heart, warm-blooded, differentiated teeth, diaphragm</td><td>Human, goat, whale</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The mammal that catches people out</b>
<p>Whales and bats are <b>mammals</b> despite living in the sea or flying — because they have hair and mammary glands. The presence of <b>mammary glands</b> is the single defining feature; everything else is secondary. Flight alone does not make something a bird.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Hierarchy: Kingdom → Phylum → Class → Order → Family → Genus → Species.</li>
<li>Binomial: genus capitalised, species lower case, both italicised.</li>
<li>Five kingdoms: Monera (prokaryotic), Protista, Fungi (chitin), Plantae (cellulose), Animalia (no wall).</li>
<li>Annelida segmented vs Nematoda unsegmented; Arthropoda jointed vs Mollusca soft-bodied.</li>
<li>Insecta 3 pairs legs / 3 segments; Arachnida 4 pairs / 2 segments.</li>
<li>Mammals defined by mammary glands and hair, not by habitat.</li>
</ul>
`,
  quiz: [
    { q: 'The correct order of taxonomic ranks from largest to smallest is', opts: ['Kingdom, phylum, class, order, family, genus, species', 'Kingdom, class, phylum, order, family, species, genus', 'Phylum, kingdom, class, order, genus, family, species', 'Kingdom, phylum, order, class, family, genus, species'], a: 0, why: 'KPCOFGS — King Philip Came Over For Good Soup.' },
    { q: 'A group of organisms that can interbreed freely to produce fertile offspring is a', opts: ['Genus', 'Species', 'Family', 'Class'], a: 1, why: 'The species is the basic unit of classification, defined by free interbreeding.' },
    { q: 'A group of closely related species is a', opts: ['Species', 'Genus', 'Order', 'Phylum'], a: 1, why: 'A genus contains several closely related species, such as Panthera.' },
    { q: 'As you move down the taxonomic hierarchy, organisms become', opts: ['More similar', 'Less similar', 'Unrelated', 'Larger in number per group'], a: 0, why: 'Lower ranks group fewer, more closely related organisms.' },
    { q: 'In binomial nomenclature, the scientific name of an organism consists of', opts: ['Genus and species', 'Class and order', 'Family and genus', 'Phylum and class'], a: 0, why: 'Two names: the genus (capitalised) and the specific epithet (lower case).' },
    { q: 'The correct scientific name for humans is', opts: ['homo Sapiens', 'Homo sapiens', 'HOMO sapiens', 'Homo Sapiens'], a: 1, why: 'Genus capitalised, species lower case, and the whole name italicised.' },
    { q: 'Binomial nomenclature was introduced by', opts: ['Darwin', 'Linnaeus', 'Mendel', 'Lamarck'], a: 1, why: 'Carl Linnaeus devised the two-part naming system still used today.' },
    { q: 'The main reason for using scientific names is to', opts: ['Make names shorter', 'Avoid confusion caused by varying common names', 'Classify only plants', 'Honour discoverers'], a: 1, why: 'Common names differ between regions and languages; scientific names are universal.' },
    { q: 'Which kingdom contains prokaryotic organisms?', opts: ['Protista', 'Monera', 'Fungi', 'Animalia'], a: 1, why: 'Monera — bacteria — lack a membrane-bound nucleus.' },
    { q: 'The cell walls of fungi are made of', opts: ['Cellulose', 'Chitin', 'Murein', 'Keratin'], a: 1, why: 'Fungal walls are chitin; plant walls are cellulose; bacterial walls are murein.' },
    { q: 'Fungi differ from plants mainly in that fungi', opts: ['Have a cell wall', 'Are not photosynthetic and absorb nutrition', 'Are unicellular', 'Have a nucleus'], a: 1, why: 'Fungi are saprophytic — they secrete enzymes and absorb the products.' },
    { q: 'Prokaryotic cells differ from eukaryotic cells in that they', opts: ['Have a nucleus', 'Lack a membrane-bound nucleus', 'Have no cytoplasm', 'Are always multicellular'], a: 1, why: 'Prokaryotes have their genetic material free in the cytoplasm in a nucleoid region.' },
    { q: 'Organisms with stinging cells called nematocysts belong to the phylum', opts: ['Porifera', 'Coelenterata', 'Annelida', 'Mollusca'], a: 1, why: 'Nematocysts on the tentacles are the defining feature of Coelenterata.' },
    { q: 'The phylum distinguished by a segmented body is', opts: ['Nematoda', 'Annelida', 'Platyhelminthes', 'Porifera'], a: 1, why: 'Annelids such as the earthworm show true segmentation; nematodes are unsegmented.' },
    { q: 'Jointed appendages and a chitinous exoskeleton are features of', opts: ['Mollusca', 'Arthropoda', 'Echinodermata', 'Coelenterata'], a: 1, why: 'Arthropoda means "jointed foot" — the group’s most obvious feature.' },
    { q: 'A spider belongs to the class', opts: ['Insecta', 'Myriapoda', 'Arachnida', 'Crustacea'], a: 2, why: 'Spiders are arachnids — 4 pairs of legs and 2 body segments, so they are not insects.' },
    { q: 'Organisms of the class Insecta have', opts: ['4 pairs of legs and 2 body segments', '3 pairs of legs and 3 body segments', 'Many pairs of legs', 'No legs'], a: 1, why: 'Head, thorax and abdomen, with three pairs of jointed legs on the thorax.' },
    { q: 'Starfish belong to the phylum Echinodermata, characterised by', opts: ['A shell and muscular foot', 'Spiny skin and a water vascular system', 'Nematocysts', 'A segmented body with setae'], a: 1, why: 'Echinodermata means "spiny skin"; they also have tube feet and radial symmetry as adults.' },
    { q: 'The four features common to all chordates include', opts: ['A ventral solid nerve cord', 'A dorsal hollow nerve cord', 'A shell', 'Jointed legs'], a: 1, why: 'Chordates have a dorsal hollow nerve cord, notochord, gill slits and a post-anal tail.' },
    { q: 'The single feature that defines a mammal is the presence of', opts: ['Feathers', 'Mammary glands', 'Four limbs', 'Lungs'], a: 1, why: 'Mammary glands feed the young with milk; hair is the other key mammalian feature.' },
    { q: 'Which vertebrate class has a 4-chambered heart and is warm-blooded?', opts: ['Reptilia', 'Amphibia', 'Aves', 'Pisces'], a: 2, why: 'Birds have a four-chambered heart and maintain a constant body temperature.' },
    { q: 'Whales are classified as mammals because they', opts: ['Live in water', 'Have mammary glands and hair', 'Breathe through gills', 'Are cold-blooded'], a: 1, why: 'Habitat and mode of life do not decide classification — the defining features do.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'cell',
  title: 'The Cell',
  blurb: 'Cell theory, the structure and function of each organelle, and the differences between plant and animal cells.',
  time: '60 min',
  objectives: [
    'State the cell theory and the evidence for it',
    'Identify the organelles under the microscope and state their functions',
    'Distinguish prokaryotic from eukaryotic cells',
    'Compare plant and animal cells',
    'Explain the functions of the cell membrane'
  ],
  body: `
<p class="lead">The cell is Biology's fundamental unit, and organelle questions are among the most reliable marks in the entire paper. Learn the <strong>function of each structure</strong> and the <strong>plant–animal differences</strong>, and you can answer almost any question on this topic without hesitation.</p>

<h2>The cell theory</h2>
<div class="formula-box">
  <div class="fb-head">The three statements</div>
  <div class="formula-row"><div class="fname">1</div>
    <div class="fexpr">All living organisms are made of one or more <b>cells</b></div></div>
  <div class="formula-row"><div class="fname">2</div>
    <div class="fexpr">The cell is the <b>basic structural and functional unit</b> of life</div></div>
  <div class="formula-row"><div class="fname">3</div>
    <div class="fexpr">All cells arise from <b>pre-existing cells</b> by division</div></div>
</div>

<p>The work of three scientists underpins it:</p>
<ul>
<li><strong>Robert Hooke (1665)</strong> — observed dead cork cells and coined the word "cell".</li>
<li><strong>Matthias Schleiden (1838)</strong> — all plants are made of cells.</li>
<li><strong>Theodor Schwann (1839)</strong> — all animals are made of cells.</li>
<li><strong>Rudolf Virchow (1858)</strong> — <em>Omnis cellula e cellula</em>: all cells come from pre-existing cells.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Hooke saw dead cells</b>
<p>Hooke observed <b>dead</b> cork tissue — he saw empty boxes (cell walls), not living cells. The first living cell to be seen was <strong>Amoeba</strong>, and Robert Brown discovered the <strong>nucleus</strong> in 1831. Expect a "who did what" question here.</p></div></div>

<h2>Prokaryotic vs eukaryotic</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Feature</th><th>Prokaryotic (bacteria)</th><th>Eukaryotic (plants, animals, fungi, protists)</th></tr></thead>
  <tbody>
    <tr><td><b>Nucleus</b></td><td>Absent — DNA free in a <b>nucleoid</b></td><td><b>Present</b>, bounded by a nuclear envelope</td></tr>
    <tr><td><b>Membrane-bound organelles</b></td><td>Absent</td><td>Present (mitochondria, chloroplasts, ER, Golgi)</td></tr>
    <tr><td><b>Ribosomes</b></td><td>Present, <b>smaller (70S)</b></td><td>Present, larger (80S)</td></tr>
    <tr><td><b>Cell wall</b></td><td>Murein (peptidoglycan)</td><td>Cellulose (plants) or chitin (fungi); absent in animals</td></tr>
    <tr><td><b>Size</b></td><td>Small, 0.1–5 µm</td><td>Larger, 10–100 µm</td></tr>
    <tr><td><b>Extra DNA</b></td><td>Often a <b>plasmid</b></td><td>None</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>What a plasmid is for</b>
<p>A <b>plasmid</b> is a small circular piece of DNA, separate from the main chromosome, found in bacteria. It often carries genes for <b>antibiotic resistance</b> and can be transferred between bacteria — which is how resistance spreads. It is also why plasmids are used in genetic engineering.</p></div></div>

<h2>Organelles and their functions</h2>

<div class="formula-box">
  <div class="fb-head">The structures worth knowing cold</div>
  <div class="formula-row"><div class="fname">Cell (plasma) membrane</div>
    <div class="fexpr">A <b>selectively permeable</b> phospholipid bilayer controlling what enters and leaves</div>
    <div class="fnote">Present in every cell — plant, animal and bacterial.</div></div>
  <div class="formula-row"><div class="fname">Cell wall</div>
    <div class="fexpr">A rigid <b>fully permeable</b> layer of cellulose in plants</div>
    <div class="fnote">Supports and protects; prevents bursting; NOT selectively permeable.</div></div>
  <div class="formula-row"><div class="fname">Nucleus</div>
    <div class="fexpr">Contains <b>chromosomes</b> (DNA + protein) and the <b>nucleolus</b>, which makes ribosomes</div>
    <div class="fnote">Controls the activities of the cell; bounded by a nuclear envelope with pores.</div></div>
  <div class="formula-row"><div class="fname">Mitochondrion</div>
    <div class="fexpr">Site of <b>aerobic respiration</b> — the "powerhouse" producing ATP</div>
    <div class="fnote">Double membrane; inner folded into <b>cristae</b> to increase surface area.</div></div>
  <div class="formula-row"><div class="fname">Chloroplast</div>
    <div class="fexpr">Site of <b>photosynthesis</b>; contains <b>chlorophyll</b></div>
    <div class="fnote">In green parts of plants only; stacks of <b>thylakoids</b> called grana.</div></div>
  <div class="formula-row"><div class="fname">Ribosome</div>
    <div class="fexpr">Site of <b>protein synthesis</b></div>
    <div class="fnote">Free in cytoplasm or on rough ER. The smallest organelle.</div></div>
  <div class="formula-row"><div class="fname">Endoplasmic reticulum (ER)</div>
    <div class="fexpr"><b>Rough</b> ER (with ribosomes) modifies and transports protein; <b>smooth</b> ER makes lipids and detoxifies</div></div>
  <div class="formula-row"><div class="fname">Golgi apparatus</div>
    <div class="fexpr">Modifies, packages and labels proteins into vesicles for secretion</div>
    <div class="fnote">The "post office" of the cell.</div></div>
  <div class="formula-row"><div class="fname">Lysosome</div>
    <div class="fexpr">Contains <b>digestive enzymes</b> to break down worn-out organelles and food</div>
    <div class="fnote">A "suicide bag" — releases its enzymes if the cell is damaged.</div></div>
  <div class="formula-row"><div class="fname">Vacuole</div>
    <div class="fexpr">Stores cell sap; in plants it is <b>large and permanent</b>, keeping the cell turgid</div>
    <div class="fnote">In animal cells, small and temporary if present at all.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Membrane vs wall — the classic distinction</b>
<p>The <b>cell membrane is selectively permeable</b> (only some substances pass). The <b>cell wall is fully permeable</b> (freely allows everything) — it provides support but does <b>not</b> control entry. A question asking "which is selectively permeable?" is testing exactly this contrast.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Which organelle is most numerous?</b>
<p><b>Ribosomes</b> — a single active cell can contain millions. Mitochondria are also very numerous in energy-hungry cells such as muscle. If a question asks for the most abundant organelle, the answer is ribosomes.</p></div></div>

<h3>Cells with unusual needs</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Cell</th><th>Adaptation</th></tr></thead>
  <tbody>
    <tr><td><b>Red blood cell (erythrocyte)</b></td><td>Biconcave shape (more surface area for gas exchange); <b>no nucleus</b> in mammals, leaving room for haemoglobin</td></tr>
    <tr><td><b>Root hair cell</b></td><td>Long extension increasing surface area for water and mineral absorption; has <b>no chloroplasts</b></td></tr>
    <tr><td><b>Palisade mesophyll cell</b></td><td>Packed with chloroplasts; near the upper surface to absorb maximum light</td></tr>
    <tr><td><b>muscle cell</b></td><td>Many mitochondria and fibrils for contraction</td></tr>
    <tr><td><b>Nerve cell (neurone)</b></td><td>Very long, with a nucleus in the cell body and extensions for rapid impulse transmission</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Root hair cells have no chloroplasts</b>
<p>They are underground, so there is no light for photosynthesis. They contain mitochondria instead, for the <b>active transport</b> of mineral ions. This is a very common question.</p></div></div>

<h2>Plant vs animal cells</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Structure</th><th>Plant cell</th><th>Animal cell</th></tr></thead>
  <tbody>
    <tr><td><b>Cell wall</b></td><td><b>Yes</b> — cellulose</td><td><b>No</b></td></tr>
    <tr><td><b>Chloroplasts</b></td><td><b>Yes</b> (in green parts)</td><td><b>No</b></td></tr>
    <tr><td><b>Vacuole</b></td><td><b>Large, permanent</b>, filled with cell sap</td><td>Small, temporary, if present</td></tr>
    <tr><td><b>Shape</b></td><td>Fixed and regular</td><td>Rounded and irregular</td></tr>
    <tr><td><b>Storage of food</b></td><td>As <b>starch</b></td><td>As <b>glycogen</b></td></tr>
    <tr><td><b>Lysosomes</b></td><td>Rare</td><td><b>Common</b></td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The four structures to list</b>
<p>If asked for structures found in plant cells but <b>not</b> in animal cells, list exactly four: <b>cell wall, chloroplasts, large permanent vacuole</b>, and (at higher level) <b>plasmodesmata</b>. Being complete is what scores.</p></div></div>

<h2>The cell membrane in detail</h2>
<p>The membrane is a <strong>phospholipid bilayer</strong> with proteins embedded in it — the <strong>fluid mosaic model</strong>.</p>
<ul>
<li><strong>Phospholipids</strong> — hydrophilic heads face outward towards water, hydrophobic tails point inward away from water.</li>
<li><strong>Channel/carrier proteins</strong> — transport specific substances.</li>
<li><strong>Glycoproteins</strong> — act as receptors and recognition markers.</li>
<li><strong>Cholesterol</strong> — maintains fluidity and stability.</li>
</ul>

<h3>How substances cross the membrane</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Process</th><th>Direction</th><th>Energy?</th><th>Protein?</th></tr></thead>
  <tbody>
    <tr><td><b>Diffusion</b></td><td>Down the concentration gradient</td><td>No</td><td>Simple (small molecules) or facilitated</td></tr>
    <tr><td><b>Osmosis</b></td><td>Down the <b>water potential</b> gradient</td><td>No</td><td>Through the bilayer or aquaporins</td></tr>
    <tr><td><b>Active transport</b></td><td><b>Against</b> the gradient</td><td><b>Yes — ATP</b></td><td><b>Yes</b> — carrier proteins</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Active transport needs both ATP and carrier proteins</b>
<p>It moves substances <em>against</em> a concentration gradient, which no passive process can do. Both requirements are usually worth a mark: <b>energy (ATP)</b> and <b>carrier proteins</b> in the membrane. Root hair cells use it to absorb mineral ions.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Cell theory: made of cells; cell is the basic unit; cells come from pre-existing cells.</li>
<li>Prokaryotes lack a nucleus and membrane-bound organelles; they may carry plasmids.</li>
<li>Mitochondria = aerobic respiration. Chloroplasts = photosynthesis. Ribosomes = protein synthesis.</li>
<li>Nucleolus makes ribosomes; lysosomes digest; Golgi packages for secretion.</li>
<li>Membrane is selectively permeable; wall is fully permeable and only gives support.</li>
<li>Plant cells only: wall, chloroplasts, large permanent vacuole; starch not glycogen.</li>
</ul>
`,
  quiz: [
    { q: 'The statement "all cells arise from pre-existing cells" was proposed by', opts: ['Robert Hooke', 'Rudolf Virchow', 'Matthias Schleiden', 'Theodor Schwann'], a: 1, why: 'Virchow stated omnis cellula e cellula in 1858.' },
    { q: 'The scientist who first observed and named cells was', opts: ['Robert Hooke', 'Robert Brown', 'Schleiden', 'Leeuwenhoek'], a: 0, why: 'Hooke examined dead cork in 1665 and called the boxes he saw "cells".' },
    { q: 'The first living cell to be observed was', opts: ['A plant cell', 'Amoeba', 'A red blood cell', 'Yeast'], a: 1, why: 'Leeuwenhoek observed living single-celled organisms including Amoeba.' },
    { q: 'A structure found in prokaryotic but not eukaryotic cells is the', opts: ['Nucleus', 'Plasmid', 'Mitochondrion', 'Chloroplast'], a: 1, why: 'Plasmids are small extra circular DNA molecules typical of bacteria.' },
    { q: 'Prokaryotic cells differ from eukaryotic cells in that they', opts: ['Have a true nucleus', 'Lack a membrane-bound nucleus', 'Contain no DNA', 'Have no ribosomes'], a: 1, why: 'Their genetic material lies free in the cytoplasm in a region called the nucleoid.' },
    { q: 'The organelle described as the powerhouse of the cell is the', opts: ['Ribosome', 'Golgi apparatus', 'Mitochondrion', 'Lysosome'], a: 2, why: 'Mitochondria carry out aerobic respiration and release energy as ATP.' },
    { q: 'Aerobic respiration takes place mainly in the', opts: ['Nucleus', 'Mitochondrion', 'Chloroplast', 'Vacuole'], a: 1, why: 'The cristae of the inner mitochondrial membrane provide a large surface area for the reactions.' },
    { q: 'The site of protein synthesis is the', opts: ['Ribosome', 'Nucleolus', 'Lysosome', 'Golgi body'], a: 0, why: 'Ribosomes, either free in the cytoplasm or attached to rough endoplasmic reticulum.' },
    { q: 'The nucleolus is responsible for', opts: ['Making ribosomes', 'Digesting waste', 'Packaging proteins', 'Storing cell sap'], a: 0, why: 'It assembles ribosomal RNA and manufactures ribosomes.' },
    { q: 'Which organelle contains digestive enzymes?', opts: ['Mitochondrion', 'Lysosome', 'Ribosome', 'Chloroplast'], a: 1, why: 'Lysosomes hold hydrolytic enzymes that break down worn-out organelles and food.' },
    { q: 'The Golgi apparatus functions to', opts: ['Release energy', 'Modify, package and secrete proteins', 'Synthesise ATP', 'Store water'], a: 1, why: 'It receives protein from the rough ER, modifies it and buds off secretory vesicles.' },
    { q: 'Chloroplasts contain the pigment', opts: ['Haemoglobin', 'Chlorophyll', 'Melanin', 'Keratin'], a: 1, why: 'Chlorophyll absorbs light energy for photosynthesis.' },
    { q: 'The cell membrane is described as', opts: ['Fully permeable', 'Selectively permeable', 'Impermeable', 'Porous only to water'], a: 1, why: 'It allows some substances through and restricts others — hence "partially permeable".' },
    { q: 'The cell wall of a plant cell is made of', opts: ['Chitin', 'Cellulose', 'Murein', 'Keratin'], a: 1, why: 'Cellulose gives the wall its strength and rigidity.' },
    { q: 'Compared with the cell membrane, the cell wall is', opts: ['Selectively permeable', 'Fully permeable', 'Impermeable to salts', 'Made of protein'], a: 1, why: 'The wall supports and protects but does not control what enters or leaves.' },
    { q: 'Which structure is found in plant cells but NOT in animal cells?', opts: ['Nucleus', 'Cell wall', 'Cell membrane', 'Ribosome'], a: 1, why: 'Animal cells lack a cell wall, along with chloroplasts and a large permanent vacuole.' },
    { q: 'Animal cells store carbohydrates as', opts: ['Starch', 'Cellulose', 'Glycogen', 'Sucrose'], a: 2, why: 'Animals store glucose as glycogen; plants store it as starch.' },
    { q: 'A large permanent vacuole in a plant cell', opts: ['Digests food', 'Stores cell sap and helps keep the cell turgid', 'Makes protein', 'Produces energy'], a: 1, why: 'Its outward pressure against the wall maintains cell rigidity.' },
    { q: 'Root hair cells contain no chloroplasts because', opts: ['They are dead', 'They are underground and do not photosynthesise', 'They store food', 'They are too small'], a: 1, why: 'With no light they cannot photosynthesise; they rely on mitochondria for ATP.' },
    { q: 'The mammalian red blood cell has no nucleus in order to', opts: ['Move more easily', 'Make room for more haemoglobin', 'Resist infection', 'Store glycogen'], a: 1, why: 'The biconcave, enucleated shape maximises oxygen-carrying capacity.' },
    { q: 'The process that moves substances against a concentration gradient is', opts: ['Diffusion', 'Osmosis', 'Active transport', 'Facilitated diffusion'], a: 2, why: 'Active transport requires energy from ATP and carrier proteins in the membrane.' },
    { q: 'The model describing the cell membrane as a phospholipid bilayer with embedded proteins is the', opts: ['Fluid mosaic model', 'Sandwich model', 'Davson–Danielli model', 'Unit membrane model'], a: 0, why: 'Singer and Nicolson proposed that the proteins float within the fluid bilayer.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'transport-cells',
  title: 'Transport in Cells: Osmosis, Diffusion and Turgor',
  blurb: 'Water potential, the three ways substances cross membranes, and what happens to plant cells in different solutions.',
  time: '55 min',
  objectives: [
    'Define diffusion, osmosis and active transport precisely',
    'Explain water potential and its role in osmosis',
    'Describe the effects of isotonic, hypotonic and hypertonic solutions on cells',
    'Explain turgidity, plasmolysis and flaccidity',
    'Apply the principles to real situations such as root hair cells and food preservation'
  ],
  body: `
<p class="lead">Everything a cell takes in or puts out depends on three processes — <strong>diffusion, osmosis and active transport</strong>. Two are passive, one costs energy. Get the definitions exact and you will find that a large share of Biology questions answer themselves.</p>

<h2>Diffusion</h2>
<blockquote><strong>Diffusion</strong> is the net movement of particles from a region of <b>higher concentration</b> to a region of <b>lower concentration</b>, down the concentration gradient, due to their random motion.</blockquote>

<ul>
<li><strong>Passive</strong> — no energy is required; it happens spontaneously.</li>
<li>It continues until the particles are evenly distributed — this state is called <strong>equilibrium</strong>.</li>
<li>It is a property of all particles (gases, liquids, solutes) and increases with <strong>temperature</strong>.</li>
<li>It occurs in gases and liquids and across membranes.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Diffusion moves DOWN the gradient</b>
<p>Always from high to low concentration. If a question describes movement <em>from</em> low <em>to</em> high, it cannot be diffusion — it must be active transport. This single distinction separates the two processes in most questions.</p></div></div>

<h3>Examples of diffusion in living things</h3>
<ul>
<li><strong>Gas exchange</strong> — oxygen diffuses into blood, carbon dioxide diffuses out, down their gradients.</li>
<li><strong>Transpiration</strong> — water vapour diffuses out through the stomata.</li>
<li><strong>Absorption</strong> — digested food molecules diffuse from the gut into the blood.</li>
<li><strong>Urea</strong> diffuses from cells into the blood plasma.</li>
</ul>

<h2>Osmosis</h2>
<blockquote><strong>Osmosis</strong> is the movement of <b>water</b> molecules from a region of <b>higher water potential</b> to a region of <b>lower water potential</b> through a <b>partially permeable membrane</b>.</blockquote>

<div class="formula-box">
  <div class="fb-head">Water potential, Ψ (psi)</div>
  <div class="formula-row"><div class="fname">Pure water</div>
    <div class="fexpr">Ψ = <b>0 kPa</b> — the highest possible value</div></div>
  <div class="formula-row"><div class="fname">Adding solute</div>
    <div class="fexpr">Makes water potential <b>more negative</b></div>
    <div class="fnote">Solute particles bind water molecules, reducing how free they are.</div></div>
  <div class="formula-row"><div class="fname">Direction of flow</div>
    <div class="fexpr">Always from <b>less negative</b> to <b>more negative</b></div>
    <div class="fnote">i.e. from dilute to concentrated solution.</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Zero is the maximum, not the minimum</b>
<p>Pure water has the <b>highest</b> water potential, Ψ = 0. Any solution has a <b>negative</b> Ψ, and a stronger solution is <b>more</b> negative. So water always moves from a less negative value towards a more negative one. Confusing "lower" with "more negative" is the commonest error here.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The three required elements of the definition</b>
<p>Full marks for osmosis require all three: <b>(1)</b> water molecules, <b>(2)</b> from higher to lower water potential, <b>(3)</b> through a partially permeable membrane. Omit the membrane and the definition is incomplete.</p></div></div>

<h2>Active transport</h2>
<p>Movement of substances <strong>against</strong> the concentration gradient — from low to high concentration — using <strong>energy from ATP</strong> and <strong>carrier proteins</strong>.</p>

<ul>
<li>Only living cells can carry it out; it stops when they die.</li>
<li>Carrier proteins change shape to shuttle the substance across.</li>
<li><strong>Examples:</strong> root hair cells absorbing <strong>mineral ions</strong> from dilute soil solution; absorption of glucose and amino acids in the small intestine.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why root hairs need it</b>
<p>Mineral ions in soil water are often at a <em>lower</em> concentration than inside the root hair. Diffusion cannot move them inward — only <b>active transport</b> can, powered by ATP from mitochondria. This is exactly why root hair cells are packed with mitochondria and lack chloroplasts.</p></div></div>

<h2>The three compared</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Diffusion</th><th>Osmosis</th><th>Active transport</th></tr></thead>
  <tbody>
    <tr><td><b>Substance</b></td><td>Any</td><td><b>Water only</b></td><td>Any</td></tr>
    <tr><td><b>Direction</b></td><td>High → low conc.</td><td>High → low water potential</td><td><b>Low → high</b></td></tr>
    <tr><td><b>Energy</b></td><td>No</td><td>No</td><td><b>Yes (ATP)</b></td></tr>
    <tr><td><b>Membrane needed</b></td><td>No (but occurs across them)</td><td><b>Partially permeable</b></td><td>Yes, with carriers</td></tr>
    <tr><td><b>Living cell required</b></td><td>No</td><td>No</td><td><b>Yes</b></td></tr>
  </tbody>
</table>

<h2>Effects on plant cells</h2>
<p>Animal and plant cells respond differently because only plant cells have a rigid wall.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Solution</th><th>Water potential of surroundings</th><th>Plant cell</th><th>Animal cell</th></tr></thead>
  <tbody>
    <tr><td><b>Hypotonic</b> (pure water)</td><td>Higher than cell</td><td><b>Turgid</b> — water enters, vacuole pushes against the wall</td><td><b>Bursts</b> (lyses) — no wall to resist</td></tr>
    <tr><td><b>Isotonic</b></td><td>Equal to cell</td><td><b>Flaccid</b> — no net movement</td><td><b>Normal</b> — no net movement</td></tr>
    <tr><td><b>Hypertonic</b> (strong salt/sugar)</td><td>Lower than cell</td><td><b>Plasmolysed</b> — membrane pulls away from the wall</td><td><b>Shrinks</b> (crenates)</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Plasmolysis is irreversible at first</b>
<p>In <b>plasmolysis</b>, the protoplast shrinks and the cell membrane pulls away from the cell wall. If the cell is returned to pure water soon enough, it becomes <b>turgid</b> again — the process is then <b>deplasmolysis</b>. If left too long the cell dies and cannot recover.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Turgor is what keeps plants upright</b>
<p>Herbaceous plants rely on <b>turgor pressure</b> rather than a woody stem. When water is scarce, cells become flaccid and the plant <b>wilts</b>. A wilted plant recovers in water because its cells become turgid again — this is the everyday illustration of osmosis.</p></div></div>

<h2>Real-life applications</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Situation</th><th>Principle</th></tr></thead>
  <tbody>
    <tr><td><b>Preserving food with salt or sugar</b></td><td>Creates a hypertonic environment; water leaves bacteria by osmosis, so they cannot grow</td></tr>
    <tr><td><b>Salting meat / jam making</b></td><td>Same principle — high external solute concentration draws water out of microorganisms</td></tr>
    <tr><td><b>Wilting and recovery</b></td><td>Loss and gain of turgor by osmosis</td></tr>
    <tr><td><b>Adding fertiliser in excess</b></td><td>Makes soil solution hypertonic → water leaves roots → the plant wilts ("fertiliser burn")</td></tr>
    <tr><td><b>Oral rehydration therapy</b></td><td>A dilute glucose/salt solution is absorbed by osmosis and active transport, replacing lost water</td></tr>
    <tr><td><b>Putting a flat vegetable in water</b></td><td>Cream of tartar creates a hypotonic solution; water enters by osmosis, restoring crispness</td></tr>
  </tbody>
</table>

<h3>Why root hairs work</h3>
<p>Soil water is usually <strong>more dilute</strong> than the cell sap in the root hair, so the water potential outside is <strong>higher</strong>. Water therefore enters by osmosis. This creates a gradient towards the xylem, and water moves across the root by successive osmosis from cell to cell.</p>

<h2>Tonometry in practice</h2>
<p>To find the water potential of plant tissue, place samples in a range of sucrose concentrations and find the one where there is <strong>no change in mass</strong> — the tissue is neither gaining nor losing water, so it is <strong>isotonic</strong> with that solution. Plotting percentage change in mass against concentration and finding where the line crosses zero gives the tissue's water potential.</p>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why not use pure water as the only test?</b>
<p>With pure water the cells can only gain water, so you cannot tell when equilibrium is reached. You need a range of concentrations to find the point of no net movement.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Diffusion: any substance, high → low concentration, no energy.</li>
<li>Osmosis: water only, high → low water potential, partially permeable membrane.</li>
<li>Active transport: low → high, needs ATP and carrier proteins, only in living cells.</li>
<li>Pure water Ψ = 0; solutes make Ψ more negative.</li>
<li>Hypotonic → turgid; isotonic → flaccid; hypertonic → plasmolysed.</li>
<li>Salt and sugar preserve food by making the surroundings hypertonic.</li>
</ul>
`,
  quiz: [
    { q: 'Diffusion is the net movement of particles from', opts: ['Lower to higher concentration', 'Higher to lower concentration', 'An area of zero concentration', 'One cell to another only'], a: 1, why: 'It is movement down the concentration gradient caused by random molecular motion.' },
    { q: 'Diffusion requires', opts: ['Energy from ATP', 'Carrier proteins', 'No input of energy', 'A living cell'], a: 2, why: 'Diffusion is passive — particles move spontaneously down their gradient.' },
    { q: 'Osmosis differs from diffusion in that osmosis involves', opts: ['Any solute', 'Water only', 'Active transport', 'High temperatures'], a: 1, why: 'Osmosis is specifically the movement of water molecules.' },
    { q: 'The correct definition of osmosis must mention', opts: ['A concentration gradient only', 'A partially permeable membrane', 'ATP and carriers', 'A living cell'], a: 1, why: 'Movement of water down a water potential gradient through a partially permeable membrane.' },
    { q: 'The movement of water in osmosis is from a region of', opts: ['Higher to lower water potential', 'Lower to higher water potential', 'Equal to zero only', 'Negative to positive water potential'], a: 0, why: 'Water moves from less negative (higher Ψ) to more negative (lower Ψ).' },
  { q: 'Pure water has a water potential of', opts: ['−100 kPa', '0 kPa', '+100 kPa', '−1 kPa'], a: 1, why: 'Pure water has the maximum possible water potential, defined as zero.' },
    { q: 'Adding solute to water makes its water potential', opts: ['More positive', 'More negative', 'Unchanged', 'Zero'], a: 1, why: 'Solute molecules bind water, lowering its free concentration and hence Ψ.' },
    { q: 'Active transport moves substances', opts: ['Down the concentration gradient', 'Against the concentration gradient', 'Only in dead cells', 'Without energy'], a: 1, why: 'It pumps substances from low to high concentration using ATP.' },
    { q: 'Active transport requires both', opts: ['Osmosis and diffusion', 'Energy (ATP) and carrier proteins', 'A cell wall and a vacuole', 'Chlorophyll and light'], a: 1, why: 'Carrier proteins change shape to shuttle molecules, powered by ATP.' },
    { q: 'Root hair cells absorb mineral ions mainly by', opts: ['Diffusion', 'Osmosis', 'Active transport', 'Filtration'], a: 2, why: 'Ions are often dilute in soil water, so they must be pumped inward against the gradient.' },
    { q: 'Root hair cells contain many mitochondria because they', opts: ['Photosynthesise actively', 'Need ATP for active transport', 'Store food', 'Divide rapidly'], a: 1, why: 'Active transport of mineral ions requires a substantial ATP supply.' },
    { q: 'A plant cell placed in pure water becomes', opts: ['Plasmolysed', 'Turgid', 'Flaccid', 'Shrivelled'], a: 1, why: 'Water enters by osmosis, the vacuole swells and pushes against the rigid wall.' },
    { q: 'An animal cell placed in pure water will', opts: ['Become turgid', 'Burst', 'Become plasmolysed', 'Be unaffected'], a: 1, why: 'Without a cell wall to resist the pressure it cannot contain the inflow.' },
    { q: 'A plant cell in a strongly concentrated salt solution becomes', opts: ['Turgid', 'Flaccid then plasmolysed', 'Larger', 'Unchanged'], a: 1, why: 'Water leaves by osmosis and the membrane pulls away from the wall.' },
    { q: 'Plasmolysis is the process in which', opts: ['The wall dissolves', 'The cell membrane pulls away from the cell wall', 'The cell absorbs water', 'Chloroplasts divide'], a: 1, why: 'The protoplast shrinks as water leaves, detaching from the rigid wall.' },
    { q: 'A plant cell with no net movement of water is described as', opts: ['Turgid', 'Flaccid', 'Plasmolysed', 'Lysed'], a: 1, why: 'Flaccid — water potential inside equals that outside.' },
    { q: 'Wilting occurs because plant cells lose', opts: ['Chloroplasts', 'Turgor pressure', 'Cell walls', 'Nuclei'], a: 1, why: 'Water loss makes cells flaccid, so they can no longer hold the plant upright.' },
    { q: 'A wilted plant placed in pure water recovers because its cells', opts: ['Become plasmolysed', 'Become turgid again', 'Divide rapidly', 'Produce more chlorophyll'], a: 1, why: 'Water re-enters by osmosis, restoring turgor pressure.' },
    { q: 'Adding too much fertiliser to soil can make a plant wilt because', opts: ['The soil becomes hypotonic', 'The soil solution becomes hypertonic and water leaves the roots', 'The roots burn directly', 'The stomata close permanently'], a: 1, why: 'Water potential outside becomes lower than inside, so water moves out of the roots.' },
    { q: 'Food is preserved by adding salt or sugar because this', opts: ['Kills all bacteria instantly', 'Creates a hypertonic environment so water leaves microorganisms', 'Raises the temperature', 'Removes oxygen'], a: 1, why: 'Water leaves the microbial cells by osmosis, stopping their growth.' },
    { q: 'A solution with the same water potential as a cell is described as', opts: ['Hypotonic', 'Hypertonic', 'Isotonic', 'Saturated'], a: 2, why: 'Isotonic — there is no net movement of water in either direction.' },
    { q: 'Which process can only occur in living cells?', opts: ['Diffusion', 'Osmosis', 'Active transport', 'Evaporation'], a: 2, why: 'It depends on ATP supply and functional carrier proteins in the membrane.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'photosynthesis',
  title: 'Autotrophic Nutrition and Photosynthesis',
  blurb: 'The equation, the light and dark reactions, the limiting factors, and the adaptations of leaves.',
  time: '60 min',
  objectives: [
    'State the word and chemical equation for photosynthesis',
    'Describe the role of chlorophyll, light, carbon dioxide and water',
    'Explain the light-dependent and light-independent reactions',
    'Describe experiments demonstrating the requirements for photosynthesis',
    'Explain limiting factors and how they affect the rate'
  ],
  body: `
<p class="lead">Photosynthesis is the process on which almost all life depends — it is how energy from the Sun enters the living world. The exam tests the <strong>equation</strong>, the <strong>conditions</strong>, the <strong>limiting factors</strong>, and the classic <strong>experiments</strong> that demonstrate each requirement.</p>

<h2>The equation</h2>
<div class="formula-box">
  <div class="fb-head">Photosynthesis</div>
  <div class="formula-row"><div class="fname">Word equation</div>
    <div class="fexpr">Carbon dioxide + water → <b>glucose</b> + oxygen</div>
    <div class="fnote">In the presence of light and chlorophyll.</div></div>
  <div class="formula-row"><div class="fname">Balanced chemical equation</div>
    <div class="fexpr">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</div>
    <div class="fnote">Light energy and chlorophyll are needed over the arrow.</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The oxygen comes from water, not carbon dioxide</b>
<p>Isotope-labelling experiments with ¹⁸O show that the <b>oxygen released is produced from the splitting of water</b>, not from carbon dioxide. This is a favourite question and is easy to get wrong if you only look at the balanced equation.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Where each raw material comes from</b>
<p><b>CO₂</b> enters through the <b>stomata</b>.<br>
<b>Water</b> is absorbed by the <b>roots</b> and carried up in the <b>xylem</b>.<br>
<b>Glucose</b> is made in the <b>chloroplasts</b> and may be converted to <b>starch</b> for storage or <b>sucrose</b> for transport.<br>
<b>Oxygen</b> leaves through the stomata.</p></div></div>

<h2>The two stages</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Light-dependent reactions</th><th>Light-independent reactions (Calvin cycle)</th></tr></thead>
  <tbody>
    <tr><td><b>Where</b></td><td><b>Thylakoid membranes</b> (grana)</td><td><b>Stroma</b> (fluid)</td></tr>
    <tr><td><b>Needs light?</b></td><td><b>Yes</b> directly</td><td>No directly, but needs products of stage 1</td></tr>
    <tr><td><b>What happens</b></td><td>Light absorbed by chlorophyll; water is split (<b>photolysis</b>) into hydrogen and oxygen; ATP and NADPH made</td><td>CO₂ is <b>fixed</b> using hydrogen and ATP to build glucose</td></tr>
    <tr><td><b>Products</b></td><td>ATP, NADPH, O₂</td><td>Glucose (C₆H₁₂O₆)</td></tr>
    <tr><td><b>Enzymes</b></td><td>Photolysis enzymes</td><td>Many, including <b>rubisco</b> (the most abundant enzyme on Earth)</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Remember it as "trap and build"</b>
<p>Stage 1 <strong>traps</strong> light energy into chemical carriers (ATP, NADPH) and splits water. Stage 2 <strong>builds</strong> glucose using that stored energy and fixed carbon dioxide. The two stages are in the same organelle but in different parts of it.</p></div></div>

<h3>Carbon fixation in detail</h3>
<ol>
<li>CO₂ combines with a 5-carbon compound (<strong>RuBP</strong>) — this is <strong>fixation</strong>.</li>
<li>The unstable 6-carbon product splits into two molecules of <strong>3-PGA</strong>.</li>
<li>ATP and NADPH from stage 1 reduce 3-PGA to <strong>TP</strong> (triose phosphate).</li>
<li>Most TP regenerates RuBP so the cycle can continue; some leaves to form <strong>glucose</strong>.</li>
</ol>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why the cycle must regenerate RuBP</b>
<p>Only a small amount of RuBP is present, so it must be constantly regenerated for fixation to continue. If light is removed, stage 1 stops, no ATP/NADPH is made, regeneration halts, and the cycle stops within seconds — which is why the dark reactions stop in prolonged darkness even though they need no light directly.</p></div></div>

<h2>Limiting factors</h2>
<p>A <strong>limiting factor</strong> is any factor in short supply that caps the rate of photosynthesis. Raising it increases the rate; raising a factor that is already abundant has no effect.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Factor</th><th>Effect when in short supply</th></tr></thead>
  <tbody>
    <tr><td><b>Light intensity</b></td><td>Too little → stage 1 is slow → less ATP and NADPH</td></tr>
    <tr><td><b>Carbon dioxide concentration</b></td><td>Too little → little fixation in stage 2</td></tr>
    <tr><td><b>Temperature</b></td><td>Too low → enzymes work slowly; too high → enzymes <b>denature</b></td></tr>
    <tr><td><b>Water</b></td><td>Rarely limiting directly, but shortage closes stomata, cutting CO₂ entry</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">How to identify the limiting factor from a graph</div>
  <div class="formula-row"><div class="fname">Slope rising with one factor</div>
    <div class="fexpr">That factor is limiting</div></div>
  <div class="formula-row"><div class="fname">Curve plateaus</div>
    <div class="fexpr">That factor is no longer limiting — <b>another</b> one now is</div>
    <div class="fnote">Find which factor was NOT varied — that is now the limit.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Reading a limiting-factor graph</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Graph</div>
    Rate of photosynthesis against light intensity, at a fixed CO₂ concentration.</div>
    <div class="step"><div class="step-l">The rising part</div>
    Rate increases with light → light is the limiting factor here.</div>
    <div class="step"><div class="step-l">The plateau</div>
    Rate stops rising despite more light → light is no longer limiting. Since CO₂ was held constant, <b>carbon dioxide is now limiting</b>.</div>
    <div class="ans">Answer: on the plateau, CO₂ (or temperature) is limiting</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The plateau question, answered</b>
<p>When a curve levels off, the factor being varied is no longer limiting — so <b>some other factor that was held constant is now the limit</b>. Read the axis: if the graph is rate against light intensity and it plateaus, CO₂ or temperature is limiting. This is the single most examined skill in this topic.</p></div></div>

<h2>Experiments demonstrating the requirements</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Requirement</th><th>Classic experiment</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td><b>Light</b></td><td>Partially covered leaf, then destarched and tested with iodine</td><td>Only the uncovered part turns <b>blue-black</b> — so light is needed</td></tr>
    <tr><td><b>Chlorophyll</b></td><td>Variegated leaf, destarched, iodine test</td><td>Only the <b>green</b> parts turn blue-black</td></tr>
    <tr><td><b>CO₂</b></td><td>Destarched plant in a bell jar with KOH (absorbs CO₂) vs one without</td><td>With KOH: no starch → CO₂ is needed</td></tr>
    <tr><td><b>Oxygen</b></td><td><em>Elodea</em> in water in bright light; gas collected and tested with a glowing splint</td><td>Splint <b>relights</b> → oxygen is produced</td></tr>
    <tr><td><b>Starch as product</b></td><td>Iodine test on a destarched leaf</td><td>Blue-black colour shows starch is present</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">The word you must use: "destarched"</div>
  <div class="formula-row"><div class="fname">Why</div>
    <div class="fexpr">The plant is left in darkness for 24–48 hours so that stored starch is <b>used up or translocated</b></div>
    <div class="fnote">Otherwise a positive result might come from old starch, not from the experiment.</div></div>
  <div class="formula-row"><div class="fname">The test</div>
    <div class="fexpr">Iodine solution: <b>orange-brown → blue-black</b> in the presence of starch</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>"Destarched" earns a mark on its own</b>
<p>Every experimental question about photosynthesis expects the plant to be <b>destarched first</b> by keeping it in the dark. Mentioning it — and saying <em>why</em> — is often worth a mark by itself.</p></div></div>

<h3>Controlling variables</h3>
<p>In any of these experiments the other factors must be kept the same — leaf area, species, temperature, light intensity (where not the variable being tested). This is what makes the result attributable to the factor being investigated.</p>

<h2>Adaptations of the leaf for photosynthesis</h2>
<ul>
<li><strong>Broad and flat</strong> — large surface area for light absorption.</li>
<li><strong>Thin</strong> — short distance for gases and light to travel.</li>
<li><strong>Palisade layer near the upper surface</strong> — most light arrives from above; cells are packed with chloroplasts.</li>
<li><strong>Stomata mostly on the lower surface</strong> — reduces water loss while still allowing gas exchange.</li>
<li><strong>Air spaces in the spongy mesophyll</strong> — allow gases to circulate to every cell.</li>
<li><strong>Rich vein network</strong> — supplies water and carries away products.</li>
<li><strong>Waxy cuticle</strong> — minimises water loss from the upper surface.</li>
</ul>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why chloroplasts move</b>
<p>In bright light, chloroplasts line up <em>along the cell walls</em> to avoid damage. In dim light they spread across the flat faces to <b>capture maximum light</b>. The cell can therefore adjust to light conditions.</p></div></div>

<h2>Fate of the glucose made</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Product</th><th>Formed from glucose by</th><th>Purpose</th></tr></thead>
  <tbody>
    <tr><td><b>Starch</b></td><td>Condensation / polymerisation</td><td>Insoluble, osmotically inactive storage</td></tr>
    <tr><td><b>Sucrose</b></td><td>Condensation</td><td>Soluble, transported in the phloem</td></tr>
    <tr><td><b>Cellulose</b></td><td>Condensation</td><td>Cell wall construction</td></tr>
    <tr><td><b>Lipids / fats</b></td><td>Conversion</td><td>Long-term energy storage</td></tr>
    <tr><td><b>Amino acids</b></td><td>Conversion, with mineral ions from the soil</td><td>Protein synthesis</td></tr>
    <tr><td><b>CO₂ + water</b></td><td>Aerobic respiration</td><td>Energy release</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why starch, not glucose</b>
<p>Glucose is <strong>soluble</strong> and would lower the water potential of the cell, causing water to enter by osmosis and bursting it. <strong>Starch is insoluble and osmotically inactive</strong>, so it can be stored safely in large amounts without affecting water movement. This is a very common short-answer question.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂; oxygen comes from water, not CO₂.</li>
<li>Light reactions in the thylakoids (photolysis, ATP, NADPH); Calvin cycle in the stroma.</li>
<li>Limiting factors: light, CO₂, temperature — identify from which factor caps the rate.</li>
<li>Destarch before any experiment; iodine tests for starch.</li>
<li>Glucose is stored as starch because it is insoluble and osmotically harmless.</li>
</ul>
`,
  quiz: [
    { q: 'The balanced equation for photosynthesis is', opts: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', '6CO₂ + 6O₂ → C₆H₁₂O₆ + 6H₂O', 'CO₂ + H₂O → CH₂O + O₂'], a: 0, why: 'Carbon dioxide and water are converted to glucose and oxygen using light energy.' },
    { q: 'The oxygen released during photosynthesis comes from the splitting of', opts: ['Carbon dioxide', 'Glucose', 'Water', 'Chlorophyll'], a: 2, why: 'Isotope experiments with ¹⁸O show that photolysis of water releases the oxygen.' },
    { q: 'The site of the light-dependent reactions is the', opts: ['Stroma', 'Thylakoid membrane', 'Nucleus', 'Cell wall'], a: 1, why: 'The thylakoid membranes hold chlorophyll and the electron transport chain.' },
    { q: 'The light-independent reactions (Calvin cycle) take place in the', opts: ['Grana', 'Stroma', 'Thylakoids', 'Cytoplasm'], a: 1, why: 'The fluid stroma contains the enzymes that fix carbon dioxide.' },
    { q: 'The splitting of water using light energy is called', opts: ['Fixation', 'Photolysis', 'Oxidation', 'Condensation'], a: 1, why: 'Photolysis — light splits water into hydrogen and oxygen.' },
    { q: 'The pigment that absorbs light energy for photosynthesis is', opts: ['Haemoglobin', 'Chlorophyll', 'Melanin', 'Keratin'], a: 1, why: 'Chlorophyll in the chloroplasts absorbs light, mainly red and blue wavelengths.' },
    { q: 'The process by which carbon dioxide is incorporated into an organic molecule is called', opts: ['Reduction', 'Carbon fixation', 'Photolysis', 'Respiration'], a: 1, why: 'CO₂ combines with RuBP — this is fixation, catalysed by rubisco.' },
    { q: 'Carbon dioxide enters the leaf mainly through the', opts: ['Cuticle', 'Stomata', 'Xylem', 'Epidermis'], a: 1, why: 'The stomatal pores, which are mostly on the lower leaf surface.' },
    { q: 'A factor that limits the rate of photosynthesis is one that', opts: ['Increases the rate indefinitely', 'Is in short supply and caps the rate', 'Is always carbon dioxide', 'Causes denaturation'], a: 1, why: 'Raising a limiting factor raises the rate; raising an abundant one has no effect.' },
    { q: 'On a graph of rate against light intensity, the plateau indicates that', opts: ['Photosynthesis has stopped', 'Another factor is now limiting', 'The enzymes have denatured', 'Light is still limiting'], a: 1, why: 'Light is no longer limiting, so CO₂ or temperature now caps the rate.' },
    { q: 'Increasing light intensity beyond the plateau of a rate–CO₂ graph will', opts: ['Increase the rate greatly', 'Have little or no effect', 'Stop photosynthesis', 'Denature chlorophyll'], a: 1, why: 'CO₂ is limiting at the plateau, so extra light cannot raise the rate.' },
    { q: 'Before testing a leaf for starch, the plant should be', opts: ['Watered thoroughly', 'Destarched by keeping it in the dark', 'Placed in bright light', 'Cut into pieces'], a: 1, why: 'Destarching removes stored starch so any positive result comes from the experiment.' },
    { q: 'The iodine test for starch gives a', opts: ['Blue-black colour', 'Red precipitate', 'Green colour', 'Effervescence'], a: 0, why: 'Iodine changes from orange-brown to blue-black when starch is present.' },
    { q: 'A variegated leaf tested with iodine shows starch only in the', opts: ['White parts', 'Green parts', 'Whole leaf evenly', 'Midrib only'], a: 1, why: 'Only the green parts contain chlorophyll, so only they can photosynthesise.' },
    { q: 'In the KOH bell-jar experiment, KOH is used to', opts: ['Absorb oxygen', 'Absorb carbon dioxide', 'Supply water', 'Produce light'], a: 1, why: 'Removing CO₂ prevents photosynthesis, proving it is necessary.' },
    { q: 'A leaf kept in the dark turns brownish with iodine because it', opts: ['Is dead', 'Contains no starch', 'Contains chlorophyll', 'Is too thick'], a: 1, why: 'Stored starch has been used up or translocated during the dark period.' },
    { q: 'Glucose produced in photosynthesis is stored as starch because starch is', opts: ['Soluble and easily transported', 'Insoluble and osmotically inactive', 'Sweet-tasting', 'A protein'], a: 1, why: 'Its insolubility prevents it lowering water potential and causing the cell to burst.' },
    { q: 'Which of these is NOT a product of glucose in the plant?', opts: ['Starch', 'Cellulose', 'Amino acids', 'Haemoglobin'], a: 3, why: 'Haemoglobin is an animal protein and is never synthesised by plants.' },
    { q: 'Stomata are mostly found on the lower surface of a leaf to', opts: ['Increase photosynthesis', 'Reduce water loss', 'Absorb more light', 'Store starch'], a: 1, why: 'The lower surface is shaded and cooler, so less water is lost by transpiration.' },
    { q: 'Palisade mesophyll cells are packed with chloroplasts and lie near the upper surface because', opts: ['They absorb the most light there', 'They store water', 'They transport minerals', 'They protect the leaf'], a: 0, why: 'Most light arrives from above, so chloroplasts are concentrated where light is strongest.' },
    { q: 'Photosynthesis stops in prolonged darkness because the Calvin cycle', opts: ['Needs no ATP or NADPH', 'Cannot regenerate RuBP without products of the light stage', 'Is inhibited by oxygen', 'Requires chlorophyll directly'], a: 1, why: 'Without ATP and NADPH the cycle cannot continue, so it halts within seconds.' }
  ]
});
