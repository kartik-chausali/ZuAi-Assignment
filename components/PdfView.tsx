// components/PdfViewer.js
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
const PdfViewer = ({ pdfUrl }:any) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }:any) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className='w-fit max-h-screen overflow-y-auto'>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from({ length: numPages || 1 }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
