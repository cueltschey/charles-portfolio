import { useState } from "react";
import autocompleter from "./Autocomplete_Demonstration.mp4";
import './Projects.css'
import TwinklingStars from "../../TwinklingStars";

const Projects = () => {
  return (
    <>
        <div className="section3">
        <TwinklingStars num_stars={200} y_vh={100}/>
        <video 
            autoPlay
            muted
            preload="auto"
            loop
            >
            <source src={autocompleter} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
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
    </>
  )
}

export default Projects
