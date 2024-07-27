import React from 'react';

interface PersonalInfoFormProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    experience: string;
    education: string;
  };
  handlePersonalInfoChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleNextStep: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfo,
  handlePersonalInfoChange,
  handleNextStep,
}) => {
  return (
    <div
      style={{
        padding: '20px',
        // backgroundColor: '#f9f9f9',
        fontWeight: 'bold',
        borderRadius: '8px',
        boxShadow: '2px 4px 8px rgba(255,0,0,0.7)',
      }}
    >
      <h3
        style={{
          color: 'red',
          borderBottom: '2px solid #e60023',
          paddingBottom: '10px',
          marginBottom: '20px',
        }}
      >
        Personal Information
      </h3>
      {['name', 'email', 'phone', 'linkedin'].map((field) => (
        <div key={field} style={{ marginBottom: '16px' }}>
          <label
            htmlFor={field}
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#555',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            id={field}
            name={field}
            type={
              field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'
            }
            value={(personalInfo as any)[field]}
            onChange={handlePersonalInfoChange}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
            placeholder={`Your ${field}`}
          />
        </div>
      ))}
      {['experience', 'education'].map((field) => (
        <div key={field} style={{ marginBottom: '16px' }}>
          <label
            htmlFor={field}
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#555',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <textarea
            id={field}
            name={field}
            value={(personalInfo as any)[field]}
            onChange={handlePersonalInfoChange}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              height: '100px',
              boxSizing: 'border-box',
            }}
            placeholder={`Briefly describe your ${field}`}
          />
        </div>
      ))}
      <button
        onClick={handleNextStep}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#e60023',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
          textAlign: 'center',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d4001d')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e60023')}
      >
        Next
      </button>
    </div>
  );
};

export default PersonalInfoForm;
