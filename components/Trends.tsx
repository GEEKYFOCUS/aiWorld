import React from "react";

const Trends = () => {
  return (
    <aside className="  w-[30%] lg:w-[23%] border-l border-[#2f3336] p-4 hidden lg:block">
      <section>
        <h2 className="font-bold text-lg mb-4">Find on AIWorld</h2>
        <div className="p-5 overflow-hidden w-[55px] h-[55px] hover:w-[270px] bg-[#1da0f237] mb-6 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
          <div className="flex items-center justify-center fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="outline-none bg-transparent w-full text-white font-normal px-4"
          />
        </div>
      </section>

      {/* Trends Widget */}
      <div className="bg-[#151515] p-4 rounded-lg">
        <h2 className="font-bold text-lg mb-4">Trends for You</h2>
        <div className="space-y-4">
          <div className="text-sm space-y-1">
            <p className="text-gray-400">Trending in Tech</p>
            <p className="font-bold">#ArtificialIntelligence</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-gray-400">Trending in Music</p>
            <p className="font-bold">#TopHits2024</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Trends;
