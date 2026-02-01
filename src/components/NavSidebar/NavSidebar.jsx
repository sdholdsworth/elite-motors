import { NavLink, Link } from 'react-router';
import './NavSidebar.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import '../../App'

export const NavSidebar = ({ isDark, setIsDark }) => {

    const userIconDarkMode = "src/assets/navbar-side-user-icon-dark-mode.png";
    const userIconLightMode = "src/assets/navbar-side-user-icon-light-mode.png";
    const registerIconDarkMode = "src/assets/navbar-side-register-icon-dark-mode.png";
    const registerIconLightMode = "src/assets/navbar-side-register-icon-light-mode.png";
    

    const closeNavSidebar = () => {
        const navMenu = document.querySelector("#nav-menu-btn input");
        const navbarSide = document.querySelector("#navbar-side");
        const body = document.querySelector("body");

        
        navbarSide.classList.remove("active");
        navbarSide.classList.add("hidden");
        body.classList.remove("prevent-scroll");
        navMenu.checked = false;
    }

    return (
        <aside id="navbar-side" className="navbar-side hidden">
            <div id="navbar-side-my-garage-login-status-wrapper">
                <div id="navbar-side-my-garage">
                    <Link to="/my-garage" onClick={closeNavSidebar}>
                        <p>My Garage</p>
                        <img src="/src/assets/my-garage-icon.svg" alt="" />
                    </Link>
                </div>
                <div id="navbar-side-login-status">
                    <div id="navbar-side-not-logged-in">
                        <p><Link to="/login" onClick={closeNavSidebar}><img src={isDark ? `${userIconDarkMode}` : `${userIconLightMode}` } alt=""/>Login</Link></p>
                        <p><Link to="/register" onClick={closeNavSidebar}><img src={isDark ? `${registerIconDarkMode}` : `${registerIconLightMode}` } alt=""/>Register</Link></p>
                    </div>
                    <div id="navbar-side-logged-in" className="hidden">
                        <p><Link to="/" onClick={closeNavSidebar}><img src={isDark ? `${userIconDarkMode}` : `${userIconLightMode}`} alt=""/>Sign Out</Link></p>
                    </div>
                </div>   
            </div>
            <div className="navbar-side-theme-toggle-wrapper">
                <ThemeToggle isChecked={isDark} handleThemeToggle={() => setIsDark(!isDark)} />
            </div>
            <nav id="navbar-side-main-nav" className="p-1">
                <ul>
                    <li className="nav-sidebar-link-item"><NavLink to="/" onClick={closeNavSidebar}>Home</NavLink></li>
                    <li className="nav-sidebar-link-item"><NavLink to="/cars" onClick={closeNavSidebar}>Cars</NavLink></li>
                    <li className="nav-sidebar-link-item"><NavLink to="/vans-and-pickups" onClick={closeNavSidebar}>Vans and Pickups</NavLink></li>
                    <li className="nav-sidebar-link-item"><NavLink to="/bikes" onClick={closeNavSidebar}>Bikes</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}