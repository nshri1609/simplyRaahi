'use client';

import C7 from "@/components/c7";
import Navbar from "@/components/navbar";
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const weekendTrips = [
  {
    title: "Kasol-Kheerganga",
    description: "Experience the magic of Parvati Valley with a trek to the mystical hot springs of Kheerganga.",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b",
    price: "₹6,500",
    startingPoint: "Starting Point: Delhi",
    link: "http://localhost:3000/Destination/kasol-kheerganga"
  },
  {
    title: "Manali-Sissu-Kasol",
    description: "Journey through the stunning landscapes of Himachal Pradesh from Manali to Kasol.",
    image: "/kasol.jpeg",
    price: "₹7,000",
    startingPoint: "Starting Point: Delhi",
    link: "/Destination/manali-kasol"
  },
  {
    title: "Jibhi-Tirthan",
    description: "Discover the hidden gems of Tirthan Valley and the charming village of Jibhi.",
    image: "/jibhi.jpeg",
    price: "₹6,500",
    startingPoint: "Starting Point: Delhi",
    link: "/Destination/jibhi-tirthan"
  },
  {
    title: "Mcleodganj-Triund",
    description: "Trek to Triund from Mcleodganj for breathtaking views of the Dhauladhar range.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    price: "₹6,500",
    startingPoint: "Starting Point: Delhi",
    link: "/Destination/mcleodganj-triund"
  },
  {
    title: "Tungnath-Chandrashila",
    description: "Visit the highest Shiva temple and trek to Chandrashila for panoramic Himalayan views.",
    image: "/Chopta.jpeg",
    price: "₹6,500",
    startingPoint: "Starting Point: Delhi",
    link: "/Destination/tungnath-chandrashila"
  }
];

const trekkingTours = [
  {
    title: "Kedarkantha Trek",
    description: "A perfect winter trek with stunning views of snow-capped peaks and frozen lakes.",
    image: "/kedarkantha.jpeg",
    price: "₹6,000",
    startingPoint: "Starting Point: Dehradun",
    link: "/Destination/kedarkantha"
  },
  {
    title: "Valley of Flowers",
    description: "Walk through a paradise of alpine flowers in this UNESCO World Heritage Site.",
    image: "/valley.jpeg",
    price: "₹8,500",
    startingPoint: "Starting Point: Haridwar",
    link: "/Destination/valleyofflowers"
  },
  {
    title: "Kuari Pass",
    description: "Experience the majestic views of Nanda Devi and other Himalayan peaks.",
    image: "/kuari.jpeg",
    price: "₹7,500",
    startingPoint: "Starting Point: Haridwar/Dehradun",
    link: "/Destination/kuari-pass"
  },
  {
    title: "Hampta Pass",
    description: "Cross the dramatic Hampta Pass connecting Kullu and Spiti valleys.",
    image: "/hampta.jpeg",
    price: "₹7,500",
    startingPoint: "Starting Point: Manali",
    link: "/Destination/hampta-pass-trek"
  },
  {
    title: "Sar Pass Trek",
    description: "A beautiful trek through dense forests and meadows with stunning views of the Parvati Valley.",
    image: "https://i.pinimg.com/736x/24/80/ea/2480eab9b368518f886099c54c86e407.jpg",
    price: "₹7,000",
    startingPoint: "Starting Point: Kasol",
    link: "/Destination/sar-pass"
  },
  {
    title: "Nag Tibba Trek",
    description: "Perfect weekend trek offering stunning views of the Garhwal Himalayas.",
    image: "/nag2.jpeg",
    price: "₹5,500",
    startingPoint: "Starting Point: Dehradun",
    link: "/Destination/nagtibba"
  }
];

const religiousTours = [
  {
    title: "Panch Kedar",
    description: "Embark on a spiritual journey to the five sacred temples of Lord Shiva in the Garhwal Himalayas.",
    image: "https://i.pinimg.com/736x/f1/8b/e2/f18be2c3856d35b15e09b6c5901e96df.jpg",
    price: "₹24,999",
    startingPoint: "Starting Point: Haridwar",
    link: "http://localhost:3000/Destination/panch-kedar"
  },
  {
    title: "Kedarnath Dham",
    description: "Visit one of the holiest shrines of Lord Shiva in the Garhwal Himalayas.",
    image: "/c61.jpeg",
    price: "₹10,500",
    startingPoint: "Starting Point: Haridwar",
    link: "http://localhost:3000/Destination/kedarnath"
  },
  {
    title: "Do Dham Yatra",
    description: "Pilgrimage to Kedarnath and Badrinath, two of the most sacred shrines.",
    image: "/c62.jpeg",
    price: "₹15,000",
    startingPoint: "Starting Point: Haridwar",
    link: "http://localhost:3000/Destination/do-dham"
  },
  {
    title: "Char Dham Yatra",
    description: "Complete pilgrimage to all four sacred shrines: Kedarnath, Badrinath, Gangotri, and Yamunotri.",
    image: "/char dham.jpeg",
    price: "₹22,000",
    startingPoint: "Starting Point: Haridwar",
    link: "http://localhost:3000/Destination/char-dham"
  },
  {
    title: "Rudranath Temple",
    description: "Visit the third temple of Panch Kedar, where Lord Shiva's face is worshipped",
    image: "https://i.pinimg.com/736x/19/70/b8/1970b87b902b57cbdcf19e4d2d18aa73.jpg",
    price: "₹9,999",
    startingPoint: "Starting Point: Haridwar",
    link: "/Destination/rudranath"
  },
  {
    title: "Madhyamaheshwar Temple",
    description: "Visit the fourth temple of Panch Kedar, where Lord Shiva's navel is worshipped",
    image: "https://i.pinimg.com/736x/04/97/24/04972436b7cec39843fcb33910bdd3d8.jpg",
    price: "₹8,999",
    startingPoint: "Starting Point: Haridwar",
    link: "/Destination/madhyamaheshwar"
  }
];

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div 
          className="h-[94vh] relative bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617632951128-aa79fb2ffa80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Discover Your Perfect Journey
              </h1>
              <p className="text-xl text-white/90">
                Explore our diverse range of travel experiences designed to cater to every traveller's desire. Find your perfect adventure, religious, cultural or personalized tour.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Weekend Trips Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sky-900 mb-4">Weekend Getaways</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect short trips to escape the city and explore the beauty of the Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weekendTrips.map((trip, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-[500px]"
              >
                <div className="relative h-64">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{trip.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{trip.description}</p>
                  <div className="flex flex-col space-y-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <div>
                      <span className="text-xl font-bold text-sky-600">{trip.price}</span>
                        <p className="text-sm text-gray-600">{trip.startingPoint}</p>
                      </div>
                      <button 
                        onClick={() => window.location.href = trip.link}
                        className="bg-sky-600 text-white px-8 py-2 rounded-lg hover:bg-sky-700 transition duration-300 min-w-[120px] text-center"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trekking Tours Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sky-900 mb-4">Trekking Adventures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Challenge yourself with these breathtaking treks through the Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trekkingTours.map((trek, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-[500px]"
              >
                <div className="relative h-64">
                  <Image
                    src={trek.image}
                    alt={trek.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{trek.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{trek.description}</p>
                  <div className="flex flex-col space-y-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <div>
                      <span className="text-xl font-bold text-sky-600">{trek.price}</span>
                        <p className="text-sm text-gray-600">{trek.startingPoint}</p>
                      </div>
                      <button 
                        onClick={() => window.location.href = trek.link}
                        className="bg-sky-600 text-white px-8 py-2 rounded-lg hover:bg-sky-700 transition duration-300 min-w-[120px] text-center"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Religious Tours Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sky-900 mb-4">Religious Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embark on a spiritual journey to the sacred shrines of the Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religiousTours.map((tour, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-[500px]"
              >
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{tour.description}</p>
                  <div className="flex flex-col space-y-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <div>
                      <span className="text-xl font-bold text-sky-600">{tour.price}</span>
                        <p className="text-sm text-gray-600">{tour.startingPoint}</p>
                      </div>
                      <button 
                        onClick={() => window.location.href = tour.link}
                        className="bg-sky-600 text-white px-8 py-2 rounded-lg hover:bg-sky-700 transition duration-300 min-w-[120px] text-center"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-sky-900 mb-6">Begin Your Journey with Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Every journey tells a story, and we're here to help you write yours. From the snow-capped peaks of the Himalayas 
              to the sacred temples nestled in the mountains, let us guide you through experiences that will stay with you forever.
            </p>
            <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-sm">
              <p className="text-lg text-gray-700 italic">
                "The journey of a thousand miles begins with a single step. Let that step be with Simply Raahi."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <C7 />
    </>
  );
} 