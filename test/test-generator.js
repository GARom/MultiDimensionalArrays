var mda = require('../MultidimensionalArray');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('MultiDimensionalArray', function() {
  describe('generate_1d', function() {
    it('should be a function', function () {
      expect(mda.generate_1d).to.be.a('function');
      expect(mda.generate_1d).to.be.instanceof(Function);
    });

    it('empty args case: should return a single array of length 3 with random bool values', function() {
      var result = mda.generate_1d();

      expect(result).to.be.instanceof(Array);
      result.should.have.length(3);
      
    });

    it('one argument case: should return a single array of length 4 with random boolean values', function() {
      var result = mda.generate_1d(4);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(4);
      
    });

    it('one argument case that is not a number: should return an empty array', function() {
      var result = mda.generate_1d('potato');
      expect(result).to.be.instanceof(Array);
      expect(result).to.be.empty();
    });
    
  }); 
  describe('generate_2d', function() {
    it('should be a function', function() {
      expect(mda.generate_2d).to.be.a('function');
      expect(mda.generate_2d).to.be.instanceof(Function);
    });

    it('no arguments case: should return a single array with length of 3 that contains 3 arrays of length 3 containing random boolean values', function() {
      var result = mda.generate_2d();

      expect(result).to.be.instanceof(Array);
      result.should.have.length(3);

      result.forEach(function(array) {
        expect(array).to.be.instanceof(Array);
        array.should.have.length(3);

      });
    });

    it('one argument case: should return a single array of length 4 that contains 4 arrays of length 3 containing random boolean values', function() {
      var result = mda.generate_2d(4);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(4);

      result.forEach(function(array) {
      expect(array).to.be.instanceof(Array);
        array.should.have.length(3);

      });
    });

    it('two arguments case: should return a single array of length 5 that contains 4 arrays of length 3 containing random boolean values', function() {
      var result = mda.generate_2d(5,4);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(5);

      result.forEach(function(array) {
        expect(array).to.be.instanceof(Array);
        array.should.have.length(4);

      });
    });

  }); 
  describe('generate_3d', function() {
    it('should be a function', function() {
      expect(mda.generate_3d).to.be.a('function');
      expect(mda.generate_3d).to.be.instanceof(Function);
    });

    it('three arguments case: should return a single array containing 3 arrays of length 4 with 5 random boolean values', function() {
      var result = mda.generate_3d(3,4,5);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(3);

      result.forEach(function(second_dimension) {
        expect(second_dimension).to.be.instanceof(Array);

        second_dimension.should.have.length(4);
        second_dimension.forEach(function(third_dimension) {

          third_dimension.should.have.length(5);
       });
      });
    });

  });

 });