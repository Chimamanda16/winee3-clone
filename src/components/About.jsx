import "./CSS/About.css";

const AboutSect = () =>{
    return <>
        <div className="about-sect">
            <h3>How Winee3 Works</h3>
            <p>Experience the power of Web3 networking with Winee3. Join a global community, effortlessly connect, turn virtual networking into real-life meetups, access top Web3 opportunities, discover events with NFT tickets, earn rewards, and tailor your profile for a personalized experience.</p>
            <div className="row">
                <img src="../images/line.png" alt=""  className="line-img"/>
                <div className="winee-video">
                    <img src="../images/explore-video-top.png" alt="" />
                    <video muted loop autoPlay controls>
                        <source src="https://cdn.winee3.io/web-assets/home/winee3-introduction.mp4" type="video/mp4" />
                        <p>Your browser does not support the video tag</p>
                    </video>
                </div>
            </div>
        </div>
    </>
}

export default AboutSect;;