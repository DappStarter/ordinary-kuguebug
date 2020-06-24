require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember huge guess private flat twenty'; 
let testAccounts = [
"0xda7d1cf6a2165d6394fccd36e1d86c616adfd902ab54b2b7ba4d35c3118b2804",
"0xab62acbaa302c9cf677116f8e3b0de6de26eee855d3b1183e671bd4148c66724",
"0xa58be16eceb6d8f0f843ef5a229c441faea055af0e432d945060ad67e53a3bee",
"0xf58d0fd20ee020426db6e6b5dc71bc6b4cc9e4c3d22c47e95fbfd355244c0804",
"0x0aaab1448c37f612acb8f8241b3e08897b5b74953589f0a7445efbece04b86fa",
"0x8a5182a638f8e39fd8df008753008bdf91ef6c86d1c643231e3d8296cff47c49",
"0x6a47a87531bdc50e586346bcfe78a8677065461ffcb057f1f3224406290f38fe",
"0x8d418f6d0ddb8aa1ab465cbe6b9f9b4e826255cf0229ea3e869dfe442e311d2f",
"0x7a0b4d49a4bd157a9ee16c36cf27cd774773abb607ce720d99c813bf23ed61cc",
"0x620b566945d03c8ffe8ac5afab0438f3a41e9e70436831fa767b7b7f27d228c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
