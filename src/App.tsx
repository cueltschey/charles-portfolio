import { useState } from 'react';
import './App.css';
import Home from "./components/Home/Home.tsx";
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects.tsx';
import Skills from './components/Skills/Skills.tsx';
import Contacts from './components/Contacts/Contacts.tsx';

function App() {
  const [page, setPage] = useState(0);
  const [mosePos, setMousePos] = useState([0,0]);
  const changePage = (page: number) => {
    setPage(page);
  }
  const positionElement = (e : any)=> {
    setMousePos([e.clientX, e.clientY])
}

window.addEventListener('mousemove', positionElement)
  return (
    <>
    <div className='custom-cursor' style={{top: mosePos[1], left: mosePos[0]}}/>
    <div className='main'>
      <Navbar page={page} changePage={changePage} />
      {page === 0? <Home/>: page === 1? <Projects/>: page === 2? <Skills/>: <Contacts/>}
    </div></>
        )
}

export default App
