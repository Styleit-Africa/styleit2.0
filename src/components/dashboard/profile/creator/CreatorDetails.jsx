import React, { useState } from 'react';
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
//   const [description, setDescription] = useState('');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus qui nulla consequatur neque velit, quos earum delectus explicabo minima quaerat ratione ipsum vero aliquam facilis odio perspiciatis quod reprehenderit mollitia. Sapiente excepturi officia maxime ipsam qui eligendi, adipisci aliquam, voluptates consequuntur dolorem suscipit maiores voluptatibus nemo quos non quis vitae expedita, perferendis tenetur eos. Autem consectetur eos voluptates quae dolorum sit delectus eum, illo, adipisci facilis natus doloremque repellat vitae. Quaerat exercitationem id veritatis dignissimos inventore pariatur aspernatur unde libero expedita beatae enim autem quasi impedit, fugit minima assumenda corporis non! Eaque, ipsum! Rerum atque nostrum numquam nemo in iusto ab labore porro ratione exercitationem cum eveniet sequi deserunt possimus laboriosam natus eaque, consectetur eligendi dolorem dolor enim laborum temporibus eum nobis. Fugiat saepe consequatur molestias quasi ullam nulla itaque laborum, quia vitae, repellat incidunt earum nobis quis quidem distinctio est commodi. Ducimus assumenda explicabo, similique nulla voluptates fugit obcaecati ratione odit veniam veritatis distinctio hic in sapiente inventore iure alias praesentium aut culpa, ipsam vel! Quo aut officiis qui quod ut neque! Animi ratione rem, deserunt corporis dolores cum doloremque exercitationem natus dolor molestias ducimus facilis porro quas soluta nemo qui odit voluptatem obcaecati at tenetur delectus beatae iusto provident aut. Possimus quas soluta, deserunt, eligendi dignissimos quae quisquam eveniet ut quia cumque dicta, sequi repellat quibusdam doloribus illum iste qui dolorem inventore! Itaque soluta aliquid at modi, deleniti quae incidunt esse nostrum atque hic aliquam saepe nam quam dicta dolorem blanditiis. Qui tenetur neque aliquid doloremque omnis deleniti eos libero ipsa optio dolorem dolor magni corporis laudantium vero consectetur voluptas facilis saepe animi a, temporibus officiis sint harum ullam voluptates. Hic nesciunt fuga sequi sit ab! Harum corporis perferendis illo! Distinctio saepe quia ducimus officiis ratione ea unde. At a nobis quos, cumque cupiditate, doloremque expedita illo ipsum dolorum quidem ex voluptates aperiam soluta quia dignissimos, odio omnis harum velit. Maxime, eius! Quibusdam sit, aspernatur debitis quidem cumque totam libero architecto nesciunt numquam dolorem neque accusamus blanditiis, sunt cupiditate est provident! Delectus velit maxime recusandae at nobis voluptates dolore, dolores incidunt placeat non eaque. Debitis libero cupiditate sequi dolores expedita optio ipsa, facilis ut praesentium suscipit fuga voluptate rerum natus voluptatibus in blanditiis ipsum nesciunt alias ratione labore repudiandae voluptatum maiores earum similique. Quo dolore rem cupiditate tempora sunt numquam libero voluptatum! Autem assumenda iste laboriosam in rerum labore aut, animi corrupti expedita, suscipit non et optio quo quasi! Optio, minus. Accusantium et eos blanditiis, voluptates magnam illum hic dicta aliquam delectus error aliquid tempore culpa sit labore sapiente, eveniet eius voluptate! Nihil dolorum repellendus consequuntur laudantium aliquam non illum quibusdam nisi. Aspernatur quia illo atque, facilis amet labore nemo non distinctio placeat deserunt vel velit quam vero rerum, explicabo pariatur. Cum optio ipsam dolorem a debitis laboriosam, temporibus et quo, tempore nemo sequi obcaecati! Nulla quam voluptatem illo atque esse cupiditate at dolorum quos id, cumque vitae assumenda, ea nisi aliquam fugit provident repudiandae! Quas omnis animi et eveniet sed vel adipisci aperiam cumque veniam voluptate doloribus, totam ullam! Necessitatibus voluptatibus dolor assumenda quidem odit, nesciunt accusantium cum animi ullam minus expedita perferendis hic, reiciendis illum, aut dolorum distinctio! Repellat est odio necessitatibus temporibus reprehenderit, quos sunt libero rem ut aperiam amet iste voluptatem distinctio? Accusamus, possimus qui sunt veniam culpa quo ipsam molestiae iste cum quam modi. Eius natus vitae voluptates consequuntur a sequi praesentium magni voluptatem quas officia. Magni at nulla voluptates quibusdam cupiditate, ipsum deleniti exercitationem facere laborum aliquid ut quia repellendus. Pariatur, saepe velit! Iure maxime a incidunt error quia deserunt quidem exercitationem ex earum quos eligendi adipisci ipsam, quis velit, mollitia dolores.');
  
  const userProfile = {
    description: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus qui nulla consequatur neque velit, quos earum delectus explicabo minima quaerat ratione ipsum vero aliquam facilis odio perspiciatis quod reprehenderit mollitia. Sapiente excepturi officia maxime ipsam qui eligendi, adipisci aliquam, voluptates consequuntur dolorem suscipit maiores voluptatibus nemo quos non quis vitae expedita, perferendis tenetur eos. Autem consectetur eos voluptates quae dolorum sit delectus eum, illo, adipisci facilis natus doloremque repellat vitae. Quaerat exercitationem id veritatis dignissimos inventore pariatur aspernatur unde libero expedita beatae enim autem quasi impedit, fugit minima assumenda corporis non! Eaque, ipsum! Rerum atque nostrum numquam nemo in iusto ab labore porro ratione exercitationem cum eveniet sequi deserunt possimus laboriosam natus eaque, consectetur eligendi dolorem dolor enim laborum temporibus eum nobis. Fugiat saepe consequatur molestias quasi ullam nulla itaque laborum, quia vitae, repellat incidunt earum nobis quis quidem distinctio est commodi. Ducimus assumenda explicabo, similique nulla voluptates fugit obcaecati ratione odit veniam veritatis distinctio hic in sapiente inventore iure alias praesentium aut culpa, ipsam vel! Quo aut officiis qui quod ut neque! Animi ratione rem, deserunt corporis dolores cum doloremque exercitationem natus dolor molestias ducimus facilis porro quas soluta nemo qui odit voluptatem obcaecati at tenetur delectus beatae iusto provident aut. Possimus quas soluta, deserunt, eligendi dignissimos quae quisquam eveniet ut quia cumque dicta, sequi repellat quibusdam doloribus illum iste qui dolorem inventore! Itaque soluta aliquid at modi, deleniti quae incidunt esse nostrum atque hic aliquam saepe nam quam dicta dolorem blanditiis. Qui tenetur neque aliquid doloremque omnis deleniti eos libero ipsa optio dolorem dolor magni corporis laudantium vero consectetur voluptas facilis saepe animi a, temporibus officiis sint harum ullam voluptates. Hic nesciunt fuga sequi sit ab! Harum corporis perferendis illo! Distinctio saepe quia ducimus officiis ratione ea unde. At a nobis quos, cumque cupiditate, doloremque expedita illo ipsum dolorum quidem ex voluptates aperiam soluta quia dignissimos, odio omnis harum velit. Maxime, eius! Quibusdam sit, aspernatur debitis quidem cumque totam libero architecto nesciunt numquam dolorem neque accusamus blanditiis, sunt cupiditate est provident! Delectus velit maxime recusandae at nobis voluptates dolore, dolores incidunt placeat non eaque. Debitis libero cupiditate sequi dolores expedita optio ipsa, facilis ut praesentium suscipit fuga voluptate rerum natus voluptatibus in blanditiis ipsum nesciunt alias ratione labore repudiandae voluptatum maiores earum similique. Quo dolore rem cupiditate tempora sunt numquam libero voluptatum! Autem assumenda iste laboriosam in rerum labore aut, animi corrupti expedita, suscipit non et optio quo quasi! Optio, minus. Accusantium et eos blanditiis, voluptates magnam illum hic dicta aliquam delectus error aliquid tempore culpa sit labore sapiente, eveniet eius voluptate! Nihil dolorum repellendus consequuntur laudantium aliquam non illum quibusdam nisi. Aspernatur quia illo atque, facilis amet labore nemo non distinctio placeat deserunt vel velit quam vero rerum, explicabo pariatur. Cum optio ipsam dolorem a debitis laboriosam, temporibus et quo, tempore nemo sequi obcaecati! Nulla quam voluptatem illo atque esse cupiditate at dolorum quos id, cumque vitae assumenda, ea nisi aliquam fugit provident repudiandae! Quas omnis animi et eveniet sed vel adipisci aperiam cumque veniam voluptate doloribus, totam ullam! Necessitatibus voluptatibus dolor assumenda quidem odit, nesciunt accusantium cum animi ullam minus expedita perferendis hic, reiciendis illum, aut dolorum distinctio! Repellat est odio necessitatibus temporibus reprehenderit, quos sunt libero rem ut aperiam amet iste voluptatem distinctio? Accusamus, possimus qui sunt veniam culpa quo ipsam molestiae iste cum quam modi. Eius natus vitae voluptates consequuntur a sequi praesentium magni voluptatem quas officia. Magni at nulla voluptates quibusdam cupiditate, ipsum deleniti exercitationem facere laborum aliquid ut quia repellendus. Pariatur, saepe velit! Iure maxime a incidunt error quia deserunt quidem exercitationem ex earum quos eligendi adipisci ipsam, quis velit, mollitia dolores.
            `
    // description:''
  }; 

  const handleSaveDescription = () => {
    console.log('Saving description:', description);
    setIsModalOpen(false);
  };

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
                
                {userProfile.description ? (
                  <>
                    <p className='text-gray-500 text-md pr-6'>
                      {userProfile.description.slice(0, 350) + '...'}
                    </p>
                    {userProfile.description.length > 400 && (
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
      userProfile={userProfile}
      setIsViewModalOpen={setIsViewModalOpen}
     />}
    </div>
  );
};

export default CreatorDetails
