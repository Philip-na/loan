import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashbaord/Dashboard";
import Home from "./components/Pages/Home/Home";
import Loan from "./components/Pages/Loan/Loan";
import Pagelayout from "./components/Pagelayout/Pagelayout";
import Login from "./components/Login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RequireAuth from "./components/auth/RequireAuth";
import SiginUp from "./components/Login/SiginUp";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Pagelayout />}>
        <Route element={<RequireAuth />}>
          <Route index element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SiginUp />} />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
