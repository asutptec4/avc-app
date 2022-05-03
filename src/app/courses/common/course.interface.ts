export interface CourseEntity {
  id: string;
  name: string;
  description: string;
  isTopRated: boolean;
  date: Date;
  length: number;
  authors: Author[];
}

export interface NewCourse {
  name: string;
  length: number;
  description: string;
}

export interface UpdatedCourse {
  id: string;
  name: string;
  length: number;
  description: string;
  isTopRated: boolean;
}

export interface Author {
  id: string;
  name: string;
  lastName: string;
}

export interface CourseApiParams {
  start?: string;
  count?: string;
  sort?: string;
  textFragment?: string;
  id?: string;
}
