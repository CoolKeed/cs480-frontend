import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ClientProfile from './pages/ClientProfile'
import CreateClient from './pages/CreateClient'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/client/:clientId" element={<ClientProfile />} />
      <Route path="/create-client" element={<CreateClient />} />
    </Routes>
  )
}

export default App