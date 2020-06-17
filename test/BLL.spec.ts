export {}; // fixing block scope variable issue
import * as chai from 'chai';
import WorkerService from '../BLL/Services/Impl/WorkerService';
import { worker } from 'cluster';
import { SecurityContext } from '../CLL/Security/SecurityContext';
import { User } from '../CLL/Security/Identitty/User';
import { Post } from '../DAL/Entities/Post';
const EFUnitOfWork = require('../DAL/UnityOfWork/EFUnitOfWork');
const should = chai.should();
const expect = chai.expect;
const sinon = require('sinon');

describe("WorkerService", () => {
  it("should inject IUnitWork and SecurityContext", () => {
    const eFUnitOfWork = new EFUnitOfWork();
    const user = new User(1, "Oleksii", "Admin");
    const securityContext = new SecurityContext(user);
    const workerService = new WorkerService(eFUnitOfWork, securityContext);
    const mockWorkerService = sinon.mock(workerService);
    expect(mockWorkerService).to.have.property('iUnitOfWork').that.instanceof("IUnitOfWork");
    expect(mockWorkerService).to.have.property('securityContext').that.instanceof("SecurityContext");
  });
  it("should return Post | null | undefined", () => {
    const eFUnitOfWork = new EFUnitOfWork();
    const user = new User(1, "Oleksii", "Admin");
    const securityContext = new SecurityContext(user);
    const workerService = new WorkerService(eFUnitOfWork, securityContext);
    const mockWorkerService = sinon.mock(workerService);
    expect(mockWorkerService.GetWorkerPost(1)).to.be.instanceof(null||undefined||Post);
  })
});

