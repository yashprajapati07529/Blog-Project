import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f6fa]">

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

        <div className="w-full max-w-5xl">

          {/* Main Card */}
          <div className="rounded-3xl bg-white px-6 py-14 text-center shadow-sm ring-1 ring-slate-200 sm:px-10 sm:py-20 md:px-16">

            {/* Small Label */}
            <div className="mb-6 flex justify-center">
              <span className="rounded-full bg-blue-50 px-5 py-2 text-xs font-bold tracking-[3px] text-blue-500">
                BLOG
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Blog. Document.
              <br />
              <span className="text-blue-500">
                Learn Knowledge.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
             Explore React, JavaScript, and web development through easy-to-follow tutorials.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/blogs"
                className="w-full rounded-lg bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 sm:w-auto"
              >
                Explore Blogs
              </Link>

              <Link
                to="/add-blog"
                className="w-full rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-500 sm:w-auto"
              >
                Add Blog
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;