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
    const eFUnitOfWorkMock = sinon.mock(new EFUnitOfWork());
    const userMock = sinon.mock(new User(1, "Oleksii", "Admin"));
    const securityContextMock = sinon.mock(new SecurityContext(userMock));
    const workerService = new WorkerService(eFUnitOfWorkMock, securityContextMock);
    expect(workerService).to.have.property('iUnitOfWork').that.instanceof("IUnitOfWork");
    expect(workerService).to.have.property('securityContext').that.instanceof("SecurityContext");
  });
  it("should return Post | null | undefined", () => {
    const eFUnitOfWorkMock = sinon.mock(new EFUnitOfWork());
    const userMock = sinon.mock(new User(1, "Oleksii", "Admin"));
    const securityContextMock = sinon.mock(new SecurityContext(userMock));
    const workerService = new WorkerService(eFUnitOfWorkMock, securityContextMock);
    expect(workerService.GetWorkerPost(1)).to.be.instanceof(null||undefined||Post);
  })
});

