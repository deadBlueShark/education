### Data Abstraction

Hiding implementation is not just a matter of putting a layer of functions 
between the variables. Hiding implementation is about abstractions

Example:
The first uses concrete terms to communicate the fuel level of a vehicle, 
whereas the second does so with the abstraction of percentage. In the concrete 
case you can be pretty sure that these are just accessors of variables. In the 
abstract case you have no clue at all about the form of the data:

```java
// Concrete Vehicle
public interface Vehicle {
  double getFuelTankCapacityInGallons(); 
  double getGallonsOfGasoline();
}

// Abstract Vehicle (Preferable)
public interface Vehicle {
  double getPercentFuelRemaining();
}
```

#### Data/Object

Objects hide their data behind abstractions and expose functions that operate on 
that data. Data structure expose their data and have no meaningful functions