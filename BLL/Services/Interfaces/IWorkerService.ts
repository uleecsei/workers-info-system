import { Post } from "../../../DAL/Entities/Post";

export default interface IWorkerService{
    GetWorkerPostById: (id: number) => Post | null | undefined;
}