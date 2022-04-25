import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" className={{ color:'black' }}>Home</NavLink>
                <NavLink to="/dataview" className={{ color:'black' }}>Data View</NavLink>
                <NavLink to="/liveview" className={{ color:'black' }}>Live View</NavLink>
                <NavLink to="/about" className={{ color: 'black' }}>About</NavLink>
                <NavLink to="/contact" className={{ color: 'black' }}>Contact</NavLink>
                <NavLink to="/signin" className={{ color: 'black' }}>Sign In</NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;