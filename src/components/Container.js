import { memo, useState } from "react";
import { ANDis } from "./ANDis.js";
import { WorkSource } from "./WorkSource.js";
export const Container = memo(function Container() {
  const [clientList, setClientList] = useState([]);
  const [andiList, setAndiList] = useState([
    { name: "Chris", id: 1, currentProject: "ANDis" },
    { name: "Dom", id: 2, currentProject: "Lab" },
    { name: "KZ", id: 3, currentProject: "ANDis" },
  ]);

  const handleClientListState = (client, targetName) => {
    console.log("Triggered");
    setAndiList((prev) => {
      prev.map((andi) => {
        if (andi.name === client) {
          andi.currentProject = targetName;
          console.log("state loops", andi);
        }
        return [...prev, prev];
      });
    });
    console.log("post function andi list", andiList);
  };

  const listOfWorkSource = ["Lab", "Sky", "TCO", "M&M"];

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <ANDis
          onChangeClientList={handleClientListState}
          listOfAndis={andiList}
        />
      </div>
      {listOfWorkSource &&
        listOfWorkSource.map((workSource) => {
          console.log(workSource);
          return (
            <div style={{ overflow: "hidden", clear: "both" }}>
              <WorkSource
                workSourceList={andiList}
                nameOfWorkSource={workSource}
              />
            </div>
          );
        })}
    </div>
  );
});
