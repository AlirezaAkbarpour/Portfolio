import dbConnect from "@/lib/db";
import Portfolio, { Portfolios } from '@/models/portfolio';

export async function GET(req:Request) {
    await dbConnect;
    //console.log("db connected")
    try{
        const portfolios = await Portfolio.find({});
        return Response.json({success:true,data:portfolios},{status:200})
    } catch(error){
        return Response.json({success:false,error:error},{status:400})
    }
};

export async function POST(req:Request) {
    dbConnect()
    console.log("db connected")
    try{
        const {id,name,description,likes,links} : Portfolios = await req.json()
        const newPortfolio = await Portfolio.create({id,name,description,likes,links});
        return Response.json({success:true,newPortfolio},{status:201})
    }catch(error){
        return Response.json({success:false,error},{status:400})
    }
}