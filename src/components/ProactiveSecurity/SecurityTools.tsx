import React from 'react';

const SecurityTools = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">More visibility. Fewer blind spots.</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Stay more than a step ahead with phishing alerts</h3>
            <p>Dashlane is the only credential manager to warn employees in real time about suspicious sites before any information is entered with in-context phishing alerts.</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Track and improve your Password Health score</h3>
            <p>Dashlane's proactive tools lead to fast improvements in your security posture, which you can track over time in an organization-wide Password Health dashboard.</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Consolidate your data with SIEM integration</h3>
            <p>View credential activity logs alongside SIEM data in a centralized platform so you can make informed decisions about access privileges.</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Get peace of mind with Dark Web Monitoring</h3>
            <p>Dashlane continuously scans billions of breach records for you to ensure no credential-based threat in your organization goes undetected.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTools; 