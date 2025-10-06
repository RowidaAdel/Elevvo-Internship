import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";

import Overview from "./Pages/Overview/Overview";
import Projects from "./Pages/Projects/Projects";
import Profile from "./Pages/Profile/Profile";

// Routes
const routes = createBrowserRouter([
  {
    path: "/", element: <DashboardLayout />, children: [
      { index: true, element: <Overview /> },
      { path: "overview", element: <Overview /> },
      { path: "projects", element: <Projects /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

// App Component
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
