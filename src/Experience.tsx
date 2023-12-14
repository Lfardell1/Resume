import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

type CardProps = {
  title: string;
  subtitle: string;
  content: string;
  skills: string[];
  listItems: string[];
};

const CardWithExpandableList: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  skills,
  listItems,
}) => {
  const [isListExpanded, setListExpanded] = useState(false);

  const toggleList = () => {
    setListExpanded(!isListExpanded);
  };

  return (
    <div className="mb-6 p-6 rounded-lg shadow-lg bg-gray-900 bg-opacity-75 hover:bg-gray-700 duration-300 transition ease-in-out w-9/12 mx-auto">
      <div className="flex justify-between mb-4">
        <a
          href="#!"
          className="font-small text-gray-300 hover:text-gray-500 duration-300 transition ease-in-out text-sm"
        >
          {title}
        </a>
        <a
          href="#!"
          className="font-medium text-gray-300 hover:text-gray-500 focus:text-gray-800 duration-300 transition ease-in-out text-sm"
        >
          {subtitle}
        </a>
      </div>
      <div>
        {content} <br />
        <div className="flex flex-wrap mt-4">
          {skills.map((skill, index) => (
            
            <div
              key={index}
              className="rounded-md mt-3 mr-4 bg-gray-700 text-gray-300 px-2 py-1 text-sm"
            >
              {skill}
            </div>
            
          ))}
        </div>
        <button
          className="mt-4 text-gray-500 hover:text-gray-700"
          onClick={toggleList}
        >
          {isListExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isListExpanded && (
          <ul className="mt-4">
            {listItems.map((item, index) => (
              <li className="Experience mt-5" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="font-Cousine">
      <div className="grid grid-cols-1 gap-4 mt-40 text-slate-400">
        <h1 className="text-2xl mt-2 font-bold text-center">Experience</h1>

        <CardWithExpandableList
          title="Suncorp - Investigation Review Officer"
          subtitle="Jul 2022 – Jul 2023"
          content="As an Investigation Review Officer, I have ensured compliance with financial regulatory procedures and risk control measures. With a keen eye for detail, I navigate complex investigations while upholding the highest standards of integrity and accuracy. Continuously learning and staying updated on evolving regulations, I contribute to effective risk mitigation efforts, safeguarding the organization's interests."
          skills={[
            "Investigative Interviewing",
            "Regulatory Compliance",
            "Risk Mitigation",
          ]}
          listItems={[
            "Investigating a portfolio of home insurance claims referred to the Fraud & Intelligence team.",
            "Meeting all KPI’s and KPA’s.",
            "Excellent understanding of the investigations process.",
            "Trained in investigative interviewing and document interrogation.",
            "Excellent understanding of all IT systems used during the investigations process, and this can be adapted to any environment.",
            "Understanding of relevant legislation including the insurance contracts act and the insurance code of practice.",
            "Understanding of the importance of intelligence and its practical applications to the investigation process.",
            "Regularly liaised with intelligence analysts and collaborated to ensure the investigation process is well equipped with the tools and information necessary to conduct a thorough and fair investigation.",
          ]}
        />

        <CardWithExpandableList
          title="Suncorp - Claim Specialist"
          subtitle="Jul 2021 – Jul 2022"
          content="As a Claim Specialist, I efficiently handle insurance claims, ensuring fair and timely settlements. With strong attention to detail, I analyze complex situations and communicate effectively with clients and teams. Passionate about delivering justice and innovation, I strive to make a positive impact during times of uncertainty."
          skills={[
            "Claims Handling",
            "Customer Communication",
            "Problem Solving",
          ]}
          listItems={[
            "Taking Inbound calls and actioning customers home insurance claims in a timely and positive manner.",
            "Working knowledge of claims handling systems such as In4mo and claim centre.",
            "Discussing policy coverage and setting customers claim up for success.",
            "Ability to independently make claims decisions and provide authority on processes and internal business knowledge.",
            "Strong use of department feedback solutions and always looking for ways to better the processes that are followed.",
            "Took initiative to be a part of high support sessions for new starters and stepping up to run these sessions when coaches were sick / out of the office.",
            "Was an approachable source of knowledge for other specialists on my team.",
          ]}
        />

        <CardWithExpandableList
          title="Classic Blinds & Shutters - Installation"
          subtitle="Sep 2020 – Jul 2021"
          content="As a Window Covering Installer at Classic Blinds & Shutters in Cardiff, NSW, I was responsible for manufacturing and installing plantation shutters and window coverings. I demonstrated professionalism by often working independently and conducting installations at customers' homes, ensuring high-quality standards were met throughout the process."
          skills={[
            "Time Management",
            "Workplace Health & Safety",
            "Attention to Detail",
          ]}
            listItems={[
            "Manufacturing of plantation shutters & window coverings including being a part of the installation team.",
            "Attended customers’ homes and conducted work professionally and independently in a time productive manner.",
            "Liaised with customers and gained experience in working closely with their expectations while simultaneously meeting business performance & quality standards.",
            "Working in a factory adhering to manufacturing standards and keeping a clean workspace.",
          ]}
        />
      </div>
    </div>
  );
};
export default Experience