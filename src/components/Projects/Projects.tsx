import autocompleter from "../../assets/Autocomplete_Demonstration.mp4";
import androidbooksreader from '../../assets/adroid_booksreader_alpha.mp4'
import wordchad from '../../assets/word_chad_demo.mp4'
import cheron from '../../assets/cheron_demo.mp4'
import pong from '../../assets/pong-clone-demonstration.mp4'
import gitget from '../../assets/gitget-demo.mp4'
import HoverableDiv from "./HoverDiv";
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-main">
      <HoverableDiv href="https://github.com/cueltschey/gitget"
        video={gitget}
        deployment=""
        description= {
          <div className="desc">
          <h1>GitGet</h1>
          <li id="lang">Main Language: C</li>
          <li id="lang">Framework: Debian package</li>
          <li id="fet">An attempt to make cloning from the cli more intiutive</li>
          <li id="fet">Uses Ncurses to make a GUI for easy searching and cloning</li>
          <li id="fet">Creates or Clones any repo the user has access to</li>
          <li id="err">Requires manual token export</li> 
        </div>
      } />


      <HoverableDiv href="https://github.com/cueltschey/pong-clone"
        video={pong}
        deployment=""
        description= {
          <div className="desc">
          <h1>Pong Clone</h1>
          <li id="lang">Main Language: C++</li>
          <li id="lang">Framework: Windows API</li>
          <li id="fet">A take on pong to try and make it more exciting</li>
          <li id="fet">First player to reach 10 points wins</li>
          <li id="err">Some bugs with the controls</li> 
        </div>
      } />



      <HoverableDiv href="https://github.com/cueltschey/RussianAutocompleter"
        video={autocompleter}
        deployment=""
        description={
        <div className="desc">
          <h1>Russian Autocompleter</h1>
          <li id="lang">Main Languages: C# Python XAML SQL</li>
          <li id="lang">Framework: WPF .NET</li>
          <li id="fet">Uses a Trie to speed up searching to O(log(n))</li>
          <li id="fet">Allows for autocompletion by clicking or tab</li>
          <li id="fet">Uses a database of over 10,000 Russian words</li> 
          <li id="err">Works with cyrillic alphabet only</li> 
        </div>
        } />



      <HoverableDiv href="https://github.com/cueltschey/CheronChatroom"
        video={cheron}
        deployment=""
        description={
        <div className="desc">
          <h1>Digital Assistant application</h1>
          <li id="lang">Main Languages: C# Python XAML</li>
          <li id="lang">Framework: WPF .NET</li>
          <li id="fet">Googles a query with the google command</li>
          <li id="fet">Can search for computer files with internal search</li>
          <li id="fet">Opens any application with open command</li>
        </div>
      } />




      <HoverableDiv href="https://github.com/cueltschey/word-chad"
        video={wordchad}
        deployment="https://chromewebstore.google.com/detail/word-chad/eaonfbgaekplicnhojipciplmafhlceg"
        description={

                  <div className="desc">
              <h1>Dictionary Chrome Extension</h1>
          <li id="lang">Main Languages: Typescript Javascript</li>
          <li id="lang">Framework: React Chrome API</li>
          <li id="fet">Allows for quick searching of words</li>
          <li id="fet">Returns a list of usages and definitions</li>
          <li id="fet">Uses highlighted text to search</li>
      </div>
        } />



      <HoverableDiv href="https://github.com/cueltschey/android-booksreader"
        video={androidbooksreader}
        deployment=""
        description={
        <div className="desc">
          <h1>Android Booksreader (alpha)</h1>
          <li id="lang">Main Languages: Kotlin Java XML</li>
          <li id="fet">Uses Firebase auth and Storage</li>
          <li id="fet">Customizable UI</li>
          <li id="fet">Stores quotes and highlights</li>
          <li id="err">No open registration (to limit hosting cost)</li> 
          <li id="err">Still missing some features</li>
        </div>
        } />

    </div>
  )
}

export default Projects
