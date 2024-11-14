import useLocalStorageForEmail from "./customHook.js";

export default function Reset() {
  //const [email,setEmail] = useState("");

  //destructuring {email,setEmail} from  useLocalStorageForEmail hook
  const { email, setEmail } = useLocalStorageForEmail();

  return (
    <>
      <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
