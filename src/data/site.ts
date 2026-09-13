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
    metaTitle: "Roman Gutmann | IT-Applikationsentwickler | KI-gestützte Entwicklung | Technische Praxis",
    metaDescription: "Portfolio von Roman Gutmann – IT-Applikationsentwickler mit technischer Berufserfahrung, KI-gestützter Arbeitsweise und Praxis in Webentwicklung und Support.",
    nav: { profile: "Profil", skills: "Kompetenzen", experience: "Erfahrung", projects: "Projekte", contact: "Kontakt" },
    languageLabel: "English version",
    availability: "Offen für neue Aufgaben",
    heroEyebrow: "Offen für den Einstieg in ein IT-Team",
    heroTitleA: "Ich verbinde Software\u00ADentwicklung mit",
    heroTitleB: "echter IT-Praxis",
    heroText: "IT-Applikationsentwickler aus Niederösterreich mit Grundlagen in moderner Webentwicklung, KI-gestützter Projektarbeit und über 20 Jahren Erfahrung mit Technik, Kunden und Support.",
    heroPrimary: "Projekte ansehen",
    heroCv: "Lebenslauf herunterladen",
    heroContact: "E-Mail schreiben",
    proof: ["LAP 2026 mit Auszeichnung", "Über 20 Jahre Technik- & Kundenerfahrung", "KI-gestützte Projektarbeit"],
    profileEyebrow: "Mein Profil",
    profileTitle: "Technik verstehen. Lösungen umsetzen. Menschen mitnehmen",
    profileText: "In der Softwareentwicklung stehe ich am Anfang meiner beruflichen Praxis. Mit KI-gestützten Werkzeugen arbeite ich mich strukturiert in neue Projekte, Frameworks und Anforderungen ein, prüfe Ergebnisse sorgfältig und behalte Gestaltung und Nutzer im Blick. Ins Team bringe ich über 20 Jahre Berufserfahrung, klare Kommunikation, Zuverlässigkeit und einen respektvollen Umgang mit.",
    skillsEyebrow: "Kompetenzen",
    skillsTitle: "Technische Grundlagen, KI-gestützte Arbeitsweise und Berufspraxis",
    experienceEyebrow: "Erfahrung & Ausbildung",
    experienceTitle: "Von technischer Berufspraxis in die Softwareentwicklung",
    projectsEyebrow: "Ausgewählte Arbeiten",
    projectsTitle: "Praxis, Anwendung und sichtbare Entwicklung",
    projectsText: "Fünf Projekte zeigen, wie ich Anforderungen strukturiere, Benutzerabläufe gestalte und neue Werkzeuge gezielt einsetze.",
    projectLink: "Projekt ansehen",
    contactEyebrow: "Kontakt",
    contactTitle: "Suchen Sie einen verlässlichen IT-Applikationsentwickler mit breiter technischer Praxis?",
    contactText: "Ich suche ein Team, in dem ich mich fachlich weiterentwickeln und meine Erfahrung, Lernbereitschaft und klare Kommunikation langfristig einbringen kann.",
    emailCta: "Nachricht schreiben",
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
    metaTitle: "Roman Gutmann | Application Developer | AI-assisted Development | Technical Practice",
    metaDescription: "Portfolio of Roman Gutmann – an application developer with professional technical experience, AI-assisted workflows, and hands-on experience in web development and support.",
    nav: { profile: "Profile", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    languageLabel: "Deutsche Version",
    availability: "Open to new opportunities",
    heroEyebrow: "Open to joining an IT team",
    heroTitleA: "I connect software development with",
    heroTitleB: "hands-on IT experience",
    heroText: "Application developer based in Lower Austria, with foundational experience in modern web development, AI-assisted project work and more than 20 years in technology, customer service and support.",
    heroPrimary: "View projects",
    heroCv: "Download résumé",
    heroContact: "Send an email",
    proof: ["2026 final exam with distinction", "20+ years in technology & customer service", "AI-assisted project work"],
    profileEyebrow: "My profile",
    profileTitle: "Understand technology. Build solutions. Bring people along",
    profileText: "I am at the beginning of my professional software development career. With AI-assisted tools, I work through new projects, frameworks and requirements in a structured way, review results carefully and keep design and users in mind. I bring more than 20 years of work experience, clear communication, reliability and a respectful, team-oriented approach.",
    skillsEyebrow: "Skills",
    skillsTitle: "Technical foundations, AI-assisted workflows and professional experience",
    experienceEyebrow: "Experience & education",
    experienceTitle: "From hands-on technical work into software development",
    projectsEyebrow: "Selected work",
    projectsTitle: "Practice, application and visible growth",
    projectsText: "Five projects show how I structure requirements, design user workflows and use new tools purposefully.",
    projectLink: "View project",
    contactEyebrow: "Contact",
    contactTitle: "Looking for a reliable application developer with broad technical experience?",
    contactText: "I am looking for a team where I can continue developing my skills and contribute my experience, willingness to learn and clear communication over the long term.",
    emailCta: "Write a message",
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
    { title: "Backend & APIs", text: "Grundlagen in C#, .NET, ASP.NET Core MVC und Razor; Einblicke in PHP und Laravel", number: "01" },
    { title: "Frontend & CMS", text: "Praxis mit WordPress und Grundlagen in HTML, CSS, JavaScript/TypeScript, Vue, Nuxt und Vite", number: "02" },
    { title: "Datenbanken", text: "Grundlagen in SQL Server, MySQL, Datenmodellierung und strukturierten Abfragen", number: "03" },
    { title: "KI & Werkzeuge", text: "OpenAI Codex, Git, Docker und Jira; Aufgaben strukturieren, Ergebnisse prüfen und Änderungen schrittweise testen", number: "04" },
    { title: "Zusammenarbeit", text: "Verständliche Kommunikation, Teamorientierung, Zuverlässigkeit und über 20 Jahre Erfahrung mit Kunden und Kollegen", number: "05" },
    { title: "Technische Praxis", text: "Hardware, Installation, Fehleranalyse, Netzwerkkomponenten und Support", number: "06" },
  ],
  en: [
    { title: "Backend & APIs", text: "Foundations in C#, .NET, ASP.NET Core MVC and Razor; exposure to PHP and Laravel", number: "01" },
    { title: "Frontend & CMS", text: "Hands-on experience with WordPress and foundations in HTML, CSS, JavaScript/TypeScript, Vue, Nuxt and Vite", number: "02" },
    { title: "Databases", text: "Foundations in SQL Server, MySQL, data modelling and structured queries", number: "03" },
    { title: "AI & tools", text: "OpenAI Codex, Git, Docker and Jira; structuring tasks, reviewing results and testing changes step by step", number: "04" },
    { title: "Collaboration", text: "Clear communication, a team-oriented and reliable approach, and more than 20 years of experience with customers and colleagues", number: "05" },
    { title: "Technical practice", text: "Hardware, installation, troubleshooting, network components and support", number: "06" },
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
