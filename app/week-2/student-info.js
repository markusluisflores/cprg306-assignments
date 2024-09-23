import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p>Markus Luis Flores</p>
            <Link href="https://github.com/markusluisflores" className="underline text-cyan-600 hover:text-cyan-300">Github</Link>
        </div>
    );
}