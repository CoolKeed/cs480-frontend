import Layout from '../components/layout/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <div style={{padding: '20px 30px'}}>
        <div style={{marginBottom: '20px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: '0 0 10px 0'}}>Dashboard</h1>
          <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Welcome back, Sarah</p>
        </div>
        
        <div>
          <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 20px 0'}}>Latest Updates</h2>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
              <div style={{width: '20px', height: '20px', border: '2px solid #9ca3af', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px', flexShrink: 0}}>
                <div style={{width: '8px', height: '5px', borderLeft: '2px solid #6b7280', borderBottom: '2px solid #6b7280', transform: 'rotate(-45deg)', marginTop: '-2px'}}></div>
              </div>
              <div style={{flex: 1, paddingTop: '0px'}}>
                <p style={{fontSize: '13px', color: '#111827', fontWeight: '500', margin: '0 0 5px 0', lineHeight: '1.3'}}>KANDAP</p>
                <p style={{fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.4'}}>KANDAPKANDAPKANDAPKANDAPKANDAPKANDAP</p>
              </div>
            </div>
            
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
              <div style={{width: '20px', height: '20px', border: '2px solid #9ca3af', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px', flexShrink: 0}}>
                <div style={{width: '8px', height: '5px', borderLeft: '2px solid #6b7280', borderBottom: '2px solid #6b7280', transform: 'rotate(-45deg)', marginTop: '-2px'}}></div>
              </div>
              <div style={{flex: 1, paddingTop: '0px'}}>
                <p style={{fontSize: '13px', color: '#111827', fontWeight: '500', margin: '0 0 5px 0', lineHeight: '1.3'}}>KANDAP</p>
                <p style={{fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.4'}}>KANDAPKANDAPKANDAPKANDAPKANDAPKANDAPKANDAP</p>
              </div>
            </div>
            
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
              <div style={{width: '20px', height: '20px', border: '2px solid #9ca3af', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px', flexShrink: 0}}>
                <div style={{width: '8px', height: '5px', borderLeft: '2px solid #6b7280', borderBottom: '2px solid #6b7280', transform: 'rotate(-45deg)', marginTop: '-2px'}}></div>
              </div>
              <div style={{flex: 1, paddingTop: '0px'}}>
                <p style={{fontSize: '13px', color: '#111827', fontWeight: '500', margin: '0 0 5px 0', lineHeight: '1.3'}}>KANDAP</p>
                <p style={{fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.4'}}>KANDAPKANDAPKANDAPKANDAPKANDAPKANDAP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}