/**
 * Single source of content for the site. Edit here to update copy without
 * touching layout.
 */

export const site = {
  name: "Jake Greasley",
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
    cta: { label: "See the work", href: "#ventures" },
  },

  manifesto: {
    eyebrow: "01 — Approach",
    body: [
      "Property management,",
      "run like a business —",
      "the software, the books,",
      "the insurance, the trades,",
      "every layer owned and earned.",
    ],
    signature: "— J.G.",
  },

  stats: {
    eyebrow: "02 — By the numbers",
    items: [
      { value: 4, suffix: "", label: "Operating companies" },
      { value: 60, suffix: "+", label: "Associations under management" },
      { value: 3000, suffix: "+", label: "Units served across MA · RI · NH" },
      { value: 57, suffix: "", label: "Cities in our service area" },
    ],
  },

  ventures: {
    eyebrow: "03 — Ventures",
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

  principles: {
    eyebrow: "04 — Operating Principles",
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
        body: "We backed Mike on operations and an engineering team on OmniForce because of who they were becoming, not the title on their last business card.",
      },
      {
        n: "IV",
        title: "Build the tools you wished existed.",
        body: "OmniForce exists because no off-the-shelf product spoke to maintenance, accounting, leasing, and resident communication as one system. So we wrote it.",
      },
      {
        n: "V",
        title: "Local first, then density.",
        body: "57 cities across MA, RI, and southern NH — we are not interested in being national. We are interested in being unavoidable in New England.",
      },
      {
        n: "VI",
        title: "Compound across decades.",
        body: "Eleven years on GIM. Years more on the platform, the agency, the trades. The compounding only starts after most operators have already gotten bored and quit.",
      },
    ],
  },

  press: {
    eyebrow: "05 — Affiliations",
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
    eyebrow: "06 — Contact",
    pretitle: "Let's talk about something",
    titleAccent: "you actually want to build.",
    body:
      "Best paths in: a New England property management or insurance opportunity, a serious PropTech conversation, or a craftsman operator looking for a long-term home. Open inbox, fast replies.",
    cta: "Open a direct line",
  },
};

export type Site = typeof site;
