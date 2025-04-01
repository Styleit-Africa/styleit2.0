import Profile from '@/components/dashboard/profile/Profile'
import Image from '@/components/global/Image'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/validations/authValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import profileImage from '@/images/profile_i.png'

import React from 'react'
import { useForm } from 'react-hook-form'
import Indicator from '@/components/global/Indicator'
import EditProfileForm from '@/components/global/EditProfileForm'

const EditProfilePage = () => {

   const form = useForm({
      resolver:zodResolver(loginSchema),
      defaultValues:{
        firstName:'Michael',
        lastName:'Moses',
        email:'michaelmoses@gmail.com',
        lga:'Ifako-ijaye',
        mobile:'09066778876',
        bank:'Guarantee trust Bank',
        bank_acc:'00192207800',
        address:'181,Fola Azeez Cresent,Akulo',
      }
    })
  
  
    const onSubmit = (values)=>{
      console.log(values)
    }
  return (
    <section data-testid="edit-profile-page"  className='font-lato  container'>
      <EditProfileForm isEditable={true} title="Edit Profile"/>
    </section>
  )
}

export default EditProfilePage