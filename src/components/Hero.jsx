import Navbar from "./navbar";
import "./CSS/Hero.css";
import Intro from "./Intros";

const Hero = ()=>{

    return <>
        <div className="home">
            <Navbar />
            <Intro />
        </div>
    </>
}

export default Hero;