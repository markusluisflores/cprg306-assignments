import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center mt-10">
        <h1 className="font-bold text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          <li><Link href="./week-2" className="underline text-cyan-600 hover:text-cyan-300">Week 2 Assignment</Link></li>
          <li><Link href="./week-3" className="underline text-cyan-600 hover:text-cyan-300">Week 3 Assignment</Link></li>
        </ul>
      </div>
    </main>
  );
}
