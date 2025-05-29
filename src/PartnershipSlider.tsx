// Import the images at the top
import nimeImg from "../public/asset/Nime.png";
import nigeriaImg from "../public/asset/logo.jpg";
import thrivingImg from "../public/asset/thriving.png";

export const PartnershipSlider = () => {
  const partners = [
    {
      name: "NIME",
      logo: nimeImg,
    },
    {
      name: "Nigeria",
      logo: nigeriaImg,
    },
    {
      name: "Thriving",
      logo: thrivingImg,
    },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden bg-gray-50 py-8">
      <div className="flex animate-scroll">
        {duplicatedPartners.map((partner, index) => (
          <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 md:p-8 flex items-center justify-center h-20 sm:h-24 md:h-28 w-24 sm:w-32 md:w-36">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full  object-contain hover:scale-105 transition-all duration-300"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  const fallback = img.parentElement?.querySelector(
                    ".fallback-text"
                  ) as HTMLElement | null;
                  if (fallback) {
                    fallback.style.display = "flex";
                  }
                }}
              />
              <div className="fallback-text hidden w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">
                  {partner.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};
