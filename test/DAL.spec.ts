export {}; // fixing block scope variable issue
const EFUnitOfWork = require("../DAL/UnityOfWork/EFUnitOfWork");
import * as chai from 'chai';
import PostRepository from '../DAL/Repository/Impl/PostRepository';
import WorkerRepository from '../DAL/Repository/Impl/WorkerRepository';
const expect = chai.expect;
const sinon = require('sinon');


describe("EFUnitOfWork", () => {
  it("should have properties Workers and Posts", () => {
    const mockWorkerRepository: WorkerRepository = sinon.mock(new WorkerRepository());
    const mockPostRepository: PostRepository = sinon.mock(new PostRepository());
    const unitOfWork = new EFUnitOfWork(mockWorkerRepository, mockPostRepository);
    expect(unitOfWork).to.have.property('Workers');
    expect(unitOfWork).to.have.property('Posts');
  });
});

describe("EFUnitOfWork.Workers", () => {
    it("should return Promise", () => {
      const mockWorkerRepository: WorkerRepository = sinon.mock(new WorkerRepository());
      const mockPostRepository: PostRepository = sinon.mock(new PostRepository());
      const unitOfWork = new EFUnitOfWork(mockWorkerRepository, mockPostRepository);
      expect(unitOfWork.Workers.Add()).to.be.instanceof(Promise);
      expect(unitOfWork.Workers.Remove()).to.be.instanceof(Promise);
    });
});

describe("EFUnitOfWork.Post", () => {
    it("should return Promise", () => {
      const mockWorkerRepository: WorkerRepository = sinon.mock(new WorkerRepository());
      const mockPostRepository: PostRepository = sinon.mock(new PostRepository());
      const unitOfWork = new EFUnitOfWork(mockWorkerRepository, mockPostRepository);
      expect(unitOfWork.Posts.Add()).to.be.instanceof(Promise);
      expect(unitOfWork.Posts.Remove()).to.be.instanceof(Promise);
    });
});