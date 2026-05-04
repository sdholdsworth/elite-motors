import { NavLink } from 'react-router'
import "./Footer.css"
import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks"

export const Footer = () => {
    return(
        <footer>
            <nav id="footerNav">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/ratings-and-reviews">Ratings and Reviews</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div id="footerLegalInfo">
                <p>Copyright<sup>&copy;</sup> Elite-Motors Ltd</p>
                <p>Registered office: Elite Motors Demo Portfolio Project, Sovereign Square Park, Concordia Street, Leeds, UK,  LS1 4AG</p>
                <p>All registered in England and Wales: VAT no. 900 0000 00</p>
            </div>
            <SocialMediaLinks />
        </footer>
    )
}