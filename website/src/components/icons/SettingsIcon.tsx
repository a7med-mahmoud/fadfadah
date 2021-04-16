import React from 'react';

export interface SettingsIconProps {
  size?: number;
  className?: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ className, size }) => {
  return (
    <svg
      version="1.1"
      className={className}
      width={size}
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <path
        d="M499.02,216.07c-8.1-13.07-22.53-21.81-39.05-21.81h-10.58c-3.45-10.74-7.86-21.25-13.07-31.35l7.54-7.54
	c13.47-13.39,16.68-32.79,10.26-49.23c-0.08-0.24-0.08-0.48-0.24-0.72c-2.25-5.53-5.61-10.66-10.02-15.15l-22.13-22.13
	c-2.24-2.24-4.65-4.17-7.14-5.85c-1.92-1.28-3.93-2.17-6.01-3.13c-0.64-0.32-1.28-0.8-1.92-1.04c-5.13-2.08-10.5-3.13-15.96-3.37
	c-0.48,0-0.88-0.08-1.36-0.08c-1.76-0.08-3.61,0.24-5.37,0.48c-1.12,0.08-2.33,0.08-3.45,0.32c-1.52,0.24-2.97,0.8-4.49,1.28
	c-1.36,0.4-2.73,0.64-4.09,1.2c-2.16,0.88-4.25,2.08-6.33,3.29c-0.56,0.4-1.2,0.56-1.68,0.88c-2.57,1.76-5.05,3.69-7.3,6.01
	l-7.54,7.54c-10.1-5.21-20.61-9.62-31.35-13.07V52.02C317.74,26.61,297.05,6,271.71,6h-31.43c-12.67,0-24.21,5.13-32.55,13.47
	c-8.34,8.34-13.47,19.8-13.47,32.55v10.58c-4.41,1.44-8.74,3.13-12.99,4.81c-2.17,0.88-4.33,1.76-6.49,2.73
	c-4.01,1.76-7.94,3.53-11.87,5.53l-7.46-7.54c-18.2-18.2-47.39-17.8-65.11,0L79.2,79.2L68.14,90.27
	c-6.66,6.66-10.9,14.91-12.59,23.65c-0.08,0.4-0.08,0.8-0.16,1.2c-0.88,5.37-0.96,10.9,0.08,16.36c0,0.08,0,0.08,0,0.16
	c1.68,8.66,5.85,17,12.67,23.73l7.54,7.54c-5.21,10.1-9.62,20.61-13.07,31.35H52.02c-8.58,0-16.52,2.41-23.41,6.49
	c-1.68,1.04-3.37,2.16-4.97,3.37c-1.44,1.12-2.81,2.33-4.17,3.69C11.13,216.07,6,227.62,6,240.28v31.43
	c0,17.4,9.78,32.63,24.13,40.41c2.57,1.44,5.37,2.65,8.18,3.53c4.33,1.36,8.98,2.08,13.71,2.08h10.58
	c3.45,10.74,7.86,21.25,13.07,31.35l-7.54,7.46c-13.63,13.63-16.76,33.35-10.1,49.87c0,0.08,0,0.08,0.08,0.16
	c2.24,5.53,5.61,10.66,10.02,15.07l22.13,22.21c2.25,2.24,4.65,4.17,7.14,5.85c1.92,1.28,3.93,2.17,6.01,3.13
	c0.64,0.32,1.28,0.8,1.92,1.04c7.86,3.21,16.44,4.09,24.78,2.81c0.48-0.08,0.88-0.08,1.36-0.16c1.76-0.32,3.53-0.96,5.21-1.52
	c1.12-0.32,2.24-0.48,3.37-0.96c1.36-0.56,2.65-1.36,3.93-2.08c1.36-0.72,2.81-1.28,4.09-2.16c2.65-1.68,5.05-3.61,7.3-5.93
	l7.54-7.54c10.1,5.21,20.61,9.62,31.35,13.07v10.58c0,25.42,20.69,46.02,46.02,46.02h31.43c3.13,0,6.25-0.32,9.22-0.96
	c1.52-0.24,2.97-0.64,4.41-1.12c10.42-3.21,19.24-10.1,25.1-19.16c1.92-3.05,3.61-6.41,4.81-9.94c1.6-4.65,2.49-9.62,2.49-14.83
	v-10.58c10.74-3.45,21.25-7.86,31.35-13.07l7.54,7.54c18.12,18.2,47.31,17.8,65.03,0l22.21-22.21c5.77-5.77,9.54-12.75,11.63-20.21
	c4.25-15.39,0.64-32.55-11.63-44.9l-7.54-7.46c5.21-10.1,9.62-20.61,13.07-31.35h10.58c22.21,0,40.81-15.8,45.06-36.8
	c0.64-2.97,0.96-6.09,0.96-9.22v-31.43C506,231.39,503.43,223.13,499.02,216.07z M256,335.46c-43.86,0-79.46-35.6-79.46-79.46
	c0-43.86,35.6-79.54,79.46-79.54c43.86,0,79.46,35.68,79.46,79.54C335.46,299.86,299.86,335.46,256,335.46z"
      />
    </svg>
  );
};

export default SettingsIcon;
