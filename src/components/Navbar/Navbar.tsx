import TypingEffect from "../../TypingEffect";
import "./Navbar.css";


interface Props{
    changePage : (index : number) => void;
    page : number;
}

const Navbar = ({changePage, page}:Props) => {
    const pages: string[] = ["<About/>","<Projects/>"];
    const subtitles: string[] = [
    "Learn more about me and what I do.",
    "Discover the many projects I've completed."
  ]
  
  return (
    <div className='navbar'>
        <ul className="navlist">
            {pages.map((text: string, index: number) => (
                <li 
                style={{color: page === index? "white" : "#8ee5ed"}}
                className={page === index? "navitem active" : "navitem"}
                onClick={() => changePage(index)}>
                    {text}
                {page == index? <div id="sub"><TypingEffect text={subtitles[index]} typingSpeed={100}/></div>: <></>}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
