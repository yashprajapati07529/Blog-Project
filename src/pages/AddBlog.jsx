import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const AddBlog = () => {

    const navigate = useNavigate();

    const handleAdd = (formData) => {

        const storedBlogs =
            localStorage.getItem("blogs");

        const blogs =
            storedBlogs
                ? JSON.parse(storedBlogs)
                : [];

        const newBlog = {
            id: Date.now(),
            ...formData,
            date: new Date()
                .toISOString()
                .split("T")[0]
        };

        const updatedBlogs = [
            ...blogs,
            newBlog
        ];

        localStorage.setItem(
            "blogs",
            JSON.stringify(updatedBlogs)
        );

        alert("Blog added successfully!");

        navigate("/blogs");
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

            <div className="max-w-3xl mx-auto">

           
                <div className=" bg-gray-50 px-4 py-10">

                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 mb-3">
                        BLOG MANAGEMENT
                    </span>

                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Add New Blog
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Create a new documentation article.
                    </p>

                </div>


         
                <BlogForm
                    onSubmit={handleAdd}
                    submitText="ADD BLOG"
                />

            </div>

        </div>
    );
};

export default AddBlog;