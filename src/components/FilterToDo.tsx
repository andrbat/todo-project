import React from "react";

interface FilterToDoProps {
  filter: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function FilerToDo(props: FilterToDoProps) {
  const { filter } = props;
  return (
    <>
      <label>
        <input
          type="radio"
          name="filter"
          value="1"
          checked={filter === "1"}
          onChange={props.onChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="2"
          checked={filter === "2"}
          onChange={props.onChange}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="3"
          checked={filter === "3"}
          onChange={props.onChange}
        />
        Complited
      </label>
    </>
  );
}

export default FilerToDo;
