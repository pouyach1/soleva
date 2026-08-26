import { ShopProvider } from './context/ShopProvider'
import { Home } from './pages/Home'
import './styles/soleva.css'

function App() {
  return (
    <ShopProvider>
      <Home />
    </ShopProvider>
  )
}

export default App
