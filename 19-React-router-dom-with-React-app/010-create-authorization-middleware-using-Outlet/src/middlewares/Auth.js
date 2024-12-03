import { Navigate, useOutletContext } from "react-router-dom";

function Auth({ children }) {
  //using passed Outlet context data
  const { isLoggedIn } = useOutletContext();
  // console.log("Auth: ", isLoggedIn);
  return (
    <>
      {!isLoggedIn ? (
        <>
          <Navigate to="/" />
          <h2>Please Log in to access</h2>
        </>
      ) : (
        children
      )}
    </>
  );
}

export { Auth };
