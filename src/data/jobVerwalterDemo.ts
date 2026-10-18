// Permanent release URL; never use the expiring GitHub asset redirect URL.
export const jobVerwalterDemo = {
  downloadUrl: 'https://github.com/Moavalon/JobVerwalter-demo/releases/download/v0.5.0-preview.3/JobVerwalter-Demo-0.5.0-preview.3-Setup.exe',
  instructionsUrl: 'https://github.com/Moavalon/JobVerwalter-demo/blob/main/INSTALLATION.txt',
  labels: {
    de: {
      badge: 'Windows-Demo verfügbar',
      download: 'Windows-Demo herunterladen',
      cardDownload: 'Demo herunterladen',
      instructions: 'Installationshinweise',
      navigation: 'Demo und Projektabschnitte',
    },
    en: {
      badge: 'Windows demo available',
      download: 'Download Windows demo',
      cardDownload: 'Download demo',
      instructions: 'Installation instructions (German)',
      navigation: 'Demo and project sections',
    },
  },
} as const;
