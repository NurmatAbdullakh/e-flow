export type Webinar = {
  id: number;
  title: string;
  category: string;
  image: string;
  status: string;
  createdAt: string;
  duration?: string;
  attendees?: number;
};

export type Category = {
  id: number;
  name: string;
};
