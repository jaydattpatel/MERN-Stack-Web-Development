/**
 * author : Jaydatt Patel
 * 
 React with JSX 

 Conditional Rendering : You can return JSX object by different conditions like if else, ternary, &&, || . 

 && (AND) operator returns : first falsy or last truthy
 || (OR) operator returns : first truthy or last falsy


 */
function Welcome() {
  return <h2>Welcome to React JSX</h2>;
}

const LoginPage = <h3>Log In Page</h3>;
const UserPage = <h3>User Page</h3>;

//creating function component with capital letter
function App(obj) {
  const bool = obj.loggedIn == true;

  if (bool) {
    return (
      <>
        <Welcome />
        {bool && <p>Welcome to User Page</p>}
        {obj.firstName || obj.lastName}
        {UserPage}
        {bool ? <button>Log Out</button> : <button>Log In</button>}
      </>
    );
  } else {
    return (
      <>
        <Welcome />
        {!bool && <p>Welcome to LogIn Page</p>}
        {LoginPage}
        {bool ? <button>Log Out</button> : <button>Log In</button>}
      </>
    );
  }
}

// rendering React function component in Original DOM.
ReactDOM.createRoot(document.getElementById("main")).render(
  <App loggedIn="1" firstName="Jaydatt" />
);
