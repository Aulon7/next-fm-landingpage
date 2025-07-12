"use client";
import React, { useState } from "react";
import ArrowRight from "@assets/arrow-right.svg";
import Navigation from "./Navigation";
import { Sling as MobileMenu } from "hamburger-react";
import { motion } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/70 hidden md:block">
          Stremaline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="flex items-center justify-between px-5">
          <div className="flex-1 hidden md:flex justify-center">
            <Navigation />
          </div>
          <div className="flex justify-end md:hidden flex-1">
            <MobileMenu
              toggled={openMenu}
              toggle={setOpenMenu}
              size={24}
              color="#1f1f1f"
            />
          </div>
        </div>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white"
          >
            <Navigation isMobile />
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
