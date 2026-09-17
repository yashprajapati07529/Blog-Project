
import { useState } from "react";
import { NavLink } from "react-router-dom";
import blogLogo from "../assets/blog-logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navbar */}
                <div className="h-16 flex items-center justify-between">

                    {/* Logo */}
                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={blogLogo}
                            alt="Blog Logo"
                            className="w-9 h-9 rounded-full object-cover"
                        />

                        <span className="text-xl font-bold text-gray-800">
                            My Blog
                        </span>
                    </NavLink>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Blogs
                        </NavLink>

                        <NavLink
                            to="/add-blog"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Add Blog
                        </NavLink>

                    </div>


                    {/* Mobile Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 text-gray-600 border border-gray-200 rounded-lg"
                    >
                        {menuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                </div>


                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-3">

                        <div className="flex flex-col gap-1">

                            <NavLink
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-semibold"
                                        : "px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/blogs"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-semibold"
                                        : "px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                                }
                            >
                                Blogs
                            </NavLink>

                            <NavLink
                                to="/add-blog"
                                onClick={() => setMenuOpen(false)}
                                className="mt-1 px-3 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700"
                            >
                                +Add Blog
                            </NavLink>

                        </div>

                    </div>
                )}

            </div>

        </nav>
    );
};

export default Navbar;

