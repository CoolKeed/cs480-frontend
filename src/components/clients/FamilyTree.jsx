import { useState } from 'react';

export default function FamilyTree({ data }) {
  const [selectedPerson, setSelectedPerson] = useState(null);

  if (!data || !data.nodes) {
    return (
      <div style={{width: '100%', height: '400px', border: '1px solid #e5e7eb', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa'}}>
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

  const handlePersonClick = (person) => {
    setSelectedPerson(selectedPerson?.id === person.id ? null : person);
  };

  return (
    <div style={{display: 'flex', gap: '20px'}}>
      {/* Family Tree Visualization */}
      <div style={{width: '70%', height: '400px', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white', position: 'relative', overflow: 'hidden'}}>
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
                    y1={connection.from.y + 25}
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
                    y2={connection.to.y - 25}
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
            onClick={() => handlePersonClick(person)}
            style={{
              position: 'absolute',
              left: person.x - 50,
              top: person.y - 25,
              width: '100px',
              height: '50px',
              backgroundColor: person.relation === 'self' ? '#3b82f6' : selectedPerson?.id === person.id ? '#10b981' : '#f3f4f6',
              border: '2px solid',
              borderColor: selectedPerson?.id === person.id ? '#10b981' : '#d1d5db',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: selectedPerson?.id === person.id ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (selectedPerson?.id !== person.id) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedPerson?.id !== person.id) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <div style={{
              fontSize: '10px', 
              fontWeight: '600', 
              color: person.relation === 'self' || selectedPerson?.id === person.id ? 'white' : '#111827',
              textAlign: 'center',
              lineHeight: '1.2'
            }}>
              {person.name}
            </div>
            <div style={{
              fontSize: '8px', 
              color: person.relation === 'self' || selectedPerson?.id === person.id ? '#bfdbfe' : '#6b7280'
            }}>
              Age {person.age}
            </div>
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

      {/* Person Details Panel */}
      <div style={{width: '30%', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white', padding: '15px'}}>
        <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 15px 0'}}>
          Family Member Details
        </h3>
        
        {selectedPerson ? (
          <div>
            <div style={{marginBottom: '15px', textAlign: 'center'}}>
              <div style={{
                width: '60px', 
                height: '60px', 
                backgroundColor: selectedPerson.relation === 'self' ? '#3b82f6' : '#10b981',
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 auto 10px auto'
              }}>
                {selectedPerson.gender === 'Male' ? '👨' : '👩'}
              </div>
              <h4 style={{fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 5px 0'}}>
                {selectedPerson.name}
              </h4>
              <p style={{fontSize: '12px', color: '#6b7280', margin: 0, textTransform: 'capitalize'}}>
                {selectedPerson.relation}
              </p>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '12px', color: '#6b7280'}}>Age:</span>
                <span style={{fontSize: '12px', color: '#111827', fontWeight: '500'}}>{selectedPerson.age}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '12px', color: '#6b7280'}}>Gender:</span>
                <span style={{fontSize: '12px', color: '#111827', fontWeight: '500'}}>{selectedPerson.gender}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '12px', color: '#6b7280'}}>Occupation:</span>
                <span style={{fontSize: '12px', color: '#111827', fontWeight: '500'}}>{selectedPerson.occupation}</span>
              </div>
              
              {selectedPerson.spouse && (
                <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e5e7eb'}}>
                  <p style={{fontSize: '11px', color: '#6b7280', marginBottom: '5px'}}>Spouse:</p>
                  <p style={{fontSize: '12px', color: '#111827', fontWeight: '500'}}>
                    {nodes.find(n => n.id === selectedPerson.spouse)?.name}
                  </p>
                </div>
              )}
              
              {selectedPerson.children && selectedPerson.children.length > 0 && (
                <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e5e7eb'}}>
                  <p style={{fontSize: '11px', color: '#6b7280', marginBottom: '5px'}}>Children:</p>
                  {selectedPerson.children.map(childId => {
                    const child = nodes.find(n => n.id === childId);
                    return (
                      <p key={childId} style={{fontSize: '12px', color: '#111827', fontWeight: '500', margin: '2px 0'}}>
                        {child?.name} ({child?.age})
                      </p>
                    );
                  })}
                </div>
              )}
              
              {selectedPerson.parents && selectedPerson.parents.length > 0 && (
                <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e5e7eb'}}>
                  <p style={{fontSize: '11px', color: '#6b7280', marginBottom: '5px'}}>Parents:</p>
                  {selectedPerson.parents.map(parentId => {
                    const parent = nodes.find(n => n.id === parentId);
                    return (
                      <p key={parentId} style={{fontSize: '12px', color: '#111827', fontWeight: '500', margin: '2px 0'}}>
                        {parent?.name} ({parent?.age})
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{textAlign: 'center', color: '#6b7280', padding: '20px 0'}}>
            <p style={{fontSize: '12px', margin: 0}}>Click on a family member to view their details</p>
          </div>
        )}
      </div>
    </div>
  );
}