import TypingEffect from '../../TypingEffect.tsx';
import "./Home.css";
import Title from './Title.tsx';


const Home = () => {   
    return(
        <div className="home">
            <Title text={"Hi, I'm Charles, an aspiring"} typingSpeed={300} finalWords={["developer", "polyglot","nature expert"]}/>
            <div style={{textAlign: "center"}}>
                My mother told me to make sure I loved my career... So I started a career in software.
            </div>
            <div>
                Since then I've grown to love computers and the power they have to change the world. Ever since I made my first project,
                I've been glued to the computer, trying new things. Now I have a wide variety of skills under my belt. From WPF aplications to 
                Chrome extensions to mobile apps, I've put my skills to use solving problems and increasing productivity.
            </div>
           </div>
    )
}

export default Home
