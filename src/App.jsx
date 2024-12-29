import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Sidebar from "./components/constents/Sidebar";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Trans from "./components/pages/Trans";
import Home from "./components/Home";
import Sources from "./components/pages/Sources";
import Notifications from "./components/pages/Notifications";

function Layout() {
  const location = useLocation();

  const hideSidebarRoutes = ["/login", "/signup"];
  const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowSidebar && <Sidebar />}
      <div className="overlay"></div>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/profile" Component={Profile} />
        <Route path="/settings" Component={Settings} />
        <Route path="/trans" Component={Trans} />
        <Route path="/sources" Component={Sources} />
        <Route path="/notifications" Component={Notifications} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
