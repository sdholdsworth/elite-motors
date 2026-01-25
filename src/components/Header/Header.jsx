import { Link } from 'react-router'
import wheelLogo from '../../assets/wheel.svg'
import projectTitle from '../../assets/elite-motors-header-title.png'
import { MyGarage } from '../MyGarage/MyGarage'
import { LoginStatus } from '../LoginStatus/LoginStatus'
import { NavMenuBtn } from '../NavMenuBtn/NavMenuBtn'
import { NavSidebar } from '../NavSidebar/NavSidebar'
import './Header.css'
import '../../App'

export const Header = ({ isDark, setIsDark }) => {
    return (   
        <header>
            <div id="header-company-wrapper">
                <Link id="header-company-homelink" to="/" className="flex flex-row">
                    <img id="header-wheel-logo" src={wheelLogo} className="" alt="link to homepage"></img>
                </Link>
                <img id="header-company-name" src={projectTitle} alt="elite motors"></img>
            </div>
            <MyGarage />
            <LoginStatus isDark={isDark} />
            <NavMenuBtn />
            <NavSidebar isDark={isDark} setIsDark={setIsDark} />       
        </header>
    )
}