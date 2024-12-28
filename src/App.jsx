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
import Calender from "./components/pages/Calender";
import Sittings from "./components/pages/Sittings";
import Trans from "./components/pages/Trans";
import Home from "./components/Home";
import Sources from "./components/pages/Sources";

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
        <Route path="/calender" Component={Calender} />
        <Route path="/sittings" Component={Sittings} />
        <Route path="/trans" Component={Trans} />
        <Route path="/sources" Component={Sources} />
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
