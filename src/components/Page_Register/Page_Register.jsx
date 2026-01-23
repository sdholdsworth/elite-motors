import './Page_Register.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading';

export const Page_Register = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/register/heading-icon-register-light-mode.png";
    const iconDarkMode = "../src/assets/pages/register/heading-icon-register-dark-mode.png";
    const heading = "Register";
    const headingSubContext = "Register with us today to make the most of our services we have on offer for you";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>REGISTER page component</h2>
            </section>
        </>
    )
}