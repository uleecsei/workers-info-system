export {}; // fixing block scope variable issue
const EFUnitOfWork = require("../DAL/UnityOfWork/EFUnitOfWork");
import * as chai from 'chai';
const should = chai.should();
const expect = chai.expect;

describe("EFUnitOfWork", () => {
  it("should have properties Workers and Posts", () => {
    const unitOfWork = new EFUnitOfWork();
    expect(unitOfWork).to.have.property('Workers');
    expect(unitOfWork).to.have.property('Posts');
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