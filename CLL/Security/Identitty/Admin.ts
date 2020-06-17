import { User } from "./User";

export class Admin extends User{
    constructor(userId: number,name: string) {
        super(userId, name, 'Admin')
    }
}
  