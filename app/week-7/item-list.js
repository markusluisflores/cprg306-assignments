"use client"

import Item from "./item";
import { useState } from "react";


export default function ItemList({ items }) {

    const [sortBy, setSortBy] = useState("name");
    let itemList = items.map((item) => ({ ...item }));

    const sortByName = () => {
        setSortBy("name")
    }

    const sortByCategory = () => {
        setSortBy("category")
    }

    if (sortBy === "name") {
        itemList.sort((a, b) => a.name.localeCompare(b.name));
    }
    else {
        itemList.sort((a, b) => a.category.localeCompare(b.category));
    }

    let selected = "m-2 p-1 w-32 bg-yellow-300 text-white"
    let notSelected = "m-2 p-1 w-32 bg-yellow-600 text-white"

    return (
        <div>
            <div className="m-2 text-yellow-700 font-semibold text-base">
                Sort By:
                <button className={sortBy === "name" ? selected : notSelected} onClick={sortByName}>Name</button>
                <button className={sortBy === "category" ? selected : notSelected} onClick={sortByCategory}>Category</button>
            </div>
            <ul>
                {itemList.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div >
    );
}