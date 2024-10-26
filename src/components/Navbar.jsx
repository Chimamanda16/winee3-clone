import "./CSS/Navbar.css"
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

                    <div className="btn">
                        <img src="../images/coingecko.webp" alt="coingecko image" /><span>CoinGecko</span>
                    </div>
                    <div className="btn">
                        <img src="../images/gate.io.webp" alt="gate.io image" /><span>Gate.io</span>
                    </div>
                    <div className="btn">
                        <span>Contracts</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;