import './Page_About.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading'

export const Page_About = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/about/heading-icon-about-light-mode.png";
    const iconDarkMode = "../src/assets/pages/about/heading-icon-about-dark-mode.png";
    const heading = "About Us";
    const headingSubContext = "Find out a little more about us right here...";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>ABOUT page component</h2>
            </section>
        </>
    )
}

