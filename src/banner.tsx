import nime from "../public/asset/Nigeria.jpg";

export const NGOSourceBanner = () => (
  <section className="bg-white py-4 sm:py-6 lg:py-8">
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded-lg shadow-sm">
              <img
                src={nime}
                alt="Nigeria certification logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              TAConnect has completed NGOsource's Equivalency Determination
              process that certifies that our organization is equivalent to a US
              public charity. As we look forward to more funding opportunities,
              our certificate makes it easier for United States based donors to
              collaborate with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
