var contract = artifacts.require("./tradinghub.sol");

module.exports = (deployer)=>{
    deployer.deploy(contract);
}