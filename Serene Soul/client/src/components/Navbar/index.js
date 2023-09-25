import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to = "/">Home</Link>
      <Link to = "/My_Profile">My Profile</Link>
    </nav>
  );
}

export default Navbar;