# Overview

This project is a web application designed to help Helldivers 2 players build, customize, and preview their in-game loadouts in a streamlined, user-friendly way. As a software engineering student, I wanted to deepen my knowledge of modern front-end tools like React, Tailwind CSS, and component-based design. Building this app helped me practice working with dynamic forms, conditional rendering, and structured data.

The app allows users to select weapons, armor, stratagems, and other gear from JSON-based game data, then preview a summary of their customized loadout on a separate preview page.

To run the app locally:
1. Clone the repository.
2. Run npm install to install dependencies.
3. Run npm run dev to start the local server.
4. Open [http://localhost:5173](http://localhost:5173) in your browser to access the app.

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

Home Page:
* A simple landing screen with the Helldivers 2 branding, a welcome message, and a button to start building a loadout.

Builder Page:
* This is where users input all the parts of their loadout.
* It includes sections for general loadout info, weapons, armor, stratagems, and boosters.
* All data is dynamically pulled from structured JSON files.

Preview Page:
* After building a loadout, the user clicks "Create Preview", which opens a new tab showing a styled summary of their full build.
* The data is passed using URL parameters, decoded on the preview page, and rendered using Tailwind CSS.

# Development Environment

IDE: [VS Code](https://code.visualstudio.com/download)

Framework: [React](https://react.dev/) (via [Vite](https://vite.dev/))

Programming Language: JavaScript (ES6+)

Styling: [Tailwind CSS](https://tailwindcss.com/)

Other Tools:
* Vite development server
* Node.js & npm
* Image Editor: [paint.net](https://www.getpaint.net/)

# Useful Websites

* [React Docs](https://react.dev/)
* [tailwindcss Docs](https://tailwindcss.com/)
* [Game Wiki](https://helldivers.wiki.gg/wiki/Helldivers_2)
* [mdn Web Docs (URLSearchPrams)](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

# Future Work

* Add item icons and visuals to the preview page for a more immersive UI.
* Add loadout sharing via generated URLs or social media embeds.
* Add persistent loadout saving via local storage or a backend.
* Build a responsive/mobile-friendly layout for smaller screens.
* Implement image recognition to import in-game loadouts using screenshots or live camera scan.