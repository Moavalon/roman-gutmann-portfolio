# Project screenshots

Captured on 2026-09-08, then encoded as WebP without changing the application content.

- `burgenbau/1.webp`–`5.webp`: live browser application at https://moavalon.github.io/RomanGutmann/ after starting a new game through the original start button. Character selection, land management, timber market, stone market, castle construction. Source repository inspected at commit `f1dec9f02f351428e71c47d2eb032bc9aa9cebc6`.
- `mymillgame/1.webp`–`5.webp`: original JavaFX application from https://github.com/Moavalon/MyMillGame at commit `c4db51544851680f850a9d29802877c6bfdd065d`, compiled with Java 21 and its declared JavaFX 21-ea+24 dependencies. Captured rendered JavaFX scenes after entering sample player names and firing the original UI click handlers: start screen, initial board, six placed pieces, eighteen placed pieces, selected piece. No game source changes or fabricated UI.
- `lagerverwaltung/1.webp`–`5.webp`: original local ASP.NET Core MVC application from `/Users/developer/Codex/Lagerverwaltung`. Because its SQL Server LocalDB connection is Windows-only, screenshots were captured from an isolated temporary source copy using EF Core InMemory with representative sample records. Views, controllers and application styling were unchanged. Product overview, product creation, product details and incoming stock, sales and financial overview, purchase delivery status.

Display order and localized captions live in `src/data/projectScreenshots.ts`. The original project interfaces remain German in both portfolio locales.
