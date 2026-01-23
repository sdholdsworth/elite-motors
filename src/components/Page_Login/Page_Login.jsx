import './Page_Login.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading';

export const Page_Login = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/login/heading-icon-login-light-mode.png";
    const iconDarkMode = "../src/assets/pages/login/heading-icon-login-dark-mode.png";
    const heading = "Login";
    const headingSubContext = "Log into your account here to pick up right where you left off...";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>LOGIN page component</h2>
            </section>
        </>
    )
}