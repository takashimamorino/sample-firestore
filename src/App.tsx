import React from "react";

import { db } from "./firebaseConfig";

function App() {
  const addUser = () => {
    db.collection("users").add({
      age: 0,
      name: "aaa"
    });
  };

  return (
    <>
      <h2>add</h2>
      <button onClick={addUser}>add user</button>
    </>
  );
}

export default App;
