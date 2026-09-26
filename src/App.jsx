import NavBar from "./components/NavBar"
import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"

const App = () => {
  return (
    <>
    <NavBar />                  
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    </>
  )
}

export default App