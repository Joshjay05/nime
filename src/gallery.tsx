import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { SectionDivider } from "./divider";

export const TAPPAMSSection = () => (
  <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div className="order-2 lg:order-1">
          <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-600 to-red-500 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"></div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute top-0 right-0 flex gap-2 mb-4 z-10">
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:border-red-300 transition-all"
              title="Previous"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:border-red-300 transition-all"
              title="Next"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <Card className="mt-8 sm:mt-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                Our Uniqueness
              </h2>
              <SectionDivider />
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
                {/* Submit your RFPs with our unique subsband system */}
              </p>
              {/* <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Us
              </h3> */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                The NIME Community Online School exists to bridge the
                educational gap for African children and teens in the Middle
                East and North Africa. We provide consistent , high-quality
                learning that honors cultural identity while preparing students
                for a global future. I n a region where access to affordable,
                Nigerian-rooted education is limited, we of fer a t rusted
                solution that paren ts can rely on .
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                LEARN MORE
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
