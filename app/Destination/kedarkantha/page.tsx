"use client";
import C7 from "@/components/c7";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ChevronIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
        />
    </svg>
);

export default function KedarkanthaPage() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    const tabs = ["Overview", "Itinerary", "Things to Carry"];

    const locationData = {
        title: "KEDARKANTHA TREK",
        description: "A winter wonderland trek with stunning snow-covered landscapes",
        image: "https://images.unsplash.com/photo-1629981352504-b7f5210501c3?w=1920&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VkYXJuYXRofGVufDB8fDB8fHww",
        duration: "5 Days",
        difficulty: "Easy to Moderate",
        altitude: "12,500 ft",
        bestTime: "Mid November to March",
        trekDistance: "18 km",
        startingPoint: "Dehradun",
        pdfLink: "https://drive.google.com/file/d/1YrpWdhFKNbFjADObW9XB9ACHtZqRyk2a/view?usp=sharing",
        whatsappNumber: "919876543210",
        phoneNumber: "919876543210",
        email: "info@simplyraahi.com",
        gallery: [
            {
                src: "https://i.pinimg.com/736x/2a/2b/9e/2a2b9e4a8de2f93d0f9d76cfd66e226a.jpg",
                alt: "Kedarkantha Trek"
            },
            {
                src: "https://i.pinimg.com/736x/e8/e4/fd/e8e4fd9774aae9966476faaca0a112a5.jpg",
                alt: "Summit View"
            },
            {
                src: "https://i.pinimg.com/736x/45/60/f1/4560f16fe02bcc9c036995da3d00e7fa.jpg",
                alt: "Campsite"
            },
            {
                src: "https://i.pinimg.com/736x/57/7d/ec/577dec6ee1da2d5f9c2d9f0ff86a2abf.jpg",
                alt: "Trek Path"
            },
            {
                src: "https://i.pinimg.com/736x/30/33/b8/3033b87546b3e1656417a474a69e829a.jpg",
                alt: "Snow Trek"
            },
            {
                src: "https://i.pinimg.com/736x/31/4f/58/314f5826d113df21096014493d39df50.jpg",
                alt: "Mountain View"
            },
            {
                src: "https://i.pinimg.com/736x/ec/4c/e6/ec4ce604dbe4d37790e21168c254ac4c.jpg",
                alt: "Base Camp"
            },
            {
                src: "https://i.pinimg.com/736x/31/0c/84/310c844c6ec1fb4c02eaabb6ba657d50.jpg",
                alt: "Sunrise View"
            }
        ]
    };

    const handleDownloadPDF = () => {
        window.open(locationData.pdfLink, "_blank");
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/919876543210", "_blank");
    };

    const handleCall = () => {
        window.location.href = "tel:+919876543210";
    };

    const handleEmail = () => {
        window.open("https://mail.google.com/mail/u/0/?fs=1&to=info@simplyraahi.com&tf=cm", "_blank");
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative h-screen w-full overflow-hidden">
                    <Image
                        src={locationData.image}
                        alt="Kedarkantha Trek"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={100}
                        sizes="100vw"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-white px-4"
                        >
                            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
                                {locationData.title}
                            </h1>
                            <p className="text-xl mt-4 max-w-3xl mx-auto">{locationData.description}</p>
                        </motion.div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Tabs */}
                    <div className="flex space-x-8 border-b border-gray-200 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 px-2 text-lg font-medium transition-colors ${
                                    activeTab === tab
                                        ? "border-b-2 border-blue-500 text-blue-600"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === "Overview" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-grow prose max-w-none md:w-2/3">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Trek Overview</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Kedarkantha trek is one of the most popular winter treks in India. Located in the Uttarkashi district of Uttarakhand, this trek offers stunning views of the Himalayan peaks, beautiful meadows, and dense forests. The trek is perfect for beginners and offers a chance to experience snow during the winter months. The summit offers a 360-degree view of major peaks like Swargarohini, Bandarpoonch, and Kala Nag.
                                    </p>
                                </div>

                                <div className="md:w-1/3">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Trek Highlights</h3>
                                        <div className="space-y-4">
                                            {[
                                                "Beautiful snow-covered trails",
                                                "Dense oak and pine forests",
                                                "Stunning sunrise views",
                                                "Camping beside frozen lake",
                                                "Perfect for beginners",
                                                "Rich wildlife experience"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Time to Visit</h3>
                                    <p className="text-gray-600">{locationData.bestTime}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
                                    <p className="text-gray-600">{locationData.duration}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Altitude</h3>
                                    <p className="text-gray-600">{locationData.altitude}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Difficulty Level</h3>
                                    <p className="text-gray-600">{locationData.difficulty}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Trek Distance</h3>
                                    <p className="text-gray-600">{locationData.trekDistance}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "Itinerary" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Trek Itinerary</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        day: "Day 01",
                                        title: "Dehradun to Sankri",
                                        details: [
                                            "196 Km Drive, 8-9 hours",
                                            "Pick up from Dehradun Railway Station at 6:30 AM",
                                            "Dehradun is well connected with Delhi through railway and road route",
                                            "Overnight Buses and Trains are available",
                                            "A 200 km drive to Sankri Via Mussorie, Kempty Falls, Netwar & Purola",
                                            "Arrival at Sankri village by evening, Check in Guest house/Hotel",
                                            "Dinner and rest at the guesthouse/hotel",
                                            "Quick introduction and briefing about the trek"
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Trek from Sankri to Juda Ka Talab Camp site",
                                        details: [
                                            "3.5 Km Trek, 5-6 Hours | Altitude Gain: 7200 ft to 9186 ft",
                                            "Trek to Juda Ka Talab campsite after breakfast",
                                            "The trail is of easy to moderate ascend passing through dense forests of Oak & Rhododendron",
                                            "Arrival at Juda Ka Talab campsite followed by lunch and rest in the camps",
                                            "The Tal remains frozen during the winter season and a great sight to watch",
                                            "Evening refreshments, Group Activities and dinner at the campsite",
                                            "Overnight stay in the camps"
                                        ]
                                    },
                                    {
                                        day: "Day 03",
                                        title: "Trek to Kedarkantha Base camp from Juda Ka Talab",
                                        details: [
                                            "3 Km trek, 4-5 Hours | Altitude gain: 9186 ft to 10334 ft",
                                            "Trek to Kedarkantha Base Camp from Juda Ka Talab after breakfast",
                                            "Arrival at base camp around lunch",
                                            "An evening acclimatization walk followed by evening refreshments",
                                            "Early dinner and rest in the camps"
                                        ]
                                    },
                                    {
                                        day: "Day 04",
                                        title: "The Summit Day, Night stay at Hargaon Camp",
                                        details: [
                                            "7 km, 9-10 Hours | Altitude gain: 10334 ft to 12500 ft",
                                            "Early morning Trek to Kedarkantha Peak at 4 AM after light breakfast",
                                            "Steep and moderate climb of 3.5 km with level walks in between",
                                            "Carry at least 1-2 litres of water individually as the trail is deprived of water points",
                                            "Packed lunch at the summit point of the trek",
                                            "Descend back to Hargaon Base camp from the peak",
                                            "Refreshments and evening snacks after arriving at base camp",
                                            "Dinner and rest in Camps"
                                        ]
                                    },
                                    {
                                        day: "Day 05",
                                        title: "Descend to Sankri from Hargaon and Drive Back to Dehradun",
                                        details: [
                                            "4 Km descend, 196 Km Drive",
                                            "Descend down to Sankri Village from Hargaon camp after breakfast at Hargaon camp",
                                            "Arrival by 1:00 PM",
                                            "Leave for Dehradun",
                                            "Arrival in Dehradun by 10:30 PM"
                                        ]
                                    }
                                ].map((day, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-lg p-6"
                                        onClick={() => setExpandedDay(expandedDay === index + 1 ? null : index + 1)}
                                    >
                                        <div className="flex items-center justify-between cursor-pointer">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900">
                                                    {day.day}: {day.title}
                                                </h3>
                                            </div>
                                            <ChevronIcon
                                                className={`w-6 h-6 text-gray-500 transform transition-transform ${
                                                    expandedDay === index + 1 ? "rotate-180" : ""
                                                }`}
                                            />
                                        </div>
                                        {expandedDay === index + 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-4"
                                            >
                                                <ul className="space-y-2 text-gray-600">
                                                    {day.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start space-x-3">
                                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Trek Inclusions */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trek Inclusions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "All Meals (Veg only) from Day 1 Lunch to Day 5 Breakfast",
                                                "Tents (Triple/Double Sharing), Sleeping Bags, Sleeping Matts",
                                                "Experienced and Qualified Guides",
                                                "Friendly and supportive staff",
                                                "Forest permits",
                                                "Medical Amenities – Medical Tents, Oximeter, Oxygen Cylinder, Stretcher, First Aid Kit",
                                                "Sanitised and Hygienic Camp site"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start space-x-3">
                                                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Not Included</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Personal expenses",
                                                "Any kind of insurance",
                                                "Anything not mentioned in inclusions",
                                                "Tips to staff",
                                                "Cost of any emergency evacuation",
                                                "Additional stay due to bad weather"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start space-x-3">
                                                    <svg className="w-5 h-5 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "Things to Carry" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Items</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        category: "Essentials",
                                        items: [
                                            "Backpack (40-50 liters)",
                                            "Trekking shoes",
                                            "Water bottle (2 liters)",
                                            "Headlamp/Torch",
                                            "Basic first aid",
                                            "Valid ID proof"
                                        ]
                                    },
                                    {
                                        category: "Clothing",
                                        items: [
                                            "Warm fleece jacket",
                                            "Down/Padded jacket",
                                            "Thermal inner wear",
                                            "Trek pants",
                                            "Waterproof gloves",
                                            "Woolen cap"
                                        ]
                                    },
                                    {
                                        category: "Personal Care",
                                        items: [
                                            "Sunscreen (SPF 50+)",
                                            "Lip balm",
                                            "Personal medications",
                                            "Quick dry towel",
                                            "Toiletries",
                                            "Sanitizer"
                                        ]
                                    }
                                ].map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-md p-6"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            {category.category}
                                        </h3>
                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li key={i} className="flex items-start space-x-3">
                                                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Gallery Section */}
                    <section className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Gallery</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {locationData.gallery.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="relative h-64 overflow-hidden rounded-xl shadow-lg"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Action Cards */}
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gradient-to-br from-[#2C5364] to-[#203A43] rounded-lg p-4 text-white"
                                >
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        <h3 className="text-lg font-semibold">Download Guide</h3>
                                        <p className="text-sm opacity-90">Get trek information</p>
                                        <button
                                            onClick={handleDownloadPDF}
                                            className="w-full bg-white text-[#2C5364] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                        >
                                            Download PDF
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gradient-to-br from-[#11998e] to-[#38ef7d] rounded-lg p-4 text-white"
                                >
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        <h3 className="text-lg font-semibold">WhatsApp Us</h3>
                                        <p className="text-sm opacity-90">Chat with expert</p>
                                        <button
                                            onClick={handleWhatsApp}
                                            className="w-full bg-white text-[#11998e] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                        >
                                            Message Now
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gradient-to-br from-[#4B79A1] to-[#283E51] rounded-lg p-4 text-white"
                                >
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <h3 className="text-lg font-semibold">Call Us</h3>
                                        <p className="text-sm opacity-90">Call us on 9876543210</p>
                                        <button
                                            onClick={handleCall}
                                            className="w-full bg-white text-[#4B79A1] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                        >
                                            Call Now
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gradient-to-br from-[#614385] to-[#516395] rounded-lg p-4 text-white"
                                >
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <h3 className="text-lg font-semibold">Email Us</h3>
                                        <p className="text-sm opacity-90">Get information</p>
                                        <button
                                            onClick={handleEmail}
                                            className="w-full bg-white text-[#614385] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                        >
                                            Email Now
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <C7 />
        </>
    );
} 