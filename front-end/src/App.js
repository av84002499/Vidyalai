import React, { useState } from 'react';
import PdfPreview from './components/PdfPreview';
import FileUpload from './components/FileUpload'
function App() {
  const [pdfPath, setPdfPath] = useState(null);

  const handlePdfPathChange = (newPdfPath) => {
    setPdfPath(newPdfPath);
  };

  return (
    <div>
      <h1>PDF Viewer and Uploader</h1>
      <FileUpload onPdfPathChange={handlePdfPathChange} />
      {pdfPath && <PdfPreview pdfPath={pdfPath} />}
    </div>
  );
}

export default App;
