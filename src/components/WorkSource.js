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
export const WorkSource = ({
  andiList,
  nameOfWorkSource,
  onChangeClientList,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: nameOfWorkSource }),
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
      data-testid={nameOfWorkSource}
    >
      <div>
        <p>{nameOfWorkSource}</p>
        {andiList &&
          andiList.map((andi) => {
            if (andi.client) {
              console.log(andi);
              console.log(andi.client);
              console.log(andi.client.status === "tipped");
              console.log(nameOfWorkSource === andi.client.name);
            }
            const isTippedForClient =
              andi.client &&
              andi.client.status === "tipped" &&
              nameOfWorkSource === andi.client.name;

            const isRollingOff =
              andi.client &&
              andi.client.status === "rolling off" &&
              nameOfWorkSource === "Lab";

            if (andi.currentProject === nameOfWorkSource) {
              return (
                <Box
                  andi={andi}
                  onChangeClientList={onChangeClientList}
                  worksource={nameOfWorkSource}
                  isTipped={isTippedForClient}
                  isRollingOff={isRollingOff}
                />
              );
            }
          })}
      </div>
      {/* <div>
        {andiList &&
          andiList.map((andi) => {
            if (andi.client) {
              console.log("line 64", andi.client.name);
            }
            const isTippedForClient =
              andi.client &&
              andi.client.status === "tipped" &&
              nameOfWorkSource === andi.client.name;

            const isRollingOff =
              andi.client &&
              andi.client.status === "rolling off" &&
              nameOfWorkSource === "Lab";

            console.log(andi.name, isTippedForClient, isRollingOff);

            {
              return (
                <Box
                  andi={andi}
                  onChangeClientList={onChangeClientList}
                  worksource={nameOfWorkSource}
                  isTipped={isTippedForClient}
                  isRollingOff={isRollingOff}
                />
              );
            }
          })}
      </div> */}
    </div>
  );
};
