import './Contacts.css'
import resume from '../../assets/Charles Ueltschey Resume.pdf'
import Email from './Email.tsx'

const Contacts = () => {
  return (
    <div className="contacts">
      <ul>
      <h1>Personal Info:</h1>
        <li>email: chaseuelt@gmail.com</li>
        <li>github: <a href="https://github.com/cueltschey">cueltschey</a></li>
        <li>phone: 971-222-7416</li>
        <li>resume: <a href={resume} download>download</a></li>
      </ul> 
      <Email/>
    </div>
  )
}

export default Contacts
