// importing Link tag component instead of anchor tag to prevent reload entire page
// Outlet to show children
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  function getClasses({ isActive, isPending, isTransitioning }) {
    const classes = [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ");

    return classes;
  }

  function getStyle({ isActive, isPending, isTransitioning }) {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "red" : "",
    };
  }
  return (
    <>
      <div className="nav">
        {/* adding link path to element using NavLink tag and 'to' attribute instead of href*/}
        <NavLink to="/" className={getClasses} style={getStyle}>
          <h4>HOME</h4>
        </NavLink>
        <NavLink to="/about" className={getClasses} style={getStyle}>
          <h4>ABOUT</h4>
        </NavLink>
        <NavLink to="/items" className={getClasses} style={getStyle}>
          <h4>ITEMS</h4>
        </NavLink>
      </div>
      {/* adding Outlet component to show children component as path */}
      <Outlet />
    </>
  );
}

export default Navbar;
