class autmobile {

    company;
    model;
    varient;
    fuelType;
    mngYear;
    
    suzukiCar (){
        console.log(this.company,this.model,this.varient,this.fuelType,this.mngYear)
    }

    tataCar (){
        console.log(this.company,this.model,this.varient,this.fuelType,this.mngYear)
    }


}

let carData1= new autmobile()
carData1.company='Suzuki'
carData1.model='baleno'
carData1.varient='LXI'
carData1.fuelType='patrol'
carData1.mngYear='2022'
carData1.suzukiCar();


let carData2= new autmobile()
carData2.company='Suzuki'
carData2.model='IGNIS'
carData2.varient='ZXI'
carData2.fuelType='patrol'
carData2.mngYear='2023'
carData2.suzukiCar()



let carData3= new autmobile()
carData3.company='Suzuki'
carData3.model='BREZZA'
carData3.varient='ZXI'
carData3.fuelType='DIESEL'
carData3.mngYear='2024'
carData3.suzukiCar()


let carData4= new autmobile()
carData4.company='Suzuki'
carData4.model='JINMY'
carData4.varient='VXI'
carData4.fuelType='DIESEL'
carData4.mngYear='2023'
carData4.suzukiCar()


let tata1= new autmobile()
tata1.company='Tata'
tata1.model='TIAGO'
tata1.varient='XZ'
tata1.fuelType='patrol AMT'
tata1.mngYear='2022'
tata1.tataCar();



let tata2= new autmobile()
tata2.company='Tata'
tata2.model='ALTROZ'
tata2.varient='XT'
tata2.fuelType='PATROL DCA'
tata2.mngYear='2022'
tata2.tataCar();


let tata3= new autmobile()
tata3.company='Tata'
tata3.model='PUNCH'
tata3.varient='XM'
tata3.fuelType='PATROL AMT'
tata3.mngYear='2024'
tata3.tataCar();



let tata4= new autmobile()
tata4.company='Tata'
tata4.model='NEXON'
tata4.varient='XZ'
tata4.fuelType='DIESEL AMT'
tata4.mngYear='2022'
tata4.tataCar();



