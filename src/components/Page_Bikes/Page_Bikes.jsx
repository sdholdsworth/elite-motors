import './Page_Bikes.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading';

export const Page_Bikes = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/bikes/heading-icon-bikes-light-mode.png";
    const iconDarkMode = "../src/assets/pages/bikes/heading-icon-bikes-dark-mode.png";
    const heading = "View Our Elite List of Motorcycles";
    const headingSubContext = "A variety of motorcycles, road, off-road and all types, you name it... we've got it";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>BIKES page component</h2>
            </section>
        </>
    )
}