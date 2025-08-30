# 🕋 Umrah DIY - React Landing Site

A modern, responsive React-based landing site for Umrah trip planning, built with Vite, Tailwind CSS, and optimized for Cloudflare Pages deployment.

## ✨ Features

- **Modern Umrah Planning Flow**: Step-by-step flight and hotel selection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Islamic Theming**: Custom color palette with peaceful and spiritual tones
- **Single Page Application**: Built with React Router for smooth navigation
- **HubSpot Integration**: Lead capture through interest registration form
- **Static Pages**: Privacy Policy, Terms & Conditions, and Umrah Visa Information
- **Mock Data**: Sample flights and hotels for demonstration purposes

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd umrah-react-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
umrah-react-site/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Hero.jsx
│   │   ├── StepIndicator.jsx
│   │   ├── FlightSelector.jsx
│   │   ├── HotelSelector.jsx
│   │   ├── BookingSummary.jsx
│   │   ├── InterestForm.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsAndConditions.jsx
│   │   └── UmrahVisaInfo.jsx
│   ├── data/               # Mock data and utilities
│   │   └── mockData.js
│   ├── App.jsx             # Main App component with routing
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind CSS imports and base styles
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Tech Stack

- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework with custom Umrah theming
- **React Router**: Client-side routing for SPA functionality
- **HubSpot Forms API**: Lead capture and contact management

## 🎯 Key Components

### Hero Section
- Eye-catching gradient background with Islamic patterns
- Call-to-action button that smoothly scrolls to planning form
- Responsive typography and layout

### Flight Selector
- Passenger count selection (adults, children, infants)
- Outbound and return flight configuration
- Mock flight search results with interactive selection
- Real-time pricing and airline information

### Hotel Selector
- Multi-location hotel booking (up to 4 destinations)
- Date range validation based on flight selections
- Location-based hotel filtering (Mecca, Medina, Jeddah)
- Visual hotel cards with ratings and pricing

### Booking Summary
- Live calculation of total costs
- Per-person cost breakdown
- Flight and hotel details summary
- Integration with interest registration form

### Interest Registration
- HubSpot API integration for lead capture
- Modal-based form with email validation
- Success/error handling with user feedback

## 🌐 Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to Pages section
   - Click "Create a project"
   - Connect your Git provider (GitHub, GitLab, etc.)
   - Select your repository

3. **Configure Build Settings**
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or subdirectory if applicable)

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be deployed automatically on every push to main branch

### Method 2: Direct Upload

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Upload the dist folder**
   - Go to Cloudflare Pages dashboard
   - Click "Upload assets"
   - Upload the contents of the `dist` folder

### Environment Variables

If you need to configure environment variables for production:

1. In Cloudflare Pages dashboard, go to your project settings
2. Navigate to "Environment variables" section
3. Add any required variables (e.g., API keys, endpoints)

### Custom Domain (Optional)

1. In your Cloudflare Pages project, go to "Custom domains"
2. Add your domain name
3. Update your DNS records as instructed
4. SSL certificate will be automatically provisioned

## 🔧 Configuration

### Tailwind CSS Theming

The project uses a custom Umrah-themed color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'islamic-green': { /* Green shades for Islamic elements */ },
  'kaaba-gold': { /* Gold accents for premium elements */ },
  'peaceful-blue': { /* Blue tones for calm, trustworthy elements */ }
}
```

### HubSpot Integration

Update the HubSpot configuration in `src/components/InterestForm.jsx`:

```javascript
const portalId = 'YOUR_PORTAL_ID';
const formGuid = 'YOUR_FORM_GUID';
```

### Mock Data

Customize flights and hotels in `src/data/mockData.js`:
- Add more cities and routes
- Update hotel information and pricing
- Modify passenger options

## 🚀 Performance Optimizations

- **Vite**: Lightning-fast build tool with HMR
- **Code Splitting**: React Router enables automatic code splitting
- **Image Optimization**: Uses optimized images from Unsplash
- **Tailwind CSS**: Purged CSS for minimal bundle size
- **Cloudflare Pages**: Global CDN with edge caching

## 🔒 Security Features

- **HTTPS by default**: Cloudflare provides automatic SSL
- **Content Security Policy**: Can be configured via Cloudflare
- **Form validation**: Client-side validation for user inputs
- **API security**: HubSpot forms API with CORS handling

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile (default): Optimized for touch interactions
- Tablet (md): 768px and above
- Desktop (lg): 1024px and above
- Large screens (xl): 1280px and above

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if ESLint is configured)
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🕋 About Umrah DIY

Umrah DIY is designed to make Umrah planning accessible and straightforward for Muslim travelers worldwide. The platform provides tools to plan and book flights, accommodations, and other travel services for the sacred journey.

---

**Built with ❤️ for the Ummah**

For support or questions, please open an issue or contact the development team.
