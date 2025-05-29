import { NGOSourceBanner } from "./banner";
import { ChatWidget } from "./chat";
import { Footer } from "./footer";
import { UniqueSection } from "./gallery";
import { Header } from "./header";
import { HeroBanner } from "./hero";
import { InfoCards } from "./info";
import { Membership } from "./membership";
import { Partnership } from "./Partnership";
import { Projects } from "./projects";
import { WhatWeDo } from "./services";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroBanner />
      <Partnership />
      <NGOSourceBanner />
      <InfoCards />
      <WhatWeDo />
      <UniqueSection />
      <Projects />
      <ChatWidget />
      <Membership />
      <Footer />
    </div>
  );
};

export default App;
