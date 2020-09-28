const park = require('./park')

const main = (parkingArea,command1,command2,command3)=>{
    if(command1==='create_parking_lot'){
        if(isNaN(command2)){
            console.log('Please give number of slots to be created');
        }
        else{
            park.createParkingArea(parkingArea,command2)
        }
    
    }else if(command1==='park'){
        if(!command2 || !command3){
            console.log('please enter reg no and color of vehicle');
            
        }else{
            parkingArea= park.entry(parkingArea,command2, command3)
        }
    
    }else if(command1==='leave'){
        if(isNaN(command2) || !command2){
            console.log('Please give slot number to be left');
        }else{
            parkingArea= park.leave(parkingArea,command2)
        }
    }else if(command1==='registration_numbers_for_cars_with_colour'){
        if(!command2){
            console.log("please provide color of vehicle");
            return
        }
        const regNos =  park.regNumberForColor(parkingArea,command2)
        if(!regNos){
            console.log("Not Found");
        }
        else{
            console.log(regNos.join(', '));
        }

    }else if(command1==='slot_numbers_for_cars_with_colour'){
        if(!command2){
            console.log("please provide color of vehicle");
            return
        }
        const slotNumbers= park.slotNumbersForColor(parkingArea, command2)
        if(!slotNumbers){
            console.log("Not found");
        }
        else{
            console.log(slotNumbers.join(', '));   
        }

    }else if(command1==='slot_number_for_registration_number'){
        if(!command2){
            console.log("please provide reg number of vehicle");
            return
        }
        const slotNumber= park.slotNumberForRegNo(parkingArea, command2)
        if(!slotNumber){
            console.log("Not found");
        }
        else{
            console.log(JSON.stringify(slotNumber));   
        }

    }else if(command1==='status'){
        park.status(parkingArea)

    }else {
        console.log('Please enter correct commands');
        return parkingArea
    }
    
    
}

module.exports = {
    main
}