import DecoratorOfRepositoty from "./DecoratorOfRepository";
import { Worker } from "../DAL/Entities/Worker";

export default class SearchDecorator extends DecoratorOfRepositoty{
    public async GetAll(){
        return super.GetAll();
    }
    public async Add(value: Worker){
        return super.Add(value);
    }
    public async Remove(id: number){
        return super.Remove(id);
    } 
    public async GetById(id: number){
        return super.GetById(id);
    }
    public async Search(firstName: string): Promise<Worker | null>{
        let result = null;
        await super.GetAll().then((value) => {
            result = value.filter((i) => i.firstName == firstName)[0];
        })
        return result;
    }
}