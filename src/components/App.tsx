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

  function handleChange(
    idTd: number,
    fieldCH: "isComplited" | "value",
    newval: string
  ) {
    setState((oldState) => {
      const newState = [...oldState];
      const idx = newState.findIndex((el) => el.id === idTd);

      switch (fieldCH) {
        case "isComplited":
          newState[idx][fieldCH] = newval === "true";
          break;
        case "value":
          newState[idx][fieldCH] = newval;
          break;
      }

      return newState;
    });
  }

  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      if (newToDo) {
        setState((oldState) => [
          ...oldState,
          { id: id, value: newToDo, isComplited: false },
        ]);
        e.target.value = "";
        setId(id + 1);
      }
    }
  }

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <header>
        <input
          id="all"
          className="App-checkbox"
          type="checkbox"
          disabled={todolists.length === 0}
          checked={itemLeft === 0 && todolists.length !== 0}
          onChange={handleSetCompl}
        />
        <label htmlFor="all"></label>
        <input
          className="App-newinput"
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      </header>
      <ToDoLists
        todolists={todolists}
        filter={filter}
        onChange={handleChange}
        onDel={handleDelToDo}
      />
      <section>
        <span className="App-span1">{itemLeft}</span>
        <span className="App-span2">items left</span>
        <FilterToDo filter={filter} onChange={handleChangeFilter} />
      </section>
    </div>
  );
}

export default App;
