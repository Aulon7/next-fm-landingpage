"use client";
import React from "react";
import Button from "@components/Button";
import ArrowIcon from "@assets/arrow-right.svg";
import Star from "@assets/star.png";
import Circle from "@assets/circle.png";
import Image from "next/image";
import { motion } from "framer-motion";
import useScrollAnimation from "@/utils/useScrollAnimation";

const SignUpSection = () => {
  const { currentRef, translateY } = useScrollAnimation(200, -200);
  return (
    <section
      ref={currentRef}
      className="bg-gradient-to-b from-white to-[#bac7f7] py-20"
    >
      <div className="py-5 relative">
        <h2 className="section-title py-5">Sign up for free</h2>
        <p className="section-paragraph">
          Celebrate the joy of accomplishment with an app designed to track your
          progress.
        </p>
        <motion.div
          style={{
            translateY: translateY,
          }}
        >
          <Image
            src={Star}
            alt="Start Image"
            width={300}
            height={300}
            className="absolute hidden lg:block -left-5 -top-35 drop-shadow-2xl drop-shadow-blue-800 "
          />
        </motion.div>
        <motion.div
          style={{
            translateY: translateY,
          }}
        >
          <Image
            src={Circle}
            alt="Start Image"
            width={300}
            height={300}
            className="absolute hidden lg:block right-10 -bottom-20 rotate-15 drop-shadow-2xl drop-shadow-blue-800"
          />
        </motion.div>
        <div className="flex gap-2 mt-10 justify-center">
          <Button className="btn btn-primary">Start for free</Button>
          <Button className="btn btn-secondary gap-1">
            <span>Learn more </span>
            <ArrowIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
