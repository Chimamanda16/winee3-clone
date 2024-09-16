import "./CSS/Utility.css";

const UtilitySect = () =>{
    return <>
        <div className="utility">
            <div className="utility-cont">
                <div className="utility-text">
                    <div className="utility-title">
                        <h2>Winee3 Token Utility</h2>
                    </div>
                    <hr />
                    <div className="utility-sub">
                        <li>Perks and Rewards</li>
                        <li>Buy Tickets</li>
                        <li>Earn the Points</li>
                    </div>
                    <div className="utility-para">
                        <p>Catalyzing Web3 Engagement: the Winee3 token, is your key to unlock a world of utility within the app. Convert it to Winee Points for in-app perks and rewards, incentivizing active participation in the Web3 community.</p>
                    </div>
                    <a href="https://cdn.winee3.io/docs/whitepaper.pdf"><button className="utility-btn" target="_blank">Download Whitepaper</button></a>

                </div>
                <div className="utility-img">
                    <img src="../images/utility.webp" alt="utility image" />
                </div>
            </div>
            
        </div>
    </>
}

export default UtilitySect;