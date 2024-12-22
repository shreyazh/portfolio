import React from 'react';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2020 - Present",
    description: [
      "Led development of core platform features",
      "Mentored junior developers",
      "Improved system performance by 40%"
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "StartUp Inc",
    period: "2018 - 2020",
    description: [
      "Developed full-stack web applications",
      "Implemented CI/CD pipelines",
      "Collaborated with cross-functional teams"
    ]
  }
];

function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{exp.role}</h2>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;