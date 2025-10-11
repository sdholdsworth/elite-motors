import wheelLogo from '../../assets/wheel.svg';

export const Banner = () => {
    return(
    <header>
        <div className="headerLogo">
            <a href="/">
                <img src={wheelLogo} alt="logo"></img>
            </a>
        </div>
        <div className="headerTitle">
            <h1>Elite Motors</h1>
        </div>
    </header>
    )
}