import CallAction from "./sections/CallAction";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Logo from "./sections/Logo";
import MainShowcase from "./sections/MainShowcase";
import PriceSection from "./sections/PriceSection";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Logo />
      <MainShowcase />
      <PriceSection />
      <Testimonials />
      <CallAction />
      <Footer />
    </>
  );
}
