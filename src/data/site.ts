export type Locale = "de" | "en";

export const site = {
  email: "romangutmannmobile@gmail.com",
  github: "https://github.com/Moavalon",
  linkedin: "https://www.linkedin.com/in/roman-gutmann-823021283/",
  location: {
    de: "Traiskirchen, Niederösterreich",
    en: "Traiskirchen, Lower Austria",
  },
} as const;

export const copy = {
  de: {
    metaTitle: "Roman Gutmann | IT-Applikationsentwickler",
    metaDescription: "Portfolio von Roman Gutmann – Full-Stack-orientierter IT-Allrounder mit Erfahrung in Webentwicklung, Datenbanken und technischem Support.",
    nav: { profile: "Profil", skills: "Kompetenzen", experience: "Erfahrung", projects: "Projekte", contact: "Kontakt" },
    languageLabel: "English version",
    availability: "Offen für neue Aufgaben",
    heroEyebrow: "Offen für den Einstieg in ein IT-Team",
    heroTitleA: "Ich verbinde Softwareentwicklung mit",
    heroTitleB: "echter IT-Praxis",
    heroText: "IT-Applikationsentwickler, Full-Stack-orientierter Entwickler und IT-Allrounder aus Niederösterreich – mit Erfahrung von Hardware und Support bis zu modernen Webanwendungen.",
    heroPrimary: "Projekte ansehen",
    heroCv: "Lebenslauf herunterladen",
    heroContact: "E-Mail schreiben",
    proof: ["LAP 2026 mit Auszeichnung", "Über 20 Jahre Technik- & Kundenerfahrung", "Frontend · Backend · Datenbanken"],
    profileEyebrow: "Mein Profil",
    profileTitle: "Technik verstehen. Lösungen umsetzen. Menschen mitnehmen",
    profileText: "Meine Laufbahn verbindet fundierte technische Praxis, langjährige Beratungserfahrung und aktuelle Softwareentwicklung. Ich arbeite mich strukturiert in Aufgaben ein, kommuniziere verständlich und behalte den Nutzen für Anwender im Blick.",
    skillsEyebrow: "Kompetenzen",
    skillsTitle: "Breit aufgestellt – mit klarem Entwicklungsfokus",
    experienceEyebrow: "Erfahrung & Ausbildung",
    experienceTitle: "Vom technischen Support zur Full-Stack-Entwicklung",
    projectsEyebrow: "Ausgewählte Arbeiten",
    projectsTitle: "Praxis, Anwendung und sichtbare Entwicklung",
    projectsText: "Fünf Projekte zeigen, wie ich Anforderungen strukturiere, Lösungen entwickle und neue Werkzeuge gezielt einsetze.",
    projectLink: "Projekt ansehen",
    contactEyebrow: "Kontakt",
    contactTitle: "Suchen Sie einen verlässlichen Entwickler mit breitem IT-Verständnis?",
    contactText: "Ich freue mich auf Aufgaben, bei denen ich Softwareentwicklung, technisches Verständnis und lösungsorientierte Kommunikation verbinden kann.",
    emailCta: "Nachricht schreiben",
    footer: "Entwickelt mit Astro und TypeScript.",
    back: "Zurück zu den Projekten",
    context: "Ausgangslage",
    role: "Meine Rolle",
    contributions: "Meine Beiträge",
    learnings: "Erkenntnisse",
    technologies: "Technologien",
    internshipTechnologyNote: "Mit diesen Technologien und Werkzeugen habe ich im Praktikum in unterschiedlichem Umfang gearbeitet.",
    sourceCode: "Quellcode auf GitHub",
    liveDemo: "Legacy-Demo öffnen",
  },
  en: {
    metaTitle: "Roman Gutmann | Application Developer",
    metaDescription: "Portfolio of Roman Gutmann – a full-stack-oriented IT generalist experienced in web development, databases and technical support.",
    nav: { profile: "Profile", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    languageLabel: "Deutsche Version",
    availability: "Open to new opportunities",
    heroEyebrow: "Open to joining an IT team",
    heroTitleA: "I connect software development with",
    heroTitleB: "hands-on IT experience",
    heroText: "Application developer, full-stack-oriented engineer and IT generalist based in Lower Austria – experienced across hardware, support and modern web applications.",
    heroPrimary: "View projects",
    heroCv: "Download résumé",
    heroContact: "Send an email",
    proof: ["2026 final exam with distinction", "20+ years in technology & customer service", "Frontend · Backend · Databases"],
    profileEyebrow: "My profile",
    profileTitle: "Understand technology. Build solutions. Bring people along",
    profileText: "My career combines sound technical practice, many years of customer-facing experience and current software development skills. I approach tasks systematically, communicate clearly and keep the benefit for users in focus.",
    skillsEyebrow: "Skills",
    skillsTitle: "Broad IT experience with a clear development focus",
    experienceEyebrow: "Experience & education",
    experienceTitle: "From technical support to full-stack development",
    projectsEyebrow: "Selected work",
    projectsTitle: "Practice, application and visible growth",
    projectsText: "Five projects show how I structure requirements, develop solutions and use new tools with a clear purpose.",
    projectLink: "View project",
    contactEyebrow: "Contact",
    contactTitle: "Looking for a reliable developer with a broad understanding of IT?",
    contactText: "I am interested in roles where I can combine software development, technical understanding and solution-oriented communication.",
    emailCta: "Write a message",
    footer: "Built with Astro and TypeScript.",
    back: "Back to projects",
    context: "Context",
    role: "My role",
    contributions: "My contributions",
    learnings: "Key learnings",
    technologies: "Technologies",
    internshipTechnologyNote: "I worked with these technologies and tools to varying degrees during my internship.",
    sourceCode: "Source code on GitHub",
    liveDemo: "Open legacy demo",
  },
} as const;

export const skills = {
  de: [
    { title: "Backend & APIs", text: "C#, .NET, ASP.NET Core MVC, Razor, PHP, Laravel", number: "01" },
    { title: "Frontend & CMS", text: "HTML5, CSS, JavaScript, TypeScript, Vue, Nuxt, Vite, WordPress", number: "02" },
    { title: "Datenbanken", text: "SQL Server, MySQL, Datenmodellierung und strukturierte Abfragen", number: "03" },
    { title: "IT & DevOps", text: "Git, Docker, Hyper-V, Active Directory, Windows und IT-Sicherheit", number: "04" },
    { title: "Zusammenarbeit", text: "Jira, Scrum, Git-Workflows, Teams und verständliche Kommunikation", number: "05" },
    { title: "Technische Praxis", text: "PC-Hardware, Installation, Fehleranalyse, Netzwerkkomponenten und Support", number: "06" },
  ],
  en: [
    { title: "Backend & APIs", text: "C#, .NET, ASP.NET Core MVC, Razor, PHP, Laravel", number: "01" },
    { title: "Frontend & CMS", text: "HTML5, CSS, JavaScript, TypeScript, Vue, Nuxt, Vite, WordPress", number: "02" },
    { title: "Databases", text: "SQL Server, MySQL, data modelling and structured queries", number: "03" },
    { title: "IT & DevOps", text: "Git, Docker, Hyper-V, Active Directory, Windows and IT security", number: "04" },
    { title: "Collaboration", text: "Jira, Scrum, Git workflows, Teams and clear communication", number: "05" },
    { title: "Technical practice", text: "PC hardware, installation, troubleshooting, network components and support", number: "06" },
  ],
} as const;

export const timeline = {
  de: [
    { period: "2023–Juni 2026", title: "Lehre IT-Applikationsentwicklung – Abschluss mit Auszeichnung", place: "BBRZ", text: "Schwerpunkt C#, ASP.NET Core MVC/Razor, SQL Server, Datenbanken, Systemtechnik und IT-Sicherheit." },
    { period: "2024–Juni 2026", title: "Teilzeitpraktikum Webentwicklung", place: "Prowect e.U.", text: "Bis zu 16 Stunden pro Woche. Drei WordPress-Websites eingerichtet und angepasst sowie kleinere Aufgaben in bestehenden Webanwendungen bearbeitet." },
    { period: "2000–2022", title: "Fachberater Technik", place: "MediaMarkt", text: "Beratung zu Computer-Hardware, Zubehör und Großgeräten – technisch fundiert und kundenorientiert." },
    { period: "1999–2000", title: "Support- & PC-Techniker", place: "EDV-Design", text: "Interner und externer Support, Installation und Aufrüstung von PCs sowie Betreuung von Netzwerkkomponenten." },
    { period: "1994–1998", title: "Elektronik & Nachrichtentechnik", place: "HTBLuVA Mödling", text: "Technische Ausbildung als Fundament für systematisches Arbeiten und nachhaltige Problemlösung." },
  ],
  en: [
    { period: "2023–June 2026", title: "Apprenticeship in application development – graduated with distinction", place: "BBRZ", text: "Focus on C#, ASP.NET Core MVC/Razor, SQL Server, databases, system technology and IT security." },
    { period: "2024–June 2026", title: "Part-time web development internship", place: "Prowect e.U.", text: "Up to 16 hours per week. Set up and customised three WordPress websites and worked on smaller tasks in existing web applications." },
    { period: "2000–2022", title: "Technology sales advisor", place: "MediaMarkt", text: "Customer-focused consulting on computer hardware, accessories and large appliances." },
    { period: "1999–2000", title: "Support & PC technician", place: "EDV-Design", text: "Internal and external support, PC installation and upgrades, and administration of network components." },
    { period: "1994–1998", title: "Electronics & communications engineering", place: "HTBLuVA Mödling", text: "Technical education as the foundation for systematic work and sustainable problem solving." },
  ],
} as const;

export const projectSlugs = {
  bewerbungsmanager: { de: "bewerbungsmanager", en: "application-manager" },
  lagerverwaltung: { de: "abschlussprojekt-programmierausbildung", en: "programming-course-final-project" },
  internship: { de: "webentwicklung-praktikum", en: "web-development-internship" },
  mymillgame: { de: "mymillgame", en: "mymillgame" },
  burgenbau: { de: "burgenbau", en: "castle-builder" },
} as const;

export type ProjectKey = keyof typeof projectSlugs;

export function withBase(path = "") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export function homeFor(locale: Locale) {
  return withBase(locale === "de" ? "" : "en/");
}

export function projectPath(locale: Locale, key: ProjectKey) {
  const prefix = locale === "de" ? "projekte" : "en/projects";
  return withBase(`${prefix}/${projectSlugs[key][locale]}/`);
}
