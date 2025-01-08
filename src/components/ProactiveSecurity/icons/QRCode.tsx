import React from 'react';

const QRCode = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="24" width="20" height="20" rx="2" stroke="#166CF7" strokeWidth="4"/>
    <rect x="52" y="24" width="20" height="20" rx="2" stroke="#166CF7" strokeWidth="4"/>
    <rect x="24" y="52" width="20" height="20" rx="2" stroke="#166CF7" strokeWidth="4"/>
    <path d="M52 52H72V72" stroke="#166CF7" strokeWidth="4" strokeLinecap="round"/>
    <path d="M72 52V72H52" stroke="#166CF7" strokeWidth="4" strokeLinecap="round"/>
    <rect x="32" y="32" width="4" height="4" fill="#166CF7"/>
    <rect x="60" y="32" width="4" height="4" fill="#166CF7"/>
    <rect x="32" y="60" width="4" height="4" fill="#166CF7"/>
  </svg>
);

export default QRCode; 