import "./CSS/Explore.css";

const Explore = ()=>{
    return <>
        <div className="explore">
            <div className="explore-content">
                <h2 className="explore-title">Explore <span>Winee3</span> And Elevate Your Career</h2>
                <div className="explore-block">
                    <img src="../images/network.svg" alt="" />
                    <div className="explore-block-text">
                        <h3>Network with ease</h3>
                        <p>Connect Effortlessly and Expand</p>
                    </div>
                </div>
                <div className="explore-block">
                    <img src="../images/event.svg" alt="" />
                    <div className="explore-block-text">
                        <h3>Attend To Events</h3>
                        <p>Discover and attend exclusive events.</p>
                    </div>
                </div>
                <div className="explore-block">
                    <img src="../images/earnings.svg" alt="" />
                    <div className="explore-block-text">
                        <h3>Earnings & Rewards</h3>
                        <p>Engage, participate, and earn rewards.</p>
                    </div>
                </div>
            </div>
            <div className="explore-image">
                <img src="../images/explore-img.png" alt="" />
            </div>
        </div>
    </>
}

export default Explore;