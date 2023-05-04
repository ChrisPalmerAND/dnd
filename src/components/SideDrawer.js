import { ClientStatusType } from "./ClientStatusType";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Backdrop, backdropClasses } from "@mui/material";
import { listOfWorkSource } from "../data/worksource";
import { WorkSourceNames } from "./workSourceNames";

export const SideDrawer = ({
  currentAndiDetails,
  drawerState,
  toggleDrawer,
}) => {
  const anchor = "right";

  const currentProjectDetails =
    currentAndiDetails &&
    listOfWorkSource.find(
      (workSource) =>
        workSource.workSourceId === currentAndiDetails.currentProject
    );

  const individualStartDate =
    currentAndiDetails && currentAndiDetails.client.startDate;

  const individualEndDate =
    currentAndiDetails && currentAndiDetails.client.endDate;

  const startDate = individualStartDate
    ? currentAndiDetails.client.startDate
    : currentAndiDetails && currentProjectDetails.workSourceStartDate;

  const endDate = individualEndDate
    ? currentAndiDetails.client.endDate
    : currentAndiDetails && currentProjectDetails.workSourceEndDate;

  return (
    <Drawer
      sx={{ opacity: 0.2 }}
      hideBackdrop={false}
      anchor={anchor}
      open={drawerState[anchor]}
      onClose={() => toggleDrawer(false)}
    >
      {currentAndiDetails && (
        <div style={{ minWidth: "300px" }}>
          <h2>{currentAndiDetails.name}</h2>
          <p>Level: {currentAndiDetails.profile.level}</p>
          <p>Role: {currentAndiDetails.profile.role}</p>
          <p>Skills: </p>
          <ul>
            {currentAndiDetails.profile.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
          <hr />
          {currentAndiDetails.client &&
            currentAndiDetails.client.name != WorkSourceNames.LAB && (
              <>
                <h2>{currentAndiDetails.client.name}</h2>
                <p>Status: {currentAndiDetails.client.status}</p>
                <p>Start Date: {startDate}</p>
                <p>End Date: {endDate}</p>
                <p>Role: {currentAndiDetails.client.role}</p>
                <p>Skills: </p>
                <ul>
                  {currentAndiDetails.client.skills &&
                    currentAndiDetails.client.skills.map((skill) => (
                      <li>{skill}</li>
                    ))}
                </ul>
              </>
            )}
        </div>
      )}
    </Drawer>
  );
};
