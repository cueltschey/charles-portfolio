import "./Home.css";
import TypingEffect from "../../TypingEffect";
import ChaseClass from './ChaseClass.tsx'


const Home = () => {   
    const desc: string = "Hey there 👋, I am a junior developer working hard to become a capable engineer. I've completed over 20 full fledged projects, from android apps to algorithm implementations, and I've had plenty of fun along the way."
    return(
     <div className="home">
     <div className="intro-para"><TypingEffect text={desc} typingSpeed={70}/></div>
      <ChaseClass />
     </div>
  )  
}

export default Home
