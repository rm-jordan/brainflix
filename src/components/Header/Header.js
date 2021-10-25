import logo from '../../assets/images/Logo/BrainFlix-logo.svg'

export default function Header () {
  return (
    <header className="header">
      <div className ="header__container">
        <a href= "../../../public/index.html" className="header__logo">
        <img src={logo} 
        alt='this is the logo for the Brainflix website' />
        </a>
      </div>
    </header>
  )
}