import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogsData from "../data/blogs";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    useEffect(() => {

        const storedBlogs =
            localStorage.getItem("blogs");

        if (storedBlogs) {

            setBlogs(JSON.parse(storedBlogs));

        } else {

            localStorage.setItem(
                "blogs",
                JSON.stringify(blogsData)
            );

            setBlogs(blogsData);
        }

    }, []);

    const handleDelete = (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this blog?"
            );

        if (!confirmDelete) {
            return;
        }

        const updatedBlogs =
            blogs.filter(
                (blog) => blog.id !== id
            );

        setBlogs(updatedBlogs);

        localStorage.setItem(
            "blogs",
            JSON.stringify(updatedBlogs)
        );
    };

    const categories = [
        "All",
        ...new Set(
            blogs.map((blog) => blog.category)
        )
    ];

    const filteredBlogs = blogs.filter((blog) => {

        const matchesSearch =
            blog.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            blog.category === category;

        return matchesSearch && matchesCategory;

    });

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

          
            <div className="max-w-6xl mx-auto mb-6">

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Documentation Blogs
                </h1>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                    Explore our latest documentation and tutorials.
                </p>

            </div>


       
            <div className="max-w-6xl mx-auto mb-6">

                <div className="flex flex-col sm:flex-row gap-3">

                    {/* Search */}
                    <div className="relative w-full sm:max-w-md">

                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                    </div>


                   
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full sm:w-48 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >

                        {categories.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}

                    </select>

                </div>

            </div>


        
            <div className="max-w-6xl mx-auto">

                {filteredBlogs.length === 0 ? (

              
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">

                        <h2 className="text-xl font-semibold text-gray-900">
                            No blogs found
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Try another search or category.
                        </p>

                    </div>

                ) : (

                  
                    <div className="space-y-4">

                        {filteredBlogs.map((blog) => (

                            <BlogCard
                                key={blog.id}
                                blog={blog}
                                onDelete={handleDelete}
                            />

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
};

export default Blogs;