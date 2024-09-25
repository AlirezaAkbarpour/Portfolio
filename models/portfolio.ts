import mongoose from "mongoose";

export interface Portfolios extends mongoose.Document{
    id:number,name:string,description:string,likes:number,links:{github:string,main_page:string}
}

const PortfolioSchema = new mongoose.Schema<Portfolios>({
    id:{
        type: Number,
        required:[true,"Please provide id"],
        maxlength:[10,"id cannt be more than 10 character"]
    },
    name:{
        type: String,
        required:[true,"name cannt be empty"],
        maxlength:[60,"name cannt be more than 60 character"]
    },
    description:{
        type: String,
        required:[true,"name cannt be empty"],
        maxlength:[60,"name cannt be more than 60 character"]
    },
    likes:{
        type: Number,
        required:[true,'likes not be empty'],
    } ,
    links:{
        github:{
            type:String,
            required:[false,""]
        },
        main_page:{
            type: String,
            required:[false,""]
        }
    }
})


export default mongoose.models.Portfolio || mongoose.model<Portfolios>("Portfolio",PortfolioSchema)