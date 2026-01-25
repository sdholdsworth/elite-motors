import { NavLink } from 'react-router'
import './Navbar.css'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import '../../App'

export const Navbar = ({isDark, setIsDark}) => {
    return (
        <div id="navbar" className="navbar-wrapper">
            <nav id="main-nav">
                <ul>
                    <li className="nav-link-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-link-item"><NavLink to="/cars">Cars</NavLink></li>
                    <li className="nav-link-item"><NavLink to="/vans-and-pickups">Vans and Pickups</NavLink></li>
                    <li className="nav-link-item"><NavLink to="/bikes">Bikes</NavLink></li>
                </ul>
            </nav>
            <ThemeToggle isChecked={isDark} handleThemeToggle={() => setIsDark(!isDark)} />
        </div>
    )
}