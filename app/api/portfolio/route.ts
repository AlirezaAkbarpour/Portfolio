import { Portfolios } from "@/interfaces/portfolios";
import type { NextApiRequest , NextApiResponse} from "next";

const portfolios : Portfolios = 
    {
        id:2525,
        name:'next js media',
        description:'nextjs media app',
        likes:12,
        links:{
            github:'https://hithyb.com/',
            main_page:'/portfolio/'
        }
    }


export async function GET(request:NextApiRequest) {
    if(request.method==="GET"){
        return Response.json({portfolios},{
            status:200,
        })
    }
};
