import React from "react";
import { Container } from "./container/container";
import Navbar from "./container/navbar";
import Hero from "./container/hero";
import Image from "next/image";
const page = () => {
  return (
    <div
      className="h-screen relative
      bg-blue-100">
        <div className="max-w-5xl mx-auto absolute inset-0  h-full w-full">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
        </div>
      <Container>
        <Navbar />
        <Hero/>
      </Container>
      <div className = "relative w-full ">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto p-4">
        <Image src="/hero-ui-v5.webp" alt="" width={1000} height={1000}
        className ="rounded-2xl w-full object-cover object-left-top border-neutral-200 mask-b-from-20% to-40%"/>
        </div>
      </div>
    </div>
  );
};

export default page;
