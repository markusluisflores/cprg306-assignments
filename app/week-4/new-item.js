"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

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

    let activeButton = "self-center py-2 px-4 border-2 rounded bg-green-800 font-semibold hover:bg-green-700 active:bg-green-500"

    let disabledButton = "self-center py-2 px-4 border-2 rounded bg-red-500 font-semibold hover:cursor-default"

    return (
        <div className="bg-green-100 w-80 h-40 flex justify-center align-middle">
            <button
                onClick={decrement}
                className={quantity <= 1 ? disabledButton : activeButton}
            >
                -
            </button>
            <div
                className="
                    px-8 
                    self-center 
                    text-green-900 
                    text-3xl 
                    font-bold
                "
            >
                {quantity}
            </div>
            <button
                onClick={increment}
                className={quantity >= 20 ? disabledButton : activeButton}
            >
                +
            </button>
        </div >
    );
}