"use client";
import React from "react";

function FeatureSection() {
  const features = [
    {
      title: "Task Management",
      description: "Effortlessly manage your tasks and assignments.",
    },
    {
      title: "Due Date Tracking",
      description: "Keep track of due dates and never miss a deadline.",
    },
    {
      title: "User-friendly Interface",
      description: "Intuitive and easy-to-use interface for all users.",
    },
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
