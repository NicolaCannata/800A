import { ADD_TO_DO, REMOVE_TO_DO } from "../constants/actions";
import { ToDoList } from "../Store";

export const reducer = (Store: ToDoList = {}, action: any) => {
  let prevLst = Store.list || [];

  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...Store,
        list: [...prevLst, action.payload]
      };
    case REMOVE_TO_DO:
      return {
        ...Store,
        list: prevLst.filter(
          //@ts-ignore
          (rmToDo: any) => prevLst.description !== action.rmToDo
        )
      };
  }
  return { ...Store };
};
