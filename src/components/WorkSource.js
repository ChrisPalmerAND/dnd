import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";

const style = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};
export const WorkSource = ({ workSourceList, nameOfWorkSource }) => {
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
      {nameOfWorkSource}
      {workSourceList ? (
        workSourceList.map((ANDi) => {
          console.log("line 44", ANDi.currentProject, nameOfWorkSource);
          if (ANDi.currentProject === nameOfWorkSource) {
            console.log("triggered if statement");
            return <p>{ANDi.name}</p>;
          }
        })
      ) : (
        <p>not updated in time</p>
      )}
    </div>
  );
};
