"use client";

import React from "react";
import Button from "@/components/Button";
import ArrowIcon from "@/assets/arrow-right.svg";
import BuildingImage from "@/assets/building.png";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import useScrollAnimation from "@utils/useScrollAnimation";

const fadeInFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: easeInOut },
};

const fadeInFromRight = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: easeInOut },
};

const HeadingSection = () => {
  const { currentRef, translateY } = useScrollAnimation();
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <section
        ref={currentRef}
        className="md:flex justify-around items-center overflow-x-clip pt-10 pb-20 md:pt-5 md:pb-10 bg-linear-to-tl from-blue-500 from-15% to-white to-50% drop-shadow-xl"
      >
        <motion.div {...fadeInFromTop} className="md:w-[478px] px-10">
          <h1 className="section-title font-bold md:text-left">
            Your Journey Starts at the Front Door
          </h1>
          <p className="section-paragraph md:text-left">
            Discover the satisfaction of smart real estate decisions with a
            platform built to guide your journey — track your property goals,
            stay motivated through expert insights, and celebrate every
            successful step toward your dream home or investment
          </p>
          <div className="flex gap-2 items-center mt-5">
            <Button className="btn btn-primary">Get for free</Button>
            <Button className="btn btn-secondary gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
        <div className="mt-20 md:mt-0 md:h-[768px] relative md:w-3xl">
          <motion.div
            style={{ translateY: translateY }}
            {...fadeInFromRight}
            className="relative w-full h-[768px] md:h-[768px]"
          >
            <Image
              src={BuildingImage}
              alt="Main Building"
              className="md:absolute md:h-full md:w-auto md:max-w-none"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeadingSection;
