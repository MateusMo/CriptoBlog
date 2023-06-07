// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract UserCredit {
    struct User {
        uint value;
        address wallet;
    }

    User[] public users;

    constructor(uint[] memory _values, address[] memory _wallets) {
        require(_values.length == _wallets.length, "Invalid input lengths");

        for (uint i = 0; i < _values.length; i++) {
            users.push(User(_values[i], _wallets[i]));
        }
    }

    function getCredit(address wallet) public view returns (uint) {
        for (uint i = 0; i < users.length; i++) {
            if (users[i].wallet == wallet) {
                return users[i].value;
            }
        }
        revert("User not found");
    }

    function addCredit(uint _value) public {
        for (uint i = 0; i < users.length; i++) {
            if (users[i].wallet == msg.sender) {
                users[i].value += _value;
                return;
            }
        }
        revert("User not found");
    }
}
