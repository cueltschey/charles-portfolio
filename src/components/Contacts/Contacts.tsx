import './Contacts.css'
import resume from './Charles Ueltschey Resume.docx.pdf'
import TwinklingStars from '../../TwinklingStars'
import Email from './Email.tsx'

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
      <Email/>
      <p>I am currently searching for an internship🔭:<br/><br/> If you would like to contact me feel free to call or email and I'll get back to you as soon as possible.</p>
    </div>
  )
}

export default Contacts
