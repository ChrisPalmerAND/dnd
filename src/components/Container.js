import { memo, useState } from "react";
import { WorkSource } from "./WorkSource.js";
import { SideDrawer } from "./SideDrawer.js";
import { andis } from "../data/andis.js";
import { listOfWorkSource } from "../data/worksource.js";
import { ClientStatusType } from "./ClientStatusType.js";
export const Container = memo(function Container() {
  const [andiList, setAndiList] = useState(andis);
  const [currentAndiDetails, setCurrentAndiDetails] = useState();
  const [drawerState, setDrawerState] = useState({
    right: false,
  });

  const toggleDrawer = (open, currentAndiDetails) => {
    handleCurrentAndiDetails(currentAndiDetails);
    setDrawerState({ ...drawerState, right: open });
  };
  const handleCurrentAndiDetails = (andi) => {
    setCurrentAndiDetails(andi);
  };

  const newClientReset = (andi) => {
    andi.client.startDate = null;
    andi.client.endDate = null;
    andi.client.role = null;
    andi.client.skills = null;
    return andi;
  };
  const handleClientListState = (client, targetId) => {
    setAndiList((prev) =>
      prev.map((andi) => {
        if (andi.name === client) {
          andi.currentProject = targetId;
          andi.client.id = targetId;
          andi.client.status = ClientStatusType.CONFIRMED;
          console.log(targetId);

          const newWorkSource = listOfWorkSource.filter(
            (workSource) => workSource.workSourceId === targetId
          );
          console.log("new worksource", newWorkSource);
          andi.client.name = newWorkSource[0].workSourceName;
          andi = newClientReset(andi);
        }
        console.log(andi);
        return andi;
      })
    );
  };

  return (
    <div>
      {listOfWorkSource &&
        listOfWorkSource.map((workSource) => {
          return (
            <>
              <div>
                <WorkSource
                  onChangeClientList={handleClientListState}
                  andiList={andiList}
                  workSource={workSource}
                  toggleDrawer={toggleDrawer}
                />
              </div>

              <SideDrawer
                currentAndiDetails={currentAndiDetails}
                drawerState={drawerState}
                toggleDrawer={toggleDrawer}
              />
            </>
          );
        })}
    </div>
  );
});
