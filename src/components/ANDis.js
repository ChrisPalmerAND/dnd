import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { Box } from "./Box.js";

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

export const ANDis = ({ onChangeClientList, listOfAndis }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "ANDis" }),
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
    <>
      <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        <h1>ANDis</h1>
        {listOfAndis &&
          listOfAndis.map((name) => {
            if (name.currentProject === "ANDis") {
              return (
                <Box name={name.name} onChangeClientList={onChangeClientList} />
              );
            }
          })}
      </div>
    </>
  );
};
