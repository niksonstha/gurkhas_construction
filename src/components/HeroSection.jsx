"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-yellow-500 text-white py-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Building Your Dreams with Quality & Trust
        </h1>
        <p className="text-lg mb-8 drop-shadow-md">
          Gurkhas Construction delivers exceptional craftsmanship for
          residential and commercial projects.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-yellow-600 font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
