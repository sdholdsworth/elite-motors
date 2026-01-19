import './LoginStatus.css'
import '../../App'

export const LoginStatus = ({ isDark }) => {
    return (
        <div id="login-status" className="login-status hidden">
            <div id="not-logged-in">
                <p><a href="/login"><img src={isDark ? "src/assets/header-user-icon-dark-mode.png" : "src/assets/header-user-icon-light-mode.png"} alt=""/>Login</a></p>
                <p><a href="/register"><img src={isDark ? "src/assets/header-register-icon-dark-mode.png" : "src/assets/header-register-icon-light-mode.png"} alt=""/>Register</a></p>
            </div>
            <div id="logged-in" className="hidden">
                <p><a href="/"><img src={isDark ? "src/assets/header-user-icon-dark-mode.png" : "src/assets/header-user-icon-light-mode.png"} alt=""/>Sign Out</a></p>
            </div>
        </div>
    )
}