"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Residential Complex",
    description:
      "A beautiful and sustainable housing project completed in 2024.",
  },
  {
    id: 2,
    title: "Commercial Office Tower",
    description: "State-of-the-art office space designed for productivity.",
  },
  {
    id: 3,
    title: "Shopping Mall Renovation",
    description: "Revamping the downtown mall with modern aesthetics.",
  },
  {
    id: 4,
    title: "Luxury Villa Construction",
    description: "High-end villas with premium materials and design.",
  },
  {
    id: 5,
    title: "Industrial Warehouse",
    description: "Large scale warehouse built with efficient layout planning.",
  },
  {
    id: 6,
    title: "Community Park Development",
    description: "Creating green spaces for the community to enjoy.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <main className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Our Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, image }) => (
          <motion.div
            key={id}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <Image
              src={
                "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
              }
              width={50}
              height={50}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-yellow-600 mb-2">
                {title}
              </h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
