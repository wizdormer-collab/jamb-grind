/* JAMB 2027 Prep — Biology, Chapters 11–15 */

JAMB.addChapter('biology', {
  id: 'nervous-system',
  title: 'The Nervous System and Sense Organs',
  blurb: 'Neurones, the reflex arc, the brain and spinal cord, and how the eye and ear detect stimuli.',
  time: '65 min',
  objectives: [
    'Describe the structure of a neurone and the three types',
    'Trace the path of a reflex arc and explain why it is fast',
    'State the functions of the parts of the brain',
    'Describe the structure of the eye and how it focuses',
    'Explain how the ear detects sound and changes in position'
  ],
  body: `
<p class="lead">The nervous system detects stimuli and coordinates rapid, short-lived responses by electrical impulses and chemical transmission. Learn the <strong>reflex arc</strong> and the <strong>eye</strong> thoroughly — between them they supply most of the questions in this topic.</p>

<h2>Types of neurone</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Direction</th><th>Location of cell body</th></tr></thead>
  <tbody>
    <tr><td><b>Sensory (afferent)</b></td><td>Receptor → CNS</td><td><b>Dorsal</b> root ganglion (outside the cord)</td></tr>
    <tr><td><b>Relay (intercalary)</b></td><td>Within the CNS</td><td>Inside the brain or spinal cord</td></tr>
    <tr><td><b>Motor (efferent)</b></td><td>CNS → effector</td><td><b>Ventral</b> root ganglion</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Afferent vs efferent</b>
<p><b>A</b>fferent = arriving at the CNS (sensory) — remember "A for <b>a</b>rriving". <b>E</b>fferent = <b>e</b>xiting (motor). The alternative names matter as much as the full ones, since questions use either.</p></div></div>

<h3>Structure of a neurone</h3>
<ul>
<li><strong>Cell body</strong> — contains the nucleus and Nissl bodies.</li>
<li><strong>Dendrites</strong> — short extensions carrying impulses <em>towards</em> the cell body.</li>
<li><strong>Axon (nerve fibre)</strong> — long process carrying impulses <em>away</em> from the cell body.</li>
<li><strong>Myelin sheath</strong> — fatty insulation made by Schwann cells, with gaps called <strong>nodes of Ranvier</strong>.</li>
</ul>

<div class="note note-tip"><span class="ico">💡</span><div><b>Why myelin speeds conduction</b>
<p>Myelin forces the impulse to <b>jump from node to node</b> (saltatory conduction) rather than travel continuously along the membrane — far faster. It also electrically insulates the fibre, preventing the impulse from leaking out.</p></div></div>

<h2>The reflex arc</h2>
<div class="formula-box">
  <div class="fb-head">The path of a reflex</div>
  <div class="formula-row"><div class="fname">Order</div>
    <div class="fexpr"><b>Receptor → sensory neurone → relay neurone (in CNS) → motor neurone → effector</b></div>
    <div class="fnote">The brain is bypassed, so no conscious thought is involved.</div></div>
  <div class="formula-row"><div class="fname">Purpose</div>
    <div class="fexpr">Protects the body from damage by reacting before the brain can process the stimulus</div></div>
  <div class="formula-row"><div class="fname">Examples</div>
    <div class="fexpr">Withdrawing the hand from a hot object; knee-jerk; blinking</div></div>
</div>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Feature</th><th>Reflex action</th><th>Voluntary action</th></tr></thead>
  <tbody>
    <tr><td><b>Speed</b></td><td><b>Very fast</b></td><td>Slower</td></tr>
    <tr><td><b>Conscious?</b></td><td><b>No</b> — involuntary</td><td>Yes</td></tr>
    <tr><td><b>Pathway</b></td><td>Short arc, brain bypassed</td><td>Cerebral cortex involved</td></tr>
    <tr><td><b>Learning</b></td><td>Unlearned (unconditional)</td><td>Learned (conditional)</td></tr>
    <tr><td><b>Purpose</b></td><td>Immediate protection</td><td>Deliberate, purposeful movement</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why the reflex is unconscious</b>
<p>The impulse travels only as far as the <strong>spinal cord</strong> before being relayed straight back out through a motor neurone. It does not reach the brain until afterwards, which is why you feel the pain <em>after</em> withdrawing your hand. This is exactly the point of the reflex.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Sensory neurones enter dorsally, motor exit ventrally</b>
<p>Sensory fibres enter the spinal cord through the <b>dorsal (posterior) root</b>; motor fibres leave through the <b>ventral (anterior) root</b>. Cutting the dorsal root abolishes sensation; cutting the ventral root abolishes movement. Both directions must be memorised.</p></div></div>

<h2>The central nervous system</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Part of brain</th><th>Functions</th></tr></thead>
  <tbody>
    <tr><td><b>Cerebrum</b></td><td>Conscious thought, memory, reasoning, intelligence, <b>voluntary movement</b>, interpretation of senses</td></tr>
    <tr><td><b>Cerebellum</b></td><td><b>Balance</b>, coordination of muscles, posture, precision of movement</td></tr>
    <tr><td><b>Medulla oblongata</b></td><td><b>Involuntary</b> controls: breathing rate, heart rate, blood pressure, swallowing</td></tr>
    <tr><td><b>Hypothalamus</b></td><td>Homeostasis — temperature, thirst, hunger; links nervous and endocrine systems</td></tr>
    <tr><td><b>Spinal cord</b></td><td>Reflex centre; conducts impulses between brain and body</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The three that get confused</b>
<p><b>Cerebrum</b> = thought and voluntary action.<br>
<b>Cerebellum</b> = balance and coordination.<br>
<b>Medulla</b> = involuntary life-support (heartbeat, breathing).<br>
Damage to the cerebellum causes an uncoordinated, staggering walk; damage to the cerebrum affects memory or thought.</p></div></div>

<h2>Sense organs</h2>
<p>A sense organ contains <strong>receptor cells</strong> that convert a stimulus into a nerve impulse — a process called <strong>transduction</strong>.</p>

<h3>The eye</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Part</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td><b>Cornea</b></td><td>Transparent outer layer; most of the light <b>bending</b> occurs here</td></tr>
    <tr><td><b>Aqueous humour</b></td><td>Maintains shape; transparent medium</td></tr>
    <tr><td><b>Iris</b></td><td>Pigmented muscular diaphragm that controls the size of the <b>pupil</b></td></tr>
    <tr><td><b>Lens</b></td><td>Flexible; <b>fine focus</b> by changing shape (accommodation)</td></tr>
    <tr><td><b>Ciliary body/muscles</b></td><td>Contract and relax to alter lens shape</td></tr>
    <tr><td><b>Suspensory ligaments</b></td><td>Hold the lens and transmit the pull of the ciliary muscles</td></tr>
    <tr><td><b>Vitreous humour</b></td><td>Gel that maintains the shape of the eyeball</td></tr>
    <tr><td><b>Retina</b></td><td>Contains the <b>rods and cones</b>; the light-sensitive layer</td></tr>
    <tr><td><b>Fovea</b></td><td>Region of <b>cones only</b> — greatest visual acuity</td></tr>
    <tr><td><b>Blind spot</b></td><td>Where the optic nerve leaves; <b>no receptors</b></td></tr>
    <tr><td><b>Optic nerve</b></td><td>Carries impulses to the visual cortex</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Accommodation</div>
  <div class="formula-row"><div class="fname">Distant object</div>
    <div class="fexpr">Ciliary muscles <b>relax</b> → ligaments pull taut → lens is <b>thin and flat</b></div>
    <div class="fnote">Light is bent less; the image falls on the retina.</div></div>
  <div class="formula-row"><div class="fname">Near object</div>
    <div class="fexpr">Ciliary muscles <b>contract</b> → ligaments slacken → lens becomes <b>thick and rounded</b> (elastic)</div>
    <div class="fnote">More refraction, so the nearby image is brought into focus.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Two changes when looking at a near object</b>
<p><b>(1) Lens becomes thicker</b> and more convex. <b>(2) Pupil constricts</b> — the iris circular muscles contract, reducing the pupil size. The smaller aperture increases depth of focus and cuts glare. The question normally expects <em>both</em>.</p></div></div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Contraction of ciliary muscle slackens the ligaments</b>
<p>It feels counter-intuitive: the ciliary muscle <em>contracts</em>, the circle of muscle gets smaller, the suspensory ligaments <b>go slack</b>, and the elastic lens bulges. For distance the muscle relaxes, the ligaments pull tight and flatten the lens. Get this reversal right and you avoid the commonest error.</p></div></div>

<h3>Rods and cones</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Rods</th><th>Cones</th></tr></thead>
  <tbody>
    <tr><td><b>Vision</b></td><td><b>Dim light</b> (black and white)</td><td><b>Bright light</b> and <b>colour</b></td></tr>
    <tr><td><b>Distribution</b></td><td>Periphery of retina</td><td>Concentrated in the <b>fovea</b></td></tr>
    <tr><td><b>Pigment</b></td><td><b>Rhodopsin</b> (visual purple)</td><td>Three photopigments (red, green, blue)</td></tr>
    <tr><td><b>Sensitivity</b></td><td>Highly sensitive — one can stimulate many neurones</td><td>Less sensitive; finer detail</td></tr>
    <tr><td><b>Colour</b></td><td>None</td><td>Yes — three types give colour vision</td></tr>
  </tbody>
</table>

<div class="note note-fact"><span class="ico">📌</span><div><b>Dark adaptation</b>
<p>On entering a dark room, vision is poor because <b>rhodopsin has been bleached</b> in the light. It takes about <b>20–30 minutes</b> to be fully resynthesised, after which rods are maximally sensitive. The deficiency of vitamin A impairs rhodopsin formation and causes <b>night blindness</b>.</p></div></div>

<h3>The ear</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Region</th><th>Parts</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td><b>Outer ear</b></td><td>Pinna, auditory canal, <b>tympanic membrane</b></td><td>Collects sound and vibrates in response</td></tr>
    <tr><td><b>Middle ear</b></td><td><b>Ear ossicles</b> — malleus, incus, stapes; Eustachian tube</td><td><b>Amplifies</b> vibrations and transmits them to the oval window</td></tr>
    <tr><td><b>Inner ear</b></td><td><b>Cochlea</b> (hearing), <b>semi-circular canals</b> (balance)</td><td>Transduces vibrations into nerve impulses</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why the middle ear amplifies</b>
<p>Sound travels from air into the fluid of the inner ear, and most energy would be reflected at that boundary. The ossicles concentrate the force from the large tympanic membrane onto the small oval window, <b>amplifying the pressure</b> roughly 20-fold so the fluid is set in motion. This impedance matching is what the question is testing.</p></div></div>

<h3>The cochlea</h3>
<ol>
<li>Vibrations of the stapes push on the <strong>oval window</strong>, setting the fluid (perilymph and endolymph) in motion.</li>
<li>The <strong>basilar membrane</strong> vibrates; its fibres are tuned to different frequencies — high notes near the base, low notes near the apex.</li>
<li>The <strong>Organ of Corti</strong> rests on it, bearing hair cells with stereocilia.</li>
<li>Movement of the hair cells opens ion channels, generating receptor potentials.</li>
<li>Impulses travel along the <strong>auditory nerve</strong> to the auditory cortex, where sound is interpreted.</li>
</ol>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Loudness vs pitch vs quality</b>
<p><b>Loudness</b> ← amplitude (number of impulses per second).<br>
<b>Pitch</b> ← <b>frequency</b> (which region of the basilar membrane vibrates).<br>
<b>Quality/timbre</b> ← the complex waveform. If asked what determines pitch, answer frequency, not amplitude.</p></div></div>

<h3>Balance</h3>
<ul>
<li><strong>Semi-circular canals</strong> detect <b>rotational</b> (angular) acceleration — fluid in the canals moves when the head turns.</li>
<li><strong>Utricus and saccule</strong> in the vestibule detect <b>linear</b> acceleration and gravity.</li>
<li>Hair cells in the crista and macula bend and stimulate the auditory nerve.</li>
<li><strong>Proprioceptors</strong> in muscles and joints, plus vision, also contribute to balance.</li>
</ul>

<h2>Chemical transmission</h2>
<p>At a <strong>synapse</strong>, the impulse cannot jump the gap. The arrival of the action potential opens calcium channels, causing vesicles to fuse with the membrane and release a <strong>neurotransmitter</strong> (usually <strong>acetylcholine</strong>). It diffuses across the <strong>synaptic cleft</strong> and binds receptors on the next neurone, opening sodium channels and generating a new impulse.</p>

<div class="formula-box">
  <div class="fb-head">Why synapses matter</div>
  <div class="formula-row"><div class="fname">One-way transmission</div>
    <div class="fexpr">Vesicles are only on the presynaptic side, so impulses pass in one direction only</div></div>
  <div class="formula-row"><div class="fname">Summation</div>
    <div class="fexpr">Several small stimuli can add together to reach the threshold</div></div>
  <div class="formula-row"><div class="fname">Control point</div>
    <div class="fexpr">The transmitter is broken down by <b>acetylcholinesterase</b> so the next impulse can start</div>
    <div class="fnote">Without this breakdown the next neurone would be permanently stimulated.</div></div>
</div>

<h2>The peripheral nervous system</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Division</th><th>Effect when stimulated</th></tr></thead>
  <tbody>
    <tr><td><b>Somatic</b></td><td>Voluntary — contracts skeletal muscles</td></tr>
    <tr><td><b>Sympathetic</b></td><td><b>"Fight or flight"</b> — faster heart, dilated pupils, reduced digestion, more adrenaline</td></tr>
    <tr><td><b>Parasympathetic</b></td><td><b>"Rest and digest"</b>" — slower heart, constricted pupils, stimulated digestion</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The two work as a pair</b>
<p>They are antagonistic: when one speeds the heart up the other slows it down. Sympathetic prepares the body for emergency action; parasympathetic conserves energy and restores normal activity. Match the description to the division and you have the mark.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Sensory → relay → motor in a reflex arc; the brain is bypassed.</li>
<li>Sensory enters dorsally, motor exits ventrally.</li>
<li>Cerebrum = thought and voluntary action; cerebellum = balance; medulla = heartbeat and breathing.</li>
<li>Looking near: ciliary muscle contracts, ligaments slacken, lens thickens, pupil constricts.</li>
<li>Rods for dim light, cones for colour and detail; rhodopsin and vitamin A matter.</li>
<li>The middle ear amplifies; the cochlea transduces; sympathetic and parasympathetic are antagonistic.</li>
</ul>
`,
  quiz: [
    { q: 'The direction of impulse conduction in a sensory neurone is', opts: ['Effector to CNS', 'Receptor to CNS', 'CNS to effector', 'Between two effectors'], a: 1, why: 'Sensory (afferent) neurones carry impulses from receptors towards the central nervous system.' },
    { q: 'Another name for a sensory neurone is', opts: ['Efferent', 'Afferent', 'Relay', 'Motor'], a: 1, why: 'Afferent means arriving at the CNS; efferent means leaving it.' },
    { q: 'The cell bodies of sensory neurones are located in the', opts: ['Ventral root ganglion', 'Dorsal root ganglion', 'Cerebellum', 'Effector'], a: 1, why: 'In the dorsal root ganglion, outside the spinal cord.' },
    { q: 'The myelin sheath is formed by', opts: ['Axon terminals', 'Schwann cells', 'Relay neurones', 'Dendrites'], a: 1, why: 'Successive Schwann cells wrap around the axon, leaving nodes of Ranvier between them.' },
    { q: 'The nodes of Ranvier allow impulses to', opts: ['Stop completely', 'Jump from node to node, speeding conduction', 'Travel only backwards', 'Bypass the brain'], a: 1, why: 'Saltatory conduction is much faster than continuous conduction along the membrane.' },
    { q: 'A reflex arc consists of', opts: ['Receptor, sensory neurone, relay neurone, motor neurone, effector', 'Receptor, motor neurone, effector', 'Sensory neurone, brain, motor neurone', 'Effector, relay neurone, receptor'], a: 0, why: 'The impulse is relayed in the spinal cord without reaching the brain first.' },
    { q: 'A reflex action differs from a voluntary action in that it is', opts: ['Slower and conscious', 'Faster and unconscious', 'Slower and learned', 'Conscious and deliberate'], a: 1, why: 'The pathway is short and bypasses the brain, so there is no conscious thought.' },
    { q: 'We usually feel the pain of a burn', opts: ['Before withdrawing the hand', 'After withdrawing the hand', 'At exactly the same time', 'Only the next day'], a: 1, why: 'The withdrawal reflex is completed in the cord before the message reaches the brain.' },
    { q: 'In the spinal cord, sensory neurones enter through the', opts: ['Ventral root', 'Dorsal root', 'Lateral horn', 'Grey matter only'], a: 1, why: 'Sensory fibres enter dorsally; motor fibres leave ventrally.' },
    { q: 'Motor neurones leave the spinal cord through the', opts: ['Dorsal root', 'Ventral root', 'Cranial nerve', 'Grey commissure'], a: 1, why: 'The ventral (anterior) root carries efferent fibres to the effectors.' },
    { q: 'The part of the brain responsible for balance and coordination is the', opts: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Hypothalamus'], a: 1, why: 'Damage causes staggering, uncoordinated movement and loss of posture.' },
    { q: 'The centre for voluntary movement and conscious thought is the', opts: ['Cerebellum', 'Cerebrum', 'Medulla', 'Pons'], a: 1, why: 'The cerebral cortex contains the motor and sensory areas.' },
    { q: 'Heart rate and breathing rate are controlled involuntarily by the', opts: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Occipital lobe'], a: 2, why: 'The medulla contains the cardiovascular and respiratory centres.' },
    { q: 'The part of the eye that controls the size of the pupil is the', opts: ['Lens', 'Iris', 'Cornea', 'Retina'], a: 1, why: 'Circular and radial muscles of the iris constrict or dilate the pupil.' },
    { q: 'Most of the refraction of light into the eye occurs at the', opts: ['Cornea', 'Lens', 'Pupil', 'Retina'], a: 0, why: 'The air–cornea interface causes the greatest bending of light.' },
    { q: 'When a person looks at a near object, the lens becomes', opts: ['Thin and flat', 'Thick and rounded', 'Opaque', 'Detached'], a: 1, why: 'A more convex lens refracts light more strongly, bringing the nearby image into focus.' },
    { q: 'To focus on a near object, the ciliary muscles', opts: ['Relax and the ligaments tighten', 'Contract and the ligaments slacken', 'Contract and the ligaments tighten', 'Have no effect'], a: 1, why: 'Contraction reduces the pull on the lens, allowing it to bulge.' },
    { q: 'When looking at a distant object, the suspensory ligaments are', opts: ['Slack', 'Taut', 'Broken', 'Absent'], a: 1, why: 'Relaxed ciliary muscles allow the ligaments to pull the lens flat.' },
    { q: 'When focusing on a near object, the pupil normally', opts: ['Dilates', 'Constricts', 'Disappears', 'Becomes square'], a: 1, why: 'The iris circular muscles contract, giving a smaller aperture and greater depth of focus.' },
    { q: 'The region of the retina with the greatest visual acuity is the', opts: ['Blind spot', 'Fovea', 'Periphery', 'Optic disc'], a: 1, why: 'The fovea contains only cones, packed closely together.' },
    { q: 'The blind spot is the point where', opts: ['Rods are concentrated', 'The optic nerve leaves and no receptors are present', 'Cones detect colour', 'Light is focused'], a: 1, why: 'An image falling there cannot be detected.' },
    { q: 'Vision in dim light depends on', opts: ['Cones', 'Rods', 'The fovea', 'The iris'], a: 1, why: 'Rods contain rhodopsin and are highly sensitive to low light levels.' },
    { q: 'The photopigment found in rods is', opts: ['Melanin', 'Rhodopsin', 'Chlorophyll', 'Haemoglobin'], a: 1, why: 'Also called visual purple; it is bleached by bright light.' },
    { q: 'A deficiency of vitamin A causes', opts: ['Night blindness', 'Colour blindness', 'Cataract', 'Glaucoma'], a: 0, why: 'Vitamin A is needed to synthesise rhodopsin.' },
    { q: 'Dark adaptation is slow because', opts: ['The pupil cannot dilate', 'Rhodopsin must be resynthesised', 'The lens changes shape', 'The retina detaches'], a: 1, why: 'It takes 20–30 minutes for rhodopsin to be fully regenerated.' },
    { q: 'The three bones of the middle ear are the', opts: ['Malleus, incus, stapes', 'Malleus, stapes, cochlea', 'Incus, oval window, pinna', 'Malleus, hammer, anvil'], a: 0, why: 'They amplify the vibrations and pass them to the oval window. (Their older names are hammer, anvil and stirrup.)' },
    { q: 'The main function of the ear ossicles is to', opts: ['Collect sound', 'Amplify and transmit vibrations to the oval window', 'Produce sound', 'Detect smell'], a: 1, why: 'They compensate for the energy that would be lost moving from air into fluid.' },
    { q: 'Hearing takes place in the', opts: ['Semi-circular canals', 'Cochlea', 'Tympanic membrane', 'Eustachian tube'], a: 1, why: 'The Organ of Corti on the basilar membrane transduces vibrations into impulses.' },
    { q: 'The pitch of a sound is determined by its', opts: ['Amplitude', 'Frequency', 'Speed', 'Volume of the source'], a: 1, why: 'Higher frequencies stimulate hair cells nearer the base of the basilar membrane.' },
    { q: 'The semi-circular canals are concerned with', opts: ['Hearing', 'Balance and rotational movement', 'Smell', 'Taste'], a: 1, why: 'Fluid in the canals moves when the head rotates, bending the hair cells.' },
    { q: 'The neurotransmitter released at a synapse is broken down by', opts: ['Pepsin', 'Acetylcholinesterase', 'Amylase', 'Catalase'], a: 1, why: 'Its removal stops continuous stimulation and allows the next impulse to pass.' },
    { q: 'Transmission across a synapse is one-way because', opts: ['The cleft is very wide', 'Vesicles occur only on the presynaptic side', 'The impulse is electrical throughout', 'Myelin covers the cleft'], a: 1, why: 'Only the presynaptic neurone releases neurotransmitter.' },
    { q: 'The division of the autonomic nervous system that prepares the body for emergency action is the', opts: ['Parasympathetic', 'Sympathetic', 'Somatic', 'Cranial'], a: 1, why: 'Sympathetic stimulation produces the fight-or-flight response.' },
    { q: 'The parasympathetic division promotes', opts: ['Increased heart rate', 'Rest and digestion', 'Adrenaline release', 'Dilation of the pupil'], a: 1, why: 'It conserves energy — slowing the heart and stimulating digestive activity.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'hormones',
  title: 'Hormones and Chemical Coordination',
  blurb: 'The endocrine glands, their hormones and roles, feedback control, and plant hormones and responses.',
  time: '60 min',
  objectives: [
    'Distinguish endocrine from exocrine glands',
    'Name the major glands, their hormones and their effects',
    'Explain negative feedback using blood glucose and temperature',
    'Describe the uses and risks of hormonal contraception',
    'Explain plant hormones and the tropic responses'
  ],
  body: `
<p class="lead">The endocrine system gives <strong>slower but longer-lasting</strong> control than the nervous system, using chemicals carried in the blood. The exam wants the <strong>gland–hormone–effect</strong> triples secure, plus the idea of <strong>feedback</strong> that keeps them stable.</p>

<h2>Endocrine vs exocrine</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Endocrine glands</th><th>Exocrine glands</th></tr></thead>
  <tbody>
    <tr><td><b>Ducts</b></td><td><b>None</b> — ductless</td><td><b>Have ducts</b></td></tr>
    <tr><td><b>Secretion</b></td><td>Hormones into blood</td><td>Sweat, saliva, bile, enzymes onto a surface</td></tr>
    <tr><td><b>Target</b></td><td>Distant organs with specific receptors</td><td>Nearby surfaces or cavities</td></tr>
    <tr><td><b>Speed</b></td><td>Slower, longer-lasting</td><td>Fast, short-lived</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The pituitary is not the master for nothing</b>
<p>The <b>anterior pituitary</b> secretes tropic hormones that control <em>other</em> endocrine glands (FSH, LH, TSH, ACTH), so it is called the <b>master gland</b>. The <b>posterior pituitary</b> does not make hormones — it <em>stores and releases</em> ADH and oxytocin made in the hypothalamus. That distinction is examined often.</p></div></div>

<h2>The major glands and hormones</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Gland</th><th>Hormone</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td rowspan="3"><b>Anterior pituitary</b></td><td>GH (somatotrophin)</td><td>Promotes growth, protein synthesis</td></tr>
    <tr><td>TSH</td><td>Stimulates the thyroid</td></tr>
    <tr><td>FSH &amp; LH</td><td>Control the ovaries and testes</td></tr>
    <tr><td><b>Posterior pituitary</b></td><td>ADH, oxytocin</td><td>Water reabsorption; uterine contraction and milk ejection</td></tr>
    <tr><td><b>Thyroid</b></td><td><b>Thyroxine</b></td><td>Controls <b>metabolic rate</b>; needs iodine; growth and development</td></tr>
    <tr><td><b>Parathyroids</b></td><td>Parathormone</td><td><b>Raises</b> blood calcium</td></tr>
    <tr><td><b>Adrenal</b></td><td><b>Adrenaline</b> (medulla)</td><td>Emergency response: faster heart, more glucose, more blood to muscles</td></tr>
    <tr><td rowspan="2"><b>Pancreas (islets)</b></td><td><b>Insulin</b> (β cells)</td><td><b>Lowers</b> blood glucose by promoting uptake and glycogen storage</td></tr>
    <tr><td><b>Glucagon</b> (α cells)</td><td><b>Raises</b> blood glucose by breaking down glycogen</td></tr>
    <tr><td><b>Ovaries</b></td><td>Oestrogen, progesterone</td><td>Female secondary characteristics; menstrual cycle; pregnancy</td></tr>
    <tr><td><b>Testes</b></td><td>Testosterone</td><td>Male secondary characteristics; sperm production</td></tr>
    <tr><td><b>Thymus</b></td><td>Thymosin</td><td>Development of the immune system (T-lymphocytes)</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Insulin lowers, glucagon raises</b>
<p>They are <strong>antagonistic</strong>. Insulin is released when glucose is high; glucagon when it is low. Students often swap them. A quick check: insulin is the word you hear in <em>diabetes</em>, where insulin is lacking and glucose is <b>too high</b> — so insulin must be the one that lowers.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Thyroxine needs iodine</b>
<p>The thyroid gland traps iodine from the diet to build thyroxine. A diet deficient in iodine causes the thyroid to enlarge in an attempt to make more — a swelling called <b>goitre</b>. This is the classic "deficiency disease" question in this topic.</p></div></div>

<h3>Disorders</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Condition</th><th>Cause</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td><b>Gigantism</b></td><td>Excess GH before adulthood</td><td>Abnormal height</td></tr>
    <tr><td><b>Dwarfism</b></td><td>Deficient GH in childhood</td><td>Small stature, normal proportions</td></tr>
    <tr><td><b>Acromegaly</b></td><td>Excess GH in adulthood</td><td>Thickening of hands, feet, jaw</td></tr>
    <tr><td><b>Goitre</b></td><td>Iodine deficiency</td><td>Swelling of the thyroid</td></tr>
    <tr><td><b>Cretinism</b></td><td>Thyroxine deficiency in childhood</td><td>Stunted physical and mental growth</td></tr>
    <tr><td><b>Diabetes mellitus</b></td><td>Little insulin / insulin resistance</td><td>High blood glucose, glucose in urine</td></tr>
    <tr><td><b>Diabetes insipidus</b></td><td>Too little ADH</td><td>Huge volumes of dilute urine</td></tr>
  </tbody>
</table>

<h2>Feedback control</h2>
<div class="formula-box">
  <div class="fb-head">Blood glucose regulation</div>
  <div class="formula-row"><div class="fname">Glucose rises</div>
    <div class="fexpr">Pancreas releases <b>insulin</b> → cells take up glucose → liver stores it as <b>glycogen</b> → level falls</div></div>
  <div class="formula-row"><div class="fname">Glucose falls</div>
    <div class="fexpr">Pancreas releases <b>glucagon</b> → liver breaks glycogen down to glucose → level rises</div></div>
  <div class="formula-row"><div class="fname">Type of control</div>
    <div class="fexpr"><b>Negative feedback</b> — the response counteracts the change that triggered it</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The two examples to use</b>
<p>Negative feedback is normally illustrated with <b>blood glucose</b> (insulin/glucagon) and <b>body temperature</b>. In both cases the output of the system reduces the original stimulus. Name the <em>detector</em>, the <em>effector</em> and the <em>response</em> to earn full marks.</p></div></div>

<h3>Temperature control</h3>
<ul>
<li><strong>Receptors</strong> — thermoreceptors in the skin and the hypothalamus.</li>
<li><strong>Centre</strong> — the hypothalamus.</li>
<li><strong>Effector responses when too hot</strong> — vasodilation of skin arterioles, sweating, lying still, seeking shade.</li>
<li><strong>Effector responses when too cold</strong> — vasoconstriction, shivering, goose-pimples, hair standing erect, huddling.</li>
</ul>

<h3>Adrenaline</h3>
<p>Released by the adrenal medulla in fright, anger or excitement. It prepares the body for action: <strong>increases heart rate</strong>, diverts blood to muscles, <strong>mobilises glucose</strong> from glycogen, dilates the bronchioles, and shuts down digestion. It works together with the sympathetic nervous system.</p>

<div class="note note-fact"><span class="ico">📌</span><div><b>Adrenaline is the "emergency" hormone</b>
<p>Its effects all serve one purpose — supplying the muscles with more oxygen and fuel, and suppressing activities that can wait. If a question describes a sudden frightening event, the hormone expected is adrenaline.</p></div></div>

<h2>Hormonal contraception</h2>
<ul>
<li><strong>The pill</strong> — contains oestrogen and progesterone (or progesterone alone). These <strong>inhibit FSH and LH</strong>, so no follicle matures and <strong>ovulation does not occur</strong>.</li>
<li><strong>Injectable implants/Depot</strong> — progesterone released slowly over months.</li>
<li><strong>Emergency pill</strong> — high dose delays or prevents ovulation.</li>
</ul>
<div class="note note-warn"><span class="ico">⚠</span><div><b>How the pill works</b>
<p>The key mechanism is the <b>suppression of FSH and LH</b> by negative feedback, which prevents ovulation. It does not kill sperm and does not stop the egg being fertilised — it stops the egg being released. Explain the feedback step, not just "it stops pregnancy".</p></div></div>

<h2>Plant hormones (phytohormones)</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Hormone</th><th>Where made</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td><b>Auxin</b></td><td>Tip of shoot (coleoptile)</td><td>Cell <b>elongation</b>; phototropism and geotropism</td></tr>
    <tr><td><b>Gibberellin</b></td><td>Young leaves, seeds</td><td>Stem elongation; breaks seed <b>dormancy</b>; stimulates germination</td></tr>
    <tr><td><b>Cytokinin</b></td><td>Roots, developing seeds</td><td><b>Cell division</b>; delays ageing</td></tr>
    <tr><td><b>Abscisic acid (ABA)</b></td><td>Leaves, seeds</td><td><b>Inhibits</b> growth; closes stomata; maintains dormancy — the "stress hormone"</td></tr>
    <tr><td><b>Ethylene</b></td><td>Ripening fruit</td><td><b>Fruit ripening</b> and abscission</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Auxin and the root tip</b>
<p>Auxin is produced at the <strong>shoot tip</strong> and diffuses downwards. In a horizontal shoot, gravity causes it to accumulate on the <strong>lower side</strong>, where it promotes elongation — so the shoot bends <strong>upwards</strong> (negative geotropism). In roots the same accumulation <em>inhibits</em> elongation, so the root grows <strong>downwards</strong>. Auxin therefore has opposite effects in shoots and roots depending on concentration.</p></div></div>

<h3>Tropic responses</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Response</th><th>Stimulus</th><th>Direction</th></tr></thead>
  <tbody>
    <tr><td><b>Phototropism</b></td><td>Light</td><td>Shoots grow <b>towards</b> light (positive)</td></tr>
    <tr><td><b>Geotropism</b></td><td>Gravity</td><td>Roots grow <b>down</b> (positive); shoots <b>up</b> (negative)</td></tr>
    <tr><td><b>Hydrotropism</b></td><td>Water</td><td>Roots grow towards water</td></tr>
    <tr><td><b>Chemotropism</b></td><td>Chemicals</td><td>Pollen tube grows down the style</td></tr>
    <tr><td><b>Thigmotropism</b></td><td>Contact/touch</td><td>Tendrils coil around support</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Only plants show true tropisms</b>
<p>Tropic responses are <strong>irreversible</strong> directional growth in response to a stimulus — a plant cannot move away, so it grows in the advantageous direction. Animal responses are <strong>taxes</strong> (movement of the whole body) or <strong>irritability</strong>. Do not confuse a tropism with an animal moving towards food.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why a phototropic shoot bends up</b>
<p>Light causes auxin to move to the <em>shaded</em> side. More auxin there → more elongation on that side → the shoot bends <strong>towards</strong> the light. A question may ask which side grows faster: the answer is the shaded side, not the lit side.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Endocrine glands are ductless and secrete into blood; exocrine glands have ducts.</li>
<li>Insulin lowers blood glucose; glucagon raises it; both work by negative feedback.</li>
<li>Thyroxine controls metabolic rate and needs iodine; deficiency causes goitre/cretinism.</li>
<li>The pill prevents ovulation by inhibiting FSH and LH.</li>
<li>Auxin drives elongation; light makes it accumulate on the shaded side.</li>
<li>Geotropism: roots positive, shoots negative — the same hormone has opposite effects.</li>
</ul>
`,
  quiz: [
    { q: 'Endocrine glands differ from exocrine glands in that they', opts: ['Have ducts', 'Are ductless and secrete into blood', 'Secrete enzymes only', 'Are always paired'], a: 1, why: 'Hormones pass straight into the blood from capillaries surrounding the gland.' },
    { q: 'The master gland of the body is the', opts: ['Thyroid', 'Adrenal', 'Pituitary', 'Pancreas'], a: 2, why: 'The anterior pituitary secretes tropic hormones that control other endocrine glands.' },
    { q: 'The posterior pituitary', opts: ['Produces ADH', 'Stores and releases ADH made in the hypothalamus', 'Produces insulin', 'Controls the thyroid'], a: 1, why: 'It has no secretory cells of its own — hormones arrive by axon from the hypothalamus.' },
    { q: 'Insulin is secreted by the', opts: ['Liver', 'Pancreas', 'Adrenal gland', 'Thyroid'], a: 1, why: 'By the beta cells of the islets of Langerhans in the pancreas.' },
    { q: 'The function of insulin is to', opts: ['Raise blood glucose', 'Lower blood glucose', 'Digest sugar', 'Produce glycogen in the kidney'], a: 1, why: 'It promotes uptake of glucose by cells and its storage as glycogen.' },
    { q: 'Glucagon is secreted when blood glucose is', opts: ['High', 'Low', 'Normal', 'Zero'], a: 1, why: 'It is released by alpha cells to mobilise stored glycogen and raise the level.' },
    { q: 'Insulin and glucagon are described as antagonistic because they', opts: ['Work together', 'Have opposite effects on blood glucose', 'Are both proteins', 'Act on the kidney'], a: 1, why: 'One lowers blood glucose and the other raises it.' },
    { q: 'Glycogen is stored mainly in the', opts: ['Kidneys', 'Liver and muscles', 'Lungs', 'Pancreas'], a: 1, why: 'The liver releases glucose back into the blood; muscle glycogen is used locally.' },
    { q: 'Thyroxine is needed for the normal', opts: ['Production of bile', 'Metabolic rate and growth', 'Clotting of blood', 'Digestion of protein'], a: 1, why: 'It sets the rate at which cells use oxygen and release energy.' },
    { q: 'The element required for the synthesis of thyroxine is', opts: ['Iron', 'Iodine', 'Calcium', 'Sodium'], a: 1, why: 'A deficiency causes the thyroid to enlarge, producing goitre.' },
    { q: 'A swelling of the thyroid caused by iodine deficiency is called', opts: ['Cretinism', 'Goitre', 'Acromegaly', 'Rickets'], a: 1, why: 'The gland enlarges in an attempt to produce sufficient thyroxine.' },
    { q: 'Deficiency of thyroxine in a child causes', opts: ['Gigantism', 'Cretinism', 'Diabetes', 'Anaemia'], a: 1, why: 'Both physical and mental development are stunted.' },
    { q: 'Adrenaline is secreted by the', opts: ['Adrenal cortex', 'Adrenal medulla', 'Thyroid', 'Pituitary'], a: 1, why: 'It is released in fright or excitement as part of the emergency response.' },
    { q: 'Which is NOT an effect of adrenaline?', opts: ['Increased heart rate', 'Dilation of the pupils', 'Slowing of digestion', 'Falling blood glucose'], a: 3, why: 'Adrenaline mobilises glucose, so blood glucose rises, not falls.' },
    { q: 'Parathormone acts to', opts: ['Lower blood calcium', 'Raise blood calcium', 'Lower blood glucose', 'Control water balance'], a: 1, why: 'It acts on bone, kidney and gut to increase calcium in the blood.' },
    { q: 'The hormone that promotes water reabsorption in the kidney is', opts: ['Insulin', 'ADH', 'Adrenaline', 'Thyroxine'], a: 1, why: 'Antidiuretic hormone makes the collecting duct permeable to water.' },
    { q: 'The type of control in which the response counteracts the stimulus is', opts: ['Positive feedback', 'Negative feedback', 'Feedforward', 'Chemical feedback'], a: 1, why: 'The output reduces the original change, keeping the system stable.' },
    { q: 'When body temperature rises, the hypothalamus triggers', opts: ['Vasoconstriction and shivering', 'Vasodilation and sweating', 'Adrenaline release only', 'Increased metabolism only'], a: 1, why: 'Widening of skin blood vessels and sweating both lose heat.' },
    { q: 'Shivering helps to raise body temperature because', opts: ['It loses heat', 'Muscle contraction generates heat', 'It dilates blood vessels', 'It slows the heart'], a: 1, why: 'Involuntary muscle contractions convert energy to heat.' },
    { q: 'Vasoconstriction in cold conditions occurs because', opts: ['Arterioles in the skin dilate', 'Arterioles in the skin constrict', 'Capillaries multiply', 'Veins burst'], a: 1, why: 'Less blood reaches the surface, so less heat is lost to the environment.' },
    { q: 'The hormonal contraceptive pill works mainly by', opts: ['Killing sperm', 'Inhibiting FSH and LH so ovulation does not occur', 'Destroying the uterus', 'Preventing implantation only'], a: 1, why: 'Suppression of FSH and LH prevents the follicle from maturing and rupturing.' },
    { q: 'The hormone that causes fruit ripening is', opts: ['Auxin', 'Ethylene', 'Cytokinin', 'Abscisic acid'], a: 1, why: 'Ethylene is a gas that promotes ripening and abscission.' },
    { q: 'Cell division in plants is promoted by', opts: ['Abscisic acid', 'Cytokinin', 'Ethylene', 'Auxin'], a: 1, why: 'Cytokinins also delay ageing of leaves.' },
    { q: 'The hormone that inhibits growth and promotes seed dormancy is', opts: ['Auxin', 'Gibberellin', 'Abscisic acid', 'Cytokinin'], a: 2, why: 'ABA acts as a growth inhibitor and helps the plant survive stress.' },
    { q: 'Gibberellin is important in', opts: ['Breaking seed dormancy', 'Closing stomata', 'Ripening fruit', 'Causing abscission'], a: 0, why: 'It stimulates germination and stem elongation.' },
    { q: 'Auxin is produced mainly at the', opts: ['Root tip', 'Shoot tip', 'Mature leaf', 'Flower'], a: 1, why: 'In the coleoptile tip, from where it diffuses downwards.' },
    { q: 'A shoot placed horizontally bends upwards because auxin', opts: ['Accumulates on the upper side and inhibits growth', 'Accumulates on the lower side and promotes elongation', 'Is destroyed by light', 'Moves to the tip only'], a: 1, why: 'Greater elongation on the lower side bends the shoot upward.' },
    { q: 'A root placed horizontally grows downwards because auxin on the lower side', opts: ['Promotes elongation', 'Inhibits elongation', 'Is not present', 'Causes cell division'], a: 1, why: 'The upper side elongates faster, curving the root downward.' },
    { q: 'A plant growing towards light is showing', opts: ['Negative phototropism', 'Positive phototropism', 'Negative geotropism', 'Hydrotropism'], a: 1, why: 'Growth towards the stimulus is positive.' },
    { q: 'The growth of a root towards water is', opts: ['Geotropism', 'Hydrotropism', 'Thigmotropism', 'Chemotropism'], a: 1, why: 'It ensures the root reaches a moist region of soil.' },
    { q: 'A tendril coiling around a support is responding to', opts: ['Light', 'Gravity', 'Touch', 'Water'], a: 2, why: 'Thigmotropism — a growth response to contact.' },
    { q: 'The pollen tube growing down the style towards the ovule is an example of', opts: ['Phototropism', 'Chemotropism', 'Geotropism', 'Hydrotropism'], a: 1, why: 'Chemical substances secreted by the ovule guide its growth.' },
    { q: 'Which is NOT a tropic response?', opts: ['Phototropism', 'Geotropism', 'Thigmotropism', 'Pupil reflex'], a: 3, why: 'The pupil response is a nervous reflex in an animal, not directional plant growth.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'invertebrates',
  title: 'Invertebrate Animals',
  blurb: 'The major invertebrate phyla, with the distinguishing features you need to place any organism.',
  time: '60 min',
  objectives: [
    'List the invertebrate phyla in order',
    'State the key features of each phylum',
    'Compare the classes of Arthropoda',
    'Describe the life cycles of an earthworm and a cockroach',
    'Explain the economic importance of selected invertebrates'
  ],
  body: `
<p class="lead">Invertebrates are animals without a backbone — over 95% of all animal species. Each phylum is defined by a small set of features, so the strategy is simple: learn <strong>what makes each group unique</strong> and you can place any specimen.</p>

<h2>The phyla at a glance</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Phylum</th><th>Defining features</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Protozoa</b></td><td>Single-celled, no cell wall, animal-like; pseudopodia, cilia or flagella for movement</td><td><em>Amoeba</em>, <em>Paramecium</em>, <em>Plasmodium</em></td></tr>
    <tr><td><b>Porifera</b></td><td>Sessile, <b>porous</b> body, no true tissues, internal cavity, collar cells (choanocytes)</td><td>Sponges</td></tr>
    <tr><td><b>Coelenterata</b></td><td><b>Sac-like gut</b> with one opening, tentacles bearing <b>nematocysts</b>, radial symmetry, two germ layers</td><td>Hydra, jellyfish, sea anemone</td></tr>
    <tr><td><b>Platyhelminthes</b></td><td><b>Dorso-ventrally flattened</b>, bilateral symmetry, no body cavity, some parasitic</td><td>Tapeworm, liver fluke</td></tr>
    <tr><td><b>Nematoda</b></td><td><b>Cylindrical</b>, pointed ends, unsegmented, pseudocoelom</td><td>Roundworm (<em>Ascaris</em>)</td></tr>
    <tr><td><b>Annelida</b></td><td><b>Segmented</b>, setae, closed circulatory system, true coelom</td><td>Earthworm, leech</td></tr>
    <tr><td><b>Arthropoda</b></td><td><b>Jointed appendages</b>, chitinous <b>exoskeleton</b>, segmented body, open circulation</td><td>Cockroach, crab, butterfly</td></tr>
    <tr><td><b>Mollusca</b></td><td>Soft body, muscular <b>foot</b>, <b>mantle</b>, often a shell, radula</td><td>Snail, mussel, octopus</td></tr>
    <tr><td><b>Echinodermata</b></td><td><b>Spiny skin</b>, radial symmetry in adults, water vascular system, tube feet</td><td>Starfish, sea urchin</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The unique feature of each group</b>
<p>Coelenterata → <b>nematocysts</b>. Porifera → <b>pores</b>. Platyhelminthes → flat, no body cavity. Annelida → <b>segments</b>. Arthropoda → <b>jointed legs</b>. Mollusca → muscular foot and mantle. Echinodermata → water vascular system. One feature each is enough to answer any identification question.</p></div></div>

<h3>Coelenterata in more detail</h3>
<p>Two body forms alternate in the life cycle:</p>
<ul>
<li><strong>Polyp</strong> — fixed, mouth pointing up (hydra, sea anemone).</li>
<li><strong>Medusa</strong> — free-swimming, mouth pointing down (jellyfish).</li>
</ul>
<p>They show <strong>alternation of generations</strong>: the polyp reproduces asexually to make medusae, and the medusae reproduce sexually to make polyps. The <strong>nematocyst</strong> is a stinging capsule on the tentacle used to paralyse prey.</p>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why they are called coelenterates</b>
<p>"Coel-enteron" means hollow gut — the central cavity functions as both stomach and intestine, and the single opening serves as both mouth and anus. This is the simplest gut found among animals.</p></div></div>

<h3>Platyhelminthes vs Nematoda</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Platyhelminthes</th><th>Nematoda</th></tr></thead>
  <tbody>
    <tr><td><b>Shape</b></td><td>Flat, dorso-ventrally flattened</td><td>Cylindrical, pointed ends</td></tr>
    <tr><td><b>Body cavity</b></td><td>None (acoelomate)</td><td>Pseudocoelom</td></tr>
    <tr><td><b>Segmentation</b></td><td>None</td><td>None</td></tr>
    <tr><td><b>Example</b></td><td>Tapeworm, planarian</td><td><em>Ascaris</em>, hookworm</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The tapeworm's adaptations to parasitism</b>
<p>A tapeworm has <b>no mouth or gut</b> (it absorbs pre-digested food through its skin), a <b>hooked scolex</b> to anchor to the intestine, <b>muscular suckers</b>, a <b>thick cuticle</b> that resists the host's digestive enzymes, and enormously developed <b>reproductive organs</b> — most of the body is a chain of proglottids packed with eggs. Every adaptation points to the same conclusion.</p></div></div>

<h3>Earthworm</h3>
<ul>
<li><strong>Segmented</strong> body with setae for grip; the first segment is the <strong>peristomium</strong> bearing the mouth.</li>
<li><strong>Clitellum</strong> — a saddle-shaped glandular band on segments 32–37, secreting the cocoon for eggs.</li>
<li><strong>Closed circulatory system</strong> — blood stays in vessels (unlike arthropods).</li>
<li><strong>Ventral nerve cord</strong> with ganglia; no brain (a cerebral ganglion above the pharynx).</li>
<li><strong>Nephridia</strong> — coiled excretory tubules in almost every segment.</li>
<li><strong>Respiration</strong> through the <b>moist body wall</b>; no lungs.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why the earthworm must stay moist</b>
<p>Oxygen must dissolve in a film of water before it can diffuse across the body wall into the capillaries. A dry worm cannot absorb oxygen and will die — which is why earthworms come to the surface only at night or after rain, and why the body secretes mucus.</p></div></div>

<h3>Locust and cockroach</h3>
<h4>Locust</h4>
<ul>
<li>Body in three parts: <strong>head, thorax, abdomen</strong>.</li>
<li><strong>Six jointed legs</strong>; the hind pair is enlarged for jumping.</li>
<li><strong>Two pairs of wings</strong>; chewing mouthparts (mandibles).</li>
<li><strong>Compound eyes</strong> and antennae for sensing.</li>
<li>Tracheal respiration through spiracles; open circulatory system with a dorsal heart.</li>
</ul>

<h4>Cockroach</h4>
<ul>
<li>Three body regions; <strong>three pairs of legs</strong>; two pairs of wings.</li>
<li>Mouthparts adapted for <strong>biting and chewing</strong> — labrum, mandibles, maxillae, labium and a sensory <strong>labellum</strong>.</li>
<li><strong>Compound eyes</strong> and two pairs of antennae-like structures (cerci at the rear).</li>
<li>Respiration via <b>tracheae</b> and spiracles; excretion by <b>Malpighian tubules</b>.</li>
<li>Undergoes <b>incomplete metamorphosis</b> — egg, nymph, adult (nymph resembles the adult).</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Complete vs incomplete metamorphosis</b>
<p><b>Complete (holometabolous)</b> — egg → larva → pupa → adult; the larva looks nothing like the adult (butterfly: caterpillar → chrysalis → butterfly).<br>
<b>Incomplete (hemimetabolous)</b> — egg → nymph → adult; the nymph is a smaller version of the adult (cockroach, locust, grasshopper). Match the insect to the correct sequence and you have the mark.</p></div></div>

<h2>Classes of Arthropoda</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Class</th><th>Legs</th><th>Body segments</th><th>Other features</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Insecta</b></td><td><b>3 pairs</b></td><td><b>3</b> — head, thorax, abdomen</td><td>1–2 pairs wings</td><td>Locust, butterfly, bee</td></tr>
    <tr><td><b>Arachnida</b></td><td><b>4 pairs</b></td><td><b>2</b> — cephalothorax, abdomen</td><td>No antennae; pedipalps</td><td>Spider, scorpion, tick</td></tr>
    <tr><td><b>Crustacea</b></td><td>Usually &gt;5 pairs</td><td>2 or more</td><td>Two pairs of antennae; gills; often a shell</td><td>Crab, crayfish, prawn</td></tr>
    <tr><td><b>Myriapoda</b></td><td>Many pairs</td><td>Many</td><td>One pair antennae</td><td>Centipede, millipede</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Spider is not an insect</b>
<p>A spider has <b>4 pairs of legs</b> and <b>2</b> body segments — an insect has 3 pairs and 3 segments. Also, insects have antennae; arachnids do not. This comparison is one of the most frequently repeated questions in the syllabus.</p></div></div>

<h2>Importance of invertebrates</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Invertebrate</th><th>Importance</th></tr></thead>
  <tbody>
    <tr><td><b>Honey bee</b></td><td>Honey and wax; pollination of crops</td></tr>
    <tr><td><b>Silkworm</b></td><td>Production of silk</td></tr>
    <tr><td><b>Locust</b></td><td><b>Pest</b> — destroys standing crops</td></tr>
    <tr><td><b>Mosquito</b></td><td><b>Vector</b> — transmits malaria and yellow fever</td></tr>
    <tr><td><b>Tsetse fly</b></td><td>Vector of sleeping sickness</td></tr>
    <tr><td><b>Earthworm</b></td><td>Aerates and enriches soil; used as bait; protein for poultry</td></tr>
    <tr><td><b>Snail</b></td><td>Protein source; but a crop pest and intermediate host of parasites</td></tr>
    <tr><td><b>Tsetse/roundworm</b></td><td>Parasites causing disease in humans and livestock</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Protozoa, Porifera, Coelenterata, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata.</li>
<li>Nematocysts (coelenterates), segmentation (annelids), jointed legs (arthropods).</li>
<li>Insecta 3 pairs/3 segments; Arachnida 4 pairs/2 segments.</li>
<li>Earthworm: closed circulation, moist skin for gas exchange, nephridia, clitellum.</li>
<li>Complete metamorphosis includes a pupa; incomplete does not.</li>
<li>Bees and earthworms help; locusts destroy; mosquitoes and tsetse flies transmit disease.</li>
</ul>
`,
  quiz: [
    { q: 'The phylum characterized by a porous body is', opts: ['Coelenterata', 'Porifera', 'Annelida', 'Mollusca'], a: 1, why: 'Water enters through numerous pores (ostia) and exits through the osculum.' },
    { q: 'Nematocysts (stinging cells) are found in the phylum', opts: ['Protozoa', 'Coelenterata', 'Platyhelminthes', 'Arthropoda'], a: 1, why: 'They are on the tentacles and are used to capture prey.' },
    { q: 'A sac-like gut with a single opening is characteristic of', opts: ['Annelida', 'Coelenterata', 'Nematoda', 'Mollusca'], a: 1, why: 'The mouth and anus are the same opening.' },
    { q: 'Platyhelminthes are distinguished by', opts: ['A cylindrical body', 'A dorso-ventrally flattened body', 'Segmentation', 'Jointed legs'], a: 1, why: 'They are flat and lack a body cavity.' },
    { q: 'Which phylum is unsegmented and cylindrical with pointed ends?', opts: ['Annelida', 'Nematoda', 'Arthropoda', 'Echinodermata'], a: 1, why: 'Nematodes such as Ascaris — unlike the segmented earthworm.' },
    { q: 'True segmentation and setae are features of', opts: ['Nematoda', 'Annelida', 'Platyhelminthes', 'Porifera'], a: 1, why: 'The earthworm’s body is divided into repeated segments.' },
    { q: 'Jointed appendages and a chitinous exoskeleton define the phylum', opts: ['Mollusca', 'Arthropoda', 'Annelida', 'Echinodermata'], a: 1, why: 'Arthropod means jointed foot.' },
    { q: 'A muscular foot, mantle and often a shell characterize', opts: ['Arthropoda', 'Mollusca', 'Annelida', 'Coelenterata'], a: 1, why: 'Molluscs include snails, mussels and octopuses.' },
    { q: 'The water vascular system and tube feet are found in', opts: ['Mollusca', 'Echinodermata', 'Arthropoda', 'Nematoda'], a: 1, why: 'They are used for locomotion and feeding in starfish.' },
    { q: 'The radial symmetry of an adult starfish belongs to the phylum', opts: ['Coelenterata', 'Echinodermata', 'Arthropoda', 'Annelida'], a: 1, why: 'Larval echinoderms are bilaterally symmetrical; adults are radial.' },
    { q: 'A tapeworm is adapted to parasitism by having', opts: ['A well-developed gut', 'No gut, suckers and a thick cuticle', 'Wings', 'Gills'], a: 1, why: 'It absorbs pre-digested food and anchors itself in the host intestine.' },
    { q: 'The scolex of a tapeworm is used for', opts: ['Digestion', 'Attachment to the host wall', 'Excretion', 'Locomotion'], a: 1, why: 'It bears hooks and suckers for firm attachment.' },
    { q: 'The earthworm respires through its', opts: ['Lungs', 'Gills', 'Moist body wall', 'Tracheae'], a: 2, why: 'Oxygen dissolves in the surface moisture and diffuses into the blood capillaries.' },
    { q: 'The earthworm differs from an insect in having', opts: ['An open circulatory system', 'A closed circulatory system', 'No excretory organs', 'Jointed legs'], a: 1, why: 'Its blood remains within vessels, whereas insects have an open system.' },
    { q: 'The clitellum of the earthworm functions to', opts: ['Respire', 'Secrete a cocoon for the eggs', 'Produce sperm only', 'Excrete'], a: 1, why: 'It is a glandular band that encircles the developing embryos.' },
    { q: 'Gas exchange in an earthworm occurs by', opts: ['Tracheae', 'Gills', 'Diffusion across the body wall', 'Lungs'], a: 2, why: 'Hence the need for a moist surface.' },
    { q: 'The excretory organs of the earthworm are', opts: ['Malpighian tubules', 'Nephridia', 'Kidneys', 'Green glands'], a: 1, why: 'Coiled tubules in each segment discharge to the outside.' },
    { q: 'The number of pairs of legs on an insect is', opts: ['2', '3', '4', 'Many'], a: 1, why: 'Three pairs attached to the thorax — hence Hexapoda.' },
    { q: 'A spider belongs to the class', opts: ['Insecta', 'Crustacea', 'Arachnida', 'Myriapoda'], a: 2, why: 'Arachnids have 4 pairs of legs and 2 body segments.' },
    { q: 'The number of body segments in an insect is', opts: ['2', '3', '4', '5'], a: 1, why: 'Head, thorax and abdomen.' },
    { q: 'Crabs and crayfish belong to the class', opts: ['Insecta', 'Arachnida', 'Crustacea', 'Myriapoda'], a: 2, why: 'Crustaceans typically have two pairs of antennae and gills.' },
    { q: 'Centipedes and millipedes belong to the class', opts: ['Myriapoda', 'Insecta', 'Arachnida', 'Crustacea'], a: 0, why: 'Myriapoda means many feet.' },
    { q: 'An insect with one pair of antennae, three pairs of legs and wings is a', opts: ['Spider', 'Crab', 'Locust', 'Centipede'], a: 2, why: 'A locust fits the insect body plan exactly.' },
    { q: 'Incomplete metamorphosis involves the stages', opts: ['Egg, larva, pupa, adult', 'Egg, nymph, adult', 'Egg, adult only', 'Larva, pupa, adult'], a: 1, why: 'The nymph resembles a smaller version of the adult.' },
    { q: 'In complete metamorphosis, the stage between larva and adult is the', opts: ['Nymph', 'Pupa', 'Cocoon stage only', 'Imago'], a: 1, why: 'A butterfly passes egg → caterpillar → chrysalis → adult.' },
    { q: 'A caterpillar is the', opts: ['Adult stage', 'Larva', 'Nymph', 'Pupa'], a: 1, why: 'The larva is the feeding stage, quite unlike the adult.' },
    { q: 'Respiration in a cockroach takes place through', opts: ['Lungs', 'Gills', 'Tracheae opening at spiracles', 'The skin'], a: 2, why: 'The tracheal system carries air directly to the tissues.' },
    { q: 'Excretion in insects is carried out by', opts: ['Nephridia', 'Malpighian tubules', 'Kidneys', 'Green glands'], a: 1, why: 'They empty into the gut and remove nitrogenous waste as uric acid.' },
    { q: 'The mouthparts of a cockroach are adapted for', opts: ['Sucking blood', 'Biting and chewing', 'Piercing only', 'Straining food'], a: 1, why: 'Mandibles cut and grind solid food.' },
    { q: 'Which invertebrate is a pest of standing crops?', opts: ['Earthworm', 'Honey bee', 'Locust', 'Silkworm'], a: 2, why: 'Locust swarms can strip a field in hours.' },
    { q: 'The mosquito is important to man because it', opts: ['Pollinates crops', 'Transmits malaria', 'Produces silk', 'Aerates the soil'], a: 1, why: 'It is a vector for malaria and yellow fever.' },
    { q: 'Which invertebrate helps the farmer by aerating the soil?', opts: ['Locust', 'Earthworm', 'Mosquito', 'Tapeworm'], a: 1, why: 'Its burrows improve drainage and the burrows enrich the soil with organic matter.' },
    { q: 'The vector of sleeping sickness is the', opts: ['Tsetse fly', 'Mosquito', 'Housefly', 'Locust'], a: 0, why: 'It transmits Trypanosoma to humans and livestock.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'vertebrates',
  title: 'Vertebrate Animals',
  blurb: 'The five classes of vertebrates, their adaptations, and the characteristics that separate them.',
  time: '60 min',
  objectives: [
    'State the characteristics shared by all vertebrates',
    'Describe the distinguishing features of each vertebrate class',
    'Explain the adaptations of a fish for aquatic life',
    'Explain the adaptations of a mammal for active life',
    'Compare the hearts and temperature regulation of the classes'
  ],
  body: `
<p class="lead">Vertebrates are chordates with a backbone. Five classes cover the syllabus: <strong>Pisces, Amphibia, Reptilia, Aves, Mammalia</strong>. Learn the distinguishing features and the heart chambers — those two appear almost every year.</p>

<h2>Shared characteristics</h2>
<ul>
<li>An internal <strong>endoskeleton</strong> of bone and cartilage.</li>
<li>A <strong>backbone (vertebral column)</strong> protecting the spinal cord.</li>
<li><strong>Bilateral symmetry</strong> and a distinct head with a brain.</li>
<li>A closed circulatory system with a muscular heart.</li>
<li>Well-developed excretory organs — <strong>kidneys</strong>.</li>
</ul>

<h2>The five classes</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Class</th><th>Distinguishing features</th><th>Heart</th><th>Temp.</th></tr></thead>
  <tbody>
    <tr><td><b>Pisces</b></td><td>Gills throughout life, scales, fins, lateral line, swim bladder</td><td><b>2</b> chambers</td><td>Cold-blooded</td></tr>
    <tr><td><b>Amphibia</b></td><td><b>Moist scaleless skin</b>, gills as larvae and lungs as adults, 3 chambers, external fertilisation</td><td><b>3</b> chambers</td><td>Cold-blooded</td></tr>
    <tr><td><b>Reptilia</b></td><td><b>Dry keratinised scales</b>, lungs throughout, 3 chambers (4 in crocodiles), internal fertilisation, amniotic egg</td><td><b>3</b> (4 in crocodiles)</td><td>Cold-blooded</td></tr>
    <tr><td><b>Aves</b></td><td><b>Feathers</b>, wings, light hollow bones, 4 chambers, high metabolic rate</td><td><b>4</b> chambers</td><td>Warm-blooded</td></tr>
    <tr><td><b>Mammalia</b></td><td><b>Mammary glands, hair</b>, 4 chambers, diaphragm, differentiated teeth, internal development (mostly)</td><td><b>4</b> chambers</td><td>Warm-blooded</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Heart chambers, memorised</b>
<p><b>Fish 2</b> (one atrium, one ventricle) — blood goes once to the gills.<br>
<b>Amphibians 3</b> — two atria, one ventricle; oxygenated and deoxygenated blood partly mix.<br>
<b>Reptiles 3</b> — except crocodiles, which have <b>4</b>.<br>
<b>Birds and mammals 4</b> — complete separation, keeping oxygenated blood separate.<br>
If a question asks which reptile has a four-chambered heart, the answer is the crocodile.</p></div></div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why more chambers are better</b>
<p>Four chambers let the blood pass through the heart <em>twice</em> in one circuit without the two streams mixing. That keeps a high pressure of oxygenated blood going to the body — essential for warm-blooded animals with high metabolic rates. Cold-blooded animals can manage with less.</p></div></div>

<h2>Pisces — the fish</h2>
<h3>Adaptations for aquatic life</h3>
<div class="formula-box">
  <div class="fb-head">How a fish is built for water</div>
  <div class="formula-row"><div class="fname">Streamlined body</div>
    <div class="fexpr">Reduces resistance as it swims</div></div>
  <div class="formula-row"><div class="fname">Scales covered in mucus</div>
    <div class="fexpr">Protection and further reduction of friction</div></div>
  <div class="formula-row"><div class="fname">Fins</div>
    <div class="fexpr"><b>Dorsal and anal</b> — balance; <b>caudal</b> — propulsion; <b>pectoral and pelvic</b> — steering and braking</div></div>
  <div class="formula-row"><div class="fname">Gills</div>
    <div class="fexpr">Gas exchange; water passes over in one direction (counter-current)</div></div>
  <div class="formula-row"><div class="fname">Swim bladder</div>
    <div class="fexpr">Gas-filled sac that controls <b>buoyancy</b> — the fish can hang without swimming</div></div>
  <div class="formula-row"><div class="fname">Lateral line</div>
    <div class="fexpr">Detects <b>vibration and water movement</b> — helps schooling and predator avoidance</div></div>
  <div class="formula-row"><div class="fname">Two-chambered heart</div>
    <div class="fexpr">Single circuit: heart → gills → body → heart</div></div>
  <div class="formula-row"><div class="fname">Kidneys</div>
    <div class="fexpr">Excrete dilute urine — freshwater fish constantly gain water by osmosis</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why freshwater fish produce dilute urine</b>
<p>Their body fluids are <b>more concentrated</b> than the surrounding water, so water constantly enters by osmosis. To avoid swelling they must <b>excrete large volumes of dilute urine</b> and actively take in salts through the gills. A marine fish does the opposite — it drinks seawater and produces small, concentrated urine.</p></div></div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The swim bladder is a buoyancy aid, not a lung</b>
<p>By adjusting the gas it contains, the fish can become neutrally buoyant and stop sinking or rising. Sharks lack one and must keep swimming to stay afloat — that is why the swim bladder question so often appears as "which of these does a shark lack?"</p></div></div>

<h2>Amphibia</h2>
<ul>
<li><strong>Moist, glandular, scaleless skin</strong> used for cutaneous respiration — it must stay damp.</li>
<li><strong>Metamorphosis</strong>: larva (tadpole) has gills, a tail and no limbs; adult has lungs and four limbs.</li>
<li><strong>Three-chambered heart</strong>; some mixing of blood occurs.</li>
<li><strong>Ectothermic</strong> — relies on external heat, so basks in the sun.</li>
<li><strong>External fertilisation</strong> in most; eggs lack a shell and dry out, so they are laid in water.</li>
<li>Short limbs, webbed feet for swimming, a long sticky tongue for catching insects.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why amphibians stay near water</b>
<p>Three reasons: their <b>skin must stay moist</b> for gas exchange, their <b>eggs have no shell</b> and would desiccate, and <b>fertilisation is external</b> so sperm must reach the egg through water. Naming any two usually secures the mark.</p></div></div>

<h2>Reptilia</h2>
<ul>
<li><strong>Dry scales of keratin</strong> — prevent water loss, which is the key adaptation that allowed life on land.</li>
<li><strong>Lungs throughout life</strong> — skin is not used for respiration.</li>
<li><strong>Internal fertilisation</strong> and an <strong>amniotic egg</strong> with a leathery or hard shell — independent of water.</li>
<li>Ectothermic — they bask to raise body temperature.</li>
<li>Three-chambered heart (four in crocodiles); rib-cage breathing.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The single most important reptilian adaptation</b>
<p><strong>Waterproof keratinised scales</strong> plus a shelled, amniotic egg. Together these remove the dependence on water that restricts amphibians — reptiles can breed and live far from water. If a question asks what enabled vertebrates to colonise dry land, this is the answer.</p></div></div>

<h2>Aves — birds</h2>
<div class="formula-box">
  <div class="fb-head">Adaptations for flight</div>
  <div class="formula-row"><div class="fname">Feathers</div>
    <div class="fexpr">Provide lift (flight feathers) and insulation</div></div>
  <div class="formula-row"><div class="fname">Wings</div>
    <div class="fexpr">Forelimbs modified; light but strong</div></div>
  <div class="formula-row"><div class="fname">Pneumatic bones</div>
    <div class="fexpr">Hollow and air-filled, reducing weight</div></div>
  <div class="formula-row"><div class="fname">Four-chambered heart</div>
    <div class="fexpr">No mixing — high oxygen delivery for the high metabolic rate</div></div>
  <div class="formula-row"><div class="fname">Air sacs</div>
    <div class="fexpr">Extend into bones; ensure a continuous flow of air through the lungs in <b>both</b> inhalation and exhalation</div></div>
  <div class="formula-row"><div class="fname">Flight muscles</div>
    <div class="fexpr">Large pectorals attached to a deep <b>keel</b> on the sternum</div></div>
  <div class="formula-row"><div class="fname">Beak</div>
    <div class="fexpr">No teeth — saves weight; shape suits the diet</div></div>
  <div class="formula-row"><div class="fname">Endothermy</div>
    <div class="fexpr">Constant high body temperature keeps muscles working efficiently</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The keel is a wing anchor</b>
<p>The <strong>keel</strong> is a ridge on the sternum (breastbone) that gives a large surface area for the attachment of the powerful <strong>pectoralis</strong> and supracoracoideus flight muscles. A bird that does not fly (ostrich, penguin) has a flat sternum — no keel. Ask yourself whether the muscle must be large.</p></div></div>

<h2>Mammalia</h2>
<div class="formula-box">
  <div class="fb-head">Defining and derived features</div>
  <div class="formula-row"><div class="fname">Defining</div>
    <div class="fexpr"><b>Mammary glands</b> secrete milk to feed the young; <b>hair</b> on the skin</div></div>
  <div class="formula-row"><div class="fname">Other features</div>
    <div class="fexpr">Four-chambered heart, <b>diaphragm</b> for breathing, differentiated teeth (incisors, canines, premolars, molars), live birth in most, warm-blooded</div></div>
  <div class="formula-row"><div class="fname">Marsupials</div>
    <div class="fexpr">Young born very early and completed in a <b>pouch</b> — kangaroo, koala</div></div>
  <div class="formula-row"><div class="fname">Monotremes</div>
    <div class="fexpr">Lay eggs but still suckle young — <b>platypus, echidna</b></div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Whales, bats and hedgehogs</b>
<p>Whales are mammals because they have hair (at least a few follicles) and mammary glands, even though they live in water. Bats are mammals because their forelimbs are covered in skin forming wings — not feathers. <strong>Hair and mammary glands decide it, not the way the animal lives.</strong></p></div></div>

<h3>Teeth</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Type</th><th>Shape</th><th>Function</th><th>Best developed in</th></tr></thead>
  <tbody>
    <tr><td><b>Incisors</b></td><td>Chisel-shaped</td><td>Cutting and gnawing</td><td>Rabbits, rodents</td></tr>
    <tr><td><b>Canines</b></td><td>Pointed</td><td>Tearing flesh</td><td>Dogs, <b>cats, lions</b></td></tr>
    <tr><td><b>Premolars</b></td><td>Broad, cusped</td><td>Cutting and grinding</td><td>Cattle</td></tr>
    <tr><td><b>Molars</b></td><td>Broad, flat</td><td>Grinding</td><td>Cattle, horses</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Carnivores vs herbivores</b>
<p><b>Carnivores</b> have large <b>canines</b> for tearing and small or absent molars.<br>
<b>Herbivores</b> have broad <b>flat molars</b> for grinding and prominent <b>incisors</b>, with little or no canine.<br>
Match the tooth type to the diet and the answer follows logically.</p></div></div>

<h2>Comparing the classes</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Feature</th><th>Fish</th><th>Amphibian</th><th>Reptile</th><th>Bird</th><th>Mammal</th></tr></thead>
  <tbody>
    <tr><td>Covering</td><td>Scales</td><td>Moist skin</td><td>Dry scales</td><td>Feathers</td><td>Hair</td></tr>
    <tr><td>Respiration</td><td>Gills</td><td>Skin &amp; lungs</td><td>Lungs</td><td>Lungs + air sacs</td><td>Lungs + diaphragm</td></tr>
    <tr><td>Heart chambers</td><td>2</td><td>3</td><td>3 (4 in crocodile)</td><td>4</td><td>4</td></tr>
    <tr><td>Temperature</td><td>Cold</td><td>Cold</td><td>Cold</td><td>Warm</td><td>Warm</td></tr>
    <tr><td>Fertilisation</td><td>External</td><td>Mostly external</td><td>Internal</td><td>Internal</td><td>Internal</td></tr>
    <tr><td>Development</td><td>Water</td><td>Water for eggs</td><td>Amniotic egg</td><td>Shell egg</td><td>Mostly live birth</td></tr>
  </tbody>
</table>

<h2>Chapter recap</h2>
<ul>
<li>Heart chambers: 2 fish, 3 amphibians and reptiles (4 in crocodiles), 4 in birds and mammals.</li>
<li>Waterproof scales and the amniotic egg freed reptiles from water.</li>
<li>Freshwater fish excrete dilute urine because water enters by osmosis.</li>
<li>Flight adaptations: feathers, hollow bones, keel, air sacs, four-chambered heart.</li>
<li>Mammals are defined by mammary glands and hair — not by habitat.</li>
<li>Canines for tearing, molars for grinding.</li>
</ul>
`,
  quiz: [
    { q: 'A vertebrate is an animal that possesses', opts: ['A shell', 'A backbone', 'Feathers', 'Jointed legs'], a: 1, why: 'Vertebrates have a vertebral column enclosing the spinal cord.' },
    { q: 'The class of vertebrates with a 2-chambered heart is', opts: ['Amphibia', 'Reptilia', 'Pisces', 'Aves'], a: 2, why: 'Fish have one atrium and one ventricle, with a single circulatory circuit.' },
    { q: 'The heart of a frog has', opts: ['2 chambers', '3 chambers', '4 chambers', '5 chambers'], a: 1, why: 'Two atria and one ventricle, so some mixing of oxygenated and deoxygenated blood occurs.' },
    { q: 'Which reptile has a four-chambered heart?', opts: ['Lizard', 'Snake', 'Crocodile', 'Tortoise'], a: 2, why: 'Crocodiles are the exception among reptiles.' },
    { q: 'The heart of a bird has', opts: ['Two chambers', 'Three chambers', 'Four chambers', 'One chamber'], a: 2, why: 'Complete separation prevents mixing and supports a high metabolic rate.' },
    { q: 'Animals that maintain a constant body temperature are called', opts: ['Ectothermic', 'Poikilothermic', 'Endothermic', 'Cold-blooded'], a: 2, why: 'Birds and mammals generate heat internally and are warm-blooded.' },
    { q: 'The moist scaleless skin of a frog serves mainly for', opts: ['Protection against predators', 'Cutaneous respiration', 'Locomotion', 'Excretion only'], a: 1, why: 'Gas exchange occurs across the skin, so it must remain damp.' },
    { q: 'An amphibian differs from a reptile in that it has', opts: ['A shelled egg', 'Moist skin', 'Lungs', 'Internal fertilisation'], a: 1, why: 'Reptiles have dry waterproof scales; amphibians have permeable moist skin.' },
    { q: 'Amphibians lay their eggs in water because their eggs', opts: ['Are very large', 'Have no shell and would dry out', 'Need sunlight to develop', 'Are fertilized internally'], a: 1, why: 'Without a shell they desiccate quickly on land.' },
    { q: 'Fertilisation is external in', opts: ['Reptiles', 'Birds', 'Frogs', 'Mammals'], a: 2, why: 'The female lays eggs and the male releases sperm over them in water.' },
    { q: 'The key adaptation that allows reptiles to live far from water is', opts: ['Scales and a shelled egg', 'Lungs', 'A three-chambered heart', 'Webbed feet'], a: 0, why: 'Waterproof scales and the amniotic egg prevent water loss.' },
    { q: 'Reptilian scales are made of', opts: ['Cellulose', 'Keratin', 'Chitin', 'Calcium carbonate'], a: 1, why: 'The same protein as hair and feathers.' },
    { q: 'Feathers are characteristic of the class', opts: ['Reptilia', 'Mammalia', 'Aves', 'Amphibia'], a: 2, why: 'Feathers are unique to birds and serve both flight and insulation.' },
    { q: 'Hollow bones in birds are described as', opts: ['Dense', 'Pneumatic', 'Cartilaginous', 'Spongy only'], a: 1, why: 'They are air-filled, greatly reducing weight for flight.' },
    { q: 'The keel is a projection of the', opts: ['Pelvis', 'Sternum', 'Femur', 'Skull'], a: 1, why: 'It anchors the large pectoral flight muscles.' },
    { q: 'Air sacs in birds are important because they', opts: ['Produce sound', 'Allow continuous airflow through the lungs', 'Store food', 'Make bones heavier'], a: 1, why: 'Air passes through the lungs on both inhalation and exhalation.' },
    { q: 'A bird\'s beak lacks teeth in order to', opts: ['Reduce weight', 'Improve vision', 'Increase speed of flight', 'Digest food faster'], a: 0, why: 'Teeth would add unnecessary weight at the front of the body.' },
    { q: 'The single feature that defines a mammal is', opts: ['Warm blood', 'Four limbs', 'Mammary glands', 'Lungs'], a: 2, why: 'Milk production for the young, together with hair.' },
    { q: 'Whales are classified as mammals because they', opts: ['Live in water', 'Have mammary glands and hair', 'Breathe through lungs', 'Are large'], a: 1, why: 'Classification depends on structure, not habitat.' },
    { q: 'A bat is a mammal because its wings are made of', opts: ['Feathers', 'Skin stretched over elongated fingers', 'Chitin', 'Cartilage'], a: 1, why: 'It also has hair and mammary glands.' },
    { q: 'A kangaroo is a marsupial because', opts: ['It lays eggs', 'Its young complete development in a pouch', 'It has no mammary glands', 'It is warm-blooded'], a: 1, why: 'The pouch contains the mammary glands where the joey feeds.' },
    { q: 'A mammal that lays eggs but suckles its young is', opts: ['Kangaroo', 'Platypus', 'Dolphin', 'Bat'], a: 1, why: 'Platypus and echidna are monotremes.' },
    { q: 'The structure that helps mammals breathe by changing thoracic volume is the', opts: ['Sternum', 'Diaphragm', 'Ribs only', 'Trachea'], a: 1, why: 'Contraction flattens it, drawing air into the lungs.' },
    { q: 'The teeth best adapted for tearing flesh are', opts: ['Incisors', 'Canines', 'Premolars', 'Molars'], a: 1, why: 'Pointed canines, largest in carnivores such as dogs and cats.' },
    { q: 'Broad, flat molars are best developed in', opts: ['Carnivores', 'Herbivores', 'Insectivores', 'Omnivores only'], a: 1, why: 'They grind tough plant material.' },
    { q: 'Cutting food is the function of the', opts: ['Canines', 'Incisors', 'Molars', 'Wisdom teeth'], a: 1, why: 'Incisors are chisel-shaped and act like scissors.' },
    { q: 'A freshwater fish produces large volumes of dilute urine because', opts: ['It drinks little', 'Water enters its body by osmosis', 'Its kidneys are inefficient', 'It eats salty food'], a: 1, why: 'Its body is more concentrated than the surrounding water.' },
    { q: 'The organ that allows a fish to control its buoyancy is the', opts: ['Gill', 'Swim bladder', 'Heart', 'Lateral line'], a: 1, why: 'Adjusting the gas volume lets it remain suspended without swimming.' },
    { q: 'The lateral line of a fish detects', opts: ['Light', 'Vibrations and water movement', 'Smell', 'Temperature only'], a: 1, why: 'It helps with schooling and warning of approaching predators.' },
    { q: 'A shark lacks a swim bladder, so it must', opts: ['Sink to the bottom', 'Keep swimming to maintain buoyancy', 'Breathe air', 'Lay eggs on land'], a: 1, why: 'It relies on a large oil-filled liver and continuous movement.' },
    { q: 'The caudal fin of a fish functions in', opts: ['Balance', 'Propulsion', 'Steering only', 'Gas exchange'], a: 1, why: 'It is the main propeller; dorsal and anal fins give stability.' },
    { q: 'The myxinoids, hagfish and lampreys are often considered primitive because they lack', opts: ['A heart', 'A jaw', 'Gills', 'Eyes'], a: 1, why: 'They are jawless fishes — the most primitive surviving vertebrates.' }
  ]
});

JAMB.addChapter('biology', {
  id: 'plants',
  title: 'Plant Structure, Transport and Water Relations',
  blurb: 'Roots, stems and leaves in detail; water and mineral transport, translocation, and transpiration.',
  time: '65 min',
  objectives: [
    'Describe the internal structure of root, stem and leaf',
    'Explain water uptake and transport in the xylem',
    'Describe transpiration and the factors affecting its rate',
    'Explain translocation in the phloem and how it differs from xylem flow',
    'Explain the movement of water in the plant in terms of water potential'
  ],
  body: `
<p class="lead">Plants must solve three problems: <strong>absorbing water</strong> from soil, <strong>moving it upwards</strong> without a pump, and <strong>distributing manufactured food</strong> to where it is needed. The exam tests the structure of the tissues and the physics behind the flows.</p>

<h2>Tissues in the plant</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Tissue</th><th>Function</th><th>Found in</th></tr></thead>
  <tbody>
    <tr><td><b>Epidermis</b></td><td>Protection; reduced water loss; bears stomata and root hairs</td><td>Outside of root, stem, leaf</td></tr>
    <tr><td><b>Xylem</b></td><td>Transports <b>water and minerals</b> upwards; provides support</td><td>Vascular bundles</td></tr>
    <tr><td><b>Phloem</b></td><td>Transports <b>dissolved food</b> (translocation) both ways</td><td>Vascular bundles</td></tr>
    <tr><td><b>Parenchyma</b></td><td>Storage, packing; photosynthesis when chlorenchyma</td><td>Pith, mesophyll</td></tr>
    <tr><td><b>Collenchyma</b></td><td>Flexible support in young stems</td><td>Just under epidermis</td></tr>
    <tr><td><b>Sclerenchyma</b></td><td>Rigid support; cells are <b>dead</b> with thick lignified walls</td><td>Bundles, husks</td></tr>
  </tbody>
</table>

<h2>The root</h2>
<ul>
<li><strong>Epidermis</strong> with <strong>root hairs</strong> — single-celled extensions increasing surface area for absorption.</li>
<li><strong>Cortex</strong> — parenchyma for storage; water crosses it by osmosis (symplast and apoplast).</li>
<li><strong>Endodermis</strong> with the <strong>Casparian strip</strong> — a waxy band forcing water to cross a membrane, so control is possible.</li>
<li><strong>Stele</strong> — xylem in the centre (a star shape in a dicot root) with phloem between the arms.</li>
</ul>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Xylem position differs in root and stem</b>
<p>In a <b>root</b>, xylem forms a central <b>star/cross</b> with phloem tucked between its arms — there is no cambium in a young root. In a <b>stem</b>, xylem and phloem lie in separate bundles around the outside, often with cambium between them. Identifying a slide section depends on this.</p></div></div>

<h2>The stem</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Feature</th><th>Dicot stem</th><th>Monocot stem (e.g. maize)</th></tr></thead>
  <tbody>
    <tr><td><b>Vascular bundles</b></td><td><b>Ring</b> arrangement</td><td><b>Scattered</b> through the ground tissue</td></tr>
    <tr><td><b>Cambium</b></td><td>Present — secondary growth occurs</td><td>Absent — no increase in girth</td></tr>
    <tr><td><b>Pith</b></td><td>Well developed</td><td>Little or none</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The quickest way to tell them apart</b>
<p><b>Scattered bundles → monocot</b> (as in maize). <b>Bundles in a ring → dicot</b>. This single observation answers most "identify the section" questions. A vascular bundle in maize also contains <b>large metaxylem vessels with bowl-shaped ends</b>, looking like a monkey's face.</p></div></div>

<h2>The leaf</h2>
<p>A typical dicot leaf has an upper and lower <strong>epidermis</strong> with a waxy <strong>cuticle</strong>; between them the <strong>mesophyll</strong>, differentiated into:</p>
<ul>
<li><strong>Palisade mesophyll</strong> — elongated cells packed with chloroplasts just below the upper epidermis, where light is strongest.</li>
<li><strong>Spongy mesophyll</strong> — loosely packed with many <strong>air spaces</strong> for gas circulation, and most of the stomata on the lower surface.</li>
</ul>
<p><strong>Vascular bundles</strong> (veins) supply water and carry away sugars. <strong>Guard cells</strong> form each <strong>stoma</strong> and control its opening.</p>

<div class="formula-box">
  <div class="fb-head">Guard cells open and close the stoma</div>
  <div class="formula-row"><div class="fname">Opening</div>
    <div class="fexpr">Water enters by osmosis → guard cells become <b>turgid</b> → they bow apart and the pore opens</div></div>
  <div class="formula-row"><div class="fname">Closing</div>
    <div class="fexpr">Water leaves → cells become <b>flaccid</b> → the pore closes</div>
    <div class="fnote">Triggered by darkness, drought or ABA.</div></div>
</div>

<div class="note note-fact"><span class="ico">📌</span><div><b>Why guard cells have uneven thickening</b>
<p>The wall facing the pore is <strong>thick and inelastic</strong>; the outer wall is <strong>thin</strong>. When the cell swells, the thin outer wall bulges outward and drags the thick inner wall with it, so the cells curve apart and open the pore. The uneven thickening converts swelling into an opening movement.</p></div></div>

<h2>Water and mineral transport</h2>
<h3>Water uptake</h3>
<ol>
<li>Soil water is usually <strong>more dilute</strong> than the cell sap, so water enters root hairs by <strong>osmosis</strong>.</li>
<li>It crosses the cortex by osmosis from cell to cell (and along cell walls — the apoplast).</li>
<li>The <strong>Casparian strip</strong> in the endodermis blocks the apoplast, forcing water through a selectively permeable membrane — this is how the plant controls what reaches the xylem.</li>
<li>Mineral ions are absorbed largely by <strong>active transport</strong>, needing ATP.</li>
<li>Water enters the xylem and is drawn upward.</li>
</ol>

<h3>The ascent of sap</h3>
<div class="formula-box">
  <div class="fb-head">Three forces</div>
  <div class="formula-row"><div class="fname">Root pressure</div>
    <div class="fexpr">Osmosis in the root pushes water up — significant only in small plants</div></div>
  <div class="formula-row"><div class="fname">Capillarity</div>
    <div class="fexpr">Water rises in narrow tubes because of adhesion and cohesion — minor contribution</div></div>
  <div class="formula-row"><div class="fname">Transpiration pull (main force)</div>
    <div class="fexpr">Evaporation at the leaves creates a tension that pulls a continuous column of water upward</div>
    <div class="fnote">Explained by the cohesion–tension theory.</div></div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Cohesion and adhesion in one line</b>
<p><b>Cohesion</b> — water molecules stick <em>to each other</em>, forming an unbroken column. <b>Adhesion</b> — they stick <em>to the xylem walls</em>, resisting gravity. Together they let a continuous pull from the leaves lift water the full height of the tree.</p></div></div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why xylem vessels are ideal</b>
<p>They are <strong>dead</strong>, hollow tubes with <strong>lignified</strong> walls that resist collapse under the tension, and the end walls are <strong>perforated</strong> so there is no resistance along the column. Phloem sieve tubes, by contrast, are <b>living</b> but lack a nucleus and depend on companion cells.</p></div></div>

<h2>Transpiration</h2>
<blockquote><strong>Transpiration</strong> is the loss of water vapour from the aerial parts of a plant, mainly through the <b>stomata</b>.</blockquote>

<h3>Types of transpiration</h3>
<ul>
<li><strong>Stomatal</strong> — through the pores; the largest proportion.</li>
<li><strong>Cuticular</strong> — through the waxy cuticle; small.</li>
<li><strong>Lenticular</strong> — through lenticels in the bark; very small.</li>
</ul>

<h3>Factors affecting the rate</h3>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Factor</th><th>Effect on rate</th></tr></thead>
  <tbody>
    <tr><td><b>Light intensity</b></td><td><b>Increases</b> rate — stomata open to photosynthesise, letting vapour escape</td></tr>
    <tr><td><b>Temperature</b></td><td><b>Increases</b> rate — faster evaporation and greater water-holding capacity of air</td></tr>
    <tr><td><b>Humidity</b></td><td><b>Decreases</b> rate — a moist atmosphere reduces the gradient between leaf and air</td></tr>
    <tr><td><b>Wind</b></td><td><b>Increases</b> rate — removes the saturated layer of air next to the leaf</td></tr>
    <tr><td><b>Water supply</b></td><td>Shortage → stomata close → rate falls sharply</td></tr>
    <tr><td><b>Leaf surface area</b></td><td>More leaves → more stomata → greater total loss</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Humidity and wind work on the same gradient</b>
<p>Transpiration depends on the <b>difference in water potential between the leaf interior and the surrounding air</b>. Dry air and moving air both keep that difference large, so both <em>increase</em> loss. A humid, still atmosphere collapses the gradient and the rate falls. Explain in terms of the gradient, not just "evaporation".</p></div></div>

<h3>Measuring the rate</h3>
<ul>
<li><strong>Porometer</strong> — measures how quickly the leaf loses turgor, or the rate of water uptake, as a proxy for stomatal opening.</li>
<li><strong>Potometer</strong> — measures water <em>uptake</em>, which approximates (but is slightly less than) water lost by transpiration, since some water is used in photosynthesis and growth.</li>
<li><strong>Batching with cobalt chloride paper</strong> — blue paper turns pink as it absorbs water vapour, giving a rough rate.</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>A potometer measures uptake, not transpiration</b>
<p>Water absorbed is not exactly water transpired — some is retained or used in photosynthesis. So a potometer gives an <b>approximation</b>. If a question asks what its limitation is, this is the answer.</p></div></div>

<h2>Translocation</h2>
<blockquote><strong>Translocation</strong> is the movement of dissolved organic substances (mainly <b>sucrose</b>) in the <b>phloem</b>.</blockquote>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Xylem</th><th>Phloem</th></tr></thead>
  <tbody>
    <tr><td><b>Substance</b></td><td>Water and mineral salts</td><td>Sucrose, amino acids, hormones</td></tr>
    <tr><td><b>Direction</b></td><td><b>Upwards only</b> (mostly)</td><td><b>Both ways</b> — source to sink</td></tr>
    <tr><td><b>Cells</b></td><td><b>Dead</b>, lignified, hollow</td><td><b>Living</b> sieve tubes; companion cells</td></tr>
    <tr><td><b>Force</b></td><td>Transpiration pull</td><td><b>Pressure flow</b> — requires energy</td></tr>
    <tr><td><b>Distance</b></td><td>Long — up a tree</td><td>Mostly short to medium</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Pressure-flow mechanism</div>
  <div class="formula-row"><div class="fname">At the source (leaf)</div>
    <div class="fexpr">Sucrose is <b>pumped into the sieve tube</b> by active transport → water enters by osmosis → high pressure</div></div>
  <div class="formula-row"><div class="fname">Along the tube</div>
    <div class="fexpr">The pressure drives the solution towards the sink</div></div>
  <div class="formula-row"><div class="fname">At the sink (root, fruit, growing tip)</div>
    <div class="fexpr">Sucrose is <b>removed</b> → water leaves by osmosis → low pressure, drawing more solution along</div>
    <div class="fnote">"Source" is where sugar is made or released from storage; "sink" is where it is used or stored.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The evidence for translocation in phloem</b>
<p>The classic experiment is <strong>ringing</strong> (girdling): removing a ring of bark (phloem) from a stem causes sugars to accumulate <strong>above</strong> the ring and a swelling to form, while the roots below starve. Water transport in the xylem is unaffected for a time, since the xylem lies deeper. This shows phloem carries food <em>downward</em>.</p></div></div>

<h2>Mineral deficiencies</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Element</th><th>Role</th><th>Deficiency symptom</th></tr></thead>
  <tbody>
    <tr><td><b>Nitrogen</b></td><td>Protein, chlorophyll, nucleic acids</td><td>Stunted growth, <b>yellowing</b> of older leaves</td></tr>
    <tr><td><b>Phosphorus</b></td><td>ATP, DNA, membranes</td><td>Poor root development, purple tint</td></tr>
    <tr><td><b>Potassium</b></td><td>Enzyme activation, stomatal function</td><td>Scorched leaf edges</td></tr>
    <tr><td><b>Magnesium</b></td><td>Central atom of <b>chlorophyll</b></td><td><b>Interveinal chlorosis</b> — yellowing between veins</td></tr>
    <tr><td><b>Iron</b></td><td>Chlorophyll synthesis</td><td>Yellowing of <b>young</b> leaves</td></tr>
    <tr><td><b>Calcium</b></td><td>Cell walls, signalling</td><td>Death of root tips; deformed young leaves</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Mobile vs immobile elements</b>
<p>Nitrogen, magnesium, potassium and phosphorus are <b>mobile</b> — the plant moves them from old to new leaves, so symptoms appear in the <b>older</b> leaves first. Iron and calcium are <b>immobile</b>, so deficiency shows in the <b>youngest</b> leaves. "Where do the symptoms appear?" is a standard question.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Scattered bundles = monocot stem; ring of bundles = dicot stem.</li>
<li>Water enters root hairs by osmosis; minerals by active transport; the Casparian strip provides control.</li>
<li>Transpiration pull, from cohesion–tension, is the main force moving water up.</li>
<li>Light, warmth, wind and dry air raise the transpiration rate; humidity lowers it.</li>
<li>Phloem translocation is bidirectional and requires energy; xylem flow is upward and passive.</li>
<li>Mobile elements show deficiency in old leaves; immobile elements in young leaves.</li>
</ul>
`,
  quiz: [
    { q: 'The tissue that transports water and minerals upwards in a plant is the', opts: ['Phloem', 'Xylem', 'Cambium', 'Epidermis'], a: 1, why: 'Xylem vessels are dead, hollow, lignified tubes.' },
    { q: 'Translocation of food in a plant takes place in the', opts: ['Xylem', 'Phloem', 'Pith', 'Cortex'], a: 1, why: 'Phloem sieve tubes move sucrose from source to sink.' },
    { q: 'Xylem vessels are described as dead because they', opts: ['Contain no cytoplasm at maturity', 'Are always lignified', 'Are found only in roots', 'Carry no water'], a: 0, why: 'They lose their contents at maturity, leaving an empty tube.' },
    { q: 'Phloem sieve tubes differ from xylem vessels in that they are', opts: ['Dead and hollow', 'Living cells dependent on companion cells', 'Filled with lignin', 'Found only in roots'], a: 1, why: 'They lack a nucleus and are looked after by companion cells.' },
    { q: 'In a monocot stem, vascular bundles are', opts: ['Arranged in a ring', 'Scattered through the ground tissue', 'Absent', 'Only in the cortex'], a: 1, why: 'Scattered bundles are the key diagnostic feature of a monocot stem.' },
    { q: 'Secondary growth in a dicot stem is made possible by the', opts: ['Epidermis', 'Vascular cambium', 'Pith', 'Cuticle'], a: 1, why: 'Cambium divides to add xylem inwards and phloem outwards, increasing girth.' },
    { q: 'The region of a root where root hairs develop is the', opts: ['Region of cell division', 'Region of maturation', 'Root cap', 'Endodermis'], a: 1, why: 'Cells differentiate and elongate behind the zone of elongation.' },
    { q: 'The Casparian strip is found in the', opts: ['Epidermis', 'Endodermis', 'Xylem', 'Phloem'], a: 1, why: 'Its waxy band blocks the apoplast, forcing water through a membrane.' },
    { q: 'Mineral ions are absorbed by root hairs mainly by', opts: ['Diffusion', 'Osmosis', 'Active transport', 'Filtration'], a: 2, why: 'They are often dilute outside, so ATP and carriers are required.' },
    { q: 'Water enters the root hair cell by', opts: ['Active transport', 'Osmosis', 'Diffusion of salts', 'Pumping'], a: 1, why: 'The soil solution is less concentrated than the cell sap.' },
    { q: 'Palisade mesophyll cells are concentrated near the upper surface because', opts: ['They need more water', 'They receive the most light there', 'They store minerals', 'They protect the leaf'], a: 1, why: 'They are packed with chloroplasts for photosynthesis.' },
    { q: 'The main function of spongy mesophyll is to', opts: ['Absorb light', 'Allow gas circulation through its air spaces', 'Transport water', 'Support the leaf'], a: 1, why: 'The large air spaces connect the stomata to every photosynthesising cell.' },
    { q: 'Stomata are opened when guard cells', opts: ['Become flaccid', 'Become turgid', 'Die', 'Lose their chloroplasts'], a: 1, why: 'Water entering by osmosis makes them bow apart, opening the pore.' },
    { q: 'In darkness, stomata close because guard cells', opts: ['Swell with water', 'Become flaccid', 'Multiply', 'Rotate'], a: 1, why: 'Water leaves the cells and they collapse against one another.' },
    { q: 'Most stomata are found on the', opts: ['Upper epidermis', 'Lower epidermis', 'Midrib only', 'Cuticle'], a: 1, why: 'The shaded lower surface loses less water while still allowing gas exchange.' },
    { q: 'Transpiration is defined as the loss of', opts: ['Carbon dioxide', 'Water vapour from aerial parts', 'Oxygen', 'Mineral salts'], a: 1, why: 'It is evaporation from the leaves and young stems.' },
    { q: 'The greatest proportion of water loss from a leaf occurs through the', opts: ['Cuticle', 'Stomata', 'Lenticels', 'Epidermis'], a: 1, why: 'Stomatal transpiration accounts for most of the loss.' },
    { q: 'Increasing light intensity generally causes transpiration to', opts: ['Decrease', 'Increase', 'Stay the same', 'Stop'], a: 1, why: 'Stomata open in light for photosynthesis, allowing vapour to escape.' },
    { q: 'A humid atmosphere causes the rate of transpiration to', opts: ['Increase', 'Decrease sharply', 'Remain constant', 'Reverse'], a: 1, why: 'The water potential gradient between leaf and air is reduced.' },
    { q: 'Wind increases the rate of transpiration because it', opts: ['Cools the leaf', 'Removes the saturated air layer next to the leaf', 'Opens the stomata', 'Evaporates from the cuticle only'], a: 1, why: 'A fresh, drier airstream keeps the diffusion gradient steep.' },
    { q: 'A high temperature increases transpiration mainly by', opts: ['Closing stomata', 'Increasing the rate of evaporation', 'Making water denser', 'Reducing humidity inside the leaf'], a: 1, why: 'It also increases the water-holding capacity of the air.' },
    { q: 'If water supply is restricted, transpiration falls because', opts: ['Stomata close', 'Leaves fall off', 'Chlorophyll is destroyed', 'Roots swell'], a: 0, why: 'Guard cells lose turgor and the pores shut to conserve water.' },
    { q: 'A potometer measures', opts: ['The exact rate of transpiration', 'Water uptake, which approximates transpiration', 'Carbon dioxide loss', 'Leaf area'], a: 1, why: 'Some water is used in photosynthesis, so it is only an approximation.' },
    { q: 'The most important force moving water up a tall tree is', opts: ['Root pressure', 'Capillarity', 'Transpiration pull', 'Gutation'], a: 2, why: 'The cohesion–tension pull from the evaporating leaves.' },
    { q: 'Cohesion refers to water molecules', opts: ['Sticking to the xylem walls', 'Sticking to each other', 'Leaving the leaf', 'Entering the root'], a: 1, why: 'It maintains an unbroken column under tension.' },
    { q: 'Adhesion in the xylem means water', opts: ['Sticks to the vessel walls', 'Sticks to sugars', 'Is actively pumped', 'Evaporates'], a: 0, why: 'It helps counteract gravity along the column.' },
    { q: 'Translocation differs from water transport in that it', opts: ['Moves only water', 'Moves both ways and requires energy', 'Occurs only in the xylem', 'Is driven by evaporation'], a: 1, why: 'Sucrose moves from source to sink by pressure flow.' },
    { q: 'Ring-barking a stem causes sugars to accumulate', opts: ['Below the ring', 'Above the ring', 'In the roots', 'In the leaves only'], a: 1, why: 'The phloem is removed, so the downward path is blocked.' },
    { q: 'A deficiency of magnesium causes', opts: ['Yellowing between the veins', 'Scorched leaf edges', 'Purple leaves', 'Stunted roots only'], a: 0, why: 'Magnesium is the central atom of chlorophyll.' },
    { q: 'Nitrogen deficiency first appears in the', opts: ['Youngest leaves', 'Oldest leaves', 'Root tips', 'Flowers'], a: 1, why: 'Nitrogen is mobile, so it is moved from old to new growth.' },
    { q: 'Iron deficiency first appears in the', opts: ['Oldest leaves', 'Youngest leaves', 'Roots', 'Stem'], a: 1, why: 'Iron cannot be mobilised from older tissues, so new leaves suffer first.' },
    { q: 'A deficiency of potassium causes', opts: ['Yellowing between veins', 'Scorched edges of older leaves', 'Purple discoloration', 'No visible effect'], a: 1, why: 'It is involved in stomatal function and enzyme activation.' }
  ]
});
