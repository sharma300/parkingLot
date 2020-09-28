const createParkingArea = (parkingArea, size)=>{
    for(let i=1;i<=size;i++){
        parkingArea.set(i,{})
    }
    console.log(`Created a parking lot with ${size} slots`);
    
    return parkingArea
}

const entry = (parkingArea, regNo, color)=>{  
    let slotCounter=0;
    for(let key of parkingArea){  
        
        if(Object.keys(key[1]).length===0){
            parkingArea.set(key[0],{regNo,color})
            console.log(`Allocated slot number: ${key[0]}`);
            break
        }
        slotCounter++;
    }
    if(slotCounter===parkingArea.size){
        console.log("Sorry, parking lot is full");
        
    }
    return parkingArea
}


const leave = (parkingArea, slot)=>{
    parkingArea.set(parseInt(slot),{})
    console.log(`Slot number ${slot} is free`);
    return parkingArea
}

const status = (parkingArea)=>{
    console.log("Slot No."+"\t"+ "Registration No" +"\t\t\t"+"Colour");
    
    for (let key of parkingArea){
        if(key[1].regNo){
            console.log(key[0]+"\t\t"+key[1].regNo+"\t\t\t"+key[1].color);   
        }
    }
}

const slotNumberForRegNo = (parkingArea, RegNo)=>{
    for (let key of parkingArea){
        if(key[1].regNo===RegNo){
            return key[0];  
        }
    }
}

const slotNumbersForColor =(parkingArea, color)=>{
    const slots=[]
    for (let key of parkingArea){
        if(key[1].color===color){
            slots.push(key[0])  
        }
    }
    return slots
}

const regNumberForColor = (parkingArea, color)=>{
    const regNos = []
    for(let key of parkingArea){
        if(key[1].color===color){
            regNos.push(key[1].regNo)
        }
    }
    return regNos
}

module.exports = {
    entry,
    leave,
    createParkingArea,
    status,
    slotNumberForRegNo,
    slotNumbersForColor,
    regNumberForColor
}