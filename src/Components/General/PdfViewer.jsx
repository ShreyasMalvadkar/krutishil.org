import React from 'react';
import { Viewer, SpecialZoomLevel, Worker  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = ({url}) => {
  const pdfVersion = "1.7"
  const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {
        (slots) => {
          const {
            CurrentPageLabel, CurrentScale, GoToNextPage, GoToPreviousPage, ZoomIn, ZoomOut,
          } = slots;
          return (
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <div style={{ padding: '0px 2px' }}>
                <ZoomOut>
                  {
                    (props) => (
                      <IconButton aria-label="delete" onClick={props.onClick}>
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    )
                  }
                </ZoomOut>
              </div>
              <div style={{ padding: '0px 2px' }}>
                <CurrentScale>
                  {
                    (props) => (
                      <span>{`${Math.round(props.scale * 100)}%`}</span>
                    )
                  }
                </CurrentScale>
              </div>
              <div style={{ padding: '0px 2px' }}>
                <ZoomIn>
                  {
                    (props) => (
                      <IconButton aria-label="delete" onClick={props.onClick}>
                        <AddCircleOutlineIcon />
                      </IconButton>
                    )
                  }
                </ZoomIn>
              </div>
              <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                <GoToPreviousPage>
                  {
                    (props) => (
                      <Button
                        style={{
                          cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                          height: '30px',
                          width: '30px'
                        }}
                        disabled={props.isDisabled}
                        disableElevation
                        disableFocusRipple
                        onClick={props.onClick}
                        variant="outlined">
                        <ArrowBack fontSize="small"/>
                      </Button>
                    )
                  }
                </GoToPreviousPage>
              </div>
              <div style={{ padding: '0px 2px' }}>
                <CurrentPageLabel>
                  {
                    (props) => (
                      <span>{`${props.currentPage + 1} av ${props.numberOfPages}`}</span>
                    )
                  }
                </CurrentPageLabel>
              </div>
              <div style={{ padding: '0px 2px' }}>
                <GoToNextPage>
                  {
                    (props) => (
                      <Button
                        style={{
                          cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                          height: '30px',
                          width: '30px'
                        }}
                        disabled={props.isDisabled}
                        disableElevation
                        disableFocusRipple
                        onClick={props.onClick}
                        variant="outlined">
                        <ArrowForward fontSize="small"/>
                      </Button>
                    )
                  }
                </GoToNextPage>
              </div>
            </div>
          )
        }
      }
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: defaultTabs => [defaultTabs[1]]
  });

  // constantly called
  console.log('entered')
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <Worker 
      // workerUrl={pdfWorkerUrl}
      workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/1.7.250/pdf.worker.min.js"
>
        <Viewer
          fileUrl={url}
          defaultScale={SpecialZoomLevel.PageFit}
          plugins={[
            defaultLayoutPluginInstance
          ]}
        />
      </Worker>
    </div>
  );
};

export default PdfViewer;