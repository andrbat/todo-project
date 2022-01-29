import React from "react";
import { ToDo } from "../types/types";
import "./App.css";
import FilterToDo from "./FilterToDo";
import ToDoLists from "./ToDoLists";

function App() {
  const [todolists, setState] = React.useState<ToDo[]>([]);
  const [newToDo, setNewToDo] = React.useState("");
  const [filter, setFilter] = React.useState("1");
  const [id, setId] = React.useState(1);

  const itemLeft = todolists.filter((el) => el.isComplited === false).length;

  function handleChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value);
  }

  function handleDelToDo(e: any) {
    const { target } = e;
    setState((oldState) => {
      return oldState.filter((el) => {
        return el.id !== Number(target.dataset.todoid);
      });
    });
  }

  function handleSetCompl(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    setState((oldState) => {
      const newState = [...oldState];
      newState.forEach((el) => (el.isComplited = Boolean(target.checked)));
      return newState;
    });
  }

  function handleCheckComp(
    idTd: number,
    fieldCH: "isComplited" | "isComplited" | "isEdit",
    newval: string
  ) {
    console.log(idTd, fieldCH, newval === "true");
    setState((oldState) => {
      const newState = [...oldState];
      const idx = newState.findIndex((el) => el.id === idTd);
      newState[idx][fieldCH] = newval === "true";
      return newState;
    });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (newToDo) {
        setState((oldState) => [
          ...oldState,
          { id: id, value: newToDo, isComplited: false, isEdit: false },
        ]);
        setId(id + 1);
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
          disabled={todolists.length === 0}
          checked={itemLeft === 0}
          onChange={handleSetCompl}
        />
        <input
          type="text"
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      </header>
      <ToDoLists
        todolists={todolists}
        filter={filter}
        onChange={handleCheckComp}
        onDel={handleDelToDo}
      />
      <section>
        <span className="App-span1">{itemLeft}</span>
        <span>items left</span>
        <FilterToDo filter={filter} onChange={handleChangeFilter} />
      </section>
    </div>
  );
}

export default App;
