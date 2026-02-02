# SCHEDULE

📅 Timetable — React PWA

A modern Progressive Web App (PWA) built with React + Vite, designed for fast performance, offline support, and installability.
The app is automatically built and deployed to GitHub Pages using a CI/CD pipeline with GitHub Actions.

⸻

🚀 Live Demo

👉 Production URL

https://remyjohnny.github.io/schedule/


⸻

✨ Features
	•	⚡ Fast React app powered by Vite
	•	📱 Installable PWA
	•	📴 Offline support (Service Worker caching)
	•	🔄 Automatic updates
	•	🎨 Responsive UI
	•	🤖 Fully automated CI/CD deployment
	•	🌍 Hosted on GitHub Pages

⸻

🧱 Tech Stack
	•	React
	•	Vite
	•	vite-plugin-pwa
	•	GitHub Actions (CI/CD)
	•	GitHub Pages
	•	Node.js

⸻

📂 Project Structure

.
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── manifest.webmanifest
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── vite.config.js
├── package.json
└── README.md


⸻

🔀 Branch Strategy

This project follows a production-safe Git workflow:

dev   → development branch
main  → production branch

Workflow
	•	All development happens on dev
	•	A Pull Request is created from dev → main
	•	CI/CD runs automatically
	•	Deployment only happens from main
	•	Merge is blocked if the pipeline fails

⸻

🔁 CI/CD Pipeline (GitHub Actions)

The CI/CD pipeline automatically:
	1.	Installs dependencies
	2.	Builds the Vite app
	3.	Uploads build artifacts
	4.	Deploys to GitHub Pages

Trigger conditions
	•	Runs on Pull Requests to main
	•	Deploys on push to main only

This ensures:
	•	No broken builds reach production
	•	main is always stable

⸻

📦 PWA Configuration

The app is configured as a Progressive Web App with:
	•	Web App Manifest
	•	Service Worker (auto-updating)
	•	Offline caching
	•	Install support on desktop & mobile

⸻

🌍 Deployment

Deployment is fully automated.

Manual deployment is NOT required.

To release a new version:
	1.	Merge dev → main
	2.	GitHub Actions handles the rest 🚀

⸻

🧠 What This Project Demonstrates
	•	Real-world CI/CD practices
	•	Branch protection & required checks
	•	PWA standards & installability

⸻

👤 Author

Your Name
GitHub: https://github.com/RemyJohnny
