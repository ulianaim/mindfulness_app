import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="card sticky">
      <div className="card justify-center">
        <div>  
          <Link to="/">
            {}
            <img
              src="/logo.svg"
              alt="SereneSoul Logo"
              height="80"
            />
          </Link>
          <p className="">Acknowledge, accept, and honor that you deserve your own deepest compassion and love</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Welcome, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg m-2 justify-space-between" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              {/* <Link className="btn btn-lg btn-info m-2 justify-space-between justify-center text-dark" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2 justify-space-between justify-center text-dark" to="/signup">
                Signup
              </Link> */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;