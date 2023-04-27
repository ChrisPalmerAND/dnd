import React from "react";

import { Modal } from "@mui/material";

function ANDi(id) {
  console.log(id);
  return (
    <>
      <div className="Board">
        <h1>ANDi details</h1>
        <h3>Dom</h3>
        <p>Developer</p>
        <p>Level 3.1</p>
        <p>Client: TCO</p>
        <p>Client Status: Confirmed</p>
        <p>Client Start Date: 1st May</p>
        <p>Andi id is: {id.id}</p>
      </div>
    </>
  );
}

export default ANDi;
