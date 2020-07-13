const mainElement = document.querySelector("main")

const travelersElement = document.createElement("h1")
mainElement.append(travelersElement)
travelersElement.append("Travelers")
travelerInfo = document.createElement("div")
travelersElement.append(travelerInfo)
const eatBtn = document.createElement("button")
eatBtn.append("Eat")

class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
        travelerInfo.append("name:" + " " + this.name + ", " + "food:" + this.food + ", " + "Health:" + this.isHealthy + "  ")       
        travelerInfo.append(eatBtn)
    }
    
    hunt(){
        this.food += 2
    }
    eat(){
        if(this.food > 0){
            this.food -= 1
            return "Healthy!"
        }else {
            this.isHealthy = "Not Healthy!"
            
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
        return this.passengers.some(passenger => this.passengers.isHealthy === false)
        
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


