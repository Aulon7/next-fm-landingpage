"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EliteLogo from "@assets/logo-elite.png";
import EstatesLogo from "@assets/logo-estates.png";
import KeyStoneLogo from "@assets/logo-keystone.png";
import LuxuryLogo from "@assets/logo-luxury.png";
import SkylineLogo from "@assets/logo-skyline.png";
import UrbanLogo from "@assets/logo-urban.png";

const logos = [
  { src: EliteLogo, alt: "Elite Logo" },
  { src: EstatesLogo, alt: "Estates Logo" },
  { src: KeyStoneLogo, alt: "KeyStone Logo" },
  { src: LuxuryLogo, alt: "Luxury Logo" },
  { src: SkylineLogo, alt: "Skyline Logo" },
  { src: UrbanLogo, alt: "Urban Logo" },
];

const Logo = () => {
  return (
    <div className="py-5 md:py-12">
      <div className="flex justify-center overflow-hidden w-full mask-[linear-gradient(to_right,rgba(0,0,0,0),black,rgba(0,0,0,0))]">
        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...logos, ...logos].map(({ src, alt }, index) => (
            <div key={index} className="flex-shrink-0 relative w-40 h-30">
              <Image src={src} alt={alt} fill className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logo;
