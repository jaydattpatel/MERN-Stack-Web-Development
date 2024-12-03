import { NavLink, useOutletContext } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function Items() {
  //using passed Outlet context data
  const { date } = useOutletContext();

  return (
    <>
      <main>
        <h2>Items Page</h2>
        {date} - useOutletContext
      </main>
      <ul style={{ listStyleType: "none" }}>
        {ITEMS.map((item, i) => (
          /* defining relative path */
          <li key={i}>
            <NavLink to={`details/${item.id}`}>
              <button style={{ background: "yellow" }}>{item.id}</button>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Items;
