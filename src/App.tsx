import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./actions";
import { selectorToDoList } from "./selectors";

const App: React.FC = () => {
  const [description, setDescription] = useState("");

  const suca = (event: any) => {
    setDescription(event.target.value);
  };

  const dispatch = useDispatch();

  const onClickDispatch = () => {
    dispatch(addToDo(description));
  };

  const list = useSelector(selectorToDoList);

  return (
    <div>
      <h1> To do list </h1>
      <input type="text" onChange={suca} value={description} />
      <button onClick={onClickDispatch}>Aggiungi</button>
    </div>
  );
};

export default App;
