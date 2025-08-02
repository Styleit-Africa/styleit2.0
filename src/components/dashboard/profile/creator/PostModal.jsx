import Image from '@/components/global/Image'
import Indicator from '@/components/global/Indicator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import gallery from '@/images/gallery-add.png'
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import Cookies from 'js-cookie'
import { useGlobalStore } from '@/store/global/useGlobal'

const PostModal = () => {
    const [postData,setPostData] = useState({title:'',body:''})
    const [images,setImages] = useState([])
    const [sliceImages,setSlicedImages] = useState([])
    const [serverImages,setServerImages] = useState([])
    const [showSlicedImages,setShowSlicedImages] = useState(false)
    const post = useRef(null)
    const parentRef = useRef(null)
    const {setPostModal} = useGlobalStore(state=>state)
    
    const handleUpload = (e) => {
        const files = e.target.files
        if (!files) return ;
        const imageUrls = Array.from(files).map((file)=>URL.createObjectURL(file))
        setServerImages([...files])
        setImages([...images,...imageUrls])
        post.current?.scrollBy({
            top: 600,
            behavior: 'smooth'
        });

    }
    const handleSlicedImages = ()=>{
        setSlicedImages(images.slice(3,images.length))
        setShowSlicedImages(!showSlicedImages)
    }
    
    const removeImage = (item)=>{
        if(images.length === 1 || images.length === 4){
            setShowSlicedImages(false)
        }
      const filterImages = images.filter(image=>image !== item)
      setImages(filterImages)
    }
    const clearImages = ()=>{
        setImages([])
        setShowSlicedImages(false)
    }
   const handlePost = async(e)=>{
    e.preventDefault()
    setPostModal()
    const formData = new FormData();
    serverImages.forEach((imageFile) => {
    formData.append("img", imageFile); 
  });
    formData.append("title", postData.title); 
    formData.append("body", postData.body); 

    const data = formData
     try{
    const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/posting',data,{
          headers: {
                 Authorization: `Bearer ${Cookies.get('token')}`,
                 'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response)
     }catch(e){
        console.log(e)
     }
   }

  return (
    <div className='px-5 font-lato py-6  flex justify-center  gap-3 items-center backdrop-blur-[0.2rem] bg-white/20 z-[999]  fixed top-0  bottom-0 left-0 right-0  overflow-hidden transition-all duration-300 '>
        <div ref={post} className=' bg-white h-[520px] overflow-y-auto  shadow-lg shadow-gray-400 rounded-md w-[600px] p-7 py-4'>
            <div className='flex justify-between items-center max-w-[400px] ml-auto'>
                <h1 className='font-[700] text-2xl md:text-3xl'>Create post</h1>
                <div  onClick={()=>setPostModal()} className="cursor-pointer bg-gray-500 p-3 text-white rounded-full">
                    <X/>
                </div>
            </div>
     <div className='relative'>
        <Input type="text" onChange={(e)=>setPostData({...postData,title:e.target.value})} placeholder="title" className="w-full mt-4 shadow-md border-none  p-7 pl-3  focus-visible:ring-0 placeholder-gray-400 placeholder:text-lg"/>
        <Textarea onChange={(e)=>setPostData({...postData,body:e.target.value})} placeholder="What is on your mind!" className='h-[200px] placeholder:text-xl  shadow-md mt-5 focus-visible:ring-0 '/>
        <label htmlFor="upload" data-testid='upload' className='flex justify-between items-center cursor-pointer mt-4 p-4 rounded-lg shadow-md bordexr-gray-200 borxder-2 bg-graxy-200 hover:bg-gray-300 transition-all duration-200'>
            <h3 className='text-md md:text-lg  font-[700] '>Add image to post</h3>
              <Image src={gallery} className="w-6 h-6 cursor-pointer"/>
            <Input type='file'  onChange={(e)=>handleUpload(e)}  multiple  className='hidden' id="upload"/>
        </label>
        {
            images.length>1&&<button onClick={clearImages} className='block w-[max-content] ml-auto text-red-500 mt-3 text-lg'>Delete all</button>
        }

        {
            images.length > 0 && <div ref={parentRef} className=' grid grid-cols-2 gap-3  '>
                {
                    images.slice(0,3).map((image,index)=>{
                return (
                    <div className='relative group h-[200px]'>
                        <Image src={image} className='w-full h-full mt-4 rounded-lg'/>
                        <X className='absolute top-4 right-5 w-12 h-12 text-white p-4 rounded-full bg-primary hidden group-hover:block'
                            onClick={()=>removeImage(image)}
                        />
                    </div>
                )
            })
                }
                 {
                    images.length > 3 &&<div className='relative group h-[200px]' onClick={handleSlicedImages} >
                        {
                            images.slice(3,images.length).length>1&& <div className="absolute top-4  ccursor-pointer bg-[#00000080] rounded-lg  h-[200px] w-full">
                            {
                                <h1 className='mt-20 text-gray-400 text-5xl text-center'>+{images.slice(3,images.length).length}</h1>
                            }
                        </div>
                        }
                        <Image src={images[3]} className='w-full h-full mt-4 rounded-lg'/>
                    </div>
                 }

            </div>
        }
        <Button onClick={handlePost} className='bg-primary text-white w-full mt-8 py-4 font-[700] '>Post</Button>
    </div>
        </div>
       {
        showSlicedImages&& <div ref={post} className=' grid grid-cols-2 gap-4  bg-white h-[520px] overflow-y-auto  shadow-lg shadow-gray-400 rounded-md w-[600px] p-7 py-4'>
          {
            images.slice(3,images.length)?.map(image=>{
                return(
                      <div className='relative group h-[200px]'>
                        <Image src={image} className='w-full h-full mt-4 rounded-lg'/>
                        <X className='absolute top-4 right-5 w-12 h-12 text-white p-4 rounded-full bg-primary hidden group-hover:block'
                            onClick={()=>removeImage(image)}
                        />
                    </div>
                )
            })
          }
        </div>
       }
    </div>
  )
}

export default PostModal