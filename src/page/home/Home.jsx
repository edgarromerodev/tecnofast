import Hero from "./Hero"
import TrustedCompanies from "./TrustedCompanies"
import LatestProducts from "./LatestProducts"

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <TrustedCompanies/>
      <LatestProducts/>
    </div>
  )
}

export default Home
