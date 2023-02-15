class ElectroApp{
    constructor(name, power){
      this.name = name; // название прибора
      this.power = power; // потребляемая мощность кВт/час
      this.supply = 'off'; //вкл/выкл в розетку
    }
    getPower(time){
      if (this.supply == 'on') {
        console.log(`Power is ${time*this.power} kW.`)
      } else {
        console.log(`Appliance ${this.name} is not supply!`)
      }
    }
    onOff(){
      if (this.supply == 'off') {
        this.supply = 'on';
      }
      else {
        this.supply = 'off';
      }
      console.log(`Supply is ${this.supply}`)
    }
  }
  
  class PersonalElectroApp extends ElectroApp{
    constructor(name, power, monitor){
      super(name, power);
      this.monitor = monitor; //диагональ монитора
    }
  }
  
  class HeatElectroApp extends ElectroApp{
    constructor(name, power, efficiency){
      super(name, power);
      this.efficiency = efficiency; //кпд прибора в %
    }
    getPower(time){
      if (this.supply == 'on') {
        console.log(`Power is ${time*this.power*this.efficiency/100} kW.`)
      } else {
        console.log(`Appliance ${this.name} is not supply!`)
      }
    }
  }
  
  const computer = new PersonalElectroApp('HP',0.5, 17);
  console.log(computer)
  computer.onOff() //включаем
  computer.getPower(5) //считаем потребленную мощность за 5 часов
  computer.onOff()// выключаем
  computer.getPower(5) //снова патаемся посчитать мощность
  
  const heater = new HeatElectroApp('Ballu', 2, 90);
  console.log(heater)
  heater.onOff() //включаем
  heater.getPower(5) //считаем отданную мощность за 5 часов
  heater.onOff()// выключаем
  heater.getPower(5) //снова патаемся посчитать мощность