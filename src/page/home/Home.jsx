import Hero from "./Hero"
import TrustedCompanies from "./TrustedCompanies"
import LatestProducts from "./LatestProducts"
import OurSpecs from "./OurSpecs"

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <TrustedCompanies/>
      <LatestProducts/>
      <OurSpecs/>
    </div>
  )
}

export default Home
