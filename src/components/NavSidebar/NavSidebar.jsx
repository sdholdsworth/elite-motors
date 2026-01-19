import './NavSidebar.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import '../../App'


export const NavSidebar = ({ isDark, setIsDark }) => {
    return (
        <aside id="navbar-side" className="navbar-side hidden">
            <div id="navbar-side-my-garage-login-status-wrapper">
                <div id="navbar-side-my-garage">
                    <a href="/my-garage">
                        <p>My Garage</p>
                        <img src="/src/assets/my-garage-icon.svg" alt="" />
                    </a>
                </div>
                <div id="navbar-side-login-status">
                    <div id="navbar-side-not-logged-in">
                        <p><a href="/login"><img src={isDark ? "src/assets/navbar-side-user-icon-dark-mode.png" : "src/assets/navbar-side-user-icon-light-mode.png"} alt=""/>Login</a></p>
                        <p><a href="/register"><img src={isDark ? "src/assets/navbar-side-register-icon-dark-mode.png" : "src/assets/navbar-side-register-icon-light-mode.png"} alt=""/>Register</a></p>
                    </div>
                    <div id="navbar-side-logged-in" className="hidden">
                        <p><a href="/"><img src={isDark ? "src/assets/navbar-side-user-icon-dark-mode.png" : "src/assets/navbar-side-user-icon-light-mode.png"} alt=""/>Sign Out</a></p>
                    </div>
                </div>   
            </div>
            <div className="navbar-side-theme-toggle-wrapper">
                <ThemeToggle isChecked={isDark} handleThemeToggle={() => setIsDark(!isDark)} />
            </div>
            <nav id="navbar-side-main-nav" className="p-1">
                <ul>
                    <li className="nav-sidebar-link-item"><a href="/">Home</a></li>
                    <li className="nav-sidebar-link-item"><a href="/cars">Cars</a></li>
                    <li className="nav-sidebar-link-item"><a href="/vans-and-pickups">Vans and Pickups</a></li>
                    <li className="nav-sidebar-link-item"><a href="/bikes">Bikes</a></li>
                </ul>
            </nav>
        </aside>
    )
}