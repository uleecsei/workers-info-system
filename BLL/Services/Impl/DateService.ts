import IDateService from '../Interfaces/IDateService';
import { Date } from '../../../DAL/Entities/Date';

export default class DateService implements IDateService{
    private _date!: Date;
    private dateService!: DateService;
    constructor(date){
        this._date = new Date(...date);
    }
    public getDate(): Date{
        return this._date;
    }
    getInstance() : DateService{
        if(this.dateService == undefined ){
            this.dateService = new DateService([2,3,1999,'utf-8']);
        }
        return this.dateService;
    }
}