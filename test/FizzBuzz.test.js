import {FizzBuzz} from '../src/FizzBuzz';

const fizzbuzz = new FizzBuzz();

describe('Test for run',function(){

    before(function () {
        sinon.spy(FizzBuzz.prototype,'getResult');
    });

    after(function () {
        FizzBuzz.prototype.getResult.restore();

    });



    it('should be an array', function () {

        expect(fizzbuzz.run()).to.be.an('array');
    });

    it('should call the getResult method 100 times', function () {

        expect(FizzBuzz.prototype.getResult.callCount).to.be.eql(100);

    });

    it('should return an array of size 100', function () {

        expect(fizzbuzz.run().length).to.equal(100);
    });


    it('should return an array with the appropiete results for the first 15 values', function () {
        expect(fizzbuzz.run().slice(0,15)).to.eql(
            [
                [1],
                [2],
                ['Fizz'],
                [4],
                ['Buzz'],
                ['Fizz'],
                [7],
                [8],
                ['Fizz'],
                ['Buzz'],
                [11],
                ['Fizz'],
                [13],
                [14],
                ['Fizz', 'Buzz']
            ]
        );
    });

});

describe('Test for getResult',function () {

    it('should return the passed number for non-multiples of 3 or 5', function () {

        expect(fizzbuzz.getResult(1)).to.include(1).and.not.include.members(['Fizz','Buzz']);

    });

    it('should return Fizz for multiples of 3', function () {

        expect(fizzbuzz.getResult(3)).to.include('Fizz').and.not.include.members(['Buzz',3]);
        expect(fizzbuzz.getResult(6)).to.include('Fizz').and.not.include.members(['Buzz',6]);
        expect(fizzbuzz.getResult(9)).to.include('Fizz').and.not.include.members(['Buzz',9]);

    });

    it('should return Buzz for multiples of 5', function () {
        expect(fizzbuzz.getResult(5)).to.include('Buzz').and.not.include.members(['Fizz',5]);
        expect(fizzbuzz.getResult(10)).to.include('Buzz').and.not.include.members(['Fizz',10]);
        expect(fizzbuzz.getResult(15)).to.be.include('Buzz').and.not.include.members([15]);
    });

    it('should return Fizz and Buzz for multiples of 3 and 5', function () {
        expect(fizzbuzz.getResult(15)).to.include.members(['Fizz','Buzz']).and.not.include('15');
    });

});