import './Page_Home.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading'

export const Page_Home = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/home/heading-icon-home-light-mode.png";
    const iconDarkMode = "../src/assets/pages/home/heading-icon-home-dark-mode.png";
    const heading = "Welcome to Elite Motors";
    const headingSubContext = "Your one-stop shop for quality vehicles at great value prices";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>HOME page component</h2>
            </section>
        </>
    )
}