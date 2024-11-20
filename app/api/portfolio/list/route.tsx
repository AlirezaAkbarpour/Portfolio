import portfolio from "@/models/portfolio";
import { useParams } from "next/navigation";

export async function GET(req:Request,{params}:{params: {id: number}}){
    const id = params.id
    
}
