import Footer from './Atoms/Footer'
import Header from './Atoms/Header'
import Hero from './Atoms/Hero'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col h-100">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
