import { Post } from "./Post";
export class Worker {
  constructor(
    public workerId: number,
    public firstName: string,
    public lastName: string,
    public posts: Post[]
  ) {}
}
