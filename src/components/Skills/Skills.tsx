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
            <li>SQL</li>
          </ul>
        </div>
        <div className='data lang'>
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
          <h1>Data Structures I've implemented:</h1>
          <ul>
            <li><a href="https://github.com/cueltschey/AVL-tree-implemetnation">AVL tree</a></li>
            <li><a href="https://github.com/cueltschey/Heap-implementation">Heap</a></li>
          </ul>
        </div>
        <div className='data'>
          <h1>Projects I used these skills:</h1>
          <ul>
            <li>In my AI chatroom project I used a heap for data storage</li>
            <li>In my Autocompleter I made  Trie in C# to increase the search efficiency</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
