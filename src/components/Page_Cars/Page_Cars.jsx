import './Page_Cars.css'
import '../../App'
import { MainPageHeading } from '../MainPageHeading/MainPageHeading'
import { carData } from '../Vehicles/motors-data/cars'
import { Car } from '../Vehicles/Car/Car'

export const Page_Cars = ({isDark}) => {

    //page header
    const iconLightMode = "../src/assets/pages/cars/heading-icon-cars-light-mode.png";
    const iconDarkMode = "../src/assets/pages/cars/heading-icon-cars-dark-mode.png";
    const heading = "View Our Elite List of Cars";
    const headingSubContext = "A variety of cars to suit everyone's needs at great affordable prices";

    //car data
    const cars = carData;
 
    return (
        <>
            <MainPageHeading isDark={isDark} pageHeadingIconDarkMode={iconDarkMode} pageHeadingIconLightMode={iconLightMode} pageHeading={heading} pageHeadingSubContext={headingSubContext}/>
            <hr></hr>
            <section id="carsForSale">                
                {Object.entries(cars).map(([id, car]) => (
                    <Car key={id} {...car} />
                ))}
            </section>
        </>
    )
}