import Home from "./components/Home/Home.tsx"
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/LanguageProj.tsx';
import Skills from './components/Skills/Skills.tsx'


function App() {
  const [page, setPage] = useState(0);
  const changePage = (page: number) => {
    setPage(page);
  }
  return (
    <div className='main'>
      <Navbar page={page} changePage={changePage} />
      <Home />
      <div className="sep one"/>
      <h1 className="maintitle">Where one interest meets another:<br/>Programming + Languages</h1>
      <div className="sep one flip"/>
      <Projects/>
      <div className="sep one"/>
      <h1 className="maintitle">Practicing the basics:<br/>Data structures and Algorithms</h1>
      <div className="sep one flip"/>
      <Skills/>

    </div>
  )
}

export default App
