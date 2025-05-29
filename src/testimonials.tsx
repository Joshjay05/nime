import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { SectionDivider } from "./divider";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "State Health Commissioner",
      location: "Lagos State",
      content:
        "TAConnect has transformed how we approach technical assistance. Their systematic approach and quality partners have significantly improved our health system outcomes.",
      rating: 5,
    },
    {
      name: "Ahmed Bello",
      role: "Program Director",
      location: "Kano State",
      content:
        "The TAPPAMS platform streamlined our procurement process incredibly. We now have access to vetted, high-quality TA providers that deliver real results.",
      rating: 5,
    },
    {
      name: "Dr. Grace Okafor",
      role: "PHC Coordinator",
      location: "Rivers State",
      content:
        "Working with TAConnect has been exceptional. Their collaborative approach ensures that TA interventions are contextually appropriate and sustainable.",
      rating: 5,
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <SectionDivider />
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from health system leaders who have experienced the TAConnect
            difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="mb-4">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mb-3 sm:mb-4" />
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-red-500 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
