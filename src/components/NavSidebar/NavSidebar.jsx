import './NavSidebar.css';

export const NavSidebar = () => {
    return (
        <aside id="navbar-side" className="navbar-side hidden">
            <div id="navbar-side-my-garage-login-status-wrapper">
                <div id="navbar-side-my-garage">
                    <a href="/my-garage">
                        <p>My Garage</p>
                        <img src="/src/assets/my-garage-icon.svg" alt="my garage icon" />
                    </a>
                </div>
                <div id="navbar-side-login-status">
                    <div id="navbar-side-not-logged-in">
                        <p><a href="/login"><img src="src/assets/navbar-side-user-icon.png" alt="user icon"/>Login</a></p>
                        <p><a href="/register"><img src="src/assets/navbar-side-register-icon.png" alt="register icon"/>Register</a></p>
                    </div>
                    <div id="navbar-side-logged-in" className="hidden">
                        <p><a href="/"><img src="src/assets/navbar-side-user-icon.png" alt="user icon"/>Sign Out</a></p>
                    </div>
                </div>   
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