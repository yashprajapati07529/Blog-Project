import { useEffect, useState } from "react";

const BlogForm = ({
    initialData,
    onSubmit,
    submitText
}) => {

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        content: "",
        author: ""
    });

    useEffect(() => {

        if (initialData) {
            setFormData(initialData);
        }

    }, [initialData]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !formData.title ||
            !formData.category ||
            !formData.description ||
            !formData.content ||
            !formData.author
        ) {
            alert("Please fill all fields");
            return;
        }

        onSubmit(formData);

    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Create New Blog
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Create and publish your blog with useful information.
                    </p>
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Blog Title
                    </label>

                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter blog title"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Category
                    </label>

                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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

                <div className="mb-6">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter short description"
                        rows="4"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="content"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Blog Content
                    </label>

                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write your blog content..."
                        rows="10"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-y"
                    />
                </div>

                <div className="mb-8">
                    <label
                        htmlFor="author"
                        className="block mb-2 text-sm font-medium text-gray-900"
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
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
                >
                    {submitText}
                </button>
            </form>
        </div>
    );
};

export default BlogForm;