import './Page_Contact.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading';

export const Page_Contact = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/contact/heading-icon-contact-light-mode.png";
    const iconDarkMode = "../src/assets/pages/contact/heading-icon-contact-dark-mode.png";
    const heading = "Contact Us";
    const headingSubContext = "Need to get in touch? or view any of our listings? ... find out all you need to know right here";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>CONTACT US page component</h2>
            </section>
        </>
    )
}