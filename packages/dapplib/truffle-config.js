require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth shift promote hidden private swallow twelve'; 
let testAccounts = [
"0xb91a9ce61e65baa60d78d61f38aad1cb3c5e7b66d59767530bc044dda9605547",
"0x3fe19bd98402e0f779b841be68f064799368f109d1233448c1fc641b87793b52",
"0x9aa865c8a9d9127fff782e88dbabb8711333adbe01dfb40e11a95d16986e9671",
"0x7a1a894ce1c91e1cd94fdab5b0526de081df8b26209c732ef4f2d8c9e8b9620b",
"0x9a507136074028d06b70f149dd75511b6ee50d5928dbcbf0163ccd94fb47f894",
"0x42998bf2fbe862552b65593239e5d05f70354233fee58d9cb690d9bb0bf8c1f4",
"0xb63b545c838032bc4d263280dd22a5413061c36c75df19f4c061ef16ade9cf0f",
"0xc92d15887045ac2e563ce5e0363ea670208600f289cea5b5c29747a6bba397dc",
"0xd78049c88c1b1aa7787bddb444d0081b0583beba460b6531e28a5b57d80a60db",
"0x079c79996c4d121aae48312a1d0347201603b89471365e1f7b611271ef99b45f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

