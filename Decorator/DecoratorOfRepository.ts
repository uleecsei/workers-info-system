import IRepository from "../DAL/Repository/Interfaces/IRepository";
import { Worker } from "../DAL/Entities/Worker";

export default class DecoratorOfRepositoty implements IRepository<Worker>{
    protected repository: IRepository<Worker>;
    constructor(repository: IRepository<Worker>){
        this.repository = repository;
    }
    public async GetAll(){
        return this.repository.GetAll();
    }
    public async Add(value: Worker){
        return this.repository.Add(value);
    }
}