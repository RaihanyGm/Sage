import Sidebar from './components/Sidebar.jsx'
import CadastroImovel from './pages/CadastroImovel.jsx'

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar activeItem="Imóveis" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CadastroImovel />
      </main>
    </div>
  )
}
