import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogsData from "../data/blogs";

const BlogDetails = () => {

    const { id } = useParams();

    const [blog, setBlog] = useState(null);

    useEffect(() => {

        const storedBlogs =
            localStorage.getItem("blogs");

        const blogs =
            storedBlogs
                ? JSON.parse(storedBlogs)
                : blogsData;

        const selectedBlog =
            blogs.find(
                (item) => item.id === Number(id)
            );

        setBlog(selectedBlog);

    }, [id]);

    if (!blog) {

        return (
            <div className="empty-message">

                <h2>
                    Blog Not Found
                </h2>

                <Link to="/blogs">
                    Back to Blogs
                </Link>

            </div>
        );
    }

    return (
        <article className="max-w-4xl mt-5 mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10">

            <div className="mb-5">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {blog.category}
                </span>
            </div>


            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-5">
                {blog.title}
            </h1>


            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-5 mb-6 border-b border-gray-200">

                <span className="text-sm text-gray-600">
                    By{" "}
                    <span className="font-semibold text-gray-900">
                        {blog.author}
                    </span>
                </span>

                <span className="text-sm text-gray-500">
                    {blog.date}
                </span>

            </div>


            <p className="text-base sm:text-lg font-medium leading-7 text-gray-700 mb-7">
                {blog.description}
            </p>


            <div className="text-sm sm:text-base leading-7 text-gray-600 whitespace-pre-line">
                {blog.content}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">

                <Link
                    to="/blogs"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-200"
                >
                    ← Back to Blogs
                </Link>

            </div>

        </article>
    );
};

export default BlogDetails;