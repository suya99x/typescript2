import { Router,Request,Response, response } from "express";
import { deleteById, findAll, findById, postdata, updateItem } from "../services/userServiecs";

export const userRouter :Router= Router()

userRouter.get("/",async(req:Request,res:Response)=>{
try{
    const result = await findAll()
    res.send(result); 
}
catch(error){
    res.status(404).send("error")
}
})
userRouter.get("/:id",async(req:Request,res:Response)=>{
try{
    const result = await findById(Number(req.params.id))
    res.json(result);
  } catch (error) {
    // logger
    res.status(404).json('Error');
  }
})

userRouter.post("/",async(req:Request,res:Response)=>{
 const newItems = {
            id: Number(req.body.id),
            title: req.body.title,
            body: req.body.body
        }
        try{
            const result = await postdata(newItems);
            res.status(200).json(result);
        }catch(err){
            res.json('err')
        }
})

userRouter.delete('/:id', (req:Request, res:Response)=>{
    let id:number = Number(req.params.id)
    const result = deleteById(id)
    res.status(200).json({message: "Item Deleted Successfully", data: result})
})

userRouter.put('/:id', async (req:Request, res:Response)=>{
    let id:number = Number(req.params.id)
    let updatedData = req.body
    console.log(req.body)
    try{
        const result = await  updateItem(id, updatedData)
        res.status(200).json(result)
    }catch(err){
        res.json(err)
    }
})



