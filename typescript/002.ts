// enum
const enum WEEKDAY {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}
console.log(WEEKDAY.MONDAY);

// union
let info: string | number = "Le Chi Nguyen";
info = 9;

type MixType = string | number;
let infor: MixType = 90;

// intersection type
interface Skier {
  slide(): void;
}

interface Shooter {
  shoot(): void;
}

type BiAthlete = Skier & Shooter;
let david: BiAthlete;
david.shoot();
david.slide();
