import { ADD_TO_DO, REMOVE_TO_DO } from "../constants/actions";
import { ToDoList } from "../Store";

export const reducer = (Store: ToDoList = {}, action: any) => {
  const prevLst = Store.list || [];

  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...Store,
        list: [...prevLst, action.payload]
      };
    case REMOVE_TO_DO:
      return {
        ...Store
      };
    default:
      return { ...Store };
  }
};
