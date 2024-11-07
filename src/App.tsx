import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthEntry, AppEntry } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthEntry />,
  },
  {
    path: "/app",
    element: <AppEntry />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
