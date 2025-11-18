import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import HeroThreeScene from "./components/HeroThreeScene";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <ThemeToggle />
          <Header />
          <main>
            <HeroThreeScene />
            <About />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
