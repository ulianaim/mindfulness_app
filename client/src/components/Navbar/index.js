import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Navbar() {
  let username
  if (Auth.loggedIn()){

     username = Auth.getProfile().data.username
  }
  return (
    <nav className="sticky justify-space-between">
      <Link className="btn btn-lg btn-info m-2" to = "/">Home</Link>
      {Auth.loggedIn() ? (
        <Link className="btn btn-lg btn-info m-2" to={`/profile/${username}`}>My Profile</Link>
      ) : (
        <>
        <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
        </Link></>
      )
      }
    </nav>
  );
}

export default Navbar;
