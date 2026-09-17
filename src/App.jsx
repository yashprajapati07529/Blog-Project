import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import BlogDetails from "./pages/BlogDeatils";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";

const App = () => {

    return (
        <BrowserRouter>

            <Navbar />

            <main>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/blogs"
                        element={<Blogs />}
                    />

                    <Route
                        path="/blog/:id"
                        element={<BlogDetails />}
                    />

                    <Route
                        path="/add-blog"
                        element={<AddBlog />}
                    />

                    <Route
                        path="/edit-blog/:id"
                        element={<EditBlog />}
                    />

                </Routes>

            </main>

            <Footer />

        </BrowserRouter>
    );
};

export default App;