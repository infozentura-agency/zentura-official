export type ResponsiveImage = { src: string; srcSet?: string; alt: string; width: number; height: number };
export type Project = { slug: string; title: string; category: string; year: string; image: string; imageSrcSet?: string; imageAlt: string; width: number; height: number; aspect?: "product" | "device"; featured?: boolean; imageKind?: "official" | "editorial"; status?: "client" | "concept"; description: string };

export const projects: Project[] = [
  { 
    slug: "renewably-uk", 
    title: "Renewably UK", 
    category: "Product · Engineering", 
    year: "2026", 
    featured: true, 
    image: "/work1.webp", 
    imageAlt: "Representative solar installation on a commercial roof in the United Kingdom", 
    width: 1440, 
    height: 1080, 
    imageKind: "editorial",
    description: "A product platform supporting renewable installers with company verification, accreditation, protection, records, and project evidence in one auditable workflow."
  },
  { 
    slug: "freelance-skills-africa", 
    title: "Freelance Skills Africa", 
    category: "Product · Learning", 
    year: "[confirm]", 
    image: "/work2.webp", 
    imageAlt: "Freelancers collaborating around a table", 
    width: 1440, 
    height: 900, 
    imageKind: "editorial",
    description: "A learning-product engagement whose confirmed brief, scope, and outcomes are still being prepared for publication."
  },
  { 
    slug: "ultra-chef", 
    title: "Ultra Chef", 
    category: "Product · Hospitality", 
    year: "[confirm]", 
    image: "/work3.webp", 
    imageAlt: "Chef finishing a plated dish in a working kitchen", 
    width: 1024, 
    height: 1280, 
    aspect: "device", 
    imageKind: "editorial",
    description: "A hospitality-product engagement whose confirmed brief, scope, and outcomes are still being prepared for publication."
  },
  { 
    slug: "orbit-logistics", 
    title: "Orbit Logistics", 
    category: "Product · Concept", 
    year: "2026", 
    image: "/work4.webp", 
    imageAlt: "Concept logistics dashboard displayed on a desktop monitor and tablet", 
    width: 1440, 
    height: 994, 
    imageKind: "editorial", 
    status: "concept",
    description: "An exploration into predictive logistics and supply chain visualization. Orbit focuses on surfacing potential disruptions before they impact delivery, using multi-layered data visualizations to show the ripple effects of weather, traffic, and port congestion across a global network."
  },
  { 
    slug: "lumen-health", 
    title: "Lumen Health", 
    category: "Product · Concept", 
    year: "2026", 
    image: "/work5.webp", 
    imageAlt: "Concept healthcare application displayed on two phones", 
    width: 1200, 
    height: 1504, 
    aspect: "device", 
    imageKind: "editorial", 
    status: "concept",
    description: "A patient-centric health tracking app designed for chronic condition management. Lumen focuses on high readability and low-friction data entry, making it easier for patients to track symptoms and share accurate history with their healthcare providers without feeling overwhelmed."
  },
  { 
    slug: "common-ground", 
    title: "Common Ground", 
    category: "Product · Concept", 
    year: "2026", 
    image: "/work6.webp", 
    imageAlt: "Concept community finance platform displayed on a laptop and phone", 
    width: 1440, 
    height: 1080, 
    imageKind: "editorial", 
    status: "concept",
    description: "A financial platform for community-led development projects. Common Ground makes complex investment structures legible to non-professional investors, allowing communities to pool resources and fund local infrastructure with transparent governance and automated dividend distribution."
  },
];

export const renewablyImages = {
  wide: { src: "/work1.webp", alt: "Representative solar installation on a commercial roof in the United Kingdom", width: 1440, height: 1080 },
  portrait: { src: "/work2.webp", alt: "Representative close view of a technician inspecting solar panels", width: 1200, height: 1500 },
};

export const navItems = [{ label: "Work", to: "/work" }, { label: "Services", to: "/services" }, { label: "Studio", to: "/studio" }, { label: "Blog", to: "/blog" }] as const;
export const footerItems = [{ label: "Careers", to: "/careers" }, { label: "Privacy", to: "/privacy" }, { label: "Terms", to: "/terms" }] as const;

export type Article = { slug: string; date: string; title: string; summary: string; topics: readonly string[]; sections: readonly { heading: string; paragraphs: readonly string[] }[] };
export const articles: Article[] = [
  { slug: "design-and-engineering-in-one-loop", date: "18.09.2026", title: "Design and engineering belong in one loop", summary: "A practical note on reducing handoffs without reducing scrutiny by keeping the people who shape the product close to those who build it.", topics: ["Product design", "Engineering", "Operations"], sections: [
    { heading: "The handoff is the warning", paragraphs: ["A handoff is the moment product intent starts losing context. The designer explains a finished answer, the engineer translates it into a working system, and the questions that shaped the interface become separated from the constraints that shape the code.", "The problem is not that people have different disciplines. The problem is that the disciplines meet too late, after important decisions have already hardened. When engineering is treated as a downstream service, the product loses the chance to adapt to technical reality early."] },
    { heading: "Work from the same problem", paragraphs: ["Design and engineering should begin with the same problem statement, the same operating constraints, and the same definition of what a useful outcome looks like. That shared context makes critique more specific and trade-offs more honest.", "Review working software together. Keep empty states, data rules, edge cases, and delivery risks visible while the interface is still flexible enough to improve. A designer who understands the database schema makes better interface decisions; an engineer who understands the user intent writes more resilient code."] },
    { heading: "One loop, clear ownership", paragraphs: ["Integrated work does not mean blurred responsibility. It means every decision has an owner, every constraint can be challenged, and nobody has to reconstruct why the product works the way it does.", "The result is not fewer questions. It is better questions asked early enough to matter. By closing the gap between intent and implementation, we create products that are more coherent and easier to maintain."] },
  ] },
  { slug: "what-a-product-review-should-find", date: "02.09.2026", title: "What a product review should find", summary: "The decisions, risks, and opportunities worth surfacing before delivery begins, moving beyond surface-level interface critiques.", topics: ["Product review", "Strategy", "Roadmaps"], sections: [
    { heading: "Review the operating reality", paragraphs: ["A useful product review begins behind the interface. It asks what the customer is trying to complete, what the internal team must do to support that journey, and which system constraints are shaping both sides.", "Screens alone rarely explain why a product feels difficult. The causes often live in permissions, unclear ownership, duplicated data, or a roadmap built around requests rather than decisions. A good review identifies these structural gaps."] },
    { heading: "Separate signal from taste", paragraphs: ["A review should distinguish usability problems from visual preference. It should identify where customers lose confidence, where teams repeat manual work, and where the product promises more clarity than the underlying system can provide.", "The output should be a short sequence of decisions: what needs attention now, what can wait, who owns the next move, and what evidence would change the priority. This turns a critique into a plan."] },
    { heading: "Leave with a usable next step", paragraphs: ["A long findings document is not a strategy. The review is valuable when it changes the order of work and gives the team a clearer way to judge the next release. We focus on turning observations into actionable roadmap items that reduce risk and increase confidence."] },
  ] },
  { slug: "why-handoffs-are-a-symptom", date: "27.08.2026", title: "Why handoffs are usually a symptom, not a stage", summary: "Sequential delivery often reveals a context problem rather than a process problem. We explore why adding more documentation rarely fixes a broken loop.", topics: ["Teams", "Delivery", "Operations"], sections: [
    { heading: "The visible problem", paragraphs: ["Teams usually notice handoffs when work starts bouncing backward: a design cannot support real data, an implementation misses an important state, or a release solves the ticket without solving the customer problem.", "Adding a longer specification can make the transfer clearer, but it does not restore the shared reasoning that disappeared before the transfer began. The documentation becomes a wall rather than a bridge."] },
    { heading: "The underlying condition", paragraphs: ["Handoffs become expensive when disciplines are organized around separate definitions of done. Design completes screens. Engineering completes tickets. Product completes a roadmap. Nobody owns whether those outputs form one coherent experience.", "The practical correction is to bring the people making consequential decisions into the same review loop, from framing through release. This shared ownership ensures that every discipline is working toward the same outcome."] },
    { heading: "A better boundary", paragraphs: ["Keep specialist ownership, but share context. A designer should not prescribe architecture, and an engineer should not silently rewrite product intent. Both should be able to see the constraint, explain the trade-off, and agree on the consequence. This creates a culture of mutual respect and better product outcomes."] },
  ] },
  { slug: "roadmaps-should-expose-decisions", date: "14.08.2026", title: "A roadmap should expose decisions, not hide them", summary: "How to turn a list of promised features into a working view of priorities, uncertainty, and the evidence a team still needs.", topics: ["Roadmaps", "Strategy", "Operations"], sections: [
    { heading: "A list is not a direction", paragraphs: ["A feature list records requests, but it rarely explains why one item matters more than another. Without that reasoning, the roadmap becomes a queue whose order is challenged whenever a new request arrives.", "A useful roadmap connects work to a customer or operating change. It states the decision being made, the assumption behind it, and the signal that would justify continuing, changing direction, or stopping."] },
    { heading: "Show what is uncertain", paragraphs: ["False precision makes planning feel safer while making adaptation harder. Separate committed delivery from discovery, and label the questions that could materially change scope.", "This gives leaders a clearer view of risk and gives the team permission to learn before implementation becomes expensive. Uncertainty is not a failure of planning; unmanaged uncertainty is."] },
    { heading: "Review outcomes, not activity", paragraphs: ["A roadmap review should ask what changed because of the work. Shipping remains important, but completion alone does not show whether the product became clearer, more useful, or easier to operate.", "When evidence and trade-offs remain attached to each initiative, the roadmap becomes a decision system rather than a presentation artifact."] },
  ] },
  { slug: "designing-for-operational-edge-cases", date: "30.07.2026", title: "Designing for the operational edge cases", summary: "Why permissions, missing data, exceptions, and recovery paths deserve attention before a polished happy path.", topics: ["Product design", "Engineering", "Delivery"], sections: [
    { heading: "The product lives between ideal states", paragraphs: ["Most demonstrations begin with complete data and a cooperative user. Real products also contain interrupted tasks, delayed approvals, conflicting records, and people with different levels of authority.", "These conditions are not secondary details. They determine whether a product remains trustworthy when the ordinary path stops being ordinary."] },
    { heading: "Model the state before the screen", paragraphs: ["Before refining layout, name the states an object can occupy, who can move it between those states, and what evidence each transition requires. This work reveals gaps that a screen-by-screen design process can miss.", "Design and engineering should review that model together. The interface needs language people understand, while the implementation needs rules the system can enforce consistently."] },
    { heading: "Make recovery legible", paragraphs: ["An error message is useful only when it helps someone decide what to do next. Good recovery design explains what happened, what remains safe, who can resolve the issue, and whether the action can be retried.", "Treating exceptions as part of the core product produces calmer interfaces and fewer improvised support processes after release."] },
  ] },
  { slug: "what-to-document-in-a-small-product-team", date: "16.07.2026", title: "What a small product team should document", summary: "A compact documentation practice for preserving decisions without turning the work into administration.", topics: ["Teams", "Operations", "Delivery"], sections: [
    { heading: "Document the reason", paragraphs: ["Small teams do not need a document for every conversation. They do need a durable record of consequential decisions: the problem, the options considered, the chosen direction, and the cost accepted with it.", "Recording the reason prevents the same debate from restarting without new evidence and helps a future teammate understand why an apparently unusual constraint exists."] },
    { heading: "Keep it close to the work", paragraphs: ["Documentation decays when it lives far from the artifact it describes. Product rules should sit near the relevant flow, technical decisions near the code, and operating procedures where the responsible team already works.", "Use links and short summaries rather than copying the same explanation into several tools. One maintained source is more useful than several complete-looking sources that disagree."] },
    { heading: "Write for the next decision", paragraphs: ["The goal is not to preserve every detail. It is to give the next person enough context to make a good decision without reconstructing the entire project.", "Review documentation when the product changes, remove obsolete instructions, and mark unresolved questions clearly. A small, current record creates more leverage than a large archive."] },
  ] },
];

// Full roster. Ishrat is hidden from public pages for now — flip
// TEAM_HIDDEN_SLUGS to an empty array to restore her.
const TEAM_HIDDEN_SLUGS = ["ishrat-jahan-rintu"] as const;
const allTeam = [
  { slug: "makibul-hossain-tamim", name: "Makibul Hossain Tamim", role: "CEO", focus: "Company direction and partnerships", image: { src: "/team1.jpg", alt: "Portrait of Makibul Hossain Tamim", width: 1200, height: 1500 } },
  { slug: "saad-rayhan", name: "Saad Rayhan", role: "COO", focus: "Product design and operations", image: { src: "/team2.webp", alt: "Portrait of Saad Rayhan", width: 1200, height: 1500 } },
  { slug: "joy-sarkar", name: "Joy Sarkar", role: "CTO", focus: "Engineering direction and delivery", image: { src: "/team3.webp", alt: "Portrait of Joy Sarkar", width: 1200, height: 1500 } },
  { slug: "ishrat-jahan-rintu", name: "Ishrat Jahan Rintu", role: "CFO · Full-stack developer", focus: "Finance and full-stack delivery", image: { src: "/team4.webp", alt: "Portrait of Ishrat Jahan Rintu", width: 1200, height: 1500 } },
] as const;
export const team = allTeam.filter((member) => !(TEAM_HIDDEN_SLUGS as readonly string[]).includes(member.slug));
export const studioImages = {
  collaboration: { src: "/studio1.webp", alt: "Colleagues discussing work in a modern office", width: 1440, height: 961 },
  systems: { src: "/studio2.webp", alt: "A modern product workspace with multiple screens", width: 1440, height: 960 },
  engineering: { src: "/studio3.webp", alt: "Software development work on a laptop", width: 1440, height: 960 },
  culture: { src: "/studio4.webp", alt: "Colleagues sharing a light moment in a modern office", width: 1440, height: 960 },
};

export const approvedCtas = { home: "GET A QUOTE", work: "GET A QUOTE", study: "GET A QUOTE", studio: "GET A QUOTE", writing: "GET A QUOTE" } as const;
