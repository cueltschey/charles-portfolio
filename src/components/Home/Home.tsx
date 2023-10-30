import "./Home.css"
import description from 'description.txt';
const Home = () => {    
    return(
        <div className="home">
           <div className="description">
                <h1>Hi there, I'm Charles</h1>
                {description.map((word : string, index : number) => (
                    <h5 className="fadeIn">{word}</h5>    
                ))}
           </div> 
           <div className="picture"></div> 
        </div>
    )
}

export default Home
