import React from 'react';
import { Check } from "react-feather";
type CardProps = {
  title: string;
  skills: string[];
};

const SkillCard: React.FC<CardProps> = ({
  title,
  skills,
}) => {
  return (
    <div className="mb-6 p-6 rounded-lg shadow-lg bg-gray-900 bg-opacity-75 w-10/12 mx-auto hover:shadow-2xl transition duration-300">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">{title}</h2>
        <div className="flex flex-col items-center">
          {skills.map((skill, index) => (
            <div key={index} className="w-full mb-2 flex items-center">
              {/* Skill Icon */}
              <Check/> &nbsp;&nbsp;
              {/* Skill Name */}
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    'Python',
    'Django',
    'Flask',
    'React',
    'Javascript',
    'Full Stack',
    'HTML',
    'CSS - Tailwind',
    'Self-Taught',
    // Add more technical skill areas and skills as needed
  ];

  const investigationSkills = [
    'Document Interrogation',
    'Complaint Resolution',
    'Claims Investigation',
    'KPIs/KPAs Management',
    'Investigation Process',
    'Investigative Interviewing',
    'IT Systems Proficiency',
    'Regulatory Compliance',
    'Intelligence Utilization',
    'Collaboration with Analysts',
    // Add more investigation skills as needed
  ];

  const customerServiceSkills = [
    'Inbound Call Handling',
    'Claims Processing',
    'Claims Handling Systems',
    'Policy Coverage Analysis',
    'Independent Decision-Making',
    'Process Improvement',
    'Training Support',
    'Knowledge Sharing',
    // Add more customer service skills as needed
  ];

  const miscellaneousSkills = [
    'Problem Solving',
    'Time Management',
    'Financial Regulation Knowledge',
    'AML / CTL Training',
    // Add more miscellaneous skills as needed
  ];

  return (
    <div className="font-Cousine">
      <h1 className="text-3xl mt-4 text-gray-300 text-center">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-slate-400">
        <SkillCard title="Technical Skills" skills={technicalSkills} />
        <SkillCard title="Investigation Skills" skills={investigationSkills} />
        <SkillCard title="Customer Service Skills" skills={customerServiceSkills} />
        <SkillCard title="Miscellaneous Skills" skills={miscellaneousSkills} />
      </div>
    </div>
  );
};

export default Skills;
