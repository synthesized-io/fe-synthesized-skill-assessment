import { AppLayout } from "@app/widgets";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AllTasksPage, TaskPage } from "@app/pages";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "tasks",
        element: (
          <>
            <AllTasksPage />
            <Outlet />
          </>
        ),
        children: [
          {
            path: ":id",
            element: <TaskPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/tasks" replace />,
  },
]);
