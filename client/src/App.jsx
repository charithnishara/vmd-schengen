import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import Packages from './components/Packages'
import Destinations from './components/Destinations'
import Addons from './components/Addons'
import VisaInfo from './components/VisaInfo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="bg-[#fdf8f0] text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Packages />
      <Destinations />
      <Addons />
      <VisaInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
