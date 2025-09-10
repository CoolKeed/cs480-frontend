export default function Header() {
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
      <h1 style={{
        fontSize: '14px', 
        fontWeight: '500', 
        color: '#111827', 
        margin: 0
      }}>
        Client Factpack 360
      </h1>
      
      <div style={{
        width: '30px', 
        height: '30px', 
        backgroundColor: '#e5e7eb', 
        borderRadius: '50%', 
        border: '1px solid #d1d5db', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <div style={{
          width: '22px', 
          height: '22px', 
          backgroundColor: 'white', 
          borderRadius: '50%', 
          border: '1px solid #9ca3af'
        }}></div>
      </div>
    </div>
  )
}