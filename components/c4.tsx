"use client"

export default function C4() {
    return (
      <div className="bg-gray-50 mt-20 px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-sky-950">Simply Raahi</span> <span className="text-sky-900">experiences.</span>
          </h2>
          <p className="mt-2">
            Take the road less travelled - discover unexplored places, culture, and experiences.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/1a8384_4fe19510a8ee45e88065196fc165662e~mv2.jpg/v1/fill/w_1440,h_239,al_c,lg_1,q_80,usm_1.20_1.00_0.01,enc_avif,quality_auto/1a8384_4fe19510a8ee45e88065196fc165662e~mv2.jpg"
              alt="Simply Raahi Experience"
              className="w-full h-[30vh] object-cover"
            />
            <div className="absolute inset-0 bg-black/10 px-6 flex flex-col justify-center">
              <h3 className="text-white text-2xl font-bold">
                Experiential Travel by Simply Raahi
              </h3>
              <p className="text-gray-100 mt-2 text-sm">
                We redefine travel by creating experiences that go beyond the ordinary.
                Let us guide you through the unexplored, blending adventure, culture, and mindfulness in every itinerary.
              </p>
            </div>
            <div className="absolute right-6 bottom-6">
              <a href="#" className="text-white text-sm font-semibold flex items-center gap-2 hover:underline" >
                Discover Simply Raahi Experiences &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }