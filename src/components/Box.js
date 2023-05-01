import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import StarIcon from "@mui/icons-material/Star";
import Icon from "@mui/material/Icon";
import LogoutIcon from "@mui/icons-material/Logout";

const style = {
  display: "block",
  border: "1px dashed gray",
  backgroundColor: "white",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  color: "black",
  width: "100%",
};
const shadowStyle = {
  border: "1px dashed white",
  backgroundColor: "black",

  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  color: "white",
  width: "100%",
};
export const Box = function Box({
  andi,
  onChangeClientList,
  worksource,
  isTipped,
  isRollingOff,
  isShadowBox,
}) {
  const name = andi.name;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item) {
        onChangeClientList(item.name, dropResult.name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <>
      <div
        ref={isShadowBox ? null : drag}
        style={
          isShadowBox ? { ...shadowStyle, opacity } : { ...style, opacity }
        }
        data-testid={`box`}
      >
        {name}

        {isTipped && worksource === "Lab" && <StarIcon />}

        {isRollingOff && worksource === andi.client.name && <LogoutIcon />}
      </div>
    </>
  );
};
