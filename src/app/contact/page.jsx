"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <main className="pt-20 max-w-3xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-yellow-600 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-md focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      ) : (
        <motion.div
          className="text-center bg-green-50 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Thank you!
          </h2>
          <p className="text-green-600">
            Your message has been sent. We will get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            Send Another Message
          </button>
        </motion.div>
      )}
    </main>
  );
};

export default Contact;
