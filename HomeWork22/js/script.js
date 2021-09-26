let vehicle = {
   vin: '',
   make: '',
   model: '',
   year: 0,
   getDetails: function() {
       return `${this.make} ${this.model} ${this.year} `;
    },
   getVinNumber: function() {
     return this.vin;
   }
}  

let truck = {
  maxCargoWeight: 0,
  chassis: '',
  __proto__: vehicle
}

let bus = {
  peopleCapacity: 0,
  floors: 0,
  __proto__: vehicle
}

let constractionVehicle = {
  type: '',
  wheelHeight: 0,
  __proto__: vehicle
}

let cityTruck = {
  trailerHeight: 0,
  wheelbaseLength: 0,
  __proto__: truck
}

let animalTransportTruck = {
  trailerArea: '',
  isRoof: false,
  __proto__: truck
}

let prisonBus = {
  isBulletproof: false,
  isGridInside: false,
  __proto__: bus
}

let schoolBus = {
  isSpecialSignals: false,
  isEmergencyExit: false,
  __proto__: bus
}

let bulldozer = {
  ladleCapacity: '',
  wheelsType: '',
  __proto__: constractionVehicle 
}

let excavator = {
  fullOpenLadleLenght: 0,
  isStaticCabin: false,
  __proto__: constractionVehicle
}