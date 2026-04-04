import { Link } from 'react-router'
import wheelLogo from '../../assets/wheel.svg'
import projectTitle from '../../assets/elite-motors-header-title.png'
import { MyGarage } from '../MyGarage/MyGarage'
import { LoginStatus } from '../LoginStatus/LoginStatus'
import { NavMenuBtn } from '../NavMenuBtn/NavMenuBtn'
import { NavSidebar } from '../NavSidebar/NavSidebar'
import './Header.css'
import '../../App'
import useWindowWidth from '../../custom-hooks/useWindowWidth/useWindowWidth'

export const Header = ({ isDark, setIsDark }) => {

    const windowWidth = useWindowWidth();

    return (   
        <header>
            <div id="header-company-wrapper">
                <Link id="header-company-homelink" to="/" className="flex flex-row">
                    <img id="header-wheel-logo" src={wheelLogo} className="" alt="link to homepage"></img>
                </Link>
                <img id="header-company-name" src={projectTitle} alt="elite motors"></img>
            </div>
            {windowWidth >= 640 ? <MyGarage /> : null }
            {windowWidth >= 640 ? <LoginStatus isDark={isDark} /> : null }
            {windowWidth < 640 ? <NavMenuBtn isDark={isDark} /> : null }
            {windowWidth < 640 ? <NavSidebar isDark={isDark} setIsDark={setIsDark} /> : null }       
        </header>
    )
}