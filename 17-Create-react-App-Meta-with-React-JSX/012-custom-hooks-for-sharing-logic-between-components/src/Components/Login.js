import { useState } from "react";
//importing custom hook
import useLocalStorageForEmail from "./customHook.js";

export default function Login() {
  const [password, setPassword] = useState("");
  //destructuring {email,setEmail} from  useLocalStorageForEmail hook
  const { email, setEmail } = useLocalStorageForEmail();

  return (
    <>
      <h1>Login to the Portal!</h1>
      <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted");
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
