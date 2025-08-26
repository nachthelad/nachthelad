'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '@/lib/web-vitals';

export function WebVitals() {
  useEffect(() => {
    // Dynamic import to avoid loading web-vitals on server
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      onCLS(reportWebVitals);
      onFCP(reportWebVitals);
      onINP(reportWebVitals); // INP replaced FID in newer versions
      onLCP(reportWebVitals);
      onTTFB(reportWebVitals);
    });
  }, []);

  return null; // This component doesn't render anything
}