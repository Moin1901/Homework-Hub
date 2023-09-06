"use client";
import React from "react";

function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Welcome to <span className="text-yellow-300">Homework Hub</span>
        </h1>
        <p className="text-lg mb-8">
          Your one-stop solution for managing tasks and homework.
        </p>
        <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 text-lg px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default WelcomeBanner;
