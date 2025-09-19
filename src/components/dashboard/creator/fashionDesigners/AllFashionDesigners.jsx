import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';
import FashionDesignerCard from './FashionDesignerCard';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const AllDesignersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('all');
  
  const designersPerPage = 15;

  const getDesigners = async()=> await axios.get('https://styleitafrica.pythonanywhere.com/api/designers',{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
    const {data,isLoading,isError,error,isFetching} = useQuery({
        queryKey:['allDesigners'],
        queryFn:getDesigners,
          staleTime:1
        })

        console.log(data?.data?.designers)
        console.log(error)

  // Extended list of designers (45 total for demonstration)
  const allDesigners = [
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
    },
    {
      id: 10,
      name: "Lucas Anderson",
      picture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      description: "Avant-garde designer pushing boundaries with experimental",
      specialty: "avant-garde",
      rating: 4.6,
      readMoreLink: "/designers/lucas-anderson"
    },
    {
      id: 11,
      name: "Maya Patel",
      picture: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      description: "Bridal couture specialist creating dreamy romantic",
      specialty: "bridal",
      rating: 4.9,
      readMoreLink: "/designers/maya-patel"
    },
    {
      id: 12,
      name: "Noah Wilson",
      picture: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
      description: "Sustainable denim innovator using eco-friendly",
      specialty: "sustainable",
      rating: 4.8,
      readMoreLink: "/designers/noah-wilson"
    },
    {
      id: 13,
      name: "Aria Johnson",
      picture: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      description: "Children's fashion designer creating playful comfortable",
      specialty: "children",
      rating: 4.7,
      readMoreLink: "/designers/aria-johnson"
    },
    {
      id: 14,
      name: "Diego Santos",
      picture: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face",
      description: "Latin American fashion fusion bringing vibrant",
      specialty: "fusion",
      rating: 4.8,
      readMoreLink: "/designers/diego-santos"
    },
    {
      id: 15,
      name: "Emma Thompson",
      picture: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face",
      description: "Vintage revival expert recreating classic timeless",
      specialty: "vintage",
      rating: 4.9,
      readMoreLink: "/designers/emma-thompson"
    },
    // Continue with more designers (16-30)
    {
      id: 16,
      name: "Kai Nakamura",
      picture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face",
      description: "Japanese minimalism meets contemporary fashion in",
      specialty: "minimalist",
      rating: 4.8,
      readMoreLink: "/designers/kai-nakamura"
    },
    {
      id: 17,
      name: "Amara Williams",
      picture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      description: "African-inspired prints and patterns creating bold",
      specialty: "cultural",
      rating: 4.9,
      readMoreLink: "/designers/amara-williams"
    },
    {
      id: 18,
      name: "Sebastian Cole",
      picture: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
      description: "Luxury sportswear combining performance with high",
      specialty: "sportswear",
      rating: 4.7,
      readMoreLink: "/designers/sebastian-cole"
    },
    {
      id: 19,
      name: "Luna Garcia",
      picture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Bohemian chic designer creating flowing ethereal",
      specialty: "bohemian",
      rating: 4.8,
      readMoreLink: "/designers/luna-garcia"
    },
    {
      id: 20,
      name: "Felix Mueller",
      picture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      description: "German precision engineering meets fashion in",
      specialty: "technical",
      rating: 4.6,
      readMoreLink: "/designers/felix-mueller"
    },
    // Adding designers 21-45 for complete pagination demo
    ...Array.from({ length: 25 }, (_, i) => ({
      id: 21 + i,
      name: `Designer ${21 + i}`,
      picture: `https://images.unsplash.com/photo-${1500000000000 + i}?w=300&h=300&fit=crop&crop=face`,
      description: `Creative fashion designer specializing in modern`,
      specialty: ['sustainable', 'couture', 'streetwear', 'minimalist'][i % 4],
      rating: 4.5 + (Math.random() * 0.4),
      readMoreLink: `/designers/designer-${21 + i}`
    }))
  ];

  // Filter designers based on search and specialty
  // const filteredDesigners = allDesigners.filter(designer => {
  //   const matchesSearch = designer.name.toLowerCase().includes(searchTerm.toLowerCase());
  const filteredDesigners = data?.data?.designers.filter(designer => {
    const matchesSearch = designer.creator.toLowerCase().includes(searchTerm.toLowerCase())||
    designer.lga.toLowerCase().includes(searchTerm.toLowerCase())||
    designer.Country.toLowerCase().includes(searchTerm.toLowerCase())
    // const matchesFilter = filterSpecialty === 'all' || designer.specialty === filterSpecialty;
    return matchesSearch ;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredDesigners?.length / designersPerPage);
  const startIndex = (currentPage - 1) * designersPerPage;
  const endIndex = startIndex + designersPerPage;
  const currentDesigners = filteredDesigners?.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAppointment = (designerName) => {
    alert(`Booking appointment with ${designerName}`);
  };

  const handleReadMore = (link) => {
    alert(`Navigating to: ${link}`);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl to-pink-50  to-[50%] from-[50%] md:to-[54.2%] from-gray-50 md:from-[54.7%] py-16 px-4 font-lato">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">All Fashion Designers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* Browse our complete collection of <span className='text-primary'>{allDesigners?.length}</span> talented fashion designers */}
            Browse our complete collection of <span className='text-primary'>{data?.data?.designers.length}</span> talented fashion designers
          </p>
        </div>

        {/* Search */}
      <div>
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 mx-auto max-w-[1200px]">
            <div className="relative ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search designers..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none"
              />
            </div>
          {/* </div> */}
        </div>
      </div>

        {/* Designers Grid */}
       {
        isLoading ? <div>Loading...</div>:
         <div className="flex flex-wrap justify-center gap-6 mb-12">
            {currentDesigners.map((designer) => (
            <FashionDesignerCard key={designer.id} designer={designer}/>
            ))}
        </div>
       }

        {/* Pagination */}
        {/* {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AllDesignersPage;