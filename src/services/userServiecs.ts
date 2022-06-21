import { Items } from "../contracts/userItem";
import { userItems } from "../mock/UserMock";

export const findAll = () =>{
    return Promise.resolve(userItems);
}
export const findById = (id:number) =>{
    const item =userItems.find((item)=>item.id === id)
    if (item) {
    return Promise.resolve(item);
  }
  return Promise.reject();
}
export const deleteById = (id:number) =>{
    const item = userItems.filter((item)=>item.id! = id)
    return Promise.resolve(item);
    
  }
  
export const postdata =(item: Items) =>{
    userItems.push(item);
    return Promise.resolve(userItems);
}
export const updateItem = (id: number, item:Items)=>{
    const itemById = userItems.find((item)=>item.id ===id)
    if(itemById){
        itemById.id = item.id ;
        itemById.title = item.title;
        itemById.body = item.body;
        return Promise.resolve(itemById)
    }else{
        return Promise.reject()
    }
}