import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { snacks } from "../../data/Data";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [toggle, setToggle] = useState(false);

  const arr = [
    {
      label: "ID",
      value: "id",
    },
    {
      label: "Product Name",
      value: "product_name",
    },
    {
      label: "Product Weight",
      value: "product_weight",
    },
    {
      label: "Price",
      value: "price",
    },
    {
      label: "Calories",
      value: "calories",
    },
    {
      label: "Ingredients",
      value: "ingredients",
    },
  ];

  const sortHandler = (type) => {
    if (sortBy === "product_weight") {
      return [...snacks].sort((a, b) =>
        toggle
          ? a?.product_weight - b?.product_weight
          : b?.product_weight - a?.product_weight
      );
    }
    if (sortBy === type) {
      return [...snacks].sort((a, b) =>
        toggle
          ? a?.[type]?.toString()?.localeCompare(b?.[type]?.toString())
          : b?.[type]?.toString()?.localeCompare(a?.[type]?.toString())
      );
    }

    return snacks;
  };
  const sortedData = sortHandler(sortBy);
  const searchedItems = sortedData?.filter(({ product_name }) =>
    product_name?.toLowerCase()?.includes(searchItem?.toLowerCase())
  );
  return (
    <div className={styles.mainContainer}>
      <input
        type="search"
        placeholder="Enter item name"
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <table>
        <tr>
          {arr.map((item) => (
            <th
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortBy(item.value);
                setToggle(!toggle);
              }}
            >
              {item.label}
            </th>
          ))}
        </tr>
        {searchedItems?.map((e) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.product_name}</td>
            <td>{e.product_weight}</td>
            <td>{e.price}</td>
            <td>{e.calories}</td>
            <td>{e.ingredients}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
