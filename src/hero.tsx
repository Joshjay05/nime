import bg from "../public/asset/bg.jpeg";

export const HeroBanner = () => (
  <section className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] mt-14 sm:mt-16 lg:mt-20 overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={bg}
        alt="hero background"
        className="w-full h-full object-cover"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    {/* Content */}
    <div className="relative h-full flex items-center justify-center text-white px-4 z-10">
      <div className="text-center max-w-4xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 leading-tight drop-shadow-lg">
          Nigerians in the Middle East and North Africa (NIME-North Africa)
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto drop-shadow-md">
          Unifying hearts across boundaries
        </p>
      </div>
    </div>
  </section>
);
