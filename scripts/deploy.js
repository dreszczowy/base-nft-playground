// Example deploy script for AdvancedNFT (Hardhat / ethers)

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying with:', deployer.address);

  const AdvancedNFT = await ethers.getContractFactory('AdvancedNFT');
  const nft = await AdvancedNFT.deploy(
    'Base Play NFT',
    'BPNFT',
    'ipfs://QmExample/',
    1000,
    ethers.parseEther('0.001')
  );

  await nft.waitForDeployment();
  console.log('NFT deployed to:', await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
