import { useOutletContext } from "react-router-dom";

function About() {
  //using passed Outlet context data
  const { date } = useOutletContext();

  return (
    <>
      <main>
        <h2>About Page</h2>
        {date} - useOutletContext
      </main>
    </>
  );
}

export default About;
