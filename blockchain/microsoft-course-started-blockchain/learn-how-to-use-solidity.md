### What is Solidity?
Solidity is an object-oriented language for writing smart contracts.
Smart contracts are programs stored inside a blockchain, and they specify the rules and behavior for digital assets are transferred. 
You use Solidity to program smart contracts for the Ethereum blockchain platform. 
Smart contracts contain state and programmable logic. Transactions result in functions executed in smart contracts. Thus, smart contracts enable you to create a business workflow.

### Ethereum Virtual Machine
Solidity contracts run on the Ethereum Virtual Machine, or EVM for short. It's a sandboxed environment that is completely isolated. It doesn't access anything else on the network besides the contracts it executes.

### Language basics
All Solidity contracts typically include:
- Pragma directives
- State variables
- Functions
- Events

**1. Pragma directives**
Pragma is the keyword that you use to ask the compiler to check whether its version of Solidity matches the one required. A match means your source file can run successfully. If it doesn't match, the compiler will give an error.

```solidity
pragma solidity ^0.7.0;
```
This line means that the source file will compile with a compiler greater than the version 0.7.0, up to 0.7.9. Starting in version 0.8.0 there will likely be breaking changes introduced that the source file can't compile successfully.

**2. State variables**
State variables are key to any Solidity source file. State variable values are stored in contract storage permanently.

```solidity
pragma solidity ^0.7.0 <0.8.0;

// Contract source files always start with the definition contract ContractName
contract Marketplace {
  uint price; // State variable

}
```
The integer type `uint` indicates that this variable is an unsigned integer with 256 bits. That means it can store positive numbers in the range of 0 to 225^6 -1

**3. Functions**
```solidity
pragma solidity ^0.7.0;

contract Marketplace {
  function buy() public {

  }

  function buy2(uint price) public returns (uint) {

  }
}
```

Visibility specifiers: public, private, internal, and external.

**4. Function modifiers**
Function modifiers can be used to change the behavior of functions. They work by checking a condition before the function executes. For example, a function could check that only a user designated as a seller can list an item for sale.

**5. Events**