'use client';

import C7 from "@/components/c7";
import Navbar from "@/components/navbar";
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PersonalisedPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[94vh]">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            alt="Mountain landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl text-white font-light mb-4">Your own</h2>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                CUSTOM<br />ITINERARY
              </h1>
            </div>
          </div>
        </div>

        {/* Simply Raahi Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
              Create your perfect journey with<br />
              <span className="text-sky-700">Simply Raahi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Travel is a deeply personal experience, and at Simply Raahi, we believe your journey should reflect your unique
              preferences and aspirations. Create your own personalized itinerary with us or let us create one for you.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Personalized Travel Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-8">
              Why choose personalized travel?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Travel is a deeply personal experience, and at Simply Raahi, we believe your journey should reflect your unique
              preferences and aspirations. Why settle for generic packages when you can craft unforgettable
              experiences? It offers the freedom to explore at your own pace, the luxury of curating every detail, and the
              expertise of our team to ensure that everything runs smoothly.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <motion.div 
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-sky-800 mb-4">Tailored Just for You</h3>
                <p className="text-gray-600">
                  Every detail of your journey is customized to match your interests, preferences, and travel style.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-sky-800 mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Travel at your own pace with itineraries that adapt to your timeline and preferred activities.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-sky-800 mb-4">Local Expertise</h3>
                <p className="text-gray-600">
                  Benefit from our deep knowledge of destinations and access to unique experiences off the beaten path.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Image Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="relative h-[400px] rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/company50.jpg"
                alt="Travel experience"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Adventure Awaits</h3>
                  <p className="text-lg">Experience the thrill of the Himalayas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative h-[400px] rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/company51.jpg"
                alt="Travel experience"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Cultural Immersion</h3>
                  <p className="text-lg">Discover local traditions and heritage</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative h-[400px] rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/company52.jpg"
                alt="Travel experience"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Scenic Beauty</h3>
                  <p className="text-lg">Witness breathtaking landscapes</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Options */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-sky-900 mb-6">Ready to Plan Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-12">Let's turn your travel dreams into unforgettable memories</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <svg className="w-12 h-12 text-sky-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-6">Tell us where you want to go – we'll take care of the rest. Email us for a tailor-made itinerary.</p>
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=info@simplyraahi.com&tf=cm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition duration-300 w-full"
                >
                  Send Email
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Us</h3>
                <p className="text-gray-600 mb-6">Your dream trip is just a message away – WhatsApp us now for a personalized travel plan!</p>
                <a
                  href="https://wa.me/917902059525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Message Now
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-600 mb-6">Got a trip in mind? Let's make it real. Call us at +91 7902059525 to start planning your custom getaway!</p>
                <a
                  href="tel:7902059525"
                  className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Call Now
                </a>
              </motion.div>
            </div>
          </div>

          {/* Image Section with Text */}
          <div className="relative h-[60vh] rounded-2xl overflow-hidden my-16">
            <Image
              src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd"
              alt="Mountain landscape"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="text-white max-w-2xl px-8 md:px-16">
                <h2 className="text-4xl font-bold mb-6">Create Memories That Last</h2>
                <p className="text-lg mb-8">
                  Whether you're dreaming of scaling Himalayan peaks, exploring hidden valleys, or immersing yourself in local culture,
                  our personalized tours ensure every moment is exactly how you imagined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <C7 />
    </>
  );
} 