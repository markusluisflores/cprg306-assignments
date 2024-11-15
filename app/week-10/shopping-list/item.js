

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            className="
                mx-10 
                my-5 
                bg-green-600 
                p-2 
                rounded-xl 
                max-w-sm
                hover:bg-green-400
            "
            onClick={() => onSelect(name)}
        >
            <h2 className="font-semibold text-xl">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}