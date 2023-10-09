import React from "react";
import { Route, Routes } from "react-router-dom";
const ProtectedLayout = React.lazy(() =>
  import("./Components/Dashboard/Layout/ProtectedLayout")
);
const Login = React.lazy(() => import("./view/Auth/Login"));
const Dashboard = React.lazy(() => import("./view/Dashboard"));
const NotFound = React.lazy(() => import("./view/NotFound"));
const Sidebar1 = React.lazy(() => import("./view/Sidebar"));
const Setting = React.lazy(() => import("./view/setting"));
const UserProfile = React.lazy(() => import("./view/UserProfile"));
const Customers = React.lazy(() => import("./view/Customers/Customers"));

const loading = () => (
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <React.Suspense fallback={loading()}>
      <Routes>
        <Route path="/login" name="Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/*" element={<ProtectedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sidebar1" element={<Sidebar1 />} />
          <Route path="setting" element={<Setting />} />
          <Route path="customers" element={<Customers />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
