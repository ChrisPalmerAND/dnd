import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/firstAttempt/DragDrop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DndProvider backend={HTML5Backend}>
            <div className="App">
              <DragDrop />
            </div>
          </DndProvider>
        }
      />
    </Routes>
  );
}

export default App;
