import React from "react";

const hero = () => {
  return (
    <div className=" py-2 flex items-center flex-col w-full my-20">
      <button className="border  hover:bg-gray-200 transition duration-200 cursor-pointer px-4 py-1f border-gray-200 bg-gray-100 text-gray-600 rounded-full ">
        We're hiring Founding Ruby Engineers?
      </button>

      <div>
        <h1 className="font-medium text-7xl text-black tracking-tighter text-center mt-10">
          Magically Simplify
          <br />
          accounting and taxes
        </h1>
        <p className=" max-w-2xl text-center mt-4 mx-auto text-lg text-neutal-700">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 3:40am.
        </p>
      </div>

      <div className="flex items-center gap-4 mt-10">
        <button className="bg-[#2579F4] text-white px-6 py-2 rounded-2xl shadow-lg text-shadow-md tracking-wide font-medium ">
          start free trial
        </button>
         <button className=" text-black px-6 py-2 rounded-2xl shadow-lg text-shadow-md tracking-wide font-medium  cursor-pointer">
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default hero;
