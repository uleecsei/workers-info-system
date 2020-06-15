import IRepository from "./IRepository";
import { Worker } from "../../Entities/Worker";

export default interface IWorkerRepository extends IRepository<Worker> {}