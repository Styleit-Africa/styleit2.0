import { X } from 'lucide-react'
import React from 'react'

export const ViewDescriptionModal = ({setIsViewModalOpen,userProfile}) => {
 return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full p-6 max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Profile Description</h2>
              <button
                onClick={() => setIsViewModalOpen(false)}
               
              >
                 <X  className="h-8 w-8 scale-[0.8] transition-all duration-300 hover:scale-[1.5] cursor-pointer" />
                
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2">
              <p className="text-gray-700 text-md whitespace-pre-line leading-relaxed">
                {userProfile.description}
              </p>
            </div>
          </div>
        </div>
 )
}
