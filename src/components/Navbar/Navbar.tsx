import "./Navbar.css";


interface Props{
    changePage : (index : number) => void;
    page : number;
      
}

const Navbar = ({changePage, page}:Props) => {
    const pages: string[] = ["Home","Projects","Skills","Contact"];
    const move = (index : number) => {
      console.log(index)
    if(index === 0){
      window.scroll({top: 0, left: 0, behavior: "smooth"})
    }
    if(index === 1){
      window.scroll({top: 1000, left: 0, behavior: "smooth"})
    }
  }
  return (
    <div className='navbar'>
        <ul className="navlist">
            {pages.map((text: string, index: number) => (
                <li 
                onClick={page === index? move(index): undefined}
                className={page === index? "navitem active" : "navitem"}
                onClick={() => {changePage(index)}}>
                    {text}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
