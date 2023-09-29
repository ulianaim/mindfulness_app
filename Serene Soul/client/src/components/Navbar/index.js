import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <Link to = "/"></Link>
      {Auth.loggedIn() ? (
        <Link to = "/profile/:username">My Profile</Link>
      ) : (
        <></>
      )
      }
    </nav>
  );
}

export default Navbar;


