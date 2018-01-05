module.exports = {
  ...require('./ethereum'),

  // Abi accessible using the `.abi` property
  contracts: {
    MANAToken: require('./ethereum/MANAToken'),
    TerraformReserve: require('./ethereum/TerraformReserve'),
    LANDTerraformSale: require('./ethereum/LANDTerraformSale')
  },
}
