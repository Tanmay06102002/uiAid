import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="text-2xl">{icon}</div>
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
