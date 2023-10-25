
import './App.css'
import About from './components/About/About'

function App() {
  

  return (
    <div>
      <div className='body one'>
        <About/>
      </div>
      <div className="spacer layer1"/>
      <div className='body two'>
        <h1>Where one hobby meets another:
          <br/>Coding 🤝 Language learning
        </h1>
      </div>
      <div className="spacer layer1 flip"/>

    </div>
  )
}

export default App
