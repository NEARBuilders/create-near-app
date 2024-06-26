import React from 'react'
import { Widget } from 'near-social-vm'
import localComponents from '../../build/data.json'

function Urbit() {
  //  on testnet chain components
  const UrbitWidgetTestnet = 'urbitlabs.testnet/widget/UrbitWidget'
  const UrbitHeaderTestnet = 'urbitlabs.testnet/widget/UrbitHeader'
  //  hosts locally built VM components
  const Header = localComponents['account.Urbit/widget/components.header']
  const Documentation =
    localComponents['account.Urbit/widget/components.documentation']
  const UrbitWidget =
    localComponents['account.Urbit/widget/components.UrbitWidget']

  return (
    <div>
      {/* This component is onchain */}
      <Widget src={UrbitHeaderTestnet} />
      <Widget code={Documentation.code} />
      {/* This component is local and stored in build/data.json */}
      <Widget
        // Uncomment src and comment out code attribute to pull same component but onchain
        // src = {UrbitWidgetTestnet}
        code={UrbitWidget.code}
        props={{
          ship: process.env.REACT_APP_FAKESHIP,
          host: process.env.REACT_APP_HOST,
          code: process.env.REACT_APP_FAKE_CODE
        }}
      />
    </div>
  )
}

export default Urbit
