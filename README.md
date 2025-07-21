# 🧑‍💻 Portfolio

A responsive personal portfolio built with **Angular**, showcasing projects, skills, and contact info. Designed for desktop, tablet, and mobile displays.

---

## 🏗️ Project Structure

src/

├── app/
│ ├── components/
│ │ ├── header/ ← Navigation bar
│ │ ├── projects/ ← Project showcase cards
│ │ ├── skills/ ← Skills section
│ │ ├── contact/ ← Contact form
│ │ ├── footer/ ← Footer component
│ └── app.component.* ← Layout wrapper and routing
├── assets/ ← Images, fonts, static files
└── styles.css ← Global styling & responsive rules

---

## 📌 App Overview

This portfolio displays:

- **Profile header** with navigation
- **Projects** with titles, descriptions, and live/demo links
- **Skills** section illustrating technologies and experience
- **Contact form** to reach out directly
- **Footer** with social icons

Fully responsive layout with mobile-first styling and clean UX.

---

## 🚀 Future Enhancements

- **Dark Mode support** for user preference  
- **Multilingual interface** (e.g., English, Spanish)  
- **Dynamic project data** pulled from JSON or CMS  
- **Accessibility improvements** (ARIA, keyboard navigation)  

---

## 🛠️ Setup & Run

```bash
# Install dependencies
npm install

# Launch locally
ng serve

# Visit in browser
http://localhost:4200
