import { memo, useState } from "react";
import { Box } from "./Box.js";
import { Lab } from "./Lab.js";
import { Client } from "./Client.js";
import { ANDis } from "./ANDis.js";
export const Container = memo(function Container() {
  const [clientList, setClientList] = useState("");

  // const handleClientListState = (client) => {
  //   setClientList(client);
  // };

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Lab />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Client clientList={clientList} />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {/* <ANDis onChangeClientList={handleClientListState} /> */}
        <ANDis onChangeClientList={setClientList} />
      </div>
    </div>
  );
});
