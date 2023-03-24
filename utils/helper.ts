import Redcar from "../public/images/Redcar.png"
import Bluecar from "../public/images/Bluecar.png"
import OrangeCar from "../public/images/OrangeCar.png"
import GreenCar from "../public/images/GreenCar.png"


export function getCarImage(num:number){
     switch(num){
          case 0:
               return Redcar
          case 1:
               return Bluecar
          case 2:
               return OrangeCar
          case 3:
               return GreenCar
          default:
               return Redcar
     }
}

export function ArrayConverter(num:number){
     const array =[]
     for (let i = 100;i<num;i += 100){
          array.push(i)
     }
     return array
}