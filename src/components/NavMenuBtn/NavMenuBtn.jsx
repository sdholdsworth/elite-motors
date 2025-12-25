import './NavMenuBtn.css';

export const NavMenuBtn = () => {

    const handleShowHideSidebarNavigation = () => {
        
        const navbarSide = document.querySelector("#navbar-side");
        const body = document.querySelector("body");
        
        if(navbarSide.classList.contains("hidden")) {
            navbarSide.classList.remove("hidden");
            navbarSide.classList.add("active");
            body.classList.add("prevent-scroll");
        } else {
            navbarSide.classList.add('hidden');
            navbarSide.classList.remove("active");
            body.classList.remove("prevent-scroll");
        }
    }

    return (
        <label id="nav-menu-btn" className="nav-menu-btn" onChange={handleShowHideSidebarNavigation} >       
            <input type="checkbox"/>
        </label>
    )
}