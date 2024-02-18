import { Request ,Response }  from 'express';
import Querry from '../models/Querries';

export const createQuerry =async(req:Request,res:Response)=>{
    try{
        const thisquerries=await req.body;
        if(!thisquerries){
            return res.status(400).json({message:"required"});
        }
        const realquerry = new Querry({author:req.body.author,content:req.body.content,
            email:req.body.email,createdAt: req.body.createdAt})
           await realquerry.save()
           res.json(realquerry)
    }
    catch(error){

    }
};