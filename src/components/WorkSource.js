import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { Box } from "./Box.js";

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
export const WorkSource = ({ andiList, workSource, onChangeClientList }) => {
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
              andi.client && andi.client.status === "tipped";

            const isRollingOff =
              andi.client && andi.client.status === "rolling off";

            if (andi.currentProject === workSource.workSourceId) {
              return (
                <Box
                  andi={andi}
                  onChangeClientList={onChangeClientList}
                  worksource={workSource}
                  isTipped={isTippedForClient}
                  isRollingOff={isRollingOff}
                />
              );
            }
          })}
      </div>
      <div>
        {andiList &&
          andiList.map((andi) => {
            const isTippedForClient =
              andi.client && andi.client.status === "tipped";

            const isRollingOff =
              andi.client && andi.client.status === "rolling off";

            const isShadowBox =
              isTippedForClient && workSource.workSourceId === andi.client?.id
                ? true
                : isRollingOff && workSource.workSourceId === 1
                ? true
                : false;

            return isShadowBox ? (
              <Box
                andi={andi}
                onChangeClientList={onChangeClientList}
                worksource={workSource}
                isShadowBox={isShadowBox}
              />
            ) : (
              ""
            );
          })}
      </div>
    </div>
  );
};
