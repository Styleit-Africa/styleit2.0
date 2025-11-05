import React, { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useGlobalStore } from '@/store/global/useGlobal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import Image from '@/components/global/Image'
import ImageGallery from '@/components/global/imageGallery/ImageGallery'
import { Button } from '@/components/ui/button'
import gallery from '@/images/gallery-add.png'

const MyPostForm = () => {
      const [postData,setPostData] = useState({title:'',body:''})
    const [images,setImages] = useState([])
    const [serverImages,setServerImages] = useState([])
    const [showSlicedImages,setShowSlicedImages] = useState(false)
    const scrollableRef = useRef(null) //  ref for the scrollable container
    const {setPostModal} = useGlobalStore(state=>state)
    const handleUpload = (e) => {
        const files = e.target.files
        if (!files) return ;
        const imageUrls = Array.from(files).map((file)=>{
            return {img_id:new Date().getTime().toString(),url:URL.createObjectURL(file)}
        })
        setServerImages([...files])
        setImages([...images,...imageUrls])
    }

    // Scroll after images are added to the state
    useEffect(() => {
        if (images.length > 0) {
            setTimeout(() => {
                scrollableRef.current?.scrollTo({
                    top: scrollableRef.current.scrollHeight,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }, [images])
    
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

    const storePost = async(data)=>{
        const response =  await axios.post('https://styleitafrica.pythonanywhere.com/api/posting',data,{
          headers: {
                 Authorization: `Bearer ${Cookies.get('token')}`,
                 'Content-Type': 'multipart/form-data'
        }
      })
      return response.data;
    }

    const queryClient = useQueryClient();
      const {mutate,data} = useMutation({
        mutationFn:storePost,
         onMutate: async (newPost) => {
        await queryClient.cancelQueries(["myPosts"]);

      const previousPosts = queryClient.getQueryData(["myPosts"]);
      // Optimistically update cached posts
      queryClient.setQueryData(["myPosts"], (old) =>{
        return {
            ...old,
            data:{...old.data,posts:[...old.data.posts,{postTitle:postData.title,content:postData.body}]}
        }
      });
      // Return rollback function data
      return { previousPosts };
    },
    
    onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['myPosts'] })
    },
    })


   const handlePost = async(e)=>{
    e.preventDefault()
    setPostModal()
    const formData = new FormData();
    serverImages.forEach((imageFile) => {
    formData.append("img", imageFile); 
  });
    formData.append("title", postData.title); 
    formData.append("body", postData.body); 
    
   mutate(formData)
   }
  return (
    <div>
        <div ref={scrollableRef} className=' h-[370px] overflow-y-auto'>
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
            images.length > 0&& (
                <div className='p-5'>
                    <ImageGallery _images={images} />
                </div>
            )
        }
    </div>
        <Button onClick={handlePost} disabled={postData.title&&postData.body?false:true} className='bg-primary text-white w-full mt-8 py-4 font-[700] '>Post</Button>
    </div>
  )
}

export default MyPostForm