const hre = require("hardhat");

async function main(){
    const Tracking = await hre.ethers.getContractFactory("Tracking");
    const tracking = await Tracking.deploy();
    
    await tracking.waitForDeployment();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});