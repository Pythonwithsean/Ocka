import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faClipboardList, faCogs, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface JobDescriptionFormProps {
  jobDescription: string;
  handleJobDescriptionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleGenerateClick: () => void;
  handleBackStep: () => void;
  loading: boolean;
  resume: string | null;
}

const JobDescriptionForm: React.FC<JobDescriptionFormProps> = ({ jobDescription, handleJobDescriptionChange, handleGenerateClick, handleBackStep, loading, resume }) => {
  return (
    <div>
      <h3 style={{ color: '#333' }}>
        <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '10px' }} />
        Job Description
      </h3>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="job-description" style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
          <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '5px' }} />
          Enter URL, job description, etc.
        </label>
        <textarea
          id="job-description"
          value={jobDescription}
          onChange={handleJobDescriptionChange}
          placeholder="e.g., https://example.com/job"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            height: '100px',
            marginBottom: '12px'
          }}
        />
      </div>
      <button
        onClick={handleGenerateClick}
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
          justifyContent: 'center',
          marginBottom: '10px'
        }}
        disabled={loading}
      >
        <FontAwesomeIcon icon={faCogs} style={{ marginRight: '8px' }} />
        {loading ? 'Generating...' : 'Generate'}
      </button>
      <button
        onClick={handleBackStep}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#fff',
          color: '#e60023',
          border: '2px solid #e60023',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px'
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
        Back
      </button>
      {resume && (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px' }}>
          <h3 style={{ color: '#333' }}>
            <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px' }} />
            Generated Resume
          </h3>
          <p style={{ color: '#555' }}>{resume}</p>
        </div>
      )}
    </div>
  );
};

export default JobDescriptionForm;