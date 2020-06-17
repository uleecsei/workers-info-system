import { Date } from "../../../DAL/Entities/Date";

export default interface IDateService{
    getDate: () => Date,
    getInstance: () => any
}