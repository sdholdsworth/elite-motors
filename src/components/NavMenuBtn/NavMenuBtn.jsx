import './NavMenuBtn.css';

export const NavMenuBtn = () => {

    const handleShowHideSidebarNavigation = () => {
        
        const navbarSide = document.querySelector("#navbarSide");
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
  
        <label htmlFor="navMenuBtn" className="nav-menu-btn" onChange={handleShowHideSidebarNavigation}>   
            <input id="navMenuBtn" type="checkbox" aria-label="navigation menu button" />
        </label>
    )
}