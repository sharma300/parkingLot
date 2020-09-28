#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs'); 
const tasks = require('./connector')
let prompt = require('prompt');

let parkingArea = new Map();
const fileName = process.argv[2];
if(fileName){
    const readInterface = readline.createInterface({  
        input: fs.createReadStream(fileName),
        //output: process.stdout,
        console: false
    });
    
    readInterface.on('line', function(line) {  
        let lineArr = line.split(' ')
        tasks.main(parkingArea,lineArr[0],lineArr[1],lineArr[2]) 
    });
} else {
    prompt.start();
    prompt.message = '$'
    prompt.delimiter = ''
    ask();
}


function ask() {
    // Ask for name until user inputs "done"
    prompt.get({
        properties: {
          name: {
            description: " "
          }
        }
      }, function(err, result) {
        if(err){
              console.log({error:"something went wrong"});
              return
          }
        let lineArr = result.name.split(" ");
        if (lineArr[0] === 'exit') return; 
        tasks.main(parkingArea,lineArr[0],lineArr[1],lineArr[2])
        ask();
    
    });
}
