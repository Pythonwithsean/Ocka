'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import PersonalInfoForm from '../components/PersonalInformationForm';
import JobDescriptionForm from '../components/JobDescriptionForm';

library.add(fab);

export default function CreateResume() {
  const [step, setStep] = useState<number>(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    experience: '',
    education: '',
  });
  const [jobDescription, setJobDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedPersonalInfo = Cookies.get('personalInfo');
    if (savedPersonalInfo) {
      setPersonalInfo(JSON.parse(savedPersonalInfo));
    }
  }, []);

  const handlePersonalInfoChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    Cookies.set(
      'personalInfo',
      JSON.stringify({ ...personalInfo, [name]: value }),
      { expires: 7 }
    );
  };

  const handleJobDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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

    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalInfo,
          jobDescription,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate resume');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cv.docx';
      document.body.appendChild(a);
      a.click();
      a.remove();
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
      <main
        style={{
          padding: '20px',
          maxWidth: '600px',
          margin: '40px auto',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        {step === 1 ? (
          <PersonalInfoForm
            personalInfo={personalInfo}
            handlePersonalInfoChange={handlePersonalInfoChange}
            handleNextStep={handleNextStep}
          />
        ) : (
          <JobDescriptionForm
            jobDescription={jobDescription}
            handleJobDescriptionChange={handleJobDescriptionChange}
            handleGenerateClick={handleGenerateClick}
            handleBackStep={handleBackStep}
            loading={loading}
            resume={""}
          />
        )}
      </main>
    </div>
  );
}
