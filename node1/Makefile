run:
	geth --nousb --datadir=$(pwd) --syncmode 'full' --port 30311 --miner.gasprice 0 --miner.gastarget 470000000000 --http --http.addr 'localhost' --http.port 8545 --http.api admin,eth,miner,net,txpool,personal,web3 --mine --allow-insecure-unlock --unlock "0x1304Aff2A9c1372D777b02C5c7aC237edcab8D6a" --password password.txt --bootnodes "enode://118c1c381437bc2105f6aae4497047a2ff3893a16721ffa72f701f9cdfa855ccb88e34f05755cca3ba5ebb2aa1d0415edc90173d34f9af98fa992f5191e79d47@127.0.0.1:0?discport=30310" console

