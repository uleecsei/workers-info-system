import IWorkerRepository from '../Repository/Interfaces/IWorkerRepository';
import IPostRepository from '../Repository/Interfaces/IPostRepository';

export default interface IUnitOfWork {
    WorkerRepo: IWorkerRepository;
    PostRepo: IPostRepository;
}