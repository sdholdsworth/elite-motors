import "./Navbar.css"
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

export const Navbar = () => {
    return (
        <div id="navbar" className="navbar-wrapper">
            <nav id="main-nav" className="p-1">
                <ul>
                    <li className="nav-link-item"><a href="/">Home</a></li>
                    <li className="nav-link-item"><a href="/cars">Cars</a></li>
                    <li className="nav-link-item"><a href="/vans-and-pickups">Vans and Pickups</a></li>
                    <li className="nav-link-item"><a href="/bikes">Bikes</a></li>
                </ul>
            </nav>
            <ThemeToggle />
        </div>
    )
}