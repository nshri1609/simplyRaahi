"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function C2() {
    return (
        <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white" id="c2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content */}
                <div className="text-center mb-16">
                    <h3 className="text-xl md:text-2xl font-semibold text-sky-600">
                        Welcome to <span className="text-sky-800">SimplyRaahi</span>
            </h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-sky-950 mt-4 leading-tight">
                        Your Gateway to Himalayan Adventures
            </h2>
                    <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Where every journey becomes a story and every destination holds a new discovery. 
                        From snow-capped peaks to sacred valleys, we craft experiences that resonate with your soul.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src="/home4.jpg"
                            alt="Himalayan Adventure"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Mountain Escapes</h3>
                            <p className="text-sm">Discover the majesty of the Himalayas</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src="/home1.jpg"
                            alt="Sacred Journeys"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Sacred Journeys</h3>
                            <p className="text-sm">Experience spiritual awakening</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src="/home3.jpg"
                            alt="Cultural Experiences"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Cultural Experiences</h3>
                            <p className="text-sm">Immerse in local traditions</p>
                        </div>
                    </motion.div>
                </div>

                {/* Section Divider */}
                <div className="relative py-16">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-sky-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-sky-600 text-lg font-semibold">Our Features</span>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-gradient-to-br from-sky-900 to-sky-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] transition-all duration-300"
                    >
                        <div className="w-20 h-20 bg-sky-700 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                            <span className="text-4xl transform rotate-6">🏔️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Curated Adventures</h3>
                        <div className="w-12 h-1 bg-sky-400 mb-6"></div>
                        <p className="text-sky-100 leading-relaxed">
                            Experience the perfect blend of adventure and comfort with our carefully designed journeys through the Himalayas. Each trip is crafted to provide unforgettable moments.
                        </p>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-gradient-to-br from-sky-900 to-sky-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] transition-all duration-300"
                    >
                        <div className="w-20 h-20 bg-sky-700 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                            <span className="text-4xl transform rotate-6">🌟</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Local Expertise</h3>
                        <div className="w-12 h-1 bg-sky-400 mb-6"></div>
                        <p className="text-sky-100 leading-relaxed">
                            Benefit from our deep knowledge of hidden gems and authentic experiences in the Himalayan region. Let our expert guides show you the path less traveled.
                        </p>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-gradient-to-br from-sky-900 to-sky-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] transition-all duration-300"
                    >
                        <div className="w-20 h-20 bg-sky-700 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                            <span className="text-4xl transform rotate-6">💫</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Personalized Touch</h3>
                        <div className="w-12 h-1 bg-sky-400 mb-6"></div>
                        <p className="text-sky-100 leading-relaxed">
                            Every journey is tailored to match your preferences, ensuring a unique and memorable adventure. Your dream trip, crafted just for you.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}