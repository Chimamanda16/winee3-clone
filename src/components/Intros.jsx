import "./CSS/Intro.css";

const Intro = () =>{
    return <>
        <div className="intro">
            <div className="container">
                <div className="content">
                    <h2 className="content-title">Swipe Your Way to</h2>
                    <div className="title-span">
                        <span></span>
                    </div>

                    <p>Download Winee3 And Be part of The Future Today!</p>
                </div>
                <div className="intro-btns">
                    <div className="intro-btn">
                        <a href="https://play.google.com/store/apps/details?id=io.winee3.beta" target="_blank">
                            <img src="../images/google-play.webp" alt="" />
                        </a>
                    </div>
                    <div className="intro-btn">
                        <a href="https://apps.apple.com/tr/app/winee3-social-crypto-earn/id6477886704" target="_blank">
                            <img src="../images/app-store.webp" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="anime">
                <div className="phone-1">
                    <img src="../images/phone-1.png" className="intro-phone" alt="winee3 on phone image" />
                </div>
                <div className="ceo">
                    <img src="../images/ceo.png" className="small-image" alt="ceo image" />
                </div>
                <div className="artist">
                    <img src="../images/artist.png" className="small-image" alt="artist image" />
                </div>
                <div className="manager">
                    <img src="../images/manager.png" className="small-image" alt="manager image" />
                </div>
                <div className="phone-2">
                    <img src="../images/phone-2.png" className="intro-phone" alt="winee3 in phone image" />
                </div>

            </div>
        </div>
    </>
}

export default Intro;