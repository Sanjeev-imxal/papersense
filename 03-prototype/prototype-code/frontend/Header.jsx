import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileCheck } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header-nav">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <FileCheck size={24} color="#232323" />
        <span className="font-semibold" style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>EvalAI</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="btn-secondary" onClick={() => navigate('/demo')}>Try Demo</button>
      </div>
    </header>
  );
};

export default Header;
