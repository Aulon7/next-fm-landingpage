"use client";
import React from "react";
import SubscriptionCard from "@components/SubscriptionCard";
import { subscriptionTiers } from "@mock/subscriptiondata";
import { motion } from "framer-motion";

const PriceSection = () => {
  return (
    <section id="pricing" aria-label="Subscription tiers">
      <motion.div style={{ perspective: 1000 }}>
        <h2 className="section-title mt-5 py-5">Pricing</h2>
        <p className="section-paragraph">
          From free tier up to Pro and Business for exclusive features.
        </p>
        <SubscriptionCard subscriptionTiers={subscriptionTiers} />
      </motion.div>
    </section>
  );
};

export default PriceSection;
