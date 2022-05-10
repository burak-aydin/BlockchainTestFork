var abi = `
[
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sayHello",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "inp",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
`


var registerContract = new web3.eth.Contract(JSON.parse(abi));
var register = registerContract.deploy({
     data: '0x608060405234801561001057600080fd5b5061050e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634ed3885e146100465780636d4ce63c14610062578063ef5fb05b14610080575b600080fd5b610060600480360381019061005b919061029a565b61009e565b005b61006a6100b8565b604051610077919061031c565b60405180910390f35b61008861014a565b604051610095919061031c565b60405180910390f35b80600090805190602001906100b4929190610187565b5050565b6060600080546100c7906103f2565b80601f01602080910402602001604051908101604052809291908181526020018280546100f3906103f2565b80156101405780601f1061011557610100808354040283529160200191610140565b820191906000526020600020905b81548152906001019060200180831161012357829003601f168201915b5050505050905090565b60606040518060400160405280600b81526020017f68656c6c6f576f726c6421000000000000000000000000000000000000000000815250905090565b828054610193906103f2565b90600052602060002090601f0160209004810192826101b557600085556101fc565b82601f106101ce57805160ff19168380011785556101fc565b828001600101855582156101fc579182015b828111156101fb5782518255916020019190600101906101e0565b5b509050610209919061020d565b5090565b5b8082111561022657600081600090555060010161020e565b5090565b600061023d61023884610363565b61033e565b905082815260208101848484011115610259576102586104b8565b5b6102648482856103b0565b509392505050565b600082601f830112610281576102806104b3565b5b813561029184826020860161022a565b91505092915050565b6000602082840312156102b0576102af6104c2565b5b600082013567ffffffffffffffff8111156102ce576102cd6104bd565b5b6102da8482850161026c565b91505092915050565b60006102ee82610394565b6102f8818561039f565b93506103088185602086016103bf565b610311816104c7565b840191505092915050565b6000602082019050818103600083015261033681846102e3565b905092915050565b6000610348610359565b90506103548282610424565b919050565b6000604051905090565b600067ffffffffffffffff82111561037e5761037d610484565b5b610387826104c7565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b82818337600083830152505050565b60005b838110156103dd5780820151818401526020810190506103c2565b838111156103ec576000848401525b50505050565b6000600282049050600182168061040a57607f821691505b6020821081141561041e5761041d610455565b5b50919050565b61042d826104c7565b810181811067ffffffffffffffff8211171561044c5761044b610484565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f830116905091905056fea2646970667358221220623c6e70c7766e89d86813f0c80ee9991871d4e64b9a085f6aaa628a533d2e6664736f6c63430008070033',
     arguments: [
     ]
}).send({
     from: coinbase,
     gas: '14700000'
   }, (err, transactionHash) => {
        console.log('Transaction Hash :', transactionHash);
}).on('confirmation', () => {}).then((newContractInstance) => {
    console.log('Deployed Contract Address : ', newContractInstance.options.address);
	registerContract = newContractInstance;
})