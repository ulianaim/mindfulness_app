import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Header () {
 
function showNavigation () {
    if (Auth.loggedIn()) {
        return (
            <ul>
            <li>
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
    } else {
        return (
            <ul>
              <li>
                <Link to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          );
    }
}
return (
    <header>
    <h1>
      <Link to="/">
        SereneSoul
      </Link>
    </h1>
    <p>Acknowledge, accept, and honour that you deserve your own deepest compassion and love</p>

    <nav>
      {showNavigation()}
    </nav>
  </header>
)

}

export default Header;