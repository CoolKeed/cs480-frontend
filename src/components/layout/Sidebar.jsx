import { useNavigate, useLocation } from 'react-router-dom'
import { clients } from '../../data/mockData'

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClientClick = (clientId) => {
    navigate(`/client/${clientId}`);
  };

  const handleDashboardClick = () => {
    navigate('/');
  };

  const handleCreateClient = () => {
    navigate('/create-client');
  };

  return (
    <div style={{width: '240px', backgroundColor: 'white', borderRight: '1px solid #e5e7eb', height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div style={{flex: 1, padding: '20px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
          <h2 
            onClick={handleDashboardClick}
            style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: 0, cursor: 'pointer'}}
          >
            Clients
          </h2>
          <button 
            onClick={handleCreateClient}
            style={{
              width: '20px', 
              height: '20px', 
              border: '1px solid #9ca3af', 
              borderRadius: '2px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: 'white', 
              fontSize: '14px', 
              color: '#6b7280', 
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.color = '#111827';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#6b7280';
            }}
          >
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
          {clients.map((client) => {
            const isActive = location.pathname === `/client/${client.id}`;
            return (
              <div 
                key={client.id} 
                onClick={() => handleClientClick(client.id)}
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  padding: '5px 8px', 
                  cursor: 'pointer',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#f3f4f6' : 'transparent'
                }}
              >
                <div style={{width: '30px', height: '30px', backgroundColor: '#f3f4f6', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <div style={{width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%', border: '1px solid #d1d5db'}}></div>
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <p style={{fontSize: '13px', fontWeight: '500', color: '#111827', margin: '0 0 2px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{client.name}</p>
                  <p style={{fontSize: '11px', color: '#6b7280', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{client.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}