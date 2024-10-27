import React from "react";
import toolsData from "../data/toolsData";
import Card from "./Card";

function ToolsSection() {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-blue-200">
      <div className="container mx-auto px-6 p-9">
        <h2 className="text-3xl font-bold text-center text-gray-800 ">
          Most Popular Tools
        </h2>
        <p className="mt-4 text-lg text-center pb-8">
          AI has the potential to revolutionize the way we live and work, from
          improving healthcare and transportation to enhancing the way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool, index) => (
            <Card
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;
