"use client";
import React from "react";

function ActionSection() {
  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Add task and complete your assingment on time at Homework Hub and
          start organizing your tasks today!
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-lg px-6 py-3 rounded-full mr-4">
            Add-Task
          </button>
          <button className="bg-transparent border border-white text-lg px-6 py-3 rounded-full hover:bg-white hover:text-blue-500">
            Show-Task
          </button>
        </div>
      </div>
    </section>
  );
}

export default ActionSection;
