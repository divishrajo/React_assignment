import { useReducer, useState } from "react";
import { createContext } from "react";
import reducer from "./Reducer";
import data from "../user.json"
export const UserContext = createContext();


 function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(data.users);
  const [state, dispatch] = useReducer(reducer, {
    userItem: data,
    userData
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;