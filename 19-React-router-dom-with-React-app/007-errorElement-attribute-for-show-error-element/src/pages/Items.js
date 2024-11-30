import { NavLink } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function Items() {
  return (
    <>
      <main>
        <h2>Items Page</h2>
      </main>
      {ITEMS.map((item) => (
        /* defining relative path */
        <ul style={{ listStyleType: "none" }}>
          <NavLink to={`details/${item.id}`}>
            <li>
              <button style={{ background: "yellow" }}>{item.id}</button>
            </li>
          </NavLink>
        </ul>
      ))}
    </>
  );
}

export default Items;
