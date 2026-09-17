import { Link } from "react-router-dom";

const BlogCard = ({ blog, onDelete }) => {

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200">

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                <div className="flex-1 min-w-0">

                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 mb-3">
                        {blog.category}
                    </span>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {blog.title}
                    </h2>

                    <p className="text-sm text-gray-500 leading-6">
                        {blog.description}
                    </p>

                    <div className="mt-4">
                        <span className="text-sm text-gray-600">
                            By{" "}
                            <span className="font-semibold text-gray-900">
                                {blog.author}
                            </span>
                        </span>
                    </div>

                </div>


                <div className="text-xs text-gray-500 whitespace-nowrap">
                    {blog.date}
                </div>

            </div>

            <div className="flex justify-end items-center gap-2 mt-4 pt-4 border-t border-gray-100">

                <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition"
                >
                    Read More
                </Link>


                <Link
                    to={`/edit-blog/${blog.id}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 transition"
                >
                    Edit
                </Link>


                <button
                    onClick={() => onDelete(blog.id)}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 focus:ring-4 focus:ring-red-200 transition"
                >
                    Delete
                </button>

            </div>

        </div>
    );
};

export default BlogCard;