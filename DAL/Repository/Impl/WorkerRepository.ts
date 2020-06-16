import IWorkerRepository from '../Interfaces/IWorkerRepository';
import { Worker } from '../../Entities/Worker';
const WorkerModel = require('../../Models/WorkerModel');

export default class WorkerRepository implements IWorkerRepository{
    constructor(){}
    public async GetAll(): Promise<Worker[]>{
        const workers = await WorkerModel.find({});
        return workers;
    }
    public async Add(value: Worker): Promise<void> {
        await WorkerModel.create(value);
    }
    public async Remove(id: number): Promise<void> {
        await WorkerModel.findByIdAndDelete(id);
    }
    public async GetById(id: number): Promise<Worker> {
        const worker = await WorkerModel.findById(id);
        return worker;
    }
}