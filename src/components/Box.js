import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const style = {
  display: "block",
  border: "1px dashed gray",
  backgroundColor: "rgb(60, 126, 242)",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  color: "white",
  width: "100%",
};
const shadowStyle = {
  backgroundColor: "lightgrey",
  marginBottom: "1.5rem",
  float: "left",
  color: "black",
  width: "100%",
};

export const Box = function Box({
  andi,
  onChangeClientList,
  worksource,
  isTipped,
  isRollingOff,
  isShadowBox,
  toggleDrawer,
}) {
  const name = andi.name;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log(item.name, dropResult);
      if (item && dropResult) {
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
        onClick={!isShadowBox ? () => toggleDrawer(true, andi) : undefined}
      >
        {isShadowBox && <LoginIcon />}
        {name}
        {isTipped && worksource.workSourceId === 1 && <LogoutIcon />}
        {isRollingOff && worksource.workSourceId === andi.client.id && (
          <LogoutIcon />
        )}
      </div>
    </>
  );
};
