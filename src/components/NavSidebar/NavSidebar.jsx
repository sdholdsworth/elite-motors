import { NavLink, Link } from 'react-router';
import './NavSidebar.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import '../../App'

export const NavSidebar = ({ isDark, setIsDark }) => {
    return (
        <aside id="navbar-side" className="navbar-side hidden">
            <div id="navbar-side-my-garage-login-status-wrapper">
                <div id="navbar-side-my-garage">
                    <Link to="/my-garage">
                        <p>My Garage</p>
                        <img src="/src/assets/my-garage-icon.svg" alt="" />
                    </Link>
                </div>
                <div id="navbar-side-login-status">
                    <div id="navbar-side-not-logged-in">
                        <p><Link to="/login"><img src={isDark ? "src/assets/navbar-side-user-icon-dark-mode.png" : "src/assets/navbar-side-user-icon-light-mode.png"} alt=""/>Login</Link></p>
                        <p><Link to="/register"><img src={isDark ? "src/assets/navbar-side-register-icon-dark-mode.png" : "src/assets/navbar-side-register-icon-light-mode.png"} alt=""/>Register</Link></p>
                    </div>
                    <div id="navbar-side-logged-in" className="hidden">
                        <p><Link to="/"><img src={isDark ? "src/assets/navbar-side-user-icon-dark-mode.png" : "src/assets/navbar-side-user-icon-light-mode.png"} alt=""/>Sign Out</Link></p>
                    </div>
                </div>   
            </div>
            <div className="navbar-side-theme-toggle-wrapper">
                <ThemeToggle isChecked={isDark} handleThemeToggle={() => setIsDark(!isDark)} />
            </div>
            <nav id="navbar-side-main-nav" className="p-1">
                <ul>
                    <li className="nav-sidebar-link-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-sidebar-link-item"><NavLink to="/cars">Cars</NavLink></li>
                    <li className="nav-sidebar-link-item"><NavLink to="/vans-and-pickups">Vans and Pickups</NavLink></li>
                    <li className="nav-sidebar-link-item"><NavLink to="/bikes">Bikes</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}