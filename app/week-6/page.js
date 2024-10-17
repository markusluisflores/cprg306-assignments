import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="bg-green-200">
            <h1 className="font-bold text-3xl ml-2 mt-2 text-green-700">Shopping Lists</h1>
            <ItemList />
        </main>
    );
}