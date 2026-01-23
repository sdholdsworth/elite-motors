import './App.css'
import useLocalStorage from 'use-local-storage'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Page_Home } from './components/Page_Home/Page_Home'
import { Page_Cars } from './components/Page_Cars/Page_Cars'
import { Page_VansPickups } from './components/Page_VansPickups/Page_VansPickups'
import { Page_Bikes } from './components/Page_Bikes/Page_Bikes'
import { Page_About } from './components/Page_About/Page_About'
import { Page_RatingsReviews } from './components/Page_RatingsReviews/Page_RatingsReviews'
import { Page_Contact } from './components/Page_Contact/Page_Contact'
import { Page_MyGarage } from './components/Page_MyGarage/Page_MyGarage'
import { Page_Login } from './components/Page_Login/Page_Login'
import { Page_Register } from './components/Page_Register/Page_Register'

const App = () => {  

  const configureResponsiveSiteLayout = () => {
    
    const headerMyGarage = document.querySelector("#my-garage");
    const headerLoginStatus = document.querySelector("#login-status"); 
    const headerNavMenuBtn = document.querySelector("#nav-menu-btn");
    const headerNavMenuBtnInput = document.querySelector("#nav-menu-btn input");
    const navSideBar = document.querySelector("#navbar-side");
    const navBar = document.querySelector("#navbar");
    const mainContentArea = document.querySelector("main");
    const body = document.querySelector("body");
    
    const headerHeight = document.querySelector("header").offsetHeight;
    const navBarHeight = document.querySelector("#navbar").offsetHeight;
    const footerHeight = document.querySelector("footer").offsetHeight;

    if (window.innerWidth < 640) {
        headerMyGarage.classList.add("hidden");
        headerLoginStatus.classList.add("hidden");
        headerNavMenuBtn.classList.remove("hidden");
        navBar.classList.add("hidden");
        mainContentArea.style.minHeight = `calc(100dvh - ${headerHeight}px - ${footerHeight}px)`;
    } else {
        headerMyGarage.classList.remove("hidden");
        headerLoginStatus.classList.remove("hidden");
        headerNavMenuBtn.classList.add("hidden");
        navBar.classList.remove("hidden");
        navSideBar.classList.add("hidden");
        mainContentArea.style.minHeight = `calc(100dvh - ${headerHeight}px - ${navBarHeight}px - ${footerHeight}px)`;

        if(headerNavMenuBtnInput.checked) {
          headerNavMenuBtnInput.checked = false;
        }

        if(body.classList.contains("prevent-scroll")) {
          body.classList.remove("prevent-scroll")
        }
      }
  }

  //determine layout on resize
  window.onresize = () => {
    configureResponsiveSiteLayout();
  };
  //determine layout on load
  window.onload = () => {
    configureResponsiveSiteLayout();
  };

  const pefersColourSchemeDefault = window.matchMedia("(prefers-color-scheme: light)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", pefersColourSchemeDefault);

  return (
    <div id="app" data-theme={isDark ? "dark" : "light"}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Page_Home isDark={isDark} />
        <Page_Cars isDark={isDark} />
        <Page_VansPickups isDark={isDark} />
        <Page_Bikes isDark={isDark} />
        <Page_About isDark={isDark} />
        <Page_RatingsReviews isDark={isDark} />
        <Page_Contact isDark={isDark} />
        <Page_MyGarage isDark={isDark} />
        <Page_Login isDark={isDark} />
        <Page_Register isDark={isDark} />
      </main>
      <Footer />
    </div>
  )
}

export default App
