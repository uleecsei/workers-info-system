export {}; // fixing block scope variable issue
import * as chai from 'chai';
import WorkerService from '../BLL/Services/Impl/WorkerService';
import { worker } from 'cluster';
import { SecurityContext } from '../CLL/Security/SecurityContext';
import { User } from '../CLL/Security/Identitty/User';
const EFUnitOfWork = require('../DAL/UnityOfWork/EFUnitOfWork');
const should = chai.should();
const expect = chai.expect;


describe("WorkerService", () => {
  it("should inject IUnitWork and SecurityContext", () => {
    const eFUnitOfWork = new EFUnitOfWork();
    const user = new User(1, "Oleksii", "Admin");
    const securityContext = new SecurityContext(user);
    const workerService = new WorkerService(eFUnitOfWork, securityContext);
    expect(workerService).to.have.property('iUnitOfWork').that.instanceof("IUnitOfWork");
    expect(workerService).to.have.property('securityContext').that.instanceof("SecurityContext");
  });
});

describe("EFUnitOfWork.Workers", () => {
    it("should return Promise", () => {
      const unitOfWork = new EFUnitOfWork();
      expect(unitOfWork.Workers.Add()).to.be.instanceof(Promise);
      expect(unitOfWork.Workers.Remove()).to.be.instanceof(Promise);
    });
});

describe("EFUnitOfWork.Post", () => {
    it("should return Promise", () => {
      const unitOfWork = new EFUnitOfWork();
      expect(unitOfWork.Posts.Add()).to.be.instanceof(Promise);
      expect(unitOfWork.Posts.Remove()).to.be.instanceof(Promise);
    });
});