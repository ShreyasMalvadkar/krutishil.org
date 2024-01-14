import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const PdfViewer = ({ pdfSrc }) => {
  const [loadError, setLoadError] = useState(false);

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const handleLoadError = () => {
    setLoadError(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {loadError ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <p>Failed to load PDF.</p>
        </div>
      ) : (
        <Document file={pdfSrc} onLoadError={handleLoadError}>
          <Page pageNumber={1} width="100%" />
        </Document>
      )}
    </div>
  );
};

export default PdfViewer;
