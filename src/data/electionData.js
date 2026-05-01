// ─── Election Steps ───────────────────────────────────────────
export const ELECTION_STEPS = [
  {
    id: 1,
    icon: '📢',
    emoji: '📢',
    title: 'Election Notification',
    subtitle: 'The Call to Democracy',
    description:
      'The Election Commission of India issues a formal notification announcing the upcoming election schedule. This official gazette notification sets the entire electoral process in motion and establishes key dates for all subsequent stages.',
    detail:
      'Once published, political parties, candidates, and the entire administrative machinery gear up for the democratic exercise. The notification specifies the constituency schedule, polling dates, and deadlines for every subsequent stage.',
    tags: ['Official', 'Government', 'ECI'],
    color: 'cobalt',
    bgHue: 'from-cobalt/10 to-cobalt-light/5',
    accent: '#1B3A6B',
    accentLight: 'rgba(27,58,107,0.12)',
  },
  {
    id: 2,
    icon: '📝',
    emoji: '📝',
    title: 'Nomination Filing',
    subtitle: 'Candidates Step Forward',
    description:
      'Eligible citizens who wish to contest the election submit their nomination papers to the Returning Officer along with required documents and a security deposit as mandated by the Representation of the People Act.',
    detail:
      'Candidates must fulfill constitutional eligibility criteria including minimum age, citizenship, and not holding certain offices. Party symbols are allocated to recognised political parties while independent candidates may choose from a list of free symbols.',
    tags: ['Candidates', 'Documents', 'Legal'],
    color: 'sage',
    bgHue: 'from-sage/10 to-sage-light/5',
    accent: '#2A6B4A',
    accentLight: 'rgba(42,107,74,0.12)',
  },
  {
    id: 3,
    icon: '🔍',
    emoji: '🔍',
    title: 'Scrutiny of Nominations',
    subtitle: 'Verifying Eligibility',
    description:
      'The Returning Officer carefully scrutinizes every nomination paper for completeness and validity. Any person can raise objections to a nomination, which the Returning Officer then adjudicates on the spot.',
    detail:
      'Documents are verified for authenticity — age proof, citizenship, affidavit of criminal and financial records, and identity verification. Invalid nominations are summarily rejected. This stage ensures that only genuinely eligible candidates proceed to the contest.',
    tags: ['Verification', 'Legal', 'Scrutiny'],
    color: 'gold',
    bgHue: 'from-gold/10 to-gold-light/5',
    accent: '#C9A84C',
    accentLight: 'rgba(201,168,76,0.15)',
  },
  {
    id: 4,
    icon: '📣',
    emoji: '📣',
    title: 'Election Campaigning',
    subtitle: 'The Battle of Ideas',
    description:
      'Political parties and candidates actively seek votes through rallies, public meetings, door-to-door canvassing, media campaigns, and social media outreach. The Model Code of Conduct strictly governs permissible campaign activities.',
    detail:
      'The MCC prohibits use of government resources for campaigning, appeals to caste or religion to seek votes, bribery, and inflammatory speeches. The Election Commission monitors compliance through flying squads, static surveillance teams, and observers.',
    tags: ['Parties', 'MCC', 'Public'],
    color: 'crimson',
    bgHue: 'from-crimson/10 to-crimson-light/5',
    accent: '#A8252A',
    accentLight: 'rgba(168,37,42,0.12)',
  },
  {
    id: 5,
    icon: '🗳️',
    emoji: '🗳️',
    title: 'Voting Day',
    subtitle: 'Democracy in Action',
    description:
      'On the designated polling date, registered voters proceed to their allocated polling stations and cast their votes using Electronic Voting Machines (EVMs). The Election Commission deploys security forces to ensure peaceful and free polling.',
    detail:
      'Each EVM has a Balloting Unit with candidate names and party symbols. Voters press the blue button against their chosen candidate. A VVPAT (Voter Verifiable Paper Audit Trail) machine simultaneously prints a slip for transparency. Campaigns must cease 48 hours before polling.',
    tags: ['Citizens', 'EVM', 'VVPAT', 'Democracy'],
    color: 'cobalt',
    bgHue: 'from-cobalt/10 to-cobalt-lighter/5',
    accent: '#2A5BA8',
    accentLight: 'rgba(42,91,168,0.12)',
  },
  {
    id: 6,
    icon: '🔢',
    emoji: '🔢',
    title: 'Counting of Votes',
    subtitle: 'Numbers Tell the Story',
    description:
      'After polling concludes, EVMs are stored in secured strong rooms under CCTV surveillance. On counting day, votes are tallied at designated Counting Centres under the supervision of the Returning Officer with candidates and their counting agents present.',
    detail:
      'Counting proceeds round by round with the results of each round announced. Observers appointed by the ECI ensure transparency. Any discrepancy between EVM count and VVPAT slips is investigated. The candidate with the highest valid votes in each constituency wins (first-past-the-post system).',
    tags: ['Officials', 'Counting Centre', 'Transparent'],
    color: 'sage',
    bgHue: 'from-sage/10 to-sage-light/5',
    accent: '#2A6B4A',
    accentLight: 'rgba(42,107,74,0.12)',
  },
  {
    id: 7,
    icon: '🏆',
    emoji: '🏆',
    title: 'Result Declaration',
    subtitle: 'The People Have Spoken',
    description:
      'The Returning Officer formally declares the winning candidate after all votes are counted. The elected representative receives an official election certificate. The complete process culminates in the formation of the government.',
    detail:
      'Results are simultaneously published on the ECI website in real time. The winning party or coalition with a majority forms the government. The President (for Lok Sabha) or Governor (for State Assemblies) invites the leader to form the government. Democracy completes its full cycle.',
    tags: ['Winner', 'Certificate', 'Government'],
    color: 'gold',
    bgHue: 'from-gold/10 to-gold-light/5',
    accent: '#C9A84C',
    accentLight: 'rgba(201,168,76,0.15)',
  },
]

// ─── Timeline Data ─────────────────────────────────────────────
export const TIMELINE_EVENTS = [
  {
    id: 1,
    date: '15 Jan 2024',
    shortDate: 'Jan 15',
    phase: 'Notification',
    title: 'Election Schedule Announced',
    description: 'The Election Commission issues the official gazette notification kicking off the 2024 General Elections.',
    status: 'completed',
    icon: '📢',
  },
  {
    id: 2,
    date: '22 Jan 2024',
    shortDate: 'Jan 22',
    phase: 'Nominations',
    title: 'Nomination Filing Opens',
    description: 'Eligible candidates begin submitting their nomination papers at the Returning Officer\'s office.',
    status: 'completed',
    icon: '📝',
  },
  {
    id: 3,
    date: '29 Jan 2024',
    shortDate: 'Jan 29',
    phase: 'Nominations',
    title: 'Last Date for Nominations',
    description: 'Final deadline for filing nomination papers. All pending submissions must be completed by 3 PM.',
    status: 'completed',
    icon: '⏰',
  },
  {
    id: 4,
    date: '01 Feb 2024',
    shortDate: 'Feb 01',
    phase: 'Scrutiny',
    title: 'Scrutiny of Nominations',
    description: 'Returning Officers review all filed nomination papers. Objections heard and ruled upon.',
    status: 'completed',
    icon: '🔍',
  },
  {
    id: 5,
    date: '03 Feb 2024',
    shortDate: 'Feb 03',
    phase: 'Withdrawal',
    title: 'Last Date for Withdrawal',
    description: 'Candidates may withdraw from the contest. Final list of contesting candidates published.',
    status: 'completed',
    icon: '📋',
  },
  {
    id: 6,
    date: '04–20 Feb 2024',
    shortDate: 'Feb 4–20',
    phase: 'Campaigning',
    title: 'Active Campaign Period',
    description: 'Political parties and candidates actively campaign. Model Code of Conduct in full force.',
    status: 'active',
    icon: '📣',
  },
  {
    id: 7,
    date: '18 Feb 2024',
    shortDate: 'Feb 18',
    phase: 'Silence',
    title: 'Campaign Silence Period Begins',
    description: 'All election campaigning must cease 48 hours before polling day under section 126 of R.P. Act.',
    status: 'upcoming',
    icon: '🔇',
  },
  {
    id: 8,
    date: '20 Feb 2024',
    shortDate: 'Feb 20',
    phase: 'Voting',
    title: 'Polling Day',
    description: 'Registered voters across all constituencies exercise their democratic franchise at polling stations.',
    status: 'upcoming',
    icon: '🗳️',
  },
  {
    id: 9,
    date: '23 Feb 2024',
    shortDate: 'Feb 23',
    phase: 'Counting',
    title: 'Vote Counting Day',
    description: 'EVMs opened at counting centres. Results tallied constituency by constituency under strict supervision.',
    status: 'upcoming',
    icon: '🔢',
  },
  {
    id: 10,
    date: '23–24 Feb 2024',
    shortDate: 'Feb 23–24',
    phase: 'Results',
    title: 'Results Declared',
    description: 'Winning candidates formally declared. Government formation process begins.',
    status: 'upcoming',
    icon: '🏆',
  },
]

// ─── FAQ Data ──────────────────────────────────────────────────
export const FAQ_DATA = [
  {
    id: 1,
    category: 'Eligibility',
    question: 'Who is eligible to vote in Indian elections?',
    answer:
      'Any citizen of India who is 18 years of age or above on the qualifying date (January 1 of the election year), is ordinarily resident in the constituency, and is registered in the electoral roll is eligible to vote. Non-Resident Indians (NRIs) registered as overseas electors can also vote in person at their original constituency.',
  },
  {
    id: 2,
    category: 'Process',
    question: 'How do I cast my vote on election day?',
    answer:
      'On polling day: (1) Proceed to your designated polling station (find it on your voter slip or the NVSP portal). (2) Join the queue and present your Voter ID or any approved alternate photo ID. (3) The polling officer verifies your name in the roll and applies indelible ink to your left index finger. (4) Enter the voting compartment and press the blue button next to your chosen candidate on the EVM. (5) Check the VVPAT slip to confirm your vote was recorded correctly.',
  },
  {
    id: 3,
    category: 'Documents',
    question: 'What documents are accepted at the polling booth?',
    answer:
      'Your primary document is the Voter ID card (EPIC). The Election Commission also accepts 12 alternative photo identity documents: Aadhaar Card, MNREGA Job Card, Passbooks with photo issued by Bank/Post Office, Health Insurance Smart Card (issued under the scheme of Ministry of Labour), Driving License, PAN Card, Smart Card issued by RGI under NPR, Indian Passport, Pension document with photograph, Service Identity Cards (Central/State Govt/PSU/Public Limited Companies), and Official Identity Cards issued to Members of Parliament/MLAs/MLCs.',
  },
  {
    id: 4,
    category: 'Registration',
    question: 'How do I register as a voter for the first time?',
    answer:
      'You can register online at voters.eci.gov.in or the Voter Helpline App by filling Form 6. You will need to upload a recent passport-size photograph, proof of age (birth certificate, 10th marksheet, or Aadhaar), and proof of address (Aadhaar, utility bill, bank passbook, or rental agreement). You can also submit the form offline at your local Electoral Registration Officer\'s (ERO) office. After verification, your name is added to the electoral roll.',
  },
  {
    id: 5,
    category: 'Technology',
    question: 'What is an EVM and how does it work?',
    answer:
      'An EVM (Electronic Voting Machine) is a standalone, non-networked, battery-operated device used in Indian elections since 1999. It consists of two units connected by a 5-metre cable: the Control Unit (with the polling officer) and the Balloting Unit (inside the voting compartment). When a voter presses the blue button next to a candidate, the vote is stored electronically in the EVM\'s memory. The EVM also works with a VVPAT machine that prints a paper slip showing the candidate and party symbol for 7 seconds before it drops into a sealed box — providing a physical audit trail.',
  },
  {
    id: 6,
    category: 'Rights',
    question: 'What is NOTA and when should I use it?',
    answer:
      'NOTA (None Of The Above) is a ballot option introduced by the Supreme Court in 2013 that allows you to formally reject all candidates contesting from your constituency without abstaining from voting. It appears as the last option on the EVM. While NOTA votes are counted and disclosed, the candidate with the highest positive votes wins regardless — NOTA does not trigger a re-election. It serves as a powerful democratic protest signal and its data is used by the Election Commission to assess voter sentiment.',
  },
  {
    id: 7,
    category: 'Rules',
    question: 'What is the Model Code of Conduct (MCC)?',
    answer:
      'The Model Code of Conduct is a set of guidelines voluntarily agreed upon by political parties and enforced by the Election Commission from the announcement of the election schedule until the declaration of results. It prohibits: use of government resources (vehicles, offices, officials) for campaigning; announcement of new government schemes/policies; bribery, voter inducement or intimidation; appeals to caste, religion, or communal sentiments; and inflammatory or divisive speeches. Violations can lead to warnings, case registration, and even candidate disqualification.',
  },
  {
    id: 8,
    category: 'Postal',
    question: 'Can I vote by postal ballot if I am away?',
    answer:
      'Certain categories of voters can use postal ballots: (1) Service voters — members of the armed forces, BSF, CRPF, and their spouses. (2) Persons with disabilities and those above 85 years of age (optional). (3) Essential services personnel on polling duty. (4) Electors subject to preventive detention. NRIs registered as overseas voters can vote in person only at their registered constituency — there is currently no postal or proxy ballot facility for NRIs, though this is under policy consideration.',
  },
]

// ─── Chat Bot Responses ────────────────────────────────────────
export const BOT_KNOWLEDGE = {
  greetings: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'namaste'],
  topics: {
    vote: {
      keywords: ['how to vote', 'cast vote', 'voting process', 'polling day', 'cast my vote', 'vote kaise', 'vote karein'],
      response: `**How to vote on election day:**\n\n1️⃣ **Find your polling station** — Check your Voter Slip or visit voters.eci.gov.in\n2️⃣ **Carry valid ID** — Voter ID card (EPIC) or any of 12 approved alternate IDs\n3️⃣ **Join the queue** — Present your ID to the polling officer\n4️⃣ **Indelible ink** — The officer will mark your left index finger\n5️⃣ **Cast your vote** — Press the blue button next to your chosen candidate on the EVM\n6️⃣ **Verify via VVPAT** — Check the 7-second paper slip to confirm your vote\n\nThe entire process takes about 5–10 minutes. Polling hours are typically 7 AM – 6 PM.`,
    },
    eligible: {
      keywords: ['who can vote', 'eligible to vote', 'eligibility', 'age to vote', 'voting age', 'kaun vote kar sakta'],
      response: `**Voter Eligibility in India:**\n\n✅ **Indian citizen** — Must be a citizen of India\n✅ **Age 18+** — Must be 18 years or older on January 1 of the election year\n✅ **Resident voter** — Ordinarily resident in the constituency\n✅ **Registered** — Name must be on the electoral roll\n\n❌ **Not eligible if:** Declared of unsound mind by a court, disqualified under any law for corrupt practices, or not a citizen of India.\n\nNRIs registered as overseas electors can vote in person at their original constituency.`,
    },
    documents: {
      keywords: ['document', 'id proof', 'voter id', 'what to carry', 'identity proof', 'aadhaar', 'passport', 'driving license', 'pan card'],
      response: `**Accepted Documents at Polling Booth:**\n\n🪪 **Primary:** Voter ID Card (EPIC)\n\n**12 Alternate Photo IDs accepted:**\n• Aadhaar Card\n• Passport\n• Driving License\n• PAN Card\n• MNREGA Job Card\n• Bank/Post Office Passbook with photo\n• Health Insurance Smart Card\n• Smart Card under NPR\n• Pension document with photo\n• Service ID (Govt/PSU/Public Ltd Company)\n• MP/MLA/MLC identity card\n\nCarry any ONE of these. Expired Voter IDs are also accepted if your name appears on the electoral roll.`,
    },
    register: {
      keywords: ['register', 'registration', 'enroll', 'voter list', 'electoral roll', 'new voter', 'first time voter', 'form 6'],
      response: `**How to Register as a Voter:**\n\n**Online (Recommended):**\n🌐 Visit voters.eci.gov.in or download the Voter Helpline App\n📋 Fill Form 6 with your details\n📸 Upload photograph, age proof & address proof\n\n**Offline:**\n🏢 Submit Form 6 at your local Electoral Registration Officer (ERO)\n\n**Required Documents:**\n• Recent passport-size photo\n• Age proof (Birth certificate, 10th certificate, or Aadhaar)\n• Address proof (Aadhaar, utility bill, or bank passbook)\n\nYour name will be added after verification, usually within 30 days.`,
    },
    evm: {
      keywords: ['evm', 'electronic voting machine', 'vvpat', 'voting machine', 'ballot'],
      response: `**About EVMs & VVPATs:**\n\n🗳️ **EVM (Electronic Voting Machine)**\nStandalone, non-networked, battery-operated device. Two units:\n• **Control Unit** — with the polling officer\n• **Balloting Unit** — in the voting compartment\n\nPress the blue button next to your chosen candidate to vote.\n\n📄 **VVPAT (Voter Verifiable Paper Audit Trail)**\nPrints a paper slip with candidate name & symbol visible through a glass window for 7 seconds before it drops into a sealed box.\n\n🔒 **Security:** EVMs cannot be hacked remotely — they are not connected to the internet or any network. They are sealed, numbered, and verified before every election.`,
    },
    nota: {
      keywords: ['nota', 'none of the above', 'reject candidates', 'no candidate'],
      response: `**NOTA — None Of The Above:**\n\n🚫 NOTA is a ballot option that lets you formally reject all contesting candidates.\n\n📍 **Where to find it:** Last option on the EVM balloting unit\n\n**Key facts:**\n• Introduced by Supreme Court in September 2013\n• NOTA votes are counted and publicly disclosed\n• The candidate with the most positive votes still wins, even if NOTA gets more\n• It does NOT trigger a re-election\n• Serves as a powerful democratic protest signal\n\nYour vote is still recorded and counted — you participate without endorsing any candidate.`,
    },
    mcc: {
      keywords: ['model code', 'mcc', 'code of conduct', 'campaign rules', 'election rules'],
      response: `**Model Code of Conduct (MCC):**\n\nThe MCC is the ECI's rulebook for parties and candidates during elections.\n\n📅 **When it applies:** From schedule announcement until results are declared\n\n❌ **Prohibited under MCC:**\n• Using government vehicles/offices for campaigning\n• Announcing new govt schemes or policies\n• Bribery, voter inducement or intimidation\n• Appeals to caste or religion for votes\n• Inflammatory or divisive speeches\n• Using places of worship for campaigning\n\n✅ **Violations can lead to:**\n• FIR and criminal charges\n• Election Commission notices\n• Disqualification of the candidate`,
    },
    process: {
      keywords: ['election process', 'how elections work', 'steps', 'stages', 'election system', 'election kaise hota'],
      response: `**Indian Election Process — 7 Stages:**\n\n1️⃣ **Election Notification** — ECI announces the schedule\n2️⃣ **Nomination Filing** — Candidates submit papers & deposit\n3️⃣ **Scrutiny** — Returning Officer verifies nominations\n4️⃣ **Campaigning** — Parties seek votes (MCC applies)\n5️⃣ **Voting Day** — Citizens cast votes on EVMs\n6️⃣ **Counting** — Votes tallied at counting centres\n7️⃣ **Result Declaration** — Winner receives election certificate\n\nVisit the **Election Steps** page for a detailed interactive walkthrough of each stage! 🗳️`,
    },
    postal: {
      keywords: ['postal ballot', 'postal vote', 'absentee', 'away from home', 'nri vote', 'overseas'],
      response: `**Postal Ballot — Voting from Afar:**\n\n**Who can use postal ballot:**\n• Armed forces personnel (and spouses)\n• Paramilitary forces (BSF, CRPF, etc.)\n• Persons with disabilities (optional)\n• Voters aged 85+ (optional)\n• Essential services personnel on polling duty\n• Persons under preventive detention\n\n**NRIs:** Currently NRIs must vote in person at their original registered constituency. There is no postal or proxy ballot for NRIs yet, though the ECI has been considering it.\n\nApply for postal ballot to your Returning Officer before the specified deadline.`,
    },
    default: {
      response: `I can help you with information about the Indian election process! 🗳️\n\nHere are some topics I know well:\n• **How to vote** — step-by-step polling day guide\n• **Who can vote** — eligibility criteria\n• **Required documents** — IDs accepted at booth\n• **Voter registration** — how to enroll\n• **EVMs & VVPATs** — technology explained\n• **NOTA** — rejecting all candidates\n• **Model Code of Conduct** — campaign rules\n• **Postal ballot** — voting from outside constituency\n• **Election process** — all 7 stages overview\n\nWhat would you like to know?`,
    },
  },
  greetingResponse: `Namaste! 🙏 Welcome to ElectAssist — your interactive guide to the Indian democratic process.\n\nI'm here to help you understand everything about elections — from voter registration and polling procedures to EVMs, NOTA, and the Model Code of Conduct.\n\n**What can I help you with today?**`,
}

export const QUICK_QUESTIONS = [
  'How do I vote?',
  'Who can vote?',
  'What documents to carry?',
  'How does EVM work?',
  'What is NOTA?',
  'How to register as a voter?',
]
