# Kids School Website

A modern, responsive website for a children's school, built with React, TypeScript, and Tailwind CSS. This project features engaging animations, an intuitive layout, and modular components, including About Us, Teachers, Hero Section, Testimonials, and more.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Component Overview](#component-overview)
- [Routing](#routing)
- [Customization](#customization)
- [Contribution](#contribution)
- [License](#license)

---

## Features

- ⚡️ **Lightning-fast SPA** experience with React Router
- 🎨 **Modern responsive design** using Tailwind CSS
- 🚀 **Animated elements** for dynamic visuals
- 👤 **Teachers, About, Services, Contact** and **Home** pages
- 💬 **Testimonials** and **Why Choose Us** sections
- 📜 Accessible and semantic markup
- ✍️ **Contact form** with modal dialog

---

## Screenshots

> _Add screenshots here after running the site!_

---

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6

---

## Project Structure

```
src/
  components/
    about/
      About-Us.tsx
      Our-Teachers.tsx
    home/
      testimonials.tsx
      why-choose-us.tsx
    hero-section.tsx
    navbar.tsx
    footer.tsx
    contact-form.tsx
    ui/
      button.tsx
      dialog.tsx
  view/
    Home.tsx
    About.tsx
    Services.tsx
    Contact.tsx
  App.tsx
assets/
  image/
    (Used images for illustration)
```

---

## Installation

1. **Clone this repository**
   ```bash
   git clone <your_repo_url>
   cd <repo_folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **(Optional) Configure images/assets**
   - Place images in `src/assets/image/`. Update import paths if you wish to use different images.

4. **Run the local development server**
   ```bash
   npm run dev
   ```
   or (depending on your setup)
   ```bash
   npm start
   ```

---

## Available Scripts

- `npm run dev` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm run preview` — Preview production build.
- `npm start` — Alias for development (optional, depending on config).

---

## Component Overview

### Main Components

- **Navbar:** Persistent top navbar with navigation links and contact dialog.
- **HeroSection:** Large banner for page intros with customizable titles.
- **AboutUs:** "About the School" section, with text and decorative images/animations.
- **OurTeacher:** Features main school staff/teachers.
- **Testimonials:** Carousel/grid of parent/student testimonials.
- **WhyChooseUs:** Section describing school's unique selling points.
- **Footer:** School info, copyright.

### Utility Components

- **ui/button.tsx** — UI-styled buttons.
- **ui/dialog.tsx** — Modal dialog (used for contact).
- **contact-form.tsx** — School's contact form (used in modal).

---

## Routing

Uses React Router DOM. Routes are set in `src/App.tsx`:

| Path          | Component        |
|---------------|-----------------|
| `/`           | Home            |
| `/about`      | About           |
| `/services`   | Services        |
| `/contact`    | Contact         |

All routes include the persistent Navbar and Footer.

---

## Customization

- **Images:** Replace images in `src/assets/image/` or update paths as necessary.
- **Colors/Branding:** Adjust Tailwind classes in component files for your color scheme.
- **Text Content:** Edit the .tsx files in `src/components/` and `src/view/` for school-specific content.

---

## Contribution

1. Fork and clone the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make changes, commit (`git commit -am 'feat: ...'`)
4. Push to your fork, open a Pull Request!

---

## License

MIT

---

## Maintainer

- _Your Name or Organization_
- _Contact or website_

---
**Questions or suggestions?**  
Open an issue or contact the maintainer!
