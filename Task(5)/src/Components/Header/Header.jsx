import { Sticker } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    const linkClass = (path) =>
        `px-4 py-2 rounded-lg font-medium transition ${location.pathname === path
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
        }`;

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
                <h1 className="text-2xl font-bold flex items-center gap-2 text-blue-600">
                    <Sticker className="w-6 h-6" />
                    Job Tracker
                </h1>
                <nav className="space-x-2 md:space-x-4">
                    <Link to="/" className={linkClass("/")}>
                        Dashboard
                    </Link>
                    <Link to="/add" className={linkClass("/add")}>
                        Add Job
                    </Link>
                </nav>
            </div>
        </header>
    );
}
