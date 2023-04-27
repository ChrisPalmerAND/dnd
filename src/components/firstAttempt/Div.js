import React from "react";
import { useDrag } from "react-dnd";
import ANDi from "./ANDi";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Div({
  id,
  name,
  boardName,
  setOpenANDiDetail,
  setCurrentDisplayAndi,
}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const openAndiPanel = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenANDiDetail(true);
    setCurrentDisplayAndi(id);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id, name: name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log(item.name, "drop name", dropResult.name);
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3>Temp Drawer</h3>
    </Box>
  );

  return (
    <div ref={drag}>
      <p>
        {name}
        {"  "}
        {boardName != "ANDi" && (
          <span>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  See Details
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <ANDi id={id} />
                </Drawer>
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  );
}

export default Div;
