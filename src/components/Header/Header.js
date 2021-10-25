import './Header.scss'
import logo from '../../assets/images/Logo/BrainFlix-logo.svg'
import defaultPic from '../../assets/images/Images/Mohan-muruge.jpg'
import buttonIcon from '../../assets/images/Icons/upload.svg'

export default function Header () {
  return (
    <header className="header">
      <div className ="header__container">
        <a href= "../../../public/index.html" className="header__logo">
        <img src={logo} 
        alt='this is the logo for the Brainflix website' />
        </a>
          <div className='header__search__container'>
          <form>
            <input className="header__search" type='text' id='search' placeholder='Search'></input>
          </form>
          </div>
          <img className = 'header__img' src={defaultPic} alt='small icon of default a person' />
      </div>
      <button className='header__button'><img className='header__button__icon' 
      src={buttonIcon} alt='upload icon'
      />UPLOAD</button>
    </header>
  )
}