import React, { useEffect, useState } from "react";
import textEditorImage from "../assets/text_editor_image.png";
import lightPurpleCircle from "../assets/Purple_Circle_2.png";

const App = () => {
  const [seatData, setSeatData] = useState([]);

  const fetchSeatData = async () => {
    try {
      const response = await fetch("https://viaje.ai/seatinfo_api/");
      const data = await response.json();
      setSeatData(data.data);
    } catch (error) {
      console.error("Error fetching seat data:", error);
    }
  };

  useEffect(() => {
    fetchSeatData();
  }, []);

  return (
    <div className="flex flex-col items-center p-8 font-sans">
      <h2 className="text-2xl font-bold mb-6">How it works</h2>
      <div className="flex flex-col lg:flex-row items-start lg:space-x-16 space-y-8 lg:space-y-0">
        {/* Instructions Section */}
        <div className="max-w-xs text-left">
          <h3 className="text-xl font-medium mb-4">
            Enter your post's title & keyword
          </h3>
          <p className="text-gray-600 mb-4">
            Simply provide our AI writer with 1-2 sentences on what to write,
            and it'll understand and start writing for you.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✔️</span> Include any SEO
              keywords you want to rank for
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✔️</span> Customize your copy
              with tone and perspective options
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✔️</span> Choose from 25+
              languages
            </li>
          </ul>
          <img
            src={textEditorImage}
            alt="Text Editor"
            className="mt-6 w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="-z-10 absolute left-[600px] top-[1650px]">
          <img src={lightPurpleCircle} alt="loading.." width={"200px"} />
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white">
          <table className="min-w-full border border-blue-600 text-center">
            <thead>
              <tr>
                <th className="border border-blue-300 bg-blue-200 px-4 py-4 font-bold">
                  SEAT
                </th>
                <th className="border border-blue-300 bg-blue-200 px-4 py-4 font-bold">
                  PRICE
                </th>
                <th className="border border-blue-300 bg-blue-200 px-4 py-4 font-bold">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              {seatData.map((seat, index) => (
                <tr key={index}>
                  <td className="border border-blue-300 font-bold px-4 py-3">
                    {seat.seat_no}
                  </td>
                  <td className="border border-blue-300 font-bold px-4 py-3">
                    {seat.price}
                  </td>
                  <td className="border border-blue-300 font-bold px-4 py-3">
                    {seat.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
