import oba from "../public/asset/oba.jpeg";

const TrusteeAnnouncement = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-16 lg:px-32 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
          📣 ANNOUNCEMENT FROM THE EXECUTIVE COUNCIL
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Nigerians in the Middle East & North Africa (NIME)
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={oba} // Replace with actual image path
            alt="HRH Oba Kayode Ogungbohun"
            className="rounded-lg shadow-md w-full lg:w-1/2 object-cover"
          />

          <div className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-green-900">
              HRH Oba Kayode Ogungbohun
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are delighted to officially welcome His Royal Highness, Oba
              Kayode Ogungbohun, to the Board of Trustees of the Nigerians in
              the Middle East and North Africa (NIME) Community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              HRH brings a wealth of wisdom, cultural leadership, and a deep
              commitment to the progress of Nigerians at home and abroad. His
              appointment marks a significant milestone in our community’s
              journey toward unity, cultural preservation, and advocacy for the
              Nigerian diaspora in the MENA region.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His inclusion strengthens our vision of a connected and empowered
              Nigerian family across boundaries.
            </p>
            <p className="text-green-700 font-medium">
              Please join us in celebrating and congratulating HRH Oba Kayode
              Ogungbohun on this noble role.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              — The Executive Council, NIME <br />
              <span className="italic">
                “Unifying hearts across boundaries”
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrusteeAnnouncement;
