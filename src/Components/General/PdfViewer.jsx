import React, { useState } from 'react';

const PdfViewer = ({ pdfSrc }) => {
  const [loadError, setLoadError] = useState(false);

  const handleLoadError = () => {
    setLoadError(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {loadError ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <p>Failed to load PDF.</p>
        </div>
      ) : (
        <embed
          src={pdfSrc}
          type="application/pdf"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onError={handleLoadError}
        />
      )}
    </div>
  );
};

export default PdfViewer;
