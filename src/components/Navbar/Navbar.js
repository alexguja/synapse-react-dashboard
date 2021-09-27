import { Navbar, Container, Nav } from "react-bootstrap";
import { SignInButton, SignOutButton } from "../Auth/Buttons/AuthButtons";
import { useAuthState } from "../../hooks/useAuthState";

import {
    StyledNavbar,
    StyledBrand,
    ToggleIcon,
    MenuIcon,
    StyledLink,
} from "./NavbarStyles";


const NavBar = ({ toggleTheme, themeIcon, logo }) => {
    const { isAuthenticated } = useAuthState();
    
    return (
        <StyledNavbar collapseOnSelect expand="lg" title="navbar">
          <Container>
          <StyledBrand>{logo}</StyledBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
               <MenuIcon/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
            <Nav className="mx-auto align-items-center">
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/dashboard">Dashboard</StyledLink>
              <ToggleIcon onClick={toggleTheme}>{themeIcon}</ToggleIcon>
              {isAuthenticated ? <SignOutButton/> : <SignInButton/>}
            </Nav>
          </Navbar.Collapse>
          </Container>
        </StyledNavbar>
     );
}

export default NavBar;