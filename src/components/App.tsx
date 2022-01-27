import React from "react";
import { ToDo } from "../types/types";
import "./App.css";
import ToDoLists from "./ToDoLists";

function App() {
  const [todolists, setState] = React.useState<ToDo[]>([]);
  const [newToDo, setNewToDo] = React.useState("");
  const [allCompl, setAllCompl] = React.useState(false);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (newToDo) {
        setState((oldState) => [
          ...oldState,
          { value: newToDo, isComplited: false, isEdit: false },
        ]);
      }
    }
  }

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <header>
        <input
          name="isGoing"
          type="checkbox"
          checked={allCompl}
          onChange={(e) => setAllCompl(Boolean(e.target.checked))}
        />
        <input
          type="text"
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      </header>
      <ToDoLists todolists={todolists} />
    </div>
  );
}

export default App;
