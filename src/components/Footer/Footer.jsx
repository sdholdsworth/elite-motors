import "./Footer.css"
import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks"

export const Footer = () => {
    return(
        <footer className="p-2 flex flex-col items-center">
            <nav id="footer-nav" className="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-y-0 sm:gap-x-4 sm:justify-center">
                <a href="/about">About</a>
                <a href="/ratings-and-reviews">Ratings and Reviews</a>
                <a href="/contact">Contact</a>
            </nav>
            <div id="footer-legal-info" className="flex flex-col items-center my-2">
                <p>Copyright<sup>&copy;</sup> Elite-Motors Ltd</p>
                <p>Registered office: Elite Motors Demo Portfolio Project, Sovereign Square Park, Concordia Street, Leeds, UK,  LS1 4AG</p>
                <p>All registered in England and Wales: VAT no. 900 0000 00</p>
            </div>
            <SocialMediaLinks />
        </footer>
    )
}