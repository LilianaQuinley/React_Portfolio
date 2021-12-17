import './topbar.scss'
import {PhoneIphone, ContactMail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className = {'topbar ' + (menuOpen && 'active')} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className ='logo'>LILI-Q!</a>
          <div className="itemContainer">
            <PhoneIphone className='icon'/> 
            <span>(801) 809-7604</span>
          </div>
          <div className="itemContainer">
            <ContactMail className='icon'/>
            <span>Olga.L.Quinley@gmail.com</span>
          </div>
        </div>
       
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>

          
        </div>
      </div>
    </div>
  )
}
