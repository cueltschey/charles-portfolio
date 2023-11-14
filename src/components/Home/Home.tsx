import "./Home.css";
import Title from './Title.tsx';
import TwinklingStars from "../../TwinklingStars.tsx";
import chasepic from './nervous_pepper.png'
import chaseclass from './chaseclass.png'


const Home = () => {   
  const words = ["software developer ", "polyglot ","digital architect ", "creator ", "team leader ", "innovator ", "designer ","full stack programmer "];
    return(
        <div className="home">
            <TwinklingStars num_stars={200} y_vh={100}/>
            <div className="slider"><img src={chasepic}/>
        <p>I am a junior developer working hard to become a capable developer. I have completed around 20 full fledged projects, from android apps to simple algorithm implementations. I have learned to apply concepts to real world issues, and make software that I can be proud of.</p>

      </div>
            <div>
            <Title text={"Hi 👋, I'm Charles,\n an aspiring "} typingSpeed={150} finalWords={words}/>
              <img src={chaseclass} style={{height:"auto",width:"auto",borderRadius:"10px"}}/>            </div>
           </div>
    )
}

export default Home
