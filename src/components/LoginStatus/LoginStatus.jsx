import { Link } from 'react-router'
import './LoginStatus.css'
import '../../App'

export const LoginStatus = ({ isDark }) => {

    const userIconDarkMode = "src/assets/header-user-icon-dark-mode.png";
    const userIconLightMode = "src/assets/header-user-icon-light-mode.png";
    const registerIconDarkMode = "src/assets/header-register-icon-dark-mode.png";
    const registerIconLightMode = "src/assets/header-register-icon-light-mode.png";

    return (
        <div id="login-status" className="login-status hidden">
            <div id="not-logged-in">
                <p><Link to="/login"><img src={isDark ? `${userIconDarkMode}` : `${userIconLightMode}`} alt=""/>Login</Link></p>
                <p><Link to="/register"><img src={isDark ? `${registerIconDarkMode}` : `${registerIconLightMode}`} alt=""/>Register</Link></p>
            </div>
            <div id="logged-in" className="hidden">
                <p><Link to="/"><img src={isDark ? `${userIconDarkMode}` : `${userIconLightMode}`} alt=""/>Sign Out</Link></p>
            </div>
        </div>
    )
}