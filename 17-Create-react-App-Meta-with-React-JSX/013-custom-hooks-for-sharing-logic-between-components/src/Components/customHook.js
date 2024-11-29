/*

Custom Hooks :
Reusing Logic with Custom Hooks, React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs.

You must follow these naming conventions:

- React component names must start with a capital letter, like StatusBar and SaveButton. 

- Hook names must start with 'use' followed by a capital letter, like useState (built-in) or useOnlineStatus (custom, like earlier on the page). Hooks may return arbitrary values.

Note : Hook names always start with use followed by a capital letter like useState.
*/

import { useEffect, useState } from "react";

export default function useLocalStorageForEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return { email, setEmail };
}
