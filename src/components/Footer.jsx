import { useEffect, useState, useRef } from "react";
import "./CSS/Footer.css"

const FooterSect =() =>{
    const footerRef = useRef(null);
    const [Address1, setAddress1] = useState("0x46971fc433d90cf2ff1da4a66abe320dfb0ce3b1");
    const [Address2, setAddress2] = useState("0x914ca962881825100e0ec3e7965732497834a487");
    const [gap, setGap] = useState("3%");

    useEffect(() =>{
        if(window.innerWidth < 1400){
            setAddress1("0x46971fc433d90cf2ff1da4a...");
            setAddress2("0x914ca962881825100e0ec3e...");
            setGap("10%")
            
        }
        else if(window.innerWidth > 1400){
            setAddress1("0x46971fc433d90cf2ff1da4a66abe320dfb0ce3b1")
            setAddress2("0x914ca962881825100e0ec3e7965732497834a487")
            setGap("3%")
        }
    }, [])


    useEffect(() =>{
        window.addEventListener("resize", () =>{
            if(window.innerWidth < 1400){
                setAddress1("0x46971fc433d90cf2ff1da4a...");
                setAddress2("0x914ca962881825100e0ec3e...");
                setGap("10%")
                
            }
            else if(window.innerWidth > 1400){
                setAddress1("0x46971fc433d90cf2ff1da4a66abe320dfb0ce3b1")
                setAddress2("0x914ca962881825100e0ec3e7965732497834a487")
                setGap("3%")
            }
        });
        
    });

    return <>
    <div className="footer">
        <div className="footer-container" ref={footerRef} style={{gap: gap}}>
            <div className="rows row-1">
                <img className="footer-logo" src="../images/logo.png" alt="Winee3 Logo" />
                <p className="copyright">Copyright &c2024 <a href="">Winee3, all rights reserved</a></p>
                <div className="social-icons">
                    <img src="../images/telegram.webp" alt="Telegram Icon" />
                    <img src="../images/twitter.webp" alt="X Icon" />
                    <img src="../images/discord.webp" alt="Discord Icon" />
                    <img src="../images/instagram.webp" alt="Instagram Icon" />
                    <img src="../images/facebook.webp" alt="Facebook Icon" />
                </div>
                <p>Contract Adresses</p>
                <div className="address address-1">
                    <img className="contract-img" src="../images/ethereum.webp" alt="Ethereum Address" />
                    <p className="contract-address">{Address1}</p>
                    <img  className="copy-icon" src="../images/copy-icon.webp" alt="copy icon" />
                </div>
                <div className="address address-2">
                    <img className="contract-img" src="../images/contract.webp" alt="Address" />
                    <p className="contract-address">{Address2}</p>
                    <img className="copy-icon"  src="../images/copy-icon.webp" alt="copy icon" />
                </div>
            </div>
            {/* Row 2 */}
            <div className="rows row-2">
                <h2>About Winee3</h2>
                <p>Contact Us</p>
                <p>Partner With Us</p>
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
                <p>Disclaimer</p>
                <p>Cookie</p>
                <p>Community Guide</p>
            </div>
            {/* Row 3 */}
            <div className="rows row-3">
                <h2>Explore Winee3s In-depth Resources</h2>
                <div className="resources">
                    <div className="pdf-col">
                        <a href="https://cdn.winee3.io/docs/whitepaper.pdf"><img src="../images/pdf.webp" alt="pdf" className="pdf"/></a>
                    </div>
                    <div className="pdf-col">
                        <a href="https://cdn.winee3.io/docs/pitchDeck.pdf" ><img src="../images/pdf.webp" alt="pdf" className="pdf"/></a>
                    </div>
                    <div className="pdf-col">
                        <a href="https://cdn.winee3.io/docs/pitchDeck.pdf" ><img src="../images/pdf.webp" alt="pdf" className="pdf"/></a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
        
    </>
}

export default FooterSect;