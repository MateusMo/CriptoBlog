// contract hash 0x62f66cd09574d049bade8b9c69fd71ec64ad1fb6
// wallet hash 0xE5e1082374e0b5Fa5a63a57cd77663324d65f8d6

const Web3 = require('web3');
const web3 = new Web3('https://sepolia.infura.io/v3/9b33ab4853b74669849fab0e37780cae');
const contractAddress = '0x62f66cd09574d049bade8b9c69fd71ec64ad1fb6';
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            }
        ],
        "name": "addCredit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "getCredit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "users",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
const contract = new web3.eth.Contract(contractABI, contractAddress);

const getCredit = async (req, res) => {
    try {
        const address = req.params.address;
        console.log(address)
        const value = await contract.methods.getCredit(address).call({ gas: 300000 });
        const text = `The credit avaiable in this address: ${address} is: ${value}`
        return res.status(200).send({ message: text });
    } catch (error) {
        return res.status(500).send({ message: "Error ao acessar o contrato" });
    }
}

const addCredit = async (req, res) => {
    try {
        const { value, wallet } = req.body; // Assuming you send value and wallet address in the request body
        console.log(value)
        console.log(wallet)
        // Call the addCredit function of the contract
        await contract.methods.addCredit(value, wallet).send({ from: wallet, gas: 300000 });

        return res.status(200).send({ message: "Credit added successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Error accessing the contract" });
    }
};

module.exports = { getCredit, addCredit }