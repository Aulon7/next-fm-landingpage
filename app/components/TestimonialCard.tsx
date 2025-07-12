import React from "react";
import Image from "next/image";

type TestimonialData = {
  id: string;
  text: string;
  image: string;
  name: string;
  username: string;
};
interface TestimonialCardProps {
  testimonials: TestimonialData[];
}

const TestimonialCard = ({ testimonials }: TestimonialCardProps) => {
  return (
    <div className="grid md:grid-cols-4 justify-items-center-safe gap-5 mt-10 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent))]">
      {testimonials.map(({ id, text, image, name, username }) => (
        <div key={id} className="card flex flex-col px-3">
          <div>{text}</div>
          <div className="flex  items-center gap-2 mt-5">
            <Image
              src={image}
              width={40}
              height={40}
              alt={name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
