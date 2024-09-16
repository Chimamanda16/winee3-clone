import './App.css'
import Hero from './components/hero';
import Explore from './components/Explore';
import AboutSect from './components/About';
import Join from "./components/Community";
import SolutionSect from './components/Solution';
import UtilitySect from './components/Utility';

function App() {

  return (
    <>
      <Hero/>
      <Explore />
      <AboutSect />
      <Join />
      <SolutionSect />
      <UtilitySect />
    </>
  )
}

export default App
