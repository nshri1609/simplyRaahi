"use client";
import C7 from "@/components/c7";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

// Add ChevronIcon component
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

interface LocationData {
    title: string;
    description: string;
    image: string;
    duration: string;
    difficulty: string;
    altitude: string;
    trekDistance?: string;
    bestTime: string;
    price: string;
    pdfLink: string;
    whatsappNumber: string;
    phoneNumber: string;
    email: string;
    gallery: { src: string; alt: string }[];
    startingPoint?: string;
    startingPrice?: string;
}

interface LocationDetails {
    bestTime: string;
    duration: string;
    altitude: string;
    difficulty: string;
    trekDistance?: string;
    startingPoint?: string;
    startingPrice?: string;
}

interface ItineraryDay {
    day: string;
    title: string;
    details: string[];
}

interface GalleryImage {
    src: string;
    alt: string;
}

export default function CombinedDestinationPage() {
    const params = useParams();
    const location = params.location as string;
    const [activeTab, setActiveTab] = useState("Overview");
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    const tabs = ["Overview", "Itinerary", "Things to Carry"];

    // Map location names to their data
    const locationDataMap: Record<string, LocationData> = {
        "kasol-kheerganga": {
            title: "KASOL-KHEERGANGA",
            description: "",
            image: "https://images.unsplash.com/photo-1736363981604-a7084d9abda4?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "2N/3D",
            difficulty: "",
            altitude: "2,950 meters",
            trekDistance: "",
            bestTime: "All Year Round",
            price: "₹6,500",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹6,500",
            pdfLink: "https://drive.google.com/file/d/1WD9XJ2dMct3RVprVR_60zrIQiL2xEzrQ/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "https://i.pinimg.com/736x/0c/d2/c2/0cd2c256edcc7daaf024c3f66d964f88.jpg",
                    alt: "Kheerganga Valley View"
                },
                {
                    src: "https://i.pinimg.com/736x/e6/18/cc/e618cc22610d09b4fe5c4883d3d71408.jpg",
                    alt: "Parvati River"
                },
                {
                    src: "https://i.pinimg.com/736x/8a/44/e0/8a44e0195ab08919b92a085b3596e0e1.jpg",
                    alt: "Mountain Valley"
                },
                {
                    src: "https://i.pinimg.com/736x/25/4d/34/254d34ccc3fa525a9cd5c4495195a886.jpg",
                    alt: "Trekking Path"
                },
                {
                    src: "https://i.pinimg.com/736x/31/ca/ef/31caef9eec398b66eeb3529c9ee3fe15.jpg",
                    alt: "Hot Springs"
                },
                {
                    src: "https://i.pinimg.com/736x/77/62/3c/77623cb9d11b31a7777c4e25fbc6d42d.jpg",
                    alt: "Mountain Scenery"
                },
                {
                    src: "https://i.pinimg.com/736x/f6/7a/3e/f67a3e0a96ba728d80001bf6bd06ca03.jpg",
                    alt: "Valley View"
                },
                {
                    src: "https://i.pinimg.com/736x/15/02/63/150263e313e2a17b3891b8774762eec1.jpg",
                    alt: "Trekking Route"
                }
            ]
        },
        "manali-kasol": {
            title: "MANALI-SISSU-KASOL",
            description: "",
            image: "https://images.unsplash.com/photo-1736363981604-a7084d9abda4?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "3N/4D",
            difficulty: "",
            altitude: "2,050 meters",
            trekDistance: "",
            bestTime: "All Year Round",
            price: "₹7,000",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹7,000",
            pdfLink: "https://drive.google.com/file/d/19ozVkYvEyjgYqWLI9CKCbbR3dR-KhFB_/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "/manali.jpeg",
                    alt: "Manali View"
                },
                {
                    src: "/manali1.jpeg",
                    alt: "Manali Old Town"
                },
                {
                    src: "/manali2.jpeg",
                    alt: "Manali Waterfall"
                },
                {
                    src: "/manali3.jpeg",
                    alt: "Manali Trek"
                },
                {
                    src: "/manali4.jpeg",
                    alt: "Manali Sunset"
                },
                {
                    src: "/company 8.jpg",
                    alt: "Manali Cafe"
                },
                {
                    src: "/company51.jpg",
                    alt: "Manali Cafe"
                },
                {
                    src: "/company52.jpg",
                    alt: "Manali Cafe"
                }
            ]
        },
        "jibhi-tirthan": {
            title: "Jibhi Tirthan Valley Trek",
            description: "",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            duration: "2N/3D",
            difficulty: "",
            altitude: "2,800m",
            trekDistance: "",
            bestTime: "All Year Round",
            price: "₹7,000",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹7,000",
            pdfLink: "https://drive.google.com/file/d/1spQZonMSFdg6GnOI_31m-OnjiufFbGAP/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "https://i.pinimg.com/736x/6d/02/79/6d02799768265fcfb24d1d19aeb95e4e.jpg",
                    alt: "Jibhi Valley View"
                },
                {
                    src: "https://i.pinimg.com/736x/eb/54/1e/eb541e438d5d2e65f9e0896d61de4df6.jpg",
                    alt: "Tirthan River"
                },
                {
                    src: "https://i.pinimg.com/736x/f2/7f/5d/f27f5d69bd0f7d72ae882ff6595e2c03.jpg",
                    alt: "Mountain Valley"
                },
                {
                    src: "https://i.pinimg.com/736x/a5/c1/6d/a5c16d2863e2f122ab34718e4bc57cda.jpg",
                    alt: "Mountain Stream"
                },
                {
                    src: "https://i.pinimg.com/736x/43/2f/15/432f15909a30ab26a8818e9625b430e8.jpg",
                    alt: "Valley Sunset"
                },
                {
                    src: "https://i.pinimg.com/736x/11/bd/18/11bd1827618d217232b2d5b98d2c3f79.jpg",
                    alt: "Forest Trail"
                },
                {
                    src: "https://i.pinimg.com/736x/b3/a4/ac/b3a4ac0cd3cfef867ff32ba44eaca1ca.jpg",
                    alt: "Mountain Village"
                },
                {
                    src: "https://i.pinimg.com/736x/18/26/2f/18262f7231d4d67458e959e17e04d6cd.jpg",
                    alt: "Scenic Viewpoint"
                }
            ]
        },
        "kuari-pass": {
            title: "Kuari Pass Trek",
            description: "",
            image: "https://images.unsplash.com/photo-1615552714321-dca9935c0981?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D",
            duration: "6 Days",
            difficulty: "Easy to Moderate",
            altitude: "12,139 ft",
            trekDistance: "22 km",
            bestTime: "All Seasons",
            price: "₹12,999",
            pdfLink: "https://drive.google.com/file/d/1YEJehKJDcNc2XVtDsDMXhmtjfoYBewj_/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "https://i.pinimg.com/736x/08/90/fa/0890fa97163808d3e7ee3e3a2864ba4d.jpg",
                    alt: "Kuari Pass Summit View"
                },
                {
                    src: "https://i.pinimg.com/736x/dd/96/dd/dd96ddb686aee94bd3465ae59d2782f2.jpg",
                    alt: "Mountain Lake at Kuari Pass"
                },
                {
                    src: "https://i.pinimg.com/736x/d2/f0/b3/d2f0b337747feb57005d7a0ab4dcdb01.jpg",
                    alt: "Trekking Trail"
                },
                {
                    src: "https://i.pinimg.com/736x/aa/3f/32/aa3f3251d8f8c6f1fbbd0c3300ee684c.jpg",
                    alt: "Campsite at Kuari Pass"
                },
                {
                    src: "https://i.pinimg.com/736x/36/cc/67/36cc67d598d5457c22ae2ed815cb8098.jpg",
                    alt: "Snow-covered Peaks"
                },
                {
                    src: "https://i.pinimg.com/736x/b0/32/75/b03275717917ca6e4ad1a4f5f0e344e3.jpg",
                    alt: "Mountain Sunrise"
                },
                {
                    src: "https://i.pinimg.com/736x/ce/a5/ce/cea5ce6e7cf21464bc774b1573317a4e.jpg",
                    alt: "Base Camp View"
                },
                {
                    src: "https://i.pinimg.com/736x/79/77/02/7977021a64f708dc6099b4861bbe654a.jpg",
                    alt: "Himalayan Panorama"
                }
            ]
        },
        "sar-pass": {
            title: "Sar Pass Trek",
            description: "",
            image: "https://images.unsplash.com/photo-1615552714321-dca9935c0981?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D",
            duration: "5 Days",
            difficulty: "Moderate",
            altitude: "13,800 ft",
            trekDistance: "46 km",
            bestTime: "April to May",
            price: "₹12,999",
            pdfLink: "https://drive.google.com/file/d/1YEJehKJDcNc2XVtDsDMXhmtjfoYBewj_/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "https://i.pinimg.com/736x/08/90/fa/0890fa97163808d3e7ee3e3a2864ba4d.jpg",
                    alt: "Kuari Pass Summit View"
                },
                {
                    src: "https://i.pinimg.com/736x/dd/96/dd/dd96ddb686aee94bd3465ae59d2782f2.jpg",
                    alt: "Mountain Lake at Kuari Pass"
                },
                {
                    src: "https://i.pinimg.com/736x/d2/f0/b3/d2f0b337747feb57005d7a0ab4dcdb01.jpg",
                    alt: "Trekking Trail"
                },
                {
                    src: "https://i.pinimg.com/736x/aa/3f/32/aa3f3251d8f8c6f1fbbd0c3300ee684c.jpg",
                    alt: "Campsite at Kuari Pass"
                },
                {
                    src: "https://i.pinimg.com/736x/36/cc/67/36cc67d598d5457c22ae2ed815cb8098.jpg",
                    alt: "Snow-covered Peaks"
                },
                {
                    src: "https://i.pinimg.com/736x/b0/32/75/b03275717917ca6e4ad1a4f5f0e344e3.jpg",
                    alt: "Mountain Sunrise"
                },
                {
                    src: "https://i.pinimg.com/736x/ce/a5/ce/cea5ce6e7cf21464bc774b1573317a4e.jpg",
                    alt: "Base Camp View"
                },
                {
                    src: "https://i.pinimg.com/736x/79/77/02/7977021a64f708dc6099b4861bbe654a.jpg",
                    alt: "Himalayan Panorama"
                }
            ]
        },
        "kedarkantha": {
            title: "Kedarkantha Trek",
            description: "",
            image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "5 Days",
            difficulty: "Easy to Moderate",
            altitude: "12,500 ft",
            trekDistance: "18 km",
            bestTime: "Mid November to March",
            price: "₹11,999",
            pdfLink: "https://drive.google.com/file/d/1spQZonMSFdg6GnOI_31m-OnjiufFbGAP/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
                    alt: "Kedarkantha Peak"
                },
                {
                    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                    alt: "Snow-covered Trail"
                },
                {
                    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                    alt: "Mountain View"
                },
                {
                    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                    alt: "Winter Landscape"
                }
            ]
        },
        "madhyamaheshwar": {
            title: "Madhyamaheshwar Trek",
            description: "",
            image: "https://images.unsplash.com/photo-1615552714321-dca9935c0981?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D",
            duration: "4 Days",
            difficulty: "Moderate",
            altitude: "11,000 ft",
            trekDistance: "21 km",
            bestTime: "May to June & September to October",
            price: "₹12,999",
            pdfLink: "https://drive.google.com/file/d/1YEJehKJDcNc2XVtDsDMXhmtjfoYBewj_/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                    alt: "Kedarkantha Peak"
                },
                {
                    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                    alt: "Snow-covered Trail"
                },
                {
                    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                    alt: "Mountain View"
                },
                {
                    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                    alt: "Winter Landscape"
                }
            ]
        },
        "rudranath": {
            title: "Rudranath Trek",
            description: "",
            image: "https://images.unsplash.com/photo-1615552714321-dca9935c0981?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D",
            duration: "5 Days",
            difficulty: "Moderate",
            altitude: "12,000 ft",
            trekDistance: "46 km",
            bestTime: "May to June & September to October",
            price: "₹12,999",
            pdfLink: "https://drive.google.com/file/d/1YEJehKJDcNc2XVtDsDMXhmtjfoYBewj_/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                    alt: "Kedarkantha Peak"
                },
                {
                    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                    alt: "Snow-covered Trail"
                },
                {
                    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                    alt: "Mountain View"
                },
                {
                    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                    alt: "Winter Landscape"
                }
            ]
        },
        "hampta-pass-trek": {
            title: "Hampta Pass Trek",
            description: "",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            duration: "5 Days",
            difficulty: "Moderate",
            altitude: "14,074 ft",
            trekDistance: "26 km",
            bestTime: "Mid June to Early September",
            price: "₹13,999",
            pdfLink: "https://drive.google.com/file/d/1spQZonMSFdg6GnOI_31m-OnjiufFbGAP/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "/hampta1.jpeg",
                    alt: "Scenic view of Hampta Pass mountains"
                },
                {
                    src: "/hampta2.jpeg",
                    alt: "Beautiful valley view from Hampta Pass"
                },
                {
                    src: "/hampta.jpeg",
                    alt: "Snow-covered peaks at Hampta Pass"
                },
                {
                    src: "/hampta4.jpeg",
                    alt: "Trekking trail through Hampta Pass"
                },
                {
                    src: "/hampta5.jpeg",
                    alt: "Panoramic view of Hampta Pass landscape"
                },
                {
                    src: "/hampta6.jpeg",
                    alt: "Mountain streams near Hampta Pass"
                },
                {
                    src: "/hampta7.jpeg",
                    alt: "Camping site at Hampta Pass"
                },
                {
                    src: "/hampta8.jpeg",
                    alt: "Sunrise view from Hampta Pass"
                }
            ]
        },
        "valleyofflowers": {
            title: "Valley of Flowers Trek",
            description: "",
            image: "https://plus.unsplash.com/premium_photo-1667119168145-a98fb5d9a275?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpeg",
            duration: "6 Days",
            difficulty: "Easy to Moderate",
            altitude: "14,146 ft",
            trekDistance: "40 km",
            bestTime: "July to Early September",
            price: "₹14,999",
            pdfLink: "https://drive.google.com/file/d/1spQZonMSFdg6GnOI_31m-OnjiufFbGAP/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "/valley.jpeg",
                    alt: "Valley of Flowers landscape"
                },
                {
                    src: "/valley1.jpeg",
                    alt: "Alpine flowers in bloom"
                },
                {
                    src: "/valley2.jpeg",
                    alt: "Mountain backdrop of Valley of Flowers"
                },
                {
                    src: "/valley3.jpeg",
                    alt: "Trekking path through flowers"
                },
                {
                    src: "/valley4.jpeg",
                    alt: "Panoramic view of the valley"
                },
                {
                    src: "/valley5.jpeg",
                    alt: "Mountain streams in the valley"
                },
                {
                    src: "/valley6.jpeg",
                    alt: "Camping in the valley"
                },
                {
                    src: "/valley7.jpeg",
                    alt: "Sunrise over Valley of Flowers"
                }
            ]
        },
        "tungnath-chandrashila": {
            title: "TUNGNATH-CHANDRASHILA",
            description: "",
            image: "https://images.unsplash.com/photo-1739875831509-5f22efe9cded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            pdfLink: "https://drive.google.com/file/d/15nPSz2bWE7T0oxz7ycE-Pfwn7tOUu2cG/view?usp=sharing",
            duration: "3 Days",
            difficulty: "Easy",
            altitude: "13,123 ft",
            trekDistance: "12 km",
            bestTime: "All Seasons",
            price: "₹11,999",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "/tungnath1.jpeg",
                    alt: "Tungnath Temple"
                },
                {
                    src: "/tungnath2.jpeg",
                    alt: "Tungnath View"
                },
                {
                    src: "/tungnath3.jpeg",
                    alt: "Tungnath Sunrise"
                },
                {
                    src: "/tungnath4.jpeg",
                    alt: "Tungnath Sunset"
                },
                {
                    src: "/tungnath5.jpeg",
                    alt: "Tungnath Trek"
                },
                {
                    src: "/tungnath6.jpeg",
                    alt: "Tungnath View"
                },
                {
                    src: "/tungnath7.jpeg",
                    alt: "Tungnath Trek"
                },
                {
                    src: "/tungnath8.jpeg",
                    alt: "Tungnath View"
                }
            ]
        },
        "mcleodganj-triund": {
            title: "MCLEODGANJ-TRIUND",
            description: "",
            image: "https://images.unsplash.com/photo-1736363981604-a7084d9abda4?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "2N/3D",
            difficulty: "",
            altitude: "2,842 meters",
            trekDistance: "",
            bestTime: "All Year Round",
            price: "₹6,500",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹6,500",
            pdfLink: "https://drive.google.com/file/d/1WD9XJ2dMct3RVprVR_60zrIQiL2xEzrQ/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "/mac1.jpeg",
                    alt: "McLeodganj View"
                },
                {
                    src: "/mac2.jpeg",
                    alt: "McLeodganj Trek"
                },
                {
                    src: "/mac3.jpeg",
                    alt: "McLeodganj Sunset"
                },
                {
                    src: "/mac4.jpeg",
                    alt: "McLeodganj Trek"
                },
                {
                    src: "/mac5.jpeg",
                    alt: "McLeodganj View"
                },
                {
                    src: "/mac6.jpeg",
                    alt: "McLeodganj Trek"
                },
                {
                    src: "/mac7.jpeg",
                    alt: "McLeodganj View"
                },
                {
                    src: "/mac8.jpeg",
                    alt: "McLeodganj Trek"
                }
            ]
        },
        "nagtibba": {
            title: "NAGTIBBA",
            description: "",
            image: "https://images.unsplash.com/photo-1695007439847-22818181878c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            duration: "1N/2D",
            difficulty: "Easy to Moderate",
            altitude: "9,914 ft",
            trekDistance: "16 km",
            bestTime: "Mid November to February",
            price: "₹11,999",
            pdfLink: "https://drive.google.com/file/d/1_QTztIw3plpbcE8ejWII0kU1gVFDT-X9/view?usp=sharing",
            whatsappNumber: "919876543210",
            phoneNumber: "919876543210",
            email: "info@simplyraahi.com",
            gallery: [
                {
                    src: "/nagtibba.jpeg",
                    alt: "Nag Tibba View"
                },
                {
                    src: "/des2.jpeg",
                    alt: "Nag Tibba Trek"
                },
                {
                    src: "/des3.jpeg",
                    alt: "Nag Tibba Trek"
                },
                {
                    src: "/des4.jpeg",
                    alt: "Nag Tibba Trek"
                },
                {
                    src: "/nag1.jpeg",
                    alt: "Nag Tibba Trek"
                },
                {
                    src: "/nag2.jpeg",
                    alt: "Nag Tibba Trek"
                },
                {
                    src: "/company 5.jpg",
                    alt: "Nag Tibba Trek"
                },
                {
                    src: "/des8.jpeg",
                    alt: "Nag Tibba Trek"
                }
            ]
        }
    };

    const locationData = locationDataMap[location.toLowerCase()] || {
        title: location.toUpperCase(),
        description: "Explore the Beauty of the Himalayas",
        image: "https://images.unsplash.com/photo-1595791162533-3558ae54d2a3?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: "Flexible",
        difficulty: "Easy",
        altitude: "Varies",
        bestTime: "All Year Round",
        price: "#",
        pdfLink: "#",
        whatsappNumber: "919876543210",
        phoneNumber: "919876543210",
        email: "info@simplyraahi.com",
        gallery: []
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
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@simplyraahi.com", "_blank");
    };

    const handleGoogleSearch = () => {
        window.open("https://www.google.com/search?q=simplyraahi", "_blank");
    };

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/company/simplyraahi/about/", "_blank");
    };

    const handlePersonalizedTours = () => {
        window.location.href = "http://localhost:3000/personalised";
    };

    const handleContactUs = () => {
        window.location.href = "/contact";
    };

    // Add destination info data
    const locationDetailsMap: Record<string, LocationDetails> = {
        "kasol-kheerganga": {
            bestTime: "March to June & September to November",
            duration: "2N/3D",
            altitude: "2,950 meters",
            difficulty: "",
            trekDistance: "",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹6,500"
        },
        "manali-kasol": {
            bestTime: "March to June & September to November",
            duration: "3N/4D",
            altitude: "2,050 meters",
            difficulty: "",
            trekDistance: "",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹7,000"
        },
        "jibhi-tirthan": {
            bestTime: "March to June & September to November",
            duration: "2N/3D",
            altitude: "2,800m",
            difficulty: "",
            trekDistance: "",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹7,000"
        },
        "mcleodganj-triund": {
            bestTime: "March to June & September to November",
            duration: "2N/3D",
            altitude: "2,842 meters",
            difficulty: "",
            trekDistance: "",
            startingPoint: "Delhi/Chandigarh",
            startingPrice: "₹6,500"
        },
        "madhyamaheshwar": {
            bestTime: "May to June & September to October",
            duration: "4 Days",
            altitude: "11,000 ft",
            difficulty: "Moderate",
            trekDistance: "21 km",
            startingPoint: "Rishikesh",
            startingPrice: ""
        },
        "rudranath": {
            bestTime: "May to June & September to October",
            duration: "5 Days",
            altitude: "12,000 ft",
            difficulty: "Moderate",
            trekDistance: "46 km",
            startingPoint: "Rishikesh",
            startingPrice: ""
        },
        "tungnath-chandrashila": {
            bestTime: "All Seasons",
            duration: "3 Days",
            altitude: "13,123 ft",
            difficulty: "Easy",
            trekDistance: "12 km",
            startingPoint: "Rishikesh",
            startingPrice: ""
        },
        "valleyofflowers": {
            bestTime: "July to Early September",
            duration: "6 Days",
            altitude: "14,146 ft",
            difficulty: "Easy to Moderate",
            trekDistance: "40 km",
            startingPoint: "Rishikesh",
            startingPrice: ""
        },
        "hampta-pass-trek": {
            bestTime: "Mid June to Early September",
            duration: "5 Days",
            altitude: "14,074 ft",
            difficulty: "Moderate",
            trekDistance: "26 km",
            startingPoint: "Manali",
            startingPrice: ""
        },
        "kuari-pass": {
            bestTime: "All Seasons",
            duration: "6 Days",
            altitude: "12,139 ft",
            difficulty: "Easy to Moderate",
            trekDistance: "22 km",
            startingPoint: "Rishikesh",
            startingPrice: ""
        },
        "sar-pass": {
            bestTime: "April to May",
            duration: "5 Days",
            altitude: "13,800 ft",
            difficulty: "Moderate",
            trekDistance: "46 km",
            startingPoint: "Manali",
            startingPrice: ""
        },
        "kedarkantha": {
            bestTime: "Mid November to March",
            duration: "5 Days",
            altitude: "12,500 ft",
            difficulty: "Easy to Moderate",
            trekDistance: "18 km",
            startingPoint: "Dehradun",
            startingPrice: ""
        }
    };

  return (
        <>
    <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative h-[94vh] w-full">
                    <Image
                        src={locationData.image}
                        alt={`${locationData.title} Mountains`}
                        fill
                        className="object-cover"
                        priority
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
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        {["kasol-kheerganga", "manali-kasol", "jibhi-tirthan", "mcleodganj-triund"].includes(location.toLowerCase()) 
                                            ? "Trip Overview" 
                                            : "Trek Overview"}
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                                        {location.toLowerCase() === "kasol-kheerganga" && "Embark on a mesmerizing journey through the Parvati Valley, where the pristine Kheerganga trek awaits. This enchanting trail takes you through dense pine forests, alongside gushing streams, and past ancient temples. The highlight is the natural hot water spring at Kheerganga, where you can soak in therapeutic waters while surrounded by snow-capped peaks. Experience the unique blend of Israeli and Indian cultures in Kasol, known as 'Mini Israel of India', and witness the stunning views of the Parvati Valley. The trek offers a perfect mix of adventure, spirituality, and natural beauty, making it an ideal getaway for both beginners and experienced trekkers."}

                                        {location.toLowerCase() === "manali-kasol" && "Experience the perfect blend of adventure and tranquility on this journey through the heart of the Himalayas. Start in Manali, where ancient temples, vibrant markets, and the mighty Beas River create a magical atmosphere. The route takes you through the stunning Solang Valley, known for its adventure sports, and the picturesque Kullu Valley. As you reach Kasol, immerse yourself in its unique culture, where Israeli cafes and Indian traditions coexist harmoniously. The journey offers breathtaking views of snow-capped peaks, lush green valleys, and cascading waterfalls, making it an unforgettable experience for nature lovers and adventure seekers alike."}

                                        {location.toLowerCase() === "jibhi-tirthan" && "Discover the hidden gem of Himachal Pradesh, where the untouched beauty of Jibhi and Tirthan Valley awaits. This lesser-known paradise offers pristine landscapes, crystal-clear streams, and dense forests teeming with wildlife. The Tirthan River, known for its trout fishing, flows through the valley, creating a serene atmosphere. Experience the authentic village life, stay in traditional wooden houses, and witness the rich biodiversity of the Great Himalayan National Park. The valley's remote location ensures a peaceful escape from city life, while its natural beauty and cultural richness make it a perfect destination for nature enthusiasts and peace seekers."}

                                        {location.toLowerCase() === "kuari-pass" && "Embark on a legendary journey through the ancient trade route of Kuari Pass, offering panoramic views of the Garhwal Himalayas. This historic trail, once used by shepherds and traders, now serves as a gateway to some of the most spectacular mountain vistas in India. Witness the majestic peaks of Nanda Devi, Dronagiri, and Kamet as you traverse through dense oak and rhododendron forests. The trek takes you through charming villages, alpine meadows, and high-altitude passes, offering a perfect blend of natural beauty and cultural experiences. The highlight is the 360-degree view of the Himalayan range from the pass, making it one of the most rewarding treks in the region."}

                                        {location.toLowerCase() === "kedarkantha" && "Experience the perfect winter trek to Kedarkantha, where snow-covered trails and panoramic mountain views create a magical atmosphere. This relatively easy trek is ideal for beginners, yet offers the thrill of a high-altitude adventure. Starting from the quaint village of Sankri at 6,455 feet, the trail takes you through dense pine and oak forests, charming mountain villages, and pristine snow fields, leading to the summit at 12,500 feet.\n\nThe trek is famous for its 360-degree views of prominent Himalayan peaks including Swargarohini, Bandarpoonch, Black Peak, and Ranglana. The early morning summit climb rewards trekkers with one of the most spectacular sunrises in the Himalayas, as the first rays of sun paint the surrounding peaks in hues of gold and orange.\n\nWhat makes Kedarkantha special is its accessibility during winter months (December to April), when the entire trail transforms into a winter wonderland. The meadows of Juda Ka Talab, frozen in time under a thick blanket of snow, offer some of the most picturesque camping experiences. The ancient temple at the summit adds a spiritual touch to this adventure, with locals believing it to be the meditation spot of Lord Shiva and Goddess Parvati.\n\nThe trek also offers unique experiences like camping under the starlit sky in clearings surrounded by tall pine trees, walking on pristine snow while learning basic snow craft, and experiencing the warm hospitality of Himalayan villages. The gradual ascent and well-marked trails make it perfect for first-time trekkers, while the challenging summit climb and varying terrain keep it interesting for experienced hikers."}

                                        {location.toLowerCase() === "hampta-pass-trek" && "The Hampta Pass Trek is a dramatic crossover trek from the lush green Kullu Valley to the stark landscape of Lahaul. This unique trek offers a striking contrast of landscapes, from dense forests and meadows to barren mountains and glacial valleys. The highlight is the turquoise Chandratal Lake, known as the 'Moon Lake', surrounded by snow-capped peaks. Experience the thrill of crossing the 14,100-foot Hampta Pass, offering panoramic views of the surrounding mountains. The trek takes you through charming villages, alpine meadows, and high-altitude passes, making it one of the most diverse and rewarding treks in the Indian Himalayas."}

                                        {location.toLowerCase() === "valleyofflowers" && "Discover the enchanting Valley of Flowers, a UNESCO World Heritage Site, where nature paints a vibrant canvas of alpine flowers. This magical valley comes alive during monsoon, when hundreds of species of flowers bloom in a riot of colors. The trek takes you through dense forests, alongside gushing streams, and past ancient temples, leading to the flower-filled valley. Witness rare and endangered species of flowers, including the famous Brahma Kamal, while surrounded by snow-capped peaks. The valley's rich biodiversity and stunning natural beauty make it a paradise for nature lovers and photographers."}

                                        {location.toLowerCase() === "tungnath-chandrashila" && "Embark on a spiritual journey to the highest Shiva temple in the world, Tungnath, and continue to the summit of Chandrashila. This sacred trek combines religious significance with breathtaking natural beauty. The trail takes you through dense forests, past ancient temples, and up to the 12,073-foot Tungnath temple, one of the Panch Kedar temples. The highlight is the sunrise view from Chandrashila peak, offering 360-degree views of the mighty Himalayan ranges, including Nanda Devi, Trishul, and Chaukhamba. The trek's moderate difficulty and rich cultural heritage make it perfect for both spiritual seekers and adventure enthusiasts."}

                                        {location.toLowerCase() === "mcleodganj-triund" && "Experience the perfect blend of Tibetan culture and natural beauty on this journey from McLeodganj to Triund. Start in the vibrant town of McLeodganj, home to the Dalai Lama and a rich Tibetan culture. The trek takes you through dense forests of oak and rhododendron, offering stunning views of the Dhauladhar range. The highlight is the Triund hill, where you can witness breathtaking sunsets over the Kangra Valley. Experience the unique blend of Tibetan and Indian cultures, visit ancient monasteries, and enjoy the peaceful atmosphere of this spiritual haven."}

                                        {location.toLowerCase() === "nagtibba" && "Discover the perfect weekend getaway to Nag Tibba, the highest peak in the lesser Himalayan region of Uttarakhand. This beginner-friendly trek offers stunning views of the Garhwal Himalayas, including Bandarpoonch, Swargarohini, and Srikanth peaks. The trail takes you through dense forests of oak and rhododendron, charming villages, and alpine meadows. Experience the rich culture of the local Garhwali people and witness the traditional way of life in the mountains. The highlight is the panoramic view from the summit, offering 360-degree views of the surrounding peaks."}
                                    </p>
                                </div>

                                <div className="md:w-1/3">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                            {["kasol-kheerganga", "manali-kasol", "jibhi-tirthan", "mcleodganj-triund"].includes(location.toLowerCase()) 
                                                ? "Trip Highlights" 
                                                : "Trek Highlights"}
                                        </h3>
                                        <div className="space-y-4">
                                            {location.toLowerCase() === "kasol-kheerganga" && [
                                                "Natural hot water springs at Kheerganga",
                                                "Unique blend of Israeli and Indian cultures",
                                                "Stunning views of Parvati Valley",
                                                "Dense pine forests and gushing streams",
                                                "Ancient temples and spiritual sites",
                                                "Perfect for beginners and experienced trekkers"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}

                                            {location.toLowerCase() === "manali-kasol" && [
                                                "Ancient temples and vibrant markets",
                                                "Adventure sports in Solang Valley",
                                                "Picturesque Kullu Valley views",
                                                "Israeli cafes and cultural fusion",
                                                "Snow-capped peaks and waterfalls",
                                                "Perfect blend of adventure and culture"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                        </div>
                                            ))}

                                            {location.toLowerCase() === "jibhi-tirthan" && [
                                                "Pristine landscapes and crystal-clear streams",
                                                "Trout fishing in Tirthan River",
                                                "Traditional wooden houses",
                                                "Great Himalayan National Park",
                                                "Rich biodiversity and wildlife",
                                                "Authentic village life experience"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                    </div>
                                            ))}

                                            {location.toLowerCase() === "kuari-pass" && [
                                                "Ancient trade route history",
                                                "Panoramic views of Garhwal Himalayas",
                                                "Views of Nanda Devi and Dronagiri",
                                                "Dense oak and rhododendron forests",
                                                "Charming mountain villages",
                                                "360-degree Himalayan views"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
    </div>
                                            ))}

                                            {location.toLowerCase() === "kedarkantha" && [
                                                "Perfect winter trek experience",
                                                "Snow-covered trails and peaks",
                                                "Stunning sunrise views",
                                                "Camping under starlit sky",
                                                "Views of Swargarohini and Bandarpoonch",
                                                "Ideal for beginners"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}

                                            {location.toLowerCase() === "hampta-pass-trek" && [
                                                "Dramatic landscape changes",
                                                "Chandratal Lake views",
                                                "High-altitude pass crossing",
                                                "Panoramic mountain views",
                                                "Alpine meadows and villages",
                                                "Diverse trekking experience"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}

                                            {location.toLowerCase() === "valleyofflowers" && [
                                                "UNESCO World Heritage Site",
                                                "Hundreds of flower species",
                                                "Rare Brahma Kamal flowers",
                                                "Snow-capped peak views",
                                                "Rich biodiversity",
                                                "Perfect for photography"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}

                                            {location.toLowerCase() === "tungnath-chandrashila" && [
                                                "Highest Shiva temple in the world",
                                                "Panch Kedar temple visit",
                                                "360-degree Himalayan views",
                                                "Spiritual significance",
                                                "Sunrise views from Chandrashila",
                                                "Rich cultural heritage"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}

                                            {location.toLowerCase() === "mcleodganj-triund" && [
                                                "Tibetan culture experience",
                                                "Dalai Lama's residence",
                                                "Dhauladhar range views",
                                                "Ancient monasteries",
                                                "Sunset views from Triund",
                                                "Cultural fusion experience"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}

                                            {location.toLowerCase() === "nagtibba" && [
                                                "Highest peak in lesser Himalayas",
                                                "Panoramic Garhwal views",
                                                "Dense oak forests",
                                                "Traditional village life",
                                                "360-degree summit views",
                                                "Perfect weekend getaway"
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
                                {["kasol-kheerganga", "manali-kasol", "jibhi-tirthan", "mcleodganj-triund"].includes(location.toLowerCase()) ? (
                                    <>
                                        <div className="bg-white rounded-xl shadow-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Starting Point</h3>
                                            <p className="text-gray-600">{locationData.startingPoint}</p>
                                        </div>
                                        <div className="bg-white rounded-xl shadow-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Starting Price</h3>
                                            <p className="text-gray-600">{locationData.startingPrice}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="bg-white rounded-xl shadow-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Difficulty Level</h3>
                                            <p className="text-gray-600">{locationData.difficulty}</p>
                                        </div>
                                        <div className="bg-white rounded-xl shadow-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trek Distance</h3>
                                            <p className="text-gray-600">{locationData.trekDistance}</p>
                                        </div>
                                    </>
                                )}
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
                            {(() => {
                                const itinerary: (ItineraryDay | GalleryImage)[] = location.toLowerCase() === "hampta-pass-trek" ? [
                                    {
                                        day: "Day 01",
                                        title: "Manali to Chika via Jobra",
                                        details: [
                                            "Drive Distance: 15 km | Drive Duration: 2 hours | Trek Distance 2.5 Kms, 1-2 hrs",
                                            "Reach Manali. The trekkers will be picked up from Manali bus stand by 8:00 AM. Manali is well connected to Delhi and other cities through road. Overnight Volvos and buses are available.",
                                            "25 km ride to Jobra in a cab from Manali.",
                                            "An easy 3 km trek to Chika campsite from Jobra.",
                                            "Arrival at the Chika campsite followed by evening refreshments.",
                                            "A quick introduction with team members and fellow trekkers at the camp site",
                                            "Dinner and rest at the campsite."
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Chika to Balu Ka Ghera",
                                        details: [
                                            "Trek Distance: 6.5 km | Trek Duration: 4 hours | Altitude Gain: 11005 ft to 12220 ft",
                                            "Departure to Balu Ka Ghera from Chika after the breakfast.",
                                            "Moderate climb till Jwara followed by level walks to Balu Ka Ghera Campsite.",
                                            "The trail to Balu Ka Ghera will pass through beautiful valleys offering some stunning landscapes in addition to river crossing at Jwara.",
                                            "Arrival at the campsite and refreshments.",
                                            "Hot lunch at the campsite.",
                                            "Evening acclimatization walk to the nearby areas.",
                                            "Dinner and rest at the campsite."
                                        ]
                                    },
                                    {
                                        day: "Day 03",
                                        title: "Balu Ka Ghera to Hampta Pass",
                                        details: [
                                            "Trek Distance: 8 km | Trek Duration: 9-10 hours | Altitude Gain: 12220 ft to 14,065 ft",
                                            "Trek to Hampta Pass after the breakfast.",
                                            "A steep climb to Hampta Pass with some boulder hopping in between.",
                                            "Keep sufficient water to the summit climb for hydration.",
                                            "You will observe snow clad mountains and glaciers on the way to Hampta Pass.",
                                            "Packed lunch midway.",
                                            "A 1.5 hrs of tricky descend to Shea Goru from Hampta Pass.",
                                            "Arrival at the Shea Goru campsite with evening refreshments.",
                                            "Evening walks on the banks of river and witnessing the Spiti Valley.",
                                            "Dinner and overnight stay at the camps."
                                        ]
                                    },
                                    {
                                        day: "Day 04",
                                        title: "Shea Goru to Chatru, Drive to Chandratal",
                                        details: [
                                            "5 Km Trek, 50 km Drive | 11-12 hours",
                                            "Departure from Shea Goru campsite to Chatru after breakfast.",
                                            "7 km easy descend trek to Chatru and drive to Chandratal",
                                            "The drive from Chattru to Chandratal takes around 4-5 hours",
                                            "Reach Chandratal and enjoy the beauty of this high altitude lake",
                                            "After exploring the lake, we drive back to Chattru through the same route.",
                                            "Dinner and overnight stay in tents."
                                        ]
                                    },
                                    {
                                        day: "Day 05",
                                        title: "Chatru to Manali",
                                        details: [
                                            "Drive Distance: 64 km | Drive Duration: 5 hours",
                                            "Departure from Chattru after breakfast",
                                            "Arrival in Manali by evening"
                                        ]
                                    }
                                ] : location.toLowerCase() === "jibhi-tirthan" ? [
                                    {
                                        day: "Day 0",
                                        title: "Departure",
                                        details: [
                                            "Departure in the evening.",
                                            "The group will assemble at the pickup point.",
                                            "Afterward, you'll get a small briefing from the Trip Leader(s)",
                                            "Halt for dinner in between(not on us)."
                                        ]
                                    },
                                    {
                                        day: "Day 1",
                                        title: "Jibhi",
                                        details: [
                                            "Reach in the morning.",
                                            "Check-in at the stay. Relax for some time as you must be tired after a long journey.",
                                            "By noon leave for Jibhi Waterfall & Mini Thailand. Spend some memorable time there.",
                                            "Enjoy the mesmerizing view of the valley and go for a riverside walk.",
                                            "Enjoy a bonfire with light music.",
                                            "Dinner and overnight stay."
                                        ]
                                    },
                                    {
                                        day: "Day 2",
                                        title: "Jalori Pass - Serolsar Lake",
                                        details: [
                                            "Wake up early and enjoy the beautiful sunrise.",
                                            "Have your breakfast and leave for Jalori Pass.",
                                            "Start your trek from Jalori pass to Serolsar lake (4KM trek) via 360deg viewpoint (trek depends upon weather conditions).",
                                            "Reach back, and enjoy bonfire with light music.",
                                            "Dinner and overnight stay."
                                        ]
                                    },
                                    {
                                        day: "Day 3",
                                        title: "Departure from Tirthan",
                                        details: [
                                            "Wake up and have your breakfast.",
                                            "Check out and leave for the Tirthan Valley Choiee waterfall trek.",
                                            "Later depart with lots of breathtaking views and everlasting memories of Tirthan Valley.",
                                            "Drive towards Kullu and enjoy river rafting (if time allows).",
                                            "Reach Delhi / Chandigarh the next day in the morning."
                                        ]
                                    }
                                ] : location.toLowerCase() === "manali-kasol" ? [
                                    {
                                        day: "Day 0",
                                        title: "Departure",
                                        details: [
                                            "The group assembles at the pick-up point.",
                                            "We'll meet the team captains and a small tour briefing session will be conducted.",
                                            "After which, we'll head out on an overnight journey to Manali."
                                        ]
                                    },
                                    {
                                        day: "Day 1",
                                        title: "Manali",
                                        details: [
                                            "Reach Manali in the morning.",
                                            "Check-in at the hotel, and freshen up.",
                                            "Leave for Manali for local sightseeing at Hadimba temple, old Manali, and Mall Road.",
                                            "Reach back to the hotel.",
                                            "Dinner will be served alongside a bonfire and light music. Overnight stay at the hotel."
                                        ]
                                    },
                                    {
                                        day: "Day 2",
                                        title: "Solang Valley | Sissu | Atal Tunnel",
                                        details: [
                                            "After breakfast, leave for Solang Valley, Sissu, and Atal Tunnel sightseeing.",
                                            "En route, we will cover Solang Valley. Enjoy the mesmerizing views from Sissu Valley.",
                                            "Reach back to the hotel in the evening.",
                                            "Dinner, and overnight stay at the hotel."
                                        ]
                                    },
                                    {
                                        day: "Day 3",
                                        title: "Depart to Kasol | Kasol Stay",
                                        details: [
                                            "Wake up early, have your breakfast & check out.",
                                            "Leave for Kasol, via Kullu where you can enjoy Beas river rafting and Paragliding if activities are on(at your expense).",
                                            "Reach Kasol in the evening, and check in to the camps.",
                                            "Dinner will be served alongside a bonfire and light music.",
                                            "Overnight stay at Kasol."
                                        ]
                                    },
                                    {
                                        day: "Day 4",
                                        title: "Kasol Sight Seeing & Departure",
                                        details: [
                                            "Wake up early and have your breakfast & check out.",
                                            "Leave for Kasol, Manikaran sightseeing.",
                                            "Visit Kasol market and cafes, and also visit Chalal village (3kms riverside trail both ways).",
                                            "Later we will visit the Manikaran Sahib Gurudwara famous for its hot water spring.",
                                            "Post this, departure in the evening."
                                        ]
                                    }
                                ] : location.toLowerCase() === "tungnath-chandrashila" ? [
                                    {
                                        day: "Day 01",
                                        title: "Haridwar to Chopta",
                                        details: [
                                            "240 km Drive | Altitude: 7874 ft",
                                            "Pick up from Haridwar at 7:00 AM.",
                                            "Drive to Chopta from Rishikesh via Devprayag, Srinagar, Rudraprayag.",
                                            "Arrival at Chopta and accommodation will be in a Deluxe Camps",
                                            "Dinner and rest at camps followed by a quick introduction and briefing session with the tour leader"
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Trek to Tungnath",
                                        details: [
                                            "Trek distance: 5.5 Km | Altitude: 7874 ft to 13123 ft",
                                            "Trek to Tungnath Temple after breakfast.",
                                            "The trail is of easy to moderate ascend. It generally takes 3-4 hours to reach the temple",
                                            "Ascend to Chandrashila Summit. Packed lunch at summit.",
                                            "Descend down to Chopta by evening. Enjoy the beautiful sunset from Chopta",
                                            "Overnight stay in the camps."
                                        ]
                                    },
                                    {
                                        day: "Day 03",
                                        title: "Drive to Sari village and trek to Deoriyatal",
                                        details: [
                                            "Leave early from Chopta and drive to Sari village",
                                            "hike for 2 hours towards Deoriyatal",
                                            "Enjoy the reflection of mighty Chaukhamba peak on the lake.",
                                            "Descend down to Sari village by lunch",
                                            "Drive back to haridwar.",
                                            "Expected time of arrival 11:00 PM"
                                        ]
                                    }
                                ] : location.toLowerCase() === "nagtibba" ? [
                                    {
                                        day: "Day 01",
                                        title: "Dehradun to Pantwari village and trek to Base Camp",
                                        details: [
                                            "Altitude: 2400 metres, 90 km drive and 4 km trek",
                                            "Pick up from Prince chowk near Dehradun Railway station at 6:00 AM.",
                                            "A 90 km road ride to Pantwari village from Dehradun crossing the city of Muss0orie & Kempty Falls.",
                                            "Breakfast will be provided in the road side inns. The meal cost during the course of travel will be paid by the individual.",
                                            "Arrival at Pantwari village, followed by lunch at the village.",
                                            "A 4 km trek gradual ascent to the campsite.",
                                            "Evening snacks and refreshments in the evening.",
                                            "Dinner at the campsite."
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Base camp to Nag Tibba and back to Pantwari to Dehradun",
                                        details: [
                                            "Altitude: 3022 metres, 12 km trek and 90 km drive",
                                            "Early excursion to Nag Tibba top at 5 a.m.",
                                            "A 4 km ascend trek to summit of medium grade.",
                                            "Carry 1 litre of water individually as the trail is deprived of water streams.",
                                            "Reach at Nag Tibba top and stay there for a while.",
                                            "Excursion back to Pantwari village from the top via camp1.",
                                            "Lunch at Pantwari village followed by 90 km drive back to Dehradun.",
                                            "Expected time of arrival in Dehradun 9.p.m."
                                        ]
                                    }
                                ] : location.toLowerCase() === "mcleodganj-triund" ? [
                                    {
                                        day: "Day 1",
                                        title: "Mcleodganj Sightseeing",
                                        details: [
                                            "Arrive at Mcleodganj.",
                                            "After a wholesome breakfast in the Hotel, you will drive to Mcleodganj Square.",
                                            "Our Trip Captain will take you to Local markets, Cafés, Namgyal Monastery and Bhagsu Waterfall.",
                                            "Return to the hotel in the evening.",
                                            "Dinner will be served."
                                        ]
                                    },
                                    {
                                        day: "Day 2",
                                        title: "Triund Trek",
                                        details: [
                                            "After having breakfast, our trip captain will take you to Shiva Cafe and begin the Triund Trek",
                                            "The total distance of the Triund trek is approximately 9 kilometres (5.6 miles).",
                                            "The trek starts from the Gallu Devi Temple Dharamkot Triund Hill.",
                                            "When facing north, you will see the magnificent Dhauladhar Mountains across the Triund Valley and the beautiful town of Mcleodganj.",
                                            "Enjoy the sunset at Triund Top and have dinner in your camps.",
                                            "A bonfire will be lit to end the day on a great note."
                                        ]
                                    },
                                    {
                                        day: "Day 3",
                                        title: "Trek Down | Dharamshala Stadium",
                                        details: [
                                            "Wake up to a mesmerizing sunrise in the mountains and feast on a fulfilling breakfast.",
                                            "Later, Reach back to the start point(at around 12:30 PM).",
                                            "After the trek, have some rest, then we will leave for sightseeing of Dharamshala HPCA Stadium.",
                                            "Spend some leisure time there.",
                                            "Later in the evening, we'll depart for Chandigarh & Delhi."
                                        ]
                                    }
                                ] : location.toLowerCase() === "kasol-kheerganga" ? [
                                    {
                                        day: "Day 0",
                                        title: "Departure",
                                        details: [
                                            "Departure in the evening to Kasol.",
                                            "The group will assemble at the pickup point.",
                                            "Afterwards, You'll be introduced to the team captains and the whole group.",
                                            "Halt for dinner in between(not on us)."
                                        ]
                                    },
                                    {
                                        day: "Day 1",
                                        title: "Kasol",
                                        details: [
                                            "Reach Kasol in the morning.",
                                            "Freshen up and relax for some time as you must be tired from the overnight journey.",
                                            "Post this, we will proceed for Kasol sightseeing and visit the Kasol flea market, and nearby cafes.",
                                            "You can also explore Chalal village known as Hippies Den (A small riverside trail of 3 km both ways).",
                                            "Reach back to stay. A bonfire with light music will be set up.",
                                            "Dinner will be served. Overnight stay in Kasol."
                                        ]
                                    },
                                    {
                                        day: "Day 2",
                                        title: "Kheerganga Trek",
                                        details: [
                                            "Wake up early in the morning and have your breakfast.",
                                            "Check out. Then we will leave for Barsheni (the base point for the Kheerganga trek).",
                                            "Reach Kheerganga top(5-6 hours trek from Barsheni) in the evening.",
                                            "Hot dinner will be served. Overnight stay at the campsite."
                                        ]
                                    },
                                    {
                                        day: "Day 3",
                                        title: "Kheerganga to Manikaran to Departure",
                                        details: [
                                            "Wake up early in the morning and go for a hot water spring bath.",
                                            "Have your breakfast. Then start trekking down to Barsheni.",
                                            "Reach Barsheni in the evening.",
                                            "Transfer to Manikaran. In Manikaran, visit the famous Manikaran Sahib Gurudwara.",
                                            "Departure in the evening. Reach the next day."
                                        ]
                                    }
                                ] : location.toLowerCase() === "valleyofflowers" ? [
                                    {
                                        day: "Day 1",
                                        title: "Rishikesh/Haridwar to Govindghat/Joshimath",
                                        details: [
                                            "Drive Distance: 255 km | Drive Duration: 11-12 hours",
                                            "The travellers will be picked up from Rishikesh at 7:00 AM from where the journey will begin. Rishikesh is well connected with Delhi through railway and road route. Overnight Buses and Trains are available.",
                                            "Our Journey will start from Rishikesh, Devprayag (where the mighty Alaknanda and Bhagirathi river meet to form the the Ganges). Along the journey you will also come across other Prayag and will reach Joshimath/Govindghat by the end of the day.",
                                            "Drop off your bags at the Hotel and enjoy the mighty sight of the Garhwal Himalayas.",
                                            "Dinner at the Hotel"
                                        ]
                                    },
                                    {
                                        day: "Day 2",
                                        title: "Govindghat/Joshimath to Ghangaria Via Poolna",
                                        details: [
                                            "Trek: 9 km | Trek Duration: 5-6 hours | Altitude gain: 6,215 ft to 10,520 ft",
                                            "Trek to Ghangaria via Poolna after the breakfast",
                                            "A 4 km drive to Poolna, and then an easy ascend to Ghangaria",
                                            "Midway Lunch",
                                            "Reach Ghangaria after the climb and drop off your bags at the Hotel",
                                            "Evening Tea and Snacks",
                                            "Dinner at the Hotel"
                                        ]
                                    },
                                    {
                                        day: "Day 3",
                                        title: "Ghangaria to Valley of Flowers",
                                        details: [
                                            "Trek distance: 3.7 km each way | Trek Duration: 6 hours | Altitude gain: 10,520 ft to 11,550 ft",
                                            "Gear up today for Valley Of Flowers, the World Heritage Site declared by UNESCO.",
                                            "After Breakfast head towards the Valley walk amidst the beautiful and Multi Variety of Flowers that will surely bound to ease away all the tiredness of the day.",
                                            "After taking pictures and packed lunch head back towards Ghangaria.",
                                            "Enjoy your Dinner and stay at the Hotel as your trek has been completed"
                                        ]
                                    },
                                    {
                                        day: "Day 4",
                                        title: "Ghangaria to HemKund Sahib",
                                        details: [
                                            "Trek distance: 6 km each way | Trek Duration: 8-9 hours | Altitude gain: 10,520 ft to 14,107 ft",
                                            "Trek to Hemkund Sahib after the breakfast. The trail being easy to moderate in nature.",
                                            "En-route to the Gurudwara you will witness numerous waterfalls, Flowers, Beautiful Snowcapped mountains, Glaciers that will surely mesmerize you. Another Important aspect is the Cleanliness of the Pilgrimage despite many travelers which is a point to learn from the Sikh Community.",
                                            "Arrival at the Gurudwara in the afternoon. Devote yourself in the peaceful aura of the Gurudwara and take a dip in the Glacial lake. Also do visit the Lokpal Temple located in the vicinity of the Gurudwara.",
                                            "Descend back to Ghangaria from the Gurudwara before 2 p.m. due to unpredictable weather conditions.",
                                            "Return to Ghangaria and have your Evening Snacks",
                                            "Early Dinner at the Hotel"
                                        ]
                                    },
                                    {
                                        day: "Day 5",
                                        title: "Ghangaria to Joshimath via govindghat",
                                        details: [
                                            "Trek distance: 9 km | Trek Duration: 4 hours | Altitude loss: 10,520 ft to 6,215 ft",
                                            "After the Breakfast descend down to Govindghat. 10 km Descent normally takes 4 hours",
                                            "Drive to Joshimath",
                                            "Arrival at Hotel in Joshimath",
                                            "Hot Lunch",
                                            "Dinner Followed by rest"
                                        ]
                                    },
                                    {
                                        day: "Day 6",
                                        title: "Joshimath to Rishikesh/Haridwar",
                                        details: [
                                            "Drive Distance: 255 km | Drive Duration: 9-10 hours",
                                            "After Breakfast head back towards Rishikesh following the same route.",
                                            "Arrival at Dehradun by 10 PM. So you may plan your further journey"
                                        ]
                                    }
                                ] : location.toLowerCase() === "tungnath-chandrashila" ? [
                                    {
                                        day: "Day 01",
                                        title: "Haridwar to Chopta",
                                        details: [
                                            "240 km Drive | Altitude: 7874 ft",
                                            "Pick up from Haridwar at 7:00 AM.",
                                            "Drive to Chopta from Rishikesh via Devprayag, Srinagar, Rudraprayag.",
                                            "Arrival at Chopta and accommodation will be in a Deluxe Camps",
                                            "Dinner and rest at camps followed by a quick introduction and briefing session with the tour leader"
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Trek to Tungnath",
                                        details: [
                                            "Trek distance: 5.5 Km | Altitude: 7874 ft to 13123 ft",
                                            "Trek to Tungnath Temple after breakfast.",
                                            "The trail is of easy to moderate ascend. It generally takes 3-4 hours to reach the temple",
                                            "Ascend to Chandrashila Summit. Packed lunch at summit.",
                                            "Descend down to Chopta by evening. Enjoy the beautiful sunset from Chopta",
                                            "Overnight stay in the camps."
                                        ]
                                    },
                                    {
                                        day: "Day 03",
                                        title: "Drive to Sari village and trek to Deoriyatal",
                                        details: [
                                            "Leave early from Chopta and drive to Sari village",
                                            "hike for 2 hours towards Deoriyatal",
                                            "Enjoy the reflection of mighty Chaukhamba peak on the lake.",
                                            "Descend down to Sari village by lunch",
                                            "Drive back to haridwar.",
                                            "Expected time of arrival 11:00 PM"
                                        ]
                                    }
                                ] : location.toLowerCase() === "nagtibba" ? [
                                    {
                                        day: "Day 01",
                                        title: "Dehradun to Pantwari village and trek to Base Camp",
                                        details: [
                                            "Altitude: 2400 metres, 90 km drive and 4 km trek",
                                            "Pick up from Prince chowk near Dehradun Railway station at 6:00 AM.",
                                            "A 90 km road ride to Pantwari village from Dehradun crossing the city of Muss0orie & Kempty Falls.",
                                            "Breakfast will be provided in the road side inns. The meal cost during the course of travel will be paid by the individual.",
                                            "Arrival at Pantwari village, followed by lunch at the village.",
                                            "A 4 km trek gradual ascent to the campsite.",
                                            "Evening snacks and refreshments in the evening.",
                                            "Dinner at the campsite."
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Base camp to Nag Tibba and back to Pantwari to Dehradun",
                                        details: [
                                            "Altitude: 3022 metres, 12 km trek and 90 km drive",
                                            "Early excursion to Nag Tibba top at 5 a.m.",
                                            "A 4 km ascend trek to summit of medium grade.",
                                            "Carry 1 litre of water individually as the trail is deprived of water streams.",
                                            "Reach at Nag Tibba top and stay there for a while.",
                                            "Excursion back to Pantwari village from the top via camp1.",
                                            "Lunch at Pantwari village followed by 90 km drive back to Dehradun.",
                                            "Expected time of arrival in Dehradun 9.p.m."
                                        ]
                                    }
                                ] : location.toLowerCase() === "mcleodganj-triund" ? [
                                    {
                                        day: "Day 1",
                                        title: "Mcleodganj Sightseeing",
                                        details: [
                                            "Arrive at Mcleodganj.",
                                            "After a wholesome breakfast in the Hotel, you will drive to Mcleodganj Square.",
                                            "Our Trip Captain will take you to Local markets, Cafés, Namgyal Monastery and Bhagsu Waterfall.",
                                            "Return to the hotel in the evening.",
                                            "Dinner will be served."
                                        ]
                                    },
                                    {
                                        day: "Day 2",
                                        title: "Triund Trek",
                                        details: [
                                            "After having breakfast, our trip captain will take you to Shiva Cafe and begin the Triund Trek",
                                            "The total distance of the Triund trek is approximately 9 kilometres (5.6 miles).",
                                            "The trek starts from the Gallu Devi Temple Dharamkot Triund Hill.",
                                            "When facing north, you will see the magnificent Dhauladhar Mountains across the Triund Valley and the beautiful town of Mcleodganj.",
                                            "Enjoy the sunset at Triund Top and have dinner in your camps.",
                                            "A bonfire will be lit to end the day on a great note."
                                        ]
                                    },
                                    {
                                        day: "Day 3",
                                        title: "Trek Down | Dharamshala Stadium",
                                        details: [
                                            "Wake up to a mesmerizing sunrise in the mountains and feast on a fulfilling breakfast.",
                                            "Later, Reach back to the start point(at around 12:30 PM).",
                                            "After the trek, have some rest, then we will leave for sightseeing of Dharamshala HPCA Stadium.",
                                            "Spend some leisure time there.",
                                            "Later in the evening, we'll depart for Chandigarh & Delhi."
                                        ]
                                    }
                                ] : location.toLowerCase() === "kuari-pass" ? [
                                    {
                                        day: "Day 01",
                                        title: "Dehradun to Pipalkoti/Joshimath",
                                        details: [
                                            "252 km drive, 11-12 hours",
                                            "Pick up from Rishikesh at 7:00 AM",
                                            "Drive to Pipalkoti/Joshimath from Rishikesh via Devprayag, Srinagar, Rudraprayag",
                                            "Breakfast and lunch during the travel will be provided in the road side inns and will be paid by the individuals",
                                            "Arrival at Pipalkoti, accommodation will be in a guest house/hotel",
                                            "Dinner and rest at the guest house/hotel followed by a quick introduction and briefing session with the trek leader and fellow travelers"
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Pipalkoti/Joshimath to Gulling",
                                        details: [
                                            "Trek Distance: 7 km | Duration: 5-6 hours | Altitude gain: 6,150 ft to 9000 ft",
                                            "Leave for Tugasi village road head after breakfast",
                                            "Trek to guling camp site",
                                            "Arrival at campsite around lunch time",
                                            "Acclimatization walk in evening",
                                            "Evening snacks and Dinner at camp site"
                                        ]
                                    },
                                    {
                                        day: "Day 03",
                                        title: "Gulling to Khulara camp site",
                                        details: [
                                            "Trek Distance: 6 km | Duration: 5-6 hours | Altitude gain: 9000 ft to 11800 ft",
                                            "Breakfast in Guling camp site",
                                            "Trek to Khulara camp after breakfast",
                                            "Arrival in camp followed by lunch and acclimatisation walk",
                                            "Dinner followed by rest"
                                        ]
                                    },
                                    {
                                        day: "Day 04",
                                        title: "Trek to Kuari Pass and descend to Tali Camp",
                                        details: [
                                            "Trek Distance: 11 km | Duration: 8-10 hours | Altitude gain: 11800 ft to 12500 ft",
                                            "This is the summit day, leave early to Kuari Pass after breakfast",
                                            "Return to Tali Camp site in evening"
                                        ]
                                    },
                                    {
                                        day: "Day 05",
                                        title: "Descend to Tugasi/Dhak and Drive to Pipalkoti/Joshimath",
                                        details: [
                                            "After breakfast leave for Rishikesh",
                                            "Expected time of arrival in Rishikesh 7:00 PM"
                                        ]
                                    },
                                    {
                                        day: "Day 06",
                                        title: "Pipalkoti/Joshimath to Rishikesh",
                                        details: [
                                            "252 km drive, 10-11 hours",
                                            "After breakfast, start the journey back to Rishikesh",
                                            "Arrival in Rishikesh by evening"
                                        ]
                                    }
                                ] : location.toLowerCase() === "kedarkantha" ? [
                                    {
                                        day: "Day 01",
                                        title: "Dehradun to Kedarkantha",
                                        details: [
                                            "240 km drive, 11-12 hours",
                                            "Pick up from Haridwar at 7:00 AM",
                                            "Drive to Kedarkantha from Rishikesh via Devprayag, Srinagar, Rudraprayag",
                                            "Breakfast and lunch during the travel will be provided in the road side inns and will be paid by the individuals",
                                            "Arrival at Kedarkantha, accommodation will be in a guest house/hotel",
                                            "Dinner and rest at the guest house/hotel followed by a quick introduction and briefing session with the trek leader and fellow travelers"
                                        ]
                                    },
                                    {
                                        day: "Day 02",
                                        title: "Kedarkantha to Kedarkantha Base Camp",
                                        details: [
                                            "Trek Distance: 12 km | Duration: 6-7 hours | Altitude gain: 1,500 ft to 2,000 ft",
                                            "Leave for Kedarkantha Base Camp after breakfast",
                                            "Trek to Kedarkantha Base Camp",
                                            "Arrival at campsite around lunch time",
                                            "Acclimatization walk in evening",
                                            "Evening snacks and Dinner at camp site"
                                        ]
                                    },
                                    {
                                        day: "Day 03",
                                        title: "Kedarkantha Base Camp to Kedarkantha Summit",
                                        details: [
                                            "Trek Distance: 6 km | Duration: 4-5 hours | Altitude gain: 1,000 ft to 1,500 ft",
                                            "This is the summit day, leave early to Kedarkantha Summit after breakfast",
                                            "Return to Kedarkantha Base Camp in evening"
                                        ]
                                    },
                                    {
                                        day: "Day 04",
                                        title: "Descend to Kedarkantha Base Camp",
                                        details: [
                                            "Trek Distance: 12 km | Duration: 6-7 hours | Altitude loss: 1,500 ft to 2,000 ft",
                                            "After breakfast, start the trek to Kedarkantha Base Camp",
                                            "Return to Kedarkantha Base Camp in evening"
                                        ]
                                    },
                                    {
                                        day: "Day 05",
                                        title: "Drive to Dehradun",
                                        details: [
                                            "Drive Distance: 240 km | Drive Duration: 11-12 hours",
                                            "After breakfast, start the drive back to Dehradun",
                                            "Arrival in Dehradun by evening"
                                        ]
                                    }
                                ] : locationData.gallery;

                                return itinerary.map((item, index) => {
                                    if ('day' in item) {
                                        const day = item as ItineraryDay;
                                        return (
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
                                                            {day.details.map((detail: string, i: number) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                                                        {detail}
                                                    </li>
            ))}
          </ul>
                                        </motion.div>
                                    )}
                                </div>
                                        );
                                    }
                                    return null;
                                });
                            })()}
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
                                            "Backpack (30-40 liters)",
                                            "Comfortable walking shoes",
                                            "Water bottle (1-2 liters)",
                                            "Basic first aid kit",
                                            "Power bank",
                                            "Camera"
                                        ]
                                    },
                                    {
                                        category: "Clothing",
                                        items: [
                                            "Light jacket",
                                            "Comfortable clothes",
                                            "Raincoat/umbrella",
                                            "Hat/cap",
                                            "Sunglasses",
                                            "Socks (2-3 pairs)"
                                        ]
                                    },
                                    {
                                        category: "Personal Care",
                                        items: [
                                            "Sunscreen",
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

                    {activeTab === "Itinerary" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {/* ... existing code ... */}

                            {/* Trek Inclusions */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trek Inclusions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                                        <ul className="space-y-3">
                                            {((): React.ReactElement[] => {
                                                const includedItems = location.toLowerCase() === "kasol-kheerganga" ? [
                                                    "All Meals (Veg only) during the trek",
                                                    "Comfortable accommodation in hotels/camps",
                                                    "Experienced and qualified guides",
                                                    "Friendly and supportive staff",
                                                    "All necessary permits and fees",
                                                    "Transportation as per itinerary",
                                                    "Medical Amenities – First Aid Kit, Oxygen Support",
                                                    "Sanitised and hygienic accommodations",
                                                    "Basic mountaineering equipment"
                                                ] : location.toLowerCase() === "mcleodganj-triund" ? [
                                                    "All Meals (Veg only) during the trek",
                                                    "Comfortable tents (Triple/Double Sharing)",
                                                    "Experienced trek leaders",
                                                    "Local guides and porters",
                                                    "All necessary permits",
                                                    "Transportation from McLeodganj",
                                                    "First Aid Kit and basic medical support",
                                                    "Camping equipment",
                                                    "Evening bonfire (subject to weather)"
                                                ] : location.toLowerCase() === "jibhi-tirthan" ? [
                                                    "All Meals (Veg only) during the stay",
                                                    "Comfortable homestay accommodation",
                                                    "Local guide for treks",
                                                    "All sightseeing transfers",
                                                    "Permits for Great Himalayan National Park",
                                                    "Transportation as per itinerary",
                                                    "Basic medical support",
                                                    "Evening bonfire",
                                                    "Local experiences and activities"
                                                ] : location.toLowerCase() === "nagtibba" ? [
                                                    "All Meals (Veg only) during the trek",
                                                    "Camping equipment (tents, sleeping bags)",
                                                    "Professional trek leaders",
                                                    "Support staff and porters",
                                                    "All permits and fees",
                                                    "Transportation from Dehradun",
                                                    "First aid and medical support",
                                                    "Camping charges",
                                                    "Basic mountaineering gear"
                                                ] : location.toLowerCase() === "valleyofflowers" ? [
                                                    "All Meals (Veg only) during the trek",
                                                    "Guesthouse/Hotel accommodation",
                                                    "Expert trek guides",
                                                    "Support staff and porters",
                                                    "All necessary permits",
                                                    "Transportation from Rishikesh",
                                                    "Medical support and oxygen",
                                                    "Camping equipment where needed",
                                                    "Park entry fees"
                                                ] : location.toLowerCase() === "hampta-pass-trek" ? [
                                                    "All Meals (Veg only) during the trek",
                                                    "Quality camping equipment",
                                                    "Experienced trek leaders",
                                                    "Support staff and porters",
                                                    "All permits and fees",
                                                    "Transportation from Manali",
                                                    "Medical support and oxygen",
                                                    "Technical equipment",
                                                    "Camping charges"
                                                ] : [
                                                    "All Meals (Veg only) during the journey",
                                                    "Comfortable accommodation",
                                                    "Experienced guides",
                                                    "Support staff",
                                                    "Necessary permits",
                                                    "Transportation",
                                                    "Basic medical support",
                                                    "Equipment (if needed)",
                                                    "Local assistance"
                                                ];

                                                return includedItems.map((item, i) => (
                                                    <li key={i} className="flex items-start space-x-3">
                                                        <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ));
                                            })()}
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Not Included</h4>
                                        <ul className="space-y-3">
                                            {((): React.ReactElement[] => {
                                                const excludedItems = location.toLowerCase() === "kasol-kheerganga" ? [
                                                    "Personal expenses",
                                                    "Any kind of insurance",
                                                    "Anything not mentioned in inclusions",
                                                    "Tips to staff",
                                                    "Cost of any emergency evacuation",
                                                    "Additional stay due to bad weather",
                                                    "Personal trekking equipment"
                                                ] : location.toLowerCase() === "mcleodganj-triund" ? [
                                                    "Personal expenses",
                                                    "Travel insurance",
                                                    "Items not mentioned in inclusions",
                                                    "Staff tips",
                                                    "Emergency evacuation costs",
                                                    "Extra stay costs",
                                                    "Personal gear and equipment"
                                                ] : location.toLowerCase() === "jibhi-tirthan" ? [
                                                    "Personal expenses",
                                                    "Travel insurance",
                                                    "Additional activities costs",
                                                    "Staff gratuities",
                                                    "Emergency services",
                                                    "Extended stay expenses",
                                                    "Personal equipment"
                                                ] : location.toLowerCase() === "nagtibba" ? [
                                                    "Personal expenses",
                                                    "Insurance coverage",
                                                    "Unspecified items",
                                                    "Guide tips",
                                                    "Emergency evacuation",
                                                    "Weather delay costs",
                                                    "Personal trek gear"
                                                ] : location.toLowerCase() === "valleyofflowers" ? [
                                                    "Personal expenses",
                                                    "Travel insurance",
                                                    "Extra activities",
                                                    "Staff tips",
                                                    "Emergency costs",
                                                    "Extended stay",
                                                    "Personal equipment"
                                                ] : location.toLowerCase() === "hampta-pass-trek" ? [
                                                    "Personal expenses",
                                                    "Insurance",
                                                    "Unmentioned items",
                                                    "Staff gratuities",
                                                    "Emergency evacuation",
                                                    "Extra stay costs",
                                                    "Personal gear"
                                                ] : [
                                                    "Personal expenses",
                                                    "Insurance",
                                                    "Unspecified items",
                                                    "Tips",
                                                    "Emergency costs",
                                                    "Extra stay",
                                                    "Personal equipment"
                                                ];

                                                return excludedItems.map((item, i) => (
                                                    <li key={i} className="flex items-start space-x-3">
                                                        <svg className="w-5 h-5 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ));
                                            })()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
  </div>

                {/* Gallery Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {locationDataMap[location.toLowerCase()]?.gallery.map((image, index) => (
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
                                    <p className="text-sm opacity-90">Get destination information</p>
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