type LessonDay = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

type Teacher = {
  id: number;
  name: string;
  email: string;
  password: string;
  subjects: string[];
  createdAt: string;
  updatedAt: string;
};

export type Student = {
  id: number;
  name: string;
  price: number;
  subject: string;
  lessonDates: LessonDay[];
  TeacherId: number;
  createdAt: string;
  updatedAt: string;
  teacher: Teacher;
};

export interface User {
  email: string;
  password: string;
}

export interface AddStudentType {
  message: string;
  student?: Student;
}

export interface CreateStudentData {
  name: string;
  price: number;
  subject: string;
  lessonDates: string[];
}

export interface StudentReturnData {
  message: string;
  student: Student;
}
