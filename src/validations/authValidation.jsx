import { z } from "zod"
 
 
  const loginSchema = z.object({
   email: z.string().min(2,"Email must be at least 2 characters."),
   password: z.string().min(2, "Password must be at least 2 characters."),
 })
 
 const registerSchema = z.object({
   email: z.string().email().min(2,"Email must be at least 2 characters."),
  
   firstName: z.string().min(2, "First name must be at least 2 characters."),
   lastName: z.string().min(2,"Last name must be at least 2 characters."),
   business: z.string().min(2, "Business name must be at least 2 characters."),
   phone: z.string().min(11, "phone number must be 11 characters.").max(11,'Phone number must not be greater than 11 number'),
   code: z.string().min(4, 'if no referral code Enter "0000"'),
   check: z.boolean().refine(val=>val == true, 'you must accept our terms and condition'),
   country: z.string({
     required_error: "Please select a country",
   }).min(1, "Please select a country"),
   gender:z.enum(['Male','Female'],{
     required_error:'Please choose a gender'
     
   }),
   image: z
     .any()
     .refine((files) => files?.length > 0, {
       message: "Image is required",
     })
     .refine((files) => files?.[0]?.size <= 5000000, {
       message: "File size must be less than 5MB",
     })
     .refine(
       (files) => 
         ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'].includes(files?.[0]?.type),
       {
         message: "Only .jpg,.jpeg,.gif,.png formats are supported",
       }
     ),
   password: z.string().min(6, "Password must be at least 6 characters."),
   confirmPassword: z.string(),
 }).refine((data) => data.password === data.confirmPassword, {
   path: ["confirmPassword"],
   message: "Passwords do not match",
 })
 
 
 export {loginSchema,registerSchema}