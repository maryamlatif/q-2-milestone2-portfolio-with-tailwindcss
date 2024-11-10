import Link from "next/link"

export default function Header() {
  return (
   
      <header className="bg-indigo-300  text-indigo-900 text-2xl justify-between items-center p-4 shadow-slate-700 sm:p">
         <div>
        <h1 className="text-3xl font-serif font-semibold"> My Portfolio</h1>
        </div>
        <nav>
        <ul className="flex gap-6 justify-evenly font-medium">
            <li> <Link className="hover:decoration-fuchsia-900 transition" href="/">Home</Link></li>

             <li> <Link className="hover:decoration-fuchsia-900 transition" href="/About">About</Link></li>

            <li> <Link className="hover:decoration-fuchsia-900 transition" href="/Project">Project</Link></li>

            <li> <Link className="hover:decoration-fuchsia-900 transition" href="/Education">Education</Link></li>

            <li> <Link className="hover:decoration-fuchsia-900 transition"  href="/Skill">Skill</Link></li>
        </ul>
        </nav>
      </header>
   
  )
}
