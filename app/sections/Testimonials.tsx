"use client";
import TestimonialCard from "@components/TestimonialCard";
import React from "react";
import { testimonials } from "@/mock/testimonialsdata";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      id="testimonials"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="mt-10 flex flex-col justify-center items-center">
        <h2 className="section-title py-5">What our users say</h2>
        <p className="section-paragraph md:w-[768px]">
          From streamlined navigation to robust property tools, our platform has
          become an indispensable asset for real estate professionals and teams
          worldwide.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <TestimonialCard testimonials={testimonials} />
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
