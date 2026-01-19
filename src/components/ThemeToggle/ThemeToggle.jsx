import './ThemeToggle.css';
import { useId } from 'react';

export const ThemeToggle = ({handleThemeToggle, isChecked}) => {
    
    const id = useId(); //helper method to help generate unique id for each use case

    return (
        <div className="theme-toggle-container" aria-describedby={`toggle-theme-description${id}`} role="switch" tabIndex="0" aria-checked={isChecked ? true : false}>
            <span id={`toggle-theme-description${id}`} className="screen-reader-only">toggle between light and dark theme settings</span>
            <img className="light-mode-icon" src={isChecked ? "src/assets/theme/dark-mode-theme-light.svg" : "src/assets/theme/light-mode-theme-light.svg"} alt=""></img>
            <input id={`theme-toggle-switch${id}`} className="theme-toggle-switch" type="checkbox" onChange={handleThemeToggle} checked={isChecked}></input>
            <label htmlFor={`theme-toggle-switch${id}`} aria-hidden="true"></label>
            <img className="dark-mode-icon" src={isChecked ? "src/assets/theme/dark-mode-theme-dark.svg" : "src/assets/theme/light-mode-theme-dark.svg"} alt=""></img>
        </div>
    )
}