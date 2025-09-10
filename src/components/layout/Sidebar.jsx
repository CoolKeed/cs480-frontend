import { clients } from '../../data/mockData'

export default function Sidebar() {
  return (
    <div style={{width: '240px', backgroundColor: 'white', borderRight: '1px solid #e5e7eb', height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div style={{flex: 1, padding: '20px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
          <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: 0}}>Clients</h2>
          <button style={{width: '20px', height: '20px', border: '1px solid #9ca3af', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', fontSize: '14px', color: '#6b7280', cursor: 'pointer'}}>
            +
          </button>
        </div>
        
        <div style={{marginBottom: '20px'}}>
          <input 
            type="text" 
            placeholder="Search" 
            style={{width: '100%', padding: '8px 10px', fontSize: '12px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px', outline: 'none'}}
          />
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {clients.map((client) => (
            <div key={client.id} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 0'}}>
              <div style={{width: '30px', height: '30px', backgroundColor: '#f3f4f6', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                <div style={{width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%', border: '1px solid #d1d5db'}}></div>
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <p style={{fontSize: '13px', fontWeight: '500', color: '#111827', margin: '0 0 2px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{client.name}</p>
                <p style={{fontSize: '11px', color: '#6b7280', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{client.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}