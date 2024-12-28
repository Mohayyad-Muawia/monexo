const EditProfile = () => {
  return (
    <form className="edit-profile">
      <h1>Edit Your Profile</h1>

      <div className="inputs">
        <div className="input-box">
          <label htmlFor="fName">Full Name</label>
          <input id="fName" type="text" required />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
        </div>
        <div className="input-box">
          <label htmlFor="pass">Password</label>
          <input id="pass" type="password" required />
        </div>
        <div className="center">
          <button className="pry-btn mt-30" type="submit">
            Save changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
