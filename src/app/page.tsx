import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection" 
import StoriesSection from "@/components/StoriesSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <StoriesSection />
      <Footer />
    </main>
  )
}
