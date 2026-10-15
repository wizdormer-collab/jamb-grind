/* JAMB 2027 Prep — Use of English mock exam (60 questions, UTME pattern)
   Structure: Section A Q1–25 (comprehension, cloze, reading text),
              Section B Q26–50 (lexis & structure),
              Section C Q51–60 (oral forms).

   NOTE (2026-10): Q16–25 are marked "NOVEL-SLOT". On the real paper these
   ten questions come from the prescribed 2027 reading text (novel), which
   JAMB has not yet announced. When it is, replace these ten items with
   questions on that novel — see the swap-in note at the top of
   data/english/ch15-18.js. The substitutes below are comprehension and
   grammar items so the mock still runs the correct 60-question pattern. */

JAMB.setMock('english', [
  /* ===== Section A — Q1–5: comprehension passage ===== */
  { q: 'Passage: “The harmattan does not merely arrive; it announces itself. Three days before the dust appears, the mango trees begin to shed, the wells drop half their depth, and the old women of the village start mixing shea butter with charcoal powder for their cracked lips. By the time the first grey veil settles over the rooftops, nothing about the season is news to anyone.” — According to the passage, the harmattan announces itself by', opts: ['Filling the sky with dust at once', 'Changes that begin before the dust arrives', 'The singing of old women', 'The flooding of the village wells'], a: 1, why: 'Three days before the dust, the shedding, the dropping wells and the preparations begin.' },
  { q: 'Passage: “The harmattan does not merely arrive; it announces itself. Three days before the dust appears, the mango trees begin to shed, the wells drop half their depth, and the old women of the village start mixing shea butter with charcoal powder for their cracked lips. By the time the first grey veil settles over the rooftops, nothing about the season is news to anyone.” — The expression “announces itself” suggests the season is treated as', opts: ['A visitor with a warning', 'A thief', 'A festival', 'A punishment'], a: 0, why: 'To announce oneself is what a visitor does before entering — the metaphor gives the season arrival-ritual.' },
  { q: 'Passage: “The harmattan does not merely arrive; it announces itself. Three days before the dust appears, the mango trees begin to shed, the wells drop half their depth, and the old women of the village start mixing shea butter with charcoal powder for their cracked lips. By the time the first grey veil settles over the rooftops, nothing about the season is news to anyone.” — “The first grey veil” refers to', opts: ['A woman’s head covering', 'The haze of dust over the rooftops', 'A cloud of smoke', 'Morning fog from the river'], a: 1, why: 'The veil is the dust haze settling over the roofs — a metaphor for its soft grey cover.' },
  { q: 'Passage: “The harmattan does not merely arrive; it announces itself. Three days before the dust appears, the mango trees begin to shed, the wells drop half their depth, and the old women of the village start mixing shea butter with charcoal powder for their cracked lips. By the time the first grey veil settles over the rooftops, nothing about the season is news to anyone.” — It can be inferred that the villagers', opts: ['Fear the harmattan greatly', 'Are experienced in coping with the season', 'Leave the village each harmattan', 'Prefer the harmattan to the rains'], a: 1, why: 'Their early preparations and unbothered familiarity show long experience of the season.' },
  { q: 'Passage: “The harmattan does not merely arrive; it announces itself. Three days before the dust appears, the mango trees begin to shed, the wells drop half their depth, and the old women of the village start mixing shea butter with charcoal powder for their cracked lips. By the time the first grey veil settles over the rooftops, nothing about the season is news to anyone.” — The main idea of the passage is that', opts: ['The harmattan destroys the village crops', 'The harmattan is easily recognised through early signs', 'Villagers dislike the dry season', 'Wells always dry up in November'], a: 1, why: 'Every sentence lists a sign that lets people know it is coming — the passage is about its recognisability.' },

  /* ===== Section A — Q6–10: cloze passage ===== */
  { q: 'Passage: “A nation’s progress depends (6) ___ the quality of its citizens. No amount of oil wealth can replace (7) ___ education and sound morals. Parents must therefore (8) ___ their children in the way of honesty, and schools must (9) ___ their duty with diligence. Only (10) ___ can such a society grow truly great.” — Choose the option for gap (6).', opts: ['of', 'on', 'in', 'for'], a: 1, why: 'Depend on is the fixed partnership.' },
  { q: 'Gap (7): “No amount of oil wealth can replace ___ education and sound morals.”', opts: ['a', 'an', 'the', 'no article'], a: 2, why: 'The definite article points back to the specific quality already named.' },
  { q: 'Gap (8): “Parents must therefore ___ their children in the way of honesty.”', opts: ['teach', 'learn', 'study', 'teached'], a: 0, why: 'Teach is the only verb that takes children as object and “in the way of” as complement.' },
  { q: 'Gap (9): “Schools must ___ their duty with diligence.”', opts: ['do', 'make', 'act', 'carry'], a: 0, why: 'Do one’s duty is the standard collocation.' },
  { q: 'Gap (10): “Only ___ can such a society grow truly great.”', opts: ['then', 'than', 'these', 'them'], a: 0, why: '“Only then” points back to the conditions just listed and inverts correctly: “Only then can such a society grow.”' },

  /* ===== Section A — Q11–15: more comprehension skills ===== */
  { q: '“The chairman’s speech was long but ___.” Which word best completes the sentence?', opts: ['fruitful', 'empty', 'pointless', 'tedious'], a: 0, why: 'The “but” demands a contrast — fruitful opposes the negativity of long-windedness.' },
  { q: 'Choose the option nearest in meaning to: “The minister’s reply was evasive.”', opts: ['Clear', 'Ambiguous', 'Courteous', 'Lengthy'], a: 1, why: 'Evasive = avoiding the point, which leaves the meaning ambiguous to the hearer.' },
  { q: 'In comprehension, a “NOT” question is answered by', opts: ['Choosing the most reasonable option', 'Finding the three options the passage supports and rejecting them', 'Selecting the longest option', 'Using outside knowledge'], a: 1, why: 'Three options are provable from the text; the unsupported one is the answer.' },
  { q: 'The best summary of a paragraph is one that', opts: ['Copies its longest sentence', 'Keeps its main idea and drops the examples', 'Adds the writer’s likely opinion', 'Lists every detail in order'], a: 1, why: 'Summary keeps the central claim and discards supporting detail.' },
  { q: '“He is too by half.” The sentence means he is', opts: ['Excessively so, and to a fault', 'Rather agreeable', 'Half-hearted', 'Two-faced'], a: 0, why: 'Too by half is an idiom of excess — beyond the reasonable measure.' },

  /* ===== NOVEL-SLOT Q16–25: reading-text substitutes =====
     Replace with questions on the announced 2027 prescribed novel. */
  { q: 'Passage: “When the headmaster discovered that the teacher had been collecting fees the PTA never approved, he did not shout. He simply asked for the register, read the names aloud, and let the silence do the rest of the work.” — The headmaster’s quietness suggests', opts: ['He was indifferent to the matter', 'He trusted the teacher completely', 'He was confident that the facts alone would convict', 'He feared the teacher'], a: 2, why: 'Reading the names and letting silence work shows a man certain that the evidence needs no argument.' },
  { q: 'Passage: “When the headmaster discovered that the teacher had been collecting fees the PTA never approved, he did not shout. He simply asked for the register, read the names aloud, and let the silence do the rest of the work.” — “Let the silence do the rest of the work” is an example of', opts: ['Personification', 'Simile', 'Hyperbole', 'Onomatopoeia'], a: 0, why: 'Silence is given the human capacity to do work.' },
  { q: '“The old woman was a fortress of secrets.” This means she', opts: ['Lived in a strong building', 'Kept secrets securely and impenetrably', 'Was always under siege', 'Refused to speak at all'], a: 1, why: 'The metaphor transfers the fortress’s impregnability to her discretion.' },
  { q: 'Passage: “Ada returned the money she found, though her family had not eaten since morning.” The extract presents Ada as', opts: ['Selfish and calculating', 'Honest even under pressure', 'Careless with money', 'Frightened of her parents'], a: 1, why: 'Returning the money despite hunger shows integrity tested and held.' },
  { q: 'Passage: “Ada returned the money she found, though her family had not eaten since morning.” The word “though” here introduces', opts: ['A reason for returning the money', 'A contrast that raises the moral weight of her act', 'A command', 'An example of hunger'], a: 1, why: 'Though sets the hardship against the honesty — the contrast makes the deed remarkable.' },
  { q: 'A character who “swallowed his words” in a quarrel has', opts: ['Eaten something', 'Chosen to stop speaking and hold back the insult', 'Spoken very fast', 'Apologised loudly'], a: 1, why: 'The idiom means to check an angry reply before it is uttered.' },
  { q: '“The market was a river of voices.” The dominant figure and its effect are', opts: ['Simile — comparing the crowd’s flow to water', 'Metaphor — turning the market into water', 'Hyperbole — exaggerating the noise', 'Irony — mocking the traders'], a: 1, why: 'The market IS a river, without like or as — a direct metaphor conveying endless movement.' },
  { q: 'Passage: “He gave the beggar a note, then turned away quickly, as if embarrassed by his own generosity.” The tone of the sentence is', opts: ['Admiring', 'Gently satirical', 'Furious', 'Mournful'], a: 1, why: 'Exposing the donor’s discomfort mocks kindness that wants applause — mild satire.' },
  { q: 'Passage: “He gave the beggar a note, then turned away quickly, as if embarrassed by his own generosity.” It can be inferred that the man', opts: ['Regretted giving the money', 'Was not used to being generous', 'Hated the beggar', 'Had no money of his own'], a: 1, why: 'Embarrassment at his own kindness suggests the act is unfamiliar rather than regretted.' },
  { q: 'The safest way to answer questions on an unseen story extract is to', opts: ['Import your knowledge of similar novels', 'Take every answer from the printed extract itself', 'Guess from the question wording', 'Answer only the first and last questions'], a: 1, why: 'The extract is the only evidence the question honours.' },

  /* ===== Section B — Q26–30: synonyms ===== */
  { q: 'Choose the option NEAREST in meaning to the word in bold: The witness gave a <b>frank</b> account of the event.', opts: ['Deceptive', 'Candid', 'Bitter', 'Lengthy'], a: 1, why: 'Frank = honest and direct.' },
  { q: 'Choose the option NEAREST in meaning to the word in bold: The new policy will <b>curb</b> inflation.', opts: ['Accelerate', 'Check', 'Conceal', 'Measure'], a: 1, why: 'To curb = to restrain or check.' },
  { q: 'Choose the option NEAREST in meaning to the word in bold: Her remarks were <b>scathing</b>.', opts: ['Bitingly critical', 'Gently warm', 'Vague', 'Cheerful'], a: 0, why: 'Scathing = severely wounding in criticism.' },
  { q: 'Choose the option NEAREST in meaning to the word in bold: The evidence was <b>substantial</b>.', opts: ['Thin', 'Subtle', 'Sufficient in amount', 'Suspicious'], a: 2, why: 'Substantial = considerable, of real bulk.' },
  { q: 'Choose the option NEAREST in meaning to the word in bold: The two plans are <b>mutually exclusive</b>.', opts: ['Complementary', 'Unworkable', 'Incompatible with each other', 'Identical'], a: 2, why: 'Mutually exclusive = one rules out the other.' },

  /* ===== Section B — Q31–35: antonyms ===== */
  { q: 'Choose the option OPPOSITE in meaning to the word in bold: The chairman was <b>adamant</b>.', opts: ['Resolute', 'Yielding', 'Angry', 'Careful'], a: 1, why: 'Adamant = unyielding; its opposite is yielding.' },
  { q: 'Choose the option OPPOSITE in meaning to the word in bold: His conduct was <b>exemplary</b>.', opts: ['Praiseworthy', 'Reprehensible', 'Ordinary', 'Careless only'], a: 1, why: 'Exemplary = worthy of imitation; reprehensible = worthy of blame.' },
  { q: 'Choose the option OPPOSITE in meaning to the word in bold: The report was <b>brief</b>.', opts: ['Terse', 'Lengthy', 'Sharp', 'Clear'], a: 1, why: 'Brief’s opposite is lengthy.' },
  { q: 'Choose the option OPPOSITE in meaning to the word in bold: The judge was <b>impartial</b>.', opts: ['Fair', 'Biased', 'Strict', 'Silent'], a: 1, why: 'Impartial = showing no bias; biased is the direct opposite.' },
  { q: 'Choose the option OPPOSITE in meaning to the word in bold: The medicine had a <b>benign</b> effect.', opts: ['Harmful', 'Gentle', 'Delayed', 'Strong'], a: 0, why: 'Benign = gentle and harmless; harmful opposes it.' },

  /* ===== Section B — Q36–40: sentence interpretation ===== */
  { q: '“The project is feasible but not advisable.” This means that', opts: ['It cannot be done at all', 'It can be done, but wisdom argues against it', 'It is both cheap and wise', 'Nobody supports it'], a: 1, why: 'Feasible = possible; the second clause withdraws the recommendation.' },
  { q: '“Few of the roads were motorable.” This means that', opts: ['No road was passable', 'Many roads were passable', 'Only a small number were passable', 'All roads were bad'], a: 2, why: 'Few = a small number, not zero and not many.' },
  { q: '“He was hard pressed to explain.” He', opts: ['Explained easily', 'Found it very difficult to explain', 'Refused to explain', 'Was eager to explain'], a: 1, why: 'Hard pressed = under pressure, struggling.' },
  { q: '“The scheme has seen better days.” The scheme', opts: ['Is at its peak now', 'Was once better than it is now', 'Will improve soon', 'Never worked'], a: 1, why: 'The idiom laments present decline from an earlier standard.' },
  { q: '“Not a few of the delegates opposed the motion.” “Not a few” means', opts: ['Very few', 'A considerable number', 'None at all', 'Exactly two'], a: 1, why: 'The double negative idiomatic “not a few” = quite many.' },

  /* ===== Section B — Q41–50: grammar and prepositions ===== */
  { q: 'Neither the teacher nor the students ___ aware of the change.', opts: ['was', 'were', 'is', 'has been'], a: 1, why: 'Either…or/nor agrees with the nearer subject — “students” is plural.' },
  { q: 'If I ___ the principal, I would extend the holiday.', opts: ['am', 'was', 'were', 'be'], a: 2, why: 'The unreal condition takes “were” for all persons.' },
  { q: 'She insisted that he ___ present at the meeting.', opts: ['is', 'be', 'was', 'will be'], a: 1, why: 'Insist that triggers the subjunctive “be”.' },
  { q: 'Hardly ___ the door when the telephone rang.', opts: ['I opened', 'had I opened', 'did I open', 'I had opened'], a: 1, why: 'Hardly opens the sentence, forcing inversion — and pairs with “when”.' },
  { q: 'No sooner had the train left ___ the alarm sounded.', opts: ['when', 'than', 'that', 'then'], a: 1, why: 'No sooner pairs with than.' },
  { q: 'The committee ___ divided in their opinions over the venue.', opts: ['is', 'was', 'are', 'has been'], a: 2, why: 'When members disagree individually, the collective noun takes the plural verb.' },
  { q: 'He congratulated her ___ winning the scholarship.', opts: ['for', 'on', 'of', 'with'], a: 1, why: 'Congratulate somebody on something.' },
  { q: 'The witness was prevented ___ giving evidence by illness.', opts: ['of', 'from', 'to', 'with'], a: 1, why: 'Prevent from + -ing is the fixed form.' },
  { q: 'The book is composed ___ six chapters.', opts: ['from', 'of', 'by', 'with'], a: 1, why: 'Be composed of — parts making a whole.' },
  { q: 'Choose the correct sentence:', opts: ['Each of the boys have a book.', 'Each of the boys has a book.', 'Each of the boys are having books.', 'Each of the boys were given book.'], a: 1, why: 'Each is singular regardless of the of-phrase that follows.' },

  /* ===== Section C — Q51–60: oral forms ===== */
  { q: 'Which word has the same vowel sound as “man”?', opts: ['Cane', 'Men', 'Main', 'Pan'], a: 3, why: 'Pan shares the short a of man; cane and main glide, men takes short e.' },
  { q: 'Which word has a different vowel sound from the rest?', opts: ['Boot', 'Food', 'Moon', 'Book'], a: 3, why: 'Book takes the short u of “good”; boot, food and moon take long uː.' },
  { q: 'Which word begins with the same consonant sound as “knee”?', opts: ['Kite', 'Nice', 'Knack', 'Grade'], a: 2, why: 'The k is silent in knack and knee — both begin with n.' },
  { q: 'The “th” in “this” is pronounced', opts: ['Voiceless, as in thin', 'Voiced, as in the', 'Like s', 'Like t'], a: 1, why: 'This, that, the and other carry the voiced ð.' },
  { q: 'Which word rhymes with “knew”?', opts: ['Now', 'Through', 'No', 'Near'], a: 1, why: 'Knew and through both end /uː/.' },
  { q: 'Which word rhymes with “found”?', opts: ['Font', 'Fond', 'Round', 'Friend'], a: 2, why: 'Found and round both end /aʊnd/.' },
  { q: 'In “banana”, the stress falls on', opts: ['The first syllable', 'The second syllable', 'The third syllable', 'All equally'], a: 1, why: 'ba·NA·na — the middle syllable takes the beat.' },
  { q: 'In the noun “record”, the stress falls on', opts: ['The first syllable', 'The second syllable', 'The final syllable', 'Both equally'], a: 0, why: 'RE-cord the noun; re-CORD the verb.' },
  { q: '“I did NOT say he stole it.” The emphasis suggests that', opts: ['Someone else said it', 'Someone else stole it', 'He did not steal it at all', 'Nothing was stolen'], a: 1, why: 'Stress on NOT cancels the whole accusation that follows — someone else was the thief.' },
  { q: '“Is that YOUR house?” The emphatic stress suggests that', opts: ['The speaker admires the house', 'The house was thought to belong to someone else', 'The house is new', 'The speaker wants to buy it'], a: 1, why: 'Stressed YOUR corrects an assumption of someone else’s ownership.' }
]);
