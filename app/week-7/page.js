"use client"

import { useState } from "react";
import NewItem from "../week-7/new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";


export default function Page() {

    const [itemList, setItemList] = useState(
        itemsData.map((item) => ({ ...item }))
    );

    const handleAddItem = (item) => {
        setItemList([...itemList, item]);
    }

    return (
        <main className="bg-green-200 py-2">
            <h1 className="font-bold text-3xl ml-2 mt-2 text-green-700">Shopping Lists</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={itemList} />
        </main>
    );
}