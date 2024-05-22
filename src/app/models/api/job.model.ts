export type Job = {
  readonly id: number;
  title: string;
  companyName: string;
  companyLogo: string;
  reference: string;
};

export type JobDetail = {
  readonly id: number;
  title: string;
  companyName: string;
  companyLogo: string;
  reference: string;
  location: string;
  industries: Array<string>;
  types: Array<string>;
  description: string;
  publishDate: string;
};
