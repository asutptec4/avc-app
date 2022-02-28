export interface CourseEntity {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export interface NewCourse {
  title: string;
  duration: number;
  description: string;
}

export interface UpdatedCourse {
  id: string;
  title: string;
  duration: number;
  description: string;
  topRated: boolean;
}
