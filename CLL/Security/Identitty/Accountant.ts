import { User } from "./User";

export class Accountant extends User{
    constructor(userId: number,name: string) {
        super(userId, name, 'Accountant')
    }
  }
  