'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

function ConnectWallet() {
  const account = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>
        {account.status === 'disconnected' && (
          <button
            onClick={() => connect({ connector: injected() })}
            type="button"
          >
            Connect
          </button>
        )}
        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>
    </>
  )
}

export default ConnectWallet
