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
            <h1 className="text-3xl text-center text-green-800">About Us</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-10">
              Nigerians in the Middle East and North Africa (NIME-North Africa)
              is a vibrant, inclusive, and proactive community organization
              established to foster unity, growth, and empowerment among
              Nigerians living in the MENA region. Our core mission is to
              connect Nigerians across borders, uphold our cultural heritage,
              and provide a platform for mutual support, personal and
              professional development, and global isocio-economic mpact. Our
              community is built on the values of unity, service,
              professionalism, transperancy , integrity and progress. We are
              committed to enhancing the well-being of Nigerians in the diaspora
              through educational initiatives, humanitarian projects,
              professional development, and cultural engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
