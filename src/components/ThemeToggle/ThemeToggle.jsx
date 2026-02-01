import './ThemeToggle.css';
import { useId } from 'react';

export const ThemeToggle = ({handleThemeToggle, isChecked}) => {
    
    const id = useId(); //helper method to help generate unique id for each use case
    const darkModethemeLightIcon = "src/assets/theme/dark-mode-theme-light.svg";
    const lightModethemeLightIcon = "src/assets/theme/light-mode-theme-light.svg";
    const darkModethemeDarkIcon = "src/assets/theme/dark-mode-theme-dark.svg";
    const lightModethemeDarkIcon = "src/assets/theme/light-mode-theme-dark.svg";

    return (
        <div className="theme-toggle-container" aria-describedby={`toggle-theme-description${id}`} role="switch" tabIndex="0" aria-checked={isChecked ? true : false}>
            <span id={`toggle-theme-description${id}`} className="screen-reader-only">toggle between light and dark theme settings</span>
            <img className="light-mode-icon" src={isChecked ? `${darkModethemeLightIcon}` : `${lightModethemeLightIcon}`} alt=""></img>
            <input id={`theme-toggle-switch${id}`} className="theme-toggle-switch" type="checkbox" onChange={handleThemeToggle} checked={isChecked}></input>
            <label htmlFor={`theme-toggle-switch${id}`} aria-hidden="true"></label>
            <img className="dark-mode-icon" src={isChecked ? `${darkModethemeDarkIcon}` : `${lightModethemeDarkIcon}`} alt=""></img>
        </div>
    )
}