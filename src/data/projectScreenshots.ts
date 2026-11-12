import type { Locale } from './site';

const captions = {
  lagerverwaltung: {
    de: ['Produktübersicht mit Suche und Filtern', 'Neues Produkt mit Bild anlegen', 'Produktdetails und Wareneingänge', 'Verkäufe und Finanzübersicht', 'Lieferstatus der Einkäufe'],
    en: ['Product overview with search and filters', 'Create a product with an image', 'Product details and incoming stock', 'Sales and financial overview', 'Purchase delivery status'],
  },
  burgenbau: {
    de: ['Figur und Schwierigkeitsgrad wählen', 'Land und Bevölkerung verwalten', 'Holzhandel und Vorräte', 'Steinhandel und Ressourcen', 'Baufortschritt der Burg'],
    en: ['Choose a character and difficulty', 'Manage land and population', 'Timber trading and supplies', 'Stone trading and resources', 'Castle construction progress'],
  },
  mymillgame: {
    de: ['Spielstart mit zwei Spielern', 'Spielbrett zu Beginn', 'Spielsteine setzen', 'Alle Spielsteine auf dem Brett', 'Spielstein auswählen und mögliche Züge anzeigen'],
    en: ['Start a two-player game', 'The initial game board', 'Placing pieces', 'All pieces on the board', 'Select a piece and see available moves'],
  },
};

export function projectScreenshots(key: string, locale: Locale) {
  if (key === 'webdesign-modulabschluss') {
    const names = ['startseite', 'helden', 'einheiten', 'aufwertung'];
    const captions = {
      de: ['Startseite der Fanseite mit Navigation und thematischer Gestaltung', 'Heldenübersicht mit Fraktionen und Fähigkeiten', 'Einheitenauswahl mit Bild, Beschreibung, Kosten und Typ', 'Interaktive Aufwertung mit Fortschrittsanzeige und freigeschalteter Fähigkeit'],
      en: ['Fan website homepage with navigation and themed design', 'Hero overview with factions and abilities', 'Unit selector with image, description, cost and type', 'Interactive upgrade example with progress and an unlocked ability'],
    };
    return names.map((name, index) => ({ src: `projects/${key}/${name}.webp`, caption: captions[locale][index] }));
  }
  if (key !== 'lagerverwaltung' && key !== 'burgenbau' && key !== 'mymillgame') return [];
  const order = key === 'burgenbau' ? [5, 1, 2, 3, 4] : key === 'mymillgame' ? [2, 3, 4, 5, 1] : [1, 2, 3, 4, 5];
  return order.map((number) => ({
    src: `projects/${key}/${number}.webp`,
    caption: captions[key][locale][number - 1],
  }));
}
