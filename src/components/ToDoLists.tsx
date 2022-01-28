import React from "react";
import { ToDo } from "../types/types";

interface ToDoListsProps {
  todolists: ToDo[];
  filter: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
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
    return false;
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
                onChange={props.onChange}
                value={item.id}
              />
              {item.value}
              <button
                className="App-button"
                value={item.id}
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
