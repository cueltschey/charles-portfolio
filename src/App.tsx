import Home from "./components/Home/Home.tsx"
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [page, setPage] = useState(0);
  const changePage = (page: number) => {
    setPage(page);
  }
  return (
    <div className='main'>
      <Navbar page={page} changePage={changePage} />
      <Home />
    </div>
  )
}

export default App
