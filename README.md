# Alan Souza Portfolio

A modern, professional developer portfolio built with React 19, Vite 6, and Tailwind CSS 4. This project showcases my GitHub repositories, technical skills, and professional experience as a Computer Science student at FIAP and Software Development Intern at WAE Tecnologia.

## 🚀 Features

- **GitHub Integration**: Automatically fetches and displays real-time profile data and projects using the GitHub API.
- **Bilingual Support**: Full English and Portuguese (PT-BR) support with automatic browser language detection and manual toggle.
- **Modern UI**: High-contrast dark theme with a clean, professional aesthetic.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dynamic Projects**: Showcases public GitHub repositories, filtering out the profile README.
- **Smooth Animations**: Interactive elements enhanced with Framer Motion (Motion).
- **Categorized Skills**: Clear visualization of technical skills across Frontend, Backend, and Tools.
- **Professional Experience & Education**: Separate sections for work experience and academic background.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alansouza1/alansouza1.github.io.git
   cd alansouza1.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure constants (optional):
   Edit `src/constants.ts` to change the GitHub username, contact email, and other personal information.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 🐳 Docker Support

You can also run this project using Docker and Docker Compose.

### Development (with Hot Reload)

1. Start the development container:
   ```bash
   docker compose up
   ```

2. Access the app at `http://localhost:3000`.

### Production Build

1. Build the production image:
   ```bash
   docker build --target production -t alansouza-portfolio .
   ```

2. Run the production container:
   ```bash
   docker run -p 8080:80 alansouza-portfolio
   ```

3. Access the app at `http://localhost:8080`.

## 📜 Scripts

- `npm run dev`: Start the development server at `http://localhost:3000`.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run TypeScript type-checking.
- `npm run clean`: Remove the `dist` folder.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
Developed by [Alan Souza](https://github.com/alansouza1)
