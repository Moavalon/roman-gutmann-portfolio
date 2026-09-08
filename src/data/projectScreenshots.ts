import type { Locale } from './site';

const captions = {
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
  if (key !== 'burgenbau' && key !== 'mymillgame') return [];
  const order = key === 'burgenbau' ? [5, 1, 2, 3, 4] : [2, 3, 4, 5, 1];
  return order.map((number) => ({
    src: `projects/${key}/${number}.webp`,
    caption: captions[key][locale][number - 1],
  }));
}
