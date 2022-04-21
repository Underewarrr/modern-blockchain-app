import { Navbar, Welcome, Footer, Services, Transactions} from './components';

const App = () => {

  return (
    <div className="min-h-screen"> // min-h-screen is a global CSS class
       <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
        <Services />
        <Transactions />
        <Footer />
       </div>
    </div>
  )
}

export default App
