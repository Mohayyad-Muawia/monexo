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
import Sitings from "./components/pages/Sitings";
import Trans from "./components/pages/Trans";
import Home from "./components/Home";
import Sources from "./components/pages/Sources";
import EditProfile from "./components/pages/EditProfile";

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
        <Route path="/profile/edit" Component={EditProfile} />
        <Route path="/calender" Component={Calender} />
        <Route path="/sitings" Component={Sitings} />
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
