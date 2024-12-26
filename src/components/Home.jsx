import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="home">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
