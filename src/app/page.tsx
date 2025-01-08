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
import FeatureSection from '@/components/ProactiveSecurity/FeatureSection';
import PricingSection from '@/components/ProactiveSecurity/PricingSection';
import WhyChooseLookSense from '@/components/ProactiveSecurity/WhyChooseLookSense';
import ScreenTimeControl from '@/components/ProactiveSecurity/ScreenTimeControl';
import ContentFilter from '@/components/ProactiveSecurity/ContentFilter';
import SetupSteps from '@/components/ProactiveSecurity/SetupSteps';
import WhyBestApp from '@/components/ProactiveSecurity/WhyBestApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* <WhyBestApp/>
        <WhyChooseLookSense/>
  <ScreenTimeControl />
  <ContentFilter />
  <SetupSteps/> */}
        <Hero />

        <BrandMarquee />

        <Stats />

        <Steps />
        <MonitoringFeatures/>
        <DeviceCompatibility />
        <PressHighlights />
        <FAQ />
        <FeatureSection/>
        <PricingSection/>
        
        {/* <UserFlow />
        <Features />
        <Pricing /> */}
      </main>
      <Footer/>
    </>
  );
}
