import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import BlogForm from "../components/BlogForm";

const EditBlog = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);

    useEffect(() => {

        const storedBlogs =
            localStorage.getItem("blogs");

        if (!storedBlogs) {
            return;
        }

        const blogs =
            JSON.parse(storedBlogs);

        const selectedBlog =
            blogs.find(
                (item) => item.id === Number(id)
            );

        setBlog(selectedBlog);

    }, [id]);

    const handleUpdate = (updatedData) => {

        const storedBlogs =
            localStorage.getItem("blogs");

        const blogs =
            storedBlogs
                ? JSON.parse(storedBlogs)
                : [];

        const updatedBlogs =
            blogs.map((item) => {

                if (item.id === Number(id)) {

                    return {
                        ...item,
                        ...updatedData
                    };

                }

                return item;

            });

        localStorage.setItem(
            "blogs",
            JSON.stringify(updatedBlogs)
        );

        alert("Blog updated successfully!");

        navigate("/blogs");
    };

    if (!blog) {

        return (
            <div className="empty-message">

                <h2>
                    Blog Not Found
                </h2>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

            <div className="max-w-3xl mx-auto ">

                <div className=" bg-gray-50 px-4 py-10">

                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Edit Blog
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Update documentation article.
                    </p>

                </div>

                <BlogForm
                    initialData={blog}
                    onSubmit={handleUpdate}
                    submitText="UPDATE BLOG"
                />

            </div>

        </div>

    );
};

export default EditBlog;