import { Author } from '../../core/common';

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

export interface CourseApiParams {
  start?: number;
  count?: number;
  sort?: string;
  textFragment?: string;
  id?: string;
}
