import { Card, CardContent } from "./components/ui/card";
import { SectionDivider } from "./divider";
import {
  Users,
  Crown,
  Building,
  Star,
  Check,
  Award,
  ExternalLink,
  Globe,
} from "lucide-react";

export const Membership = () => {
  const membershipPlans = [
    {
      name: "Community Member",
      type: "Individual",
      price: "Free",
      period: "",
      description:
        "Perfect for Nigerians living in the Middle East and North Africa",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      popular: false,
      features: [
        "Access to exclusive community content",
        "Priority registration for events",
        "Leadership opportunities",
        "Learning and collaboration access",
        "Monthly professional webinars",
        "Networking with diaspora community",
        "Cultural celebration events",
        "Online portal registration",
      ],
      buttonText: "Join Community",
      buttonStyle:
        "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700",
    },
    {
      name: "Platinum Partner",
      type: "Business",
      price: "Custom",
      period: "Annual Partnership",
      description:
        "Exclusive partnership opportunities for businesses and brands globally",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-300",
      popular: true,
      features: [
        "Global brand visibility",
        "Partnership recognition at events",
        "Access to diaspora market insights",
        "Co-branding opportunities",
        "Featured partner status",
        "Exclusive networking events",
        "Custom collaboration packages",
        "Priority support and consultation",
      ],
      buttonText: "Become Partner",
      buttonStyle:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600",
    },
  ];

  const supportingPartners = [
    { name: "Taptap Send", category: "Financial Services" },
    { name: "Leading Lingual", category: "Language Services" },
    { name: "Gold Crystal Travel", category: "Travel & Tourism" },
    { name: "Jocund Global Resources", category: "Business Solutions" },
    { name: "Dantata Services", category: "Corporate Services" },
  ];

  const handleJoinClick = (planName: string) => {
    if (planName === "Community Member") {
      console.log("Redirecting to community registration portal");
    } else {
      window.open(
        "mailto:nimecommunitymena@gmail.com?subject=Platinum Partnership Inquiry",
        "_blank"
      );
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Membership Packages
          </h2>
          <SectionDivider />
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
            Join our thriving community of
            <span className="text-blue-600 font-semibold">
              {" "}
              Nigerians in the diaspora
            </span>{" "}
            or become a
            <span className="text-yellow-600 font-semibold">
              {" "}
              global business partner
            </span>
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {membershipPlans.map((plan, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white ${
                plan.borderColor
              } ${
                plan.popular ? "border-2 ring-4 ring-yellow-200" : "border"
              } shadow-lg`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-bold rounded-bl-xl">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Popular
                  </div>
                </div>
              )}

              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 lg:p-10 relative z-10">
                {/* Icon and type */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}
                  >
                    {plan.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {plan.type}
                  </span>
                </div>

                {/* Plan name and price */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  )}
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mt-0.5`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleJoinClick(plan.name)}
                  className={`w-full ${plan.buttonStyle} text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                >
                  <span>{plan.buttonText}</span>
                  <ExternalLink className="w-5 h-5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supporting Partners Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] opacity-50"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Supporting Partners
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Trusted global businesses that support our mission and community
                growth
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {supportingPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{partner.name}</h4>
                  <p className="text-sm text-gray-300">{partner.category}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                Interested in becoming a supporting partner?
              </p>
              <button
                onClick={() =>
                  window.open(
                    "mailto:nimecommunitymena@gmail.com?subject=Partnership Opportunity",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
