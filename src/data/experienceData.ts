interface Skill {
    name: string;
    color?: string;
  }
  
  interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    skills: Skill[];
    achievements?: string[];
    tools?: string[];
    certifications?: string[];
  }
  
  export const experienceData: Experience[]  = [
    {
      title: "Internal Claim Adjuster",
      company: "Crawford & Company",
      location: "Melbourne, VIC",
      period: "Sept 2023 - Jan 2024",
      responsibilities: [
        "Successfully maintained an expected case load of property claims, demonstrating proficiency in efficiently handling a diverse range of claims from initiation to resolution",
        "Conducted detailed office-based analysis of physical damage details, interviewed claimants, and compared claim information with evidence to determine coverage, ensuring thorough examination and accurate decision-making",
        "Provided exemplary support and advice to policyholders throughout the claims process, ensuring clear communication and understanding of their claims. Typed client reports accurately and in a timely manner",
        "Adhered to insurer client Service Level Agreements and processes, controlling claim costs and maintaining compliance with federal and state regulations",
        "Demonstrated commitment to professional growth through continuing education and provided valuable assistance during Catastrophe events"
      ],
      skills: [
        { name: "Claims Management" },
        { name: "Risk Analysis" },
        { name: "Client Communication" },
        { name: "Compliance" },
        { name: "Technical Writing" }
      ],
      achievements: [
        "Streamlined claims processing procedures to enhance efficiency.",
        "Improved accuracy in coverage assessments through meticulous analysis.",
        "Enhanced client satisfaction by providing clear and compassionate support.",
        "Maintained strict compliance with all regulatory requirements.",
        "Played a key role in managing claims during catastrophe events."
      ]
    },
    {
      title: "Founder & Independent Director",
      company: "Ingenium Systems",
      location: "Melbourne, VIC",
      period: "Jul 2023 - Present",
      responsibilities: [
        "Independently managed all aspects of web development consultancy, from client acquisition to project delivery and business operations",
        "Architected and delivered full-stack web solutions using TypeScript, React, and modern web technologies while maintaining direct client relationships",
        "Established comprehensive business processes including project management, client communication protocols, and quality assurance standards",
        "Implemented data-driven marketing strategies through Google Analytics and advertising platforms, achieving measurable client acquisition growth",
        "Orchestrated end-to-end project lifecycles, from initial client consultations to final deployment and maintenance planning"
      ],
      skills: [
        { name: "Full Stack Development", color: "var(--accent-secondary)" },
        { name: "Business Operations" },
        { name: "Client Relations" },
        { name: "Project Management" },
        { name: "Digital Strategy" }
      ],
      achievements: [
        "Successfully delivered multiple web development projects on time.",
        "Developed robust business processes to ensure quality and consistency.",
        "Expanded client base through effective marketing strategies.",
        "Maintained strong client relationships, leading to repeat business.",
        "Implemented efficient project lifecycles from consultation to deployment."
      ]
    },
    {
      title: "Investigation Review Officer",
      company: "Suncorp",
      location: "Melbourne, VIC",
      period: "Jul 2022 - Aug 2023",
      responsibilities: [
        "Investigated a portfolio of home insurance claims referred to the Fraud & Intelligence team while maintaining high KPI standards",
        "Conducted investigative interviews and document interrogation with excellent understanding of the investigation process",
        "Demonstrated proficiency in all IT systems used during investigations, showing strong adaptability to new environments",
        "Applied comprehensive knowledge of insurance contracts act and code of practice in investigations",
        "Collaborated with intelligence analysts to ensure thorough and fair investigation processes, utilizing practical applications of intelligence"
      ],
      skills: [
        { name: "Fraud Detection" },
        { name: "Investigation" },
        { name: "Regulatory Compliance" },
        { name: "Intelligence Analysis" },
        { name: "System Adaptation" }
      ],
      achievements: [
        "Enhanced fraud detection protocols to identify suspicious claims effectively.",
        "Strengthened collaboration with intelligence analysts for comprehensive investigations.",
        "Ensured adherence to regulatory standards in all investigative processes.",
        "Adapted quickly to new IT systems, improving investigation efficiency.",
        "Contributed to the development of best practices within the Fraud & Intelligence team."
      ]
    },
    {
      title: "Claims Specialist",
      company: "Suncorp",
      location: "Melbourne, VIC",
      period: "Jul 2021 - Jul 2022",
      responsibilities: [
        "Managed inbound calls and processed home insurance claims efficiently while maintaining high customer satisfaction",
        "Demonstrated expertise in claims handling systems including In4mo and claim centre",
        "Provided comprehensive policy coverage guidance and independently made claims decisions",
        "Led high support sessions for new starters and actively participated in process improvement initiatives",
        "Served as a knowledge resource for team members while maintaining strong departmental feedback solutions"
      ],
      skills: [
        { name: "Claims Processing" },
        { name: "Customer Service" },
        { name: "Training & Mentoring" },
        { name: "Process Improvement" },
        { name: "Team Leadership" }
      ],
      achievements: [
        "Maintained high customer satisfaction through efficient claims processing.",
        "Expertly utilized claims handling systems to streamline workflows.",
        "Provided valuable training and mentorship to new team members.",
        "Implemented process improvements that enhanced departmental efficiency.",
        "Acted as a key knowledge resource, supporting team members effectively."
      ]
    }
  ];
  