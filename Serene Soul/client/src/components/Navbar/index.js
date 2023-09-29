import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky">
      <Link to = "/">Home</Link>
      {Auth.loggedIn() ? (
        <Link to = "/My_Profile">My Profile</Link>
      ) : (
        <></>
      )
      }
    </nav>
  );
}

export default Navbar;