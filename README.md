# EMC UAE PCI DSS Landing Page

A responsive marketing website presenting EMC UAE PCI DSS services and collecting demo-request details through frontend forms.

## Tech stack

React 19, JavaScript, Vite 7, Tailwind CSS 4, Framer Motion, Lucide React, and EmailJS Browser SDK.

## Features

- Hero section with an inquiry form and country calling-code selector.
- Reusable demo-request modal opened from calls to action.
- Animated service sections and a sticky-scroll presentation.
- Four-step process and service-benefit sections.
- Expandable FAQ answers.
- Responsive navigation and policy-text modals.

## Getting started

Use Node.js 20.19+ or 22.12+ and npm. From the repository root:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). Build with `npm run build`; inspect the built site with `npm run preview`.

**Configuration:** `src/components/Hero.jsx` and `src/components/BookDemoModal.jsx` use EmailJS placeholder public-key, service, and template IDs. Form delivery requires your own EmailJS configuration and intended recipient in a separate implementation change. Policy text is also placeholder content. The logo carousel and testimonial sections are commented out in `src/App.jsx`.

## Screenshots

Screenshots to be added: desktop landing page, mobile layout, and demo-request modal.

## License

This project is proprietary to EMC UAE.
