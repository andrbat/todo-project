import React from "react";
import { ToDo } from "../types/types";

interface ToDoListsProps {
  todolists: ToDo[];
  filter: string;
  onChange: (
    idTd: number,
    fieldCH: "isComplited" | "value",
    newval: string
  ) => void;
  onDel: React.MouseEventHandler<HTMLButtonElement>;
}

function ToDoLists(props: ToDoListsProps) {
  const { todolists, filter } = props;

  function checkF(el: ToDo) {
    switch (filter) {
      case "1":
        return true;
      case "2":
        return el.isComplited === false;
      case "3":
        return el.isComplited === true;
    }
  }

  function handleKeyEnter(e: any) {
    if (e.key === "Enter") {
      noEdit(e);
    }
  }

  function noEdit(e: any) {
    e.target.readOnly = true;
    e.target.className = "App-todolist";
  }

  return (
    <ul>
      {todolists.filter(checkF).map((item) => {
        return (
          <>
            <li
              key={item.id}
              className={item.isComplited ? "App-li App_checked" : "App-li"}
            >
              <input
                type="checkbox"
                checked={item.isComplited}
                onChange={(e) =>
                  props.onChange(
                    Number(e.target.value),
                    "isComplited",
                    String(e.target.checked)
                  )
                }
                value={item.id}
              />
              <input
                className="App-todolist"
                type="text"
                readOnly={true}
                value={item.value}
                data-todoid={item.id}
                onDoubleClick={(e: any) => {
                  e.target.readOnly = false;
                  e.target.className = "App-todolist App-todolist_edit";
                }}
                onBlur={noEdit}
                onChange={(e) =>
                  props.onChange(
                    Number(e.target.dataset.todoid),
                    "value",
                    e.target.value
                  )
                }
                onKeyDown={handleKeyEnter}
              />
              <button
                className="App-button"
                data-todoid={item.id}
                onClick={props.onDel}
              >
                Del
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default ToDoLists;
