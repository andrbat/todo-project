import React from "react";
import { ToDo } from "../types/types";

interface ToDoListsProps {
  todolists: ToDo[];
}

function ToDoLists({ todolists }: ToDoListsProps) {
  return (
    <ul>
      {todolists.map((item, i) => {
        return (
          <>
            <li key={i}>
              <input type="checkbox" checked={item.isComplited} value={i} />
              {item.value}
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default ToDoLists;
