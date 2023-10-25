import { useState } from 'react'
import './App.css'

function App() {
  const [isVisisble, setIsVisible] = useState(false);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
      else{
        setIsVisible(false)
      }
    });
  });
  

  return (
    <div className='main'>
      <h1>hello</h1>
      <div className='boxwrap'>
        <div className={isVisisble? 'box wipe-in': 'box'}></div>
      </div>
      <div className='boxwrap'>
        <div className={isVisisble? 'box wipe-in': 'box'}></div>
      </div>
    </div>
  )
}

export default App
