import React from 'react';

interface TemplateSelectionProps {
  selectedTemplate: string;
  handleTemplateSelect: (template: string) => void;
  handleGenerateClick: () => void;
  handleBackStep: () => void;
  loading: boolean;
}

const templates = [
  { id: 'template1', src: '/cv-templates/template1.png' },
  { id: 'template2', src: '/cv-templates/template1.png' },
];

const TemplateSelection: React.FC<TemplateSelectionProps> = ({
  selectedTemplate,
  handleTemplateSelect,
  handleGenerateClick,
  handleBackStep,
  loading,
}) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h3 style={{ color: '#333' }}>
        Select a CV Template
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginBottom: '40px' }}>
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template.id)}
            style={{
              border: selectedTemplate === template.id ? '4px solid #e60023' : '4px solid #ccc',
              cursor: 'pointer',
              borderRadius: '8px',
              overflow: 'hidden',
              maxWidth: '100%',
            }}
          >
            <img src={template.src} alt={`Template ${template.id}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handleBackStep}
          style={{
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
          }}
        >
          Back
        </button>
        <button
          onClick={handleGenerateClick}
          style={{
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
          }}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Resume'}
        </button>
      </div>
    </div>
  );
};

export default TemplateSelection;