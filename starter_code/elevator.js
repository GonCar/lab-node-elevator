class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up";
  }

  start() { setInterval(this.update, 1000)}
  stop() { clearInterval(start)}
  update() { this.log(

  )}
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor < 10){
      this.floor += 1;
    }
    if(this.floor > 0){
      this.floor -= 1;
    }
  }
  floorDown() { }
  call() { }
  log() { console.log(this.floor, this.direction) }
}

module.exports = Elevator;
