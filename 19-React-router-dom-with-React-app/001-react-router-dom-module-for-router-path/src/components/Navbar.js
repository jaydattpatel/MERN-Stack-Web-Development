function Navbar() {
  return (
    <>
      <div className="nav">
        {/* adding link path to element */}
        <a href="/">
          <h4>HOME</h4>
        </a>
        <a href="/about">
          <h4>ABOUT</h4>
        </a>
        <a href="/items">
          <h4>ITEMS</h4>
        </a>
      </div>
    </>
  );
}

export default Navbar;
