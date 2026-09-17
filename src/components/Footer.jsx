const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white mt-10">

            <div className="max-w-6xl mx-auto px-4 py-6">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

                    {/* Copyright */}
                    <p className="text-sm text-gray-500 text-center sm:text-left">
                        © 2026{" "}
                        <span className="font-semibold text-gray-800">
                            Blog
                        </span>
                        . All Rights Reserved.
                    </p>


                    {/* Built With */}
                    <p className="text-sm text-gray-500 text-center">
                        Built with{" "}
                        <span className="font-semibold text-blue-600">
                            ReactJS
                        </span>
                        !
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;