import './Skills.css'

const Skills = () => {
  return (
    <>
      <div className="wrapper">
        <div>
        <h1>Programming langauges</h1>
          <div className='data'>
          <h1>Proficient™️:</h1>
          <ul>
            <li id="javascript"></li>
            <li id="typescript"></li>
            <li id="cpp"></li>
            <li id="csharp"></li>
            <li id="python"></li>
          </ul>
          <h1>Learning:</h1>
          <ul>
            <li id="c"></li>
            <li id="kotlin"></li>
            <li id="java"></li>
            <li id="nasm"></li>
          </ul>
          </div>
        </div>

        <div style={{order:"2"}}>
        <h1>Data structures and algorithms</h1>
        <div className='data alg'>
          <h1>Personal Implementations:</h1>
          <ul>
            <li><a href="https://github.com/cueltschey/AVL-tree-implemetnation">AVL tree</a></li>
            <li><a href="https://github.com/cueltschey/Heap-implementation">Heap</a></li>
            <li><a href="https://github.com/cueltschey/dijkstra-implementation">Dijktra's Algorithm</a></li>
          </ul>
          <ul>
            <li><a href="https://github.com/cueltschey/challenge4">BST</a></li>
            <li><a href="https://github.com/cueltschey/challenge4">Linked List</a></li>
              <li><a href="https://github.com/cueltschey/hashtable-implementation">Hash Table</a></li>
          </ul>
          <h1>Live Leetcode problem count:</h1>
            <ul>
              <li>Easy Problems: 5</li>
              <li>Medium Problems: 3</li>
              <li>Heard Problems: 0</li>
            </ul>
        </div>
      </div>
      <div style={{order:"3"}}>
          <h1>Architecture</h1>   
          <div className='data alg'>
            <h1>Backends I've implemented:</h1>
            <ul>
              <li>MondoDB</li>
              <li>SQLite</li>
              <li>Firebase</li>
              <li>JSON</li>
            </ul>
            <h1>Frameworks/ Architectures:</h1>
            <ul>
              <li>React</li>
              <li>Vue</li>
              <li>WPF</li>
              <li>.NET</li>
              <li>Androidx</li>
            </ul>
          </div>
      </div>
    </div>
    </>
  )
}

export default Skills
