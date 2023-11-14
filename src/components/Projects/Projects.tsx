import { useState } from "react";
import autocompleter from "./Autocomplete_Demonstration.mp4";
import './Projects.css'
import TwinklingStars from "../../TwinklingStars";

const Projects = () => {
  return (
    <>
        <div className="proj">
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
          <li id="lang">Main Languages: C# Python XAML SQL</li>
          <li id="lang">Framework: WPF .NET</li>
          <li id="fet">Uses a Trie to speed up searching to O(log(n))</li>
          <li id="fet">Allows for autocompletion by clicking or tab</li>
          <li id="fet">Uses a database of over 10,000 Russian words</li> 
          <li id="err">Works with cyrillic alphabet only</li> 
        </div>
      </div>
      <div className="proj">
        <div className="desc">
            <h1>Android Booksreader (alpha)</h1>
          <li id="lang">Main Languages: Kotlin Java XML</li>
          <li id="fet">Uses Firebase auth and Storage</li>
          <li id="fet">Customizable UI</li>
          <li id="fet">Stores quotes and highlights</li>
          <li id="err">No open registration (to limit cost)</li> 
          <li id="err">Still missing some features</li>
        </div>
      </div>
    </>
  )
}

export default Projects
