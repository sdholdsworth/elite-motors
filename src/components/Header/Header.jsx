import wheelLogo from '../../assets/wheel.svg'
import projectTitle from '../../assets/elite-motors-header-title.png'
import { MyGarage } from '../MyGarage/MyGarage'
import { LoginStatus } from '../LoginStatus/LoginStatus'
import { NavMenuBtn } from '../NavMenuBtn/NavMenuBtn'
import { NavSidebar } from '../NavSidebar/NavSidebar'
import './Header.css'

export const Header = () => {

    return (   
        <header>
            <a id="header-company-homelink" href="/" className="flex flex-row">
                <img id="header-wheel-logo" src={wheelLogo} className="" alt="home shortcut logo"></img>
                <img id="header-company-name" src={projectTitle} className="" alt="home shortcut logo"></img>
            </a>
            
            <MyGarage />
            <LoginStatus />
            <NavMenuBtn />
            <NavSidebar />       
        </header>
    )
}