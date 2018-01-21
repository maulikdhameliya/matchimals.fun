import React from 'react';

const Logo = ({ className, fill, width, height }) => (
  <svg
    className={className}
    width={width || '100%'}
    height={height || '100%'}
    viewBox="0 0 1024 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Matchimals logo</title>
    <path
      fill={fill || '#fafafa'}
      d="M762.52,107.22A10.25,10.25,0,0,0,752,117.35c0,5.17.59,8.74,3.38,13.11,2-.2,4-.39,5.56-.39a31.38,31.38,0,0,1,14.9,4v-4.17C775.83,119.14,773.25,107.22,762.52,107.22Z"
    />
    <path
      fill={fill || '#fafafa'}
      d="M757.15,162.45c0,9.14.2,20.06,7.75,20.06,8.54,0,10.93-11.52,10.93-17.68V143.38a18.46,18.46,0,0,0-8.15-2.19C760.13,141.19,757.15,152.12,757.15,162.45Z"
    />
    <path
      fill={fill || '#fafafa'}
      d="M281.35,107.22a10.26,10.26,0,0,0-10.53,10.13c0,5.17.6,8.74,3.38,13.11,2-.2,4-.39,5.56-.39a31.35,31.35,0,0,1,14.9,4v-4.17C294.66,119.14,292.08,107.22,281.35,107.22Z"
    />
    <path
      fill={fill || '#fafafa'}
      d="M895,167.22c-5.56-4.37-12.91-9.54-19.27-9.54a9.36,9.36,0,0,0-6.35,3.18c-2.59,3-3.78,6.36-3.18,9.34,1,6,4,9.93,9.14,13.7,3.17,2.19,6.75,3.18,10.72,4,3,.59,7.95,0,10.53-2s4.37-4.57,4.37-8.14C901,172.78,898.4,169.8,895,167.22Z"
    />
    <path
      fill={fill || '#fafafa'}
      d="M512,0C0,0,0,0,0,128S0,256,512,256s512,0,512-128S1024,0,512,0Zm53.24,57.15a13.1,13.1,0,0,1,12.91,13.31,12.91,12.91,0,1,1-25.82,0A13.1,13.1,0,0,1,565.24,57.15ZM445.05,180.33a42.94,42.94,0,0,1-5.76,7.35c-7,7.15-15.3,10.53-25.83,10.53-8.74,0-17.48-4-23.44-9.34A39.74,39.74,0,0,1,381.4,178a46.24,46.24,0,0,1-8.46,12.22c-4.57,4.77-10.13,8-16.49,8-12.28,0-17.51-7.68-19.1-16.56a43,43,0,0,1-6.53,8.61c-4.57,4.77-10.13,8-16.49,8-8.54,0-13.9-3.78-16.69-8.94a25.74,25.74,0,0,1-1.58-4.17c-7.95,7.15-15.5,13.11-25,13.11s-16.07-6.42-19.81-14.46a40.93,40.93,0,0,1-5.22,6.51c-4.57,4.77-10.13,8-16.49,8-15.1,0-19.67-11.72-19.67-22.85V121.72c0-5.76-1-8.14-4.76-8.14-3.58,0-5.57,2.58-8.35,5.56a42.57,42.57,0,0,0-6.55,9.93,39.24,39.24,0,0,0-3.38,16.09v45.3c0,3.58-.8,5.76-5.56,5.76h-15.5c-4,0-4.77-2.38-4.77-5.36V120.53c0-5-1.39-7-4.77-7-3.57,0-5.56,2.58-8.34,5.56a42.64,42.64,0,0,0-6.56,9.93,39.41,39.41,0,0,0-3.37,16.09v45.3c0,3.58-.8,5.76-5.57,5.76H116.86c-4,0-4.77-2.38-4.77-5.36V116.75h-7c-1.79,0-2.59-1.78-2.59-3.37a3.16,3.16,0,0,1,3-3.38h5.76a25.91,25.91,0,0,0,17.29-6.16,19.86,19.86,0,0,0,5.36-7,3.94,3.94,0,0,1,3.58-1.39,2.59,2.59,0,0,1,2.18,2.58c-.39,5-.79,9.14-1.39,14.9a26.54,26.54,0,0,0-.2,4.37,69.07,69.07,0,0,1,7.55-8.94c8.15-8,12.92-11.92,24.24-11.92,4.77,0,8.15,1.19,10.53,3.38,4.37,4,6.36,10.73,6.36,17.48a70.69,70.69,0,0,1,7.55-8.94c8.14-8,13.11-11.92,24.43-11.92,4.77,0,8.15,1.19,10.53,3.38,4.37,4,6.36,10.73,6.36,17.28v46.29c0,5.37.2,10.33.6,15.7.2,2.58,1.59,4.17,3.57,4.17,2.89,0,6.28-4.64,8.53-8.11a41.8,41.8,0,0,1-1-8.78c0-13.51,5.76-26.42,16.69-33a26.74,26.74,0,0,1-5.56-16.09c0-13.91,13.7-20.86,25.63-20.86,11.72,0,20.86,3.38,27,9.34,6,5.76,9.34,14.1,9.34,24.43v28.61c0,12.72.2,16.49.6,20.27.2,2.58,1.59,4.17,3.57,4.17,3.58,0,7.95-7.15,9.94-10.33a7.25,7.25,0,0,1,2.16-2.45l-.18-53.78h-6.95c-1.79,0-2.59-1.78-2.59-3.37a3.16,3.16,0,0,1,3-3.38h6.56l.2-6.76c0-3.17,1.39-5.16,3.77-6a25.8,25.8,0,0,0,9.74-6.35,46,46,0,0,0,9.14-12.72,2.8,2.8,0,0,1,3-1.59,2.36,2.36,0,0,1,2,2.78c-.79,12.32-1,16.89-1.39,30.6h14.51c1.78,0,2.58,1.59,2.58,3.38,0,1.59-.8,3.37-2.58,3.37h-14.9V164c0,5.16.2,9.93.59,15.1.2,2.58,1.59,4.17,3.58,4.17,3.57,0,8-7.15,9.93-10.33a9.49,9.49,0,0,1,1.52-1.94,69.28,69.28,0,0,1-3.9-23.69c0-25,15.29-50.86,42.91-50.86,8.54,0,17.48,2.58,22.85,8a22.9,22.9,0,0,1,6.15,17.28c-.79,7.35-6.95,14.11-13.51,14.9-5.76.8-9.93-2-8.74-8.14.8-4.18,2-8.35,2.19-13.51.2-4.18-1.79-8.35-6.16-8.35-10.13,0-15.3,16.09-16.89,31.39a107.66,107.66,0,0,0,.6,26.62c1.39,9.94,5.36,23.25,15.89,23.25,6.76,0,13.31-3.78,18.28-9.74,2.78-3.18,4.37-5.56,7-4.57C447.44,174.37,447.24,176.75,445.05,180.33Zm467.85,7.75a34.65,34.65,0,0,1-25,10.13c-10.13,0-19.47-2.39-26.22-9.14a29.07,29.07,0,0,1-3.31-3.87,39.6,39.6,0,0,1-4.24,5.06c-4.57,4.77-10.13,8-16.49,8-12.28,0-17.38-7.78-19-16.69a43.08,43.08,0,0,1-6.6,8.74c-4.57,4.77-10.14,8-16.49,8-8.55,0-13.91-3.78-16.69-8.94a25.76,25.76,0,0,1-1.59-4.17c-8,7.15-15.5,13.11-25,13.11s-16.08-6.42-19.82-14.46a40.38,40.38,0,0,1-5.22,6.51c-4.57,4.77-10.13,8-16.48,8-15.1,0-19.67-11.72-19.67-22.85V121.72c0-5.76-1-8.14-4.77-8.14-3.58,0-5.56,2.58-8.35,5.56a42.57,42.57,0,0,0-6.55,9.93A39.24,39.24,0,0,0,668,145.16v45.3c0,3.58-.79,5.76-5.56,5.76h-15.5c-4,0-4.77-2.38-4.77-5.36V120.53c0-5-1.39-7-4.76-7-3.58,0-5.57,2.58-8.35,5.56a42.57,42.57,0,0,0-6.55,9.93,39.24,39.24,0,0,0-3.38,16.09v45.3c0,3.58-.8,5.76-5.56,5.76H598c-4,0-4.77-2.38-4.77-5.36v-8.28a42.15,42.15,0,0,1-6,7.68c-4.57,4.77-10.13,8-16.49,8-12.27,0-17.38-7.78-19-16.69a43.08,43.08,0,0,1-6.6,8.74c-4.57,4.77-10.13,8-16.49,8-14.9,0-19.27-11.33-19.67-22.25V121.72c0-5.76-2-8.54-5.76-8.54-3.58,0-6.36,2-9.14,4.77a36.21,36.21,0,0,0-6.95,9.53,38.42,38.42,0,0,0-4,16.89v46.09c0,3.58-.79,5.76-5.56,5.76H462.14c-4,0-4.77-2.38-4.77-5.36V68.68h-7c-1.78,0-2.58-1.79-2.58-3.38a3.15,3.15,0,0,1,3-3.38h5.76a24.3,24.3,0,0,0,17.29-7.35,28,28,0,0,0,5.36-7.35,4,4,0,0,1,3.58-1.39A2.59,2.59,0,0,1,485,48.41c-.4,5-1,9.94-1.39,14.9-.2,4-.4,7.75-.4,11.72v41.33l3-3c10.14-10.14,18.48-16.89,31.79-16.89,4.77,0,8.15,1.19,10.53,3.38,4.37,4,6.36,10.73,6.36,17.28v46.49c0,5.36.2,10.33.59,15.5.2,2.58,1.59,4.17,3.58,4.17,3.58,0,8-7.15,9.93-10.33a7.23,7.23,0,0,1,2.19-2.46V116.75h-7c-1.79,0-2.58-1.78-2.58-3.37a3.15,3.15,0,0,1,3-3.38h5.76a25.89,25.89,0,0,0,17.28-6.16,19.77,19.77,0,0,0,5.37-7,3.92,3.92,0,0,1,3.58-1.39,2.59,2.59,0,0,1,2.18,2.58c-.4,5-1,9.93-1.39,14.9-.2,4-.4,7.75-.4,11.72v34.17c0,7,0,13.51.6,20.27.2,2.58,1.59,4.17,3.57,4.17,3.58,0,8-7.15,9.94-10.33a7.12,7.12,0,0,1,2.18-2.46V116.75h-7c-1.79,0-2.58-1.78-2.58-3.37a3.15,3.15,0,0,1,3-3.38h5.76a25.91,25.91,0,0,0,17.28-6.16,20,20,0,0,0,5.37-7,3.91,3.91,0,0,1,3.57-1.39,2.6,2.6,0,0,1,2.19,2.58c-.4,5-.8,9.14-1.39,14.9a26.54,26.54,0,0,0-.2,4.37,67.52,67.52,0,0,1,7.55-8.94c8.14-8,12.91-11.92,24.23-11.92,4.77,0,8.15,1.19,10.53,3.38,4.37,4,6.36,10.73,6.36,17.48a70.69,70.69,0,0,1,7.55-8.94c8.15-8,13.11-11.92,24.44-11.92,4.77,0,8.14,1.19,10.53,3.38,4.37,4,6.35,10.73,6.35,17.28v46.29c0,5.37.2,10.33.6,15.7.2,2.58,1.59,4.17,3.58,4.17,2.88,0,6.27-4.64,8.52-8.11a41.87,41.87,0,0,1-1-8.78c0-13.51,5.77-26.42,16.69-33a26.81,26.81,0,0,1-5.56-16.09c0-13.91,13.71-20.86,25.63-20.86,11.72,0,20.86,3.38,27,9.34,6,5.76,9.34,14.1,9.34,24.43v28.61c0,12.72.19,16.49.59,20.27.2,2.58,1.59,4.17,3.58,4.17,3.57,0,7.94-7.15,9.93-10.33a7.12,7.12,0,0,1,2.18-2.46V68.68h-7c-1.79,0-2.58-1.79-2.58-3.38a3.15,3.15,0,0,1,3-3.38h5.76a24.29,24.29,0,0,0,17.28-7.35,27.81,27.81,0,0,0,5.37-7.35,3.93,3.93,0,0,1,3.57-1.39,2.59,2.59,0,0,1,2.19,2.58c-.4,5-1,9.94-1.39,14.9-.2,4-.4,7.75-.4,11.72v88.41c0,5.37.2,10.33.6,15.7.19,2.58,1.58,4.17,3.57,4.17,2.32,0,5-3,7.09-6a24.69,24.69,0,0,1-.34-4.14c0-6.56,3.58-12.72,7.95-17.29a55.53,55.53,0,0,1,5.36-4.57,49.84,49.84,0,0,1-4.17-4.76c-5.16-6.56-7.55-11.73-7.55-19.67A28.79,28.79,0,0,1,864.63,106C872,98.87,880.52,95.1,889.46,94.9c7.35-.2,15.89,1.79,20.66,6.16a14.08,14.08,0,0,1,4.57,10.53c0,8.74-5.76,16.29-13.71,17.28-5.76.8-9.93-2-8.74-8.14,1-4.77,1.59-8.15.6-12.52-.8-4.37-6.36-6.36-10.33-5a8.94,8.94,0,0,0-6.16,8.75c0,13.7,9.34,18.67,19.67,25s25.43,15.69,25.43,28.81C921.45,175,918.86,182.12,912.9,188.08Z"
    />
    <path
      fill={fill || '#fafafa'}
      d="M276,162.45c0,9.14.2,20.06,7.75,20.06,8.54,0,10.92-11.52,10.92-17.68V143.38a18.42,18.42,0,0,0-8.14-2.19C279,141.19,276,152.12,276,162.45Z"
    />
  </svg>
);

export default Logo;
