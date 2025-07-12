"use client";
import React from "react";
import CheckIcon from "@assets/check.svg";
import { motion } from "framer-motion";

interface TiersData {
  id: string;
  popular: boolean;
  title: string;
  price: number;
  buttonText: string;
  features: string[];
}

interface SubScriptionCardProps {
  subscriptionTiers: TiersData[];
}
const SubscriptionCard = ({ subscriptionTiers }: SubScriptionCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center-safe items-center">
      {subscriptionTiers.map((data) => (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            rotateX: 360,
          }}
          whileInView={{
            opacity: 1,
            rotateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          key={data.id}
          className={data.popular ? "card bg-gray-900 text-white/80" : "card"}
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-bold ">{data.title}</h3>
            {data.popular && (
              <div className="inline-flex text-sm px-4 py-2 rounded-xl">
                <motion.span
                  className="font-medium bg-linear-30 from-red-500 to-blue-500 text-transparent bg-clip-text"
                  style={{
                    backgroundSize: "200%", //
                    backgroundPositionX: "0%", // initial position
                  }}
                  animate={{
                    backgroundPositionX: "100%",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  Popular
                </motion.span>
              </div>
            )}
          </div>
          <div className="flex items-baseline gap-1 mt-5 text-2xl">
            <span className="text-3xl font-bold tracking-tighter">
              &#x24;{data.price}
            </span>
            <span
              className={
                data.popular
                  ? "text-white font-bold tracking-tight text-lg "
                  : "text-black/60 font-bold tracking-tight text-lg "
              }
            >
              /month
            </span>
          </div>
          <button
            className={
              data.popular
                ? "btn btn-secondary w-full mt-5"
                : "btn btn-primary w-full mt-5"
            }
          >
            {data.buttonText}
          </button>
          <ul className="flex flex-col gap-5 mt-5">
            {data.features.map((feature) => (
              <li key={feature} className="text-sm flex items-center gap-3">
                <CheckIcon className="h-5 w-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default SubscriptionCard;
