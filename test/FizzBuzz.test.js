import {FizzBuzz} from '../src/FizzBuzz';

const fizzbuzz = new FizzBuzz();

describe('Test for run',function(){


    it('should be an array', function () {

        expect(fizzbuzz.run()).to.be.an('array');
    });

    it('should return an array of size 100', function () {

        expect(fizzbuzz.run().length).to.equal(100);
    });

    describe('Test for getresult',function () {

        it('should return the passed number for non-multiples of 3 or 5', function () {

            expect(fizzbuzz.getResult(1)).to.include(1);

        });

        it('should return Fizz for multiples of 3', function () {

            expect(fizzbuzz.getResult(3)).to.include('Fizz');
            expect(fizzbuzz.getResult(6)).to.include('Fizz');
            expect(fizzbuzz.getResult(9)).to.include('Fizz');

        });

        it('should return Buzz for multiples of 5', function () {
            expect(fizzbuzz.getResult(5)).to.include('Buzz');
            expect(fizzbuzz.getResult(10)).to.include('Buzz');
            expect(fizzbuzz.getResult(15)).to.be.include('Buzz');
        });


    })
});