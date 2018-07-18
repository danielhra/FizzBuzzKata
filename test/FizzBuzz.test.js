import {FizzBuzz} from '../src/FizzBuzz';

describe('Test for fizzbuzz',function(){


    it('should be an array', function () {

        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.run()).to.be.an('array');
    });

    it('should return an array of size 100', function () {

        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.run().length).to.equal(100);
    });
});