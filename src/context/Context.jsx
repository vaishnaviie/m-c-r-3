import React, { createContext, useContext, useReducer, useState } from "react";
import { ReducerFunc } from "../reducer/Reducer";
import { initialState } from "../reducer/Reducer";
import { snacks } from "../data/Data";

const ContextProvider = createContext();
export const useData = () => useContext(ContextProvider);

const Context = ({ children }) => {
  const [data, setData] = useState(snacks);
  const [state, dispatch] = useReducer(ReducerFunc, initialState);

  const searchedItem =
    state?.searchItem?.length > 0
      ? snacks?.filter(({ product_name }) =>
          product_name
            ?.toLowerCase()
            ?.includes(state?.searchItem?.toLowerCase())
        )
      : "";
  //   setData(searchedItem);
  console.log(searchedItem);
  return (
    <div>
      <ContextProvider.Provider
        value={{ state, dispatch, searchedItem, data, setData }}
      >
        {children}
      </ContextProvider.Provider>
    </div>
  );
};

export default Context;
