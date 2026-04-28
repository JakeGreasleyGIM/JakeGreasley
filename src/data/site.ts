/**
 * Single source of content for the site. Edit here to update copy without
 * touching layout.
 */

export const site = {
  name: "Jake Greasley",
  formalName: "Mr. Jacob Greasley",
  initials: "JG",
  domain: "jakegreasley.com",
  email: "jake@getgim.com",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jakegreasley" },
    { label: "GIM", href: "https://gimpropertymanagement.com" },
    { label: "OmniForce", href: "https://omni-force.com" },
  ],

  hero: {
    eyebrow: "Massachusetts · Operating since 2014",
    firstName: "Jake",
    lastName: "Greasley",
    roles: [
      "Founder",
      "Operator",
      "Builder",
      "Property manager",
      "PropTech founder",
      "Insurance broker",
    ],
    tagline:
      "Building a vertically integrated property-services platform from the New England coast — managing communities, writing the software they run on, and underwriting the policies that protect them.",
    cta: { label: "See the work", href: "#about" },
  },

  about: {
    eyebrow: "01 — A profile",
    kicker: "Who is",
    title: "Mister Greasley.",
    deck: "The quiet operator turning a New England property management firm into a vertically integrated platform.",
    leadDropCap: "M",
    lead:
      "ister Jacob Greasley is the founder and principal of GIM Property Management, the chief executive of the proptech startup OmniForce, and the licensed broker behind HOA Insurance Agency. He runs all three from the same New England headquarters — and a fourth, the field-services arm BuzzKill, from the same kitchen table.",
    paragraphs: [
      "By the time he completed his Master of Science in Financial Management at Boston University in 2022, he had already returned to the family operating tradition that would become GIM — adding modern systems, audited books, and a software stack he would eventually write himself.",
      "His undergraduate work at Oklahoma State, where he completed three concurrent Bachelor of Science degrees in Statistics, Economics, and Management Information Systems, prepared him for the unusual posture he holds today: equally at home in a board meeting, in QuickBooks, in EZLynx, and in the OmniForce codebase.",
      "Before founding the platform, Greasley spent four years inside a Fortune 1000 insurer in investment management and risk — a period he credits with the conviction that property management, when properly capitalized and properly instrumented, is one of the most attractive recurring-revenue businesses in the United States.",
      "Today, GIM serves more than sixty community associations and three thousand units across Massachusetts, Rhode Island, and southern New Hampshire. OmniForce, in closed beta, is the operating system the next generation of managers will run on. HOA Insurance Agency closes the loop. BuzzKill walks the routes.",
      "His brother and longtime operating partner, Mike Greasley, runs field operations and the vendor network. The two are widely regarded among regional peers as among the most disciplined operators in the New England property-services market.",
    ],
    captions: [
      { k: "Born", v: "Massachusetts" },
      { k: "Education", v: "Oklahoma State (B.S. ×3) · Boston University (M.S.)" },
      { k: "Designations", v: "CFA Level I · MA-licensed insurance producer" },
      { k: "Headquarters", v: "Marlborough, Massachusetts" },
      { k: "Family", v: "Greasley operating family · brother Mike at GIM" },
    ],
  },

  pullQuote: {
    body: "Property management, run like a business — the software, the books, the insurance, the trades, every layer owned and earned.",
    attribution: "Mr. Greasley, on the operating thesis behind the platform",
  },

  stats: {
    eyebrow: "02 — By the numbers",
    items: [
      { value: 4, suffix: "", label: "Operating companies" },
      { value: 60, suffix: "+", label: "Associations under management" },
      { value: 3000, suffix: "+", label: "Units served across MA · RI · NH" },
      { value: 57, suffix: "", label: "Cities in the service area" },
    ],
  },

  ventures: {
    eyebrow: "03 — Crowning works",
    title: "Four companies, one operating thesis.",
    items: [
      {
        index: "01",
        name: "GIM Property Management",
        category: "Property management · Est. 2014",
        year: "2014",
        status: "Active",
        blurb:
          "The flagship. HOA, condo, commercial, and rental property management across Massachusetts, Rhode Island, and southern New Hampshire — built on transparent reporting, modern systems, and a Diamond Chapter Partner relationship with CAI New England.",
        accent: "#7ac142",
      },
      {
        index: "02",
        name: "OmniForce",
        category: "PropTech SaaS · Closed beta",
        year: "2024",
        status: "Building",
        blurb:
          "The platform replacing Buildium and CDK for the next generation of property managers. Cases, properties, vendors, contracts, leads, projects, and ePay — one system, real-time, with GIM as the first production customer.",
        accent: "#5ce1e6",
      },
      {
        index: "03",
        name: "HOA Insurance Agency",
        category: "Insurance brokerage",
        year: "2025",
        status: "Active",
        blurb:
          "An independent agency built specifically for the master, D&O, and umbrella policies condos and HOAs actually need — placed by people who manage these communities for a living, not call-center generalists.",
        accent: "#d4af37",
      },
      {
        index: "04",
        name: "BuzzKill Pest Control",
        category: "Field services",
        year: "2023",
        status: "Active",
        blurb:
          "Recurring pest control routes structured around HOA common-area contracts and in-unit upsells — the trades layer of the platform, owned outright instead of subcontracted.",
        accent: "#ff8e6a",
      },
    ],
  },

  timeline: {
    eyebrow: "04 — A short biography in chapters",
    items: [
      {
        n: "I",
        year: "2014",
        title: "The Foundation.",
        body: "GIM Property Management is established to bring transparent, modern operations to community associations across MetroWest Massachusetts.",
      },
      {
        n: "II",
        year: "2018 – 2022",
        title: "The Education.",
        body: "Mister Greasley completes a triple-major B.S. at Oklahoma State (Statistics, Economics, MIS) followed by an M.S. in Financial Management from Boston University. CFA Level I in the same window.",
      },
      {
        n: "III",
        year: "2018 – 2022",
        title: "The Apprenticeship.",
        body: "Four years inside a Fortune 1000 insurer in investment management and risk analysis — the discipline that would later define how GIM closes its books and how OmniForce architects its data model.",
      },
      {
        n: "IV",
        year: "2023",
        title: "The Trades.",
        body: "BuzzKill Pest Control launches as the first wholly owned field-services arm of the platform. The thesis: own the routes, do not subcontract them.",
      },
      {
        n: "V",
        year: "2024",
        title: "The Apparatus.",
        body: "OmniForce enters closed beta with GIM as its production customer — the first all-in-one operating system written by operators, for operators.",
      },
      {
        n: "VI",
        year: "2025",
        title: "The Vertical.",
        body: "HOA Insurance Agency opens, completing the loop: management, software, insurance, and trades — every layer owned by the same operating company.",
      },
    ],
  },

  principles: {
    eyebrow: "05 — The operating doctrine",
    title: "How the work gets done.",
    items: [
      {
        n: "I",
        title: "Own the stack you run on.",
        body: "The vendors, the software, the insurance, the books. If a layer is critical to the customer outcome, it shouldn't be someone else's roadmap.",
      },
      {
        n: "II",
        title: "Boring, audited, repeatable.",
        body: "Close by the 15th. Reserve studies on time. Vendor invoices reconciled, not approximated. The work is unglamorous on purpose — that is where the trust lives.",
      },
      {
        n: "III",
        title: "Hire for slope, not intercept.",
        body: "Mister Greasley backed Mike on operations and the OmniForce engineering team because of who they were becoming, not the title on their last business card.",
      },
      {
        n: "IV",
        title: "Build the tools you wished existed.",
        body: "OmniForce exists because no off-the-shelf product spoke to maintenance, accounting, leasing, and resident communication as one system. So he wrote it.",
      },
      {
        n: "V",
        title: "Local first, then density.",
        body: "Fifty-seven cities across MA, RI, and southern NH — the platform is not interested in being national. It is interested in being unavoidable in New England.",
      },
      {
        n: "VI",
        title: "Compound across decades.",
        body: "Eleven years on GIM. Years more on the platform, the agency, the trades. The compounding only starts after most operators have already gotten bored and quit.",
      },
    ],
  },

  press: {
    eyebrow: "06 — Affiliations",
    items: [
      "CAI New England (Diamond Partner)",
      "BBB Accredited",
      "MA Chapter 183A",
      "Boston University · M.S. Finance",
      "Oklahoma State · B.S. ×3",
      "CFA Level I",
    ],
  },

  contact: {
    eyebrow: "07 — Reach Mister Greasley",
    pretitle: "Let's talk about something",
    titleAccent: "you actually want to build.",
    body:
      "Best paths in: a New England property management or insurance opportunity, a serious PropTech conversation, or a craftsman operator looking for a long-term home. Open inbox, fast replies.",
    cta: "Open a direct line",
  },
};

export type Site = typeof site;
