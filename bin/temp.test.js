const temp = require('./temp')

// test('testing1',()=>{
//     const result= temp.logCheck()
//     //console.log(result);
//     expect(result).toBe('hello there') 
// })


// test("console log Hello World", () => {
//   console["log"] = jest.fn(storeLog);
//   temp.logCheck()
//   expect(outputData).toBe("hi there");
// });


const tasks = require('./connector')

let outputData = "";
storeLog = inputs => (outputData = inputs);
let parkingArea = new Map();

test('test create lot',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'create_parking_lot','6')
    expect(outputData).toBe("Created a parking lot with 6 slots");
})

test('test parking',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'park','KA-01-HH-1234','White')
    tasks.main(parkingArea,'park','KA-01-HH-9999','White')
    tasks.main(parkingArea,'park','KA-01-BB-0001','Black')
    tasks.main(parkingArea,'park','KA-01-HH-7777','Blue')
    tasks.main(parkingArea,'park','KA-01-HH-2701','Red')
    tasks.main(parkingArea,'park','KA-01-HH-3141','Black')
    expect(outputData).toBe("Allocated slot number: 6");
})

test('leave parking',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'leave','4')
    expect(outputData).toBe("Slot number 4 is free");
})

test('test create parking in middle',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'park','KA-01-P-333','White')
    expect(outputData).toBe("Allocated slot number: 4");
})

test('test parking full',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'park','KA-01-HH-1294','White')
    expect(outputData).toBe("Sorry, parking lot is full");
})

test('test registration numbers for cars with colour',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'registration_numbers_for_cars_with_colour','White')
    expect(outputData).toBe("KA-01-HH-1234, KA-01-HH-9999, KA-01-P-333");
})



test('test slot_numbers for cars with colour',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'slot_numbers_for_cars_with_colour','White')
    expect(outputData).toBe("1, 2, 4");
})

test('test slot number for registration number',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'slot_number_for_registration_number','KA-01-HH-3141')
    expect(outputData).toBe("6");
})

test('test slot number for registration number not found',()=>{
    console["log"] = jest.fn(storeLog);
    tasks.main(parkingArea,'slot_number_for_registration_number','MA-01-HH-3141')
    expect(outputData).toBe("Not found");
})