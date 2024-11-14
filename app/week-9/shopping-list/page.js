"use client"

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";


export default function Page() {

    const { user } = useUserAuth();

    const [itemList, setItemList] = useState(
        itemsData.map((item) => ({ ...item }))
    );
    const [selectedItemName, setSelectedItemName] = useState();

    const handleAddItem = (item) => {
        setItemList([...itemList, item]);
    }

    const handleItemSelect = (itemName) => {
        let revisedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        revisedItemName = revisedItemName.split(',');
        setSelectedItemName(revisedItemName[0].trim());
    }

    return (
        <main className="bg-green-200 py-2 grid grid-cols-4">
            {user ? (
                <>
                    <div className="col-span-1">
                        <h1 className="font-bold text-3xl ml-2 mt-2 text-green-700">Shopping Lists</h1>
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList
                            items={itemList}
                            onItemSelect={handleItemSelect}
                        />
                    </div>
                    <div className="col-span-1">
                        <h1 className="font-semibold text-2xl ml-10 mt-20 text-green-700">Meal Ideas</h1>

                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </>
            ) : (
                <div>
                    <p className="text-green-700">Your need to be signed in to view this page.</p>
                    <Link href="/week-9/" className="text-green-700">Click here to return to the sign in page</Link>
                </div>
            )}

        </main>
    );
}