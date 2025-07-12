"use client";
import React from "react";
import productImage from "../assets/product-image.jpg";
import Spring from "@assets/spring.png";
import Image from "next/image";
import { motion } from "framer-motion";
import useScrollAnimation from "@utils/useScrollAnimation";

const Features = () => {
  const { currentRef, translateY } = useScrollAnimation(200, -200);
  return (
    <section ref={currentRef} aria-label="The way of managing properties">
      <motion.div
        id="features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-gradient-to-b from-[#ffffff] to-[#bac7f7] py-10 overflow-x-clip drop-shadow-xl"
      >
        <div className="md:flex flex-col justify-center items-center px-10">
          <h2 className="section-title">
            A Smarter Way to Manage Every Property Detail
          </h2>
          <p className="section-paragraph md:w-[768px]">
            Streamline your workflow and take control of property operations —
            from listings and tenant tracking to maintenance and analytics — all
            in one intuitive, responsive platform built for real estate teams.
          </p>
          <div className="relative">
            <Image src={productImage} alt="Product Image" className="mt-10" />
            <motion.div style={{ translateY: translateY }}>
              <Image
                src={Spring}
                alt="Pyramid image"
                width={300}
                height={300}
                className="hidden lg:block absolute bottom-20 -left-35 rotate-5 drop-shadow-2xl drop-shadow-blue-800"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
