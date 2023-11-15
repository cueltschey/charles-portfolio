import "./Home.css";
import Title from './Title.tsx';
import TwinklingStars from "../../TwinklingStars.tsx";
import chasepic from './chase_at_computer.jpg'
import chaseclass from './chaseclass.png'


const Home = () => {   
  const words = ["software developer ", "polyglot ","digital architect ", "creator ", "team leader ", "innovator ", "designer ","full stack programmer "];
    return(
        <div className="home">
            <TwinklingStars num_stars={200} y_vh={100}/>
            <div className="slider"><img src={chasepic}/>
        <p>Hey there 👋, I am a junior developer working hard to become a capable engineer. I've completed over 20 full fledged projects, from android apps to algorithm implementations, and I've had plenty of fun along the way.</p>

      </div>
            <div>
            <Title text={"Hi 👋, I'm Charles,\n an aspiring "} typingSpeed={150} finalWords={words}/>
              <img src={chaseclass} style={{height:"auto",width:"60vw",borderRadius:"10px", marginRight:"30px"}}/>            </div>
           </div>
    )
}

export default Home
