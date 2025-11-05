"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                <Link href="/" className="navbar-brand fw-bold">MyTemplate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/" className={`nav-link px-3 ${pathname === "/" ? "active fw-bold" : ""}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className={`nav-link px-3 ${pathname === "/about" ? "active fw-bold" : ""}`}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className={`nav-link px-3 ${pathname === "/contact" ? "active fw-bold" : ""}`}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}