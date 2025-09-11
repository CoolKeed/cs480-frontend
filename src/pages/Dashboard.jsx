import Layout from '../components/layout/Layout'
import { updates, user } from '../data/mockData'

export default function Dashboard() {
  return (
    <Layout>
      <div style={{padding: '20px 30px'}}>
        <div style={{marginBottom: '20px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: '0 0 10px 0'}}>Dashboard</h1>
          <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Welcome back, {user.name}</p>
        </div>
        
        <div>
          <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 20px 0'}}>Latest Updates</h2>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            {updates.map((update) => (
              <div key={update.id} style={{display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f3f4f6'}}>
                <div style={{width: '20px', height: '20px', border: '2px solid #9ca3af', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px', flexShrink: 0}}>
                  {update.completed && (
                    <div style={{width: '8px', height: '5px', borderLeft: '2px solid #6b7280', borderBottom: '2px solid #6b7280', transform: 'rotate(-45deg)', marginTop: '-2px'}}></div>
                  )}
                </div>
                <div style={{flex: 1, paddingTop: '0px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px'}}>
                    <p style={{fontSize: '13px', color: '#111827', fontWeight: '500', margin: 0, lineHeight: '1.3'}}>{update.title}</p>
                    <span style={{fontSize: '11px', color: '#6b7280', backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px'}}>{update.type}</span>
                  </div>
                  <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 5px 0', lineHeight: '1.4'}}>{update.description}</p>
                  <div style={{display: 'flex', alignItems: 'center', gap: '15px', fontSize: '11px', color: '#9ca3af'}}>
                    <span>Client: {update.clientName}</span>
                    <span>Source: {update.source}</span>
                    <span>{update.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}