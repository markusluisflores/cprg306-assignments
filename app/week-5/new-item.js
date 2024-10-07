"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("")
    const [category, setCategory] = useState("produce")

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleNameChange = (event) => setName(event.target.value)
    const handleCategoryChange = (event) => setCategory(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            itemName: name,
            itemQuantity: quantity,
            itemCategory: category,
        }

        alert(`Added item: ${item.itemName}, quantity: ${item.itemQuantity}, category: ${item.itemCategory}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    let activeButton = "self-center py-1 px-3 py-1 border-2 rounded bg-green-800 font-semibold hover:bg-green-700 cursor-pointer active:bg-green-500"

    let disabledButton = "self-center py-1 px-3 py-1 border-2 rounded bg-red-500 font-semibold hover:cursor-default"

    return (
        <form onSubmit={handleSubmit} className="bg-green-200 grid grid-cols-2 gap-4 max-w-sm flex-1 mt-5 rounded">
            <div className="mt-5 col-span-2 flex justify-center">
                <input
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                    className="
                        w-11/12 
                        h-10 
                        mx-2 
                        p-2 
                        border-2 
                        border-cyan-600 
                        rounded-lg 
                        text-black
                    "
                />
            </div>
            <div className="flex justify-center bg-white ml-5 rounded">
                <div
                    onClick={decrement}
                    className={quantity <= 1 ? disabledButton : activeButton}
                >
                    -
                </div>
                <div
                    className="
                            px-6 
                            self-center 
                            text-green-900 
                            text-2xl 
                            font-semibold
                        "
                >
                    {quantity}
                </div>
                <div
                    onClick={increment}
                    className={quantity >= 20 ? disabledButton : activeButton}
                >
                    +
                </div>
            </div>
            <div className="flex justify-center">
                <div className="border-cyan-600 border-2 rounded-md">
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="text-black h-10 w-36 rounded self-cente"
                    >
                        <option disabled value="">Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="col-span-2 flex justify-center">
                <button
                    className="
                        w-11/12 border-2 
                        bg-green-700 
                        border-cyan-500 
                        text-white rounded-lg 
                        mb-2 
                        font-semibold 
                        hover:bg-green-600 
                        active:bg-green-400
                    "
                >Submit</button>
            </div>
        </form>
    );
}