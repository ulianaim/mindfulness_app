import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Navbar() {
  return (
// css_styling
    <nav className="sticky">
      <Link to = "/">Home</Link>
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


