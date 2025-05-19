import C1 from "@/components/c1";
import C2 from "@/components/c2";
import C3 from "@/components/c3";
import C5 from "@/components/c5";
import C6 from "@/components/c6";
import C7 from "@/components/c7";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import Team from "@/components/team";

const destinations = [
  {
    name: "Panch Kedar",
    image: "/panchkedar1.jpeg",
    description:
      "Embark on a spiritual journey to the five sacred temples of Lord Shiva in the Garhwal Himalayas.",
    link: "http://localhost:3000/Destination/panch-kedar",
  },
  {
    name: "Hampta Pass - Chandratal",
    image: "/manali.jpg",
    description:
      "Experience the beauty of Hampta Pass and the stunning Chandratal Lake.",
    link: "/Destination/hampta-pass-trek",
  },
  {
    name: "Jibhi-Tirthan",
    image: "/jibhi.jpg",
    description:
      "Discover the hidden paradise of Jibhi and the serene Tirthan Valley.",
    link: "/Destination/jibhi-tirthan",
  },
  {
    name: "Kasol-Kheerganga",
    image: "/kasol.jpg",
    description:
      "Explore the hippie paradise of Kasol and trek to the magical Kheerganga.",
    link: "/Destination/kasol-kheerganga",
  },
  {
    name: "Manali-Sissu-Kasol",
    image: "/tungnath.jpg",
    description:
      "Journey through Manali, Sissu, and Kasol for an unforgettable Himalayan experience.",
    link: "/Destination/manali-kasol",
  },
  {
    name: "Tungnath-Chandrashila",
    image: "/tungnath.jpg",
    description:
      "Visit the highest Shiva temple and trek to Chandrashila for panoramic views.",
    link: "/Destination/tungnath-chandrashila",
  },
  {
    name: "NagTibba",
    image: "/nagtibba.jpg",
    description:
      "Trek to the beautiful NagTibba peak for a perfect weekend adventure.",
    link: "/Destination/nagtibba",
  },
  {
    name: "Valley of Flowers",
    image: "/valley.jpg",
    description:
      "Walk through a paradise of alpine flowers in this UNESCO World Heritage Site.",
    link: "/Destination/valley-of-flowers",
  },
];

const kedarnathDhamYatra = [
  {
    title: "Do Dham Yatra",
    description: "Visit Kedarnath and Badrinath temples",
    image: "/do-dham.jpeg",
    link: "/Destination/do-dham",
  },
  {
    title: "Chardham Yatra",
    description: "Complete pilgrimage to all four sacred temples",
    image: "/chardham.jpeg",
    link: "/Destination/chardham",
  },
  {
    title: "Kedarnath Yatra",
    description: "Visit the sacred Kedarnath temple",
    image: "/kedarnath.jpeg",
    link: "/Destination/kedarnath",
  },
  {
    title: "Panch Kedar Yatra",
    description: "Visit all five sacred Shiva temples in the Garhwal Himalayas",
    image: "/panch-kedar.jpeg",
    link: "/Destination/panch-kedar",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <C1 />
      <C2 />
      <C3 />
      <C5 />
      <C6 />
      <Gallery />
      <Reviews />
      <Team />
      <C7 />
    </>
  );
}
