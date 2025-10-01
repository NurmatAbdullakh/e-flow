export type Course = {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  status: string;
  createdAt: string;
  duration?: string;
  progress?: number;
  enrolledStudents?: number;
  rating?: number;
};

export type Category = {
  id: number;
  name: string;
};
