import { Portfolios } from "@/interfaces/portfolios";
import type { NextApiRequest , NextApiResponse} from "next";

const portfolio : Portfolios = 
    {
        id:2525,
        name:'next js media',
        description:'nextjs media app that you get ability to play music and sounds with lyric ',
        likes:12.5,
        links:{
            github:'https://hithyb.com/',
            main_page:'/portfolio/'
        }
    }


export async function GET(request:NextApiRequest) {
    if(request.method==="GET"){
        return Response.json({portfolio},{
            status:200,
        })
    }
};
