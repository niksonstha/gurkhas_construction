"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Construction",
    description:
      "We build beautiful, durable, and energy-efficient homes tailored to your needs.",
    icon: (
      <svg
        className="w-12 h-12 text-yellow-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Commercial Projects",
    description:
      "Professional construction services for offices, retail spaces, and infrastructure.",
    icon: (
      <svg
        className="w-12 h-12 text-yellow-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1V7z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 10h.01M15 10h.01"
        />
      </svg>
    ),
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform your spaces with our expert renovation and remodeling solutions.",
    icon: (
      <svg
        className="w-12 h-12 text-yellow-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

const Services = () => {
  return (
    <main className="pt-20 max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-yellow-600 mb-12 text-center">
        Our Services
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon }, index) => (
          <motion.div
            key={title}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            style={{ originY: 0.7 }}
          >
            <div className="flex justify-center">{icon}</div>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Services;
