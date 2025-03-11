import { z } from "zod"

const joinSchema = z.object({
  join:z.enum(['Fashion','Client'],{
    required_error:'Please choose a role'
    
  })
})

export {joinSchema}