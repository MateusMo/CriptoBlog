// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract UserCredit {
    struct User {
        uint value;
        address wallet;
    }

    User[] public users;

    constructor(uint _value, address _wallet) {
        users.push(User(_value, _wallet));
    }

    function getCredit(address wallet) public view returns (uint) {
        for (uint i = 0; i < users.length; i++) {
            if (users[i].wallet == wallet) {
                return users[i].value;
            }
        }
        revert("User not found");
    }

    function addCredit(uint _value, address _wallet) public {
        for (uint i = 0; i < users.length; i++) {
            if (users[i].wallet == _wallet) {
                users[i].value += _value;
                return;
            }
        }
        revert("User not found");
    }
}
