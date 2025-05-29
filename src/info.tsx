import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export const InfoCards = () => {
  const cards = [
    {
      title: "Our story",
      content:
        "TAConnect supports national and sub-national governments to strengthen their health systems through the procurement of innovative and cost-effective Technical Assistance (TA) services.",
    },
    {
      title: "Our work",
      content:
        "We are currently focused on the 12 BHCPF priority states in Nigeria with specific need-based deployments to build strong and resilient health systems with the aim to expand to other states.",
    },
    {
      title: "How we work",
      content:
        "We deliver tailored and cohesive support to states in Nigeria by engaging and deploying competent TA partners that strengthen PHC systems and enhance PHC service delivery.",
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
                <CardTitle className="text-lg sm:text-xl lg:text-2xl text-gray-900">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 leading-relaxed">
                  {card.content}
                </p>
                <Button
                  variant="link"
                  className="text-red-500 hover:text-red-600 p-0 h-auto font-bold text-sm sm:text-base justify-start"
                >
                  READ MORE
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
