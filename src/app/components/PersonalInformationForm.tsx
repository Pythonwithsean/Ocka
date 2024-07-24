import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faBriefcase, faGraduationCap, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface PersonalInfoFormProps {
  personalInfo: { name: string; email: string; phone: string; linkedin: string; experience: string; education: string };
  handlePersonalInfoChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNextStep: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ personalInfo, handlePersonalInfoChange, handleNextStep }) => {
  return (
    <div>
      <h3 style={{ color: '#333' }}>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
        Personal Information
      </h3>
      {['name', 'email', 'phone', 'linkedin'].map((field) => (
        <div key={field} style={{ marginBottom: '12px' }}>
          <label htmlFor={field} style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            id={field}
            name={field}
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            value={(personalInfo as any)[field]}
            onChange={handlePersonalInfoChange}
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
            placeholder={`Your ${field}`}
          />
        </div>
      ))}
      {['experience', 'education'].map((field) => (
        <div key={field} style={{ marginBottom: '12px' }}>
          <label htmlFor={field} style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
            <FontAwesomeIcon icon={field === 'experience' ? faBriefcase : faGraduationCap} style={{ marginRight: '5px' }} />
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <textarea
            id={field}
            name={field}
            value={(personalInfo as any)[field]}
            onChange={handlePersonalInfoChange}
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', height: '100px' }}
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '8px' }} />
        Next
      </button>
    </div>
  );
};

export default PersonalInfoForm;