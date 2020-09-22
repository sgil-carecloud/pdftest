import React from 'react';
import logo from './logo.svg';
import PDFViewer from './components/Document'
import './App.css';
import {Worker} from '@phuocng/react-pdf-viewer';
function App() {
  return (
    <div className="App">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
          <div style={{ height: '750px' }}>
            <PDFViewer/>
          </div>
      </Worker>
      
    </div>
  );
}

export default App;
