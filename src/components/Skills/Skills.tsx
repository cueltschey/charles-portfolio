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
            <li id="javascript"></li>
            <li id="cpp"></li>
            <li id="csharp"></li>
            <li id="python"></li>
          </ul>
          <h1>Learning:</h1>
          <ul>
            <li id="c"></li>
            <li id="kotlin"></li>
            <li id="java"></li>
            <li id="assembly"></li>
          </ul>

        </div>
        <h1 style={{gridColumnStart: "2"}}>Data structures and algorithms</h1>
        <div className='data alg'>
          <h1>My implementations:</h1>
          <ul>
            <li><a href="https://github.com/cueltschey/AVL-tree-implemetnation">AVL tree</a></li>
            <li><a href="https://github.com/cueltschey/Heap-implementation">Heap</a></li>
            <li><a href="https://github.com/cueltschey/dijkstra-implementation">Dijktra's Algorithm</a></li>
          </ul>
          <ul>
            <li><a href="https://github.com/cueltschey/challenge4">BST</a></li>
            <li><a href="https://github.com/cueltschey/challenge4">Linked List</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
