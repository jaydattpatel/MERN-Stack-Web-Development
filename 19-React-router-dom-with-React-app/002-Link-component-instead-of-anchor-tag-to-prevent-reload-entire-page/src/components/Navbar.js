// importing Link tag component instead of anchor tag to prevent reload entire page
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        {/* adding link path to element using Link tag and 'to' attribute instead of href*/}
        <Link to="/">
          <h4>HOME</h4>
        </Link>
        <Link to="/about">
          <h4>ABOUT</h4>
        </Link>
        <Link to="/items">
          <h4>ITEMS</h4>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
