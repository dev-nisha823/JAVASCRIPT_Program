function job()
 {
   return new Promise(function (resolve, reject)
  {
     reject();
  });
 }

 let promise = job();

 promise

 .then(function ()
 {
    console.log('Success 1');
 })

 .then(function ()
 {
    console.log('Success 2');
 })

 .then(function ()
 {
    console.log('Success 3');
 })

 .catch(function ()
 {
    console.log('Error 1');
 })

 .then(function ()
 {
    console.log('Success 4');
 });

//output : Error 1,Success 4

 //After job() rejects the promise, catch() is called and then the last then() is called