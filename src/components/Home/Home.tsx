import "./Home.css"
import {useState} from 'react'

async function sleepOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000); // Sleep for 1000 milliseconds (1 second)
  });
}



const Home = () => {    
  const desc : string = "I'm a junior developer who is working hard to impove my skills and master the art of programming. I'm currently enrolled at Mississippi State university as a sophomore. I'm passionate about software development and I can't wait to apply what I've learned to the real world."
  const [content, setContent] = useState(desc);
  const [length, setLength] = useState(0)
  useEffect(() => {
    setContent(content + desc[length])
  })
    return(
        <div className="home">
           <div className="description"> 
                <h1 className="title fadeIn">Hi there 👋, I'm Charles</h1>
                {desc.split(" ").map((word : string, index : number) => (
                <h6 className="fadeIn" 
            id={String(index)} 
            style={{animationDelay: (String(index * 0.15) + "s")}}
            >{word}</h6>
                ))}
            <div id="typewriter" dangerouslySetInnerHTML={{__html: content}}/> 
           </div>
           </div>
    )
}

export default Home
