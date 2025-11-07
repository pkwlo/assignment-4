import React from "react";

type EducationItem = {
  school: string;
  program: string;
  period: string;
  details?: string[];
};

const educationData: EducationItem[] = [
  {
    school: "British Columbia Institute of Technology (BCIT)",
    program: "Diploma — Cloud Computing Option",
    period: "2023 — 2025",
    details: [
    ],
  },
  {
    school: "University of British Columbia (UBC)",
    program: "Bachelors of Science — Biology",
    period: "2010 — 2014",
    details: [],
  },
];

const Education: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-5">
      <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-sm hover:bg-white/20 transition"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-semibold">{item.school}</h3>
                <span className="text-sm opacity-80">{item.period}</span>
              </div>
              <p className="mt-1 text-md opacity-90">{item.program}</p>
              {item.details && item.details.length > 0 && (
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm opacity-90">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Education;
