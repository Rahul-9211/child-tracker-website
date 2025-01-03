import Navbar from '@/components/ProactiveSecurity/Navbar';
import Hero from '@/components/ProactiveSecurity/Hero';
import Features from '@/components/ProactiveSecurity/Features';
import UserFlow from '@/components/ProactiveSecurity/UserFlow';
import Pricing from '@/components/ProactiveSecurity/Pricing';
import Stats from '@/components/ProactiveSecurity/Stats';
import BrandMarquee from '@/components/ProactiveSecurity/BrandMarquee';
import Steps from '@/components/ProactiveSecurity/Steps';
import MonitoringFeatures from '@/components/ProactiveSecurity/MonitoringFeatures';
import DeviceCompatibility from '@/components/ProactiveSecurity/DeviceCompatibility';
import PressHighlights from '@/components/ProactiveSecurity/PressHighlights';
import FAQ from '@/components/ProactiveSecurity/FAQ';
import Footer from '@/components/ProactiveSecurity/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />

        <Stats />

        <Steps />
        <MonitoringFeatures/>
        <DeviceCompatibility />
        <PressHighlights />
        <FAQ />
        
        {/* <UserFlow />
        <Features />
        <Pricing /> */}
      </main>
      <Footer/>
    </>
  );
}
