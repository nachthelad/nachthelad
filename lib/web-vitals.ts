import type { CLSMetric, FCPMetric, INPMetric, LCPMetric, TTFBMetric } from 'web-vitals';

// Function to send web vitals to analytics
function sendToAnalytics(metric: CLSMetric | FCPMetric | INPMetric | LCPMetric | TTFBMetric) {
  // In a real app, you would send this to your analytics service
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
  }
  
  // Example: Send to Google Analytics
  // gtag('event', metric.name, {
  //   event_category: 'Web Vitals',
  //   event_label: metric.id,
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   non_interaction: true,
  // });
}

export function reportWebVitals(metric: CLSMetric | FCPMetric | INPMetric | LCPMetric | TTFBMetric) {
  sendToAnalytics(metric);
}