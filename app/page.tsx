import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HeadingSection from "./sections/HeadingSection";
import Logo from "./sections/Logo";
import MainShowcase from "./sections/MainShowcase";
import PriceSection from "./sections/PriceSection";
import Testimonials from "./sections/Testimonials";
import SignUpSection from "./sections/SignUpSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeadingSection />
      <Logo />
      <MainShowcase />
      <PriceSection />
      <Testimonials />
      <SignUpSection />
      <Footer />
    </>
  );
}
