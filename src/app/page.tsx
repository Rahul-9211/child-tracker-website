import Navbar from '@/components/ProactiveSecurity/Navbar';
import Hero from '@/components/ProactiveSecurity/Hero';
import Features from '@/components/ProactiveSecurity/Features';
import UserFlow from '@/components/ProactiveSecurity/UserFlow';
import Pricing from '@/components/ProactiveSecurity/Pricing';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UserFlow />
        <Features />
        <Pricing />
      </main>
    </>
  );
}
