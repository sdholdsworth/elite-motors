import './App.css'
import { Routes, Route } from 'react-router'
import useLocalStorage from 'use-local-storage'
import { SkipToContent } from './components/SkipToContent/SkipToContent'
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
import useWindowWidth from './custom-hooks/useWindowWidth/useWindowWidth'

const App = () => {  

  const windowWidth = useWindowWidth();
  
  const responsiveLayoutConfig = () => {

  const headerNavMenuBtnInput = document.querySelector("#nav-menu-btn input");
  const navBar = document.querySelector("#navbar");
  const mainContentArea = document.querySelector("main");
  const body = document.querySelector("body");
  const headerHeight = document.querySelector("header").offsetHeight;
  const footerHeight = document.querySelector("footer").offsetHeight;
  let navBarHeight;

  if (navBar) {
    navBarHeight = document.querySelector("#navbar").offsetHeight;
  }
  
  if (windowWidth < 640) {
      mainContentArea.style.minHeight = `calc(100dvh - ${headerHeight}px - ${footerHeight}px)`;
  } else {
      mainContentArea.style.minHeight = `calc(100dvh - ${headerHeight}px - ${navBarHeight}px - ${footerHeight}px)`;
      navBar.style.top = `calc(0px + ${headerHeight}px)`;

      if(headerNavMenuBtnInput && headerNavMenuBtnInput.checked) {
        headerNavMenuBtnInput.checked = false;
      }

      if(body.classList.contains("prevent-scroll")) {
        body.classList.remove("prevent-scroll")
      }
    }
  }

  window.onload = () => {
    responsiveLayoutConfig();
  };

  window.onresize = () => {
    responsiveLayoutConfig();
  };
  
  window.onscroll = () => {
    responsiveLayoutConfig();
  }

  const pefersColourSchemeDefault = window.matchMedia("(prefers-color-scheme: light)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", pefersColourSchemeDefault);

  return (
    <div id="app" data-theme={isDark ? "dark" : "light"} >
      <SkipToContent isDark={isDark} />
      <Header isDark={isDark} setIsDark={setIsDark}/>
      {windowWidth >= 640 ? <Navbar isDark={isDark} setIsDark={setIsDark} /> : null }
      <main>
        <Routes>
          <Route index element={<Page_Home isDark={isDark} />} />
          <Route path="/cars" element={<Page_Cars isDark={isDark} />} />
          <Route path="/vans-and-pickups" element={<Page_VansPickups isDark={isDark} />} />
          <Route path="/bikes" element={<Page_Bikes isDark={isDark} />} />
          <Route path="/about" element={<Page_About isDark={isDark} />} />
          <Route path="/ratings-and-reviews" element={<Page_RatingsReviews isDark={isDark} />} />
          <Route path="/contact" element={<Page_Contact isDark={isDark} />} />
          <Route path="/my-garage" element={<Page_MyGarage isDark={isDark} />} />
          <Route path="/login" element={<Page_Login isDark={isDark} />} />
          <Route path="/register" element={<Page_Register isDark={isDark} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
