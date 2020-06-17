import IReportService from "../Interfaces/IReportService";
import { Report } from "../../../DAL/Entities/Report";
import DateService from "./DateService";
import { Worker } from "../../../DAL/Entities/Worker";

export default class ReportService implements IReportService{
    worker!: Worker;
    dateService!: DateService;
    constructor(){}
    createReport(worker: Worker): Report {
        this.worker = worker;
        this.dateService = this.dateService.getInstance();
        return new Report(worker, this.dateService.getDate());
    }
}