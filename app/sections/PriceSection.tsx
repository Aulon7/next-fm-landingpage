"use client";
import React from "react";
import SubscriptionCard from "@components/SubscriptionCard";
import { subscriptionTiers } from "@mock/subscriptiondata";

const PriceSection = () => {
  return (
    <section>
      <div style={{ perspective: 1000 }}>
        <h2 className="section-title mt-5 py-5">Pricing</h2>
        <p className="section-paragraph">
          From free tier up to Pro and Business for exclusive features.
        </p>
        <SubscriptionCard subscriptionTiers={subscriptionTiers} />
      </div>
    </section>
  );
};

export default PriceSection;
