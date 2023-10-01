import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="sticky">
      <Link className="btn btn-lg btn-info m-2 justify-space-between justify-center text-dark" to = "/">Home</Link>
      {Auth.loggedIn() ? (
        <Link className="btn btn-lg btn-info m-2 justify-space-between justify-center text-dark" to = "/profile/:username">My Profile</Link>
      ) : (
        <>
        <Link className="btn btn-lg btn-info m-2 justify-space-between justify-center text-dark" to="/login">
                Login
        </Link>
        <Link className="btn btn-lg btn-light m-2 justify-space-between justify-center text-dark" to="/signup">
                Signup
        </Link></>
      )
      }
    </nav>
  );
}

export default Navbar;
