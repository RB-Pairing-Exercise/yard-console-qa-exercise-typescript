import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout.tsx";
import YardPage from "./routes/YardPage.tsx";
import EquipmentPage from "./routes/EquipmentPage.tsx";
import HomePage from "./routes/HomePage.tsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>oops</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "yards",
        element: <YardPage />,
      },
      {
        path: "equipment",
        element: <EquipmentPage />,
      },
      {
        path: "yards",
        element: <YardPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
