'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import ConnectWallet from '../../components/connectWallet'
import GridComponent from '../../components/grid-components/gridComponent'

function Page() {

    return (
        <div className='flex flex-col min-h-screen mx-auto bg-alice_blue' style={{ maxWidth: '1500px' }}>
            <main className="flex-grow flex flex-col items-center justify-center">
                <section className='relative text-center py-40'>
                    <div>
                        <ConnectWallet />
                    </div>
                    <div>
                        <GridComponent />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Page
