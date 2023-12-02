import "./ChaseClass.css"

const ChaseClass = () => {
  const languages1 = ['"C++"','"C"','"C#"','"SQL"','"Kotlin"','"Javascript"','"html"','"css"','"Python"']
  const languages2 = ['"shell"','"assembly"','"xml"','"Java"']
  const skills1 = ['"web development"','"android apps"','"WPF applications"','"data structures"']
  const skills2 = ['"Javascript animation"','"problem sloving"','"and many more to come..."']
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
        <li className="in4">{languages1.map((word) => (<><span className="string">{word}</span>, </>))}</li>
        <li className="in4">{languages2.map((word) => (<><span className="string">{word}</span>, </>))}</li>
        <li className="in3">]</li>
        <li className="in3">skills = [</li>
        <li className="in4">{skills1.map((word) => (<><span className="string">{word}</span>, </>))}</li>
        <li className="in4">{skills2.map((word) => (<><span className="string">{word}</span>, </>))}</li>
        <li className="in3">]</li>
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
