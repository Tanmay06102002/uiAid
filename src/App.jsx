import React from "react";
import MainSection from "./components/MainSection";
import ToolsSection from "./components/ToolsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <MainSection />
      <ToolsSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}

export default App;
