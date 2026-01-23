import './Page_MyGarage.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading';

export const Page_MyGarage = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/my-garage/heading-icon-my-garage-light-mode.png";
    const iconDarkMode = "../src/assets/pages/my-garage/heading-icon-my-garage-dark-mode.png";
    const heading = "My Garage";
    const headingSubContext = "Here's where you can view and update all your favourite saved motors whenever you like";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>MY GARAGE page component</h2>
            </section>
        </>
    )
}