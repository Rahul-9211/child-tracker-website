import Navbar from '@/components/ProactiveSecurity/Navbar';
import Hero from '@/components/ProactiveSecurity/Hero';
import Features from '@/components/ProactiveSecurity/Features';
import UserFlow from '@/components/ProactiveSecurity/UserFlow';
import Pricing from '@/components/ProactiveSecurity/Pricing';
import Stats from '@/components/ProactiveSecurity/Stats';
import BrandMarquee from '@/components/ProactiveSecurity/BrandMarquee';
import Steps from '@/components/ProactiveSecurity/Steps';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />

        <Stats />

        <Steps />
        
        {/* <UserFlow />
        <Features />
        <Pricing /> */}
      </main>
    </>
  );
}
