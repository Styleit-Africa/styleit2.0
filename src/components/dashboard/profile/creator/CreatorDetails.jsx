import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import userEdit from '../../../../images/user-edit.png';
import editUser from '../../../../images/user-edit_2.png';
import profileImage from '../../../../images/profile_i.png';
import Image from '@/components/global/Image';
import Indicator from '@/components/global/Indicator';
import { Link } from 'react-router-dom';
import UserProfileLoader from '@/components/global/loaders/ProfileLoaders';
import { AddDescriptionModal } from './AddDescriptionModal';
import { ViewDescriptionModal } from './ViewDescriptionModal';

const CreatorDetails = ({ creatorDetails }) => {
  const { creator, isLoading } = creatorDetails;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [description, setDescription] = useState('')
  console.log(creatorDetails,'desc')
  console.log(description,'desc')
 
  const handleSaveDescription = () => {
    setIsModalOpen(false);
  };
  useEffect(()=>{
    setDescription(creatorDetails?.creator?.bio)
    console.log('running')
  },[creatorDetails?.creator?.bio])

  return (
    <div>
      {isLoading ? (
        <UserProfileLoader />
      ) : (
        <div className='flexs justisfy-between'>
          <div className='md:basis-[45%] lg:basis-[45%] xl:basis-[50%]'>
            <div className='flex justify-between '>
              <div className='flex gap-7 items-center flex-[0.5] md:flex-[0.53]'>
                <div className='hidden md:block w-[120px] cursor-pointer h-[120px] '>
                  <Image src={profileImage} />
                </div>
                <div className='shadow py-3 pl-3 pr-4 md:pr-0 w-[max-content]  rounded-xl md:w-[75%]'>
                  <p className='text-gray-500'>
                    <span className='mr-3 md:mr-0 text-black  font-[700] capitalize '>first name:</span>
                    {creator?.firstName}
                  </p>
                  <p className='text-gray-500 mt-2'>
                    <span className='mr-3 md:mr-0 text-black  font-[700] capitalize '>last name:</span>
                    {creator?.lastName}
                  </p>
                </div>
              </div>
              <div className=' self-center md:self-start  shadow flex flex-row-reverse md:flex-row gap-3 py-3 md:py-4 px-10 md:mt-7 rounded-xl text-gray-500 capitalize md:ml-auto w-[max-content] '>
                <h1>available</h1>
                <Indicator className='h-3 w-3 mt-1.5 md:mt-0 rounded-full bg-green-300 outline outline-1 outline-green-300 outline-offset-2' />
              </div>
            </div>
            
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between  mt-7">
              <div className="md:flex-[0.48] lg:flex-[0.45] shadow pl-4 rounded-xl pt-5 pb-5 pr-5">
                <div className="flex justify-between mb-4 items-center">
                  <h1 className='capitalize  text-lg  '>profile description</h1>
                  <Image src={userEdit}  onClick={()=>setIsModalOpen(true)} className='cursor-pointer' />
                </div>
                
                {description ? (
                  <>
                    <p className='text-gray-500 text-md pr-6'>
                      {description.slice(0,350)}{description.length > 400&&'...'}
                    </p>
                    {description.length > 400 && (
                      <button
                        onClick={() => setIsViewModalOpen(true)}
                        className='text-primary block ml-auto mr-8 text-lg'
                      >
                        see more
                      </button>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8">
                    <p className="text-gray-400 mb-4 text-center">No description yet</p>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
                    >
                      Add Description
                    </button>
                  </div>
                )}
              </div>

              <div className='md:flex-[0.48] lg:flex-[0.45] shadow py-3  rounded-xl pt-7 pb-16 pl-4 '>
                <p className='text-gray-500'>
                  <span className='font-[700] text-black capitalize '>Email</span>:{creator?.email}
                </p>
                <p className='text-gray-500 mt-4'>
                  <span className='font-[700] text-black capitalize '>L.G.A</span>:{creator?.lga[0].name}
                </p>
                <p className='text-gray-500 mt-4'>
                  <span className='font-[700] text-black capitalize '>mobile number</span>:{creator?.phone}
                </p>
                <p className='text-gray-500 mt-4'>
                  <span className='font-[700] text-black capitalize '>address</span>:{creator?.address}
                </p>
              </div>
            </div>
          </div>

          <Link to='/creator/profile/edit' className="block w-[max-content] ml-auto mt-5">
            <div  className="flex gap-2 bg-primary text-white rounded-xl px-4 py-3  ">
              <Image src={editUser} className="w-6 h-6" />
              Edit
            </div>
          </Link>
        </div>
      )}

      {/* Add Description Modal */}
     {
        isModalOpen&&<AddDescriptionModal
      setDescription={setDescription}
      description={description}
      setIsModalOpen={setIsModalOpen}
      handleSaveDescription={handleSaveDescription}
      />
     } 

      {/* View Full Description Modal */}
      {isViewModalOpen &&<ViewDescriptionModal 
      description={description}
      setIsViewModalOpen={setIsViewModalOpen}
     />}
    </div>
  );
};

export default CreatorDetails
