import dbConnect from "@/lib/db";
//import { Portfolio } from "@/types/portfolios";
import Portfolio from '@/models/portfolio';

export async function GET(req:Request) {
    await dbConnect;
    try{
        const portfolios = await Portfolio.find({});
        return Response.json({success:true,data:portfolios},{status:200})
    } catch(error){
        return Response.json({success:false,error:error},{status:400})
    }
};

const data = { id:256245,
    name:"Project One",
    description:"Project code",
    likes:25,
    links:{
        github:"https://github.com",
        main_page:"page"
    }}

export async function POST(req:Request) {
    await dbConnect;
    try{
        const newPortfolio = await Portfolio.create(
            JSON.stringify(data)
        );
        return Response.json({success:true,data:newPortfolio},{status:201,headers:{"Content-Type":"application/json"}})
    }catch(error){
        return Response.json({success:false},{status:400})
    }
}