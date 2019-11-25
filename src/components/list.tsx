import React from "react";
import { useSelector } from "react-redux";
import { selectorToDoList } from "../selectors";

export const List = () => {
  const list = useSelector(selectorToDoList);

  return (
    <div>
      <h2>List</h2>
      <p>
        {list.map((ToDO: any) => {
          return <div>{list}</div>;
        })}
      </p>
    </div>
  );
};
