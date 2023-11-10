// pdfRoutes.js
const express = require('express');
const { uploadPDF, getPdf, extractPdf } = require('../controllers/pdfController');

const router = express.Router();

router.post('/upload', uploadPDF, extractPdf);
router.get('/getPdf');

module.exports = router;
