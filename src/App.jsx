import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'


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
        const themeToggleDropDownMenu = document.querySelector("#theme-toggle-dropdown");
        
        const headerHeight = document.querySelector("header").offsetHeight;
        const navBarHeight = document.querySelector("#navbar").offsetHeight;
        const footerHeight = document.querySelector("footer").offsetHeight;

        if (window.innerWidth < 640) {
            headerMyGarage.classList.add("hidden");
            headerLoginStatus.classList.add("hidden");
            headerNavMenuBtn.classList.remove("hidden");
            navBar.classList.add("hidden");
            mainContentArea.style.minHeight = `calc(100dvh - ${headerHeight}px - ${footerHeight}px)`;
            themeToggleDropDownMenu.classList.add("hidden");
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

  return (
    <>
      <Header />
      <Navbar />      
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
