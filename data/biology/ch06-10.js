/* JAMB 2027 Prep — Biology, Chapters 6–10 */

JAMB.addChapter('biology', {
  id: 'nutrition-human',
  title: 'Holozoic Nutrition and the Human Digestive System',
  blurb: 'The alimentary canal organ by organ, the digestive enzymes, and the accessories that serve them.',
  time: '65 min',
  objectives: [
    'Outline the alimentary canal in order and name the organs it passes through',
    'State the function of each part of the digestive system',
    'Name the main digestive enzymes, their substrates and products',
    'Describe the roles of the liver, gall bladder and pancreas',
    'Explain the structure of the gut wall and its adaptations for absorption'
  ],
  body: `
<p class="lead">Holozoic nutrition is a seven-step sequence: <strong>ingestion → digestion → absorption → assimilation → egestion</strong> (with ingestion and digestion leading the way). Learn the <strong>path of food</strong> and the <strong>enzymes</strong> — between them they cover most of the marks in this topic.</p>

<h2>The alimentary canal</h2>
<div class="formula-box">
  <div class="fb-head">Path of food</div>
  <div class="formula-row"><div class="fname">Mouth → Pharynx → Oesophagus → Stomach → Small intestine (duodenum, ileum) → Large intestine (colon) → Rectum → Anus</div>
    <div class="fexpr">A single tube, roughly 9 m long in an adult</div>
    <div class="fnote">Accessory organs (salivary glands, liver, gall bladder, pancreas) secrete into it but food never passes through them.</div></div>
</div>

<h3>Organ by organ</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Organ</th><th>Key features</th><th>Main action</th></tr></thead>
  <tbody>
    <tr><td><b>Mouth</b></td><td>Teeth, tongue, salivary glands</td><td>Mechanical breakdown (chewing) and start of starch digestion</td></tr>
    <tr><td><b>Pharynx & oesophagus</b></td><td>Muscular tube; peristalsis</td><td>Swallowing and transport only — <b>no digestion</b></td></tr>
    <tr><td><b>Stomach</b></td><td>J-shaped, muscular, gastric glands</td><td>Protein digestion begins; kills bacteria with HCl</td></tr>
    <tr><td><b>Duodenum</b></td><td>First part of small intestine; receives bile and pancreatic juice</td><td>Major site of chemical digestion</td></tr>
    <tr><td><b>Ileum</b></td><td>Long, folded, villi and microvilli</td><td><b>Absorption</b> of digested food</td></tr>
    <tr><td><b>Large intestine</b></td><td>Colon, caecum, appendix</td><td>Absorbs <b>water</b>, salts; forms faeces</td></tr>
    <tr><td><b>Rectum / anus</b></td><td>Storage; sphincter muscles</td><td>Egestion of faeces</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>No digestion in the oesophagus</b>
<p>The oesophagus only transports food by <b>peristalsis</b> — it secretes no enzymes. If a question asks where digestion takes place, the oesophagus is never part of the answer.</p></div></div>

<h2>The digestive enzymes</h2>
<div class="formula-box">
  <div class="fb-head">The three classes</div>
  <div class="formula-row"><div class="fname">Amylases</div>
    <div class="fexpr">Break down <b>starch → maltose</b></div>
    <div class="fnote">Salivary amylase (mouth, pH ~7) and pancreatic amylase (duodenum).</div></div>
  <div class="formula-row"><div class="fname">Proteases</div>
    <div class="fexpr">Break down <b>proteins → peptides</b></div>
    <div class="fnote">Pepsin (stomach, pH ~2), trypsin and chymotrypsin (pancreas, pH ~8).</div></div>
  <div class="formula-row"><div class="fname">Lipases</div>
    <div class="fexpr">Break down <b>fats → fatty acids + glycerol</b></div>
    <div class="fnote">Pancreatic lipase, acting in the duodenum.</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Enzyme</th><th>Secreted by</th><th>Acts on</th><th>Products</th></tr></thead>
  <tbody>
    <tr><td>Salivary amylase</td><td>Salivary glands</td><td>Starch</td><td>Maltose</td></tr>
    <tr><td><b>Pepsin</b></td><td>Stomach (as pepsinogen)</td><td>Protein</td><td>Peptides</td></tr>
    <tr><td>Renin</td><td>Stomach (infants)</td><td>Caseinogen</td><td>Casein</td></tr>
    <tr><td>Gastric lipase</td><td>Stomach</td><td>Fats</td><td>Fatty acids + glycerol</td></tr>
    <tr><td>Pancreatic amylase</td><td>Pancreas</td><td>Starch</td><td>Maltose</td></tr>
    <tr><td><b>Trypsin</b></td><td>Pancreas (as trypsinogen)</td><td>Proteins/peptides</td><td>Peptides</td></tr>
    <tr><td>Pancreatic lipase</td><td>Pancreas</td><td>Emulsified fats</td><td>Fatty acids + glycerol</td></tr>
    <tr><td><b>Maltase, lactase, sucrase</b></td><td>Brush border of ileum</td><td>Maltose, lactose, sucrose</td><td><b>Glucose</b></td></tr>
    <tr><td><b>Peptidase (erepsin)</b></td><td>Brush border of ileum</td><td>Peptides</td><td><b>Amino acids</b></td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>What digests sugars to glucose?</b>
<p>Digestion is not finished until the <em>absorbable</em> units are produced. Starch → maltose by amylase, then <strong>maltose → glucose by maltase</strong> in the ileum. Proteins → peptides by proteases, then <strong>peptides → amino acids by peptidase</strong>. Remember: the final step happens at the brush border of the small intestine.</p></div></div>

<h3>The three requirements for enzyme action</h3>
<ul>
<li><strong>Optimum pH</strong> — salivary amylase ~7; pepsin ~2 (HCl in the stomach); trypsin ~8.</li>
<li><strong>Optimum temperature</strong> — about 37 °C in humans.</li>
<li><strong>Specificity</strong> — each enzyme acts on one substrate only (lock-and-key / induced fit).</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Why pepsin does not digest the stomach</b>
<p>Pepsin is secreted as an inactive precursor, <b>pepsinogen</b>, which HCl converts into active pepsin. The stomach lining also secretes a protective layer of <b>mucus</b> and is replaced rapidly. If the lining is breached, the result is an ulcer.</p></div></div>

<h2>The accessories</h2>
<h3>Liver and gall bladder</h3>
<div class="formula-box">
  <div class="fb-head">Bile</div>
  <div class="formula-row"><div class="fname">Made by</div>
    <div class="fexpr">The <b>liver</b>; stored and concentrated in the <b>gall bladder</b></div></div>
  <div class="formula-row"><div class="fname">Composition</div>
    <div class="fexpr"><b>Bile salts</b>, water, minerals, bile pigment (bilirubin) — <b>no enzymes</b></div></div>
  <div class="formula-row"><div class="fname">Function</div>
    <div class="fexpr">Emulsifies large fat globules into many small droplets</div>
    <div class="fnote">Increases surface area so pancreatic lipase can work faster; also neutralises stomach acid.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Bile contains no digestive enzyme</b>
<p>Bile only <strong>emulsifies</strong> — it breaks large fat globules into smaller ones physically, increasing surface area. It <em>does not</em> chemically digest fat. The actual chemical digestion is done by <strong>pancreatic lipase</strong>. This distinction is examined constantly.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Why emulsification helps</b>
<p>Fats are insoluble and form a single large globule with a small surface area. Bile salts scatter them into a fine emulsion of tiny droplets, giving lipase far more surface to act on — the rate of digestion rises several-fold. It is a physical, not chemical, change.</p></div></div>

<h3>Pancreas</h3>
<p>Secretes <strong>pancreatic juice</strong> containing amylase, trypsin and lipase, plus <strong>sodium bicarbonate</strong> which neutralises the acidic chyme arriving from the stomach, giving the alkaline pH that pancreatic enzymes need.</p>

<h2>The gut wall: structure for absorption</h2>
<p>The ileum wall has three layers — <strong>mucosa</strong> (inner), <strong>submucosa</strong>, <strong>muscularis</strong> (outer) — plus a outer serosa. Its inner surface is folded into <strong>villi</strong>, and each villus cell has microvilli forming the brush border.</p>

<div class="formula-box">
  <div class="fb-head">Adaptations of the ileum for absorption</div>
  <div class="formula-row"><div class="fname">Large surface area</div>
    <div class="fexpr">Circular folds → villi → microvilli</div>
    <div class="fnote">Together they increase the area roughly 600-fold.</div></div>
  <div class="formula-row"><div class="fname">Rich blood supply</div>
    <div class="fexpr">A capillary network in each villus carries products away, maintaining the gradient</div></div>
  <div class="formula-row"><div class="fname">Lacteal</div>
    <div class="fexpr">A lymph vessel in each villus absorbs <b>fats</b></div></div>
  <div class="formula-row"><div class="fname">Thin wall</div>
    <div class="fexpr">A single layer of epithelial cells — short diffusion distance</div></div>
  <div class="formula-row"><div class="fname">Muscular wall</div>
    <div class="fexpr">Circular and longitudinal muscles produce <b>segmentation</b> to mix chyme with juices</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Fats vs the other two</b>
<p>Glucose and amino acids are absorbed into the <strong>capillaries</strong> of the villi. <strong>Fatty acids and glycerol</strong> are re-formed into fats and enter the <strong>lacteal</strong> (lymph vessel) instead. Knowing which channel takes which product is worth a mark.</p></div></div>

<h2>Types of nutrition compared</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>How food is obtained</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Holozoic</b></td><td>Ingests solid food and digests internally in a gut</td><td>Amoeba, humans</td></tr>
    <tr><td><b>Saprophytic</b></td><td>Secretes enzymes onto dead matter and absorbs</td><td>Mushroom, bread mould</td></tr>
    <tr><td><b>Parasitic</b></td><td>Takes food from a living host, often causing harm</td><td>Tapeworm, plasmodium</td></tr>
    <tr><td><b>Holophytic</b></td><td>Photosynthetic (autotrophic)</td><td>Green plants</td></tr>
    <tr><td><b>Symbiotic</b></td><td>Two organisms living together for mutual benefit</td><td>Legume and rhizobium</td></tr>
  </tbody>
</table>

<h2>Nutrient classes</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Nutrient</th><th>Elements</th><th>Role</th></tr></thead>
  <tbody>
    <tr><td><b>Carbohydrates</b></td><td>C, H, O</td><td>Immediate energy; 17 kJ/g</td></tr>
    <tr><td><b>Fats/lipids</b></td><td>C, H, O (less O)</td><td>Long-term energy; insulation; 38 kJ/g</td></tr>
    <tr><td><b>Proteins</b></td><td>C, H, O, <b>N</b></td><td>Growth and repair; built from 20 amino acids</td></tr>
    <tr><td><b>Vitamins</b></td><td>Various</td><td>Coenzymes and regulators; needed in tiny amounts</td></tr>
    <tr><td><b>Minerals</b></td><td>Various</td><td>Bone salts, haemoglobin, nerve function</td></tr>
    <tr><td><b>Water</b></td><td>H, O</td><td>Medium for reactions; transport; temperature control</td></tr>
  </tbody>
</table>

<div class="note note-fact"><span class="ico">📌</span><div><b>Energy values</b>
<p>Carbohydrates ≈ <b>17 kJ/g</b>; fats ≈ <b>38 kJ/g</b>; proteins ≈ 17 kJ/g. Fats yield more than twice as much because they are more reduced — they contain more C–H bonds to oxidise.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Path: mouth → pharynx → oesophagus → stomach → small intestine → large intestine → rectum → anus.</li>
<li>No digestion occurs in the oesophagus.</li>
<li>Amylase → maltose; pepsin/trypsin → peptides; lipase → fatty acids + glycerol.</li>
<li>Final breakdown to glucose and amino acids happens at the brush border of the ileum.</li>
<li>Bile emulsifies fat but contains no enzyme; it is made by the liver and stored in the gall bladder.</li>
<li>Villi + microvilli + capillaries + lacteals give the ileum its huge absorptive surface.</li>
</ul>
`,
  quiz: [
    { q: 'Which sequence correctly lists the path of food through the alimentary canal?', opts: ['Mouth, stomach, oesophagus, small intestine, large intestine', 'Mouth, oesophagus, stomach, small intestine, large intestine', 'Mouth, oesophagus, large intestine, stomach, small intestine', 'Mouth, stomach, small intestine, oesophagus, large intestine'], a: 1, why: 'Food passes down the oesophagus to the stomach, then small and large intestines.' },
    { q: 'Digestion does NOT occur in the', opts: ['Mouth', 'Stomach', 'Oesophagus', 'Duodenum'], a: 2, why: 'The oesophagus only transports food by peristalsis and secretes no enzymes.' },
    { q: 'Salivary amylase converts starch into', opts: ['Glucose', 'Maltose', 'Peptides', 'Fatty acids'], a: 1, why: 'Amylase breaks starch down to the disaccharide maltose; maltase then yields glucose.' },
    { q: 'The enzyme that digests protein in the stomach is', opts: ['Pepsin', 'Trypsin', 'Lipase', 'Amylase'], a: 0, why: 'Pepsin, activated from pepsinogen by hydrochloric acid at about pH 2.' },
    { q: 'Trypsin is secreted by the', opts: ['Stomach', 'Liver', 'Pancreas', 'Gall bladder'], a: 2, why: 'The pancreas secretes trypsinogen into the duodenum, where it is activated.' },
    { q: 'The final digestion of proteins into amino acids occurs in the', opts: ['Stomach', 'Duodenum', 'Ileum', 'Oesophagus'], a: 2, why: 'Peptidase at the brush border of the ileum completes the breakdown to amino acids.' },
    { q: 'Maltose is broken down to glucose by', opts: ['Amylase', 'Maltase', 'Pepsin', 'Lipase'], a: 1, why: 'Maltase is a disaccharidase in the wall of the small intestine.' },
    { q: 'The optimum pH for pepsin is about', opts: ['2', '7', '8', '11'], a: 0, why: 'The stomach is strongly acidic due to hydrochloric acid.' },
    { q: 'The optimum pH for salivary amylase is about', opts: ['2', '4', '7', '9'], a: 2, why: 'Saliva is nearly neutral, so salivary amylase works best around pH 7.' },
    { q: 'Bile is produced by the', opts: ['Gall bladder', 'Pancreas', 'Liver', 'Stomach'], a: 2, why: 'The liver makes bile; the gall bladder only stores and concentrates it.' },
    { q: 'Bile is stored and concentrated in the', opts: ['Liver', 'Pancreas', 'Gall bladder', 'Duodenum'], a: 2, why: 'It is released from the gall bladder into the duodenum when fat arrives.' },
    { q: 'Bile aids digestion by', opts: ['Digesting fat chemically', 'Emulsifying fat into small droplets', 'Breaking down protein', 'Absorbing glucose'], a: 1, why: 'Emulsification is physical — it increases the surface area for lipase to act on.' },
    { q: 'Bile contains', opts: ['Lipase', 'Amylase', 'Bile salts but no enzymes', 'Pepsin'], a: 2, why: 'Bile has no digestive enzyme; it only emulsifies and neutralises acid.' },
    { q: 'The enzyme that chemically digests emulsified fats is', opts: ['Bile', 'Lipase', 'Amylase', 'Pepsin'], a: 1, why: 'Pancreatic lipase converts the fat droplets into fatty acids and glycerol.' },
    { q: 'Sodium bicarbonate in pancreatic juice is important because it', opts: ['Digests starch', 'Neutralises acid from the stomach', 'Emulsifies fat', 'Kills bacteria'], a: 1, why: 'It restores the alkaline pH that pancreatic enzymes require.' },
    { q: 'Which of these is NOT an enzyme in pancreatic juice?', opts: ['Amylase', 'Trypsin', 'Lipase', 'Bile'], a: 3, why: 'Bile is produced by the liver, not the pancreas, and is not an enzyme.' },
    { q: 'Villi are found mainly in the', opts: ['Stomach', 'Oesophagus', 'Small intestine', 'Large intestine'], a: 2, why: 'They line the ileum, maximising the surface area for absorption.' },
    { q: 'The structure that absorbs fatty acids and glycerol in a villus is the', opts: ['Capillary', 'Lacteal', 'Epithelial cell', 'Goblet cell'], a: 1, why: 'Fats enter the lymphatic lacteal, while glucose and amino acids enter the blood.' },
    { q: 'Microvilli increase the absorptive surface by', opts: ['Increasing blood flow', 'Forming the brush border of the epithelial cells', 'Secreting mucus', 'Producing enzymes'], a: 1, why: 'The brush border multiplies the surface area of each cell many times over.' },
    { q: 'Water is absorbed from the indigestible residue mainly in the', opts: ['Stomach', 'Small intestine', 'Large intestine', 'Rectum'], a: 2, why: 'The colon reclaims most of the water, producing semisolid faeces.' },
    { q: 'Goblet cells in the gut wall secrete', opts: ['Enzymes', 'Mucus', 'Bile', 'Acid'], a: 1, why: 'Mucus lubricates food and protects the lining from digestion and abrasion.' },
    { q: 'Peristalsis is', opts: ['Absorption of food', 'Wave-like contraction of gut muscle', 'Chemical digestion', 'Bacterial action'], a: 1, why: 'It propels food along the gut by rhythmic circular-muscle contraction.' },
    { q: 'Which nutrient class contains the element nitrogen?', opts: ['Carbohydrates', 'Fats', 'Proteins', 'Vitamins'], a: 2, why: 'Proteins are built from amino acids, each of which has an amino group containing nitrogen.' },
    { q: 'The most energy-rich nutrient per gram is', opts: ['Carbohydrate', 'Protein', 'Fat', 'Water'], a: 2, why: 'Fat yields about 38 kJ/g against about 17 kJ/g for carbohydrate and protein.' },
    { q: 'Nutrition in a mushroom is described as', opts: ['Holozoic', 'Saprophytic', 'Holophytic', 'Parasitic'], a: 1, why: 'Fungi secrete enzymes onto dead organic matter and absorb the products.' },
    { q: 'An organism that takes food from a living host and harms it is', opts: ['Saprophytic', 'Parasitic', 'Autotrophic', 'Symbiotic'], a: 1, why: 'Parasites live on or in the host and cause damage in obtaining food.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'respiration',
  title: 'Respiration',
  blurb: 'Aerobic and anaerobic pathways, respiratory organs, and how gas exchange happens in different animals.',
  time: '60 min',
  objectives: [
    'State the equations for aerobic and anaerobic respiration',
    'Explain why anaerobic respiration yields less energy',
    'Compare the respiratory organs of fish, insects, amphibians and mammals',
    'Describe gas exchange in a leaf and in an alveolus',
    'Explain the effects of exercise on breathing'
  ],
  body: `
<p class="lead">Respiration releases the energy stored in food. The exam wants the <strong>equations</strong> straight, the <strong>difference in yield</strong> understood, and the <strong>respiratory organs</strong> matched to their animals. This topic connects directly to transport and to circulation.</p>

<h2>Aerobic respiration</h2>
<div class="formula-box">
  <div class="fb-head">With oxygen — complete breakdown</div>
  <div class="formula-row"><div class="fname">Word equation</div>
    <div class="fexpr">Glucose + oxygen → carbon dioxide + water + <b>energy</b></div></div>
  <div class="formula-row"><div class="fname">Chemical equation</div>
    <div class="fexpr">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + <b>38 ATP</b></div>
    <div class="fnote">About 40% of the energy released is captured in ATP; the rest is heat.</div></div>
  <div class="formula-row"><div class="fname">Stages</div>
    <div class="fexpr">Glycolysis → Link reaction → Krebs cycle → Electron transport chain</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Stage</th><th>Location</th><th>What happens</th></tr></thead>
  <tbody>
    <tr><td><b>Glycolysis</b></td><td>Cytoplasm</td><td>Glucose (6C) → 2 pyruvate (3C); 2 ATP net; <b>no oxygen needed</b></td></tr>
    <tr><td><b>Link reaction</b></td><td>Mitochondrial matrix</td><td>Pyruvate → acetyl CoA + CO₂</td></tr>
    <tr><td><b>Krebs cycle</b></td><td>Mitochondrial matrix</td><td>Acetyl CoA is oxidised; releases CO₂ and reduced coenzymes</td></tr>
    <tr><td><b>Electron transport chain</b></td><td>Inner mitochondrial membrane (cristae)</td><td>Most ATP is made here; <b>oxygen is the final electron acceptor</b></td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Where does the oxygen actually act?</b>
<p>Oxygen is <strong>not</strong> used in glycolysis or the Krebs cycle directly. It is the <strong>final electron acceptor</strong> in the electron transport chain on the inner mitochondrial membrane. Without it, the chain backs up and aerobic respiration stops — which is why the process is called aerobic.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Why cristae matter</b>
<p>The inner membrane is folded into <strong>cristae</strong>, greatly increasing the surface area available for the electron transport chain and its enzymes — so more ATP can be produced. Cells with high energy demand (muscle) have many mitochondria with extensive cristae.</p></div></div>

<h2>Anaerobic respiration</h2>
<div class="formula-box">
  <div class="fb-head">Without oxygen — incomplete breakdown</div>
  <div class="formula-row"><div class="fname">In animals (muscle)</div>
    <div class="fexpr">Glucose → <b>lactic acid</b> + energy (2 ATP)</div>
    <div class="fnote">No CO₂ is produced.</div></div>
  <div class="formula-row"><div class="fname">In yeast and plants</div>
    <div class="fexpr">Glucose → <b>ethanol</b> + carbon dioxide + energy (2 ATP)</div>
    <div class="fnote">Called fermentation; used in brewing and bread-making.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The animal equation gives no CO₂</b>
<p>In muscle, anaerobic respiration produces <strong>lactic acid only</strong> — no carbon dioxide. In yeast it produces <strong>ethanol and CO₂</strong>. Because no CO₂ is made in animals, anaerobic respiration does not increase the rate of breathing through CO₂ buildup directly; it is the accumulated <em>lactic acid</em> that matters. JAMB tests the two equations side by side.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why the yield is so much lower</b>
<p>Only glycolysis runs — the glucose is only <strong>partly broken down</strong>. The products (lactic acid or ethanol) still contain a great deal of chemical energy that has never been released. Complete oxidation to CO₂ and water in aerobic respiration captures far more, hence 38 ATP versus 2.</p></div></div>

<h3>Oxygen debt</h3>
<p>After strenuous exercise, extra oxygen must be taken in to:</p>
<ol>
<li>Rebuild the <strong>oxygenated haemoglobin</strong> and <strong>myoglobin</strong> stores;</li>
<li>Convert accumulated <strong>lactic acid</strong> back to glycogen in the liver (the <strong>Cori cycle</strong>);</li>
<li>Repay the ATP reserves used anaerobically.</li>
</ol>
<p>This extra demand is the <strong>oxygen debt</strong>, and it is why you continue breathing hard after stopping.</p>

<h2>Respiratory organs</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Animal</th><th>Organ</th><th>Why it suits</th></tr></thead>
  <tbody>
    <tr><td><b>Fish</b></td><td><b>Gills</b></td><td>Large surface area; water is pumped over them; thin walls; rich blood supply</td></tr>
    <tr><td><b>Amphibians</b></td><td><b>Lungs</b> (adults) + <b>skin</b></td><td>Lungs are simple sacs; moist skin allows cutaneous gas exchange</td></tr>
    <tr><td><b>Reptiles, birds, mammals</b></td><td><b>Lungs</b></td><td>Internal, protected, with large surface area</td></tr>
    <tr><td><b>Insects</b></td><td><b>Tracheae</b></td><td>A network of tubes delivering air directly to tissues; opens at <b>spiracles</b></td></tr>
    <tr><td><b>Earthworm</b></td><td><b>Moist body wall</b></td><td>Gas exchange directly through the skin</td></tr>
    <tr><td><b>Frog (larva)</b></td><td><b>Gills</b></td><td>Tadpoles live in water</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Insects bypass the blood</b>
<p>The tracheal system delivers oxygen <strong>directly</strong> to the tissues — it does <em>not</em> use the circulatory system at all. The insect's blood (<b>haemolymph</b>) carries nutrients, not gases. This is a very common distinguishing point.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Fish cannot breathe air</b>
<p>Gills collapse out of water because the delicate lamellae stick together without the support of water, and the thin walls dry up. A fish removed from water effectively suffocates despite air being present — the surface area is lost.</p></div></div>

<h3>Adaptations of the gill</h3>
<ul>
<li><strong>Large surface area</strong> — many thin <strong>lamellae</strong>.</li>
<li><strong>Thin walls</strong> — one or two cells thick.</li>
<li><strong>Rich blood supply</strong> — keeps the diffusion gradient steep.</li>
<li><strong>Counter-current flow</strong> — blood flows <em>against</em> the direction of water, so blood always meets water with a higher oxygen content — maintaining the gradient along the whole length.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Counter-current flow, in one sentence</b>
<p>Blood flows in the <strong>opposite direction</strong> to water so that a concentration gradient is maintained along the entire length of the lamella, allowing <strong>maximum oxygen uptake</strong>. If the flows ran the same way, equilibrium would be reached halfway and uptake would stop.</p></div></div>

<h2>Gas exchange in humans</h2>
<h3>In the alveoli</h3>
<ul>
<li>Each alveolus has a <strong>very large total surface area</strong> (about 70 m²).</li>
<li><strong>One cell thick</strong> walls, and the capillary is also one cell thick.</li>
<li><strong>Rich blood supply</strong> keeps gradients steep.</li>
<li>Moist lining for gases to dissolve.</li>
<li>Oxygen in alveolar air is at higher partial pressure than in deoxygenated blood → <strong>diffuses into blood</strong>; CO₂ diffuses out the other way.</li>
</ul>

<h3>Breathing (ventilation)</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Muscle</th><th>Contraction</th><th>Effect</th><th>Air flow</th></tr></thead>
  <tbody>
    <tr><td><b>External intercostals</b> + <b>diaphragm</b></td><td>Contract</td><td>Diaphragm flattens, ribs lift up and out → volume <b>increases</b>, pressure <b>falls</b></td><td><b>Inspiration</b> (air in)</td></tr>
    <tr><td>Both relax</td><td>Relax</td><td>Diaphragm domes, ribs drop → volume <b>decreases</b>, pressure <b>rises</b></td><td><b>Expiration</b> (air out)</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Pressure before flow</b>
<p>Never say "air moves in because the lungs expand." The correct chain is: <strong>volume increases → pressure decreases → air flows in down the pressure gradient</strong>. Boyle's law. Get the order right and the explanation earns full marks.</p></div></div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Quiet vs forced breathing</b>
<p><b>Inspiration is active</b> (muscles contract). <b>Quiet expiration is passive</b> (they simply relax). During <b>forced</b> expiration — blowing out a candle, coughing — the internal intercostals and abdominal muscles contract.</p></div></div>

<h2>Effect of exercise</h2>
<p>During exercise the muscles need more ATP, so respiration speeds up:</p>
<ul>
<li>More CO₂ is produced → blood CO₂ rises.</li>
<li>CO₂ dissolves to form carbonic acid, so blood pH <strong>falls</strong> (becomes more acidic).</li>
<li><strong>Chemoreceptors</strong> in the carotid bodies and brainstem detect this.</li>
<li>The medulla increases the <strong>rate</strong> and <strong>depth</strong> of breathing to blow off the extra CO₂.</li>
<li>Heart rate and stroke volume rise to deliver more oxygen.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>CO₂, not oxygen, drives breathing</b>
<p>It is the rise in <strong>carbon dioxide</strong> (and the resulting fall in pH) that stimulates breathing, not a fall in oxygen. This is the commonest trap in this chapter. Hold your breath and the urge to breathe comes from CO₂ building up, not from running out of O₂.</p></div></div>

<h2>Gas exchange in plants</h2>
<p>Leaves exchange gases through the <strong>stomata</strong>, which open when <strong>guard cells</strong> become turgid. Inside the leaf, the <strong>air spaces</strong> of the spongy mesophyll let gases diffuse to every photosynthesising cell. CO₂ enters for photosynthesis; O₂ and CO₂ enter/leave for respiration — both happen day and night.</p>

<h2>Chapter recap</h2>
<ul>
<li>Aerobic: glucose + O₂ → CO₂ + water + 38 ATP; complete oxidation.</li>
<li>Anaerobic in animals → lactic acid (2 ATP, no CO₂); in yeast → ethanol + CO₂.</li>
<li>Oxygen is the final electron acceptor in the electron transport chain.</li>
<li>Counter-current flow in gills maximises oxygen uptake.</li>
<li>Insects use tracheae and do not transport gases in blood.</li>
<li>Volume change → pressure change → air flow; CO₂ controls breathing rate.</li>
</ul>
`,
  quiz: [
    { q: 'The overall equation for aerobic respiration is', opts: ['Glucose + oxygen → carbon dioxide + water + energy', 'Carbon dioxide + water → glucose + oxygen', 'Glucose → lactic acid + energy', 'Glucose → ethanol + carbon dioxide'], a: 0, why: 'Aerobic respiration completely oxidises glucose using oxygen.' },
    { q: 'Aerobic respiration yields approximately how many ATP per glucose?', opts: ['2', '4', '38', '100'], a: 2, why: 'About 38 ATP, against only 2 from anaerobic respiration.' },
    { q: 'Glycolysis takes place in the', opts: ['Mitochondrial matrix', 'Cytoplasm', 'Nucleus', 'Cell wall'], a: 1, why: 'Glucose is split into pyruvate in the cytoplasm, and it needs no oxygen.' },
    { q: 'The Krebs cycle takes place in the', opts: ['Cytoplasm', 'Nucleus', 'Mitochondrial matrix', 'Vacuole'], a: 2, why: 'The matrix of the mitochondrion holds the enzymes of the Krebs cycle.' },
    { q: 'The electron transport chain is located on the', opts: ['Outer mitochondrial membrane', 'Inner mitochondrial membrane (cristae)', 'Cell membrane', 'Nuclear envelope'], a: 1, why: 'The cristae provide a large surface area for the chain and ATP synthase.' },
    { q: 'The final electron acceptor in aerobic respiration is', opts: ['Carbon dioxide', 'Glucose', 'Oxygen', 'Hydrogen'], a: 2, why: 'Oxygen accepts electrons and combines with hydrogen to form water.' },
    { q: 'Anaerobic respiration in muscle produces', opts: ['Ethanol and CO₂', 'Lactic acid', 'Carbon dioxide and water', 'Glucose'], a: 1, why: 'In animals the end product is lactic acid; no CO₂ is formed.' },
    { q: 'Anaerobic respiration in yeast produces', opts: ['Lactic acid only', 'Ethanol and carbon dioxide', 'Water and CO₂', 'Protein'], a: 1, why: 'Alcoholic fermentation yields ethanol and carbon dioxide.' },
    { q: 'Anaerobic respiration gives a much lower yield of energy because glucose is', opts: ['Completely oxidised', 'Only partly broken down', 'Converted to CO₂', 'Used for growth'], a: 1, why: 'The products still contain much stored energy that has not been released.' },
    { q: 'Oxygen debt after exercise is the extra oxygen needed to', opts: ['Cool the muscles', 'Remove lactic acid and restore oxygen stores', 'Digest food', 'Produce CO₂'], a: 1, why: 'It repays the oxygen used anaerobically and allows lactic acid to be cleared.' },
    { q: 'Lactic acid formed during anaerobic respiration is removed mainly by the', opts: ['Lungs', 'Kidneys', 'Liver', 'Skin'], a: 2, why: 'The liver converts lactic acid back to glycogen — the Cori cycle.' },
    { q: 'Gas exchange in fish takes place in the', opts: ['Lungs', 'Gills', 'Tracheae', 'Skin'], a: 1, why: 'Gills are highly folded, thin-walled and richly supplied with blood.' },
    { q: 'Respiration in insects occurs through', opts: ['Lungs', 'Gills', 'Tracheae opening at spiracles', 'The skin'], a: 2, why: 'The tracheal system delivers air directly to the tissues, bypassing the blood.' },
    { q: 'Insects differ from mammals in that their blood', opts: ['Carries oxygen', 'Does not transport oxygen', 'Is red', 'Is always oxygenated'], a: 1, why: 'Haemolymph carries nutrients; gases move through the tracheae instead.' },
    { q: 'An amphibian exchanges gases through', opts: ['Lungs and skin only', 'Gills and lungs', 'Tracheae', 'Gills only'], a: 0, why: 'Adult frogs use simple lungs and their moist skin for cutaneous respiration.' },
    { q: 'An earthworm carries out respiration through its', opts: ['Lungs', 'Gills', 'Moist body wall', 'Tracheae'], a: 2, why: 'Oxygen dissolves in the moist skin and diffuses into the capillaries beneath.' },
    { q: 'Counter-current flow in fish gills means that', opts: ['Blood and water flow in the same direction', 'Blood and water flow in opposite directions', 'Water flows only one way', 'Blood stops flowing'], a: 1, why: 'Opposite flow maintains the diffusion gradient along the whole lamella.' },
    { q: 'Counter-current flow increases efficiency by', opts: ['Warming the water', 'Maintaining a diffusion gradient along the whole length', 'Filtering the water', 'Storing oxygen'], a: 1, why: 'Blood always meets water with more oxygen, so diffusion continues throughout.' },
    { q: 'During inspiration, the diaphragm', opts: ['Domes upward', 'Contracts and flattens', 'Relaxes', 'Thickens'], a: 1, why: 'Contraction flattens it, increasing thoracic volume and lowering pressure.' },
    { q: 'Air moves into the lungs during inspiration because', opts: ['The lungs actively suck air in', 'Thoracic volume increases and pressure falls', 'The trachea widens', 'Oxygen is used up'], a: 1, why: 'Volume increase causes pressure decrease, so air flows in down the gradient.' },
    { q: 'Quiet expiration is brought about by', opts: ['Contraction of abdominal muscles', 'Relaxation of the diaphragm and intercostals', 'Contraction of the diaphragm', 'The intercostals contracting'], a: 1, why: 'It is passive — the muscles simply relax, reducing volume and raising pressure.' },
    { q: 'Forced expiration involves the contraction of the', opts: ['External intercostals', 'Internal intercostals and abdominal muscles', 'Diaphragm only', 'Pectorals'], a: 1, why: 'These muscles pull the ribs down and in, driving air out forcefully.' },
    { q: 'The main stimulus that increases breathing rate during exercise is a rise in', opts: ['Oxygen', 'Carbon dioxide', 'Glucose', 'Nitrogen'], a: 1, why: 'CO₂ forms carbonic acid, lowering blood pH; chemoreceptors detect this.' },
    { q: 'A rise in blood CO₂ causes blood pH to', opts: ['Rise', 'Fall', 'Stay the same', 'Become neutral always'], a: 1, why: 'CO₂ dissolves to carbonic acid, making the blood more acidic.' },
    { q: 'Gas exchange in leaves occurs mainly through the', opts: ['Cuticle', 'Stomata', 'Xylem', 'Epidermis'], a: 1, why: 'Stomatal pores, opened by turgid guard cells, allow gases to diffuse in and out.' },
    { q: 'Gills collapse when a fish is removed from water because', opts: ['They dry out and the lamellae stick together', 'They contain no blood', 'The fish stops respiring', 'They are reabsorbed'], a: 0, why: 'Without water to support them the delicate plates cling together and the surface area is lost.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'excretion',
  title: 'Excretion',
  blurb: 'The kidney nephron, urine formation, the skin and lungs as excretory organs, and disorders of the kidney.',
  time: '60 min',
  objectives: [
    'Define excretion and distinguish it from egestion and secretion',
    'Label the structure of the nephron and state the function of each part',
    'Describe the three processes of urine formation',
    'Explain the roles of the skin, lungs and liver in excretion',
    'Discuss disorders of the kidney and the value of dialysis and transplants'
  ],
  body: `
<p class="lead">Excretion removes metabolic wastes. In humans the heavy lifting is done by the <strong>kidneys</strong>, and the key to nearly every question is the <strong>nephron</strong> — its structure and the three processes that turn blood into urine.</p>

<h2>What counts as excretion</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Waste</th><th>Produced by</th><th>Excretory organ</th></tr></thead>
  <tbody>
    <tr><td>Carbon dioxide</td><td>Aerobic respiration</td><td><b>Lungs</b> (in exhaled air)</td></tr>
    <tr><td>Urea</td><td>Deamination of amino acids in the liver</td><td><b>Kidneys</b> (in urine)</td></tr>
    <tr><td>Excess water and salts</td><td>Digestion and metabolism</td><td>Kidneys, skin (sweat)</td></tr>
    <tr><td>Bile pigment (bilirubin)</td><td>Breakdown of haemoglobin</td><td>Liver → bile → faeces</td></tr>
    <tr><td>Excess hormones</td><td>Endocrine glands</td><td>Liver (inactivation), then kidneys</td></tr>
    <tr><td>Uric acid</td><td>Nucleic acid metabolism</td><td>Kidneys</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The three words that get confused</b>
<p><b>Excretion</b> — removal of <em>metabolic</em> wastes (CO₂, urea) from cells.<br>
<b>Secretion</b> — release of a <em>useful</em> substance made by a gland (hormones, enzymes, sweat).<br>
<b>Egestion</b> — removal of undigested material (faeces) that was never absorbed.<br>
Sweating is <em>both</em> secretion (of sweat glands) and excretion (of water, salts and a little urea).</p></div></div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Where urea comes from</b>
<p>Excess amino acids cannot be stored. The liver removes the amino group (<strong>deamination</strong>) and converts it to <strong>urea</strong>, which is harmless and highly soluble. The urea then travels in the blood to the kidneys. The liver therefore both <em>makes</em> the waste and <em>inactivates</em> hormones and drugs.</p></div></div>

<h2>The kidney</h2>
<div class="formula-box">
  <div class="fb-head">Kidney → nephron → urine</div>
  <div class="formula-row"><div class="fname">Outer region</div>
    <div class="fexpr"><b>Cortex</b> — contains the glomeruli and convoluted tubules</div></div>
  <div class="formula-row"><div class="fname">Inner region</div>
    <div class="fexpr"><b>Medulla</b> — contains the loops of Henle and collecting ducts, arranged in pyramids</div></div>
  <div class="formula-row"><div class="fname">Urine leaves via</div>
    <div class="fexpr">Collecting duct → ureter → <b>bladder</b> → urethra</div>
    <div class="fnote">The urethra is shared with the reproductive system in males only.</div></div>
  <div class="formula-row"><div class="fname">Blood supply</div>
    <div class="fexpr">Renal artery brings blood in; renal vein carries filtered blood away</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Artery in, vein out — but the vein carries more oxygen</b>
<p>Unlike most organs, the <b>renal vein leaves with more oxygen than the renal artery arrived with</b>, because the kidney cells add CO₂ but do not consume the whole supply. The renal artery is bright red (oxygenated) and the vein dull. Do not assume all arteries carry oxygenated blood — the <b>pulmonary artery</b> is the other exception.</p></div></div>

<h2>The nephron</h2>
<div class="formula-box">
  <div class="fb-head">Structure and function</div>
  <div class="formula-row"><div class="fname">Bowman's capsule</div>
    <div class="fexpr">Cup-shaped sac surrounding the glomerulus; receives the filtrate</div></div>
  <div class="formula-row"><div class="fname">Glomerulus</div>
    <div class="fexpr">A knot of capillaries under <b>high pressure</b>; filtration happens here</div></div>
  <div class="formula-row"><div class="fname">Proximal convoluted tubule (PCT)</div>
    <div class="fexpr">Reabsorption begins; walls are thick with microvilli and mitochondria</div></div>
  <div class="formula-row"><div class="fname">Loop of Henle</div>
    <div class="fexpr">Descending limb thin; ascending limb thick — sets up the concentration gradient</div></div>
  <div class="formula-row"><div class="fname">Distal convoluted tubule (DCT)</div>
    <div class="fexpr">Selective reabsorption and secretion; hormone-controlled</div></div>
  <div class="formula-row"><div class="fname">Collecting duct</div>
    <div class="fexpr">Final concentration of urine under ADH control</div></div>
</div>

<h2>Urine formation: three processes</h2>
<ol>
<li><strong>Ultrafiltration (k filtration)</strong> — high pressure in the glomerulus forces small molecules (water, glucose, amino acids, urea, salts) out of the blood into Bowman's capsule. <strong>Proteins and blood cells are too large</strong> and stay in the blood.</li>
<li><strong>Reabsorption</strong> — useful substances are returned to the blood in the tubules: <strong>100% of glucose and amino acids</strong> in the PCT (by active transport), plus most water and salts.</li>
<li><strong>Secretion</strong> — extra hydrogen ions, urea and certain drugs are actively moved <em>from</em> the blood <em>into</em> the tubule for removal.</li>
</ol>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why is glucose normally absent from urine?</b>
<p>Because it is <strong>completely reabsorbed in the proximal convoluted tubule</strong> by active transport, which requires energy from ATP. In <strong>diabetes mellitus</strong> the blood glucose exceeds the transporters' capacity (the transport maximum, <b>Tm</b>), so the excess spills into the urine. If a question asks why glucose appears, answer: it exceeds the reabsorption capacity.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>What the filtrate contains</b>
<p>Everything small enough to pass: <strong>water, glucose, amino acids, urea, salts, other small solutes</strong> — but <b>not</b> proteins or cells. This is the usual multiple-choice question, and the exclusion of proteins is the part people miss.</p></div></div>

<h2>Controlling urine concentration</h2>
<h3>ADH (antidiuretic hormone / vasopressin)</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Condition</th><th>ADH released?</th><th>Effect</th><th>Urine</th></tr></thead>
  <tbody>
    <tr><td><b>Dehydrated / salty meal</b></td><td><b>More</b></td><td>Collecting duct becomes more permeable → more water reabsorbed</td><td><b>Small volume, concentrated</b>, dark, high osmotic pressure</td></tr>
    <tr><td><b>Well hydrated / lots of water drunk</b></td><td><b>Less</b></td><td>Less water reabsorbed</td><td><b>Large volume, dilute</b>, pale</td></tr>
  </tbody>
</table>

<p>The osmoreceptors in the <strong>hypothalamus</strong> detect changes in blood water potential; the hormone is stored in and released from the <strong>posterior pituitary</strong>.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>ADH target: the collecting duct</b>
<p>ADH acts on the <b>collecting duct</b> (and distal tubule), making it permeable to water by inserting <b>aquaporins</b>. More ADH → more water reabsorbed → concentrated urine. No ADH → dilute urine. That chain is the whole answer to any ADH question.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>A salty meal → concentrated urine</b>
<p>Eating salt raises the solute concentration of the blood, lowering its water potential. Osmoreceptors detect this, ADH is released, more water is reabsorbed, and urine becomes concentrated and reduced in volume. Fewer ADH molecules are needed after a large intake of dilute fluid.</p></div></div>

<h2>Other excretory organs</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Organ</th><th>Excretes</th></tr></thead>
  <tbody>
    <tr><td><b>Lungs</b></td><td>Carbon dioxide and water vapour (from respiration)</td></tr>
    <tr><td><b>Skin</b></td><td>Water, salts, small amounts of urea via <b>sweat glands</b></td></tr>
    <tr><td><b>Liver</b></td><td>Bile pigment; inactivates hormones and drugs</td></tr>
    <tr><td><b>Large intestine</b></td><td>Some salts and bile pigments (but undigested food = egestion)</td></tr>
  </tbody>
</table>

<div class="note note-fact"><span class="ico">📌</span><div><b>Sweating vs urination in hot weather</b>
<p>In a hot environment you sweat heavily, losing water and salts. The kidneys then conserve water, so you pass <strong>less, more concentrated urine</strong>. Both mechanisms reduce water loss, and they work together.</p></div></div>

<h2>Disorders</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Disorder</th><th>Cause</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td><b>Nephritis</b></td><td>Inflammation/infection of the kidney</td><td>Blood and protein appear in urine</td></tr>
    <tr><td><b>Kidney failure</b></td><td>Nephrons damaged, often by disease or high blood pressure</td><td>Urea and salts accumulate → uraemia, swelling, poisoning</td></tr>
    <tr><td><b>Diabetes insipidus</b></td><td>Too little ADH</td><td>Huge volumes of dilute urine; constant thirst</td></tr>
    <tr><td><b>Diabetes mellitus</b></td><td>Little/no insulin (type 1) or resistance (type 2)</td><td>Glucose in urine; glucose cannot be used</td></tr>
    <tr><td><b>Kidney stones</b></td><td>Crystals of calcium salts precipitate in the tubules</td><td>Painful blockage; may need removal</td></tr>
  </tbody>
</table>

<h3>Management of kidney failure</h3>
<ul>
<li><strong>Dialysis</strong> — the patient's blood is passed over a partially permeable membrane (dialysis fluid). Urea and excess salts diffuse out; useful substances stay in. The fluid contains no urea so a concentration gradient is maintained. Must be repeated regularly, is slow and inconvenient.</li>
<li><strong>Kidney transplant</strong> — a functioning kidney is implanted, ideally from a close relative to reduce rejection. Restores normal function, but requires <strong>immunosuppressant drugs</strong> for life and carries the risk of rejection.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why the dialysis fluid has no urea</b>
<p>Diffusion only works <em>down</em> a concentration gradient. If the dialysis fluid contained urea, none would leave the blood. Its absence is what makes the gradient, and therefore the process, possible. That is the single most examined detail of dialysis.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Excretion removes metabolic wastes; secretion releases useful substances; egestion removes undigested food.</li>
<li>Urea is made in the liver by deamination; it is excreted by the kidneys.</li>
<li>Nephron: Bowman's capsule → PCT → loop of Henle → DCT → collecting duct.</li>
<li>Urine formation = ultrafiltration + reabsorption + secretion.</li>
<li>Glucose is 100% reabsorbed in the PCT; its presence in urine signals excess.</li>
<li>More ADH → concentrated urine; less ADH → dilute urine.</li>
</ul>
`,
  quiz: [
    { q: 'Excretion is best defined as the removal of', opts: ['Undigested food from the body', 'Metabolic waste products from the body', 'Useful substances from a gland', 'Excess food eaten'], a: 1, why: 'Only wastes produced by metabolism count as excretory products.' },
    { q: 'Which of the following is NOT an excretory product?', opts: ['Carbon dioxide', 'Urea', 'Faeces', 'Excess water'], a: 2, why: 'Faeces contain material that was never absorbed, so their removal is egestion.' },
    { q: 'Urea is produced in the', opts: ['Kidneys', 'Lungs', 'Liver', 'Skin'], a: 2, why: 'The liver deaminates excess amino acids and converts the amino group to urea.' },
    { q: 'Deamination is the removal of', opts: ['Carbon group', 'Amino group', 'Water', 'Fat'], a: 1, why: 'The amino group is removed from an amino acid and converted to urea.' },
    { q: 'Carbon dioxide is excreted mainly by the', opts: ['Kidneys', 'Lungs', 'Skin', 'Liver'], a: 1, why: 'It is removed in exhaled air from the lungs.' },
    { q: 'Sweat glands excrete', opts: ['Only water', 'Water, salts and some urea', 'Urea only', 'Glucose'], a: 1, why: 'Sweat is mainly water and salts, with small amounts of urea.' },
    { q: 'The functional unit of the kidney is the', opts: ['Nephron', 'Neurone', 'Villus', 'Alveolus'], a: 0, why: 'Each kidney contains about a million nephrons.' },
    { q: 'The structure that surrounds the glomerulus is the', opts: ['Loop of Henle', "Bowman's capsule", 'Collecting duct', 'Ureter'], a: 1, why: 'The cup-shaped capsule receives the filtrate squeezed out of the glomerulus.' },
    { q: 'Filtration in the kidney occurs in the', opts: ['Proximal convoluted tubule', 'Glomerulus', 'Loop of Henle', 'Urethra'], a: 1, why: 'High blood pressure in the glomerulus forces small molecules into Bowman’s capsule.' },
    { q: 'Blood in the glomerulus is under high pressure because it enters via the', opts: ['Renal vein', 'Renal artery', 'Ureter', 'Aorta directly with low resistance'], a: 1, why: 'The afferent arteriole is wider than the efferent, so pressure builds in the glomerulus.' },
    { q: 'The filtrate in Bowman’s capsule normally contains', opts: ['Proteins and blood cells', 'Glucose, amino acids, urea and water', 'Urea only', 'Red blood cells'], a: 1, why: 'Proteins and cells are too large to pass through the filtration membrane.' },
    { q: 'Large proteins are absent from the filtrate because they', opts: ['Are reabsorbed too fast', 'Are too large to be filtered', 'Are dissolved in fat', 'Are not produced'], a: 1, why: 'The filter excludes anything above a certain molecular size.' },
    { q: 'The main site of reabsorption of glucose and amino acids is the', opts: ['Loop of Henle', 'Proximal convoluted tubule', 'Collecting duct', 'Glomerulus'], a: 1, why: 'They are completely reabsorbed there by active transport using ATP.' },
    { q: 'Glucose appears in the urine when', opts: ['The kidneys fail to filter', 'The amount exceeds the reabsorption capacity', 'Too much water is drunk', 'The person eats fat'], a: 1, why: 'The transporters become saturated, so the excess passes into the urine.' },
    { q: 'Urine becomes concentrated when', opts: ['More ADH is released', 'Less ADH is released', 'Insulin is released', 'Adrenaline rises'], a: 0, why: 'ADH makes the collecting duct permeable to water, so more water is reabsorbed.' },
    { q: 'ADH is produced by the', opts: ['Adrenal gland', 'Thyroid', 'Hypothalamus (stored in posterior pituitary)', 'Liver'], a: 2, why: 'It is synthesised in the hypothalamus and released by the posterior pituitary.' },
    { q: 'ADH acts on the', opts: ['Glomerulus', 'Collecting duct', 'Bowman’s capsule', 'Liver'], a: 1, why: 'It inserts aquaporins, increasing water reabsorption from the collecting duct.' },
    { q: 'After drinking a large amount of water, a person would expect', opts: ['Small concentrated urine', 'Large dilute urine', 'No urine at all', 'Urine containing glucose'], a: 1, why: 'Less ADH is released, so less water is reabsorbed and the urine is dilute.' },
    { q: 'Eating a very salty meal leads to', opts: ['Large dilute urine', 'Small concentrated urine', 'More sweating only', 'No change'], a: 1, why: 'Blood water potential falls, ADH is released and water is conserved.' },
    { q: 'Diabetes insipidus is caused by a deficiency of', opts: ['Insulin', 'ADH', 'Adrenaline', 'Thyroxine'], a: 1, why: 'Too little ADH means water is not reabsorbed, producing large volumes of dilute urine.' },
    { q: 'A person suffering from uraemia would have', opts: ['Too little urea in the blood', 'Too much urea in the blood', 'Excess glucose', 'No sweat'], a: 1, why: 'Uraemia is the accumulation of urea when the kidneys cannot filter it out.' },
    { q: 'In dialysis, the dialysis fluid contains no urea in order to', opts: ['Save cost', 'Create a concentration gradient so urea leaves the blood', 'Make the fluid safe', 'Prevent infection'], a: 1, why: 'Diffusion requires a gradient — urea can only move from blood to fluid if the fluid is urea-free.' },
    { q: 'The main disadvantage of dialysis over a transplant is that it', opts: ['Is too expensive', 'Must be repeated regularly and is inconvenient', 'Always causes rejection', 'Removes too much glucose'], a: 1, why: 'Dialysis replaces a continuous process with an occasional one and restricts life.' },
    { q: 'The main risk of a kidney transplant is', opts: ['Dehydration', 'Rejection by the body’s immune system', 'Excess urea production', 'Too much urine'], a: 1, why: 'Immunosuppressant drugs are needed for life to prevent rejection.' },
    { q: 'The renal vein carries blood that is', opts: ['Oxygenated and filtered', 'Deoxygenated and unfiltered', 'Oxygenated and unfiltered', 'Deoxygenated and filtered'], a: 0, why: 'Kidney cells add CO₂ but the blood leaving has been filtered of urea.' },
    { q: 'In hot weather, the volume of urine produced usually', opts: ['Increases', 'Decreases', 'Stays constant', 'Contains more glucose'], a: 1, why: 'Water is lost in sweat, so the kidneys conserve water and produce concentrated urine.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'reproduction',
  title: 'Reproduction',
  blurb: 'Asexual and sexual reproduction, the human reproductive systems, the menstrual cycle and early development.',
  time: '65 min',
  objectives: [
    'Compare sexual and asexual reproduction',
    'Describe the different methods of asexual reproduction',
    'State the functions of the parts of the male and female reproductive systems',
    'Describe the menstrual cycle with hormone control',
    'Explain fertilisation, implantation and the roles of the placenta'
  ],
  body: `
<p class="lead">Reproduction ensures the survival of the species. The exam tests <strong>methods of asexual reproduction</strong>, <strong>the parts and their functions</strong>, and above all <strong>hormone control of the menstrual cycle</strong> — which requires the sequence of events to be secure.</p>

<h2>Sexual vs asexual</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Sexual</th><th>Asexual</th></tr></thead>
  <tbody>
    <tr><td><b>Parents</b></td><td>Two</td><td>One</td></tr>
    <tr><td><b>Gametes</b></td><td>Formed; fuse at fertilisation</td><td>None</td></tr>
    <tr><td><b>Zygote</b></td><td>Formed</td><td>Not formed</td></tr>
    <tr><td><b>Genetic variation</b></td><td><b>Yes</b> — meiosis and crossing over</td><td><b>No</b> — offspring are clones</td></tr>
    <tr><td><b>Speed</b></td><td>Slower, needs a partner</td><td>Fast, no partner needed</td></tr>
    <tr><td><b>Examples</b></td><td>Humans, flowering plants</td><td>Budding, fission, fragmentation</td></tr>
  </tbody>
</table>

<h3>Methods of asexual reproduction</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Method</th><th>Process</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Binary fission</b></td><td>Nucleus and cell divide; two identical cells</td><td><em>Amoeba</em>, bacteria</td></tr>
    <tr><td><b>Budding</b></td><td>An outgrowth (bud) forms and eventually detaches</td><td>Yeast, <em>Hydra</em></td></tr>
    <tr><td><b>Fragmentation</b></td><td>The body breaks into pieces, each regenerates</td><td>Spirogyra, starfish</td></tr>
    <tr><td><b>Spore formation</b></td><td>Thin-walled spores produced, then germinate</td><td>Fungi, ferns, mosses</td></tr>
    <tr><td><b>Vegetative propagation</b></td><td>New plant from a vegetative part</td><td>Yam tuber, cassava, cuttings</td></tr>
    <tr><td><b>Runner/stolon</b></td><td>Horizontal stem produces plantlets</td><td>Strawberry, guava</td></tr>
    <tr><td><b>Parthenogenesis</b></td><td>Unfertilised egg develops</td><td>Honey bee drones, some lizards</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Budding vs fission</b>
<p><b>Fission</b> splits the parent roughly equally into two. <b>Budding</b> produces a small outgrowth that grows and detaches, often leaving the parent intact — in yeast the parent may produce several buds at once. Match the organism: <em>Amoeba</em> → fission; <em>Hydra</em> and yeast → budding.</p></div></div>

<h2>The male reproductive system</h2>
<div class="formula-box">
  <div class="fb-head">Parts and functions</div>
  <div class="formula-row"><div class="fname">Testes</div>
    <div class="fexpr">Produce <b>spermatozoa</b> (spermatogenesis) and <b>testosterone</b></div>
    <div class="fnote">Held in the scrotum outside the body — sperm need a temperature about 2–3 °C below body temperature.</div></div>
  <div class="formula-row"><div class="fname">Epididymis</div>
    <div class="fexpr">Storage and maturation of sperm</div></div>
  <div class="formula-row"><div class="fname">Vas deferens</div>
    <div class="fexpr">Transports sperm from the epididymis to the urethra</div></div>
  <div class="formula-row"><div class="fname">Seminal vesicles</div>
    <div class="fexpr">Secrete a <b>fructose-rich</b> alkaline fluid — energy for sperm</div></div>
  <div class="formula-row"><div class="fname">Prostate gland</div>
    <div class="fexpr">Secretes a milky alkaline fluid that neutralises vaginal acid</div></div>
  <div class="formula-row"><div class="fname">Cowper's (bulbourethral) gland</div>
    <div class="fexpr">Lubricates and neutralises residual acidity in the urethra</div></div>
  <div class="formula-row"><div class="fname">Penis / urethra</div>
    <div class="fexpr">Passes urine and semen — but <b>never at the same time</b></div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why alkaline secretions matter</b>
<p>Seminal fluid is <b>alkaline</b> and neutralises the <b>acidic</b> environment of the vagina (pH ~3.5–4.5), which would otherwise kill the sperm. Fructose provides energy for the flagellum. Both facts explain sperm survival and are common short-answer marks.</p></div></div>

<h3>The spermatozoon</h3>
<ul>
<li><strong>Head</strong> — nucleus containing chromosomes, capped by the <strong>acrosome</strong> containing enzymes that digest the follicle cells and membrane of the ovum.</li>
<li><strong>Middle piece</strong> — packed with <strong>mitochondria</strong> to power the tail.</li>
<li><strong>Tail (flagellum)</strong> — provides movement in a lashing motion.</li>
</ul>

<h2>The female reproductive system</h2>
<div class="formula-box">
  <div class="fb-head">Parts and functions</div>
  <div class="formula-row"><div class="fname">Ovaries</div>
    <div class="fexpr">Produce <b>ova</b> (oogenesis) and hormones — <b>oestrogen</b> and <b>progesterone</b></div></div>
  <div class="formula-row"><div class="fname">Fallopian tubes (oviducts)</div>
    <div class="fexpr">Ciliated; <b>fertilisation normally occurs here</b>, in the upper third</div></div>
  <div class="formula-row"><div class="fname">Uterus (womb)</div>
    <div class="fexpr">Implantation of the embryo; lining rebuilt each cycle</div></div>
  <div class="formula-row"><div class="fname">Cervix</div>
    <div class="fexpr">Narrow opening; mucus plug; dilates during childbirth</div></div>
  <div class="formula-row"><div class="fname">Vagina</div>
    <div class="fexpr">Receives the penis; birth canal</div></div>
  <div class="formula-row"><div class="fname">Vulva</div>
    <div class="fexpr">External genitalia</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Where fertilisation happens</b>
<p><strong>Upper third of the Fallopian tube</strong>. If the egg is not fertilised there it passes into the uterus and breaks down. A fertilised egg that implants elsewhere gives an <strong>ectopic (tubal) pregnancy</strong>, which is dangerous. Both facts are examinable.</p></div></div>

<h2>Human reproduction</h2>
<h3>The menstrual cycle</h3>
<p>A cycle of about <strong>28 days</strong> (21–35 is normal), controlled by hormones from the <strong>hypothalamus</strong>, <strong>pituitary</strong> and <strong>ovaries</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Days</th><th>Phase</th><th>Hormones</th><th>Events</th></tr></thead>
  <tbody>
    <tr><td><b>1–5</b></td><td><b>Menstruation</b></td><td>Oestrogen, progesterone both low</td><td>Endometrium breaks down and is shed as menstrual blood</td></tr>
    <tr><td><b>6–13</b></td><td><b>Proliferative / follicular</b></td><td>FSH → oestrogen rising</td><td>Follicle grows in ovary; endometrium rebuilds and thickens</td></tr>
    <tr><td><b>14</b></td><td><b>Ovulation</b></td><td><b>LH surge</b> triggered by peak oestrogen</td><td>Mature ovum released from the Graafian follicle</td></tr>
    <tr><td><b>15–28</b></td><td><b>Secretory / luteal</b></td><td>Progesterone high (corpus luteum)</td><td>Endometrium becomes thick, glandular and blood-rich, ready for implantation</td></tr>
    <tr><td><b>28 → 1</b></td><td><b>Regression</b></td><td>Corpus luteum degenerates → progesterone falls</td><td>Endometrium breaks down → next menstruation</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">The hormone chain</div>
  <div class="formula-row"><div class="fname">Hypothalamus</div>
    <div class="fexpr">Releases <b> GnRH</b> → acts on the anterior pituitary</div></div>
  <div class="formula-row"><div class="fname">Anterior pituitary</div>
    <div class="fexpr">Releases <b>FSH</b> (stimulates follicle growth) and <b>LH</b> (triggers ovulation)</div></div>
  <div class="formula-row"><div class="fname">Ovary</div>
    <div class="fexpr">Follicle → <b>oestrogen</b>; after ovulation → corpus luteum → <b>progesterone</b></div></div>
  <div class="formula-row"><div class="fname">Uterus</div>
    <div class="fexpr">Oestrogen rebuilds the endometrium; progesterone maintains it</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Which hormone triggers ovulation?</b>
<p><strong>LH</strong>, in a sharp surge around day 14. FSH stimulates the follicle to grow, but it is the <strong>LH surge</strong> that ruptures the Graafian follicle and releases the ovum. Oestrogen triggers that surge by positive feedback on the pituitary when it reaches high concentration.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Negative feedback keeps it stable</b>
<p>Rising <b>progesterone</b> inhibits FSH and LH, preventing new follicles from developing during the luteal phase. When the corpus luteum degenerates, progesterone falls, inhibition is released and FSH rises again — starting the next cycle. This is the standard example of negative feedback.</p></div></div>

<h3>Hormonal control of pregnancy</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Hormone</th><th>Source</th><th>Role</th></tr></thead>
  <tbody>
    <tr><td><b>hCG</b></td><td>Placenta (early)</td><td>Maintains the corpus luteum so progesterone keeps being made — this is what pregnancy tests detect</td></tr>
    <tr><td><b>Progesterone</b></td><td>Corpus luteum, then placenta</td><td>Maintains the endometrium; stops menstruation; prepares the breasts; inhibits FSH/LH so no new eggs mature</td></tr>
    <tr><td><b>Oestrogen</b></td><td>Placenta</td><td>Promotes uterine growth and mammary development</td></tr>
    <tr><td><b>Relaxin</b></td><td>Placenta/ovaries</td><td>Relaxes the pelvic ligaments and softens the cervix for birth</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why progesterone prevents new ovulation</b>
<p>High progesterone <strong>inhibits FSH and LH</strong>, so no new follicle matures and no further ovulation occurs during pregnancy. Menstruation stops because the endometrium is maintained, not shed. Both points are worth marks.</p></div></div>

<h2>Fertilisation and early development</h2>
<ol>
<li><strong>Fertilisation</strong> — sperm meets the ovum in the Fallopian tube; the acrosome enzymes digest a path; the membranes fuse and the nuclei join, forming a <strong>diploid zygote</strong>.</li>
<li><strong>Cleavage</strong> — rapid mitosis forms a ball of cells called the <strong>morula</strong>, then the <strong>blastocyst</strong> (with inner cell mass and trophoblast).</li>
<li><strong>Implantation</strong> — at about <strong>day 6–7</strong>, the blastocyst burrows into the thickened endometrium.</li>
<li><strong>Placenta formation</strong> — the trophoblast develops finger-like <strong>chorionic villi</strong> that interlock with maternal blood spaces.</li>
<li><strong>Embryonic development</strong> — the embryo is surrounded by <strong>amniotic fluid</strong> in the amniotic sac.</li>
</ol>

<div class="formula-box">
  <div class="fb-head">Functions of the placenta</div>
  <div class="formula-row"><div class="fname">Exchange</div>
    <div class="fexpr"><b>Oxygen and glucose</b> pass mother → foetus; <b>CO₂ and urea</b> pass foetus → mother</div></div>
  <div class="formula-row"><div class="fname">Nutrition</div>
    <div class="fexpr">Amino acids, vitamins, minerals absorbed from maternal blood</div></div>
  <div class="formula-row"><div class="fname">Excretion</div>
    <div class="fexpr">Foetal wastes removed into the mother's blood</div></div>
  <div class="formula-row"><div class="fname">Protection</div>
    <div class="fexpr">Acts as a <b>barrier</b> — many bacteria cannot cross it</div></div>
  <div class="formula-row"><div class="fname">Endocrine</div>
    <div class="fexpr">Secretes <b>hCG, progesterone and oestrogen</b></div></div>
  <div class="formula-row"><div class="fname">Immunity</div>
    <div class="fexpr"><b>IgG antibodies</b> pass across, giving the baby temporary passive immunity</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The placenta is not a perfect barrier</b>
<p>Although it blocks most bacteria, <b>viruses</b>, <b>alcohol</b>, <b>nicotine</b> and certain drugs can cross — causing congenital abnormalities or low birth weight. The classic example is <b>rubella</b> in early pregnancy. If a question says the placenta prevents all harmful substances, it is false.</p></div></div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Umbilical vessels</b>
<p>The umbilical cord contains <b>two umbilical arteries</b> carrying deoxygenated, waste-laden blood <em>to</em> the placenta, and <b>one umbilical vein</b> carrying oxygenated, nutrient-rich blood <em>to</em> the foetus. This is the reverse of the usual artery/vein rule — another favourite question.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Sexual: two parents, gametes, variation. Asexual: one parent, no gametes, clones.</li>
<li>Fission, budding, fragmentation, spores, vegetative propagation are the main asexual methods.</li>
<li>Fertilisation occurs in the upper third of the Fallopian tube; ovulation on ~day 14 via an LH surge.</li>
<li>Oestrogen rebuilds the endometrium; progesterone maintains it; both falling causes menstruation.</li>
<li>The placenta exchanges gases and nutrients, excretes wastes, protects, and secretes hormones.</li>
<li>Two umbilical arteries and one vein — the reverse of the usual pattern.</li>
</ul>
`,
  quiz: [
    { q: 'Sexual reproduction differs from asexual reproduction in that it involves', opts: ['One parent only', 'The fusion of gametes', 'No genetic variation', 'Faster population growth'], a: 1, why: 'Fertilisation is the fusion of two haploid gametes to form a zygote.' },
    { q: 'Offspring produced asexually are', opts: ['All different', 'Genetically identical to the parent', 'Always male', 'Weaker than the parent'], a: 1, why: 'No meiosis or fertilisation occurs, so they are genetically identical clones.' },
    { q: 'Binary fission is a method of reproduction in', opts: ['Hydra', 'Amoeba', 'Mushroom', 'Maize'], a: 1, why: 'Amoeba divides by fission; Hydra buds and yeast buds.' },
    { q: 'The production of new individuals from buds is called', opts: ['Fragmentation', 'Budding', 'Sporulation', 'Germination'], a: 1, why: 'A small outgrowth forms, grows and detaches — as in Hydra and yeast.' },
    { q: 'Which is a method of asexual reproduction?', opts: ['Pollination', 'Fragmentation', 'Fertilisation', 'Menstruation'], a: 1, why: 'A broken piece regenerates into a whole organism, as in Spirogyra.' },
    { q: 'In humans, spermatozoa are produced in the', opts: ['Prostate', 'Testes', 'Seminal vesicles', 'Epididymis'], a: 1, why: 'The testes, under the influence of FSH and testosterone.' },
    { q: 'Testosterone is secreted by the', opts: ['Prostate gland', 'Leydig cells of the testes', 'Pituitary', 'Adrenal cortex'], a: 1, why: 'It develops and maintains male secondary sexual characteristics.' },
    { q: 'Sperm are stored and mature in the', opts: ['Vas deferens', 'Epididymis', 'Urethra', 'Seminal vesicle'], a: 1, why: 'The coiled tubule on the surface of each testis.' },
    { q: 'The fluid from the seminal vesicles is rich in', opts: ['Protein', 'Fructose', 'Bile', 'Amylase'], a: 1, why: 'Fructose supplies the energy sperm need for the flagellar movement.' },
    { q: 'Alkaline seminal fluid is important because it', opts: ['Kills bacteria only', 'Neutralises the acidic vagina so sperm survive', 'Makes sperm motile instantly', 'Provides oxygen'], a: 1, why: 'The vaginal environment is acidic and would otherwise destroy the sperm.' },
    { q: 'The enzyme-containing structure at the head of the sperm is the', opts: ['Flagellum', 'Acrosome', 'Mitochondrion', 'Nucleus'], a: 1, why: 'The acrosome releases enzymes that digest a path through the follicle cells and ovum membrane.' },
    { q: 'Mitochondria are concentrated in the middle piece of the sperm because they', opts: ['Store chromosomes', 'Provide ATP for movement', 'Secrete enzymes', 'Make the tail'], a: 1, why: 'The tail requires a large and continuous supply of energy.' },
    { q: 'Ova are produced in the', opts: ['Uterus', 'Ovaries', 'Fallopian tubes', 'Cervix'], a: 1, why: 'Oogenesis takes place in the ovaries.' },
    { q: 'Fertilisation in humans normally occurs in the', opts: ['Uterus', 'Ovary', 'Fallopian tube', 'Cervix'], a: 2, why: 'Usually in the upper third of the oviduct, soon after ovulation.' },
    { q: 'Ovulation normally occurs on about day', opts: ['5', '14', '21', '28'], a: 1, why: 'Roughly halfway through a typical 28-day cycle, triggered by the LH surge.' },
    { q: 'The hormone that directly triggers ovulation is', opts: ['FSH', 'LH', 'Oestrogen', 'Progesterone'], a: 1, why: 'The LH surge ruptures the Graafian follicle and releases the ovum.' },
    { q: 'FSH acts to', opts: ['Stimulate follicle growth in the ovary', 'Trigger ovulation directly', 'Maintain the endometrium', 'Cause menstruation'], a: 0, why: 'Follicle-stimulating hormone develops the Graafian follicle.' },
    { q: 'Oestrogen is secreted by the', opts: ['Anterior pituitary', 'Ovaries', 'Adrenal gland', 'Placenta only'], a: 1, why: 'The developing follicle (and later the placenta) secretes oestrogen.' },
    { q: 'The hormone that maintains the thickened endometrium is', opts: ['Oestrogen', 'FSH', 'Progesterone', 'ADH'], a: 2, why: 'Progesterone from the corpus luteum keeps the lining glandular and blood-rich.' },
    { q: 'Menstruation begins mainly because', opts: ['Progesterone rises', 'The corpus luteum degenerates and progesterone falls', 'FSH increases sharply', 'The egg is fertilised'], a: 1, why: 'Without progesterone the endometrium breaks down and is shed.' },
    { q: 'The structure formed from the ovulated follicle is the', opts: ['Blastocyst', 'Corpus luteum', 'Placenta', 'Morula'], a: 1, why: 'It secretes progesterone until it degenerates, or is maintained by hCG in pregnancy.' },
    { q: 'The hormone produced by the placenta that maintains the corpus luteum is', opts: ['FSH', 'hCG', 'ADH', 'Relaxin'], a: 1, why: 'Human chorionic gonadotrophin — the hormone detected by pregnancy tests.' },
    { q: 'High levels of progesterone prevent a new pregnancy mainly by', opts: ['Killing sperm', 'Inhibiting FSH and LH so no new follicle develops', 'Blocking the uterus', 'Destroying the ovum'], a: 1, why: 'It exerts negative feedback on the pituitary, preventing further ovulation.' },
    { q: 'The blastocyst implants in the endometrium about', opts: ['Day 1', 'Day 6–7', 'Day 21', 'Day 40'], a: 1, why: 'Implantation occurs about a week after fertilisation.' },
    { q: 'The foetal structure that exchanges substances with the mother is the', opts: ['Amnion', 'Umbilical cord', 'Placenta', 'Yolk sac'], a: 2, why: 'The chorionic villi interlock with maternal blood spaces to allow diffusion.' },
    { q: 'Which substance passes from mother to foetus across the placenta?', opts: ['Carbon dioxide', 'Urea', 'Glucose', 'Faecal material'], a: 2, why: 'Glucose and oxygen diffuse to the foetus; CO₂ and urea diffuse away.' },
    { q: 'The placenta enables the foetus to obtain', opts: ['Only oxygen', 'Nutrients and oxygen', 'Only water', 'Antibodies from the foetus to the mother'], a: 1, why: 'Glucose, amino acids, vitamins and oxygen all cross from the mother’s blood.' },
    { q: 'The umbilical cord contains', opts: ['Two arteries and one vein', 'One artery and two veins', 'One artery and one vein', 'Three arteries'], a: 0, why: 'Two umbilical arteries carry waste away and one vein brings oxygenated blood back.' },
    { q: 'Antibodies pass from mother to foetus across the placenta, giving the baby', opts: ['Active immunity', 'Passive immunity', 'Cell-mediated immunity', 'No immunity'], a: 1, why: 'Ready-made IgG gives temporary protection — the antibodies are not produced by the baby.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'growth',
  title: 'Growth and Development',
  blurb: 'How organisms grow, the phases of a growth curve, plant growth regions, and measurement of growth.',
  time: '45 min',
  objectives: [
    'Distinguish growth from development',
    'Describe the phases of a sigmoid growth curve',
    'Explain the sources of variation in growth data',
    'Describe growth in plants and animals',
    'Explain the factors affecting germination and growth'
  ],
  body: `
<p class="lead">Growth is a <strong>permanent increase in size and dry mass</strong>; development is the increase in complexity — differentiation from a simple cell into specialised tissues. The exam likes the <strong>sigmoid curve</strong> and its phases, plus the differences between plant and animal growth.</p>

<h2>What growth means</h2>
<div class="formula-box">
  <div class="fb-head">Definitions</div>
  <div class="formula-row"><div class="fname">Growth</div>
    <div class="fexpr">Permanent increase in <b>size</b> and <b>dry mass</b></div>
    <div class="fnote">Involves an increase in cell number (mitosis), cell size, or both.</div></div>
  <div class="formula-row"><div class="fname">Development</div>
    <div class="fexpr">Increase in <b>complexity</b> — cells become specialised (differentiation)</div>
    <div class="fnote">An embryo develops from a single cell into a fully formed organism.</div></div>
  <div class="formula-row"><div class="fname">Measurement</div>
    <div class="fexpr">Fresh mass, <b>dry mass</b>, length, volume, or cell number</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Sources of error in fresh mass</b>
<p>Fresh mass varies with <b>water content</b>, which changes with time of day, wilting and washing. Dry mass (measured after heating in an oven to constant mass) is the reliable measure. If an experiment uses fresh mass, note that <b>variation in water content</b> is the main source of error.</p></div></div>

<h2>The sigmoid (S-shaped) growth curve</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Phase</th><th>What happens</th></tr></thead>
  <tbody>
    <tr><td><b>Lag phase</b></td><td>Growth is slow — the organism adjusts to its environment; cells prepare but divide slowly</td></tr>
    <tr><td><b>Log (exponential) phase</b></td><td>Rapid growth — cells divide at maximum rate; resources are plentiful; no competition</td></tr>
    <tr><td><b>Plateau / stationary phase</b></td><td>Growth slows as resources become limiting — food, space, light, waste accumulation</td></tr>
    <tr><td><b>Decline phase</b></td><td>Death rate exceeds birth rate; the population falls</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why growth slows at the plateau</b>
<p>Resources become limiting: <b>food, space and light run short</b>, while <b>toxic waste products accumulate</b> and competition intensifies. Naming at least two of these is usually required for the mark.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Log vs lag</b>
<p><b>Lag</b> = slow start (adjustment). <b>Log</b> = exponential rapid rise. If a question shows a curve and asks which phase shows the greatest rate of growth, the answer is the <b>log phase</b>, where the slope is steepest.</p></div></div>

<h2>Growth in plants</h2>
<div class="formula-box">
  <div class="fb-head">Where growth happens</div>
  <div class="formula-row"><div class="fname">Roots and shoots</div>
    <div class="fexpr">Grow at the <b>apical meristems</b> (tips) — this is <b>primary growth</b>, increasing length</div></div>
  <div class="formula-row"><div class="fname">Stems</div>
    <div class="fexpr">Also grow via the <b>lateral meristems</b> (vascular cambium) — <b>secondary growth</b>, increasing girth</div></div>
  <div class="formula-row"><div class="fname">Region of maturation/differentiation</div>
    <div class="fexpr">Behind the tip, cells elongate and become specialised — root hairs form here</div></div>
  <div class="formula-row"><div class="fname">Region of cell division</div>
    <div class="fexpr">At the very tip — cells divide by mitosis</div></div>
</div>

<h3>Why the root tip must be intact</h3>
<p>If the apical meristem is damaged, the root cannot elongate normally. The <strong>region of cell division</strong> is protected by a <strong>root cap</strong> (in roots) or <strong>leaf primordia</strong> (in shoots), which also lubricates passage through the soil.</p>

<h2>Growth in animals</h2>
<ul>
<li><strong>Intercalary growth</strong> — new material added at the ends of bones (epiphyseal plates) → length increases.</li>
<li><strong>Appositional growth</strong> — material added over the whole surface → thickness increases (bones widen, skin thickens).</li>
<li>Growth is generally <strong>limited</strong> — it stops at a genetically determined size.</li>
<li><strong>Allometry</strong> — different parts grow at different rates; a human baby's head is proportionally much larger than an adult's.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The two growth types</b>
<p><b>Intercalary</b> = at the ends (longitudinal). <b>Appositional</b> = over the surface (increase in diameter). Matching these to bone growth is a common single-mark question.</p></div></div>

<h2>Factors affecting growth</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Factor</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td><b>Nutrition</b></td><td>Insufficient food or protein (kwashiorkor) stunts growth</td></tr>
    <tr><td><b>Hormones</b></td><td>Growth hormone (pituitary), thyroxine (thyroid), sex hormones govern spurts</td></tr>
    <tr><td><b>Genetics</b></td><td>Set the potential maximum size</td></tr>
    <tr><td><b>Environment</b></td><td>Temperature, water, light, oxygen, disease</td></tr>
    <tr><td><b>Disease/parasites</b></td><td>Divert nutrients away from growth</td></tr>
  </tbody>
</table>

<h3>Hormonal control</h3>
<ul>
<li><strong>Growth hormone</strong> — from the anterior pituitary; stimulates protein synthesis and bone growth. Excess before adulthood → <strong>gigantism</strong>; excess in adulthood → <strong>acromegaly</strong>; deficiency → <strong>dwarfism</strong>.</li>
<li><strong>Thyroxine</strong> — controls metabolic rate; deficiency in children causes <strong>cretinism</strong> (stunted physical and mental growth).</li>
<li><strong>Sex hormones</strong> — trigger the growth spurt at puberty and the fusion of epiphyseal plates, ending length growth.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why sex hormones stop growth</b>
<p>Testosterone and oestrogen cause the <b>epiphyseal plates to fuse (ossify)</b>, after which long bones can no longer lengthen. This is why the growth spurt is followed by the final adult height. It also explains why people with untreated hypogonadism keep growing taller.</p></div></div>

<h2>Germination</h2>
<div class="formula-box">
  <div class="fb-head">Requirements</div>
  <div class="formula-row"><div class="fname">Water</div>
    <div class="fexpr">Softens the seed coat, activates enzymes, and is a medium for transport</div></div>
  <div class="formula-row"><div class="fname">Oxygen</div>
    <div class="fexpr">Needed for aerobic respiration to release energy</div></div>
  <div class="formula-row"><div class="fname">Suitable temperature</div>
    <div class="fexpr">Enzymes work best at a moderate, warm temperature</div></div>
  <div class="formula-row"><div class="fname">Light (some species)</div>
    <div class="fexpr">Required by tiny seeds with little stored food; not needed by large seeds</div></div>
</div>

<h3>How the seedling emerges</h3>
<ol>
<li>Water is absorbed; enzymes are activated.</li>
<li>Stored food (starch) is hydrolysed to <b>glucose</b> in the cotyledons or endosperm.</li>
<li>Glucose is respired to release ATP for growth.</li>
<li>The <strong>radicle (root)</strong> emerges first — it anchors the seedling and absorbs water.</li>
<li>The <strong>plumule (shoot)</strong> emerges and grows towards light.</li>
</ol>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Which comes out first?</b>
<p>The <strong>radicle (young root)</strong> emerges before the plumule. Anchoring and water absorption must precede shoot growth — a very frequent single-mark question. Note also that germination requires <em>no light</em> in most seeds: the seed germinates <b>below ground</b>.</p></div></div>

<h3>Epigeal vs hypogeal germination</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Cotyledons</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Epigeal</b></td><td><b>Pushed above ground</b> (hypocotyl elongates)</td><td>Bean, castor oil, groundnut</td></tr>
    <tr><td><b>Hypogeal</b></td><td><b>Left below ground</b> (epicotyl elongates)</td><td>Maize, wheat, rice, pea</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Growth = permanent increase in size and dry mass; development = increased complexity.</li>
<li>Sigmoid curve: lag → log → plateau → decline, with resources limiting at the plateau.</li>
<li>Plants grow at apical meristems (length) and lateral meristems (girth).</li>
<li>Intercalary growth = ends; appositional = surface.</li>
<li>Sex hormones fuse epiphyseal plates and so end growth in height.</li>
<li>Germination needs water, oxygen and warmth; the radicle emerges first.</li>
</ul>
`,
  quiz: [
    { q: 'Growth is best described as a', opts: ['Temporary increase in size', 'Permanent increase in size and dry mass', 'Change in shape only', 'Increase in water content'], a: 1, why: 'It must be permanent and is most reliably measured as dry mass.' },
    { q: 'Development differs from growth in that it involves', opts: ['More water', 'Increased complexity and differentiation', 'Only cell division', 'A rise in temperature'], a: 1, why: 'Cells become specialised; the organism becomes more complex.' },
    { q: 'The most reliable measure of growth is', opts: ['Fresh mass', 'Dry mass', 'Cell number only', 'Height only'], a: 1, why: 'Dry mass is unaffected by variation in water content.' },
    { q: 'The phase of slow initial growth at the start of a sigmoid curve is the', opts: ['Log phase', 'Lag phase', 'Plateau phase', 'Decline phase'], a: 1, why: 'The organism is adjusting to its environment.' },
    { q: 'The phase of fastest, exponential growth is the', opts: ['Lag phase', 'Log phase', 'Stationary phase', 'Decline phase'], a: 1, why: 'Cells divide at their maximum rate while resources remain plentiful.' },
    { q: 'Growth slows at the plateau mainly because of', opts: ['Increased light', 'Limiting food, space and accumulation of waste', 'Too much oxygen', 'Higher temperature'], a: 1, why: 'Resources become scarce and competition and waste build up.' },
    { q: 'On a sigmoid curve, the steepest slope indicates', opts: ['The slowest growth', 'The fastest growth', 'No growth', 'Death'], a: 1, why: 'The gradient of a growth curve represents the growth rate.' },
    { q: 'Primary growth in plants increases the', opts: ['Girth of the stem', 'Length of roots and shoots', 'Number of leaves only', 'Thickness of the bark'], a: 1, why: 'It occurs at the apical meristems at the tips.' },
    { q: 'Secondary growth, which increases girth, involves the', opts: ['Apical meristem', 'Lateral meristem (vascular cambium)', 'Root cap', 'Xylem only'], a: 1, why: 'The cambium adds layers of xylem and phloem outwards.' },
    { q: 'The region of a root where cells divide rapidly is the', opts: ['Region of maturation', 'Region of cell division at the tip', 'Region of elongation only', 'Root hair zone'], a: 1, why: 'The apical meristem at the very tip, protected by the root cap.' },
    { q: 'Root hairs form in the', opts: ['Region of cell division', 'Region of maturation', 'Root cap', 'Cambium'], a: 1, why: 'Cells differentiate and develop hair-like extensions in the maturation zone.' },
    { q: 'The root cap protects the root tip by', opts: ['Producing food', 'Shielding the meristem as the root pushes through soil', 'Absorbing water', 'Storing starch'], a: 1, why: 'It also secretes mucilage to lubricate passage through soil particles.' },
    { q: 'Growth in which material is added at the ends of bones is called', opts: ['Appositional', 'Intercalary', 'Lateral', 'Primary'], a: 1, why: 'Intercalary growth at the epiphyseal plates increases bone length.' },
    { q: 'Growth that increases the thickness of a bone is', opts: ['Intercalary growth', 'Appositional growth', 'Apical growth', 'Log growth'], a: 1, why: 'Material is laid down over the whole surface.' },
    { q: 'Excess growth hormone before adulthood causes', opts: ['Dwarfism', 'Gigantism', 'Cretinism', 'Acromegaly'], a: 1, why: 'Before the plates fuse, excess hormone produces abnormally tall stature.' },
    { q: 'Excess growth hormone in an adult causes', opts: ['Gigantism', 'Dwarfism', 'Acromegaly', 'Goitre'], a: 2, why: 'Bones can no longer lengthen, so the hands, feet and jaw thicken.' },
    { q: 'A deficiency of thyroxine in childhood causes', opts: ['Gigantism', 'Cretinism', 'Rickets', 'Scurvy'], a: 1, why: 'Stunted physical and mental development due to a low metabolic rate.' },
    { q: 'The growth spurt at puberty is triggered by', opts: ['Insulin', 'Sex hormones', 'ADH', 'Adrenaline'], a: 1, why: 'Testosterone and oestrogen also stimulate the fusion of the epiphyseal plates.' },
    { q: 'Growth in height stops after puberty because', opts: ['The bones dissolve', 'Epiphyseal plates ossify and fuse', 'Growth hormone stops', 'Nutrients run out'], a: 1, why: 'Once fused, the long bones can no longer lengthen.' },
    { q: 'The immediate energy source for seed germination is', opts: ['Sunlight', 'Stored food respired to release ATP', 'Soil minerals', 'Chlorophyll'], a: 1, why: 'Most seeds germinate before they can photosynthesise.' },
    { q: 'Which of the following is NOT required for germination?', opts: ['Water', 'Oxygen', 'Chlorophyll', 'Suitable temperature'], a: 2, why: 'Seeds germinate underground in the dark, so chlorophyll is unnecessary.' },
    { q: 'The first structure to emerge from a germinating seed is the', opts: ['Plumule', 'Radicle', 'Cotyledon', 'Leaf'], a: 1, why: 'The young root anchors the seedling and begins absorbing water.' },
    { q: 'Water is essential for germination because it', opts: ['Produces chlorophyll', 'Softens the seed coat and activates enzymes', 'Kills bacteria', 'Makes the seed float'], a: 1, why: 'It also serves as the medium in which solutes are transported.' },
    { q: 'In which type of germination are the cotyledons left below ground?', opts: ['Epigeal', 'Hypogeal', 'Exogeal', 'Dormant'], a: 1, why: 'The epicotyl elongates and the cotyledons stay buried — as in maize.' },
    { q: 'Maize and wheat show', opts: ['Epigeal germination', 'Hypogeal germination', 'No germination', 'Vegetative growth only'], a: 1, why: 'Their cotyledons remain underground during germination.' },
    { q: 'The main source of variation when measuring growth using fresh mass is', opts: ['Differences in water content', 'Temperature of the balance', 'Colour of the sample', 'Operator skill only'], a: 0, why: 'Water content fluctuates widely, which is why dry mass is preferred.' }
  ]
});
