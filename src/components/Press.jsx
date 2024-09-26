import PartnerSect from "./Partners"

const imgLinks = [
    {imgUrl: "../images/business-insider.svg", partUrl: "https://bscscan.com/"}, 
    {imgUrl: "../images/benzinga.svg", partUrl: ""},
    {imgUrl: "../images/market-watch.svg", partUrl: ""},
    {imgUrl: "../images/morning-star.svg", partUrl: ""},
    {imgUrl: "../images/ap.svg", partUrl: ""},
    {imgUrl: "../images/yahoo-finance.svg", partUrl: ""},
    {imgUrl: "../images/digital-journal.svg", partUrl: ""},
    {imgUrl: "../images/bitcoin.svg", partUrl: ""},
    {imgUrl: "../images/crypto-news.svg", partUrl: ""},
    {imgUrl: "../images/crypto-globe.svg", partUrl: ""},
    {imgUrl: "../images/crypto-slate.svg", partUrl: ""},
    {imgUrl: "../images/cryptonews.svg", partUrl: ""},
    {imgUrl: "../images/coinspeaker.svg", partUrl: ""},
    {imgUrl: "../images/bitcoinist.svg", partUrl: ""},
    {imgUrl: "../images/news-btc.svg", partUrl: ""},
    {imgUrl: "../images/cryptowisser.svg", partUrl: ""},
    {imgUrl: "../images/metaverse.svg", partUrl: ""},
    {imgUrl: "../images/hackernoon.svg", partUrl: ""},
    {imgUrl: "../images/thenewscrypto.svg", partUrl: ""},
    {imgUrl: "../images/techbullion.svg", partUrl: ""},
    {imgUrl: "../images/cryptonewsflash.svg", partUrl: ""},
    {imgUrl: "../images/techannouncer.svg", partUrl: ""},
    {imgUrl: "../images/fintechmode.svg", partUrl: ""},

];

const PressSect = () =>{
    return<>
        <PartnerSect info={imgLinks} title="We in the Press"/>
    </>
}

export default PressSect