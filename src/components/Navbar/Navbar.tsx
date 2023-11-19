import "./Navbar.css";


interface Props{
    changePage : (index : number) => void;
    page : number;
}

const Navbar = ({changePage, page}:Props) => {
    const pages: string[] = ["Home","Projects","Skills","Contact"];
  if(page === 1){
    document.body.style.overflowY = "scroll";
  }
  else{
    document.body.style.overflow = "hidden"
  }
  
  return (
    <div className='navbar'>
        <ul className="navlist">
            {pages.map((text: string, index: number) => (
                <li 
                style={{color: page === index? "white" : "#EEAEAA"}}
                className={page === index? "navitem active" : "navitem"}
                onClick={() => changePage(index)}>
                    {text}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
