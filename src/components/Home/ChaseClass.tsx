import "./ChaseClass.css"

const ChaseClass = () => {
  const languages = ['"C++"','"C"','"C#"','"SQL"','"Kotlin"','"Javascript"','"html"','"css"','"Python"',
  '"shell"','"assembly"','"xml"','"Java"']
  const skills = ['"web development"','"android apps"','"WPF applications"','"data structures"',
  '"Javascript animation"','"problem sloving"','"and many more to come..."']
  const hobbies = ['"programming"','"microscopy"','"rock climbing"','"camping"']
  return (
    <div className='chaseclass'>
        <ul className="dummyclass">
        <li><span className="include">#include</span> <span className="string">"programmer.h"</span></li>
        <li><span className="classinit">class</span> <span>Charles : programmer</span> {"{"}</li>
        <li className="in1"><span className="classflag">public</span>:</li>
        <li className="in2"><span className="typeid">int</span> <span>gpa</span>;</li>
        <li className="in2"><span className="typeid">string</span> <span>school</span>;</li>
        <li className="in2"><span className="typeid">string</span>[] <span>languages</span>;</li>
        <li className="in2"><span className="typeid">string</span>[] <span>skills</span>;</li>
        <li className="in2"><span>Charles</span>(){"{"}</li>
        <li className="in3"><span>gpa</span> = <span className="number">3.97</span>;</li>
        <li className="in3"><span>school</span>  = <span className="string">"Mississippi State University";</span></li>
        <li className="in3"><span>languages</span> = [</li>
        <div className="string-list">
        {languages.map((word, index) => (<span className="string" key={index}>{word}</span>))}
        </div>
        <li className="in3">]</li>
        <li className="in3"><span>skills</span> = [</li>
        <div className="string-list">
        {skills.map((word, index) => (<span className="string" key={index}>{word}</span>))}
        </div>
        <li className="in3">]</li>
        <li className="in2">{"}"}</li>

        <li className="in2"><span className="typeid">bool</span> <span>workHard</span>(<span className="typeid">int</span> <span>coffeCups</span>);</li>
        <li className="in2"><span className="typeid">int</span> <span>learn</span>(<span className="typeid">string</span> <span>subject</span>);</li>
        <li className="in1"><span className="classflag">private</span>:</li>
        <li className="in2"><span className="typeid">string</span> <span>favorite food</span> = <span className="string">"Tikka Masala"</span>;</li>
        <li className="in2"><span className="typeid">int</span> <span>relaxation_time</span> = <span className="number">12</span>;</li>
        <li className="in2"><span className="typeid">string</span>[] <span>hobbies</span> = [</li><div className="string-list" style={{marginLeft:"150px"}}>{
          hobbies.map((word, index) => (
            <span className="string" key={index}>{word}</span>
          ))
        }</div>
        <li className="in2">]</li>
        <li className="in2"> <span className="typeid">bool</span> <span>enjoyingLife</span> = <span className="number">true</span>;</li>
        <li>{"}"}</li>
        </ul>
    </div>
  )
}

export default ChaseClass
