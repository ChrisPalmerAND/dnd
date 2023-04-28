import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  color: "black",
};
export const Box = function Box({ name, onChangeClientList }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item) {
        console.log(`You dropped ${item.name} into ${dropResult.name}!`);
        onChangeClientList(item.name, dropResult.name);
        // should change this to pass in the item name and the drop result name
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {name}
    </div>
  );
};
