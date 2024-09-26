import "./CSS/Hero.css";
import Navbar from "./Navbar.jsx";
import Intro from "./Intros.jsx";

const Hero = ()=>{

    return <>
        <div className="home">
            <Navbar />
            <Intro />
        </div>
    </>
}

export default Hero;