import './MainPageHeading.css'

export const MainPageHeading = ({isDark, pageHeadingIconLightMode, pageHeadingIconDarkMode, pageHeading, pageHeadingSubContext}) => {

return (
        <section className="page-heading-wrapper">
            <img src={isDark ? pageHeadingIconDarkMode : pageHeadingIconLightMode} alt="" className="page-heading-icon"></img>
            <h1 id="main-content" className="page-heading">{pageHeading}</h1>
            <p className="page-heading-sub-context">{pageHeadingSubContext}</p>
        </section>
    )
}