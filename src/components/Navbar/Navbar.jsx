import './Navbar.css'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import '../../App'

export const Navbar = ({isDark, setIsDark}) => {
    return (
        <div id="navbar" className="navbar-wrapper">
            <nav id="main-nav">
                <ul>
                    <li className="nav-link-item"><a href="/">Home</a></li>
                    <li className="nav-link-item"><a href="/cars">Cars</a></li>
                    <li className="nav-link-item"><a href="/vans-and-pickups">Vans and Pickups</a></li>
                    <li className="nav-link-item"><a href="/bikes">Bikes</a></li>
                </ul>
            </nav>
            <ThemeToggle isChecked={isDark} handleThemeToggle={() => setIsDark(!isDark)} />
        </div>
    )
}