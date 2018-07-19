export class FizzBuzz{

    run(){
        var elements = [];

        for(var i=0; i<100;i++){

            elements[i] = this.getResult(i+1);
        }

        return elements;
    }


    getResult(num){

        var result =[];

        if (num % 3 === 0)
            result.push('Fizz');

        if(num % 5 === 0)
            result.push('Buzz');

        if(!result.length)
            result.push(num);

        return result;

    }
}