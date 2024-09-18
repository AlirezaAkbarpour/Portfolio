import { Portfolios } from "@/types/portfolios";
import type { NextRequest } from "next/server";

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


export async function GET(request:NextRequest) {
    if(request.method==="GET"){
        return Response.json({portfolio},{
            status:200,
        })
    }
};
