import { memo, useState } from "react";
import { WorkSource } from "./WorkSource.js";
import { WorkSourceNames } from "./workSourceNames.js";
import { ClientStatusType } from "./ClientStatusType.js";

import { SideDrawer } from "./SideDrawer.js";
export const Container = memo(function Container() {
  const [andiList, setAndiList] = useState([
    {
      name: "Chris",
      profile: {
        level: 2.2,
        role: "Developer",
        skills: ["python", "react"],
      },
      id: 1,
      currentProject: 1,
      client: {
        startDate: "05/05/2023",
        endDate: "05/10/2023",
        status: ClientStatusType.TIPPED,
        name: WorkSourceNames.MM,
        id: 4,
        role: "Developer",
        skills: ["python"],
      },
    },
    {
      name: "Dom",
      id: 2,
      currentProject: 3,
      profile: {
        level: 3.1,
        role: "Developer",
        skills: ["java", "react"],
      },
      client: {
        startDate: "03/05/2023",
        endDate: "03/08/2023",
        status: ClientStatusType.CONFIRMED,
        name: WorkSourceNames.SKY,
        id: 3,
        role: "Developer",
        skills: ["java"],
      },
    },
    {
      name: "KZ",
      id: 3,
      currentProject: 2,
      profile: {
        level: 2.2,
        role: "Developer",
        skills: ["java", "react"],
      },
      client: {
        startDate: "03/05/2023",
        endDate: "03/05/2023",
        status: ClientStatusType.ROLLING_OFF,
        name: WorkSourceNames.TCO,
        id: 2,
        role: "Developer",
        skills: ["react"],
      },
    },
    {
      name: "Iain",
      id: 4,
      currentProject: 1,
      profile: {
        level: 5.2,
        role: "Developer",
        skills: ["java", "react"],
      },
      client: {
        startDate: null,
        startDate: null,
        status: null,
        name: null,
        id: null,
        role: null,
        skills: null,
      },
    },
  ]);

  const [currentAndiDetails, setCurrentAndiDetails] = useState();

  const [drawerState, setDrawerState] = useState({
    right: false,
  });

  const toggleDrawer = (open, currentAndiDetails) => {
    handleCurrentAndiDetails(currentAndiDetails);
    setDrawerState({ ...drawerState, right: open });
  };

  const listOfWorkSource = [
    { workSourceName: WorkSourceNames.LAB, workSourceId: 1 },
    { workSourceName: WorkSourceNames.TCO, workSourceId: 2 },
    { workSourceName: WorkSourceNames.SKY, workSourceId: 3 },
    { workSourceName: WorkSourceNames.MM, workSourceId: 4 },
  ];

  const handleCurrentAndiDetails = (andi) => {
    setCurrentAndiDetails(andi);
  };

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
