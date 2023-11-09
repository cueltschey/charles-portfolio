import TwinklingStars from '../../TwinklingStars'
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <TwinklingStars num_stars={200} y_vh={100}/>
      <div className="wrapper">
        <h1>Programming langauges</h1>
        <div className='data lang'>
          <h1>Proficient™️:</h1>
          <ul>
            <li>Typescript</li>
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
          <h1>Fiddling with:</h1>
          <ul>
            <li>C</li>
            <li>Kotlin</li>
            <li>Java</li>
            <li>Assembly</li>
          </ul>

        </div>
        <h1 style={{gridColumnStart: "2"}}>Data structures and algorithms</h1>
        <div className='data alg'>
          <h1>My implementations:</h1>
          <ul>
            <li><a href="https://github.com/cueltschey/AVL-tree-implemetnation">AVL tree</a></li>
            <li><a href="https://github.com/cueltschey/Heap-implementation">Heap</a></li>
            <li><a>Dijktra's Algorithm</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
