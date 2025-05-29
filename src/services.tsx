import { SectionDivider } from "./divider";

export const WhatWeDo = () => {
  const iconItems = [
    { icon: "💡", label: "Define issues" },
    { icon: "🔍", label: "Identify solutions" },
    { icon: "🎯", label: "Identify skills/\nexpertise" },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
          What we do
        </h2>
        <SectionDivider />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mt-6 sm:mt-8">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-red-500 leading-tight">
              Unifying hearts across boundaries
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              We harness the power of technology, expert teachers, and community
              partnerships to create engaging, flexible, and inclusive learning
              experiences. Our live virtual classes, recorded lessons, group
              projects, and mentorship programs are supported by qualified
              educators who understand both the diaspora experience and global
              educational trends. We also involve families and local networks to
              ensure holistic student growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {iconItems.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 border-2 border-gray-200 rounded-full flex items-center justify-center text-xl sm:text-2xl lg:text-3xl group-hover:border-red-300 group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 whitespace-pre-line font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
