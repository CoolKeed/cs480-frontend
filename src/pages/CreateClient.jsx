import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'

export default function CreateClient() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    occupation: '',
    riskTolerance: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const steps = [
    { number: 1, title: 'Client Information', active: currentStep === 1 },
    { number: 2, title: 'KYC Documents', active: currentStep === 2 },
    { number: 3, title: 'Review & Submit', active: currentStep === 3 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Creating client:', formData, uploadedFiles);
    alert('Client created successfully!');
    navigate('/');
  };

  return (
    <Layout>
      <div style={{padding: '20px 30px', height: '100%', overflow: 'auto'}}>
        {/* Header */}
        <div style={{marginBottom: '30px'}}>
          <h1 style={{fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: '0 0 10px 0'}}>New Client</h1>
          <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Add a new client with KYC verification</p>
        </div>

        <div style={{display: 'flex', gap: '40px'}}>
          {/* Steps Sidebar */}
          <div style={{width: '200px', flexShrink: 0}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {steps.map((step) => (
                <div key={step.number} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: step.active ? '#111827' : '#e5e7eb',
                    color: step.active ? 'white' : '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: '600'
                  }}>
                    {step.active ? '—' : step.number}
                  </div>
                  <span style={{
                    fontSize: '12px',
                    color: step.active ? '#111827' : '#6b7280',
                    fontWeight: step.active ? '600' : '400'
                  }}>
                    STEP {step.number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div style={{flex: 1}}>
            {/* Step 1: Client Information */}
            {currentStep === 1 && (
              <div>
                <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '20px'}}>Client Information</h2>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px'}}>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '14px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none'
                      }}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '14px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none'
                      }}
                      placeholder="Enter last name"
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '14px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none'
                      }}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '14px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none'
                      }}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <button 
                  onClick={handleNext}
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'white',
                    backgroundColor: '#3b82f6',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: KYC Documents */}
            {currentStep === 2 && (
              <div>
                <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '20px'}}>Upload KYC Documents</h2>
                
                <div style={{display: 'flex', gap: '30px'}}>
                  {/* Upload Section */}
                  <div style={{flex: 1}}>
                    <div style={{
                      border: '2px dashed #d1d5db',
                      borderRadius: '8px',
                      padding: '40px',
                      textAlign: 'center',
                      backgroundColor: '#fafafa',
                      marginBottom: '20px'
                    }}>
                      <div style={{fontSize: '48px', marginBottom: '10px', color: '#d1d5db'}}>📄</div>
                      <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '10px'}}>
                        Drag your documents here to upload
                      </p>
                      <p style={{fontSize: '12px', color: '#9ca3af', marginBottom: '15px'}}>
                        Supports: PDF, JPG, PNG (Max 10MB each)
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        style={{display: 'none'}}
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        style={{
                          padding: '8px 16px',
                          fontSize: '12px',
                          color: '#3b82f6',
                          backgroundColor: 'white',
                          border: '1px solid #3b82f6',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Browse Files
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div>
                        <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '10px'}}>
                          Uploaded Documents ({uploadedFiles.length})
                        </h3>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                          {uploadedFiles.map((file, index) => (
                            <div key={index} style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px 12px',
                              backgroundColor: '#f3f4f6',
                              borderRadius: '4px'
                            }}>
                              <span style={{fontSize: '12px', color: '#111827'}}>{file.name}</span>
                              <button
                                onClick={() => removeFile(index)}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#ef4444',
                                  cursor: 'pointer',
                                  fontSize: '12px'
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Or Manual Entry */}
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '15px'}}>
                      Or provide additional details manually
                    </h3>
                    
                    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                      <div>
                        <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            outline: 'none'
                          }}
                        />
                      </div>
                      
                      <div>
                        <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                          Nationality
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleInputChange}
                          placeholder="e.g. American, Canadian, British"
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                          Address
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Full residential address"
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleInputChange}
                          placeholder="e.g. Software Engineer"
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{display: 'block', fontSize: '12px', fontWeight: '500', color: '#111827', marginBottom: '5px'}}>
                          Risk Tolerance
                        </label>
                        <select
                          name="riskTolerance"
                          value={formData.riskTolerance}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            outline: 'none'
                          }}
                        >
                          <option value="">Select risk level</option>
                          <option value="conservative">Conservative</option>
                          <option value="moderate">Moderate</option>
                          <option value="aggressive">Aggressive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '15px', marginTop: '30px'}}>
                  <button 
                    onClick={handlePrevious}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#6b7280',
                      backgroundColor: 'white',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Previous
                  </button>
                  <button 
                    onClick={handleNext}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'white',
                      backgroundColor: '#3b82f6',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div>
                <h2 style={{fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '20px'}}>Review & Submit</h2>
                
                <div style={{backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
                  <h3 style={{fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '15px'}}>Client Information</h3>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px'}}>
                    <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div><strong>Date of Birth:</strong> {formData.dateOfBirth}</div>
                    <div><strong>Nationality:</strong> {formData.nationality}</div>
                    <div><strong>Occupation:</strong> {formData.occupation}</div>
                    <div><strong>Risk Tolerance:</strong> {formData.riskTolerance}</div>
                    <div><strong>Documents:</strong> {uploadedFiles.length} files uploaded</div>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '15px'}}>
                  <button 
                    onClick={handlePrevious}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#6b7280',
                      backgroundColor: 'white',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Previous
                  </button>
                  <button 
                    onClick={handleSubmit}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'white',
                      backgroundColor: '#10b981',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Create Client
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}