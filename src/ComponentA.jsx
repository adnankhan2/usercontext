import React, { useState } from "react";
import ComponentB from "./ComponentB";
function ComponentA() {
  const [user, setUser] = useState("Adnan Khan");
  return (
    <div className="box">
      <h2>Component A</h2>
      <h2>{`Hello ${user}`}</h2>
      <ComponentB user={user} />
    </div>
  );
}
export default ComponentA;
