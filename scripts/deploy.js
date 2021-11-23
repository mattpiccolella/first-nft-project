async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const mattNFT = await MyNFT.deploy()
    console.log("Contract deployed to address:", mattNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  