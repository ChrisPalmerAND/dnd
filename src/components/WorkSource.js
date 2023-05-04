import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { Box } from "./Box.js";
import { ClientStatusType } from "./ClientStatusType.js";
import { dateWithinLabThreshold } from "../utils/dateWithinLabThreshold.js";

const style = {
  minHeight: "50vh",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "black",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
  display: "block",
  "box-shadow":
    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

export const WorkSource = ({
  andiList,
  workSource,
  onChangeClientList,
  toggleDrawer,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: workSource.workSourceId }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  let backgroundColor = "white";
  if (isActive) {
    backgroundColor = "white";
  } else if (canDrop) {
    backgroundColor = "grey";
  }

  return (
    <div
      ref={drop}
      style={{ ...style, backgroundColor }}
      data-testid={workSource.workSourceName}
    >
      <div>
        <h3>
          <strong>{workSource.workSourceName}</strong>
        </h3>
        {andiList &&
          andiList.map((andi) => {
            const isTippedForClient =
              andi.client && andi.client.status === ClientStatusType.TIPPED;

            const isRollingOff =
              andi.client &&
              andi.client.status === ClientStatusType.ROLLING_OFF;

            if (andi.currentProject === workSource.workSourceId) {
              return (
                <Box
                  andi={andi}
                  onChangeClientList={onChangeClientList}
                  worksource={workSource}
                  isTipped={isTippedForClient}
                  isRollingOff={isRollingOff}
                  toggleDrawer={toggleDrawer}
                />
              );
            }
          })}
      </div>
      <div>
        {andiList &&
          andiList.map((andi) => {
            const isTippedForClient =
              andi.client && andi.client.status === ClientStatusType.TIPPED;

            const isRollingOff =
              andi.client &&
              andi.client.status === ClientStatusType.ROLLING_OFF;

            const isShadowBox =
              isTippedForClient && workSource.workSourceId === andi.client?.id
                ? true
                : isRollingOff &&
                  dateWithinLabThreshold(andi.client.endDate) &&
                  workSource.workSourceId === 1
                ? true
                : false;

            return (
              isShadowBox && (
                <Box
                  andi={andi}
                  onChangeClientList={onChangeClientList}
                  worksource={workSource}
                  isShadowBox={isShadowBox}
                  toggleDrawer={toggleDrawer}
                />
              )
            );
          })}
      </div>
    </div>
  );
};
