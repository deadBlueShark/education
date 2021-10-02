// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store and retrieve value in a state variable
 */

contract Storage {
  uint256 number;

  /**
   * @dev Store value in a variable
   * @param num value to store
   */
  function store(uint256 num) public {
    number = num;
  }

  /**
   * @dev Return a value
   * @return value of 'number'
   */
  function retrieve() public view returns (uint256) {
    return number;
  }
}