import React from 'react'

function Hello() {

  function userAddress() {
    return {
      address: {
        galiNo: 8,
        street: 'Ravidas mandir road',
      },
      correspondenceAddress: {
        galiNo: 10,
        street: 'Main market road',
      },
    }
  }

  const addressData = userAddress()

  return (
    <div id="hello_compo">
      <div>Hello {"Kailash"}</div>
      <div>Address: Gali No. {addressData.address.galiNo}, {addressData.address.street}</div>
      <div>
        Correspondence Address: Gali No. {addressData.correspondenceAddress.galiNo},{' '}
        {addressData.correspondenceAddress.street}
      </div>
    </div>
  )
}

export default Hello