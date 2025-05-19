"use client";
import { useRouter } from "next/navigation";

export default function C6() {
  const router = useRouter();
  const handleLocationChange = (location: string) => {
    try {
      // Special cases for specific destinations
      switch(location.toLowerCase()) {
        case "chardham yatra":
          router.push("http://localhost:3000/Destination/char-dham");
          break;
        case "kedarnath yatra":
          router.push("http://localhost:3000/Destination/kedarnath");
          break;
        case "do dham yatra":
          router.push("http://localhost:3000/Destination/do-dham");
          break;
        default:
          const formattedLocation = location.toLowerCase().replace(/\s+/g, "-");
          router.push(`/Destination/${formattedLocation}`);
      }
    } catch (error) {
      console.error("Error navigating to destination:", error);
    }
  };

  const tours = [
    {
          title: "Chardham Yatra",
          image: "https://5.imimg.com/data5/SELLER/Default/2022/8/ZZ/OT/KM/82956921/chardham-yatra-2022.JPG",
          details: "Embark on a Spiritual Odyssey to Kedarnath & the Chardham Circuit.",
          duration: "10 Days & 9 Nights",
      price: "₹22,000",
          buttonText: "View Details",
        },
        {
          title: "Kedarnath Yatra",
          image: "https://i.pinimg.com/564x/b3/7d/ae/b37dae0806eec5a55a011a0126ff3c60.jpg",
          details: "Experience the divine Kedarnath Temple surrounded by the Himalayas.",
          duration: "5 Days & 4 Nights",
      price: "₹10,500",
          buttonText: "View Details",
        },
        {
          title: "Do dham yatra",
          image: "https://www.trekupindia.com/tour/wp-content/uploads/2024/03/Badrinath-Do-Dham-Yatra-scaled.jpg",
          details: "Visit the two most sacred Dhams - Kedarnath and Badrinath.",
          duration: "7 Days & 6 Nights",
      price: "₹15,000",
          buttonText: "View Details",
        }
      ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mt-20 max-w-7xl mx-auto">
      {tours.map((tour, index) => (
        <div
          key={index}
          className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group"
        >
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover rounded-2xl transition-all duration-300"
          />
          <h2 className="absolute top-4 left-4 text-white text-xl font-bold bg-black/10 px-3 py-1 rounded-lg z-10">
            {tour.title}
          </h2>
          <div className="absolute inset-0 bg-black/60 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-center">{tour.details}</p>
            <p className="mt-2 text-sm">{tour.duration}</p>
            <p className="mt-2 text-lg font-semibold">{tour.price}</p>
          </div>
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={() => handleLocationChange(tour.title)}
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              {tour.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


