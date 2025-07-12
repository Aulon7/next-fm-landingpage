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
      <Link href="#" className="text-black/60 hover:text-black ">
        About Us
      </Link>
      <Link href="#" className="text-black/60 hover:text-black">
        Features
      </Link>
      <Link href="#" className="text-black/60 hover:text-black">
        Customers
      </Link>
      <Link href="#" className="text-black/60 hover:text-black">
        Latest insights
      </Link>
      <Link href="#" className="text-black/60 hover:text-black">
        Support
      </Link>
      <Button className="btn btn-primary">Get started</Button>
    </nav>
  );
};

export default Navigation;
