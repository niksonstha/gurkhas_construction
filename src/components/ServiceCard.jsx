"use client";

import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.6 },
  },
};

const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      <h3 className="text-xl font-semibold mb-2 text-yellow-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
