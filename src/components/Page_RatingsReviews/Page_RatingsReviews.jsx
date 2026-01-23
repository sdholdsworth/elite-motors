import './Page_RatingsReviews.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading';

export const Page_RatingsReviews = ({isDark}) => {

    const iconLightMode = "../src/assets/pages/ratings-and-reviews/heading-icon-ratings-and-reviews-light-mode.png";
    const iconDarkMode = "../src/assets/pages/ratings-and-reviews/heading-icon-ratings-and-reviews-dark-mode.png";
    const heading = "Our Ratings and Reviews";
    const headingSubContext = "Find out what our customers say about us...";

    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>

            <section id="main-page-content">
                <h2>RATINGS AND REVIEWS page component</h2>
            </section>
        </>
    )
}