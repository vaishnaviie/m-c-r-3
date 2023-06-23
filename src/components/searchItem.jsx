import React from "react";
import { useData } from "../context/Context";

const searchItem = () => {
  //   const { state, dispatch } = useData();
  return (
    <div>
      {/* <input
        type="search"
        placeholder="Enter book name"
        value={state?.searchBook}
        onChange={(e) => {
          navigate("./search");
          dispatch({ type: "SEARCH_BOOK", payload: e.target.value });
          //   setSearchBook(e.target.value);
        }}
      /> */}
    </div>
  );
};

export default searchItem;
