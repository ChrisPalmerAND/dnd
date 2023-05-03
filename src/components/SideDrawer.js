import { ClientStatusType } from "./ClientStatusType";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Backdrop, backdropClasses } from "@mui/material";

export const SideDrawer = ({
  currentAndiDetails,
  drawerState,
  toggleDrawer,
}) => {
  const anchor = "right";

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
            {currentAndiDetails &&
              currentAndiDetails.profile.skills.map((skill) => (
                <li>{skill}</li>
              ))}
          </ul>
          <hr />
          {currentAndiDetails.client.skills &&
            currentAndiDetails.client.ClientStatusType !==
              ClientStatusType.ROLLING_OFF && (
              <>
                <h2>{currentAndiDetails.client.name}</h2>
                <p>Status: {currentAndiDetails.client.status}</p>
                <p>Start Date: {currentAndiDetails.client.endDate}</p>
                <p>End Date: {currentAndiDetails.client.endDate}</p>
                <p>Role: {currentAndiDetails.client.role}</p>
                <p>Skills: </p>
                <ul>
                  {currentAndiDetails &&
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
