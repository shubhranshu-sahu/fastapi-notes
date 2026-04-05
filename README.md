# FastAPI Notes Website

This project is a static study website I built to organize my FastAPI learning in one place.

The goal is not to show off web development skills. The goal is to make FastAPI easier to study, revise, and understand through structured notes, examples, comparisons, and chapter-based navigation.

## Why I Built This

While learning FastAPI, I wanted something more useful than scattered notes across notebooks, tabs, and random files. I wanted:

- one place for all core beginner-to-intermediate concepts
- explanations in simple language
- code examples I can quickly revisit
- chapter-wise learning instead of messy documentation hopping
- a format that feels like study material, not just a project demo

So this website became a personal FastAPI revision guide.

## What The Website Covers

The site is divided into 12 chapters:

1. Introduction to FastAPI
2. Installation and first app
3. Flask vs FastAPI
4. Async programming
5. Creating the first FastAPI app
6. Path operations and HTTP methods
7. Path parameters
8. Routing priority and order
9. Enum path parameters
10. Query parameters
11. Optional query parameters
12. Combining path and query parameters

The content focuses on understanding concepts clearly, not just memorizing syntax.

## How The Site Is Structured

- `index.html` is the landing page with chapter overview cards and quick reference blocks.
- `pages/` contains the individual chapter pages.
- `css/main.css` holds the full visual system and layout styling.
- `js/main.js` handles interactivity like theme toggle, mobile sidebar, search, copy buttons, scroll progress, and back-to-top behavior.

## Features

- chapter-based notes layout
- sidebar navigation across all chapters
- dark mode toggle
- search modal for topics
- syntax-highlighted code blocks
- copy buttons for code snippets
- mobile-friendly layout
- quick reference section on the homepage
- interview-style memory notes in multiple chapters

## Tech Used

- HTML
- CSS
- JavaScript
- Bootstrap 5
- Prism.js

## Design Choice

I used a bold neobrutalism-inspired style so the notes feel more engaging and easier to scan. Even then, the design is still secondary to the real purpose of the project: learning FastAPI better.

## How To Run

This is a static website, so there is no build step.

You can open `index.html` directly in the browser, or use a simple local server if you want:

```bash
# Python
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project Intent

This project represents how I study, not how I market myself as a frontend developer.

I made it to:

- learn FastAPI in a structured way
- revise quickly before practice or interviews
- keep concepts, examples, and comparisons together
- turn my notes into something easier to read than plain text files

## Future Scope

Possible improvements:

- add more FastAPI chapters beyond routing basics
- include request body and Pydantic model chapters
- add authentication, database, and dependency injection topics
- improve search depth across chapter content
- add progress tracking for study sessions

## Note

This repository is best understood as a study resource packaged as a website.

If someone opens it and feels, "this was clearly made to help the author learn FastAPI properly," then it is doing its job.
