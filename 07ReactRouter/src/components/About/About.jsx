import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPhq_cWhD0DZznAOZIPyE2X_d6S-6Pgn5jA&s"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      It's not about the destination, it's about the journey in an Audi
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Audi is a German luxury automobile manufacturer founded in 1909 by August Horch. It is part of the Volkswagen Group, which is one of the world's leading automobile manufacturers. Audi is known for producing high-quality and innovative vehicles, including sedans, SUVs, coupes, and electric cars.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Audi has a strong presence in the global automotive market and is recognized for its premium design, performance, and engineering excellence.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}