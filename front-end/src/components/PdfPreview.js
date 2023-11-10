// PdfPreview.js
import React from 'react';

const PdfPreview = ({ pdfPath }) => {
  return (
    <div>
      <iframe src={`http://localhost:5000/api/pdf/getPdf/${pdfPath}`} width="600" height="800" />
    </div>
  );
};

export default PdfPreview;
