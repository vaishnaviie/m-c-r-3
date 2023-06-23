import React, { createContext, useContext, useReducer, useState } from "react";
import { ReducerFunc } from "../reducer/Reducer";
import { initialState } from "../reducer/Reducer";
import { snacks } from "../data/Data";

const ContextProvider = createContext();
export const useData = () => useContext(ContextProvider);

const Context = ({ children }) => {
  const [data, setData] = useState(snacks);
  const [state, dispatch] = useReducer(ReducerFunc, initialState);

  const searchedItems =
    state?.searchItem?.length > 0
      ? data?.filter(({ product_name }) =>
          product_name
            ?.toLowerCase()
            ?.includes(state?.searchItem?.toLowerCase())
        )
      : "";
  // setData(searchedItems);
  // console.log(searchedItems);
  return (
    <div>
      <ContextProvider.Provider
        value={{ state, dispatch, searchedItems, data, setData }}
      >
        {children}
      </ContextProvider.Provider>
    </div>
  );
};

export default Context;
