import React from "react";

type WorkItem = {
  role: string;
  company: string;
  period: string;
  details: string[];
};

const workData: WorkItem[] = [
  {
    role: "Freelance Fullstack Developer",
    company: "Self Employed",
    period: "Jun 2025 — Present",
    details: [
      "Rebuilt legacy site using Laravel, Blade, HTML, and SCSS, improving performance and maintainability.",
      "Handled secure SFTP transfers and Git-based version control; coordinated AWS hosting deployments.",
      "Led requirement discussions with the client and provided progress updates throughout delivery."
    ],
  },
  {
    role: "Software Developer Intern",
    company: "XYON Health Inc.",
    period: "May 2024 — Dec 2024",
    details: [
      "Developed scripts integrating multiple platforms into a unified database.",
      "Performed documentation, QA, smoke testing, and coordinated staging-to-production releases.",
      "Merged PRs containing new features, bug fixes, and API upgrades across backend and frontend."
    ],
  },
];

const Work: React.FC = () => {
  return (
    <div className="max-w-5xl  mb-5">
      <h2 className="text-2xl font-bold">Work Experience</h2>

      <div className="space-y-6">
        {workData.map((item, i) => (
          <div key={i} className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md shadow-sm hover:bg-white/20 transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <span className="text-sm opacity-80">{item.period}</span>
            </div>
            <p className="mt-1 opacity-80">{item.company}</p>

            <ul className="list-disc list-inside mt-3 space-y-1 text-sm opacity-90">
              {item.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
