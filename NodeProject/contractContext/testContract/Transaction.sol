// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Transaction{
    uint public value;
    constructor(uint _value){
        value = _value;
    }
    function getValue() public view returns(uint){
        return value;
    }
    function setValue(uint _newValue) public returns(bool){
        require(_newValue >= 0,"O novo valor deve ser maior ou igual a zero");
        value = _newValue;
        return true;
    }
}