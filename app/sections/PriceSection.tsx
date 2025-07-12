"use client";
import React from "react";
import SubscriptionCard from "@components/SubscriptionCard";
import { subscriptionTiers } from "@mock/subscriptiondata";
import { motion } from "framer-motion";

const PriceSection = () => {
  return (
    <motion.div
      id="pricing"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div style={{ perspective: 1000 }}>
        <h2 className="section-title mt-5 py-5">Pricing</h2>
        <p className="section-paragraph">
          From free tier up to Pro and Business for exclusive features.
        </p>
        <SubscriptionCard subscriptionTiers={subscriptionTiers} />
      </div>
    </motion.div>
  );
};

export default PriceSection;
