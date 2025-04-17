import { z }  from "zod";

export const bookAppointmentSchema = z.object({
   fullName:z.string().min(2,'full name is required'),
  bookingDate: z.date({
    required_error: "booking date  is required",
  }).refine(
    (date) => !isNaN(date.getTime()),
    {
      message:  "booking date  is required",
    }
  ),
  collectionDate: z.date({
    required_error: "collection date  is required",
  }).refine(
    (date) => !isNaN(date.getTime()),
    {
      message:  "collection date  is required",
    }
  ),
   
   bookingTime: z.string().min(6,'booking time is required'),
   collectionTime: z.string().min(6,'collection time is required')
 })

 