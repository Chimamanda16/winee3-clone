import "./CSS/Navbar.css"

const Navbar = ()=>{
    return <>
    <div className="nav">
        <img src="../images/logo.png" alt="winee3 logo" className="logo"/>
        <div className="nav-btn">
            <div className="btn">
                <img src="../images/coingecko.webp" alt="" /><span>CoinGecko</span>
            </div>
            <div className="btn">
                <img src="../images/gate.io.webp" alt="" /><span>By on Gate.io</span>
            </div>
            <div className="btn">
                <span>Contracts</span>
            </div>
        </div>
    </div>
    </>
}

export default Navbar;