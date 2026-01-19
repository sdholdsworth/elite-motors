import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import useLocalStorage from 'use-local-storage'

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
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
