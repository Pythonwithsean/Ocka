"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUserEdit, faInfoCircle, faUser, faEnvelope, faPhone, faBriefcase, faGraduationCap, faClipboardList, faCogs, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from '../components/Header';

library.add(fab);

export default function CreateResume() {
  const [step, setStep] = useState<number>(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    experience: '',
    education: ''
  });
  const [jobDescription, setJobDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [resume, setResume] = useState<string | null>(null);

  useEffect(() => {
    const savedPersonalInfo = Cookies.get('personalInfo');
    if (savedPersonalInfo) {
      setPersonalInfo(JSON.parse(savedPersonalInfo));
    }
  }, []);

  const handlePersonalInfoChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    Cookies.set('personalInfo', JSON.stringify({ ...personalInfo, [name]: value }), { expires: 7 });
  };

  const handleJobDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(event.target.value);
  };

  const handleNextStep = () => {
    if (!personalInfo.name || !personalInfo.email) {
      alert('Please fill in at least your name and email.');
      return;
    }
    setStep(2);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleGenerateClick = async () => {
    if (!jobDescription) {
      alert('Please enter a job description.');
      return;
    }

    setLoading(true);
    setResume(null);

    try {

      //some random response
      //TODO: send the data to our backend which will use ai to generate the resume
      const response = await new Promise<string>((resolve) =>
        setTimeout(() => resolve(`Generated resume for ${personalInfo.name} based on the job description.`), 2000)
      );

      setResume(response);
    } catch (error) {
      console.error('Error generating resume:', error);
      alert('Failed to generate resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <main style={{ padding: '20px', maxWidth: '600px', margin: '40px auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        {step === 1 && (
          <div>
            <h3 style={{ color: '#333' }}>
              <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '10px' }} />
              Personal Information
            </h3>
            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
                placeholder="Your full name"
              />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
                placeholder="Your email address"
              />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
                placeholder="Your phone number"
              />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="linkedin" style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '5px' }} />
                LinkedIn Profile
              </label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                value={personalInfo.linkedin}
                onChange={handlePersonalInfoChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
                placeholder="Your LinkedIn profile URL"
              />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="experience" style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
                <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '5px' }} />
                Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={personalInfo.experience}
                onChange={handlePersonalInfoChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', height: '100px' }}
                placeholder="Briefly describe your work experience"
              />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="education" style={{ display: 'block', marginBottom: '8px', color: '#333', fontSize: '16px' }}>
                <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '5px' }} />
                Education
              </label>
              <textarea
                id="education"
                name="education"
                value={personalInfo.education}
                onChange={handlePersonalInfoChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', height: '100px' }}
                placeholder="Briefly describe your education background"
              />
            </div>
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
        )}
        {step === 2 && (
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
        )}
      </main>
    </div>
  );
}