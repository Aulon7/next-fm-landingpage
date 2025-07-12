import React from "react";
import Logo from "@assets/logo.png";
import Image from "next/image";
import SocialX from "@assets/social-x.svg";
import SocialInstagram from "@assets/social-insta.svg";
import SocialLinkedIn from "@assets/social-linkedin.svg";
import SocialYoutube from "@assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-5 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex ">
          <Image src={Logo} alt="Logo" width={64} height={64} />
        </div>
        <div className="flex justify-center gap-5 py-3">
          <SocialX
            className="h-7 w-7
          "
          />
          <SocialInstagram
            className="h-7 w-7
          "
          />
          <SocialLinkedIn
            className="h-7 w-7
          "
          />
          <SocialYoutube
            className="h-7 w-7
          "
          />
        </div>
        <p>&copy; Rights reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
