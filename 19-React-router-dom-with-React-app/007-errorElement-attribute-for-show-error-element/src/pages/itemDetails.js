import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails() {
  // reading url parameters
  const { id } = useParams();

  const item = ITEMS.find((item) => item.id === id);
  console.log(item);

  return (
    <>
      <main>
        <h2>Product: {id}</h2>
        <h2>{item.title}</h2>
        <h3>{item.detail} </h3>
      </main>
    </>
  );
}

export default ItemDetails;
