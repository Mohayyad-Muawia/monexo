import { Link } from "react-router-dom";
import "./auth.css";

const Signup = () => {
  return (
    <div className="center-container">
      <div className="signup">
        <div className="logo">
          <h1>Monexo</h1>
        </div>

        <form>
          <div className="input-box half">
            <div className="input-box">
              <label htmlFor="fName">First Name</label>
              <input id="fName" type="text" required />
            </div>
            <div className="input-box">
              <label htmlFor="lName">Last Name</label>
              <input id="lName" type="text" required />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="uName">Email</label>
            <input id="uName" type="text" required />
          </div>

          <div className="input-box">
            <label htmlFor="pass">Password</label>
            <input id="pass" type="password" required />
          </div>

          <button className="pry-btn mt-30" type="submit">
            Sign up
          </button>

          <p className="center mt-10">
            Already have an account? {"  "}
            <Link className="bold" to="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
