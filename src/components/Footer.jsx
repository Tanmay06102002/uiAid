import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Footer = () => {
  const [chartData, setChartData] = useState(null);

  const fetchChartData = async () => {
    try {
      const response = await fetch("https://viaje.ai/mainvia_api/");
      const data = await response.json();
      formatChartData(data.data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  const formatChartData = (data) => {
    const labels = data.map((item) => item["0"]);
    const dataset1 = data.map((item) => item["1"]);
    const dataset2 = data.map((item) => item["2"]);
    const dataset3 = data.map((item) => item["3"]);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Main route",
          data: dataset1,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
        {
          label: "Via route 1",
          data: dataset2,
          backgroundColor: "rgba(153, 102, 255, 0.6)",
        },
        {
          label: "Via route 2",
          data: dataset3,
          backgroundColor: "rgba(255, 159, 64, 0.6)",
        },
      ],
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Datewise Bus bookings",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 30,
        ticks: {
          stepSize: 10,
          callback: function (value) {
            return value;
          },
        },
      },
    },
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <div className="flex flex-col items-center p-8 font-sans pb-32">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Review, export and publish copy
      </h2>
      <div className="flex flex-col lg:flex-row items-start lg:space-x-16 space-y-8 lg:space-y-0">
        {/* Instructions Section */}
        <div className="max-w-xs text-left ml-4">
          <h3 className="text-xl font-medium mb-4">
            Simply provide our AI writer with 1-2 sentences on what to write,
            and it'll understand and start writing for you.
          </h3>
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
        </div>

        <div
          className="flex items-center justify-center w-full p-4 bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg shadow-lg"
          style={{ height: "280px", width: "100%" }}
        >
          {chartData ? (
            <Bar data={chartData} options={options} />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
