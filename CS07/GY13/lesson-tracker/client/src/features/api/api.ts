import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type CreateStudentData, type Student, type User } from "../../types";

const BASE_URL = "http://localhost:3030/";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Student"],
  endpoints: (build) => ({
    getStudents: build.query<Student[], void>({
      query: () => "public/students",
    }),
    getMyStudents: build.query<Student[], string>({
      query: (token) => ({
        url: "students",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Student"],
    }),
    login: build.mutation<{ token: string }, User>({
      query: (user) => ({
        url: "auth/login",
        method: "POST",
        body: user,
      }),
    }),
    addStudent: build.mutation<
      { message: string },
      { student: CreateStudentData; token: string }
    >({
      query: ({ student, token }) => ({
        url: "student",
        method: "POST",
        body: student,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudent: build.mutation<
      { message: string },
      { id: number; token: string }
    >({
      query: ({ id, token }) => ({
        url: `student/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useLoginMutation,
  useGetMyStudentsQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
} = apiSlice;
