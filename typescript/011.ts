interface Point {
  x: number;
  y: number;
}

interface Passenger {
  name: string;
}

interface Vehicle {
  new(): Vehicle;

  currentLocation: Point;
  travelTo(destination: Point): void;
  addPassenger(passenger: Passenger): void;
  removePassenger(passenger: Passenger): void;
}

