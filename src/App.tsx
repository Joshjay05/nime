import { NGOSourceBanner } from "./banner";
import { ChatWidget } from "./chat";
import { Footer } from "./footer";
import { TAPPAMSSection } from "./gallery";
import { Header } from "./header";
import { HeroBanner } from "./hero";
import { InfoCards } from "./info";
import { Partnership } from "./Partnership";
import { WhatWeDo } from "./services";
import { Testimonials } from "./testimonials";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroBanner />
      <NGOSourceBanner />
      <InfoCards />
      <WhatWeDo />
      <TAPPAMSSection />
      <Partnership />
      <Testimonials />
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default App;
