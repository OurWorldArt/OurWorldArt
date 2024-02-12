'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import GridComponent from '../../components/grid-components/gridComponent'
import GridHeader from '../../components/grid-components/gridHeader'

function Page() {

    return (
        <div className='bg-alice_blue'>
            <GridHeader />
            <div className='flex flex-col min-h-screen mx-auto ' style={{ maxWidth: '1500px' }}>
                <main className="flex-grow flex flex-col items-center justify-center">
                    <section className='relative text-center py-40'>
                        <div>
                            <GridComponent />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Page
