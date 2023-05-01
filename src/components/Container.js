import { memo, useState } from "react";
import { ANDis } from "./ANDis.js";
import { WorkSource } from "./WorkSource.js";
export const Container = memo(function Container() {
  const [clientList, setClientList] = useState([]);
  const [andiList, setAndiList] = useState([
    {
      name: "Chris",
      id: 1,
      currentProject: "Lab",
      client: { status: "tipped", name: "M&M" },
    },
    {
      name: "Dom",
      id: 2,
      currentProject: "Sky",
      client: { status: "confirmed", name: "Sky" },
    }, // change "tipped" for enum types.
    {
      name: "KZ",
      id: 3,
      currentProject: "TCO",
      client: { status: "rolling off", name: "TCO" },
    },
    {
      name: "Iain",
      id: 4,
      currentProject: "Lab",
      client: null,
    },
  ]);

  const handleClientListState = (client, targetName) => {
    setAndiList((prev) =>
      prev.map((andi) => {
        if (andi.name === client) {
          andi.currentProject = targetName;
        }
        return andi;
      })
    );
  };

  const listOfWorkSource = ["Lab", "Sky", "TCO", "M&M"];

  return (
    <div>
      {listOfWorkSource &&
        listOfWorkSource.map((workSource) => {
          return (
            <div>
              <WorkSource
                onChangeClientList={handleClientListState}
                andiList={andiList}
                nameOfWorkSource={workSource}
              />
            </div>
          );
        })}
    </div>
  );
});
