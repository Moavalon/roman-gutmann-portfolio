#!/usr/bin/env python3
"""Generate the German and English one-page portfolio CVs from one source."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageOps
from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject, TextStringObject
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public" / "cv"
TMP_DIR = ROOT / "tmp" / "pdfs"
PORTRAIT = ROOT / "src" / "assets" / "portrait.jpg"
FONT_DIR = ROOT / "scripts" / "assets"

PAGE_W, PAGE_H = A4
INK = HexColor("#142b31")
MUTED = HexColor("#536a70")
ACCENT = HexColor("#00746c")
ACCENT_LIGHT = HexColor("#e8f1ed")
PAPER = HexColor("#f6f8f5")
WHITE = HexColor("#ffffff")
RULE = HexColor("#cddbd5")


@dataclass(frozen=True)
class Item:
    title: str
    text: str


@dataclass(frozen=True)
class CV:
    lang: str
    filename: str
    role: str
    location: str
    availability: str
    labels: dict[str, str]
    profile: str
    skills: tuple[Item, ...]
    experience: tuple[Item, ...]
    education: tuple[Item, ...]
    project: Item
    languages: str


CVS = (
    CV(
        lang="de-AT",
        filename="roman-gutmann-cv-de.pdf",
        role="IT-Applikationsentwickler | KI-gestützte Entwicklung | Technische Praxis",
        location="Traiskirchen, Niederösterreich",
        availability="OFFEN FÜR DEN EINSTIEG IN EIN IT-TEAM",
        labels={
            "profile": "KURZPROFIL",
            "skills": "KENNTNISSE NACH ERFAHRUNGSART",
            "experience": "BERUFSERFAHRUNG",
            "education": "AUSBILDUNG",
            "project": "EIGENES PROJEKT",
            "languages": "SPRACHEN",
        },
        profile=(
            "IT-Applikationsentwickler mit soliden Grundlagen in Webentwicklung und Datenbanken. "
            "Mit OpenAI Codex arbeite ich mich strukturiert in neue Projekte und Frameworks ein, "
            "formuliere Anforderungen, prüfe Ergebnisse und behalte Gestaltung und Nutzer im Blick. "
            "Aus über 20 Jahren Berufserfahrung bringe ich Zuverlässigkeit, klare Kommunikation und "
            "einen respektvollen, teamorientierten Umgang mit. Ich suche eine langfristige Aufgabe, "
            "in der ich mich fachlich weiterentwickeln und verlässlich einbringen kann."
        ),
        skills=(
            Item("Backend & APIs", "Grundlagen in C#, .NET, ASP.NET Core MVC und Razor; Einblicke in PHP und Laravel."),
            Item("Frontend & CMS", "Praxis mit WordPress; Grundlagen in HTML, CSS, JavaScript/TypeScript, Vue, Nuxt und Vite."),
            Item("Datenbanken", "Grundlagen in SQL Server, MySQL, Datenmodellierung und strukturierten Abfragen."),
            Item("KI & Werkzeuge", "OpenAI Codex, Git, Docker und Jira; Aufgaben strukturieren, Ergebnisse prüfen und Änderungen schrittweise testen."),
            Item("Technische Praxis", "Hardware, Installation, Fehleranalyse, Netzwerkkomponenten und Support."),
            Item("Zusammenarbeit", "Verständliche Kommunikation, Teamorientierung und Zuverlässigkeit aus über 20 Jahren Arbeit mit Kunden und Kollegen."),
        ),
        experience=(
            Item("08/2026 | IT-Applikationsentwickler | Prowect e.U.", "Analyse und Bearbeitung abgegrenzter Issues in bestehenden Webanwendungen mit PHP/Laravel, Vue/Nuxt, TypeScript und Vite; strukturierte Umsetzung mit OpenAI Codex."),
            Item("2024-Juni 2026 | Teilzeitpraktikum Webentwicklung | Prowect e.U.", "Bis zu 16 Stunden pro Woche. Drei WordPress-Websites eingerichtet und angepasst sowie kleinere Aufgaben in bestehenden Webanwendungen bearbeitet."),
            Item("2000-2022 | Fachberater Technik | MediaMarkt", "Beratung zu Computer-Hardware, Zubehör und Großgeräten; langjährige Kundenkommunikation, Zusammenarbeit und verlässliche Betreuung."),
            Item("1999-2000 | Support- & PC-Techniker | EDV-Design", "Interner und externer Support, PC-Installation und Aufrüstung sowie Betreuung von Netzwerkkomponenten."),
            Item("1998-1999 | Elektroinstallationstechniker | ASC", "Elektroinstallationen und technische Arbeiten im Team."),
        ),
        education=(
            Item("2023-Juni 2026 | Lehre IT-Applikationsentwicklung | BBRZ", "Lehrabschlussprüfung 2026 mit Auszeichnung."),
            Item("1994-1998 | Elektronik & Nachrichtentechnik | HTBLuVA Mödling", "Technische Ausbildung und Abschluss des vierten Jahrgangs."),
        ),
        project=Item("Bewerbungsmanager", "Konzeption einer privaten Webanwendung für Jobsuchende. Anforderungen, Benutzerabläufe, UI/UX, Planung und Abnahme durch Roman Gutmann; technische Umsetzung mit OpenAI Codex."),
        languages="Deutsch: Muttersprache | Englisch: gute Kenntnisse",
    ),
    CV(
        lang="en-GB",
        filename="roman-gutmann-cv-en.pdf",
        role="Application Developer | AI-assisted Development | Technical Practice",
        location="Traiskirchen, Lower Austria",
        availability="OPEN TO JOINING AN IT TEAM",
        labels={
            "profile": "PROFILE",
            "skills": "SKILLS BY EXPERIENCE",
            "experience": "PROFESSIONAL EXPERIENCE",
            "education": "EDUCATION",
            "project": "PERSONAL PROJECT",
            "languages": "LANGUAGES",
        },
        profile=(
            "Application developer with solid foundations in web development and databases. With OpenAI Codex, "
            "I approach new projects and frameworks in a structured way, define requirements, review results and "
            "keep design and users in mind. More than 20 years of professional experience have shaped my reliability, "
            "clear communication and respectful, team-oriented approach. I am looking for a long-term role where I can "
            "continue developing my skills and make a dependable contribution."
        ),
        skills=(
            Item("Backend & APIs", "Foundations in C#, .NET, ASP.NET Core MVC and Razor; exposure to PHP and Laravel."),
            Item("Frontend & CMS", "Hands-on experience with WordPress; foundations in HTML, CSS, JavaScript/TypeScript, Vue, Nuxt and Vite."),
            Item("Databases", "Foundations in SQL Server, MySQL, data modelling and structured queries."),
            Item("AI & tools", "OpenAI Codex, Git, Docker and Jira; structuring tasks, reviewing results and testing changes step by step."),
            Item("Technical practice", "Hardware, installation, troubleshooting, network components and support."),
            Item("Collaboration", "Clear communication, a team-oriented and reliable approach, and more than 20 years of experience with customers and colleagues."),
        ),
        experience=(
            Item("08/2026 | Application Developer | Prowect e.U.", "Analysed and worked on clearly scoped issues in existing web applications using PHP/Laravel, Vue/Nuxt, TypeScript and Vite; structured implementation with OpenAI Codex."),
            Item("2024-June 2026 | Part-time Web Development Internship | Prowect e.U.", "Up to 16 hours per week. Set up and customised three WordPress websites and handled smaller tasks in existing web applications."),
            Item("2000-2022 | Technology Sales Advisor | MediaMarkt", "Advised customers on computer hardware, accessories and appliances; long-standing experience in communication, teamwork and reliable service."),
            Item("1999-2000 | Support & PC Technician | EDV-Design", "Internal and external support, PC installation and upgrades, and maintenance of network components."),
            Item("1998-1999 | Electrical Installation Technician | ASC", "Electrical installations and technical work as part of a team."),
        ),
        education=(
            Item("2023-June 2026 | Apprenticeship in Application Development | BBRZ", "Final apprenticeship examination passed with distinction in 2026."),
            Item("1994-1998 | Electronics & Communications Engineering | HTBLuVA Mödling", "Technical education completed through the fourth year."),
        ),
        project=Item("Application Manager", "Concept for a private web application for jobseekers. Requirements, user flows, UI/UX, planning and acceptance by Roman Gutmann; technical implementation with OpenAI Codex."),
        languages="German: native | English: good working proficiency",
    ),
)


def register_fonts() -> None:
    for family, filename in {
        "Manrope": "Manrope-Regular.ttf",
        "Manrope-SemiBold": "Manrope-SemiBold.ttf",
        "Manrope-Bold": "Manrope-Bold.ttf",
        "Manrope-ExtraBold": "Manrope-ExtraBold.ttf",
    }.items():
        pdfmetrics.registerFont(TTFont(family, FONT_DIR / filename))


def wrap(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if not current or pdfmetrics.stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_text(c: canvas.Canvas, text: str, x: float, y: float, width: float, *, font: str = "Manrope", size: float = 8.35, leading: float = 11.7, color=INK) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_section_label(c: canvas.Canvas, label: str, x: float, y: float, width: float) -> float:
    c.setFillColor(ACCENT)
    c.setFont("Manrope-Bold", 7.4)
    c.drawString(x, y, label)
    y -= 7
    c.setStrokeColor(RULE)
    c.setLineWidth(0.65)
    c.line(x, y, x + width, y)
    return y - 12


def draw_items(c: canvas.Canvas, items: Iterable[Item], x: float, y: float, width: float, *, compact: bool = False) -> float:
    for item in items:
        y = draw_text(c, item.title, x, y, width, font="Manrope-Bold", size=9.0 if compact else 9.2, leading=12.2)
        y -= 2
        y = draw_text(c, item.text, x, y, width, size=8.55 if compact else 8.75, leading=12.0, color=MUTED)
        y -= 8.5 if compact else 9
    return y


def prepare_portrait() -> Path:
    target = TMP_DIR / "cv-portrait.jpg"
    with Image.open(PORTRAIT) as raw:
        image = ImageOps.exif_transpose(raw).convert("RGB")
        image = ImageOps.fit(image, (600, 750), method=Image.Resampling.LANCZOS, centering=(0.5, 0.42))
        image.save(target, quality=92, optimize=True)
    return target


def draw_link(c: canvas.Canvas, label: str, url: str, x: float, y: float, *, size: float = 7.9) -> float:
    c.setFont("Manrope-SemiBold", size)
    c.setFillColor(WHITE)
    c.drawString(x, y, label)
    width = pdfmetrics.stringWidth(label, "Manrope-SemiBold", size)
    c.linkURL(url, (x, y - 2, x + width, y + size + 1), relative=0, thickness=0)
    return x + width


def set_language(path: Path, language: str) -> None:
    reader = PdfReader(path)
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)
    writer.root_object[NameObject("/Lang")] = TextStringObject(language)
    tmp = path.with_suffix(".lang.pdf")
    with tmp.open("wb") as stream:
        writer.write(stream)
    tmp.replace(path)


def generate(cv: CV, portrait: Path) -> Path:
    path = OUTPUT_DIR / cv.filename
    c = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    c.setTitle(f"Roman Gutmann - {cv.role}")
    c.setAuthor("Roman Gutmann")
    c.setSubject("Lebenslauf" if cv.lang.startswith("de") else "Curriculum Vitae")
    c.setCreator("Roman Gutmann Portfolio CV Generator")
    c.setKeywords("Roman Gutmann, IT-Applikationsentwickler, OpenAI Codex, Webentwicklung")

    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(INK)
    c.rect(0, PAGE_H - 202, PAGE_W, 202, fill=1, stroke=0)

    left = 38
    c.setFillColor(WHITE)
    c.setFont("Manrope-ExtraBold", 29)
    c.drawString(left, PAGE_H - 55, "Roman Gutmann")
    role_y = PAGE_H - 82
    y = draw_text(c, cv.role, left, role_y, 385, font="Manrope-Bold", size=10.7, leading=14.4, color=WHITE)
    c.setFillColor(HexColor("#72d1be"))
    c.setFont("Manrope-Bold", 7.5)
    c.drawString(left, y - 5, cv.availability)

    contact_y = PAGE_H - 168
    line_y = contact_y - 19
    frame_top = role_y + pdfmetrics.getAscent("Manrope-Bold", 10.7)
    frame_bottom = line_y + pdfmetrics.getDescent("Manrope-SemiBold", 7.5)
    photo_x, photo_w = 467, 90
    photo_y = frame_bottom + 4
    photo_h = frame_top - frame_bottom - 8
    c.setFillColor(WHITE)
    c.roundRect(photo_x - 4, photo_y - 4, photo_w + 8, photo_h + 8, 10, fill=1, stroke=0)
    c.saveState()
    path_obj = c.beginPath()
    path_obj.roundRect(photo_x, photo_y, photo_w, photo_h, 7)
    c.clipPath(path_obj, stroke=0, fill=0)
    c.drawImage(str(portrait), photo_x, photo_y, photo_w, photo_h, preserveAspectRatio=True, anchor="c", mask="auto")
    c.restoreState()

    c.setFont("Manrope", 7.9)
    c.setFillColor(HexColor("#d8e4df"))
    c.drawString(left, contact_y, cv.location)
    x = draw_link(c, "romangutmannmobile@gmail.com", "mailto:romangutmannmobile@gmail.com", left, line_y, size=7.5)
    for label, url in (
        ("roman-gutmann.at", "https://roman-gutmann.at"),
        ("GitHub", "https://github.com/Moavalon"),
        ("LinkedIn", "https://www.linkedin.com/in/roman-gutmann-823021283/"),
    ):
        c.setFillColor(HexColor("#72d1be"))
        c.drawString(x + 9, line_y, "|")
        x = draw_link(c, label, url, x + 19, line_y, size=7.5)

    margin = 38
    body_top = PAGE_H - 229
    left_w = 192
    gutter = 22
    right_x = margin + left_w + gutter
    right_w = PAGE_W - margin - right_x

    y_left = draw_section_label(c, cv.labels["skills"], margin, body_top, left_w)
    y_left = draw_items(c, cv.skills, margin, y_left, left_w, compact=True)
    y_left = draw_section_label(c, cv.labels["languages"], margin, y_left - 1, left_w)
    y_left = draw_text(c, cv.languages, margin, y_left, left_w, size=8.55, leading=12, color=MUTED) - 12
    y_left = draw_section_label(c, cv.labels["education"], margin, y_left, left_w)
    draw_items(c, cv.education, margin, y_left, left_w, compact=True)

    y_right = draw_section_label(c, cv.labels["profile"], right_x, body_top, right_w)
    y_right = draw_text(c, cv.profile, right_x, y_right, right_w, size=8.9, leading=12.7, color=MUTED) - 12
    y_right = draw_section_label(c, cv.labels["experience"], right_x, y_right, right_w)
    y_right = draw_items(c, cv.experience, right_x, y_right, right_w, compact=True)
    y_right = draw_section_label(c, cv.labels["project"], right_x, y_right - 1, right_w)
    y_right = draw_items(c, (cv.project,), right_x, y_right, right_w, compact=True)

    c.setStrokeColor(RULE)
    c.line(margin, 27, PAGE_W - margin, 27)
    c.setFont("Manrope", 6.8)
    c.setFillColor(MUTED)
    c.drawString(margin, 15, "roman-gutmann.at")
    c.drawRightString(PAGE_W - margin, 15, "Stand: 13. September 2026" if cv.lang.startswith("de") else "Updated: 13 September 2026")
    c.showPage()
    c.save()
    set_language(path, cv.lang)
    (PUBLIC_DIR / cv.filename).write_bytes(path.read_bytes())
    return path


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    TMP_DIR.mkdir(parents=True, exist_ok=True)
    register_fonts()
    portrait = prepare_portrait()
    for cv in CVS:
        print(generate(cv, portrait))


if __name__ == "__main__":
    main()
