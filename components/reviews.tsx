"use client";

import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      image: "/company 8.jpg",
      text: "We went on a group travel for the first time and we were somewhat doubtful about the fun but trust me travelling with Simply Raahi was just a dream come true. Never had this much fun before guys. Looking forward to travel again with you.",
      name: "Rahul Sharma",
      location: "Manali Trip"
    },
    {
      image: "/company 7.jpg",
      text: "The coordinators, the stays, the travellers it was all so perfect and amazingly organised. Our coordinator was so warm hearted he just made our trip the best till date. Thank you Simply Raahi for such a memorable experience.",
      name: "Priya Patel",
      location: "Kedarnath Yatra"
    },
    {
      image: "/company 6.jpg",
      text: "The group we were set into was so mind blowing. We enjoyed so much. They even provided us with dj and bonfires which just ended our journey so beautifully. Simply Raahi is definitely a company we'll trust to travel with often. Thank you!!",
      name: "Amit Kumar",
      location: "Chandratal Trek"
    },
    {
      image: "/company 5.jpg",
      text: "I traveled solo and being a girl it sometimes puts you in some doubts and with Simply Raahi and it's coordinator and also the group was so warm. Felt really safe while travelling with them. I'll be planning my next girls trip with you guys. Amazing trip!",
      name: "Sneha Gupta",
      location: "Valley of Flowers"
    }
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sky-950">
            Reviews
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            From exotic destinations to exciting activities, we have a variety of options for every type of traveler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-center mb-4 italic">
                  "{review.text}"
                </p>
                <h4 className="text-lg font-semibold text-sky-950">{review.name}</h4>
                <p className="text-blue-600 text-sm">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 