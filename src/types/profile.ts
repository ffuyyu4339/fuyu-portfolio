export interface Profile {
  name: string;
  siteName: string;
  headline: string;
  location: string;
  focus: string[];
  positioning: string;
  summary: string;
  contact: {
    email: string;
    github: string;
    city: string;
  };
}
