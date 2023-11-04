import { useState } from 'react';
import './App.css';
import TwinklingStars from './TwinklingStars.tsx';
import TypingEffect from "./TypingEffect.tsx";
import Earth from './components/Earth/Earth.tsx';
import Home from "./components/Home/Home.tsx";
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects.tsx';
import Skills from './components/Skills/Skills.tsx';
import Contacts from './components/Contacts/Contacts.tsx';

const title1 = 'Some of the Projects I\'ve been working on 🔧'
const title2 = 'The skillset I\'ve been building🌱'

function App() {
  const [page, setPage] = useState(0);
  const changePage = (page: number) => {
    setPage(page);
  }
  return (
    <>
    <div className='main'>
      <TwinklingStars/>
      <Navbar page={page} changePage={changePage} />
      <Home/>
      <TypingEffect text={title1} typingSpeed={50}/>
      <Projects/>
      <TypingEffect text={title2} typingSpeed={50}/>
      <Skills/>
      <TypingEffect text={"Contact me 👋"} typingSpeed={50}/>
      <Contacts/>
    </div><Earth/></>
        )
}

export default App
