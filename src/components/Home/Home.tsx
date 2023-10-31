import "./Home.css"
import {useState, useEffect} from 'react'
import TypingEffect from './TypingEffect.tsx'

async function sleepOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000); // Sleep for 1000 milliseconds (1 second)
  });
}



const Home = () => {    
  const desc : string = "I'm a junior developer who is working hard to impove my skills and master the art of programming. I'm currently enrolled at Mississippi State university as a sophomore. I'm passionate about software development and I can't wait to apply what I've learned to the real world."    
    return(
        <div className="home">
            <TypingEffect text={"Hi, My name is charles"} typingSpeed={50}/>
            <TypingEffect text={desc} typingSpeed={50}/>
           </div>
    )
}

export default Home
