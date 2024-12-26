import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  return (
    <div className="center-container">
      <div className="login">
        <form>
          <h1>Monexo</h1>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
          </div>
          <div className="input-box">
            <label htmlFor="pass">Password</label>
            <input id="pass" type="password" required />
          </div>
          <button className="pry-btn mt-30" type="submit">
            Log in
          </button>
          <p className="center mt-10">
            Don’t have an account? {"  "}
            <Link className="bold" to="/signup">
              Create an account
            </Link>
          </p>
        </form>

        <div className="img-box">
          <img src="/imgs/login.png" alt="money" />
        </div>
      </div>
    </div>
  );
};

export default Login;
