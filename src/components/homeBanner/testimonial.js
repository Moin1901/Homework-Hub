"use client";
import React from "react";

function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      position: "Student",
      testimonial:
        "Homework Hub has made my life so much easier. I can now organize and manage my assignments effortlessly.",
    },
    {
      name: "Jane Smith",
      position: "Teacher",
      testimonial:
        "As a teacher, Homework Hub has helped me keep track of my students' assignments and deadlines. It's a great tool for educators.",
    },
    {
      name: "Bob Johnson",
      position: "Parent",
      testimonial:
        "I use Homework Hub to stay informed about my child's homework. It keeps me in the loop and ensures they are on top of their tasks.",
    },
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
