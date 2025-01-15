export interface Topic {
  code: string;
  name: string;
}

export interface Certificate {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  type: 'certificate' | 'statement' | 'transcript';
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  status: string;
  type: 'education' | 'certification';
  certificates?: Certificate[];
  topics: Topic[] | {
    investigativeUnits: Topic[];
    complianceUnits: Topic[];
  };
} 