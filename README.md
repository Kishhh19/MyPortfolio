# Mark Laurence M. Santos — Developer Portfolio

## Current design

The application uses a monochrome design inspired by the supplied reference at https://styfensagala.vercel.app/: oversized name typography, movable badges, a profile card, dark project showcases, and a journey timeline with interactive archive folders. All professional information and projects belong to Mark Laurence M. Santos. The profile card displays the supplied Leonardo Watch GIF from public/images/profile/leonardo-watch.gif.

- The hero code types, pauses, erases, and repeats. Two companions follow separate lower-screen walking paths; hovering or focusing one pauses its path. Sections fade and slide into view when scrolling. Reduced-motion preferences disable these effects.
- Drag hero badges with a pointer, or focus a badge and use arrow keys. Home resets a focused badge; the reset control restores all positions.
- Explore the Autotrace capture/recognize/verify concept and the project case studies. The illustration is a demonstration, not a live recognition service. The chatbot is labeled as a project in development.
- Search skills by technology or description; expand a technology for details.
- Theme and English/Filipino language preferences are saved locally when browser storage is available.
- Interface sounds are off initially. Enable them using the speaker control; tones are generated locally with the Web Audio API and require no external media.
- Journey folders open project details or academic background. Dialogs support Escape, keyboard focus containment, and focus restoration.
- The guestbook saves up to 30 notes in the visitor's browser. It is explicitly labeled as local to that browser. Public/shared guestbook entries require a backend that is not configured here.
- The contact composer opens the visitor's email application; it does not send messages through a server.
- Résumé actions open the printable `public/resume.html` page, which supports browser print/save as PDF. The old PDF under `public/resume/` is a placeholder and is not linked by the current page.

Personal details and skill lists come from `src/data/portfolioData.js`. Bilingual copy, project narratives, and journey entries are in `src/data/siteContent.js`. The page is implemented in `src/App.jsx`; active supporting components are `Dialog.jsx`, `DraggableBadge.jsx`, `Guestbook.jsx`, and `SystemPreview.jsx`. Older section components remain in the repository but are not mounted. Run `npm run dev` for local development and `npm run build` for the static production bundle.

## Local development

Run `npm install` if dependencies are missing, then `npm run dev`. Open the URL printed by Vite. Run `npm run build` to generate the `dist/` folder. The output can be hosted on a static server, including XAMPP, Netlify, or Vercel.

No contact backend or third-party analytics is configured. No API credentials are needed.
