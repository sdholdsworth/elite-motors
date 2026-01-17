import './SocialMediaLinks.css'

export const SocialMediaLinks = () => {
    return (
        <div id="social-media-links" className="flex flex-row justify-between">
            <a href="#facebook" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-facebook.svg" alt="Facebook" />
            </a>
            <a href="#instagram" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-instagram.svg" alt="Instagram" />
            </a>
            <a href="#twitter" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-twitter.svg" alt="Twitter" />
            </a>
            <a href="#youtube" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-youtube.svg" alt="YouTube" />
            </a>
        </div>
    )   
}