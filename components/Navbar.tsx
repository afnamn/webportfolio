// components/Navbar.tsx
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-teal-500 p-4">
            <ul className="flex space-x-6">
                <li>
                    <Link href="/about" className="text-white hover:scale-105 transition duration-300">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/experience" className="text-white hover:scale-105 transition duration-300">
                        Experience
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="text-white hover:scale-105 transition duration-300">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
