# DyinGroom Portfolio

A modern, responsive personal portfolio for DyinGroom (Jewel Ahmed) - Full-Stack Developer, Pentester, and Musician.

## 🚀 Tech Stack

- **Framework**: React + Vite (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **SEO**: React Helmet Async

## 🎨 Features

- Dark cyber-aesthetic design with neon green accents
- Fully responsive across all devices
- Smooth scroll navigation
- Animated logo and section transitions
- Music showcase with audio players
- Contact form with validation
- Accessibility compliant (WCAG 2.1)
- Docker containerized for easy deployment

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dgweb

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8103`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐳 Docker Deployment

```bash
# Build Docker image
docker build -t dyingroom-portfolio .

# Run container
docker run -p 8103:8103 dyingroom-portfolio
```

## 🌍 Environment Variables

Copy `.env.example` to `.env` and configure:

- `VITE_CONTACT_EMAIL` - Contact email override
- `VITE_GA_TRACKING_ID` - Google Analytics ID (optional)

## 📱 Sections

1. **Hero** - Animated logo, tagline, and CTAs
2. **About** - Personal narrative and quick facts
3. **Skills** - Categorized technical skills
4. **Music** - Track showcase with audio players
5. **Contact** - Contact form and social links
6. **Footer** - Compact footer with branding

## 🎵 Music Integration

The music section showcases original tracks with:
- Album art cards with hover animations
- HTML5 audio players
- Links to Spotify and YouTube

## 🔧 Customization

Update `src/lib/config.ts` to modify:
- Personal information
- Social media links
- Music tracks
- Contact details

## 📄 License

© 2024 DyinGroom. All rights reserved.