import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LoginForm from "./features/auth/LoginForm.tsx";
import StudentList from "./features/students/StudentList.tsx";
import StudentForm from "./features/students/StudentForm.tsx";
import Layout from "./features/nav/Layout.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import RequireAuth from "./features/auth/RequireAuth.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            {/* <Route index element={<Home />} /> */}
            <Route path="students" element={<StudentList />} />
            <Route path="add" element={<StudentForm />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
