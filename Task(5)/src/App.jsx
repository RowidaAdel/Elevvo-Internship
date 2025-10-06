import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { JobsProvider } from "./Context/JobsContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddJob from "./Pages/AddJob/AddJob";
import JobDetails from "./Pages/JobDetails/JobDetails";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/add", element: <AddJob /> },
  { path: "/job/:id", element: <JobDetails /> },
]);

export default function App() {
  return (
    <JobsProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </JobsProvider>
  );
}
