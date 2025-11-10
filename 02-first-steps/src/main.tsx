import { StrictMode, type CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { FirstStrepsApp } from './FirstStepsApp';

const myStyles: CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={myStyles}>
      <div style={{ textAlign: 'center' }}>
        <FirstStrepsApp />
      </div>
    </div>
    {/* <MyAwesomeApp/> */}
  </StrictMode>
);
