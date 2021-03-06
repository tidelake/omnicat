// const assert = require('assert');
// const contract = require('truffle-contract')
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
// const json = require('./../build/contracts/Dass42.json');
// const _interface = json['abi'];
// const bytecode = json['bytecode'];

var Ownable = artifacts.require("Ownable")
var OmniCAT = artifacts.require("OmniCAT")
var Dass42 = artifacts.require("Dass42")

var accounts, dass42, owner;

contract('Dass42', async (accounts) => {

  it('deploys a contract', async () => {
    let inst = await Dass42.deployed()
    owner = inst.owner
    dass42 = inst
    assert(inst)
  })

  it('gives web3 to the test env', async () => {
    assert(web3)
  })

  it('deploys a contract', async () => {
    const dass42Owner = dass42.owner

    assert.equal(owner, dass42Owner,
      "The manager/owner is the one who launches the smart contract.")
  });

});
