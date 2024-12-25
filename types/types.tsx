import {z} from 'zod'

export const PortfolioPost = z.object({
    id: z.string().min(8,""),
    name: z.string(),
    description: z.string().min(10 , "Description must have 10 character"),
    likes: z.number(),
    links: z.object({
        main_page : z.string().url("You must add a real link"),
        github: z.string().url("You must add a github repository link")
    })
})

export const AdminAccess = z.object({
    username : z.string().min(1),
    password: z.string()
})

export type TPortfolioSchema = z.infer<typeof PortfolioPost>
export type TAdminAccess = z.infer<typeof AdminAccess>