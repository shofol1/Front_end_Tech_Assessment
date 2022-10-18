import React, { useState } from "react";

export default function MyForm() {
  const [name, setName] = useState();
  console.log(name);
  return (
    <div>
      <form action="">
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}
