import { createSelector } from "reselect";
import { ToDoList } from "../Store";

const getState = (Store: any) => Store;

export const selectorToDoList = createSelector(
  getState,
  (Store): any => Store.list || []
);
