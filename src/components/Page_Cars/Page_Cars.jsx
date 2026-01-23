import './Page_Cars.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading'

export const Page_Cars = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/cars/heading-icon-cars-light-mode.png";
    const iconDarkMode = "../src/assets/pages/cars/heading-icon-cars-dark-mode.png";
    const heading = "View Our Elite List of Cars";
    const headingSubContext = "A variety of cars to suit everyone's needs at great affordable prices";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>CARS page component</h2>
            </section>
        </>
    )
}