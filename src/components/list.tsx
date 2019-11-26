import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorToDoList } from "../selectors";
import { removeToDo } from "../actions";

export const List = () => {
  const list = useSelector(selectorToDoList);

  const dispatch = useDispatch();

  const deleteToDo = (toDelete: any) => {
    dispatch(removeToDo({ toDelete }));
  };

  return (
    <div>
      <h2>List</h2>
      <li>
        {list.map((list: any) => {
          const toDelete = list.description;
          return (
            <div>
              <li>
                {list.description}
                <button onClick={() => deleteToDo(toDelete)}>rm</button>
              </li>
            </div>
          );
        })}
      </li>
    </div>
  );
};
