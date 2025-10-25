import React, { useState } from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import { mockAnswerKey, mockStudentAnswer, mockEvaluationResult } from '../mock';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Demo = () => {
  const [step, setStep] = useState(1);
  const [answerKey, setAnswerKey] = useState(null);
  const [studentSheet, setStudentSheet] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnswerKeyUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAnswerKey(file);
      setTimeout(() => {
        setStep(2);
      }, 500);
    }
  };

  const handleStudentSheetUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudentSheet(file);
      setTimeout(() => {
        setStep(3);
      }, 500);
    }
  };

  const handleEvaluate = () => {
    setLoading(true);
    // Simulate evaluation with mock data
    setTimeout(() => {
      setResult(mockEvaluationResult);
      setLoading(false);
      setStep(4);
    }, 2000);
  };

  const resetDemo = () => {
    setStep(1);
    setAnswerKey(null);
    setStudentSheet(null);
    setResult(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ 
        flex: 1, 
        padding: '8rem 1.2rem 3rem',
        background: 'var(--bg-page)'
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="heading-1" style={{ marginBottom: '1rem' }}>Demo Evaluation</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Upload answer key and student sheet to see automated evaluation
            </p>
          </div>

          {/* Progress Steps */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
              { num: 1, label: 'Answer Key' },
              { num: 2, label: 'Student Sheet' },
              { num: 3, label: 'Evaluate' },
              { num: 4, label: 'Results' }
            ].map((s) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  background: step >= s.num ? 'var(--text-primary)' : 'var(--border-light)',
                  color: step >= s.num ? 'white' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  fontFamily: "'SF Mono', monospace"
                }}>
                  {s.num}
                </div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: step >= s.num ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontFamily: "'SF Mono', monospace",
                  textTransform: 'uppercase'
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Upload Answer Key */}
          {step === 1 && (
            <div className="voice-card accent-blue" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <Upload size={48} style={{ margin: '0 auto 1.5rem', color: 'var(--text-primary)' }} />
              <h2 className="heading-2" style={{ marginBottom: '1rem' }}>Upload Answer Key</h2>
              <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Upload an image containing the answer key with questions and correct answers
              </p>
              <label className="btn-primary" style={{ cursor: 'pointer' }}>
                Choose File
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleAnswerKeyUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          )}

          {/* Step 2: Upload Student Sheet */}
          {step === 2 && (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="voice-card accent-green" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={24} color="#4ade80" />
                  <h3 className="heading-2">Answer Key Uploaded</h3>
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {answerKey?.name}
                </p>
              </div>
              
              <div className="voice-card accent-orange" style={{ textAlign: 'center' }}>
                <FileText size={48} style={{ margin: '0 auto 1.5rem', color: 'var(--text-primary)' }} />
                <h2 className="heading-2" style={{ marginBottom: '1rem' }}>Upload Student Sheet</h2>
                <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  Upload an image of the student's answer sheet
                </p>
                <label className="btn-primary" style={{ cursor: 'pointer' }}>
                  Choose File
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleStudentSheetUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          )}

          {/* Step 3: Evaluate */}
          {step === 3 && !loading && (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="voice-card accent-green" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={24} color="#4ade80" />
                  <h3 className="heading-2">Answer Key</h3>
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {answerKey?.name}
                </p>
              </div>
              
              <div className="voice-card accent-purple" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={24} color="#a78bfa" />
                  <h3 className="heading-2">Student Sheet</h3>
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {studentSheet?.name}
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <button className="btn-primary" onClick={handleEvaluate}>
                  Start Evaluation
                </button>
              </div>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="voice-card accent-grey" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                margin: '0 auto 1.5rem',
                border: '4px solid var(--border-light)',
                borderTop: '4px solid var(--text-primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              <h2 className="heading-2" style={{ marginBottom: '0.5rem' }}>Evaluating...</h2>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                Extracting text and comparing answers
              </p>
            </div>
          )}

          {/* Step 4: Results */}
          {step === 4 && result && (
            <div>
              <div className="voice-card accent-green" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h2 className="heading-1" style={{ marginBottom: '1rem' }}>Evaluation Complete!</h2>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '3rem', 
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {result.obtainedMarks}/{result.totalMarks}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontFamily: "'SF Mono', monospace" }}>
                      Marks Obtained
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {result.percentage.toFixed(1)}%
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontFamily: "'SF Mono', monospace" }}>
                      Percentage
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 className="heading-2" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Detailed Feedback</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {result.results.map((item, index) => (
                    <div key={index} className="voice-card">
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          marginBottom: '0.75rem'
                        }}>
                          <h4 style={{ fontWeight: 500, fontSize: '1rem' }}>Question {item.questionNumber}</h4>
                          <span style={{
                            background: item.marksObtained === item.totalMarks ? '#d1fae5' : '#fef3c7',
                            color: item.marksObtained === item.totalMarks ? '#065f46' : '#92400e',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            fontFamily: "'SF Mono', monospace"
                          }}>
                            {item.marksObtained}/{item.totalMarks}
                          </span>
                        </div>
                        <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                          {item.question}
                        </p>
                      </div>
                      
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.25rem', textTransform: 'uppercase', fontFamily: "'SF Mono', monospace" }}>
                            Student Answer
                          </div>
                          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            {item.studentAnswer}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.25rem', textTransform: 'uppercase', fontFamily: "'SF Mono', monospace" }}>
                            Correct Answer
                          </div>
                          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            {item.correctAnswer}
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ 
                        background: 'var(--bg-section)', 
                        padding: '0.75rem', 
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <strong>Feedback:</strong> {item.feedback}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button className="btn-primary" onClick={resetDemo}>
                  Try Another Evaluation
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Demo;
