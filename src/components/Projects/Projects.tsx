import autocompleter from "./Autocomplete_Demonstration.mp4";
import './Projects.css'
import androidbooksreader from './adroid_booksreader_alpha.mp4'
import wordchad from './word_chad_demo.mp4'
import cheron from './cheron_demo.mp4'
import pong from '../../assets/pong-clone_demonstration.mp4'
import HoverableDiv from "./HoverDiv";

const Projects = () => {
  return (
    <>
      <HoverableDiv />
      <div className="proj">
        <a href="https://github.com/cueltschey/pong-clone">
        <video 
            autoPlay
            muted
            preload="auto" 
            loop
            >
            <source src={pong} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        </a>
            <div className="desc">
              <h1>Pong Clone</h1>
          <li id="lang">Main Language: C++</li>
          <li id="lang">Framework: Windows API</li>
          <li id="fet">A take on pong to try and make it more exciting</li>
          <li id="fet">First player to reach 10 points wins</li>
          <li id="err">Some bugs with the controls</li> 
          <li>Github: <a href="https://github.com/cueltschey/pong-clone">pong-clone</a></li>
        </div>
      </div>
        <div className="proj">
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
          <li>Github: <a href="https://github.com/cueltschey/RussianAutocompleter">RussianAutocompleter</a></li>
        </div>
      </div>

      <div className="proj">
        <video 
            autoPlay
            muted
            preload="auto" 
            loop
            >
            <source src={cheron} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
            <div className="desc">
              <h1>Digital Assistant application</h1>
          <li id="lang">Main Languages: C# Python XAML</li>
          <li id="lang">Framework: WPF .NET</li>
          <li id="fet">Googles a query with the google command</li>
          <li id="fet">Can search for computer files with internal search</li>
          <li id="fet">Opens any application with open command</li>
          <li id="err">Will soon be voice operated</li> 
          <li>Github: <a href="https://github.com/cueltschey/CheronChatroom">CheronChatroom</a></li>
        </div>
      </div>


      <div className="proj">
        <video 
            autoPlay
            muted
            preload="auto"
            loop
            >
            <source src={wordchad} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
            <div className="desc">
              <h1>Dictionary Chrome Extension</h1>
          <li id="lang">Main Languages: Typescript Javascript</li>
          <li id="lang">Framework: React Chrome API</li>
          <li id="fet">Allows for quick searching of words</li>
          <li id="fet">Returns a list of usages and definitions</li>
          <li id="fet">Uses highlighted text to search</li>
          <li>Deployed: <a href="https://chromewebstore.google.com/detail/word-chad/eaonfbgaekplicnhojipciplmafhlceg">Chrome Web Store</a></li>
          <li>Github: <a href="https://github.com/cueltschey/word-chad">word-chad</a></li>
        </div>
      </div>

      <div className="proj">
        <video
          autoPlay
          muted
          preload="auto"
          loop
        >
          <source src={androidbooksreader} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className="desc">
            <h1>Android Booksreader (alpha)</h1>
          <li id="lang">Main Languages: Kotlin Java XML</li>
          <li id="fet">Uses Firebase auth and Storage</li>
          <li id="fet">Customizable UI</li>
          <li id="fet">Stores quotes and highlights</li>
          <li id="err">No open registration (to limit hosting cost)</li> 
          <li id="err">Still missing some features</li>
          <li>Github: <a href="https://github.com/cueltschey/android-booksreader">android-booksreader</a></li>
        </div>
      </div>
    </>
  )
}

export default Projects
