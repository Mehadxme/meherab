# Meherab Hossain - Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Tailwind CSS. Features a stunning 3D hero section, smooth animations, and dark/light theme support.

## ✨ Features

- **Interactive 3D Hero**: Built with Three.js and @react-three/fiber
- **Dark/Light Theme**: Seamless theme switching with persistent storage
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Frontend-only form (ready for backend integration)
- **Accessibility**: Keyboard navigation and ARIA labels
- **Performance**: Optimized with reduced motion support

## 🚀 Tech Stack

### Frontend
- React 19
- Three.js & @react-three/fiber
- Framer Motion
- Tailwind CSS
- Lucide Icons
- React Router

### Backend
- FastAPI
- MongoDB
- Motor (async MongoDB driver)

## 📦 Installation

### Prerequisites
- Node.js 20+
- Yarn package manager
- Python 3.9+

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd app
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Environment Variables**
   
   Frontend `.env` file is already configured with:
   ```
   REACT_APP_BACKEND_URL=<backend-url>
   ```
   
   Backend `.env` file is already configured with:
   ```
   MONGO_URL=<mongodb-url>
   DB_NAME=portfolio_db
   ```

## 🏃 Running the Application

### Development Mode

The application is managed by supervisor. To control the services:

```bash
# Start all services
sudo supervisorctl start all

# Start frontend only
sudo supervisorctl start frontend

# Start backend only
sudo supervisorctl start backend

# Restart all services
sudo supervisorctl restart all

# Check status
sudo supervisorctl status
```

### Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:8001/api

## 📁 Project Structure

```
app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── HeroThreeScene.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   ├── ThemeToggle.js
│   │   │   └── ui/           # Shadcn UI components
│   │   ├── contexts/
│   │   │   └── ThemeContext.js
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
└── README.md
```

## 🎨 Customization Guide

### Update Personal Information

1. **Name and Title**
   - Edit `/app/frontend/src/components/HeroThreeScene.js`
   - Update the `<h1>` and `<h2>` tags

2. **About Section**
   - Edit `/app/frontend/src/components/About.js`
   - Update the bio text and skills array

3. **Contact Information**
   - Edit `/app/frontend/src/components/Contact.js`
   - Update social links in the `socialLinks` array
   - Update email address

4. **Footer**
   - Edit `/app/frontend/src/components/Footer.js`
   - Update name and social links

### Color Scheme

The portfolio uses a pure monochrome color scheme. To customize:

1. Edit `/app/frontend/src/index.css` (Tailwind configuration)
2. Modify the CSS variables in the `:root` and `.dark` sections

### 3D Scene

To customize the Three.js scene:

1. Edit `/app/frontend/src/components/HeroThreeScene.js`
2. Modify the `AnimatedShape` component
3. Adjust colors, geometry, or animations

## 🔧 Backend Integration (Future)

The contact form is currently frontend-only. To enable email functionality:

1. Install email service dependencies (nodemailer or similar)
2. Create an API endpoint in `/app/backend/server.py`
3. Update the `handleSubmit` function in `/app/frontend/src/components/Contact.js`
4. Add SMTP credentials to `.env`

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px and above)
- Tablet (768px - 1920px)
- Mobile (320px - 767px)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Reduced motion support for accessibility
- Focus states for all interactive elements

## 🚀 Deployment

The application is ready for deployment. Recommended platforms:

### Frontend
- Vercel (recommended)
- Netlify
- AWS Amplify

### Backend
- Heroku
- DigitalOcean
- AWS EC2

### Database
- MongoDB Atlas (recommended)
- Self-hosted MongoDB

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Meherab Hossain**
- Email: meherab@gmail.com
- Facebook: [facebook.com/profile.php?id=100095323981228](https://facebook.com/profile.php?id=100095323981228)
- Instagram: [@_.meherab__](https://instagram.com/_.meherab__)

## 🙏 Acknowledgments

- Design inspiration from [jordan-breton.com](https://jordan-breton.com)
- Three.js community
- React and Tailwind CSS teams
- Shadcn UI components

---

Made with ❤️ from Bangladesh