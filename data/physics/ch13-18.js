/* JAMB 2027 Prep — Physics, Chapters 13–18 */

JAMB.addChapter('physics', {
  id: 'sound',
  title: 'Sound Waves',
  blurb: 'Speed of sound, echo, resonance, the decibel scale and the human ear.',
  time: '45 min',
  objectives: [
    'State the speed of sound in common media',
    'Calculate the distance to a reflecting surface using an echo',
    'Explain resonance and the conditions for it',
    'Relate intensity and amplitude, and read the decibel scale',
    'Describe the structure and function of the human ear'
  ],
  body: `
<p class="lead">Sound is a <strong>longitudinal mechanical wave</strong> that needs a material medium. It is the most concrete example of wave behaviour you will meet, and JAMB uses it to test the wave equation, echo timing and the definition of loudness and pitch.</p>

<h2>Speed of sound</h2>
<p>Sound travels fastest in solids, slower in liquids and slowest in gases — because particles in solids are closer together and more strongly bound, so they pass vibrations on more quickly.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Medium</th><th>Approximate speed</th></tr></thead>
  <tbody>
    <tr><td>Steel / solids</td><td>5000–6000 m/s</td></tr>
    <tr><td>Water</td><td>1500 m/s</td></tr>
    <tr><td>Air (0 °C)</td><td>331 m/s</td></tr>
    <tr><td>Air (room temperature, ~20 °C)</td><td>340 m/s</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The standard exam value</b>
<p>Use <b>340 m/s</b> unless the question states otherwise. Some questions give 330 or 331 m/s for air at 0 °C — check the question text rather than assuming.</p></div></div>

<p>The speed of sound in a gas also depends on temperature: sound travels <strong>faster in warmer air</strong>, roughly 0.6 m/s faster for each 1 °C rise.</p>

<h2>Echoes</h2>
<p>An echo is a sound reflected from a hard surface. For an echo to be heard separately, the total travel time must be at least about <strong>0.1 s</strong> (else the brain merges it with the original sound).</p>

<div class="formula-box">
  <div class="fb-head">Echo calculations</div>
  <div class="formula-row"><div class="fname">Single reflection (source near reflector)</div>
    <div class="fexpr">d = <span class="frac"><span>v × t</span><span>2</span></span></div>
    <div class="fnote">The factor 2 accounts for the journey there and back.</div></div>
  <div class="formula-row"><div class="fname">Minimum distance for a 0.1 s echo</div>
    <div class="fexpr">d = 340 × 0.1 / 2 = <b>17 m</b></div>
    <div class="fnote">This exact figure is a favourite question.</div></div>
  <div class="formula-row"><div class="fname">Two people clapping</div>
    <div class="fexpr">d = <span class="frac"><span>v × t</span><span>2</span></span> where t is one-clap delay</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Distance to a cliff</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A man fires a gun and hears the echo 3 s later. Speed of sound = 340 m/s.</div>
    <div class="step"><div class="step-l">Remember the factor of 2</div>
    Sound travelled to the cliff and back → total distance = 340 × 3 = 1020 m</div>
    <div class="step"><div class="step-l">One way only</div>
    d = 1020 ÷ 2</div>
    <div class="ans">Answer: 510 m</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Hearing the minimum echo</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    The minimum time for a separate echo is 0.1 s. Find the minimum distance to a wall (v = 340 m/s).</div>
    <div class="step"><div class="step-l">Apply d = vt/2</div>
    d = (340 × 0.1) / 2 = 34/2</div>
    <div class="ans">Answer: 17 m</div>
  </div>
</div>

<h2>Resonance</h2>
<blockquote>Resonance occurs when a <strong>forced vibration</strong> is applied at a body's <strong>natural frequency</strong>, resulting in a sudden increase in the amplitude of vibration.</blockquote>

<p>Every object vibrates naturally at certain frequencies. Push a swing at exactly the rhythm it already has and the amplitude grows with each push — push at the wrong rhythm and it barely moves.</p>

<h3>Examples of resonance</h3>
<ul>
<li><strong>Mechanical:</strong> soldiers break step when crossing a bridge — marching in step could match the bridge's natural frequency and shake it apart (the 1831 Broughton bridge collapse).</li>
<li><strong>Acoustic:</strong> a column of air resonates when driven at the right frequency — this is how an organ pipe produces its note.</li>
<li><strong>Electrical:</strong> a radio tuner adjusts the circuit's natural frequency to match the incoming signal's frequency, so that station is amplified.</li>
</ul>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Resonance vs forced vibration</b>
<p>A <strong>forced vibration</strong> merely makes something oscillate at the driving frequency — it happens whatever frequency you use. <strong>Resonance</strong> is the special case where the driving frequency equals the natural frequency and the amplitude becomes large. JAMB tests this distinction directly.</p></div></div>

<h2>Loudness and pitch</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Depends on</th><th>Wave feature</th></tr></thead>
  <tbody>
    <tr><td><b>Loudness</b></td><td>Energy of the sound</td><td><b>Amplitude</b> — bigger amplitude, louder sound</td></tr>
    <tr><td><b>Pitch</b></td><td>Frequency of vibration</td><td><b>Frequency</b> — higher frequency, higher pitch</td></tr>
    <tr><td><b>Quality (timbre)</b></td><td>Number and type of harmonics</td><td>Waveform complexity — why a piano and a flute differ</td></tr>
  </tbody>
</table>

<h3>Intensity and the decibel scale</h3>
<p>Sound <strong>intensity</strong> is the energy per unit area perpendicular to the direction of travel — it is proportional to the <strong>square of the amplitude</strong>:</p>
<div class="eq">I ∝ A²</div>
<p>Because human hearing covers an enormous range, intensity is measured on a logarithmic <strong>decibel (dB)</strong> scale:</p>
<div class="eq">L = 10 log₁₀ <span class="frac"><span>I</span><span>I₀</span></span> dB</div>
<p>where I₀ = 10⁻¹² W/m², the threshold of hearing.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Sound</th><th>Approx. level</th></tr></thead>
  <tbody>
    <tr><td>Threshold of hearing</td><td>0 dB</td></tr>
    <tr><td>Quiet room / whisper</td><td>20–30 dB</td></tr>
    <tr><td>Normal conversation</td><td>60 dB</td></tr>
    <tr><td>Busy traffic / rock concert</td><td>90–110 dB</td></tr>
    <tr><td>Threshold of pain / jet engine</td><td>120–130 dB</td></tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Intensities add, decibels do not</b>
<p>Two identical 60 dB sources give a total intensity that doubles — which is an increase of only <b>3 dB</b>, so 63 dB. You cannot simply add decibel readings. This catches a lot of students.</p></div></div>

<h2>The human ear</h2>
<p>Sound waves enter through the <strong>pinna</strong> (outer ear), travel down the <strong>ear canal</strong> and strike the <strong>eardrum (tympanum)</strong>, causing it to vibrate. Three small bones — the <strong>hammer, anvil and stirrup</strong> — amplify these vibrations and pass them to the <strong>oval window</strong>.</p>
<p>Behind the oval window, the <strong>cochilla</strong> is filled with fluid. Vibrations ripple through this fluid and stimulate tiny <strong>hair cells</strong>, which convert the mechanical movement into nerve impulses sent to the brain. The <strong>semicircular canals</strong> detect balance, not hearing.</p>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The three bones, in order</b>
<p>Hammer (malleus) → Anvil (incus) → Stirrup (stapes). Their job is <b>amplification</b> and efficient transfer from air to the fluid-filled cochlea — the impedance mismatch would otherwise reflect most of the energy away.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Sound is longitudinal, needs a medium, travels fastest in solids.</li>
<li>Standard air speed ≈ 340 m/s.</li>
<li>Echo: d = vt/2; minimum distance for a 0.1 s echo is 17 m.</li>
<li>Resonance = forced vibration at the natural frequency → large amplitude.</li>
<li>Loudness ∝ amplitude; pitch = frequency; I ∝ A²; decibels are logarithmic.</li>
</ul>
`,
  quiz: [
    { q: 'The approximate speed of sound in air at room temperature is', opts: ['340 m/s', '3000 m/s', '34 m/s', '3400 m/s'], a: 0, why: 'About 340 m/s at roughly 20 °C (331 m/s at 0 °C).' },
    { q: 'Sound travels fastest in', opts: ['Air', 'Water', 'Steel', 'A vacuum'], a: 2, why: 'Solid particles are closest together and most strongly bonded, so vibrations transfer most rapidly.' },
    { q: 'A man hears an echo 2 s after shouting at a cliff (v = 340 m/s). The cliff is', opts: ['680 m', '340 m', '170 m', '1360 m'], a: 1, why: 'd = vt/2 = (340 × 2)/2 = 340 m.' },
    { q: 'The minimum distance from a reflector for an echo to be heard separately (0.1 s) is', opts: ['17 m', '34 m', '3.4 m', '340 m'], a: 0, why: 'd = (340 × 0.1)/2 = 17 m.' },
    { q: 'Resonance occurs when the driving frequency', opts: ['Is much lower than the natural frequency', 'Equals the natural frequency', 'Is double the natural frequency', 'Is zero'], a: 1, why: 'Matching the natural frequency produces the maximum build-up of amplitude.' },
    { q: 'The pitch of a sound wave is determined by its', opts: ['Amplitude', 'Frequency', 'Speed', 'Wavelength only'], a: 1, why: 'Pitch follows frequency — higher frequency means higher pitch.' },
    { q: 'The loudness of a sound depends mainly on', opts: ['Frequency', 'Amplitude', 'Wavelength', 'Speed'], a: 1, why: 'Greater amplitude carries more energy, producing a louder sound.' },
    { q: 'The unit of sound intensity level is the', opts: ['Newton', 'Hertz', 'Decibel', 'Watt'], a: 2, why: 'The decibel (dB) is used for intensity level on a logarithmic scale.' },
    { q: 'Sound cannot propagate through', opts: ['Solids', 'Liquids', 'Gases', 'Vacuum'], a: 3, why: 'Being mechanical, sound needs particles to transmit the vibration.' },
    { q: 'Soldiers are told to break step when crossing a bridge to avoid', opts: ['Resonance', 'Reflection', 'Refraction', 'Interference'], a: 0, why: 'Marching in unison could match the bridge’s natural frequency, building up damaging resonance.' },
    { q: 'In the human ear, vibrations from the eardrum are transmitted to the cochlea by the', opts: ['Pinna', 'Semicircular canals', 'Hammer, anvil and stirrup', 'Nerve'], a: 2, why: 'The three ossicles amplify and transfer the vibration to the oval window.' },
    { q: 'Sound intensity is proportional to the', opts: ['Amplitude', 'Square of the amplitude', 'Square of the frequency', 'Wavelength'], a: 1, why: 'I ∝ A² — doubling the amplitude quadruples the intensity.' },
    { q: 'Which wave property does NOT change when sound moves from air into water?', opts: ['Speed', 'Wavelength', 'Frequency', 'Amplitude'], a: 2, why: 'Frequency is fixed by the source and is unchanged by the medium.' },
    { q: 'A man hears an echo 0.1 s after shouting. The distance to the reflecting surface is (v = 340 m/s)', opts: ['34 m', '340 m', '17 m', '1.7 m'], a: 2, why: 'Sound travels there and back, so d = vt/2 = (340 × 0.1)/2 = 17 m.' },
    { q: 'The outer visible part of the ear is called the', opts: ['Cochlea', 'Pinna', 'Eardrum', 'Oval window'], a: 1, why: 'The pinna collects and funnels sound waves into the ear canal.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'reflection',
  title: 'Light: Reflection and Mirrors',
  blurb: 'Laws of reflection, plane and curved mirrors, image formation and the mirror formula.',
  time: '55 min',
  objectives: [
    'State the laws of reflection and apply them to ray diagrams',
    'Describe images formed by a plane mirror',
    'Use the sign convention for spherical mirrors',
    'Apply the mirror formula and magnification equation',
    'Draw and interpret ray diagrams for concave and convex mirrors'
  ],
  body: `
<p class="lead">Light travels in straight lines and bounces off surfaces according to simple, exact rules. This chapter covers plane mirrors and the two curved mirrors — and the curved-mirror calculations follow the same pattern you will reuse for lenses in the next chapter.</p>

<h2>The nature of light</h2>
<p>Light is an <strong>electromagnetic wave</strong> that needs no medium. It travels at 3 × 10⁸ m/s in a vacuum and exhibits reflection, refraction, interference, diffraction and polarisation. It behaves as a wave in most everyday contexts, and as a stream of particles (photons) when it interacts with matter — the photoelectric effect.</p>

<h2>Rectilinear propagation</h2>
<p>Light travels in straight lines in a uniform medium. This explains:</p>
<ul>
<li><strong>Shadows</strong> — formed when an opaque object blocks light; the shadow has the shape of the object.</li>
<li><strong>Eclipse of the Moon</strong> — the Earth passes between the Sun and Moon, casting a shadow. <strong>Solar eclipse</strong> — the Moon passes between the Sun and Earth.</li>
<li><strong>Pinhole camera</strong> — an inverted image formed because straight rays cross at the hole.</li>
</ul>

<h2>Laws of reflection</h2>
<blockquote>1. The angle of incidence equals the angle of reflection.<br>
2. The incident ray, the reflected ray and the normal all lie in the same plane.</blockquote>

<div class="formula-box">
  <div class="fb-head">Reflection vocabulary</div>
  <div class="formula-row"><div class="fname">Key angles</div>
    <div class="fexpr">∠i = ∠r &nbsp; (both measured from the normal)</div>
    <div class="fnote">Not from the surface! Angles are always measured to the normal.</div></div>
  <div class="formula-row"><div class="fname">Plane mirror</div>
    <div class="fexpr">object distance = image distance</div></div>
  <div class="formula-row"><div class="fname">Number of reflections in two mirrors at angle θ</div>
    <div class="fexpr">n = (360/θ) − 1</div>
    <div class="fnote">For θ dividing 360 evenly. Perpendicular mirrors: 360/90 − 1 = 3 images.</div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Always measure from the normal</b>
<p>The most common slip in ray diagrams is measuring the angle from the mirror surface. Both i and r are measured from the <b>normal</b> (the perpendicular to the surface at the point of incidence).</p></div></div>

<h3>Images formed by a plane mirror</h3>
<ul>
<li><strong>Virtual</strong> — formed by extending the rays backwards; cannot be caught on a screen.</li>
<li><strong>Upright</strong> — the same way up as the object.</li>
<li><strong>Same size</strong> as the object.</li>
<li><strong>Laterally inverted</strong> — left and right appear swapped (this is why ambulance lettering is reversed).</li>
<li>As far behind the mirror as the object is in front.</li>
</ul>

<h2>Curved mirrors</h2>
<p>A curved mirror is part of a sphere. The <strong>centre of curvature (C)</strong> is the sphere's centre; the <strong>principal focus (F)</strong> is where parallel rays converge (or appear to diverge from); the <strong>pole (P)</strong> is the mirror's centre; and the <strong>focal length f = PC/2</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Concave (converging)</th><th>Convex (diverging)</th></tr></thead>
  <tbody>
    <tr><td><b>Reflecting surface</b></td><td>Curves inward</td><td>Curves outward</td></tr>
    <tr><td><b>Effect on parallel rays</b></td><td>Converge at F</td><td>Diverge as if from F</td></tr>
    <tr><td><b>Focal length</b></td><td>Positive</td><td>Negative</td></tr>
    <tr><td><b>Real images?</b></td><td>Yes (when object beyond F)</td><td>Never — always virtual, upright, diminished</td></tr>
    <tr><td><b>Everyday use</b></td><td>Shaving/makeup mirror, car headlight reflector, torch</td><td>Rear-view mirror, security mirror</td></tr>
  </tbody>
</table>

<h2>Sign convention and the mirror formula</h2>
<div class="formula-box">
  <div class="fb-head">Mirror calculations</div>
  <div class="formula-row"><div class="fname">Mirror formula</div>
    <div class="fexpr"><span class="frac"><span>1</span><span>f</span></span> = <span class="frac"><span>1</span><span>u</span></span> + <span class="frac"><span>1</span><span>v</span></span></div>
    <div class="fnote">u = object distance, v = image distance, f = focal length.</div></div>
  <div class="formula-row"><div class="fname">Magnification</div>
    <div class="fexpr">m = <span class="frac"><span>image height</span><span>object height</span></span> = − <span class="frac"><span>v</span><span>u</span></span></div></div>
  <div class="formula-row"><div class="fname">Focal length from radius</div>
    <div class="fexpr">f = R/2</div>
    <div class="fnote">R = radius of curvature.</div></div>
</div>

<h3>Sign conventions (Cartesian)</h3>
<ul>
<li>Distances are measured from the <strong>pole</strong>.</li>
<li><strong>Positive</strong> — in the direction light travels (behind the mirror, i.e. to the right).</li>
<li><strong>Negative</strong> — against the direction of light (in front of the mirror, where real objects sit).</li>
<li>Real objects and real images have <strong>negative v</strong> (in front); virtual images have <strong>positive v</strong> (behind).</li>
</ul>

<div class="example">
  <div class="example-h"><span class="num">1</span> Concave mirror, object beyond C</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    An object 4 cm tall is placed 30 cm in front of a concave mirror of focal length 10 cm. Find image position and size.</div>
    <div class="step"><div class="step-l">Signs</div>
    u = −30 cm, f = −10 cm (concave)</div>
    <div class="step"><div class="step-l">Mirror formula</div>
    1/v = 1/f − 1/u = 1/(−10) − 1/(−30)<br>
    1/v = −1/10 + 1/30 = −3/30 + 1/30 = −2/30<br>
    v = −15 cm</div>
    <div class="step"><div class="step-l">Magnification</div>
    m = −v/u = −(−15)/(−30) = −0.5<br>
    Image height = 0.5 × 4 = 2 cm</div>
    <div class="step"><div class="step-l">Interpret</div>
    Negative v → in front of the mirror → <b>real</b>. |m| &lt; 1 → <b>diminished</b>. m negative → inverted.</div>
    <div class="ans">Answer: v = 15 cm in front of the mirror, image 2 cm tall, real and inverted</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Convex mirror</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A convex mirror of focal length 20 cm has an object placed 45 cm in front.</div>
    <div class="step"><div class="step-l">Signs</div>
    u = −45 cm, f = +20 cm (convex)</div>
    <div class="step"><div class="step-l">Mirror formula</div>
    1/v = 1/f − 1/u = 1/20 − 1/(−45) = 1/20 + 1/45<br>
    = 9/180 + 4/180 = 13/180<br>
    v = +13.85 cm</div>
    <div class="step"><div class="step-l">Magnification</div>
    m = −v/u = −(13.85)/(−45) = +0.31</div>
    <div class="ans">Answer: v ≈ +13.8 cm behind the mirror, virtual, upright, diminished</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>The quick image-location rules for concave mirrors</b>
<p>Object <b>beyond C</b> → real, inverted, diminished, between C and F.<br>
Object <b>at C</b> → real, inverted, same size, at C.<br>
Object <b>between C and F</b> → real, inverted, enlarged, beyond C.<br>
Object <b>between F and P</b> → <b>virtual, upright, enlarged, behind the mirror</b> (shaving mirror).<br>
Object <b>at infinity</b> → image at F, highly diminished.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>∠i = ∠r, measured from the normal; all three rays in one plane.</li>
<li>Plane mirror: virtual, upright, same size, laterally inverted, equal distances.</li>
<li>1/f = 1/u + 1/v; m = −v/u; f = R/2.</li>
<li>Concave converges (f positive); convex diverges (f negative), always virtual and diminished.</li>
</ul>
`,
  quiz: [
    { q: 'The laws of reflection state that the angle of incidence', opts: ['Equals the angle of reflection', 'Is twice the angle of reflection', 'Is complementary to the angle of reflection', 'Is unrelated to the angle of reflection'], a: 0, why: '∠i = ∠r, with both measured from the normal.' },
    { q: 'Angles in reflection are measured from', opts: ['The reflecting surface', 'The normal', 'The incident ray', 'The refracted ray'], a: 1, why: 'By convention both angles are measured relative to the normal at the point of incidence.' },
    { q: 'An image formed by a plane mirror is', opts: ['Real and inverted', 'Virtual, upright and laterally inverted', 'Real and diminished', 'Virtual and inverted'], a: 1, why: 'Plane-mirror images are virtual, upright, the same size, and reversed left-to-right.' },
    { q: 'A concave mirror has focal length 20 cm. Its radius of curvature is', opts: ['10 cm', '20 cm', '40 cm', '80 cm'], a: 2, why: 'R = 2f = 2 × 20 = 40 cm.' },
    { q: 'The focal length of a convex mirror is', opts: ['Positive', 'Negative', 'Zero', 'Infinite'], a: 1, why: 'Its focus lies behind the mirror (the direction light travels is defined positive), so f is negative.' },
    { q: 'Parallel rays striking a convex mirror appear to diverge from', opts: ['Its centre of curvature', 'Its principal focus', 'Its pole', 'Infinity'], a: 1, why: 'The reflected rays spread out as if emanating from the focal point behind the mirror.' },
    { q: 'A plane mirror forms images that can be', opts: ['Caught on a screen', 'Only formed with converging light', 'Not caught on a screen', 'Inverted always'], a: 2, why: 'They are virtual — the rays do not actually meet, so nothing can be projected onto a screen.' },
    { q: 'In the mirror formula 1/f = 1/u + 1/v, f for a concave mirror is', opts: ['Negative', 'Positive', 'Always greater than u', 'Zero'], a: 0, why: 'Using the Cartesian convention, a real focus in front of the mirror gives a negative focal length.' },
    { q: 'Rear-view mirrors on vehicles are', opts: ['Convex', 'Concave', 'Plane', 'Bifocal'], a: 0, why: 'Convex mirrors give a wider field of view and always produce diminished, upright images.' },
    { q: 'Two plane mirrors are placed at 90°. The number of images formed is', opts: ['1', '2', '3', '4'], a: 2, why: 'n = 360/90 − 1 = 4 − 1 = 3 images.' },
    { q: 'A concave shaving mirror is used because it produces', opts: ['A diminished real image', 'An upright enlarged virtual image', 'An inverted real image', 'No image at all'], a: 1, why: 'With the object between F and P, the mirror gives a magnified, upright, virtual image.' },
    { q: 'A real image is one that', opts: ['Cannot be projected on a screen', 'Can be projected on a screen', 'Is always upright', 'Is always formed by a plane mirror'], a: 1, why: 'Real images form where light rays actually converge, so a screen placed there captures them.' },
    { q: 'An object 3 cm tall forms an image 6 cm tall. The magnification is', opts: ['0.5', '2', '−2', '9'], a: 1, why: 'm = image height / object height = 6/3 = 2.' },
    { q: 'The principal focus of a mirror is the point where', opts: ['All reflected rays meet', 'Parallel rays converge or appear to diverge from', 'The object is always placed', 'Rays enter the mirror'], a: 1, why: 'F is defined by the behaviour of rays parallel to the principal axis.' },
    { q: 'Which property of light explains shadow formation?', opts: ['Refraction', 'Rectilinear propagation', 'Dispersion', 'Polarisation'], a: 1, why: 'Light travels in straight lines, so an opaque object blocks it and casts a shadow.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'refraction',
  title: 'Light: Refraction, Lenses and Fibres',
  blurb: 'Snell’s law, refractive index, total internal reflection, lenses and optical fibres.',
  time: '60 min',
  objectives: [
    "Apply Snell's law and calculate refractive index",
    'Calculate the critical angle and explain total internal reflection',
    'Use the lens formula and magnification equation',
    'Describe how converging and diverging lenses form images',
    'Explain the applications of optical fibres and mirages'
  ],
  body: `
<p class="lead">When light crosses from one medium to another it changes speed, and therefore changes direction. That single fact produces lenses, rainbows, fibre-optic internet and the shimmering illusion of water on a hot road. This is the largest calculation chapter in the syllabus.</p>

<h2>Refraction</h2>
<p>Refraction is the change of direction of light as it passes from one medium to another, caused by a <strong>change in speed</strong>.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Moving into a optically denser medium…</th><th>…into a less dense medium</th></tr></thead>
  <tbody>
    <tr>
      <td>Speed <b>decreases</b><br>Rays bend <b>towards the normal</b><br>Angle in medium &lt; angle in air</td>
      <td>Speed <b>increases</b><br>Rays bend <b>away from the normal</b><br>Angle in medium &gt; angle in air</td>
    </tr>
  </tbody>
</table>

<div class="note note-tip"><span class="ico">💡</span><div><b>Frequency never changes</b>
<p>Whatever happens to speed and wavelength, the <b>frequency stays fixed</b> — it is set by the source. This is why colour does not change when light enters glass from air.</p></div></div>

<h2>Refractive index</h2>
<div class="formula-box">
  <div class="fb-head">Refractive index</div>
  <div class="formula-row"><div class="fname">Definition (speed of light)</div>
    <div class="fexpr">n = <span class="frac"><span>c</span><span>v</span></span></div>
    <div class="fnote">c = speed in vacuum (3 × 10⁸ m/s), v = speed in the medium. n ≥ 1 always.</div></div>
  <div class="formula-row"><div class="fname">From two media (relative index)</div>
    <div class="fexpr"><sub>1</sub>n<sub>2</sub> = <span class="frac"><span>v₁</span><span>v₂</span></span> = <span class="frac"><span>n₂</span><span>n₁</span></span></div></div>
  <div class="formula-row"><div class="fname">Snell's law</div>
    <div class="fexpr">n₁ sin i = n₂ sin r &nbsp;&nbsp;·&nbsp;&nbsp; n = <span class="frac"><span>sin i</span><span>sin r</span></span></div>
    <div class="fnote">For a ray going from air into the material, with i in air.</div></div>
  <div class="formula-row"><div class="fname">Common values</div>
    <div class="fexpr">Water ≈ 1.33 &nbsp;·&nbsp; Glass ≈ 1.5 &nbsp;·&nbsp; Diamond ≈ 2.42</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Snell’s law</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A light ray in air strikes a glass surface at an angle of 30° to the normal. The angle in the glass is 19.5°. Find the refractive index.</div>
    <div class="step"><div class="step-l">Apply n = sin i / sin r</div>
    n = sin 30° / sin 19.5° = 0.5 / 0.334</div>
    <div class="ans">Answer: n ≈ 1.50</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Speed of light in a medium</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    The refractive index of water is 1.33. Find the speed of light in water.</div>
    <div class="step"><div class="step-l">Rearrange n = c/v</div>
    v = c/n = (3 × 10⁸) / 1.33</div>
    <div class="ans">Answer: ≈ 2.25 × 10⁸ m/s</div>
  </div>
</div>

<h2>Total internal reflection</h2>
<p>When light passes from a denser to a less dense medium, it bends <em>away</em> from the normal. At a specific <strong>critical angle C</strong>, the refracted ray runs along the boundary (refraction angle = 90°). Beyond C, no refraction occurs — all light reflects back inside.</p>

<div class="formula-box">
  <div class="fb-head">Critical angle</div>
  <div class="formula-row"><div class="fname">Critical angle</div>
    <div class="fexpr">sin C = <span class="frac"><span>n₂</span><span>n₁</span></span> &nbsp;&nbsp;·&nbsp;&nbsp; for air: sin C = 1/n</div>
    <div class="fnote">C is always measured in the denser medium.</div></div>
  <div class="formula-row"><div class="fname">Refractive index from C</div>
    <div class="fexpr">n = 1 / sin C = cosec C</div></div>
</div>

<p><strong>Two conditions must both hold:</strong> light is travelling from an optically denser to a less dense medium, <em>and</em> the angle of incidence exceeds the critical angle.</p>

<div class="example">
  <div class="example-h"><span class="num">3</span> Critical angle of glass</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    n for glass = 1.5.</div>
    <div class="step"><div class="step-l">Apply sin C = 1/n</div>
    sin C = 1/1.5 = 0.667<br>C = sin⁻¹(0.667)</div>
    <div class="ans">Answer: C ≈ 41.8°</div>
  </div>
</div>

<h3>Applications of total internal reflection</h3>
<ul>
<li><strong>Optical fibres</strong> — light entering a glass core at a shallow angle undergoes repeated total internal reflection, guiding it around bends with very little loss. Used in telecommunications and endoscopy. Because each reflection is total, <strong>no energy is lost</strong> to refraction.</li>
<li><strong>Diamond</strong> — high refractive index (2.42) gives a small critical angle (24.4°), so light entering a cut diamond is trapped and reflected many times — this is the source of its sparkle ("brilliance").</li>
<li><strong>Prisms in binoculars and periscopes</strong> — reflect light 90° or 180° without the silvering needed by a mirror.</li>
<li><strong> Mirage</strong> — hot air near a road surface is less dense. Light from the sky bends upward through the gradient, curving away from the normal until it undergoes total internal reflection, producing an inverted image that looks like a pool of water.</li>
</ul>

<h2>Lenses</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th></th><th>Converging (convex)</th><th>Diverging (concave)</th></tr></thead>
  <tbody>
    <tr><td><b>Shape</b></td><td>Thicker at the middle</td><td>Thinner at the middle</td></tr>
    <tr><td><b>Effect on parallel rays</b></td><td>Converge at the principal focus</td><td>Diverge as if from the focus</td></tr>
    <tr><td><b>Focal length</b></td><td>Positive</td><td>Negative</td></tr>
    <tr><td><b>Image from a real object</b></td><td>Real (usually), can be enlarged</td><td>Always virtual, upright, diminished</td></tr>
    <tr><td><b>Uses</b></td><td>Camera, eye, magnifying glass, projector</td><td>Correcting short sight, peephole</td></tr>
  </tbody>
</table>

<div class="formula-box">
  <div class="fb-head">Lens calculations</div>
  <div class="formula-row"><div class="fname">Lens formula</div>
    <div class="fexpr"><span class="frac"><span>1</span><span>f</span></span> = <span class="frac"><span>1</span><span>v</span></span> − <span class="frac"><span>1</span><span>u</span></span></div>
    <div class="fnote">Note the minus sign — this differs from the mirror formula.</div></div>
  <div class="formula-row"><div class="fname">Magnification</div>
    <div class="fexpr">m = <span class="frac"><span>v</span><span>u</span></span> = <span class="frac"><span>image height</span><span>object height</span></span></div>
    <div class="fnote">No negative sign, unlike the mirror formula.</div></div>
  <div class="formula-row"><div class="fname">Power of a lens</div>
    <div class="fexpr">P = <span class="frac"><span>1</span><span>f</span></span></div>
    <div class="fnote">f in metres, P in dioptres (D).</div></div>
  <div class="formula-row"><div class="fname">Combining lenses</div>
    <div class="fexpr">P = P₁ + P₂ + … &nbsp;·&nbsp; <span class="frac"><span>1</span><span>F</span></span> = <span class="frac"><span>1</span><span>f₁</span></span> + <span class="frac"><span>1</span><span>f₂</span></span></div></div>
</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Mirror vs lens formulas</b>
<p>Mirror: <b>1/f = 1/u + 1/v</b> and m = −v/u.<br>Lens: <b>1/f = 1/v − 1/u</b> and m = +v/u.<br>
Mixing them up is the most common calculation error in optics. Memorise each as a pair with its magnification.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Image formed by a lens</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    An object is 10 cm from a converging lens of focal length 6 cm.</div>
    <div class="step"><div class="step-l">Signs</div>
    u = −10 cm, f = +6 cm</div>
    <div class="step"><div class="step-l">Lens formula</div>
    1/v = 1/f + 1/u = 1/6 + 1/(−10) = 1/6 − 1/10<br>
    = 5/30 − 3/30 = 2/30<br>
    v = +15 cm</div>
    <div class="step"><div class="step-l">Magnification</div>
    m = v/u = 15/(−10) = −1.5</div>
    <div class="step"><div class="step-l">Interpret</div>
    Positive v → real image on the far side. |m| = 1.5 → enlarged. Negative m → inverted.</div>
    <div class="ans">Answer: image 15 cm from the lens, real, inverted, 1.5× enlarged</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Lens power</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A lens has a focal length of 0.25 m.</div>
    <div class="step"><div class="step-l">Power</div>
    P = 1/f = 1/0.25</div>
    <div class="ans">Answer: +4 dioptres</div>
  </div>
</div>

<h3>Image from a converging lens — the pattern</h3>
<ul>
<li>Object <b>beyond 2F</b> → real, inverted, diminished, between F and 2F (camera).</li>
<li>Object <b>at 2F</b> → real, inverted, same size, at 2F.</li>
<li>Object <b>between F and 2F</b> → real, inverted, enlarged, beyond 2F (projector).</li>
<li>Object <b>between F and the lens</b> → <b>virtual, upright, enlarged</b> on the same side (magnifying glass).</li>
<li>Object <b>at F</b> → no image (rays emerge parallel).</li>
</ul>

<h2>Defects of vision and their correction</h2>
<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Defect</th><th>Image forms</th><th>Correction</th></tr></thead>
  <tbody>
    <tr><td><b>Short sight (myopia)</b></td><td><b>In front of</b> the retina</td><td><b>Diverging (concave)</b> lens</td></tr>
    <tr><td><b>Long sight (hypermetropia)</b></td><td><b>Behind</b> the retina</td><td><b>Converging (convex)</b> lens</td></tr>
    <tr><td><b>Presbyopia</b> (age)</td><td>Fails to focus nearby objects</td><td>Convex lens (reading glasses)</td></tr>
  </tbody>
</table>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Short = concave, Long = convex</b>
<p>Myopia (short sight) is corrected with a <b>concave</b> lens, which diverges light before the eye focuses it, pushing the image back onto the retina. Hypermetropia (long sight) needs a <b>convex</b> lens to converge light earlier. Remember: <b>SHoRTsighted → Concave</b>.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Refraction = change of direction from a change of speed; bends towards normal entering denser.</li>
<li>n = c/v; Snell: n₁ sin i = n₂ sin r; n = sin i / sin r for air to medium.</li>
<li>sin C = 1/n; TIR needs denser→less dense AND i &gt; C.</li>
<li>Lens: 1/f = 1/v − 1/u; m = v/u; P = 1/f in dioptres.</li>
<li>Myopia → concave lens; long sight → convex lens.</li>
</ul>
`,
  quiz: [
    { q: 'When light passes from air into glass, it bends', opts: ['Away from the normal', 'Towards the normal', 'Along the normal', 'At 45° always'], a: 1, why: 'Glass is optically denser, so light slows and bends towards the normal.' },
    { q: 'The refractive index of a medium is defined as', opts: ['Speed in vacuum ÷ speed in medium', 'Speed in medium ÷ speed in vacuum', 'Wavelength ratio', 'Frequency ratio'], a: 0, why: 'n = c/v, so n ≥ 1 — light is always slower in a material than in a vacuum.' },
    { q: 'Light travelling in air hits a surface at 45°. If the angle in the medium is 28°, the refractive index is', opts: ['0.62', '1.60', '1.30', '0.79'], a: 1, why: 'n = sin 45°/sin 28° = 0.707/0.469 ≈ 1.60.' },
    { q: 'Total internal reflection can occur only when light travels', opts: ['From a less dense to a denser medium', 'From a denser to a less dense medium', 'Between two identical media', 'At normal incidence only'], a: 1, why: 'The denser-to-less-dense direction is essential — otherwise the ray always refracts away from but never along the surface.' },
    { q: 'The critical angle for a medium of refractive index 1.5 is about', opts: ['24°', '42°', '60°', '30°'], a: 1, why: 'sin C = 1/1.5 = 0.667 → C ≈ 41.8°.' },
    { q: 'A lens of focal length 0.25 m has a power of', opts: ['4 D', '0.25 D', '25 D', '0.04 D'], a: 0, why: 'P = 1/f = 1/0.25 = 4 dioptres.' },
    { q: 'The lens formula is', opts: ['1/f = 1/u + 1/v', '1/f = 1/v − 1/u', 'f = u + v', '1/f = u − v'], a: 1, why: 'For lenses 1/f = 1/v − 1/u, with magnification m = +v/u.' },
    { q: 'A diverging lens is also called a', opts: ['Convex lens', 'Concave lens', 'Bifocal lens', 'Cylindrical lens'], a: 1, why: 'A concave lens is thinner at the middle and spreads parallel rays apart.' },
    { q: 'Short sight (myopia) is corrected using a', opts: ['Converging lens', 'Diverging lens', 'Plane mirror', 'Cylindrical lens'], a: 1, why: 'A concave lens diverges light slightly so the image falls back onto the retina.' },
    { q: 'Optical fibres work by', opts: ['Refraction', 'Total internal reflection', 'Dispersion', 'Diffraction'], a: 1, why: 'Repeated total internal reflection guides light along the fibre with negligible loss.' },
    { q: 'The refractive index of water is 1.33. The speed of light in water is', opts: ['4 × 10⁸ m/s', '2.25 × 10⁸ m/s', '1.33 × 10⁸ m/s', '3 × 10⁸ m/s'], a: 1, why: 'v = c/n = 3 × 10⁸/1.33 ≈ 2.25 × 10⁸ m/s.' },
    { q: 'Which quantity does NOT change when light enters a new medium?', opts: ['Speed', 'Wavelength', 'Frequency', 'Direction'], a: 2, why: 'Frequency is determined by the source and remains constant across the boundary.' },
    { q: 'Diamond sparkles brilliantly mainly because it has', opts: ['A very low refractive index', 'A small critical angle causing repeated internal reflection', 'A large critical angle', 'High transparency to all light'], a: 1, why: 'n ≈ 2.42 gives C ≈ 24°, so much of the light entering is trapped and reflected internally many times.' },
    { q: 'A converging lens forms a virtual, upright, enlarged image when the object is placed', opts: ['Beyond 2F', 'At 2F', 'Between F and the lens', 'At infinity'], a: 2, why: 'Inside the focal length the lens acts as a magnifying glass — virtual, upright and enlarged.' },
    { q: 'A mirage on a hot road is caused by', opts: ['Dispersion into colours', 'Total internal reflection in air of varying density', 'Reflection from water', 'Diffraction of light'], a: 1, why: 'A temperature gradient near the road bends light upward until TIR makes it appear reflected from a pool below.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'electricity',
  title: 'Current Electricity',
  blurb: 'Charge, current, Ohm’s law, resistance, resistivity, circuits, cells and heating.',
  time: '65 min',
  objectives: [
    'Define charge, current, potential difference and resistance',
    "Apply Ohm's law and calculate resistance",
    'Combine resistors in series and parallel',
    'Use resistivity to solve problems on length and cross-section',
    'Apply the heating effect (Joule’s law) and combine cells in circuits'
  ],
  body: `
<p class="lead">Electricity is the biggest calculation topic in Physics after mechanics. The good news: it rests on a handful of equations, all of which you can carry into the exam. Work through this slowly — the circuit rules need practice more than memorisation.</p>

<h2>Charge and current</h2>
<div class="formula-box">
  <div class="fb-head">The fundamental electrical quantities</div>
  <div class="formula-row"><div class="fname">Current</div>
    <div class="fexpr">I = <span class="frac"><span>Q</span><span>t</span></span></div>
    <div class="fnote">Q in coulombs (C), t in seconds, I in amperes (A). 1 A = 1 C/s.</div></div>
  <div class="formula-row"><div class="fname">Charge of one electron</div>
    <div class="fexpr">e = 1.6 × 10<sup>−19</sup> C</div>
    <div class="fnote">Q = ne for n electrons.</div></div>
  <div class="formula-row"><div class="fname">Potential difference</div>
    <div class="fexpr">V = <span class="frac"><span>W</span><span>Q</span></span></div>
    <div class="fnote">Work done moving Q coulombs. Unit: volt (V) = 1 J/C.</div></div>
  <div class="formula-row"><div class="fname">Resistance</div>
    <div class="fexpr">R = <span class="frac"><span>V</span><span>I</span></span></div>
    <div class="fnote">Unit: ohm (Ω).</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Conventional current vs electron flow</b>
<p><b>Conventional current</b> is defined as the flow of <b>positive</b> charge, from positive to negative terminal. <b>Electrons</b> actually drift the opposite way, from negative to positive. The question will ask which direction — give conventional current unless it says "electron flow".</p></div></div>

<h2>Ohm’s law</h2>
<blockquote>The current through a metallic conductor is <strong>directly proportional</strong> to the potential difference across its ends, provided temperature and physical conditions remain constant.</blockquote>
<div class="eq">V = I R</div>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Ohm’s law has a condition</b>
<p>It holds only when the conductor is at <b>constant temperature</b>. A filament lamp does <b>not</b> obey Ohm's law across its whole range — as the filament heats, its resistance rises, so its V–I graph curves rather than staying straight. If a question offers "a metal wire at constant temperature" as an option for where Ohm's law applies, that is the right one.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Straight Ohm’s law</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A potential difference of 12 V produces a current of 0.4 A in a resistor.</div>
    <div class="step"><div class="step-l">Rearrange R = V/I</div>
    R = 12 / 0.4</div>
    <div class="ans">Answer: 30 Ω</div>
  </div>
</div>

<h2>Combining resistors</h2>
<div class="formula-box">
  <div class="fb-head">Series and parallel</div>
  <div class="formula-row"><div class="fname">Series</div>
    <div class="fexpr">R<sub>T</sub> = R₁ + R₂ + R₃ + …</div>
    <div class="fnote">Same current through each; voltages add.</div></div>
  <div class="formula-row"><div class="fname">Parallel</div>
    <div class="fexpr"><span class="frac"><span>1</span><span>R<sub>T</sub></span></span> = <span class="frac"><span>1</span><span>R₁</span></span> + <span class="frac"><span>1</span><span>R₂</span></span> + …</div>
    <div class="fnote">Same voltage across each; currents add.</div></div>
  <div class="formula-row"><div class="fname">Two equal resistors in parallel</div>
    <div class="fexpr">R<sub>T</sub> = R/2</div></div>
  <div class="formula-row"><div class="fname">Key facts</div>
    <div class="fexpr">Series: same I, add V &nbsp;·&nbsp; Parallel: same V, add I</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Mixed circuit</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Resistors of 4 Ω and 12 Ω are in parallel; that combination is in series with 5 Ω. Find the total resistance.</div>
    <div class="step"><div class="step-l">Step 1 — parallel pair</div>
    1/R<sub>p</sub> = 1/4 + 1/12 = 3/12 + 1/12 = 4/12<br>
    R<sub>p</sub> = 3 Ω</div>
    <div class="step"><div class="step-l">Step 2 — add the series resistor</div>
    R<sub>T</sub> = 3 + 5</div>
    <div class="ans">Answer: 8 Ω</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Work from the inside out</b>
<p>Simplify the innermost group first, replace it with its equivalent, and keep going outward. For two resistors in parallel you can also use the quick product-over-sum rule: <b>R<sub>T</sub> = R₁R₂/(R₁ + R₂)</b>.</p></div></div>

<h2>Resistivity</h2>
<p>Resistance depends on the material and the geometry of the conductor. <strong>Resistivity (ρ)</strong> is a property of the material alone.</p>
<div class="formula-box">
  <div class="fb-head">Resistivity</div>
  <div class="formula-row"><div class="fname">Definition</div>
    <div class="fexpr">R = <span class="frac"><span>ρL</span><span>A</span></span> &nbsp;&nbsp;⟹&nbsp;&nbsp; ρ = <span class="frac"><span>RA</span><span>L</span></span></div>
    <div class="fnote">L = length (m), A = cross-sectional area (m²).</div></div>
  <div class="formula-row"><div class="fname">Unit</div>
    <div class="fexpr">Ω m (ohm metre)</div></div>
  <div class="formula-row"><div class="fname">Implications</div>
    <div class="fexpr">R ∝ L &nbsp;·&nbsp; R ∝ 1/A</div>
    <div class="fnote">A longer wire has more resistance; a thinner wire has more resistance.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Resistivity calculation</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A nichrome wire 2 m long and of cross-sectional area 5 × 10⁻⁷ m² has resistance 8 Ω. Find its resistivity.</div>
    <div class="step"><div class="step-l">Rearrange ρ = RA/L</div>
    ρ = (8 × 5 × 10⁻⁷) / 2</div>
    <div class="ans">Answer: 2 × 10⁻⁶ Ω m</div>
  </div>
</div>

<h2>The heating effect</h2>
<p>When current flows through a resistor, electrical energy converts to heat — this is <strong>Joule's law</strong> (or the heating effect of current).</p>
<div class="formula-box">
  <div class="fb-head">Heating and energy</div>
  <div class="formula-row"><div class="fname">Energy / heat generated</div>
    <div class="fexpr">H = V I t = I² R t = <span class="frac"><span>V²</span><span>R</span></span> t</div>
    <div class="fnote">Unit: joules (J).</div></div>
  <div class="formula-row"><div class="fname">Electrical power</div>
    <div class="fexpr">P = V I = I² R = V²/R</div>
    <div class="fnote">Unit: watt (W) = 1 J/s.</div></div>
  <div class="formula-row"><div class="fname">Domestic energy</div>
    <div class="fexpr">kWh = power in kW × time in hours</div>
    <div class="fnote">1 kWh = 3.6 × 10⁶ J.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Cost of running an appliance</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 1500 W heater runs for 3 hours. Electricity costs ₦60 per kWh. Find the cost.</div>
    <div class="step"><div class="step-l">Energy used</div>
    1500 W = 1.5 kW; energy = 1.5 × 3 = 4.5 kWh</div>
    <div class="step"><div class="step-l">Cost</div>
    4.5 × ₦60</div>
    <div class="ans">Answer: ₦270</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Heat in a filament</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A 5 Ω heater element carries 4 A for 2 minutes.</div>
    <div class="step"><div class="step-l">Convert time</div>
    2 minutes = 120 s</div>
    <div class="step"><div class="step-l">Apply H = I²Rt</div>
    H = (4²)(5)(120) = 16 × 5 × 120</div>
    <div class="ans">Answer: 9600 J</div>
  </div>
</div>

<h3>Which formula when?</h3>
<div class="note note-tip"><span class="ico">💡</span><div><b>Pick by what is fixed</b>
<p>Series circuits and components sharing a current → use <b>I²Rt</b> (current is the common factor).<br>
Parallel branches and components sharing a voltage → use <b>V²t/R</b> (voltage is the common factor).<br>
Power supply and energy bills → <b>VIt</b>.</p></div></div>

<h2>Electromotive force (e.m.f.) and internal resistance</h2>
<div class="formula-box">
  <div class="fb-head">Real cells</div>
  <div class="formula-row"><div class="fname">Definition of e.m.f.</div>
    <div class="fexpr">E = <span class="frac"><span>work done</span><span>charge</span></span></div>
    <div class="fnote">Energy supplied by the source per coulomb, measured with no current flowing.</div></div>
  <div class="formula-row"><div class="fname">Terminal potential difference</div>
    <div class="fexpr">V = E − I r</div>
    <div class="fnote">r = internal resistance. V &lt; E whenever current flows.</div></div>
  <div class="formula-row"><div class="fname">Complete circuit</div>
    <div class="fexpr">I = <span class="frac"><span>E</span><span>R + r</span></span></div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>e.m.f. vs terminal p.d.</b>
<p><b>e.m.f.</b> is the energy per coulomb <b>supplied by the source</b> — measured across the terminals when the circuit is open. <b>Terminal p.d.</b> is the energy per coulomb <b>delivered to the external circuit</b> when current flows. Terminal p.d. is smaller because some energy is lost inside the cell (Ir). The voltmeter reads e.m.f. when the cell is disconnected and terminal p.d. when connected.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">6</span> Terminal voltage</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A cell has e.m.f. 6 V and internal resistance 0.5 Ω. It drives a current of 2 A.</div>
    <div class="step"><div class="step-l">Apply V = E − Ir</div>
    V = 6 − (2 × 0.5) = 6 − 1</div>
    <div class="ans">Answer: terminal p.d. = 5 V (1 V dropped inside the cell)</div>
  </div>
</div>

<h2>Cells in combination</h2>
<ul>
<li><strong>Series:</strong> E<sub>total</sub> = E₁ + E₂ + … and r<sub>total</sub> = r₁ + r₂ + … (cells in the same direction).</li>
<li><strong>Parallel (identical cells):</strong> E<sub>total</sub> = E (unchanged), while r<sub>total</sub> = r/n — so the supply can deliver more current.</li>
</ul>

<h3>The potentiometer</h3>
<p>A potentiometer measures e.m.f. <strong>by comparison</strong>, without drawing current from the cell being measured. This is its advantage over a voltmeter, which always draws some current and therefore slightly lowers the reading it gives. At balance, the potential difference across the length of wire equals the unknown e.m.f., so <strong>E ∝ balance length</strong>.</p>

<h2>Chapter recap</h2>
<ul>
<li>I = Q/t; V = W/Q; R = V/I; V = IR.</li>
<li>Series: R adds, same current. Parallel: reciprocals add, same voltage.</li>
<li>ρ = RA/L; R ∝ L and R ∝ 1/A.</li>
<li>H = VIt = I²Rt = V²t/R; P = VI.</li>
<li>V = E − Ir; I = E/(R + r).</li>
<li>Potentiometer measures e.m.f. without drawing current.</li>
</ul>
`,
  quiz: [
    { q: 'The SI unit of electric current is the', opts: ['volt', 'ampere', 'ohm', 'coulomb'], a: 1, why: 'Current is measured in amperes (A); 1 A = 1 coulomb per second.' },
    { q: 'A current of 2 A flows for 5 s. The charge transferred is', opts: ['10 C', '2.5 C', '7 C', '0.4 C'], a: 0, why: 'Q = It = 2 × 5 = 10 C.' },
    { q: 'A resistor has a p.d. of 9 V across it and carries 0.3 A. Its resistance is', opts: ['30 Ω', '2.7 Ω', '0.033 Ω', '9.3 Ω'], a: 0, why: 'R = V/I = 9/0.3 = 30 Ω.' },
    { q: 'Three resistors of 2 Ω, 3 Ω and 5 Ω in series have a total resistance of', opts: ['3.3 Ω', '10 Ω', '0.6 Ω', '2 Ω'], a: 1, why: 'In series resistances simply add: 2 + 3 + 5 = 10 Ω.' },
    { q: 'Two 6 Ω resistors in parallel have a total resistance of', opts: ['12 Ω', '6 Ω', '3 Ω', '0.33 Ω'], a: 2, why: 'Two equal resistors in parallel give R/2 = 6/2 = 3 Ω.' },
    { q: 'Which quantity remains the same for components connected in series?', opts: ['Potential difference', 'Current', 'Power', 'Resistance'], a: 1, why: 'There is only one path, so the same current passes through each component.' },
    { q: 'The SI unit of resistivity is', opts: ['Ω', 'Ω m', 'Ω/m', 'S'], a: 1, why: 'From ρ = RA/L: Ω·m²/m = Ω·m.' },
    { q: 'A wire of resistance R is stretched to twice its length (same volume). Its new resistance is', opts: ['R', '2R', '4R', 'R/2'], a: 2, why: 'Doubling L halves A (constant volume), so R ∝ L/A gives 2/(1/2) = 4R.' },
    { q: 'Ohm’s law applies strictly when the conductor is at', opts: ['Rising temperature', 'Constant temperature', 'Any temperature', 'Absolute zero'], a: 1, why: 'The proportionality V ∝ I holds only while temperature and other physical conditions stay fixed.' },
    { q: 'A filament lamp is non-ohmic because its resistance', opts: ['Is zero when cold', 'Changes as the filament heats up', 'Is constant', 'Depends on current only'], a: 1, why: 'Heating raises the filament’s resistance, so the V–I graph curves rather than staying linear.' },
    { q: 'The energy dissipated in a 4 Ω resistor carrying 3 A for 10 s is', opts: ['120 J', '360 J', '12 J', '720 J'], a: 1, why: 'H = I²Rt = 3² × 4 × 10 = 9 × 4 × 10 = 360 J.' },
    { q: 'A 2000 W appliance used for 2 h consumes', opts: ['4 kWh', '2 kWh', '1000 kWh', '0.4 kWh'], a: 0, why: 'Energy = 2 kW × 2 h = 4 kWh.' },
    { q: 'Terminal p.d. differs from e.m.f. because of', opts: ['External resistance', 'Internal resistance of the cell', 'The ammeter', 'The wire length'], a: 1, why: 'Some energy is dissipated inside the cell, so V = E − Ir.' },
    { q: 'A cell of e.m.f. 1.5 V and internal resistance 0.2 Ω delivers 2 A. The terminal p.d. is', opts: ['1.5 V', '1.1 V', '1.9 V', '0.4 V'], a: 1, why: 'V = E − Ir = 1.5 − (2 × 0.2) = 1.5 − 0.4 = 1.1 V.' },
    { q: 'The main advantage of a potentiometer over a voltmeter is that it', opts: ['Is cheaper', 'Measures e.m.f. without drawing current from the cell', 'Is easier to read', 'Measures alternating current'], a: 1, why: 'At balance no current flows, so the source is not loaded and the true e.m.f. is measured.' },
    { q: 'Conventional current flows', opts: ['From negative to positive', 'From positive to negative', 'In circles', 'Only through insulators'], a: 1, why: 'By convention current is the flow of positive charge, from the positive to the negative terminal — opposite to electron drift.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'magnetism',
  title: 'Magnetism and Electromagnetic Induction',
  blurb: 'Magnetic fields, motors, Faraday’s law, generators and transformers.',
  time: '60 min',
  objectives: [
    'Describe the magnetic field patterns around magnets and currents',
    "State Fleming's left- and right-hand rules",
    'Explain electromagnetic induction and Lenz’s law',
    'Describe how an a.c. generator works',
    'Apply the transformer turns and voltage ratios'
  ],
  body: `
<p class="lead">Electricity and magnetism are two faces of the same phenomenon. A current creates a magnetic field; a moving magnetic field creates a current. Everything from electric motors to national power grids follows from those two facts.</p>

<h2>Magnetic fields</h2>
<p>A <strong>magnetic field</strong> is the region around a magnet where it exerts a force on other magnets or on moving charges.</p>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Source</th><th>Field pattern</th></tr></thead>
  <tbody>
    <tr><td><b>Bar magnet</b></td><td>Loops emerge from the N pole, curve round and enter the S pole; strongest at the poles</td></tr>
    <tr><td><b>Straight wire</b></td><td>Concentric circles centred on the wire; direction given by the right-hand grip rule</td></tr>
    <tr><td><b>Solenoid (coil)</b></td><td>Like a bar magnet inside; field lines parallel and uniform in the core</td></tr>
  </tbody>
</table>

<dl class="defs">
<dt>Magnetic flux</dt>
<dd>The number of field lines passing through a surface. Unit: <strong>weber (Wb)</strong>. A stronger field means more flux.</dd>
<dt>Magnetic flux density (B)</dt>
<dd>Flux per unit area: B = Φ/A. Unit: <strong>tesla (T)</strong> = Wb/m².</dd>
</dl>

<div class="note note-tip"><span class="ico">💡</span><div><b>The right-hand grip rule</b>
<p>Wrap your right thumb in the direction of conventional current through a straight wire; your curled fingers show the direction of the magnetic field circles. For a solenoid, curl your fingers in the direction of current in the coils — your thumb points to the <b>N pole</b>.</p></div></div>

<h2>Force on a current-carrying conductor</h2>
<p>A wire carrying current in a magnetic field experiences a force — the <strong>motor effect</strong>. Its magnitude is:</p>
<div class="eq">F = B I L sin θ</div>
<p>where B is flux density, I the current, L the length of wire in the field, and θ the angle between the wire and the field. The force is <strong>maximum when the wire is perpendicular to the field</strong> and <strong>zero when parallel</strong>.</p>

<div class="formula-box">
  <div class="fb-head">The two hand rules — know which is which</div>
  <div class="formula-row"><div class="fname">Fleming's LEFT-hand rule</div>
    <div class="fexpr">First (index) = field &nbsp;·&nbsp; Second (middle) = current &nbsp;·&nbsp; Thumb = motion</div>
    <div class="fnote">Use for MOTORS — a force is produced (electrical → mechanical).</div></div>
  <div class="formula-row"><div class="fname">Fleming's RIGHT-hand rule</div>
    <div class="fexpr">Index = field &nbsp;·&nbsp; Middle = conductor movement &nbsp;·&nbsp; Thumb = induced current</div>
    <div class="fnote">Use for GENERATORS — a current is produced (mechanical → electrical).</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Left for motors, right for generators</b>
<p>Both rules have the same finger arrangement — only the roles differ. <b>L</b>eft = <b>L</b>oad being driven (motor). <b>R</b>ight = current being <b>R</b>ead off (generator). This distinction is asked repeatedly.</p></div></div>

<h2>Electromagnetic induction</h2>
<blockquote>Whenever the magnetic flux linked with a circuit changes, an <strong>e.m.f.</strong> is induced. If the circuit is closed, a current flows.</blockquote>
<p>This is Faraday's discovery — the basis of generators and transformers. Ways to induce an e.m.f.:</p>
<ul>
<li>Moving a magnet <strong>into or out of</strong> a coil</li>
<li>Moving a coil <strong>in a magnetic field</strong></li>
<li>Changing the <strong>current</strong> in a neighbouring coil (mutual induction)</li>
</ul>

<div class="note note-tip"><span class="ico">💡</span><div><b>What does NOT induce anything</b>
<p>A magnet sitting <b>stationary</b> inside a coil induces <b>nothing</b>, and a coil sitting still in a steady field induces nothing. It is the <b>change</b> in flux that matters. No relative motion or change → no induced e.m.f.</p></div></div>

<h3>Lenz’s law</h3>
<blockquote>The direction of an induced current is such that it <strong>opposes the change</strong> that produced it.</blockquote>
<p>It is a statement of conservation of energy: work must be done to push a magnet into a coil, and the induced current's field resists the motion. Without this opposition, we would get energy for nothing.</p>

<h2>The a.c. generator (alternator)</h2>
<p>A coil is rotated in a magnetic field. As it turns, the flux linking the coil changes continuously, inducing an e.m.f. that reverses direction every half-turn — producing <strong>alternating current</strong>.</p>
<ul>
<li><strong>Slip rings</strong> → alternating output (generator / alternator).</li>
<li><strong>Split-ring commutator</strong> → the current direction is reversed every half turn, giving a <strong>pulsating direct current</strong> (as in a d.c. motor).</li>
<li>Increasing the speed of rotation or the number of turns increases the peak e.m.f.</li>
</ul>

<div class="formula-box">
  <div class="fb-head">Alternating quantities (r.m.s. values)</div>
  <div class="formula-row"><div class="fname">Peak from r.m.s.</div>
    <div class="fexpr">V<sub>peak</sub> = √2 × V<sub>rms</sub> &nbsp;≈&nbsp; 1.414 V<sub>rms</sub></div></div>
  <div class="formula-row"><div class="fname">r.m.s. from peak</div>
    <div class="fexpr">V<sub>rms</sub> = V<sub>peak</sub> / √2</div>
    <div class="fnote">Same relationships hold for current I.</div></div>
  <div class="formula-row"><div class="fname">Nigerian mains supply</div>
    <div class="fexpr">230 V (r.m.s.), 50 Hz</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Peak and r.m.s. voltage</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    The mains supply is 230 V r.m.s.</div>
    <div class="step"><div class="step-l">Peak value</div>
    V<sub>peak</sub> = 230 × √2 = 230 × 1.414</div>
    <div class="ans">Answer: ≈ 325 V peak</div>
  </div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Why r.m.s. matters</b>
<p>The average of a full a.c. cycle is <b>zero</b>, so quoting it would be useless. The <strong>r.m.s. (root mean square)</strong> value is the equivalent d.c. that produces the <strong>same heating effect</strong> — that is why the rating on appliances (230 V) is an r.m.s. value, and why 230 V a.c. is more dangerous than 230 V d.c.</p></div></div>

<h2>The transformer</h2>
<p>A transformer changes an alternating voltage using <strong>mutual induction</strong>. It needs an alternating input — a transformer <strong>does not work with steady d.c.</strong></p>

<div class="formula-box">
  <div class="fb-head">Transformer ratios</div>
  <div class="formula-row"><div class="fname">Voltage ratio</div>
    <div class="fexpr"><span class="frac"><span>V<sub>s</sub></span><span>V<sub>p</sub></span></span> = <span class="frac"><span>N<sub>s</sub></span><span>N<sub>p</sub></span></span></div>
    <div class="fnote">V and N are secondary/primary voltage and number of turns.</div></div>
  <div class="formula-row"><div class="fname">Ideal transformer (power in = power out)</div>
    <div class="fexpr">V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub></div></div>
  <div class="formula-row"><div class="fname">Turns determine the type</div>
    <div class="fexpr">N<sub>s</sub> &gt; N<sub>p</sub> → step-up &nbsp;·&nbsp; N<sub>s</sub> &lt; N<sub>p</sub> → step-down</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Step-down transformer</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A transformer has 1000 primary turns and 50 secondary turns, with a primary voltage of 240 V. Find the secondary voltage.</div>
    <div class="step"><div class="step-l">Apply the turns ratio</div>
    V<sub>s</sub>/240 = 50/1000 = 0.05</div>
    <div class="step"><div class="step-l">Solve</div>
    V<sub>s</sub> = 240 × 0.05</div>
    <div class="ans">Answer: 12 V — a step-down transformer</div>
  </div>
</div>

<h3>Why transformers are used in transmission</h3>
<p>Power stations step the voltage <strong>up</strong> to hundreds of kilovolts for transmission. Because power lost in the cables is <strong>P<sub>loss</sub> = I²R</strong>, raising the voltage lets the same power be carried at a much lower current, and losses fall with the square of the current. The voltage is stepped <strong>down</strong> again near homes to safe levels.</p>

<div class="note note-warn"><span class="ico">⚠</span><div><b>Transformer losses</b>
<p>Energy is lost as <b>heat in the windings (copper loss)</b>, as <b>eddy currents in the core</b>, and through <b>magnetic leakage</b>. The laminated iron core minimises eddy currents. Efficiency is always less than 100%, and output power is always <b>less than</b> input power.</p></div></div>

<h2>Chapter recap</h2>
<ul>
<li>Flux unit weber (Wb); flux density unit tesla (T) = Wb/m².</li>
<li>Fleming's LEFT = motor (force); RIGHT = generator (induced current).</li>
<li>F = BIL sin θ; max perpendicular, zero parallel.</li>
<li>Induction needs <b>changing</b> flux; Lenz's law says the effect opposes the cause.</li>
<li>V<sub>peak</sub> = √2 V<sub>rms</sub>; mains 230 V r.m.s.</li>
<li>V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub>; V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub>; needs alternating current.</li>
</ul>
`,
  quiz: [
    { q: 'The unit of magnetic flux is the', opts: ['tesla', 'weber', 'gauss', 'henry'], a: 1, why: 'Magnetic flux is measured in webers (Wb); tesla is the unit of flux density (Wb/m²).' },
    { q: 'Fleming’s left-hand rule is used for', opts: ['Generators', 'Motors', 'Transformers', 'Induction'], a: 1, why: 'Left = Load/motion — the rule gives the force on a current-carrying conductor in a field.' },
    { q: 'Fleming’s right-hand rule applies to', opts: ['A motor', 'Electromagnetic induction', 'A transformer at rest', 'A straight wire at rest'], a: 1, why: 'Right = generated current — it gives the direction of induced current when conductors cut flux.' },
    { q: 'An e.m.f. is induced in a coil when', opts: ['The magnet inside is stationary', 'The magnetic flux linking the coil changes', 'A steady d.c. current flows continuously', 'The coil is at rest in a uniform field'], a: 1, why: 'Faraday’s law requires a changing flux linkage — no change, no induced e.m.f.' },
    { q: 'Lenz’s law gives the', opts: ['Magnitude of the induced e.m.f.', 'Direction of the induced current', 'Speed of the magnet', 'Resistance of the coil'], a: 1, why: 'It states the induced current opposes the change that caused it — a statement of conservation of energy.' },
    { q: 'A transformer with more secondary turns than primary turns is a', opts: ['Step-down transformer', 'Step-up transformer', 'Auto-transformer', 'Isolating transformer'], a: 1, why: 'V_s/V_p = N_s/N_p, so more secondary turns means a higher secondary voltage.' },
    { q: 'A transformer operates on', opts: ['Direct current only', 'Alternating current only', 'Any current', 'Static charges'], a: 1, why: 'It needs a changing flux, which requires an alternating (changing) primary current.' },
    { q: 'The r.m.s. value of a 325 V peak a.c. supply is approximately', opts: ['325 V', '230 V', '460 V', '162.5 V'], a: 1, why: 'V_rms = V_peak/√2 = 325/1.414 ≈ 230 V.' },
    { q: 'The mains frequency in Nigeria is', opts: ['60 Hz', '50 Hz', '100 Hz', '25 Hz'], a: 1, why: 'Nigeria uses 230 V at 50 Hz.' },
    { q: 'The r.m.s. value of an alternating quantity is the value that produces the same', opts: ['Peak force', 'Heating effect as an equivalent d.c.', 'Frequency', 'Magnetic field'], a: 1, why: 'Root-mean-square is defined by equal power/heat delivery compared with d.c.' },
    { q: 'A wire carrying current in a magnetic field experiences a force when it is', opts: ['Parallel to the field only', 'Perpendicular to the field', 'At any angle except parallel', 'Always, regardless of angle'], a: 2, why: 'F = BIL sin θ; the force is greatest perpendicular and zero when parallel, but non-zero at other angles.' },
    { q: 'The main energy losses in a transformer are', opts: ['Heat and eddy currents', 'Sound and light', 'Nuclear', 'Mechanical friction in the coils'], a: 0, why: 'Copper losses (heat in windings) and eddy currents in the core dominate; laminating the core reduces eddy currents.' },
    { q: 'Stepping up the voltage for long-distance transmission reduces energy loss because', opts: ['Current is reduced for the same power', 'Resistance falls', 'Wires become shorter', 'Frequency increases'], a: 0, why: 'P = VI, so higher V means lower I; losses go as I²R and therefore fall sharply.' },
    { q: 'A coil with a split-ring commutator produces', opts: ['Pure alternating current', 'Pulsating direct current', 'No current', 'Static electricity'], a: 1, why: 'The commutator reverses the connection every half turn, so the external current always flows one way.' },
    { q: 'The force on a current-carrying wire is zero when the wire is', opts: ['Perpendicular to the field', 'Parallel to the field', 'At 45°', 'Moving'], a: 1, why: 'sin 0° = 0, so F = 0 when the wire lies along the field direction.' }
  ]
});

JAMB.addChapter('physics', {
  id: 'modern-physics',
  title: 'Radioactivity and Modern Physics',
  blurb: 'Atomic structure, the photoelectric effect, alpha, beta and gamma decay, and half-life.',
  time: '60 min',
  objectives: [
    'Describe atomic structure and the location of the three particles',
    'Explain the photoelectric effect and photon energy',
    'Distinguish alpha, beta and gamma radiation by properties and uses',
    'Write and balance nuclear equations',
    'Calculate half-life and apply it to decay problems'
  ],
  body: `
<p class="lead">At the turn of the twentieth century physics discovered that matter comes in discrete pieces and that energy arrives in packets. This chapter covers the three topics JAMB draws on constantly: atomic structure, the photoelectric effect, and radioactivity.</p>

<h2>Atomic structure</h2>
<p>An atom consists of:</p>
<ul>
<li><strong>Protons</strong> — in the nucleus, mass 1 u, charge <strong>+1</strong> (1.6 × 10⁻¹⁹ C).</li>
<li><strong>Neutrons</strong> — in the nucleus, mass 1 u, charge <strong>0</strong>.</li>
<li><strong>Electrons</strong> — in shells around the nucleus, mass 1/1840 u (negligible), charge <strong>−1</strong>.</li>
</ul>

<div class="formula-box">
  <div class="fb-head">Notation and relationships</div>
  <div class="formula-row"><div class="fname">Nuclear notation</div>
    <div class="fexpr"><sup>A</sup><sub>Z</sub>X</div>
    <div class="fnote">A = nucleon number (protons + neutrons); Z = atomic number (protons only).</div></div>
  <div class="formula-row"><div class="fname">Neutrons</div>
    <div class="fexpr">N = A − Z</div></div>
  <div class="formula-row"><div class="fname">Neutral atom</div>
    <div class="fexpr">number of electrons = Z = number of protons</div></div>
  <div class="formula-row"><div class="fname">Molar mass / atomic mass</div>
    <div class="fexpr">A ≈ mass number (in unified atomic mass units, u)</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">1</span> Reading the notation</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Read ²³₈U</div>
    A = 238 (nucleons), Z = 92 (protons)</div>
    <div class="step"><div class="step-l">Neutrons</div>
    N = 238 − 92 = 146</div>
    <div class="step"><div class="step-l">Electrons in a neutral atom</div>
    92</div>
    <div class="ans">Answer: 146 neutrons, 92 electrons</div>
  </div>
</div>

<h2>The photoelectric effect</h2>
<blockquote>When light above a certain <strong>threshold frequency</strong> strikes a metal surface, electrons are emitted <strong>immediately</strong>.</blockquote>

<div class="formula-box">
  <div class="fb-head">Photons</div>
  <div class="formula-row"><div class="fname">Energy of a photon</div>
    <div class="fexpr">E = h f</div>
    <div class="fnote">h = Planck's constant = 6.6 × 10⁻³⁴ J s.</div></div>
  <div class="formula-row"><div class="fname">Alternative form</div>
    <div class="fexpr">E = h c / λ</div>
    <div class="fnote">c = 3 × 10⁸ m/s.</div></div>
  <div class="formula-row"><div class="fname">Work function</div>
    <div class="fexpr">E<sub>photon</sub> = W + KE<sub>max</sub></div>
    <div class="fnote">W = minimum energy needed to free an electron.</div></div>
</div>

<div class="note note-exam"><span class="ico">🎯</span><div><b>Four facts JAMB always asks</b>
<p>1. Emission is <b>immediate</b> — even at very low intensity. 2. Below the threshold frequency, <b>no electrons are emitted however bright</b> the light. 3. Above threshold, a <b>greater intensity</b> means <b>more electrons</b> (not faster ones). 4. A <b>higher frequency</b> gives electrons with <b>greater kinetic energy</b>.</p></div></div>

<div class="example">
  <div class="example-h"><span class="num">2</span> Photon energy</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    Light of frequency 5 × 10¹⁴ Hz strikes a metal with a work function of 2 × 10⁻¹⁹ J.</div>
    <div class="step"><div class="step-l">Photon energy</div>
    E = hf = (6.6 × 10⁻³⁴)(5 × 10¹⁴) = 33 × 10⁻²⁰ = 3.3 × 10⁻¹⁹ J</div>
    <div class="step"><div class="step-l">Kinetic energy of emitted electron</div>
    KE = E − W = 3.3 × 10⁻¹⁹ − 2 × 10⁻¹⁹</div>
    <div class="ans">Answer: photon energy 3.3 × 10⁻¹⁹ J; KE = 1.3 × 10⁻¹⁹ J</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>Why classical physics failed here</b>
<p>Classical wave theory predicted that any light, given enough time, should free electrons — and that brighter light should release faster ones. Neither happened. Einstein explained it by treating light as packets (photons) whose energy depends on <b>frequency, not intensity</b>. This earned him the Nobel Prize.</p></div></div>

<h2>Radioactivity</h2>
<p>Some nuclei are unstable and change into more stable ones by emitting radiation. This is a <strong>random, spontaneous</strong> process unaffected by temperature, pressure, chemical combination or electric fields.</p>

<h3>Comparison of the three emissions</h3>

<table class="ledger" style="margin:1.2em 0">
  <thead><tr><th>Property</th><th>Alpha (α)</th><th>Beta (β)</th><th>Gamma (γ)</th></tr></thead>
  <tbody>
    <tr><td><b>What it is</b></td><td>Helium nucleus ⁴₂He</td><td>Fast electron ⁰₋₁e</td><td>EM radiation (high-frequency photon)</td></tr>
    <tr><td><b>Charge</b></td><td>+2</td><td>−1</td><td>0</td></tr>
    <tr><td><b>Mass</b></td><td>4 u (heavy)</td><td>1/1840 u</td><td>0</td></tr>
    <tr><td><b>Penetration</b></td><td>Stopped by paper</td><td>Stopped by thin aluminium</td><td>Needs thick lead or concrete</td></tr>
    <tr><td><b>Ionisation</b></td><td><b>Very strong</b></td><td>Moderate</td><td>Weak</td></tr>
    <tr><td><b>Effect of field</b></td><td>Deflected one way</td><td>Opposite way</td><td>Not deflected</td></tr>
    <tr><td><b>Speed</b></td><td>Slowest</td><td>Fast</td><td>Speed of light</td></tr>
  </tbody>
</table>

<div class="note note-warn"><span class="ico">⚠</span><div><b>The trade-off is the question</b>
<p>The <b>more penetrating</b> a radiation, the <b>less ionising</b> it is. Gamma penetrates deeply but barely ionises; alpha barely penetrates but ionises intensely. Expect a question pairing these two properties.</p></div></div>

<h3>Nuclear equations</h3>
<p>Balance both the <strong>mass number (top)</strong> and the <strong>atomic number (bottom)</strong> across the arrow.</p>

<div class="formula-box">
  <div class="fb-head">The three decay types</div>
  <div class="formula-row"><div class="fname">Alpha decay</div>
    <div class="fexpr"><sup>A</sup><sub>Z</sub>X → <sup>A−4</sup><sub>Z−2</sub>Y + <sup>4</sup><sub>2</sub>He</div>
    <div class="fnote">Mass drops 4, atomic number drops 2.</div></div>
  <div class="formula-row"><div class="fname">Beta decay</div>
    <div class="fexpr"><sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z+1</sub>Y + <sup>0</sup><sub>−1</sub>e</div>
    <div class="fnote">Mass unchanged, atomic number rises 1 — a neutron became a proton.</div></div>
  <div class="formula-row"><div class="fname">Gamma emission</div>
    <div class="fexpr"><sup>A</sup><sub>Z</sub>X* → <sup>A</sup><sub>Z</sub>X + γ</div>
    <div class="fnote">No change in A or Z — only energy is released.</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">3</span> Alpha decay equation</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Uranium-238 decays by alpha emission</div>
    ²³⁸₉₂U → ? + ⁴₂He</div>
    <div class="step"><div class="step-l">Balance the mass number</div>
    238 = A + 4 → A = 234</div>
    <div class="step"><div class="step-l">Balance the atomic number</div>
    92 = Z + 2 → Z = 90 (thorium)</div>
    <div class="ans">Answer: ²³⁴₉₀Th</div>
  </div>
</div>

<div class="example">
  <div class="example-h"><span class="num">4</span> Beta decay equation</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Carbon-14 decays by beta emission</div>
    ¹⁴₆C → ? + ⁰₋₁e</div>
    <div class="step"><div class="step-l">Balance mass</div>
    14 = A + 0 → A = 14</div>
    <div class="step"><div class="step-l">Balance atomic number</div>
    6 = Z + (−1) → Z = 7 (nitrogen)</div>
    <div class="ans">Answer: ¹⁴₇N</div>
  </div>
</div>

<h2>Half-life</h2>
<p>The <strong>half-life (T½)</strong> is the time taken for half the radioactive nuclei in a sample to decay. It is a statistical property of the sample — for any single atom the decay time is unpredictable.</p>

<div class="formula-box">
  <div class="fb-head">Half-life calculations</div>
  <div class="formula-row"><div class="fname">After n half-lives</div>
    <div class="fexpr">N = N₀ × (½)<sup>n</sup>, &nbsp; n = t / T<sub>½</sub></div></div>
  <div class="formula-row"><div class="fname">Finding n</div>
    <div class="fexpr">n = log(N/N₀) ÷ log(½)</div></div>
  <div class="formula-row"><div class="fname">Radioactive decay constant</div>
    <div class="fexpr">N = N₀ e<sup>−λt</sup>, &nbsp; T<sub>½</sub> = ln2 / λ</div></div>
</div>

<div class="example">
  <div class="example-h"><span class="num">5</span> Working through half-lives</div>
  <div class="example-b">
    <div class="step"><div class="step-l">Given</div>
    A sample has a half-life of 5 days and starts with 160 g.</div>
    <div class="step"><div class="step-l">Step through the periods</div>
    Start: 160 g<br>
    5 days: 80 g<br>
    10 days: 40 g<br>
    15 days: 20 g<br>
    20 days: 10 g</div>
    <div class="step"><div class="step-l">Or using the formula</div>
    After 20 days, n = 20/5 = 4 half-lives<br>
    N = 160 × (½)⁴ = 160/16 = 10 g</div>
    <div class="ans">Answer: 10 g remaining after 20 days</div>
  </div>
</div>

<div class="note note-tip"><span class="ico">💡</span><div><b>The fraction that survives</b>
<p>After <b>4 half-lives</b>, the fraction remaining is (½)⁴ = <b>1/16</b>. Learn the first few: ½, ¼, ⅛, 1/16, 1/32. Most exam questions need only these five.</p></div></div>

<h2>Uses and hazards</h2>
<ul>
<li><strong>Alpha</strong> — smoke detectors (the ionised air allows a small current; smoke disrupts it). Also highly ionising, so dangerous inside the body.</li>
<li><strong>Beta</strong> — thickness gauge in rolling mills; carbon-14 dating of organic remains.</li>
<li><strong>Gamma</strong> — sterilising medical equipment, cancer radiotherapy, radiography of metal parts.</li>
<li><strong>X-rays</strong> — medical imaging; penetrating but ionising, so dose is limited.</li>
</ul>
<p><strong>Safety:</strong> time (minimise exposure), distance (intensity falls with the square of distance), shielding (appropriate material for each type).</p>

<h2>Chapter recap</h2>
<ul>
<li>A = protons + neutrons; Z = protons = electrons in a neutral atom; N = A − Z.</li>
<li>E = hf; threshold frequency must be exceeded or nothing is emitted.</li>
<li>α = paper, strong ionisation; β = aluminium; γ = lead, weak ionisation.</li>
<li>Balance A and Z in every nuclear equation.</li>
<li>N = N₀(½)ⁿ where n = t/T½.</li>
</ul>
`,
  quiz: [
    { q: 'In the notation ᴬᵤX, Z represents the number of', opts: ['Neutrons', 'Protons', 'Nucleons', 'Electrons in all shells'], a: 1, why: 'Z is the atomic number — the number of protons, which also equals the number of electrons in a neutral atom.' },
    { q: 'An atom has a mass number 40 and atomic number 18. The number of neutrons is', opts: ['40', '18', '22', '58'], a: 2, why: 'N = A − Z = 40 − 18 = 22.' },
    { q: 'Alpha particles are deflected by an electric field', opts: ['Not at all', 'In the same direction as beta', 'In the opposite direction to beta', 'Only when the field is weak'], a: 2, why: 'Alpha particles are positively charged and beta negatively charged, so they deflect in opposite directions.' },
    { q: 'Which radiation is stopped by a sheet of paper?', opts: ['Alpha', 'Beta', 'Gamma', 'X-ray'], a: 0, why: 'Alpha particles are large and slow, and are absorbed by paper or a few centimetres of air.' },
    { q: 'Which radiation is the most penetrating?', opts: ['Alpha', 'Beta', 'Gamma', 'Proton'], a: 2, why: 'Gamma needs thick lead or concrete to stop it — but it is the least ionising.' },
    { q: 'The relationship between ionisation and penetration is', opts: ['More penetrating = more ionising', 'More penetrating = less ionising', 'They are unrelated', 'Both are always maximum for alpha'], a: 1, why: 'There is a trade-off: gamma penetrates deeply but ionises weakly; alpha ionises strongly but penetrates very little.' },
    { q: 'In beta decay, the mass number', opts: ['Decreases by 4', 'Decreases by 1', 'Stays the same', 'Increases by 1'], a: 2, why: 'A neutron converts to a proton plus an electron — the electron leaves, so the nucleon count is unchanged.' },
    { q: '²³⁸₉₂U emits an alpha particle. The product has atomic number', opts: ['92', '94', '90', '88'], a: 2, why: 'Alpha emission reduces Z by 2: 92 − 2 = 90 (thorium).' },
    { q: 'Gamma radiation is', opts: ['A helium nucleus', 'A fast-moving electron', 'A high-frequency electromagnetic wave', 'A proton'], a: 2, why: 'Gamma is electromagnetic radiation with no charge or mass.' },
    { q: 'The half-life of a substance is the time for', opts: ['All nuclei to decay', 'Half the nuclei to decay', 'The mass to double', 'One nucleus to decay'], a: 1, why: 'Half-life is the time in which half of the original radioactive nuclei remain undecayed.' },
    { q: 'A sample of 80 g has a half-life of 4 days. After 12 days, how much remains?', opts: ['40 g', '20 g', '10 g', '5 g'], a: 2, why: '12 days = 3 half-lives: 80 → 40 → 20 → 10 g.' },
    { q: 'The photoelectric effect shows that light behaves as', opts: ['A pure wave', 'A stream of energy packets (photons)', 'A longitudinal wave', 'A stationary field'], a: 1, why: 'Electron emission depends on photon energy hf, demonstrating the particle nature of light.' },
    { q: 'Below the threshold frequency, increasing the light intensity causes', opts: ['Electrons to be emitted', 'No electrons to be emitted', 'Faster electrons', 'Double the emission rate'], a: 1, why: 'If hf is below the work function, no electron can escape regardless of brightness.' },
    { q: 'Increasing the intensity of light above the threshold frequency produces', opts: ['More emitted electrons', 'Faster emitted electrons', 'Electrons of greater kinetic energy', 'Longer wavelength photons'], a: 0, why: 'Intensity means more photons per second, so more electrons are released — but each has the same maximum kinetic energy.' },
    { q: 'Planck’s constant has the value', opts: ['6.6 × 10⁻³⁴ J s', '3 × 10⁸ m/s', '1.6 × 10⁻¹⁹ C', '9.8 m/s²'], a: 0, why: 'h = 6.6 × 10⁻³⁴ J s, used in E = hf.' },
    { q: 'A radioactive source has a half-life of 10 days. The fraction remaining after 30 days is', opts: ['1/2', '1/4', '1/8', '1/32'], a: 2, why: '30 days = 3 half-lives → (½)³ = 1/8.' }
  ]
});
