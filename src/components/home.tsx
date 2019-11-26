import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../actions";

export const Home = () => {
  const [description, setDescription] = useState("");

  const suca = (event: any) => {
    setDescription(event.target.value);
  };

  const dispatch = useDispatch();

  const onClickDispatch = () => {
    dispatch(addToDo({ description }));
    setDescription("");
  };

  return (
    <div>
      <h1> To do list </h1>
      <input type="text" onChange={suca} value={description} />
      <button onClick={onClickDispatch}>Aggiungi</button>
    </div>
  );
};
