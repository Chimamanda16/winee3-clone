import "./CSS/Partners.css";

const imgLinks = [
                  {imgUrl: "../images/bscscan.svg", partUrl: "https://bscscan.com/"}, 
                  {imgUrl: "../images/cmc.svg", partUrl: ""},
                  {imgUrl: "../images/coingecko.svg", partUrl: ""},
                  {imgUrl: "../images/ethermail.svg", partUrl: ""},
                  {imgUrl: "../images/etherscan.svg", partUrl: ""},
                  {imgUrl: "../images/fireblocks.svg", partUrl: ""},
                  {imgUrl: "../images/forcefi.svg", partUrl: ""},
                  {imgUrl: "../images/gate-io.svg", partUrl: ""},
                  {imgUrl:"../images/kaizen.svg", partUrl: ""},
                  {imgUrl:"../images/linke.svg", partUrl: ""},
                  {imgUrl:"../images/marilyn.svg", partUrl: ""},
                  {imgUrl:"../images/me-ai.svg", partUrl: ""},
                  {imgUrl:"../images/nerve.svg", partUrl: ""},
                  {imgUrl:"../images/pancakeswap.svg", partUrl: ""},
                  {imgUrl:"../images/siriuspad.svg", partUrl: ""},
                  {imgUrl:"../images/spores.svg", partUrl: ""},
                  {imgUrl:"../images/trustfi.svg", partUrl: ""},
                  {imgUrl:"../images/unilapse.svg", partUrl: ""},
                  {imgUrl:"../images/uniswap.svg", partUrl: ""},

                ];

const PartnerSect =() =>{
    return <>
        <div className="partners">
            <div className="partner-title">
                <h2>Our Partners</h2>
            </div>
            <div className="partner-imgs">
                
                {
                    imgLinks.map((imgInfo, index) =>{
                        return(
                                <div className="partner-img" key={index}>
                                    <img src={imgInfo.imgUrl} alt="Partner Image" />
                                </div>
                        )
                    })
                    
                }

            </div>
        </div>
    </>
}

export default PartnerSect;