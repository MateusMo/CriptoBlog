const Web3 = require('web3');
const web3 = new Web3('https://sepolia.infura.io/v3/9b33ab4853b74669849fab0e37780cae'); 
const contractAddress = '0x2f4d084eb05de0208bc286ef66448fc82077b3c7';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newValue",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getValue",
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
		"inputs": [],
		"name": "value",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(contractABI, contractAddress);

const getValue = async (req, res) => {
    try {
        const value = await contract.methods.getValue().call({gas: 300000 });
        return res.status(200).send({ message: value });
    } catch (error) {
        console.log('chegou no getValue')
        console.log(error)
        return res.status(500).send({ message: "Error ao acessar o contrato" });
    }
}

const setValue = async (req, res) => {
    try {
        const { newValue } = req.body;
        const accounts = await web3.eth.getAccounts();
        const gasLimit = 300000; 

        const result = await contract.methods.setValue(newValue).send({
            from: accounts[0],
            gas: gasLimit,
        });

        return res.status(200).send({ message: result });
    } catch (error) {
        console.log('chegou no setValue');
        console.log(error);
        return res.status(500).send({ message: "Error ao acessar o contrato" });
    }
}

module.exports = {
    getValue,
    setValue,
};
