import { useState } from "react";
import autocompleter from "./Autocomplete_Demonstration.mp4";

const LanguageProj = () => {
    const [isVisible, setIsVisible] = useState(true)
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
    const instance = document.querySelector('.section3')
    if(instance) observer.observe(instance);
    console.log(isVisible);
  return (
    <div className='body three'>
        <h1 className={isVisible? "name fadeIn" : "name"}>hello world!</h1>
        <div className={isVisible? "section3 fadeIn" : "section3"}>
        <video 
            className="autocomplete-video" 
            autoPlay
            muted
            preload="auto"
            loop
            >
            <source src={autocompleter} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="boxwrap autodescription">
            <div className="desc">
                <h1>Russian Autocompleter</h1>
                <p>
                    This software is a WPF windows application made with C# and XAML.
                    It uses a tree like data structure called a Trie that makes searching
                    for suggestions extremely fast and efficient. It uses a SQLite database of over 10,000
                    words that I collected via websrcaping with Python.
                </p>
            </div>
        </div>
        
        </div>
      </div>
  )
}

export default LanguageProj