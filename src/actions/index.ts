import { ADD_TO_DO } from "../constants/actions";
import { ToDo } from "../Store";

export const addToDo = (description: any) => ({
  type: ADD_TO_DO,
  payload: description
});
