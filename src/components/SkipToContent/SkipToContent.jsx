import { Link } from 'react-router'
import './SkipToContent.css'

export const SkipToContent = ({isDark}) => {

    return (   
        <div className="skip-to-content-link-wrapper" role="navigation" aria-label="skip to main content link">
            <Link id="skip-to-content-link" to={"#main-content"} className="skip-to-content-link" onClick={() => {document.querySelector('#main-content').focus();}}>Skip to content
                <img src={isDark ? "../src/assets/skip-to-content-icon-dark-mode.png" : "../src/assets/skip-to-content-icon-light-mode.png"} alt="" className="skip-to-content-link-icon"/>
            </Link>
        </div>   
    )
}