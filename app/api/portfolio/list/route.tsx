import type { NextRequest } from "next/server";
import { Key } from "react";
interface list {
    id:Key,
    name:string | undefined | null,
    description: string | undefined | null,
    likes: number | null,
    links: {
        github: string | null | undefined,
        main_page : string | null | undefined
    }
}

interface List extends Array<list>{}

const portfolios : List = [
    {
        id:'2525',
        name:'next js media',
        description:'nextjs media app that you get ability to play music and sounds with lyric ',
        likes:12.5,
        links:{
            github:'https://hithyb.com/',
            main_page:'/portfolio/'
        }
    },
    {
        id:'2235',
        name:'Portfolio',
        description:'nextjs media app that you get ability to play music and sounds with lyric ',
        likes:12.5,
        links:{
            github:'https://hithyb.com/',
            main_page:'/portfolio/'
        }
    }
]

export async function GET(request:NextRequest){
    if (request.method === 'GET'){
        return Response.json({portfolios},
            {status:200}
        )
    }
}