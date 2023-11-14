import "./Home.css";
import Title from './Title.tsx';
import TwinklingStars from "../../TwinklingStars.tsx";


const Home = () => {   
  const words = ["developer ", "polyglot ","architect ", "creator ", "leader ", "innovator ", "designer "];
    return(
        <div className="home">
            <TwinklingStars num_stars={200} y_vh={100}/>
            <div className="slider"/>
            <Title text={"Hi 👋, I'm Charles, an aspiring "} typingSpeed={150} finalWords={words}/>
            <div>
                My mother told me to make sure I loved my career... So I started a career in software.<br></br>
                Since then I've grown to love computers and the power they have to change the world. 
                Now I have a wide variety of skills under my belt. From WPF aplications to 
                Chrome extensions to mobile apps, I've put my skills to use solving problems and increasing productivity.
            </div>
           </div>
    )
}

export default Home
