import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-6 h-30">
      <div className="container mx-auto py-8 flex justify-between items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold p-5">
            Organize your tasks with ease.
          </h1>
          <p className="text-gray-300">Copyright ©2023 by Moin</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2 p-5=4">Follow Us</h2>
          <div className="flex space-x-4 p-5">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Youtube
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;