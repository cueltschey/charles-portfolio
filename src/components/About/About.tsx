import { useState } from "react";

const About = () => {
    const [isVisisble, setIsVisible] = useState(true);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
        });
    });
    const instance = document.querySelector('#about')
    if(instance) observer.observe(instance);
    console.log(isVisisble);
  return (
    <><h1 id="name">Charles Ueltschey</h1>
    <div className="about">
        <div className='boxwrap aboutlist' id="about">
            <div className={isVisisble? 'box wipe-in': 'box'}>
                <h1>full-time code <br/>enthusiast</h1>
            </div>
        </div>
        <div className='boxwrap aboutlist' id="about">
            <div className={isVisisble? 'box wipe-in': 'box'}>
            <h1>constant<br/> learner</h1>
            </div>
        </div>
        <div className='boxwrap aboutlist' id="about">
            <div className={isVisisble? 'box wipe-in': 'box'}>
                <h1>self-driving <br/>innovator</h1>
            </div>
        </div>
    </div></>
  )
}

export default About