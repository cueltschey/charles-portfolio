import './Contacts.css'
import resume from './Charles Ueltschey Resume.docx.pdf'
import TwinklingStars from '../../TwinklingStars'

const Contacts = () => {
  return (
    <div className="contacts">
      <TwinklingStars num_stars={200} y_vh={100}/>
      <ul>
        <li>email: chaseuelt@gmail.com</li>
        <li>github: <a href="https://github.com/cueltschey">cueltschey</a></li>
        <li>phone: 971-222-7416</li>
        <li>resume: <a href={resume} download>download</a></li>
      </ul> 
    </div>
  )
}

export default Contacts
