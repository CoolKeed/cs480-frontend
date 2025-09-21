import { useNavigate } from 'react-router-dom'
import { user, appConfig } from '../../data/mockData'

export default function Header() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '10px 20px', 
      borderBottom: '1px solid #e5e7eb', 
      backgroundColor: 'white',
      height: '50px'
    }}>
      <h1 
        onClick={handleTitleClick}
        style={{
          fontSize: '14px', 
          fontWeight: '500', 
          color: '#111827', 
          margin: 0,
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
        onMouseLeave={(e) => e.target.style.color = '#111827'}
      >
        {appConfig.title}
      </h1>
      
      {user.profileImage ? (
        <img 
          src={user.profileImage} 
          alt={user.fullName} 
          style={{
            width: '30px', 
            height: '30px', 
            borderRadius: '50%', 
            border: '1px solid #d1d5db',
            objectFit: 'cover'
          }}
        />
      ) : (
        <div style={{
          width: '30px', 
          height: '30px', 
          backgroundColor: '#3b82f6', 
          borderRadius: '50%', 
          border: '1px solid #d1d5db', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {user.avatar}
        </div>
      )}
    </div>
  )
}