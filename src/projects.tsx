import { Card, CardContent } from "./components/ui/card";
import { SectionDivider } from "./divider";
import { Mail, ExternalLink, Sparkles, Users } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Feed the Needy Initiative",
      description:
        "Humanitarian outreach providing essential food items and resources to underprivileged individuals",
      details:
        "Quarterly project powered by community donations and volunteer support across Nigeria and MENA region",
      icon: "🍽️",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      features: [
        "Quarterly Outreach",
        "Community Donations",
        "Volunteer Support",
        "Nigeria & MENA",
      ],
    },
    {
      title: "Global Skill Acquisition Program in Tech",
      description:
        "Flagship development initiative training Nigerian youths and adults in high-demand tech skills",
      details:
        "Covers Networking & Cybersecurity, Project Management, Product Management, Web Development, Data Analysis, Photography, Video Editing & Social Media Management",
      icon: "💻",
      gradient: "from-blue-400 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      features: [
        "Cybersecurity",
        "Project Management",
        "Web Development",
        "Data Analysis",
        "Digital Media",
      ],
    },
    {
      title: "Professional Webinars & Annual Celebration",
      description:
        "Monthly expert webinars and grand July anniversary celebrations",
      details:
        "Free webinars on career development and industry trends, plus our annual July celebration featuring panel sessions, cultural showcases, awards, and networking opportunities to celebrate our journey, achievements, and culture",
      icon: "🎯",
      gradient: "from-green-400 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      features: [
        "Monthly Webinars",
        "July Anniversary",
        "Cultural Showcases",
        "Awards Ceremony",
      ],
    },
  ];

  const handleEmailClick = () => {
    window.open("mailto:nimecommunitymena@gmail.com", "_blank");
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent mb-6">
            Our Key Projects
          </h2>
          <SectionDivider />
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
            Empowering Nigerians in the diaspora through
            <span className="text-red-600 font-semibold">
              {" "}
              sustainable community initiatives
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg"
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 lg:p-10 relative z-10">
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-3xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl filter drop-shadow-sm">
                      {project.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-sm`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.details}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-black/10 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_rgba(255,255,255,0.1)_100%)]"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Partnership Opportunities
              </h3>

              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                We welcome collaborations with government institutions, NGOs,
                businesses, educational bodies, and cultural organizations to
                further our mission. Together, we can amplify our impact and
                create sustainable solutions for Nigerians in the diaspora.
              </p>

              {/* Contact button */}
              <button
                onClick={handleEmailClick}
                className="group inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Mail className="w-6 h-6 group-hover:animate-bounce" />
                <span>Partnership Inquiries</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="mt-4">
                <p className="text-white/80 text-sm">
                  nimecommunitymena@gmail.com
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/30 rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute top-8 left-1/2 w-3 h-3 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
