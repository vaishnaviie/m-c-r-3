import React from "react";
import { useData } from "../context/Context";

const SearchInput = () => {
  const { state, dispatch, data, setData, searchedItem } = useData();
  return (
    <div>
      <input
        type="search"
        placeholder="Enter item name"
        value={state?.searchItem}
        onChange={(e) => {
          dispatch({ type: "SEARCH_ITEM", payload: e.target.value });
          setData(searchedItem);
        }}
      />
    </div>
  );
};

export default SearchInput;
