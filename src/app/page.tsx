import Header from '../components/header'
import Footer from '../components/footer';

import Link from 'next/link';

function App() {

  return (
    <div className='flex flex-col min-h-screen mx-auto' style={{ maxWidth: '1500px' }}>
      <Header />
      <main className="flex-grow">
        <section className='text-center py-40 min-h-screen flex flex-col justify-center relative'>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'linear-gradient(to bottom, rgba(201, 117, 156, 0.7) 40%, rgba(212, 137, 127, 0.5) 50%)',
              filter: 'blur(200px)',
              width: '60%',
              height: '60%',
            }}
          />
          <div className='relative z-10'>
            <h1 className="text-7xl text-gray-800 leading-tight text-center responsive-heading">
              Welcome to Your Art
            </h1>
            <p className="text-xl text-gray-600 mt-4 text-center">
              Dive into the first-ever fully collaborative digital art piece on the blockchain.
              <br />Our World Art is a revolutionary platform where every pixel tells a story.
            </p>
            <div className="flex justify-center mt-8">
              <div className="text-center px-4">
                <p className="text-xl font-semibold text-gray-600">Innovate</p>
              </div>
              <div className="text-center px-4">
                <p className="text-xl font-semibold text-gray-600">Collaborate</p>
              </div>
              <div className="text-center px-4">
                <p className="text-xl font-semibold text-gray-600">Collect</p>
              </div>
            </div>
            <nav className="flex justify-center p-8">
              <Link href="/grid" className="text-xl text-white bg-old_rose hover:bg-thulian_pink font-bold py-2 px-4 rounded-xl shadow-lg transition duration-300">
                Launch your Artistry
              </Link>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
