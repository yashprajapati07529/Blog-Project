
import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const AddBlog = () => {
    const navigate = useNavigate();

    const handleAdd = (formData) => {

        // Get old blogs from localStorage
        const storedBlogs = localStorage.getItem("blogs");

        let blogs = [];

        if (storedBlogs) {
            try {
                blogs = JSON.parse(storedBlogs);
            } catch (error) {
                console.log("Invalid localStorage data:", error);
                blogs = [];
            }
        }

        // Create new blog object
        const newBlog = {
            id: Date.now(),
            ...formData,
            date: new Date().toISOString().split("T")[0],
        };

        // Add new blog to old blogs
        const updatedBlogs = [...blogs, newBlog];

        // Save data as JSON
        localStorage.setItem(
            "blogs",
            JSON.stringify(updatedBlogs)
        );

        // Success message
        alert("Blog added successfully!");

        // Navigate to blogs page
        navigate("/blogs");
    };

    return (
        <main className="min-h-screen bg-gray-50">

            {/* ================= PAGE CONTAINER ================= */}
            <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

                {/* ================= HEADER ================= */}
                <div className="mb-8">

                    {/* Badge */}
                    <span className="inline-block mb-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
                        BLOG MANAGEMENT
                    </span>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        Add New Blog
                    </h1>

                    {/* Description */}
                    <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-500">
                        Create a new blog article and share your ideas
                        with your readers.
                    </p>

                </div>


                {/* ================= FORM CARD ================= */}
                <section className="bg-white rounded-2xl border border-gray-200 shadow-sm">

                    {/* Card Header */}
                    <div className="px-5 py-5 sm:px-8 border-b border-gray-200">

                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                            Blog Information
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Enter the details of your blog below.
                        </p>

                    </div>


                    {/* Blog Form */}
                    <div className="px-5 py-6 sm:px-8 sm:py-8">

                        <BlogForm
                            onSubmit={handleAdd}
                            submitText="ADD BLOG"
                        />

                    </div>

                </section>


                {/* ================= BOTTOM INFO ================= */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <p className="text-xs sm:text-sm text-gray-400">
                        Your blog will be saved in your browser storage.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/blogs")}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                        ← View All Blogs
                    </button>

                </div>

            </div>

        </main>
    );
};

export default AddBlog;

