
import './App.css'
import About from './components/About/About'
import LanguageProj from './components/Projects/LanguageProj'

function App() {
  

  return (
    <div>
      
        <About/>
      <div className="spacer layer1"/>
      <div className='body two'>
        <h1>Where one hobby meets another:
          <br/>Coding 🤝 Language learning
        </h1>
      </div>
      <div className="spacer layer1 flip"/>
      <LanguageProj/>
    </div>
  )
}

export default App
