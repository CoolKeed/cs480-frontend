export default function FamilyTree({ data }) {
  if (!data || !data.nodes) {
    return (
      <div style={{width: '100%', height: '200px', border: '1px solid #e5e7eb', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa'}}>
        <div style={{textAlign: 'center', color: '#6b7280'}}>
          <div style={{fontSize: '24px', marginBottom: '10px'}}>👥</div>
          <div style={{fontSize: '12px'}}>No family data available</div>
        </div>
      </div>
    );
  }

  const { nodes } = data;
  
  // Generate connection lines
  const connections = [];
  
  nodes.forEach(node => {
    // Draw lines to children
    if (node.children) {
      node.children.forEach(childId => {
        const child = nodes.find(n => n.id === childId);
        if (child) {
          connections.push({
            from: { x: node.x, y: node.y },
            to: { x: child.x, y: child.y },
            type: 'parent-child'
          });
        }
      });
    }
    
    // Draw lines to spouse
    if (node.spouse && node.x < nodes.find(n => n.id === node.spouse)?.x) {
      const spouse = nodes.find(n => n.id === node.spouse);
      if (spouse) {
        connections.push({
          from: { x: node.x, y: node.y },
          to: { x: spouse.x, y: spouse.y },
          type: 'marriage'
        });
      }
    }
  });

  return (
    <div style={{width: '100%', height: '350px', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white', position: 'relative', overflow: 'hidden'}}>
      <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0}}>
        {/* Connection lines */}
        {connections.map((connection, index) => (
          <g key={index}>
            {connection.type === 'marriage' ? (
              <line
                x1={connection.from.x}
                y1={connection.from.y}
                x2={connection.to.x}
                y2={connection.to.y}
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            ) : (
              <g>
                {/* Vertical line down from parent */}
                <line
                  x1={connection.from.x}
                  y1={connection.from.y + 20}
                  x2={connection.from.x}
                  y2={connection.from.y + 50}
                  stroke="#6b7280"
                  strokeWidth="1"
                />
                {/* Horizontal line to child position */}
                <line
                  x1={connection.from.x}
                  y1={connection.from.y + 50}
                  x2={connection.to.x}
                  y2={connection.from.y + 50}
                  stroke="#6b7280"
                  strokeWidth="1"
                />
                {/* Vertical line down to child */}
                <line
                  x1={connection.to.x}
                  y1={connection.from.y + 50}
                  x2={connection.to.x}
                  y2={connection.to.y - 20}
                  stroke="#6b7280"
                  strokeWidth="1"
                />
              </g>
            )}
          </g>
        ))}
      </svg>
      
      {/* Family member nodes */}
      {nodes.map((person) => (
        <div
          key={person.id}
          style={{
            position: 'absolute',
            left: person.x - 40,
            top: person.y - 20,
            width: '80px',
            height: '40px',
            backgroundColor: person.relation === 'self' ? '#3b82f6' : '#f3f4f6',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <div style={{
            fontSize: '10px', 
            fontWeight: '600', 
            color: person.relation === 'self' ? 'white' : '#111827',
            textAlign: 'center',
            lineHeight: '1.2'
          }}>
            {person.name}
          </div>
          {person.age && (
            <div style={{
              fontSize: '8px', 
              color: person.relation === 'self' ? '#bfdbfe' : '#6b7280'
            }}>
              Age {person.age}
            </div>
          )}
        </div>
      ))}
      
      {/* Legend */}
      <div style={{position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px', color: '#6b7280'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px'}}>
          <div style={{width: '15px', height: '2px', backgroundColor: '#6b7280'}}></div>
          <span>Parent-Child</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
          <div style={{width: '15px', height: '2px', backgroundColor: '#ef4444', borderStyle: 'dashed'}}></div>
          <span>Marriage</span>
        </div>
      </div>
    </div>
  );
}