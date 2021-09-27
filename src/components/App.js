import { Fragment } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from '../styles/theme';
import GlobalStyles from "../styles/global";
import NavBar from "./Navbar/Navbar";
import { BrightIcon, DarkIcon } from "./Icons/Icons";
import { LightLogo, DarkLogo } from "./Brand/Brand";
import Layout from "./Layout/Layout";
import Footer from "./Footer/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
      <Fragment>
        <AuthContextProvider>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
              <NavBar 
                toggleTheme={toggleTheme}
                themeIcon={theme==="light" ? <BrightIcon/> : <DarkIcon/>}
                logo={theme==="light" ? <LightLogo/> : <DarkLogo/>}
              />
              <Layout/>
              <Footer/>
           </ThemeProvider>
        </AuthContextProvider>
      </Fragment>
    </Router>
  );
}
 
export default App;