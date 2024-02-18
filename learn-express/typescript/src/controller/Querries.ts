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

export const getallQuerry = async (req: Request, res: Response) => {
    try {
      // const commentid=req.params.id;
        const allquerry = await Querry.find();
        if(!allquerry){
            return res.json({message:"Querry not Found"});

        }
        res.json(allquerry);
    const thequerry = new Querry({ content:req.body.content,email:req.body.email,author:req.body.author });
    await thequerry.save();
  
    } catch (err: any) {
        res.status(500).json({ message: (err as Error).message });
    }
  };



export const getSingleQuerry= async(req:Request,res:Response)=>{
    try{
        const thisquerries= await Querry.findById(req.params.id);
        if(!thisquerries){
            return res.json({message:"Querry not Found"});

        }
        res.json(thisquerries)
    }
    catch(err:any){
        res.status(500).json({ message: (err as Error).message });
    }
};



