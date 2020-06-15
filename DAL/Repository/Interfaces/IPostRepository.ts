import IRepository from "./IRepository";
import { Post } from "../../Entities/Post";

export default interface IPostRepository extends IRepository<Post>{}