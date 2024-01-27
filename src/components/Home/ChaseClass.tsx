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
        <li><span className="classinit">class</span> Charles : programmer {"{"}</li>
        <li className="in1"><span className="classflag">public</span>:</li>
        <li className="in2"><span className="typeid">int</span> gpa;</li>
        <li className="in2"><span className="typeid">string</span> school;</li>
        <li className="in2"><span className="typeid">string</span>[] languages;</li>
        <li className="in2"><span className="typeid">string</span>[] skills;</li>
        <li className="in2">Charles(){"{"}</li>
        <li className="in3">gpa = <span className="number">3.97;</span></li>
        <li className="in3">school  = <span className="string">"Mississippi State University";</span></li>
        <li className="in3">languages = [</li>
        <ul className="string-list in4">
        <li className="in4">{languages.map((word) => (<><span className="string">{word}</span>, </>))}]</li>
        </ul>
        <li className="in3"/>
        <li className="in3"/>
        <li className="in3">skills = [</li>
        <ul className="string-list in4">
        <li className="in4">{skills.map((word) => (<span className="string">{word}</span>))}]</li>
        </ul>
        <li className="in3"/>
        <li className="in3"/>
        <li className="in2">{"}"}</li>

        <li className="in2"><span className="typeid">bool</span> workHard(<span className="typeid">int</span> coffeCups);</li>
        <li className="in2"><span className="typeid">int</span> learn(<span className="typeid">string</span> subject);</li>
        <li className="in1"><span className="classflag">private</span>:</li>
        <li className="in2"><span className="typeid">string</span> favorite food = <span className="string">"Tikka Masala"</span>;</li>
        <li className="in2"><span className="typeid">int</span> relaxation time = <span className="number">12</span>;</li>
        <li className="in2"><span className="typeid">string</span>[] hobbies = [{
          hobbies.map((word) => (
            <><span className="string">{word}</span>, </>
          ))
        }]</li>
        <li className="in2"><span className="typeid">bool</span> enjoyingLife = <span className="number">true</span>;</li>
        <li>{"}"}</li>
        </ul>
    </div>
  )
}

export default ChaseClass
