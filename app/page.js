import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center mt-10">
        <h1 className="font-bold text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="./week-2" className="underline text-cyan-600 hover:text-cyan-300">Week 2 Assignment</Link>
      </div>
    </main>
  );
}
