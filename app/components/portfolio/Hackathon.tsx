import React from "react";

const Hackathon: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-5 mb-5">
      <h2 className="text-2xl font-bold">Hackathons</h2>

      <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-sm hover:bg-white/20 transition">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
          <h3 className="text-xl font-semibold">Developer — FriendFinder</h3>
          <span className="text-sm opacity-80">Jan 2024</span>
        </div>
        <p className="opacity-80 mb-3">Web App</p>

        <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
          <li>Developed a real-time chat application with account authentication.</li>
          <li>Applied problem solving and teamwork skills to deliver MVP in 24 hours.</li>
          <li>Presented live demo and Q&A session to judges.</li>
        </ul>
      </div>
    </div>
  );
};

export default Hackathon;
