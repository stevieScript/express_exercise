const {findMode, findMedian, findMean, convertAndValidateNums} = require('./helpers');

describe('findMean', function() {
    it('should find the mean of an array of numbers', function() {
        expect(findMean([1, 2, 3, 4, 5])).toEqual(3);
    });
});

describe('findMedian', function() {
    it('should find the median of an array of numbers', function() {
        expect(findMedian([1, 2, 3, 4, 5])).toEqual(3);
    });
});

describe('findMode', function() {
    it('should find the mode of an array of numbers', function() {
        expect(findMode([1, 2, 2, 3, 3, 3])).toEqual("3");
    });
});

describe('convertAndValidateNums', function() {
    it('should convert a string of numbers to an array of numbers', function() {
        expect(convertAndValidateNums('1,2,3,4,5')).toEqual([1, 2, 3, 4, 5]);
    });
}); 