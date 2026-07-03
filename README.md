# Airbnb Homepage Clone

A fully responsive clone of the Airbnb homepage built with React, Tailwind CSS, and ShadCN UI — created as part of my Frontend Development internship at Skillfied Mentor.

## 🔗 Live Demo
airbnb-clone-theta-woad-84.vercel.app

## 🛠️ Built With
- React (Vite)
- Tailwind CSS
- ShadCN UI (Switch, Sonner, Skeleton, Button components)
- React Icons

## ✨ Features
- Responsive navbar with category tabs (All, Homes, Experiences, Services)
- Functional search bar (Where / When / Who)
- Property listing cards across 5 city sections (Noida, Dehradun, Delhi, Goa, Shimla)
- **Dark mode toggle** — switches the entire UI theme using React state and a ShadCN Switch component
- **Wishlist/favourite toggle** — clicking the heart icon on any property card saves it to a wishlist and shows a toast notification (ShadCN Sonner)
- Clean footer with organized links
- Fully modular component architecture (Navbar, Searchbar, PropertyCard, PropertyGrid, Footer)

## 📚 What I Learned
- Setting up a React project with Vite and Tailwind CSS v4 from scratch
- Component-based architecture — breaking a full page into small, reusable components
- Managing state with `useState` and side effects with `useEffect`
- Integrating a third-party component library (ShadCN) into a React + Tailwind project
- Debugging real-world tooling issues (Vite config, Tailwind setup, Git/GitHub authentication)
- Using Git and GitHub for version control

## 🧩 Challenges Faced
- Initial Tailwind CSS v4 + Vite integration required careful config (removing legacy `postcss.config.js`/`tailwind.config.js` files that conflicted with the new Vite plugin approach)
- Git/GitHub authentication and folder path confusion during setup — resolved by using GitHub Desktop alongside the terminal
- Some external image URLs from Airbnb's CDN were blocked — switched to Unsplash for property images

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 👩‍💻 Author
Anshika — BCA student, Frontend Development Intern at Skillfied Mentor
