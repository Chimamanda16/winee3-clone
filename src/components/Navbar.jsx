import "./CSS/Navbar.css"
import NavBtn from "./IntroBtn.jsx";
import { useState, useRef } from "react";

const Navbar = ()=>{
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef(null);
    const navItemsRef =useRef(null);
    function handleClick(){
        setNavOpen(!navOpen);
        if(navOpen === true){
            navRef.current.classList.add("nav-open")
            navItemsRef.current.classList.add("nav-items-open");
        }
        else{
            navRef.current.classList.remove("nav-open");
            navItemsRef.current.classList.remove("nav-items-open");
        }
    }
    return <>
        <div className="nav" ref= {navRef} >
            <div className="nav-header">
                <img src="../images/logo.png" alt="winee3 logo" className="logo"/>
                <div className="hamburger" onClick={handleClick}>
                    <i className="fa-solid fa-bars burger-bar"></i>
                </div>
            </div>
            <div className="nav-btn">
                <div className="nav-items" ref={navItemsRef}>

                    <NavBtn url="../images/coingecko.webp" alt="coingecko image" text="CoinGecko"/>
                    <NavBtn url="../images/gate.io.webp" alt="gate.io image" text="Gate.io"/>
                    <NavBtn text="Contracts"/>
                    </div>
            </div>
        </div>
    </>
}

export default Navbar;