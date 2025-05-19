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

export default function SarPassPage() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    const tabs = ["Overview", "Itinerary", "Things to Carry"];

    const locationData = {
        title: "SAR PASS TREK",
        description: "A challenging trek through beautiful meadows and snow-covered passes",
        image: "https://images.unsplash.com/photo-1629981352504-b7f5210501c3?w=1920&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VkYXJuYXRofGVufDB8fDB8fHww",
        duration: "5 Days",
        difficulty: "Moderate",
        altitude: "13,800 ft",
        bestTime: "April to May",
        trekDistance: "46 km",
        startingPoint: "Manali",
        pdfLink: "https://drive.google.com/file/d/1YrpWdhFKNbFjADObW9XB9ACHtZqRyk2a/view?usp=sharing",
        whatsappNumber: "919876543210",
        phoneNumber: "919876543210",
        email: "info@simplyraahi.com",
        gallery: [
            {
                src: "https://i.pinimg.com/736x/24/80/ea/2480eab9b368518f886099c54c86e407.jpg",
                alt: "Sar Pass Summit View"
            },
            {
                src: "https://i.pinimg.com/736x/74/2e/7e/742e7ee0abf2f357ba2cb9bf387b84e7.jpg",
                alt: "Grahan Village"
            },
            {
                src: "https://i.pinimg.com/736x/1a/56/72/1a56721e29bb6bc8497194d2a4ae9ded.jpg",
                alt: "Mung Thach Campsite"
            },
            {
                src: "https://i.pinimg.com/736x/66/83/af/6683afeb4fa776d59ba308a612a6fc69.jpg",
                alt: "Nagaru Peak"
            },
            {
                src: "https://i.pinimg.com/736x/89/00/2d/89002dc1c89d58b35f0d9f2adc62565d.jpg",
                alt: "Biskeri Thach"
            },
            {
                src: "https://i.pinimg.com/736x/01/3d/fb/013dfbec0f3a9e08ffb840ffab414e3d.jpg",
                alt: "Rhododendron Forest"
            },
            {
                src: "https://i.pinimg.com/736x/23/3c/32/233c32227b5602ca94a7cb94c55d04f3.jpg",
                alt: "Mountain Panorama"
            },
            {
                src: "https://i.pinimg.com/736x/0a/46/24/0a4624f3461b837a0c46e344a30647a3.jpg",
                alt: "Parvati Valley View"
            }
        ]
    };

    const handleDownloadPDF = () => {
        window.open(locationData.pdfLink, "_blank");
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/917902059525", "_blank");
    };

    const handleCall = () => {
        window.location.href = "tel:+917902059525";
    };

    const handleEmail = () => {
        window.open("https://mail.google.com/mail/u/0/?fs=1&to=info@simplyraahi.com&tf=cm", "_blank");
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative h-screen w-full">
                    <Image
                        src={locationData.image}
                        alt="Sar Pass Trek"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-white"
                        >
                            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
                                {locationData.title}
                            </h1>
                            <p className="text-lg mt-2">{locationData.description}</p>
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
                                        The Sar Pass trek is a captivating journey through the heart of Parvati Valley in Himachal Pradesh. Starting from the charming town of Kasol at 5,577 feet, this trek takes you through dense Rhododendron forests, traditional mountain villages, and snow-covered terrain to reach the magnificent Sar Pass at 13,779 feet. The trek offers a perfect blend of adventure and natural beauty, featuring diverse landscapes from easy riverside walks to challenging snow-covered paths.

                                        The highlight of this trek is the gradual progression through distinct terrains - from the cultural immersion in Grahan Village, the last inhabited settlement on the route, to the serene meadows of Mung Thach, and finally the thrilling snow slide descent from Sar Pass to Biskeri Thach. Each day brings new challenges and rewards, making it an ideal trek for both beginners and experienced trekkers looking for a comprehensive Himalayan adventure.
                                    </p>
                                </div>

                                <div className="md:w-1/3">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Trek Highlights</h3>
                                        <div className="space-y-4">
                                            {[
                                                "Traditional homestay in Grahan village",
                                                "Dense Rhododendron forests",
                                                "Panoramic views from Sar Pass (13,779 ft)",
                                                "Thrilling snow slide descent",
                                                "Camping under starlit skies",
                                                "Pristine mountain streams",
                                                "Rich local culture experience",
                                                "Diverse Himalayan landscapes"
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
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
                            {[
                                {
                                    day: "Day 01",
                                    title: "Kasol to Grahan Village",
                                    details: [
                                        "Trek distance: 8 km | Trek Duration: 4-5 hours | Altitude gain: 5577 ft to 7709 ft",
                                        "Your Sar Pass trek starts from the centre of Kasol and keeps to the true left of the Grahan Nallah.",
                                        "The trail is easy and frequently used by locals and one can effortlessly cover much distance in a couple of hours.",
                                        "After passing the Grahan Nallah the trail becomes rocky and one will be climbing uphill, away from the right bank of the river and through the Rhododendron forest.",
                                        "Rhododendron petals can be eaten whole and the syrup can be mixed with water to make a refreshing drink.",
                                        "After a steep climb of about an hour, the Grahan Village is the last village of the trek and there will be no mobile network going forward.",
                                        "Overnight stay in homestay at Grahan."
                                    ]
                                },
                                {
                                    day: "Day 02",
                                    title: "Grahan to Mung Thach",
                                    details: [
                                        "Trek distance: 9 km | Trek Duration: 5-6 hours | Altitude gain: 7709 ft to 11154 ft",
                                        "Wake up to a beautiful view of the beautiful snow-clad mountains.",
                                        "After having a hearty breakfast, start your climb north of the camping ground of Grahan towards Mung Thach through the trail commonly used by the locals.",
                                        "After continuing your trek for a while, witness the Mung Thach, Nagaru, and Sar Top on the mountain to the right.",
                                        "Trek through the steeper path that leads into the woods with a thick cover of trees.",
                                        "As the slope becomes steeper the path too becomes challenging at some places.",
                                        "After crossing the forest arrive at your destination for the day, i.e., Mung Thach.",
                                        "One can easily see the Chandrakhani stretch and other prominent Himalayan ranges from here.",
                                        "Overnight stay at Mung Thach in a forest camp."
                                    ]
                                },
                                {
                                    day: "Day 03",
                                    title: "Mung Thach to Nagaru",
                                    details: [
                                        "Trek distance: 6 km | Trek Duration: 6-7 hours | Altitude gain: 11154 ft to 12467 ft",
                                        "Enjoy a gust of fresh cold breeze in the morning.",
                                        "You will then start the trek from Mung Thach to Nagaru that will pass through the woods.",
                                        "This is a difficult part of the trek, the slope falls steeply to the valley below and the snow may be slippery.",
                                        "After crossing steep slope for a couple of hours, reach Nagaru campsite.",
                                        "When facing north you will see magnificent mountains across the Parvati valley and the beautiful town of Manikaran.",
                                        "Overnight camp stay at Nagaru."
                                    ]
                                },
                                {
                                    day: "Day 04",
                                    title: "Nagaru to Biskeri Thach Via Sar Pass",
                                    details: [
                                        "Trek distance: 14 km | Trek Duration: 8-9 hours | Altitude gain: 12467 ft to 13779 ft",
                                        "Make an early start, as the climb is steep through the snow.",
                                        "Reach the top and enjoy the stunning views of Sar pass and the elevated peaks of the Tosh valley.",
                                        "Stay at the top for a bit to cherish your accomplishment and take some amazing pictures to freeze the moment in time.",
                                        "After that, you will have to slide down the Biskeri that is really exciting and completely harmless as long as some precautions are taken.",
                                        "The slide takes one as far as a kilometre to a gentler slope of the valley.",
                                        "Walk for an hour crossing a few streams to reach the valley and finally to the campsite of Biskeri Thach.",
                                        "Overnight stay at Biskeri Thach."
                                    ]
                                },
                                {
                                    day: "Day 05",
                                    title: "Biskeri Thach to Kasol via Barshaini",
                                    details: [
                                        "Trek distance: 9 km, 5-6 hours | Drive Distance: 15 Km, 1 hour",
                                        "Enjoy the sublime view of the pine forests, the majestic mountains, and the lush grasslands in Biskeri.",
                                        "From Biskeri, hike down across a steep plot of land with fencing all around.",
                                        "After crossing the dense forest cross a stream, with a campsite across.",
                                        "The path to the village of Pulga goes to the left of the campsite as the twin villages of Pulga and Tulga are separated by a stream.",
                                        "From Tulga, cross a bridge on the river Parvati, to reach the village of Barshaini.",
                                        "Jeep ride to Kasol base camp and your Sar Pass trekking ends."
                                    ]
                                }
                            ].map((day, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <div
                                        className="p-6 cursor-pointer"
                                        onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-blue-600 font-semibold">{day.day}</span>
                                                <h3 className="text-xl font-semibold text-gray-900 mt-1">{day.title}</h3>
                                            </div>
                                            <ChevronIcon className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                                                expandedDay === index ? "rotate-180" : ""
                                            }`} />
                                        </div>
                                    </div>
                                    {expandedDay === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-6"
                                        >
                                            <ul className="space-y-3 text-gray-600">
                                                {day.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                            ))}

                            {/* Trek Inclusions */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trek Inclusions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "All Meals (Veg only) included from Day 1 Lunch to Day 5 Breakfast",
                                                "Tents (Triple/Double Sharing), Sleeping Bags, Sleeping Matts",
                                                "Experienced and Qualified Guides",
                                                "Friendly and supportive staff",
                                                "Basic first aid medical kit",
                                                "All necessary permits and fees",
                                                "Transportation as per itinerary",
                                                "Camping equipment and gear",
                                                "Safety equipment"
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
                                                "Travel insurance",
                                                "Any kind of emergency evacuation charges",
                                                "Anything not mentioned in inclusions",
                                                "Tips to staff",
                                                "Personal trekking equipment",
                                                "Additional stay due to bad weather",
                                                "Cost of any emergency evacuation"
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
                                            "Water bottle (2-3 liters)",
                                            "Basic first aid kit",
                                            "Power bank",
                                            "Camera"
                                        ]
                                    },
                                    {
                                        category: "Clothing",
                                        items: [
                                            "Warm jacket",
                                            "Thermal wear",
                                            "Raincoat/poncho",
                                            "Hat/cap",
                                            "Sunglasses",
                                            "Socks (3-4 pairs)"
                                        ]
                                    },
                                    {
                                        category: "Personal Care",
                                        items: [
                                            "Sunscreen (SPF 50+)",
                                            "Lip balm",
                                            "Personal medications",
                                            "Toiletries",
                                            "Hand sanitizer",
                                            "Towel"
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
                </div>

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
                                    <p className="text-sm opacity-90">Call us on 7902059525</p>
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
            <C7 />
        </>
    );
} 