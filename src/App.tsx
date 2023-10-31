import Home from "./components/Home/Home.tsx"
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/LanguageProj.tsx';
import Skills from './components/Skills/Skills.tsx'
import TwinklingStars from './TwinklingStars.tsx'
import Earth from './components/Earth/Earth.tsx'
import TypingEffect from "./TypingEffect.tsx";

const title1 = 'Where one interest meets another: Programming 🤝 Languages'
const title2 = 'Practicing the basics: Data structures and Algorithms 🌱'

function App() {
  const [page, setPage] = useState(0);
  const changePage = (page: number) => {
    setPage(page);
  }
  return (
    <div className='main'>
      <TwinklingStars/>
      <Navbar page={page} changePage={changePage} />
      <Home/>
      <TypingEffect text={title1} typingSpeed={50}/>
      <Projects/>
      <TypingEffect text={title2} typingSpeed={50}/>
      <Skills/>
      <Earth/>
    </div>
  )
}

export default App
