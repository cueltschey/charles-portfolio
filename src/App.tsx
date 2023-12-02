import { useState } from 'react';
import './App.css';
import Home from "./components/Home/Home.tsx";
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects.tsx';
import Skills from './components/Skills/Skills.tsx';
import Contacts from './components/Contacts/Contacts.tsx';
import AnimatedCursor from "react-animated-cursor";
import TypingEffect from './TypingEffect.tsx';

function App() {
  document.title = "Charles Ueltschey Portfolio"
  const [page, setPage] = useState(0);
  const changePage = (page: number) => {
    setPage(page);
  }
  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='200, 200, 100'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'button',
        'li'
      ]}
      />
    <div className='main'>
      <Navbar page={page} changePage={changePage} />
      {page === 0? <><Home/> <Contacts/></>: <><Projects/><Skills/></>}
    </div></>
        )
}

export default App
