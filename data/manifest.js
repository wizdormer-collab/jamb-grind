/* JAMB 2027 Prep — subject manifest
   Content files call JAMB.addChapter(...) / JAMB.setMock(...). Order doesn't matter. */

window.JAMB = window.JAMB || {};

JAMB.subjects = [
  {
    id: 'physics',
    name: 'Physics',
    short: 'Physics',
    icon: '⚛',
    accent: '#2b50c8',
    examQ: 40,
    tagline: 'Motion, energy, waves, electricity and the modern world.',
    blurb: 'From measurement and units through mechanics, thermal physics, waves, optics, electricity and modern physics — taught from scratch.'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    short: 'Chemistry',
    icon: '⚗',
    accent: '#0d7a6f',
    examQ: 40,
    tagline: 'Matter, reactions and the language of elements.',
    blurb: 'Separation techniques, atomic structure, bonding, stoichiometry, energetics, equilibrium, redox and introductory organic chemistry.'
  },
  {
    id: 'biology',
    name: 'Biology',
    short: 'Biology',
    icon: '🌿',
    accent: '#2f7d32',
    examQ: 40,
    tagline: 'Living organisms, from the cell to the ecosystem.',
    blurb: 'Cell biology, nutrition, transport, respiration, reproduction, genetics, ecology and evolution — with the high-yield topics flagged.'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    short: 'Maths',
    icon: '∑',
    accent: '#b3541e',
    examQ: 40,
    tagline: 'Number, algebra, geometry, calculus and statistics.',
    blurb: 'The five JAMB mathematics sections, worked through step by step with heavy emphasis on exam technique.'
  },
  {
    id: 'english',
    name: 'Use of English',
    short: 'English',
    icon: '✎',
    accent: '#9b2c6f',
    examQ: 60,
    tagline: 'Comprehension, lexis & structure, oral forms.',
    blurb: 'All three sections of the compulsory Use of English paper, including the prescribed reading text.'
  }
];

JAMB.content = {};

JAMB.subject = function (id) {
  return JAMB.subjects.find(function (s) { return s.id === id; });
};

JAMB.ensure = function (id) {
  if (!JAMB.content[id]) JAMB.content[id] = { chapters: [], mock: [] };
  return JAMB.content[id];
};

JAMB.addChapter = function (subjectId, chapter) {
  var c = JAMB.ensure(subjectId);
  c.chapters.push(chapter);
};

JAMB.setMock = function (subjectId, questions) {
  var c = JAMB.ensure(subjectId);
  c.mock = questions;
};

JAMB.chapters = function (id) {
  return (JAMB.content[id] && JAMB.content[id].chapters) || [];
};

JAMB.mockOf = function (id) {
  return (JAMB.content[id] && JAMB.content[id].mock) || [];
};

/* ---- UTME exam facts ---- */
JAMB.exam = {
  subjectsTotal: 4,
  questionsTotal: 180,
  durationMin: 120,
  englishQ: 60,
  otherQ: 40,
  dates: {
    profile: '2026-12-10',
    /* Official 2027 registration + exam dates not yet announced.
       These are historical-pattern estimates, clearly labelled in the UI. */
    registerEst: '2027-01-25',
    examEstStart: '2027-04-15',
    examEstEnd: '2027-04-25'
  }
};
