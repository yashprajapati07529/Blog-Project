
import { useEffect, useState } from "react";

const BlogForm = ({
    initialData,
    onSubmit,
    submitText = "Publish Blog"
}) => {

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        content: "",
        author: ""
    });

    // Edit Blog ke time old data form me show hoga
    useEffect(() => {

        if (initialData) {
            setFormData({
                title: initialData.title || "",
                category: initialData.category || "",
                description: initialData.description || "",
                content: initialData.content || "",
                author: initialData.author || ""
            });
        }

    }, [initialData]);


    // Input Change
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    };


    // Form Submit
    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !formData.title.trim() ||
            !formData.category ||
            !formData.description.trim() ||
            !formData.content.trim() ||
            !formData.author.trim()
        ) {
            alert("Please fill all fields");
            return;
        }

        onSubmit(formData);

    };


    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >

            {/* ================= BLOG TITLE ================= */}
            <div>

                <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-semibold text-gray-800"
                >
                    Blog Title
                </label>

                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter your blog title"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

            </div>


            {/* ================= CATEGORY + AUTHOR ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Category */}
                <div>

                    <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-semibold text-gray-800"
                    >
                        Category
                    </label>

                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >

                        <option value="">
                            Select Category
                        </option>

                        <option value="ReactJS">
                            ReactJS
                        </option>

                        <option value="JavaScript">
                            JavaScript
                        </option>

                        <option value="React Hooks">
                            React Hooks
                        </option>

                        <option value="HTML">
                            HTML
                        </option>

                        <option value="CSS">
                            CSS
                        </option>

                        <option value="Web Development">
                            Web Development
                        </option>

                    </select>

                </div>


                {/* Author */}
                <div>

                    <label
                        htmlFor="author"
                        className="block mb-2 text-sm font-semibold text-gray-800"
                    >
                        Author
                    </label>

                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Enter author name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                </div>

            </div>


            {/* ================= DESCRIPTION ================= */}
            <div>

                <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-semibold text-gray-800"
                >
                    Short Description
                </label>

                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write a short description about your blog..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                />

                <p className="mt-1 text-xs text-gray-400">
                    Keep your description short and meaningful.
                </p>

            </div>


            {/* ================= BLOG CONTENT ================= */}
            <div>

                <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-semibold text-gray-800"
                >
                    Blog Content
                </label>

                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Write your complete blog content here..."
                    rows="10"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y"
                />

                <p className="mt-1 text-xs text-gray-400">
                    Write the complete content that you want to publish.
                </p>

            </div>


            {/* ================= BUTTON ================= */}
            <div className="pt-4 border-t border-gray-200">

                <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-200"
                >
                    {submitText}
                </button>

            </div>

        </form>
    );
};

export default BlogForm;
