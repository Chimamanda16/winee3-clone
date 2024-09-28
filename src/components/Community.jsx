import "./CSS/Community.css";

const Join =() =>{
    return <>
        <div className="community">
            <h1 className="title">Join Our Community</h1>
            <p className="join-text">Learn more about Winee3, chat with us and have your say in the future of the Winee3 ecosystem.</p>
            <div className="join-socials">
                <div className="social">
                    <div className="social-img">
                        <img src="../images/telegram.webp" alt="" /> 
                    </div>
                    <p>Telegram</p>
                </div>
                <div className="social">    
                    <div className="social-img">
                        <img src="../images/twitter.webp" alt="" />
                    </div>
                    <p>X</p>
                </div>
                <div className="social">    
                    <div className="social-img">
                        <img src="../images/discord.webp" alt="" /> 
                    </div>
                    <p>Discord</p>
                </div>
                <div className="social">    
                    <div className="social-img">
                        <img src="../images/instagram.webp" alt="" />
                    </div>
                    <p>Insta</p>
                </div>
                <div className="social">    
                    <div className="social-img">
                        <img src="../images/facebook.webp" alt="" /> 
                    </div>      
                    <p>Facebook</p>
                </div>     
            </div>
        </div>
    </>
}

export default Join;