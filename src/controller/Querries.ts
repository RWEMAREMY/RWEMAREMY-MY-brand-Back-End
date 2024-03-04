import { Request ,Response }  from 'express';
import Querry from '../models/Querries';
import {Error} from 'mongoose';
import {Queryval} from '../validations/Querriesvalidation';

export const createQuerry =async(req:Request,res:Response)=>{
    try{

        const {author,email,content}=req.body;
        const { error } = Queryval.validate({ author,email,content });
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
        const thisquerries=await req.body;
        if(!thisquerries){
            return res.status(400).json({message:"required"});
        }
        const realquerry = new Querry({author:req.body.author,content:req.body.content,
            email:req.body.email,date:req.body.date})
           await realquerry.save()
           res.status(200).json(realquerry)
    }
    catch(err){
        res.status(400).json({ message: (err as Error).message });
    }
};

export const getallQuerry = async (req: Request, res: Response) => {
    try {
        const theques = await Querry.find();
        res.status(200).json(theques);
    } catch (err:any) {
        res.status(400).json({ message: err.message });
    }
};

// export const getallQuerry = async (req: Request, res: Response) => {
//     try {
//       // const commentid=req.params.id;
//         const allquerry = await Querry.find();
//         if(!allquerry){
//             return res.json({message:"Querry not Found"});
//         }
        
//         res.send(allquerry);
//         const thisquerry = new Querry({content:req.body.content,
//             email:req.body.email,author:req.body.author  });
//             await thisquerry.save();
//     } catch (err) {
//         res.status(500).json({ message: (err as Error).message });
//     }
//   };



export const getSingleQuerry= async(req:Request,res:Response)=>{
    try{
        const thisquerries= await Querry.findById(req.params.id);
        if(!thisquerries){
            return res.json({message:"Querry not Found"});

        }
        res.status(200).json(thisquerries)
    }
    catch(err){
        res.status(400).json({ message: (err as Error).message });
    }
};



