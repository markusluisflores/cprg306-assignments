import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        const allItems = collection(db, "users", userId, "items");
        const allItemsQuery = query(allItems);
        const querySnapShot = await getDocs(allItemsQuery);
        let itemList = [];
        querySnapShot.forEach((doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            itemList.push(thisItem);
        });
        return itemList;
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, item) {
    try {
        const newItemReference = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemReference, item);
        return newItemPromise.id;
    } catch (error) {
        console.log(error);
    }
}