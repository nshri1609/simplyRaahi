"use client"

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locations = [
    "Manali-Kasol",
    "Nagtibba",
    "Kasol-kheerganga",
    "Jibhi-Tirthan",
    "Tungnath-Chandrashila",
    "Valley of Flowers",
    "Hampta pass trek",
    "Mcleodganj-Triund",
    "Kuari Pass Trek",
    "Sar Pass Trek",
    "Kedarkantha Trek",
    "Char Dham Yatra",
    "Do Dham Yatra",
    "Kedarnath Yatra",
    "Panch Kedar Yatra",
    "Rudranath & Kalpeshwar",
    "Madhyamaheshwar"
  ];

  const destinations = [
    {
      name: "Manali",
      link: "/Destination/manali"
    },
    {
      name: "Jibhi",
      link: "/Destination/jibhi-tirthan"
    },
    {
      name: "Kasol",
      link: "/Destination/kasol"
    },
    {
      name: "Tungnath Yatra",
      link: "/Destination/tungnath"
    }
  ];

  const handleLocationChange = (location: string) => {
    if (!location) return;
    setSelectedLocation(location);
    
    // Special cases for specific destinations
    switch(location.toLowerCase()) {
      case "valley of flowers":
        router.push("/Destination/valleyofflowers");
        return;
      case "kuari pass trek":
        router.push("/Destination/kuari-pass");
        return;
      case "sar pass trek":
        router.push("/Destination/sar-pass");
        return;
      case "kedarkantha trek":
        router.push("/Destination/kedarkantha");
        return;
      case "char dham yatra":
        router.push("/Destination/char-dham");
        return;
      case "do dham yatra":
        router.push("/Destination/do-dham");
        return;
      case "kedarnath yatra":
        router.push("/Destination/kedarnath");
        return;
      case "panch kedar yatra":
        router.push("/Destination/panch-kedar");
        return;
      case "rudranath & kalpeshwar":
        router.push("/Destination/rudranath");
        return;
      case "madhyamaheshwar":
        router.push("/Destination/madhyamaheshwar");
        return;
    }
    
    // Handle individual destinations
    const individualDestinations = ["manali", "kasol", "jibhi", "nagtibba", "tungnath", "mcleodganj"];
    if (individualDestinations.includes(location.toLowerCase())) {
      router.push(`/Destination/${location.toLowerCase()}`);
      return;
    }
    
    // Handle combined destinations
    const formattedLocation = location.toLowerCase().replace(/\s+/g, '-');
    router.push(`/Destination/${formattedLocation}`);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 bg-white border-b border-gray-200 h-24 w-full">
      
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/Logo SimplyRaahi.PNG"
            alt="Simply Raahi"
            className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
      <button
        className="md:hidden text-3xl text-sky-950 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "×" : "☰"}
      </button>
      
      <div
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent
                   shadow-md md:shadow-none z-50 md:flex items-center space-x-6 text-lg text-sky-950
                   transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}
      >
        <Link href="/tours">
          <span className="block md:inline-block py-2 px-4 hover:text-sky-400 transition">
            Tours
          </span>
        </Link>
        <Link href="/personalised">
          <span className="block md:inline-block py-2 px-4 hover:text-sky-400 transition">
            Personalised Tours
          </span>
        </Link>
        <Link href="/contact">
          <span className="block md:inline-block py-2 px-4 hover:text-sky-400 transition">
            Contact Us
          </span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg space-x-2">
        <select
          value={selectedLocation}
          onChange={(e) => handleLocationChange(e.target.value)}
          className="p-2 bg-white border-none outline-none text-gray-700 rounded-md"
        >
          <option value="" disabled>
            Select Location
          </option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </option>
          ))}
        </select>
        
        <button
          onClick={() => handleLocationChange(selectedLocation)}
          className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg
              hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out
              shadow-md"
        >
          Search
        </button>
      </div>
    </nav>
  );
}