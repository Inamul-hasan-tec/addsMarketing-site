# EMC UAE PCI DSS Landing Page

A modern, conversion-focused landing page for EMC UAE's PCI DSS compliance services, built with React, Vite, and TailwindCSS.

## 🚀 Features

- **Hero Section**: Eye-catching hero with lead capture form
- **Social Proof**: Logo carousel showcasing trusted UAE companies
- **Features**: Why UAE businesses choose EMC UAE
- **Sticky Scroll**: Interactive PCI DSS services showcase with animations
- **4-Step Process**: Visual process flow with curved SVG connectors
- **Benefits**: Value proposition for PCI DSS compliance
- **Testimonials**: Auto-rotating customer testimonials with animated border progress
- **FAQ**: PCI DSS specific questions and answers
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Animations**: Smooth Framer Motion animations throughout

## 🎨 Brand Colors

- **Primary**: EMC Blue (#26A8E0)
- **Accent**: Subtle Black (#031432)
- **Background**: White with subtle gradients

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

## 🏗️ Build for Production

```bash
npm run build
```

## 🌐 Deployment

This project is optimized for Vercel deployment:

1. Push the code to your GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

### Manual Deployment

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with form
│   ├── Features.jsx    # Features grid
│   ├── StickyScroll.jsx # Interactive sticky scroll
│   ├── StepsProcess.jsx # 4-step process with SVG
│   ├── TestimonialsNew.jsx # Auto-rotating testimonials
│   └── ...
├── assets/             # Static assets
│   └── EMC Logo-01.png # Company logo
└── index.css           # Global styles and utilities
```

## 🎯 Key Features

### Sticky Scroll Component

- Two-column layout with sticky media container
- Intersection Observer API for scroll detection
- Smooth fade and scale animations
- Mobile-responsive design

### Testimonials Section

- Auto-rotating testimonials (5-second intervals)
- Animated border progress using conic-gradient
- Company initials with black accent
- Smooth transitions and hover effects

### 4-Step Process

- Curved SVG connectors between steps
- Staggered animations
- Responsive grid layout

## 🔧 Configuration

- **Vite Config**: Optimized for production builds
- **Vercel Config**: Custom headers and rewrites for optimal performance
- **ESLint**: Configured for React best practices

## 📝 License

This project is proprietary to EMC UAE.

---

Built with ❤️ for EMC UAE's PCI DSS compliance services.
