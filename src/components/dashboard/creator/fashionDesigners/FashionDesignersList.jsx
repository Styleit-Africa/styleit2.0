import React from 'react'
import FashionDesignerCard from './FashionDesignerCard';
import { Heart, Star } from 'lucide-react';
import { Link } from "react-router-dom";

const FashionDesignersList = () => {
  const designers = [
    {
      id: 1,
      name: "Isabella Chen",
      picture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Award winning sustainable fashion pioneer with innovative",
      specialty: "sustainable",
      rating: 4.9,
      readMoreLink: "/designers/isabella-chen"
    },
    {
      id: 2,
      name: "Marcus Rivera",
      picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Contemporary menswear specialist creating timeless elegant",
      specialty: "menswear",
      rating: 4.8,
      readMoreLink: "/designers/marcus-rivera"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Haute couture designer known for intricate beadwork",
      specialty: "couture",
      rating: 4.9,
      readMoreLink: "/designers/sophie-laurent"
    },
    {
      id: 4,
      name: "Aiden Thompson",
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Streetwear innovator blending urban culture with luxury",
      specialty: "streetwear",
      rating: 4.7,
      readMoreLink: "/designers/aiden-thompson"
    },
    {
      id: 5,
      name: "Priya Sharma",
      picture: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      description: "Traditional Indian textiles meet modern fashion in",
      specialty: "traditional",
      rating: 4.9,
      readMoreLink: "/designers/priya-sharma"
    },
    {
      id: 6,
      name: "Oliver Kim",
      picture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Minimalist design philosophy creating clean sophisticated",
      specialty: "minimalist",
      rating: 4.8,
      readMoreLink: "/designers/oliver-kim"
    },
    // Adding more designers to demonstrate pagination
    {
      id: 7,
      name: "Elena Rodriguez",
      picture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      description: "Luxury evening wear specialist with Mediterranean inspired",
      specialty: "evening",
      rating: 4.9,
      readMoreLink: "/designers/elena-rodriguez"
    },
    {
      id: 8,
      name: "James Mitchell",
      picture: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=300&h=300&fit=crop&crop=face",
      description: "Bespoke tailoring expert crafting perfect fitted",
      specialty: "tailoring",
      rating: 4.8,
      readMoreLink: "/designers/james-mitchell"
    },
    {
      id: 9,
      name: "Zara Ahmed",
      picture: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      description: "Contemporary modest fashion designer creating versatile",
      specialty: "modest",
      rating: 4.7,
      readMoreLink: "/designers/zara-ahmed"
    }
]

  const handleBookAppointment = (designerName) => {
    // You can replace this with your actual booking logic
    alert(`Booking appointment with ${designerName}`);
  };

  const handleReadMore = (link) => {
    // You can replace this with your actual navigation logic
    alert(`Navigating to: ${link}`);
  };

  return (
    // <div className="min-h-screen bg-gray-50 py-12 px-4">
    <div className="min-h-screen bg-gradient-to-tl to-pink-50  to-[50%] from-[50%] md:to-[54.2%] from-gray-50 md:from-[54.7%] py-16 px-4 font-lato">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Featured Fashion Designers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of talented fashion designers, each bringing their unique vision and expertise to create stunning pieces.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {designers.map((designer) => (
             <FashionDesignerCard key={designer.id} designer={designer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
           <Link to="/all-fashion-designers"> View All Designers</Link>
          </button>
        </div>
      </div>
    </div>
  );
};


export default FashionDesignersList
