import './ThemeToggle.css';

export const ThemeToggle = () => {

    //show/hide theme mode options    
    const themeToggleMenu = () => {
        document.querySelector('#theme-toggle-dropdown').classList.toggle("hidden");
    }

    return (
        <aside id="theme-toggle-wrapper" className="p-1 flex flex-row flex-grow-0 items-center justify-end h-min">
            <button id="theme-toggle-btn" className="flex flex-row flex-nowrap" aria-label="toggle colour theme" aria-expanded="false" aria-controls="theme-toggle-dropdown" onClick={themeToggleMenu}>Theme</button>
            <div id="theme-toggle-dropdown" className="theme-toggle-dropdown-menu hidden">
                <ul>
                    <li><button id="os-default" className="flex flex-row flex-nowrap" type="button">System</button></li>
                    <li><button id="light-mode" className="flex flex-row flex-nowrap" type="button">Light</button></li>
                    <li><button id="dark-mode" className="flex flex-row flex-nowrap" type="button">Dark</button></li>
                </ul>
            </div>  
        </aside>
    )
}