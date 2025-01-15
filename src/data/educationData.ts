import { Education } from '../types/education';
import Cert1 from '../assets/cert1.pdf';
import Cert2 from '../assets/cert2.pdf';

export const educationData: Education[] = [
  {
    id: 'comp-sci',
    title: 'Computer Science',
    institution: 'The University of Newcastle',
    status: 'Current Student',
    type: 'education',
    topics: [
      { code: "CS101", name: "Object-Oriented Programming" },
      { code: "CS102", name: "Data Structures & Algorithms" },
      { code: "CS103", name: "Web Development" },
      { code: "CS104", name: "Database Systems" },
      { code: "CS105", name: "Software Engineering Principles" }
    ]
  },
  {
    id: 'cert-iii-inv',
    title: 'Certificate III in Investigative Services',
    institution: 'Professional Qualification',
    status: 'Completed',
    type: 'certification',
    certificates: [
      {
        id: 'cert-1',
        name: 'Statement Of Results',
        description: 'Certificate III Investigative Services',
        fileUrl: Cert1,
        type: 'statement'
      },
      {
        id: 'cert-2',
        name: 'Certificate III in Investigative Services',
        description: 'Official Certification',
        fileUrl: Cert2,
        type: 'certificate'
      }
    ],
    topics: {
      investigativeUnits: [
        { code: "CPPINV3026", name: "Work effectively in investigative services" },
        { code: "CPPINV3027", name: "Develop investigation plans" },
        { code: "CPPINV3028", name: "Investigate and locate subjects" },
        { code: "CPPINV3029", name: "Provide quality investigative services to clients" },
        { code: "CPPINV3030", name: "Conduct factual investigations" },
        { code: "CPPINV3031", name: "Conduct interviews and take statements" },
        { code: "CPPINV3032", name: "Develop factual investigation reports" },
        { code: "CPPINV3033", name: "Conduct covert surveillance operations" },
        { code: "CPPINV3034", name: "Organise and operate surveillance vehicles" },
        { code: "CPPINV3035", name: "Develop surveillance investigation reports" }
      ],
      complianceUnits: [
        { code: "CPPSEC3124", name: "Prepare and present evidence in court" },
        { code: "BSBESB305", name: "Address compliance requirements for new business ventures" },
        { code: "HLTWHS003", name: "Maintain work health and safety" },
        { code: "PSPCRT007", name: "Compile and use official notes" },
        { code: "PSPREG006", name: "Produce formal record of interview" },
        { code: "PSPSEC009", name: "Handle sensitive information" }
      ]
    }
  }
]; 