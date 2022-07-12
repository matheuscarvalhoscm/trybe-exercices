enum Colors {
  Black = 'Black',
  White = 'White',
  Red = 'Red',
  Silver = 'Silver',
}

enum Doors {
  Driver = 1,
  Passenger,
  BackDriver,
  BackPassenger,
}

enum Turn {
  Left = 'LEFT',
  Right = 'RIGHT'
}

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('The car just honked.');
  }

  openTheDoor(door: Doors): void {
    if (door > this.doors) console.log(`This car only have ${this.doors} doors!`);
    console.log(`You just opened the ${Doors[door]}'s door.`);
  }

  closeTheDoor(door: Doors): void {
    if (door > this.doors) console.log(`This car only have ${this.doors} doors!`);
    console.log(`You just closed the ${Doors[door]}'s door.`);
  }

  turnOn(): void {
    console.log(`The car is on.`);
  }

  turnOff(): void {
    console.log(`The car is off.`);
  }

  speedUp(): void {
    console.log(`You are speeding up the car.`);
  }

  speedDown(): void {
    console.log(`You are slowing down the car.`);
  }

  stop(): void {
    console.log(`The car stop.`);
  }

  turn(direction: Turn) {
    console.log(`You turned to the ${direction}`);
  }
}

const Renegade = new Car('Jeep', Colors.Black, 4);

Renegade.turnOn();
Renegade.speedUp();
Renegade.turn(Turn.Left);
Renegade.speedUp();
Renegade.turn(Turn.Right);
Renegade.speedUp();
Renegade.turn(Turn.Right);
Renegade.speedUp();
Renegade.speedDown();
Renegade.stop();
Renegade.openTheDoor(Doors.BackPassenger);
Renegade.closeTheDoor(Doors.BackPassenger);
Renegade.speedUp();
Renegade.turn(Turn.Right);
Renegade.speedUp();
Renegade.turn(Turn.Left);
Renegade.speedUp();
Renegade.turn(Turn.Right);
Renegade.speedUp();
Renegade.speedDown();
Renegade.stop();
Renegade.openTheDoor(Doors.BackPassenger);
Renegade.closeTheDoor(Doors.BackPassenger);
Renegade.speedUp();
