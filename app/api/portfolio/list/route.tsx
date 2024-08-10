import { NextApiRequest,NextApiResponse } from "next";

interface list {
}

const portfolios : list = [
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

export async function GET(request:NextApiRequest){
    if (request.method === 'GET'){
        return Response.json({portfolios},
            {status:200}
        )
    }
}