import "./CSS/Navbar.css"
import NavBtn from "./IntroBtn.jsx";

const Navbar = ()=>{
    return <>
    <div className="nav">
        <img src="../images/logo.png" alt="winee3 logo" className="logo"/>
        <div className="nav-btn">
            <NavBtn url="../images/coingecko.webp" alt="coingecko image" text="CoinGecko"/>
            <NavBtn url="../images/gate.io.webp" alt="gate.io image" text="Gate.io"/>
            <NavBtn text="Contracts"/>
        </div>
    </div>
    </>
}

export default Navbar;