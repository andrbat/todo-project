import React from "react";

interface FilterToDoProps {
  filter: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function FilerToDo(props: FilterToDoProps) {
  const { filter } = props;
  return (
    <>
      <input
        className="App-filter"
        id="filter1"
        type="radio"
        name="filter"
        value="1"
        checked={filter === "1"}
        onChange={props.onChange}
      />
      <label htmlFor="filter1">All</label>
      <input
        className="App-filter"
        id="filter2"
        type="radio"
        name="filter"
        value="2"
        checked={filter === "2"}
        onChange={props.onChange}
      />
      <label htmlFor="filter2">Active</label>
      <input
        className="App-filter"
        id="filter3"
        type="radio"
        name="filter"
        value="3"
        checked={filter === "3"}
        onChange={props.onChange}
      />
      <label htmlFor="filter3">Complited</label>
    </>
  );
}

export default FilerToDo;
