import Link from "next/link";
import React from "react";
import Button from "@components/Button";

type NavigationType = {
  isMobile?: boolean;
};

const Navigation = ({ isMobile = false }: NavigationType) => {
  return (
    <nav
      className={`${
        isMobile
          ? "flex flex-col items-center gap-4 py-5 shadow-2xl "
          : "hidden md:flex gap-5 items-center"
      }`}
    >
      <Link href="#home" className="text-black/60 hover:text-black ">
        Home
      </Link>
      <Link href="#features" className="text-black/60 hover:text-black">
        Features
      </Link>
      <Link href="#pricing" className="text-black/60 hover:text-black">
        Pricing
      </Link>
      <Link href="#testimonials" className="text-black/60 hover:text-black">
        Testimonials
      </Link>
      <Link href="#signup" className="text-black/60 hover:text-black">
        Sign Up
      </Link>
      <Button className="btn btn-primary">Get started</Button>
    </nav>
  );
};

export default Navigation;
