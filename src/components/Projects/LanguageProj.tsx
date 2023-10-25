import { useState } from "react";
import amlang from "./Amlang_Demonstartion.mp4";
import autocompleter from "./Autocomplete_Demonstration.mp4";

const LanguageProj = () => {
    const [isVisible, setIsVisible] = useState(false)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            setIsVisible(true)
        }
        });
    });
    console.log(isVisible);

    document.body.onscroll = () => {
        const instance = document.querySelector('.section3')
        if(instance) observer.observe(instance);
    }
  return (
    <div className='body three'>
        <h1 className={isVisible? "name fadeIn" : "name"}>Language Projects</h1>
        <div className={isVisible? "section3 swipeUp" : "section3"}>
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
        <video
            className="amlang-video" 
            autoPlay
            muted
            preload="auto"
            loop
            >
            <source src={amlang} type="video/mp4"/>
        </video>
        <div className="boxwrap amlang-description">
            <div className="desc">

            </div>
        </div>
        </div>
      </div>
  )
}

export default LanguageProj