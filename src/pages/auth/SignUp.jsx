import React from 'react'
import african from '../../images/african.png'
import { reasons } from '@/static/data'
import { useAuthService } from '@/store/useAuthService'
import SignUpForm from '@/components/auth/SignUpForm'
import ToggleAuthPage from '@/components/global/ToggleAuthPage'
import useToggleAuthPage from '@/hooks/useToggleAuthPage'


const SignUp = ()=> {

    const {isSignUpForm,role} = useAuthService((state)=>state)
    const {togglePage} = useToggleAuthPage()
  
  const onSubmit = (role)=>{
    togglePage()
  }

  return (
    <section data-testid="signUp-page"  className='pb-16'>
           {
            role == 'designer' ?
             <SignUpForm 
            reasons={reasons.clientSignUp} image={african} 
            header="join as fashion designers and make your works known"/>:   
            <SignUpForm  
            reasons={reasons.fashionSignUp} image={african} 
            header="join as fashion designers and make your works known"/>
        }

        {
            isSignUpForm && <ToggleAuthPage page="signUp" role={role}/>

        }
    </section>
  )
}



export default SignUp