import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { snacks } from "../../data/Data";
import SearchInput from "../../components/SearchInput";
import { useData } from "../../context/Context";

const Home = () => {
  const { searchedItem, dispatch, data, setData } = useData();
  console.log(data);

  const sortHandler = () => {
    [...data].sort((a, b) => (a.product_name > b.product_name ? 1 : -1));
  };
  console.log(sortHandler());
  return (
    <div className={styles.mainContainer}>
      <SearchInput />
      <table>
        <tr>
          <th>ID</th>
          <th style={{ cursor: "pointer" }} onClick={() => sortHandler()}>
            Product Name
          </th>
          <th>Product Weight</th>
          <th>Price</th>
          <th>Calories</th>
          <th>Ingredients</th>
        </tr>
        {data?.map((e) => (
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
