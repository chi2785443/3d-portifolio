# 🚀 3D Portfolio Website (2025)

A stunning and interactive **3D Portfolio Web Application** built with **React**, **Three.js**, **TailwindCSS**, and **GSAP**. This project leverages WebGL via `@react-three/fiber` to deliver a smooth, animated, and immersive user experience—perfect for showcasing your personal brand, projects, and contact info in a modern, visually captivating way.

## 📸 Screenshots

<div align="center">
  <img src="public/screenshots/Screenshot (246).png" width="49%" />
  <img src="public/screenshots/Screenshot (247).png" width="49%" />
  <img src="public/screenshots/Screenshot (248).png" width="49%" />
  <img src="public/screenshots/Screenshot (249).png" width="49%" />
  <img src="public/screenshots/Screenshot (250).png" width="49%" />
  <img src="public/screenshots/Screenshot (251).png" width="49%" />
  <img src="public/screenshots/Screenshot (252).png" width="49%" />
</div>

## 🔧 Tech Stack

- **React 19**
- **Three.js** via `@react-three/fiber` and `@react-three/drei`
- **GSAP** for smooth animations
- **TailwindCSS 4**
- **Vite** for blazing-fast development and build
- **EmailJS** for contact form integration
- **Responsive Design** via `react-responsive`

## 📁 Project Structure

three-d-portfolio-2025/ ├── public/ │ └── screenshots/ # UI preview images ├── src/ │ ├── assets/ # 3D models, textures, media │ ├── components/ # Reusable UI components │ ├── pages/ # Main sections (Home, About, Projects, Contact) │ ├── App.jsx │ └── main.jsx ├── tailwind.config.js ├── vite.config.js ├── .eslintrc.js └── package.json

bash
Copy
Edit

## 🛠 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/three-d-portfolio-2025.git
   cd three-d-portfolio-2025
   Install dependencies:
   ```

bash
Copy
Edit
npm install

# or

yarn install
Run the development server:

bash
Copy
Edit
npm run dev
Open your browser at http://localhost:5173

🚀 Scripts

Command Description
npm run dev Start development server with Vite
npm run build Build for production
npm run preview Preview production build locally
npm run lint Run ESLint to check code style
📬 Contact Form (EmailJS)
Email form is powered by EmailJS

Configure your Service ID, Template ID, and Public Key inside your environment or code.

Recommended: Store sensitive values in .env file (not committed).

✅ Features
Interactive 3D homepage using Three.js

Smooth animations and transitions via GSAP

Modular, reusable component structure

Fully responsive and mobile-friendly

Scroll and hover effects

Working contact form powered by EmailJS

👨‍💻 Author
Your Name – @yourgithub

🛡 License
This project is licensed under the MIT License.

💡 Feel free to fork this project and customize it to build your own next-gen portfolio website!
