import React, {useContext, useState} from 'react';
import Viewer, {RenderViewerProps} from '@phuocng/react-pdf-viewer';
import samplePDF from './test.pdf';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';


const PDFViewer = (props) => {
  return (
    <div>
      hellooooo

      <Viewer fileUrl={samplePDF} defaultScale={1}/>;
    </div>
  )
}

export default PDFViewer