# 🎨 HookMastery: AI Image Generation App

A powerful Next.js-based web application that leverages React Hooks and GPT-4 Image Generation API to create stunning AI-powered images from text prompts. This project demonstrates advanced React state management, custom hooks implementation, and modern TypeScript development practices.

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Project Overview

This project is part of the **ALX ProDev Frontend** curriculum and progressively demonstrates React Hooks mastery through seven incremental versions (0x07 - 0x13). Each version builds upon the previous one, introducing new concepts and best practices in modern React development.

### 🎯 Learning Objectives

By completing this project, you will master:

- ✅ React state management using `useState` and `useEffect`
- ✅ Creating and utilizing custom React hooks
- ✅ Environment variable management for API keys
- ✅ Next.js API routes implementation
- ✅ TypeScript interfaces and type safety
- ✅ Reusable component architecture
- ✅ Asynchronous operations in React
- ✅ Responsive UI design with Tailwind CSS
- ✅ API integration and error handling

---

## 🚀 Key Features

### 🖼️ AI-Powered Image Generation
- Generate unique images from text prompts using GPT-4
- Real-time image creation with loading states
- High-quality 512x512 image output

### 📸 Image Gallery System
- Automatic tracking of all generated images
- Thumbnail preview grid layout
- Click to view full-size images
- Persistent session history

### 🎨 Modern UI/UX
- Clean, intuitive interface
- Responsive design (mobile & desktop)
- Loading indicators and state feedback
- Smooth transitions and hover effects

### 🔧 Custom Hooks Architecture
- Reusable `useFetchData` hook for API calls
- Type-safe generic implementations
- Centralized state management
- Error handling and loading states

---

## 📁 Project Structure

```
alx-project-0x05-setup/
├── alx-project-0x07/          # Task 0: Basic layout setup
├── alx-project-0x08/          # Task 1: State management
├── alx-project-0x09/          # Task 2: Environment configuration
├── alx-project-0x10/          # Task 3: API integration
├── alx-project-0x11/          # Task 4: Image tracking
├── alx-project-0x12/          # Task 5: Custom hooks
└── alx-project-0x13/          # Task 5: Final implementation

Each project version contains:
├── components/
│   ├── common/
│   │   └── ImageCard.tsx      # Reusable image display component
│   └── layouts/
│       ├── Footer.tsx         # Application footer
│       ├── Header.tsx         # Navigation header
│       └── Layout.tsx         # Main layout wrapper
├── constants/
│   └── index.ts               # Application constants (WIDTH, HEIGHT)
├── hooks/
│   └── useFetchData.ts        # Custom hook for API calls
├── interfaces/
│   └── index.ts               # TypeScript type definitions
├── pages/
│   ├── api/
│   │   └── generate-image.ts  # Server-side API route
│   ├── _app.tsx               # Custom App component
│   └── index.tsx              # Home page component
├── public/                    # Static assets
├── styles/
│   └── globals.css            # Global styles
├── .env.local                 # Environment variables (not committed)
├── .gitignore                 # Git ignore rules
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript configuration
```

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- GPT-4 API key from [RapidAPI](https://rapidapi.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/alx-project-0x05-setup.git
cd alx-project-0x05-setup
```

### Step 2: Navigate to Project Version

```bash
# For the final version with custom hooks
cd alx-project-0x13

# Or start from the beginning
cd alx-project-0x07
```

### Step 3: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 4: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_GPT_API_KEY="your_rapidapi_key_here"
```

> **⚠️ Important:** Never commit your `.env.local` file to version control!

### Step 5: Run Development Server

```bash
npm run dev -- -p 3000
# or
yarn dev -p 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Project Evolution

### Task 0: Advanced Image Generation App (alx-project-0x07)
**Focus:** Basic application structure and layout components

- Created Header, Footer, and Layout components
- Set up TypeScript interfaces
- Implemented basic routing structure
- Established component hierarchy

### Task 1: Application of State (alx-project-0x08)
**Focus:** React state management introduction

- Implemented `useState` for prompt and image tracking
- Created ImageCard component
- Added controlled input components
- Set up state-driven UI updates

### Task 2: Set up Local Environment (alx-project-0x09)
**Focus:** Environment configuration and security

- Configured `.env.local` for API keys
- Implemented environment variable access
- Set up secure API key management
- Added `.gitignore` for sensitive files

### Task 3: Generate Image Based on User Prompt (alx-project-0x10)
**Focus:** API integration and server-side routes

- Created Next.js API route (`/api/generate-image`)
- Integrated GPT-4 Image Generation API
- Implemented error handling
- Added loading states

### Task 4: Track Images Generated (alx-project-0x11)
**Focus:** State arrays and image history

- Implemented image history tracking
- Created responsive gallery grid
- Added click-to-view functionality
- Managed complex state updates

### Task 5: Custom Hook (alx-project-0x12 & 0x13)
**Focus:** Code organization and reusability

- Created `useFetchData` custom hook
- Implemented generic TypeScript types
- Centralized API logic
- Improved code maintainability

---

## 🔑 Key Components

### `useFetchData` Hook

```typescript
const useFetchData = <T, R>() => {
  // Returns: isLoading, responseData, error, fetchData, generatedImages
}
```

**Features:**
- Generic type support for flexibility
- Automatic loading state management
- Error handling
- Image history tracking

### `ImageCard` Component

```typescript
interface GeneratedImageProps {
  imageUrl: string;
  prompt: string;
  width?: string;
  height?: string;
  action: (imagePath: string) => void;
}
```

**Features:**
- Responsive image display
- Click handler for full view
- Customizable dimensions
- Prompt display

---

## 🎨 Best Practices Implemented

### Component Organization
- Logical separation of layout and functional components
- Reusable component architecture
- Proper TypeScript typing

### State Management
- Strategic use of React hooks
- Custom hooks for complex logic
- Type-safe state definitions

### API Security
- Environment variables for sensitive data
- Server-side API routes
- No client-side API key exposure

### Type Safety
- Comprehensive TypeScript interfaces
- Generic typing in custom hooks
- Type-safe API responses

### UI/UX
- Responsive Tailwind CSS design
- Loading indicators
- Intuitive user interactions
- Mobile-first approach

---

## 🔧 API Configuration

### GPT-4 Image Generation API

**Endpoint:** `https://chatgpt-42.p.rapidapi.com/texttoimage`

**Request Format:**
```json
{
  "text": "your prompt here",
  "width": 512,
  "height": 512
}
```

**Headers Required:**
```javascript
{
  'x-rapidapi-key': 'YOUR_API_KEY',
  'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
  'Content-Type': 'application/json'
}
```

---

## 🚀 Available Scripts

```bash
# Development server
npm run dev -- -p 3000

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** API key not found
```bash
# Solution: Ensure .env.local exists and contains:
NEXT_PUBLIC_GPT_API_KEY="your_key_here"
```

**Issue:** Images not generating
- Verify API key is valid
- Check RapidAPI subscription status
- Inspect browser console for errors

**Issue:** TypeScript errors
```bash
# Rebuild type definitions
npm run type-check
```

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks Guide](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GPT-4 API Documentation](https://rapidapi.com/)

---

## 🔮 Future Enhancements

Potential features for production deployment:

- 🔐 User authentication and accounts
- 💾 Persistent storage (database integration)
- 🎨 Image editing capabilities
- 📤 Social sharing features
- 🔍 Advanced prompt suggestions
- 📊 Usage analytics dashboard
- 🌙 Dark mode support
- 🔄 Image regeneration options

---

## 📄 License

This project is part of the **ALX ProDev Frontend Curriculum**.

© 2025 ALX Africa. All rights reserved.

---

## 🤝 Contributing

This is an educational project. For contributions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📬 Contact & Support

For questions or support related to this project:

- 📧 Visit [ALX Support](https://www.alxafrica.com/)
- 📚 Check [ALX Documentation](https://savanna.alxafrica.com)
- 💬 Engage with peer reviews on the platform

---

<div align="center">

### 💜 Crafted with Passion by [Dwaynemaster007](https://github.com/Dwaynemaster007) 💜

*Mastering React Hooks, One Component at a Time* ✨

[![GitHub](https://img.shields.io/badge/GitHub-Dwaynemaster007-181717?style=for-the-badge&logo=github)](https://github.com/Dwaynemaster007)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF6B6B?style=for-the-badge&logo=google-chrome)](https://your-portfolio.com)

**Tags:** `react-hooks` · `nextjs` · `typescript` · `ai-image-generation` · `custom-hooks` · `tailwind-css` · `gpt-4` · `alx-prodev`

</div>