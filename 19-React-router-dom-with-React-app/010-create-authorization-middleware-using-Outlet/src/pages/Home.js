import { useOutletContext } from "react-router-dom";

function Home() {
  //using passed Outlet context data
  const { date } = useOutletContext();

  return (
    <>
      <main>
        <h2>Home Page</h2>
        {date} - useOutletContext
      </main>
    </>
  );
}

export default Home;
