export {}; // fixing block scope variable issue
const EFUnitOfWork = require("../DAL/UnityOfWork/EFUnitOfWork");
import * as chai from 'chai';
const should = chai.should();
const expect = chai.expect;
const sinon = require('sinon');

describe("EFUnitOfWork", () => {
  it("should have properties Workers and Posts", () => {
    const unitOfWork = new EFUnitOfWork();
    const mockUnitOfWork = sinon.mock(unitOfWork); //creating mock of object
    expect(mockUnitOfWork).to.have.property('Workers');
    expect(mockUnitOfWork).to.have.property('Posts');
  });
});

describe("EFUnitOfWork.Workers", () => {
    it("should return Promise", () => {
      const unitOfWork = new EFUnitOfWork();
      const mockUnitOfWork = sinon.mock(unitOfWork); //creating mock of object
      expect(mockUnitOfWork.Workers.Add()).to.be.instanceof(Promise);
      expect(mockUnitOfWork.Workers.Remove()).to.be.instanceof(Promise);
    });
});

describe("EFUnitOfWork.Post", () => {
    it("should return Promise", () => {
      const unitOfWork = new EFUnitOfWork();
      const mockUnitOfWork = sinon.mock(unitOfWork); //creating mock of object
      expect(mockUnitOfWork.Posts.Add()).to.be.instanceof(Promise);
      expect(mockUnitOfWork.Posts.Remove()).to.be.instanceof(Promise);
    });
});