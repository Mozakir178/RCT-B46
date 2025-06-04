// Arrow Function: 
    // An arrow functions is a shorter and cleaner way to write the normal function in javascript. Arrow function were introduce
    // in javascript 2015 -> ES6
    // Arrow functions will not have their own this keyword
        // this: this keyword refer to the context in which a function is executed, that is who is calling the function


        // function add(){
        //     const a = 10 ;
        //     const b= 20 ;
        //     return this.a + this.b
        // }


        // convert this add function to arrow function 

    // const add = () => {
    //     //same logic 
    //     const a = 10 ;
    //     const b= 20 ;
    //     return a + b
    // }

    // console.log(add());

    // if you have single line return statement then {} are not required

    // const add = (a,b) => {
    //     return a+b ;
    // }
    const add = (a,b) =>  a+b ;


    console.log(add(20,25));