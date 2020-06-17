import IWorkerService from "../Interfaces/IWorkerService";
import IUnitOfWork from "../../../DAL/UnityOfWork/IUnitOfWork";
import { SecurityContext } from "../../../CLL/Security/SecurityContext";
import { User } from "../../../CLL/Security/Identitty/User";
import { Post } from "../../../DAL/Entities/Post";
import { Worker } from "../../../DAL/Entities/Worker";

export default class WorkerService implements IWorkerService{
    _user!: User;
    _worker!: Worker
    constructor(private iUnitOfWork: IUnitOfWork, private securityContext: SecurityContext){
    }
    GetWorkerPost(id: number): Post | null | undefined{
        try{
            this._user = this.securityContext.getUser();
            let currentPost = null;
            if(this._user.userType == 'Admin'){
                this.iUnitOfWork.WorkerRepo.GetById(id).then(
                    (response) => {
                        response.posts.map((post) => {
                            if(post.isCurrent){
                                currentPost = post;
                            }
                        });
                    },
                    (err) => {
                        throw Error('Can\'t find user');
                    }
                );
            }else {
                throw Error('User type have no rights');
            }
            return currentPost;
        }
        catch(error){
           console.error(error); 
        }
    }
    get Worker(){
        return this._worker;
    }
}