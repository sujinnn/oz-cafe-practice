import { Children, createContext } from "react";
import data from "../assets/data";

const menuContext = createContext();

export function MenuProvider({ Children }) {
  return (
    <menuContext.Provider value={{ menu: data.menu }}>
      {Children}
    </menuContext.Provider>
  );
}

export function useMenu() {
  return useContext(menuContext);
}
