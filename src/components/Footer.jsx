import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-6">
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold p-5">
            Organize your tasks with ease.
          </h1>
          <p className="text-gray-300">Copyright ©2023 by Moin</p>
        </div>
        <div className="text-center mt-8 md:mt-0">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://leetcode.com/mdmoinuddin1901/"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Leetcode
            </a>
            <a
              href="https://moin1901.github.io/My-Animated-portfolio/"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="https://www.instagram.com/mdmoin1901/"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/md-moinuddin-7ba262220/?trk=public_profile_samename-profile&originalSubdomain=in"
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
