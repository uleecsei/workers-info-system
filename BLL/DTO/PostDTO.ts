export class PostDTO {
    constructor(
      public postId: number,
      public name: string,
      public salary: string,
      public isCurrent: boolean
    ) {}
}