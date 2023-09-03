//Question 1:Write one example explaining how you can write a callback function.

//callback function is a function which function name as a argument to another function as it will control from user sequence
// here call next having square function 
function sum(a,b,callnext){
    setTimeout(function(){
        let s=a+b;
        console.log(s);
        callnext(s)
    },1000);

}
// here square is the function that will passing as argument to sum function 
let res=sum(7,7,square);
//after 1000 milliseconds square function will execute sqaure function

function square(num){
    console.log(num*num);
}   

// Question 2:
// "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

function one(){
    setTimeout(()=>{
        console.log(1);
        setTimeout(()=>{
            console.log(2);
            setTimeout(()=>{
                console.log(3);
                setTimeout(()=>{
                    console.log(4);
                    setTimeout(()=>{
                        console.log(5);
                        setTimeout(()=>{
                            console.log(6);
                            setTimeout(()=>{
                                console.log(7);
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
        
    },1000)
}
one()
// call back hell is a function which have nested call backs like pyramid shape
// call back function is set timeout function

// Question 3:
// "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"


function delay(t){
    return new Promise((resolve)=>{
        setTimeout(resolve,t)
    })
}
function print(){
    let promise=Promise.resolve();
    for(let i=1;i<=7;i++){
        promise=promise.then(()=>{
            console.log(i);
            
            }).then(()=>{
                delay(i*1000);
        })

    }
    return promise;
}

print();

// Question 4:
/*"Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
then it should go to reject the state and catch the error and print Promise Rejected "*/


function Promises(value){
    return new Promise((resolve,reject)=>{
        if(value=="yes"){
            resolve("Promise Resolved");
        }else{
            reject("Promise Rejected");
        }
    })
}
Promises("yes").then((response)=>{
    console.log(response);
},(error)=>{
    console.log("Error:"+error);
})




// Question 5: Create examples to explain callback function
// function
function greetings(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callbacks() {
    console.log('I am callback function i.e next function of greetigs');
}

// passing function as an argument
greetings('Sai', callbacks);







//Question 6:Create examples to explain callback hell function

// callback hell function is the fnction which has nested callbacks to it

function one(){
    setTimeout(()=>{
        console.log(1);
        setTimeout(()=>{
            console.log(2);
            setTimeout(()=>{
                console.log(3);
                setTimeout(()=>{
                    console.log(4);
                    setTimeout(()=>{
                        console.log(5);
                        setTimeout(()=>{
                            console.log(6);
                            setTimeout(()=>{
                                console.log(7);
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
        
    },1000)
}
one()
// it is like pyramid shape function



// Question 7:Create examples to explain promises function
function promises(){
return new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
})
}

promises().then((response)=>{
    console.log(response);
})
promises().catch((reject)=>{
    console.log(reject);
})

// Question 8: Create examples to explain async await function

//async return the promise object
async function asyncAwait(){
    // await is enable only for promise objects
    //after the statements of await can't execute 
    //it will came out of the function

    x = await 7+7;
    console.log("inside function");
    return x;
}
let result=asyncAwait()
// it prints outside function
console.log("outside function");
/* after the above statemen it.
it goes to previous function in the step the function the execution is stopped*/
// as it prints inside function

result.then((data)=>{
    // and prints the returned value of the above function
    console.log(data);
})



// Question 9:Create examples to explain promise.all function

// Simple promise that resolves
// after a given time
const tOut = (t) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Completed in ${t}`)
		}, t)
	})
}

// Resolving a normal promise
tOut(1000).then(result => console.log(result + "<br>"))
// Completed in 1000

// Promise.all
Promise.all([tOut(1000), tOut(2000)])
	.then(result => console.log(result))

// Here, Promise.all() method is the order of the maintained promises. 
//The first promise in the array will get resolved to the first element of the output array, 
//the second promise will be a second element in the output array, and so on.

