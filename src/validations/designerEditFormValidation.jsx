import { z } from "zod"
 
 export const  designerEditFormSchema = z.object({
   email: z.string().email().min(2,"Email must be at least 2 characters."),
   firstName: z.string().min(2, "First name must be at least 2 characters."),
   lastName: z.string().min(2,"Last name must be at least 2 characters."),
   address: z.string().min(2, "address must be at least 2 characters."),
   mobile: z.string().min(11, "mobile number must be 11 characters.").max(11,'Phone number must not be greater than 11 number'),
   bank_acc: z.string().min(10, "account number must be 10 characters.").max(10,'account number must not be greater than 10 number'),
   bank: z.string().min(4, 'bank name is required'),
   lga: z.string().min(2,'local government must be atleast 2 characters'),
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
  
 })
 
 
