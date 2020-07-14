const mainElement = document.querySelector("main")

const travelersElement = document.createElement("h1")
mainElement.append(travelersElement)
travelersElement.append("Travelers")
travelerInfo = document.createElement("div")
travelersElement.append(travelerInfo)
const eatBtn = document.createElement("button")
eatBtn.append("Eat")
const huntBtn = document.createElement("button")
huntBtn.append("Hunt")


class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
        travelerInfo.append("name:" + " " + this.name + ", " + "food:" + this.food + ", " + "Health:" + this.isHealthy + "  ")       
        travelerInfo.append(eatBtn)
        travelerInfo.append(huntBtn)
        
    }
    
    hunt(){
        this.food += 2
    }

    eat(){
        if(this.food > 0){
            this.food -= 1
            return 
        }else {
            this.isHealthy = false
            
        }
       
    }
       
      
}



class Doctor extends Traveler{
    constructor(name){
        super(name)
        
    }
    heal(Traveler){
        Traveler.isHealthy = true
    }
}

class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.food = 2

    }
    hunt(){
        this.food += 5
    }

    eat(){
        if(this.food > 2){
            this.food -= 2  

        }else if(this.food < 2){
            this.food = 0
            this.isHealthy = false
        }
            
    
    }
    giveFood(Traveler, numOfFoodUnits){
        if(this.food >= numOfFoodUnits){
            this.food -= numOfFoodUnits
            Traveler.food += numOfFoodUnits 
        }
    }
}


const wagonElement = document.createElement("h1")
wagonElement.append("Wagon Capacity")
mainElement.append(wagonElement)

const wagonCount = document.createElement("div")
wagonElement.append(wagonCount)

quarantine = document.createElement("div")
quarantine.append("Should be Quarantined: ")
mainElement.append(quarantine)


class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
        wagonCount.append(this.getAvailableSeatCount())
        quarantine.append(this.shouldQuarantine())
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join(Traveler){
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(Traveler)
        }
        
    }

    shouldQuarantine(){
        return this.passengers.some(passenger => passenger.isHealthy === false)
        
    }

    totalFood(){
        let total = 0
        for(let i=0; i<this.passengers.length; i++){
            let currentPassenger = this.passengers[i]
            total += currentPassenger.food
        }
        return total
    }

    
}
const addTravelerBtn = document.createElement("button")
addTravelerBtn.append("Add Traveler")
mainElement.append(addTravelerBtn)


const image = document.createElement("img")
image.src = "IMGBIN_oregon-trail-wagon-california-trail.png"
mainElement.append(image)


