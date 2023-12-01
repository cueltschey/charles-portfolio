import "./Navbar.css";


interface Props{
    changePage : (index : number) => void;
    page : number;
}

const Navbar = ({changePage, page}:Props) => {
    const pages: string[] = ["About","Projects"];
  
  return (
    <div className='navbar'>
        <ul className="navlist">
            {pages.map((text: string, index: number) => (
                <li 
                style={{color: page === index? "#2f4a4d" : "#8ee5ed"}}
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
