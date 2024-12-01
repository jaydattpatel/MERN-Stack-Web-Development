/*
    useNavigate for go to page :
    -1: for single back ../
    -2: for two slash back ../../
    -num: for go to back upto number of /
    string : absolute or relative path
    */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// creating error element Page
function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // error page load and go to back using -1
    setTimeout(() => navigate(-1), 2000);
  }, []);

  return (
    <>
      <h1>OPPS !!!!! Something went wrong....</h1>
    </>
  );
}

export default ErrorPage;
