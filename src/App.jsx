import './App.css'
import Hero from './components/hero';
import Explore from './components/Explore';
import AboutSect from './components/About';
import Join from "./components/Community";
import SolutionSect from './components/Solution';
import UtilitySect from './components/Utility';
import ReferralSect from './components/Referral';
import PartnerSect from './components/Partners';

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
      <PartnerSect />
    </>
  )
}

export default App
