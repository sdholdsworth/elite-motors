import './SocialMediaLinks.css'
import { Link } from 'react-router'

export const SocialMediaLinks = () => {
    return (
        <div id="social-media-links" className="flex flex-row justify-between">
            <Link to="#facebook" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-facebook.svg" alt="Facebook" />
            </Link>
            <Link to="#instagram" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-instagram.svg" alt="Instagram" />
            </Link>
            <Link to="#twitter" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-twitter.svg" alt="Twitter" />
            </Link>
            <Link to="#youtube" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-youtube.svg" alt="YouTube" />
            </Link>
        </div>
    )   
}