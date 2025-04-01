import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import Quiz from "./components/Quiz.tsx";
import Start from "./components/Start.tsx";
import Result from "./components/Result.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Start darkMode={false} />,
      },
      {
        path: "/:pathName",
        element: <Quiz title={""} icon={""} questions={[]} />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
