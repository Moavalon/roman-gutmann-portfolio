// Permanent release URL; never use the expiring GitHub asset redirect URL.
export const jobVerwalterDemo = {
  downloadUrl: 'https://github.com/Moavalon/JobVerwalter-demo/releases/download/v0.5.0-preview.3/JobVerwalter-Demo-0.5.0-preview.3-Setup.exe',
  instructionsUrl: 'https://github.com/Moavalon/JobVerwalter-demo/blob/main/INSTALLATION.txt',
  labels: {
    de: {
      badge: 'Windows-Demo verfügbar',
      download: 'Windows-Demo herunterladen',
      cardDownload: 'Demo herunterladen',
      requirements: 'Windows x64 · ca. 325 MB · 10 Bewerbungen · ohne Administratorrechte',
      instructions: 'Installationshinweise',
      navigation: 'Demo und Projektabschnitte',
    },
    en: {
      badge: 'Windows demo available',
      download: 'Download Windows demo',
      cardDownload: 'Download demo',
      requirements: 'Windows x64 · approx. 325 MB · 10 applications · no administrator rights · German-language app',
      instructions: 'Installation instructions (German)',
      navigation: 'Demo and project sections',
    },
  },
} as const;
