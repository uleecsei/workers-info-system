import { PostDTO } from "./PostDTO";
export class WorkerDTO {
  constructor(
    public workerId: number,
    public firstName: string,
    public lastName: string,
    public posts: PostDTO[]
  ) {}
}
