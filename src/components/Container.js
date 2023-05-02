import { memo, useState } from "react";
import { ANDi } from "./ANDis.js";
import { WorkSource } from "./WorkSource.js";
export const Container = memo(function Container() {
  const [andiList, setAndiList] = useState([
    {
      name: "Chris",
      id: 1,
      currentProject: 1,
      client: { status: "tipped", name: "M&M", id: 4 },
    },
    {
      name: "Dom",
      id: 2,
      currentProject: 3,
      client: { status: "confirmed", name: "Sky", id: 3 },
    },
    {
      name: "KZ",
      id: 3,
      currentProject: 2,
      client: { status: "rolling off", name: "TCO", id: 2 },
    },
    {
      name: "Iain",
      id: 4,
      currentProject: 1,
      client: { id: 1 },
    },
  ]);

  const listOfWorkSource = [
    { workSourceName: "Lab", workSourceId: 1 },
    { workSourceName: "TCO", workSourceId: 2 },
    { workSourceName: "Sky", workSourceId: 3 },
    { workSourceName: "M&M", workSourceId: 4 },
  ];

  const handleClientListState = (client, targetName) => {
    console.log(targetName);
    setAndiList((prev) =>
      prev.map((andi) => {
        if (andi.name === client) {
          andi.currentProject = targetName;
        }
        return andi;
      })
    );
  };

  return (
    <div>
      {listOfWorkSource &&
        listOfWorkSource.map((workSource) => {
          return (
            <div>
              <WorkSource
                onChangeClientList={handleClientListState}
                andiList={andiList}
                workSource={workSource}
              />
            </div>
          );
        })}
    </div>
  );
});
