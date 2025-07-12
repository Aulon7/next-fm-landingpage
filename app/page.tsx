import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HeadingSection from "./sections/HeadingSection";
import Logo from "./sections/Logo";
import Features from "./sections/Features";
import PriceSection from "./sections/PriceSection";
import Testimonials from "./sections/Testimonials";
import SignUpSection from "./sections/SignUpSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeadingSection />
      <Logo />
      <Features />
      <PriceSection />
      <Testimonials />
      <SignUpSection />
      <Footer />
    </>
  );
}
