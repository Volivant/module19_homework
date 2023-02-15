function ElectroApp(name, power){
    this.supply = 'off', //вкл/выкл в розетку
    this.name = name, // название прибора
    this.power = power // потребляемая мощность кВт/час
  }
  
  ElectroApp.prototype.getPower = function(time){
    if (this.supply == 'on') {
      console.log(`Power is ${time*this.power} kW.`)
    } else {
      console.log(`Appliance ${this.name} is not supply!`)
    }
  }
  
  ElectroApp.prototype.onOff = function(){
    if (this.supply == 'off') {
      this.supply = 'on';
    }
    else {
      this.supply = 'off';
    }
    console.log(`Supply is ${this.supply}`)
  }
  
  function PersonalElectroApp(name, power, monitor){ //персональный прибор
    this.name = name, // название прибора
    this.power = power, // потребляемая мощность кВт/час
    this.monitor = monitor //диагональ монитора
  }
  
  PersonalElectroApp.prototype = new ElectroApp()
  
  function HeatElectroApp(name, power, efficiency) { // отопительный прибор
    this.name = name, // название прибора
    this.power = power, // потребляемая мощность кВт/час
    this.efficiency = efficiency //кпд прибора в %
  }
  
  HeatElectroApp.prototype = new ElectroApp()
  
  
  // переопределенный метод для подсчета не потребленной, а отданной мощности
  HeatElectroApp.prototype.getPower = function(time){
    if (this.supply == 'on') {
      console.log(`Power is ${time*this.power*this.efficiency/100} kW.`)
    } else {
      console.log(`Appliance ${this.name} is not supply!`)
    }
  }
  
  const computer = new PersonalElectroApp('HP',0.5,17);
  
  computer.onOff() //включаем
  computer.getPower(5) //считаем потребленную мощность за 5 часов
  computer.onOff()// выключаем
  computer.getPower(5) //снова патаемся посчитать мощность
  
  const heater = new HeatElectroApp('Ballu', 2, 90);
  
  heater.onOff() //включаем
  heater.getPower(5) //считаем отданную мощность за 5 часов
  heater.onOff()// выключаем
  heater.getPower(5) //снова патаемся посчитать мощность