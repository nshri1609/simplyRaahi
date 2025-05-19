"use client";

import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Aditya Tewari",
      role: "FOUNDER",
      image: "/aditya-formal.jpg",
      description: "Expert in Himalayan expeditions with extensive experience in organizing treks and religious tours"
    },
    {
      name: "Ayush Rawat",
      role: "Content Head",
      image: "/ayush-rawat.jpg",
      description: "Creative content strategist specializing in travel storytelling and destination marketing"
    },
    {
      name: "Annapurna",
      role: "Sales & Marketing Head",
      image: "/sales.jpg",
      description: "Passionate about crafting unique travel experiences and building lasting client relationships"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sky-950">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            From exotic destinations to exciting activities, we have a variety of options for every type of traveler.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-2xl font-bold text-sky-950">{member.name}</h3>
                <p className="text-blue-600 mt-2 font-semibold tracking-wide uppercase text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 