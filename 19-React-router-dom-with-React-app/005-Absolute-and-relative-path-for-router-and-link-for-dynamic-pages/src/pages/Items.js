import { NavLink } from "react-router-dom";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      {/* defining relative path */}
      <NavLink to="details">
        <button>Product</button>
      </NavLink>
    </>
  );
}

export default Items;
