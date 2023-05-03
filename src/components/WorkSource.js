import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { Box } from "./Box.js";
import { ClientStatusType } from "./ClientStatusType.js";

const style = {
  height: "100vh",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
  display: "block",
};

const transformTime = (date) => {
  let splitDate = date.split("/");
  splitDate.reverse();

  const formattedDate = splitDate.join("-");

  var d = new Date(Date.parse(formattedDate));
  console.log(
    "day",
    d.getDate() + "month" + (d.getMonth() + 1) + "year" + d.getFullYear()
  );
  return Date.parse(formattedDate);
};

const dateWithinLabThreshold = (endDate) => {
  const endDateTimeStamp = transformTime(endDate);
  const dateToday = new Date();
  let withinlabThresholdDate = new Date();
  withinlabThresholdDate.setDate(dateToday.getDate() + 14);
  const withinLabThresholdDateTimeStamp = Date.parse(withinlabThresholdDate);
  console.log(withinLabThresholdDateTimeStamp > endDateTimeStamp);
  return withinLabThresholdDateTimeStamp > endDateTimeStamp;
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
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div
      ref={drop}
      style={{ ...style, backgroundColor }}
      data-testid={workSource.workSourceName}
    >
      <div>
        <p>{workSource.workSourceName}</p>
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
