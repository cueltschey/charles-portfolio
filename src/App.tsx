import Home from "./components/Home/Home.tsx"
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/LanguageProj.tsx';
import Skills from './components/Skills/Skills.tsx'
import TwinklingStars from './TwinklingStars.tsx'
import Earth from './components/Earth/Earth.tsx'

function App() {
  const [page, setPage] = useState(0);
  const changePage = (page: number) => {
    setPage(page);
  }
  return (
    <div className='main'>
      <TwinklingStars/>
      <Navbar page={page} changePage={changePage} />
      <Home />
      <h1 className="maintitle">Where one interest meets another:<br/>Programming 🤝 Languages</h1>
      <Projects/>
      <h1 className="maintitle">Practicing the basics:<br/>Data structures and Algorithms 🌱</h1>
      <Skills/>
      <Earth/>
    </div>
  )
}

export default App
