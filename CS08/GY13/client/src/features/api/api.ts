import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  type AddStudentType,
  type CreateStudentData,
  type Student,
  type User,
} from "../../types";

const BASE_URL = "http://localhost:3030/";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Student"],
  endpoints: (build) => ({
    getStudents: build.query<Student[], void>({
      query: () => "public/students",
    }),
    login: build.mutation<{ token: string }, User>({
      query: (user) => ({
        url: "auth/login",
        method: "POST",
        body: user,
      }),
    }),
    getMyStudent: build.query<Student[], string>({
      query: (token) => ({
        url: "students",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Student"],
    }),
    addStudent: build.mutation<
      AddStudentType,
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
  }),
});

export const {
  useGetStudentsQuery,
  useLoginMutation,
  useGetMyStudentQuery,
  useAddStudentMutation,
} = apiSlice;
