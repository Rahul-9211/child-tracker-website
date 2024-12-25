import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import RemoteSteps from "../components/RemoteSteps/RemoteSteps";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <RemoteSteps />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
