// // var parkingArea = new Map();



// // for(var i=1;i<=5;i++){
// //     parkingArea.set(i,{})
// // }

// // for(var key of parkingArea){
// //     console.log(Object.keys(key[1]).length);
    
// //     if(Object.keys(key[1]).length===0){
// //         parkingArea.set(key[0],{message:'something1'})
// //         break
// //     }
// // }

// // parkingArea.set(2,{message:'something2'})
// // parkingArea.set(4,{message:'something4'})


// // for(var key of parkingArea){
// //     console.log(Object.keys(key[1]).length);
    
// //     if(Object.keys(key[1]).length===0){
// //         parkingArea.set(key[0],{message:`something${key[0]}`})
// //         break
// //     }
// // }
// // parkingArea.set(1,{message:'something'})
// // for(var key of parkingArea){
// //     console.log(key);
// // }
// // console.log(parkingArea.size);







// // const a= [ 'KA-01-HH-1234', 'KA-01-HH-9999', 'KA-01-P-333' ]
// // const ab = a.join(', ')
// // console.log(ab);
// // console.log(a.join(', '));

// var prompt = require('prompt');
 
//   //
//   // Start the prompt
//   //
//   prompt.start();
 
//   //
//   // Get two properties from the user: username and email
//   //
// //   prompt.get(['username', 'email'], function (err, result) {
// //     //
// //     // Log the results.
// //     //
// //     console.log('Command-line input received:');
// //     console.log('  username: ' + result.username);
// //     console.log('  email: ' + result.email);
// //   });
// prompt.message = '$'
// prompt.delimiter = ''

// function ask() {
//     // Ask for name until user inputs "done"
//     prompt.get({
//         properties: {
//           name: {
//             description: " "
//           }
//         }
//       }, function(err, result) {
//         console.log('Diner name: ' + result.name[0]);
//         currentDinerName = result.name.split(" ");
//         console.log(currentDinerName);
        
//         if (currentDinerName === 'done') {
//             console.log('We are done.');
//         } else {
//             ask();
//         }
//     });
// }

// ask();

const logCheck = ()=>{
    console.log("hi there")
}

logCheck()

const tasks = require('./connector')
let parkingArea = new Map();

tasks.main(parkingArea,'create_parking_lot',6)
tasks.main(parkingArea,'create_parking_lot',7)
module.exports={
logCheck
}








