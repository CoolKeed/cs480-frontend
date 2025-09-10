import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div style={{height: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <div style={{display: 'flex', flex: 1}}>
        <Sidebar />
        <main style={{flex: 1, backgroundColor: 'white', overflow: 'auto'}}>
          {children}
        </main>
      </div>
    </div>
  )
}