import IUnitOfWork from "./IUnitOfWork";
import WorkerRepository from "../Repository/Impl/WorkerRepository";
import PostRepository from "../Repository/Impl/PostRepository";

module.exports = class EFUnitOfWork implements IUnitOfWork{
    WorkerRepo!: WorkerRepository;
    PostRepo!: PostRepository;
    constructor(workerRepo: WorkerRepository, postRepo: PostRepository){
        if(!this.WorkerRepo){
            this.WorkerRepo = workerRepo;
        }
        if(!this.PostRepo){
            this.PostRepo = postRepo;
        }
    }
    get Workers(){
        if(!this.WorkerRepo){
            this.WorkerRepo = new WorkerRepository();
        }
        return this.WorkerRepo;
    }
    get Posts(){
        if(!this.PostRepo){
            this.PostRepo = new PostRepository();
        }
        return this.PostRepo;
    }
}