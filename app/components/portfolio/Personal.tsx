import React from "react";
import './portfolio.css'

const Personal: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-5">
      <h2 className="text-2xl font-bold">Personal Projects</h2>

      <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-sm hover:bg-white/20 transition">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
          <h3 className="text-xl font-semibold">HSR Relic Planner</h3>
          <span className="text-sm opacity-80">May 2024 — Sept 2024</span>
        </div>
        <p className="opacity-80 mb-3">Website</p>

        <ul className="list-disc list-inside space-y-1 leading-relaxed opacity-80">
          <li>Built a tool for selecting and saving equipment loadouts for characters.</li>
          <li>Developed using React + TypeScript with MongoDB for user data.</li>
          <li>Designed and implemented UI and backend independently.</li>
        </ul>
      </div>
    </div>
  );
};

export default Personal;
