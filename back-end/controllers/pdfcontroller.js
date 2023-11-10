// pdfController.js
const multer = require('multer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const uploadPDF = upload.single('pdfFile');

const getPdf = (req, res) => {
  const pdfPath = req.params.pdfPath;
  res.sendFile(path.resolve(__dirname, `../uploads/${pdfPath}`));
};

const extractPdf = (req, res) => {
  const { selectedPages } = req.body;
  const pdfPath = req.file.path;
  const newPdfPath = path.join(__dirname, `../uploads/${Date.now()}-new.pdf`);

  // Code to extract selected pages and create a new PDF

  res.download(newPdfPath, 'new.pdf', (err) => {
    if (err) {
      res.status(500).json({ error: 'Could not download the file' });
    }

    if (fs.existsSync(newPdfPath)) {
      fs.unlinkSync(newPdfPath);
    } else {
      console.error('File does not exist:', newPdfPath);
    }

    
    fs.unlinkSync(newPdfPath); // Remove the file after download
  });
};



module.exports = {
  uploadPDF,
  getPdf,
  extractPdf,
};
