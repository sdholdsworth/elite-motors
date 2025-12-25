import './SocialMediaLinks.css'

export const SocialMediaLinks = () => {
    return (
        <aside id="social-media-links" className="flex flex-row justify-between">
            <a href="#" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-facebook.svg" alt="Facebook" />
            </a>
            <a href="#" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-instagram.svg" alt="Instagram" />
            </a>
            <a href="#" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-twitter.svg" alt="Twitter" />
            </a>
            <a href="#" rel="noopener noreferrer" onClick={e => e.preventDefault}>
                <img src="../src/assets/social/social-youtube.svg" alt="YouTube" />
            </a>
        </aside>
    )   
}