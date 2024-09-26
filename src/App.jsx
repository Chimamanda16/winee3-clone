import './App.css'
import Hero from './components/hero';
import Explore from './components/Explore';
import AboutSect from './components/About';
import Join from "./components/Community";
import SolutionSect from './components/Solution';
import UtilitySect from './components/Utility';
import ReferralSect from './components/Referral';
import PartnerSect from './components/Partners';
import PressSect from './components/Press';
import FooterSect from './components/Footer';

const imgLinks = [
  {imgUrl: "../images/bscscan.svg", partUrl: "https://bscscan.com/"}, 
  {imgUrl: "../images/cmc.svg", partUrl: ""},
  {imgUrl: "../images/coingecko.svg", partUrl: ""},
  {imgUrl: "../images/ethermail.svg", partUrl: ""},
  {imgUrl: "../images/etherscan.svg", partUrl: ""},
  {imgUrl: "../images/fireblocks.svg", partUrl: ""},
  {imgUrl: "../images/forcefi.svg", partUrl: ""},
  {imgUrl: "../images/gate-io.svg", partUrl: ""},
  {imgUrl: "../images/kaizen.svg", partUrl: ""},
  {imgUrl: "../images/linke.svg", partUrl: ""},
  {imgUrl: "../images/marilyn.svg", partUrl: ""},
  {imgUrl: "../images/me-ai.svg", partUrl: ""},
  {imgUrl: "../images/nerve.svg", partUrl: ""},
  {imgUrl: "../images/pancakeswap.svg", partUrl: ""},
  {imgUrl: "../images/siriuspad.svg", partUrl: ""},
  {imgUrl: "../images/spores.svg", partUrl: ""},
  {imgUrl: "../images/trustfi.svg", partUrl: ""},
  {imgUrl: "../images/unilapse.svg", partUrl: ""},
  {imgUrl: "../images/uniswap.svg", partUrl: ""},

];

function App() {

  return (
    <>
      <Hero/>
      <Explore />
      <AboutSect />
      <Join />
      <SolutionSect />
      <UtilitySect />
      <ReferralSect />
      <PartnerSect info={imgLinks} title="Our Partners"/>
      <PressSect />
      <FooterSect />
    </>
  )
}

export default App
