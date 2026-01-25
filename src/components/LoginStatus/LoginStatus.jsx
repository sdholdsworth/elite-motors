import { Link } from 'react-router'
import './LoginStatus.css'
import '../../App'

export const LoginStatus = ({ isDark }) => {
    return (
        <div id="login-status" className="login-status hidden">
            <div id="not-logged-in">
                <p><Link to="/login"><img src={isDark ? "src/assets/header-user-icon-dark-mode.png" : "src/assets/header-user-icon-light-mode.png"} alt=""/>Login</Link></p>
                <p><Link to="/register"><img src={isDark ? "src/assets/header-register-icon-dark-mode.png" : "src/assets/header-register-icon-light-mode.png"} alt=""/>Register</Link></p>
            </div>
            <div id="logged-in" className="hidden">
                <p><Link to="/"><img src={isDark ? "src/assets/header-user-icon-dark-mode.png" : "src/assets/header-user-icon-light-mode.png"} alt=""/>Sign Out</Link></p>
            </div>
        </div>
    )
}