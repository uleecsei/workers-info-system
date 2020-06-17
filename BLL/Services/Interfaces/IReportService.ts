import { Report } from "../../../DAL/Entities/Report";

export default interface IReportService{
    createReport: () => Report
}