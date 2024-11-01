import dbConnect from "@/lib/db";
import { Portfolio } from "@/types/portfolios";
import { NextApiResponse ,NextApiRequest } from "next";


export async function handler(req:NextApiRequest,res:NextApiResponse) {
    const {method} = req;
    await dbConnect;
    switch(method){
        case "GET":

    }
};
