"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/company image 3.jpg",
    "/company image 2.webp",
    "/company 9.jpg",
    "/company 8.jpg",
    "/company 7.jpg",
    "/company 6.jpg",
    "/company 5.jpg",
    "/company 4.jpg",
    "/company 16.jpg",
    "/company 14.jpg",
    "/company -40.jpg",
    "/company 20.jpg"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sky-950">
            Travel Gallery
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our collection of breathtaking moments from the Himalayas
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Border Effect */}
              <motion.div 
                className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 transition-all duration-500 rounded-xl"
                initial={false}
                whileHover={{ scale: 0.95 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 