import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { clientDetails, clientBiographies, familyTreeData } from '../data/mockData'
import FamilyTree from '../components/clients/FamilyTree'

export default function ClientProfile() {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const client = clientDetails[parseInt(clientId)];
  const biography = clientBiographies[parseInt(clientId)];
  const familyData = familyTreeData[parseInt(clientId)];
  
  if (!client || !biography) {
    return (
      <Layout>
        <div style={{padding: '20px 30px'}}>
          <button onClick={() => navigate('/')} style={{marginBottom: '20px', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer'}}>
            ← Back to Dashboard
          </button>
          <div>Client not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{padding: '20px 30px', height: '100%', overflow: 'auto'}}>
        {/* Back button */}
        <button 
          onClick={() => navigate('/')} 
          style={{marginBottom: '20px', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer', fontSize: '12px'}}
        >
          ← Back to Dashboard
        </button>

        {/* Client Header */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: '600'}}>
              {client.avatar}
            </div>
            <div>
              <h1 style={{fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: '0 0 5px 0'}}>{client.name}</h1>
              <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>{client.title} • {client.company}</p>
            </div>
          </div>
          <div style={{fontSize: '12px', color: '#6b7280'}}>
            Updated 2 minutes ago
          </div>
        </div>

        {/* Financial Stats */}
        <div style={{display: 'flex', gap: '40px', marginBottom: '30px'}}>
          <div>
            <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 5px 0'}}>Net Worth</p>
            <p style={{fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0}}>{client.financials.netWorth}</p>
          </div>
          <div>
            <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 5px 0'}}>Portfolio Value</p>
            <p style={{fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0}}>{client.financials.portfolioValue}</p>
          </div>
          <div>
            <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 5px 0'}}>Total Investments</p>
            <p style={{fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0}}>{client.financials.totalInvestments}</p>
          </div>
        </div>

        {/* Biography Section - NOW FIRST */}
        <div style={{marginBottom: '30px'}}>
          <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 20px 0'}}>Biography</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
{/* Personal Information */}
<div>
  <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 15px 0'}}>Personal Information</h3>
  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
    <div>
      <span style={{fontSize: '12px', color: '#6b7280'}}>Full Name: </span>
      <span style={{fontSize: '12px', color: '#111827', fontWeight: '500'}}>{biography.personalInfo.fullName}</span>
    </div>
    <div>
      <span style={{fontSize: '12px', color: '#6b7280'}}>Date of Birth: </span>
      <span style={{fontSize: '12px', color: '#111827'}}>{biography.personalInfo.dateOfBirth}</span>
    </div>
    <div>
      <span style={{fontSize: '12px', color: '#6b7280'}}>Birth Place: </span>
      <span style={{fontSize: '12px', color: '#111827'}}>{biography.personalInfo.birthPlace}</span>
    </div>
    <div>
      <span style={{fontSize: '12px', color: '#6b7280'}}>Marital Status: </span>
      <span style={{fontSize: '12px', color: '#111827'}}>{biography.personalInfo.maritalStatus}</span>
    </div>
    <div>
      <span style={{fontSize: '12px', color: '#6b7280'}}>Children: </span>
      <span style={{fontSize: '12px', color: '#111827'}}>{biography.personalInfo.children}</span>
    </div>
  </div>
</div>

            {/* Education */}
            <div>
              <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 15px 0'}}>Education</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div>
                  <p style={{fontSize: '12px', color: '#111827', fontWeight: '500', margin: '0 0 2px 0'}}>Undergraduate</p>
                  <p style={{fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: '1.4'}}>{biography.education.undergraduate}</p>
                </div>
                <div>
                  <p style={{fontSize: '12px', color: '#111827', fontWeight: '500', margin: '0 0 2px 0'}}>Graduate</p>
                  <p style={{fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: '1.4'}}>{biography.education.graduate}</p>
                </div>
                <div>
                  <p style={{fontSize: '12px', color: '#111827', fontWeight: '500', margin: '0 0 2px 0'}}>Certifications</p>
                  <p style={{fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: '1.4'}}>{biography.education.certifications}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Career History */}
          <div style={{marginTop: '25px'}}>
            <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 15px 0'}}>Career History</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
              {biography.careerHistory.map((job, index) => (
                <div key={index} style={{borderLeft: '2px solid #e5e7eb', paddingLeft: '15px', position: 'relative'}}>
                  <div style={{position: 'absolute', left: '-5px', top: '5px', width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%'}}></div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px'}}>
                    <h4 style={{fontSize: '13px', fontWeight: '600', color: '#111827', margin: 0}}>{job.position}</h4>
                    <span style={{fontSize: '11px', color: '#6b7280'}}>{job.duration}</span>
                  </div>
                  <p style={{fontSize: '12px', color: '#3b82f6', margin: '0 0 5px 0'}}>{job.company}</p>
                  <p style={{fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: '1.4'}}>{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Interests */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '25px'}}>
            <div>
              <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 15px 0'}}>Achievements</h3>
              <ul style={{margin: 0, paddingLeft: '15px'}}>
                {biography.achievements.map((achievement, index) => (
                  <li key={index} style={{fontSize: '11px', color: '#6b7280', marginBottom: '5px', lineHeight: '1.4'}}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 15px 0'}}>Interests</h3>
              <ul style={{margin: 0, paddingLeft: '15px'}}>
                {biography.interests.map((interest, index) => (
                  <li key={index} style={{fontSize: '11px', color: '#6b7280', marginBottom: '5px', lineHeight: '1.4'}}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

{/* Recent News & Social Activity */}
<div style={{marginBottom: '30px'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
    <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0}}>Recent News & Social Activity</h2>
    <span style={{fontSize: '12px', color: '#3b82f6', cursor: 'pointer'}}>→</span>
  </div>
  
  <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
    {client.recentNews.map((news) => (
      <div key={news.id} style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
        <div style={{width: '20px', height: '20px', border: '2px solid #9ca3af', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px', flexShrink: 0}}>
          <div style={{width: '8px', height: '5px', borderLeft: '2px solid #6b7280', borderBottom: '2px solid #6b7280', transform: 'rotate(-45deg)', marginTop: '-2px'}}></div>
        </div>
        <div style={{flex: 1}}>
          <p style={{fontSize: '13px', color: '#111827', fontWeight: '500', margin: '0 0 5px 0', lineHeight: '1.3'}}>{news.title}</p>
          <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 5px 0', lineHeight: '1.4'}}>{news.description}</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px', fontSize: '11px', color: '#9ca3af'}}>
            <span>
              Source: 
              <a 
                href={news.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: '#3b82f6', textDecoration: 'none', marginLeft: '4px'}}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                {news.source}
              </a>
            </span>
            <span>{news.timestamp}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Family Tree */}
        <div>
            <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 20px 0'}}>Family Tree</h2>
            <FamilyTree data={familyData} />
        </div>
      </div>
    </Layout>
  )
}