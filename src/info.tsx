// import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export const InfoCards = () => {
  const cards = [
    {
      title: "How we work",
      content:
        "We serve as a centralized network for all Nigerian residents in these countries, providing local support and regional coordination. We are regsitered as an NGO under the CAC in Nigeria and An events managemnt company in the UAE.",
    },
    {
      title: "Our Constitution",
      content:
        "Our constitution provides the guiding framework for our operations, leadership structure, and community policies. It outlines the rights and responsibilities of members, decision-making protocols, and ethical standards. This document ensures transparency, accountability, and sustainability in all our engagements. A downloadable version will be available on our website. The leadership is presided by the Presidents - Noth Africa , Middle East ,The Vice President , Secretary General , Excos and Non Govorneing Board Members.",
    },
    {
      title: "Our Locations",
      content:
        "NIME-North Africa operates across various countries within the Middle East and North Africa, including but not limited to: United Arab Emirates, Saudi Arabia- Qatar, Kuwait ,Egypt,Jordan, Morocco,Bahrain, Oman",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl text-green-800">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 leading-8">
                  {card.content}
                </p>
                {/* <Button
                  variant="link"
                  className="text-red-500 hover:text-red-600 p-0 h-auto font-bold text-sm sm:text-base justify-start"
                >
                  READ MORE
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
