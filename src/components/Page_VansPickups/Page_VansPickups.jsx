import './Page_VansPickups.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading';

export const Page_VansPickups = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/vans-and-pickups/heading-icon-vans-and-pickups-light-mode.png";
    const iconDarkMode = "../src/assets/pages/vans-and-pickups/heading-icon-vans-and-pickups-dark-mode.png";
    const heading = "View Our Elite List of Vans and Pickups";
    const headingSubContext = "A variety of vans and pickups to suit all your work needs";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>VANS & PICKUPS page component</h2>
            </section>
        </>
    )
}