import React, { useState } from "react";
import Picture from "./Picture";
import Div from "./Div";
import { useDrop } from "react-dnd";
import "../App.css";
import ANDi from "./ANDi";

let NameList = [
  {
    id: 1,
    name: "Chris",
  },
  {
    id: 2,
    name: "KZ",
  },
  {
    id: 3,
    name: "Dom",
    role: "",
  },
];

console.log(NameList[0]);
function DragDrop() {
  const [board, setBoard] = useState([]);
  const [openAndiDetail, setOpenANDiDetail] = useState(false);
  const [currentDisplayAndi, setCurrentDisplayAndi] = useState();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      addImageToBoard(item.id, { name: "dustbin" });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const addImageToBoard = (id) => {
    console.log(NameList.id);
    const nameList = NameList.filter((name) => id === name.id);
    setBoard((board) => [...board, nameList[0]]);
  };

  return (
    <>
      <div class="board-wrapper">
        <div className="Board" ref={drop}>
          <h1>Client</h1>
          {board.map((name) => {
            return <Div name={name.name} id={name.id} />;
          })}
        </div>
        <div className="Board" ref={drop}>
          <h1>ANDis</h1>
          {NameList.map((name) => {
            return <Div name={name.name} id={name.id} boardName="ANDi" />;
          })}
        </div>
        <div className="Board" ref={drop}>
          <h1>Lab</h1>

          {board.map((name) => {
            return (
              <>
                <Div
                  name={name.name}
                  id={name.id}
                  boardName="lab"
                  setOpenANDiDetail={setOpenANDiDetail}
                  setCurrentDisplayAndi={setCurrentDisplayAndi}
                />
              </>
            );
          })}
        </div>
        {openAndiDetail && <ANDi id={currentDisplayAndi} />}
      </div>
    </>
  );
}

export default DragDrop;
