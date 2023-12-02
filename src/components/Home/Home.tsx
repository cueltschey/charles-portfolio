import "./Home.css";
import chasepic from './chase_at_computer.jpg'
import TypingEffect from "../../TypingEffect";
import ChaseClass from './ChaseClass.tsx'


const Home = () => {   
    const desc: string = "Hey there 👋, I am a junior developer working hard to become a capable engineer. I've completed over 20 full fledged projects, from android apps to algorithm implementations, and I've had plenty of fun along the way."
    return(
     <div className="home">
     <div style={{width:"30%"}}className="slider"><img src={chasepic}/><TypingEffect text={desc} typingSpeed={70}/></div>
      <ChaseClass />
        </div>
  )  
}

export default Home
