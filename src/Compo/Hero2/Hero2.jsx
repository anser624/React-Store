import React from "react";

const Hero2 = () => {
  return (
    <>
      {/* Naya Section (Products Ke Neeche) */}
      <div className="flex justify-center items-center my-15">
        <div className="new-section bg-blue-300 w-[60%] flex flex-col items-center rounded-3xl justify-center  p-8 mt-8">
          <h2 className="text-3xl font-bold mb-4">Special Offers!</h2>
          <p className="text-gray-700">
            "Don’t miss out on our exclusive special offers—avail huge discounts
            on trending products for a limited time only! Hurry up, these deals
            won’t last long. Shop now and save big before they’re gone!"
          </p>
          <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-2xl hover:bg-yellow-500 hover:scale-106 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero2;
