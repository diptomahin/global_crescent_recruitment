import HomeHeroReact from '../components/home/HomeHeroReact'
import HomeCarousel from '../components/home/HomeCarousel'
import HomeCountriesReact from '../components/home/HomeCountriesReact'
import HomeServicesReact from '../components/home/HomeServicesReact'
import HomeStrategiesReact from '../components/home/HomeStrategiesReact'
import HomeCTAReact from '../components/home/HomeCTAReact'

export default function Home() {
  return (
    <>
      <HomeHeroReact />
      <HomeCarousel />
      <HomeServicesReact />
      <HomeStrategiesReact />
      <HomeCountriesReact />
      <HomeCTAReact />
    </>
  )
}
