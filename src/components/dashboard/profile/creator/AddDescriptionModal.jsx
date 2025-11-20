import { X } from 'lucide-react'
import React from 'react'

export const AddDescriptionModal = ({setIsModalOpen,setDescription,description,handleSaveDescription}) => {
  return (
    <div> 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-md shadow-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-md md:text-2xl font-bold">Add Profile Description</h2>
              <button
                onClick={() => setIsModalOpen(false)}
              >
              <X  className="h-8 w-8 scale-[0.8] transition-all duration-300 hover:scale-[1.5] cursor-pointer"
               onClick={()=>setSearchModal(false)}/>

              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                rows="8"
                className="w-full px-4 py-3 border shadow-md rounded-lg focus:ring-0 outline-0 resize-none"
                placeholder="Write your profile description here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='flex flex-col md:flex-row  md:justify-between items-center w-full'>
              <p className="text-sm mb-2 md:mb-0  w-full md:basis-[30%]  text-left  text-gray-500 mt-2">
                {description.length} characters
              </p>
                <div className="flex gap-3 flex-col w-full md:flex-row md:justify-end ">
                     <button
                onClick={handleSaveDescription}
                className="px-6 py-2 bg-primary  basis-full md:basis-[35%] cursor-pointer text-white rounded-lg hover:bg-primary/90 transition"
                disabled={!description.trim()}
              >
                Save Description
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 border border-gray-300 basis-full md:basis-[35%] rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
             
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}
